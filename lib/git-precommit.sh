#!/bin/sh

# Ensures that SourceTree references the correct node env
source ~/.bash_profile
export PATH=${PATH}:/usr/local/bin

##
#  Runs linters against staged JavaScript and SCSS files, and
#  rejects commit if errors are present.
#
#  Copy to .git/hooks/pre-commit (no file extension) to enable.
#
#  Requires eslint and stylelint and Bash shell
##

printf "\n\nValidating staged files... \n"

EXIT_CODE=0
JS_ERRORS=0
HBS_ERRORS=0
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"
TEMPLATE_LINT="$(git rev-parse --show-toplevel)/node_modules/.bin/ember-template-lint"
STAGED_JS="$(find app config lib mirage tests -name '*.js' | xargs git diff --diff-filter=d --cached --name-only)"
STAGED_HBS="$(find app -name '*.hbs' | xargs git diff --diff-filter=d --cached --name-only)"
STAGED_SCSS="$(find app/styles/* -name '*.scss' | xargs git diff --diff-filter=d --cached --name-only)"

##
#  Check for staged JS files.
##
printf "\n  Linting JavaScript... \n"

##
#  Lint all staged JS files and exit if errors are found.
##
for FILE in $STAGED_JS
do
    git show ":$FILE" | "$ESLINT" --stdin --stdin-filename "$FILE"
    if [ $? -ne 0 ]; then
        EXIT_CODE=1
        JS_ERRORS=1
    fi
done

if [ -z "$STAGED_JS" ]; then
    printf "\n    No staged JavaScript files found.\n"
else
    if [ $JS_ERRORS -eq 0 ]; then
        printf "\n    \xE2\x9C\x94 JavaScript passed!\n"
    fi
fi

##
#  Check for staged HBS files.
##
printf "\n  Linting HBS templates... \n\n"

##
#  Lint all staged HBS files and exit if errors are found.
##
for FILE in $STAGED_HBS
do
    git show ":$FILE" | "$TEMPLATE_LINT" "$FILE"
    if [ $? -ne 0 ]; then
        EXIT_CODE=1
        HBS_ERRORS=1
    fi
done

if [ -z "$STAGED_HBS" ]; then
    printf "    No staged HBS templates found.\n"
else
    if [ $HBS_ERRORS -eq 0 ]; then
        printf "    \xE2\x9C\x94 HBS passed!\n"
    fi
fi

##
#  Lint all staged SASS (scss) files and exit if errors are found.
##
printf "\n  Linting SCSS files...\n"
if [ -n "$STAGED_SCSS" ]; then
    SCSS_ERRORS=$(./node_modules/.bin/stylelint $STAGED_SCSS --color)
    if [ -n "$SCSS_ERRORS" ]; then
        echo "$SCSS_ERRORS"
        EXIT_CODE=1
    else
        printf "\n    \xE2\x9C\x94 SCSS passed!\n\n"
    fi
else
    printf "\n    No staged SCSS files found.\n\n"
fi

##
# Check exit code and respond accordingly
##
if [ $EXIT_CODE -eq 1 ]; then
    printf "\n✖ Please fix errors and try again.\n\n"
    exit 1
fi
