/* eslint-env node */
/* eslint no-console: 0, prefer-destructuring: 0, prefer-template: 0 */

/**
    Pre-commit hook setup script for Git. Reference should be added to
    package.json <scripts> block:
```
        "scripts": {
            "postinstall": "node lib/post-install.js",
            // ...
        },
```
*/

const fs = require('fs');

const gitDir = './.git/';
const gitHooksDir = `${gitDir}hooks/`;
const gitPreCommitHook = `${gitHooksDir}pre-commit`;
const gitCommitMsgHook = `${gitHooksDir}commit-msg`;
const gitPreCommitScript = './lib/git-precommit.sh';
const gitCommitMsgScript = './lib/git-commitmsg.sh';
const hookAddedMssg = '\n./lib/post-install.js: *** Pre-Commit hook added! ***\n';
const commitMsgHookAddedMssg = '\n./lib/post-install.js: *** Commit-Msg hook added! ***\n';

// Copies pre-commit script to Git hooks folder
function copyPreCommitHook() {
    const reader = fs.createReadStream(gitPreCommitScript);
    const writer = fs.createWriteStream(gitPreCommitHook);

    reader.pipe(writer);

    writer.on('finish', () => {
        console.log(hookAddedMssg);
        fs.chmodSync(gitPreCommitHook, 493);
    });
}

// Copies commit-msg script to Git hooks folder
function copyCommitMsgHook() {
    const reader = fs.createReadStream(gitCommitMsgScript);
    const writer = fs.createWriteStream(gitCommitMsgHook);

    reader.pipe(writer);

    writer.on('finish', () => {
        console.log(commitMsgHookAddedMssg);
        fs.chmodSync(gitCommitMsgHook, 493);
    });
}

try {
    /*
        Trying to copy the pre-commit script causes build errors on the Bamboo
        build box (EACCES: permission denied, open './.git/hooks/pre-commit').

        Therefore, hide this process from bamboo build box.

        TODO: Find a better solution for this.
     */
    if (!process.env.PWD.match(/^\/var\/opt\/bamboo/)) {
        // Ensure permissions
        fs.accessSync(gitDir, fs.constants.R_OK | fs.constants.W_OK);

        // Ensure .git/hooks exists
        if (!fs.existsSync(gitHooksDir)) {
            fs.mkdirSync(gitHooksDir);
        }

        copyPreCommitHook();
        copyCommitMsgHook();
    }
} catch (err) {
    console.log('WARN: Failed to install Git pre-commit and commit-msg hook scripts.');
}
