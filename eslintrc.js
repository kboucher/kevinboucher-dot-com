/* eslint-disable max-len */

'use strict';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    plugins: [
        'ember',
    ],
    extends: [
        'eslint-config-airbnb-base',
        'eslint:recommended',
        'plugin:ember/recommended',
    ],
    env: {
        browser: true,
    },
    rules: {
        'array-bracket-spacing': [
            'error',
            'never',
            {
                arraysInArrays: false,
            },
        ],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'block-spacing': [
            2,
            'always',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'class-methods-use-this': 'off',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        complexity: [2, 20],
        'dot-location': [
            2,
            'property',
        ],
        'func-names': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': [
            2,
            {
                ignore: [
                    '^@ember',

                    /* '^@ember/test-helpers',
                       '^ember-a11y-testing',
                       '^ember-buffered-array-proxy',
                       '^ember-buffered-proxy',
                       '^ember-cli-file-saver',
                       '^ember-click-outside',
                       '^ember-cp-validations', */
                    '^@ember-data',
                    '^ember-cli-mirage',
                    '^ember-power-select',
                    '^ember-responsive',
                    '^idhub-ui',

                    /* '^ember-light-table',
                       '^ember-responsive',
                       '^ember-test-helpers',
                       '^ic-ajax',
                       'htmlbars-inline-precompile',
                       'jszip', */
                ],
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'lines-around-comment': [
            2,
            {
                allowArrayStart: true,
                allowBlockStart: true,
                allowObjectStart: true,
                beforeBlockComment: true,
                beforeLineComment: true,
            },
        ],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': [
            'error',
            {
                code: 120,
                comments: 160,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'multiline-comment-style': [2, 'bare-block'],
        'newline-per-chained-call': [
            2,
            {
                ignoreChainWithDepth: 3,
            },
        ],
        'no-alert': ['error'],
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-spaces': [
            'error', {
                exceptions: {
                    Property: true,
                },
            },
        ],
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxEOF: 0,
            },
        ],
        'no-nested-ternary': 2,
        'no-param-reassign': [
            2,
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc',
                    'accumulator',
                    'e',
                    'ctx',
                    'req',
                    'request',
                    'res',
                    'response',
                    '$scope',
                    'staticContext',
                ],
            },
        ],
        'no-shadow': ['error'],
        'no-tabs': ['error'],
        'no-trailing-spaces': [
            'error',
        ],
        'no-var': [
            'error',
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'one-var': [
            'error',
            'never',
        ],
        'one-var-declaration-per-line': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            2,
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['multiline-const', 'multiline-let', 'multiline-var'] },
            { blankLine: 'always', prev: ['multiline-const', 'multiline-let', 'multiline-var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: ['*'], next: ['return', 'break', 'multiline-block-like'] },
            { blankLine: 'never', prev: ['block-like'], next: ['block-like'] },
            { blankLine: 'always', prev: ['multiline-block-like'], next: ['multiline-block-like', 'block-like'] },
            { blankLine: 'always', prev: ['break'], next: ['case', 'default'] },
        ],
        'prefer-arrow-callback': 0,
        'prefer-const': [
            'error',
        ],
        'prefer-template': [
            'error',
        ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        semi: [
            'error',
            'always',
        ],
        'space-before-blocks': [
            'error',
            'always',
        ],
        'space-before-function-paren': [
            'error',
            'never',
        ],
        'space-infix-ops': [
            'error',
        ],
        strict: 0,
    },
    overrides: [
        // node files
        {
            files: [
                '.eslintrc.js',
                '.template-lintrc.js',
                'ember-cli-build.js',
                'testem.js',
                'blueprints/*/index.js',
                'config/**/*.js',
                'lib/*/index.js',
                'server/**/*.js',
            ],
            parserOptions: {
                sourceType: 'script',
            },
            env: {
                browser: false,
                node: true,
            },
            plugins: ['node'],
            extends: ['plugin:node/recommended'],
            rules: {
                /* this can be removed once the following is fixed
                   https://github.com/mysticatea/eslint-plugin-node/issues/77 */
                'node/no-unpublished-require': 'off',
            },
        },
        {
            // Test files:
            files: ['tests/**/*-test.{js,ts}'],
            extends: ['plugin:qunit/recommended'],
        },
    ],
};
