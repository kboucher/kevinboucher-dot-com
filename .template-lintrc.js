'use strict';

module.exports = {
    extends: [
        'a11y',
        'recommended',
        'stylistic',
    ],
    ignore: [
        'node_modules/**/*',
    ],
    rules: {
        'attribute-indentation': {
            indentation: 4,
        },
        'block-indentation': 4,
        'eol-last': 'off',
        'no-action-modifiers': 'error',
        'no-bare-strings': 'error',
        'no-element-event-actions': 'error',
        'no-model-argument-in-route-templates': 'error',
        'no-mut-helper': 'error',
        'no-nested-interactive': 'warn',
        'no-obscure-array-access': 'error',
        'no-triple-curlies': 'warn',
        'no-unbound': 'warn',
        quotes: 'double',
    },
};
