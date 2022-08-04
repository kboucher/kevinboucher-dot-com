'use strict';

module.exports = {
    opts: {
        destination: 'jsdoc',
        encoding: 'utf8',
        readme: './README.md',
        recurse: true,
        verbose: true,
    },
    plugins: ['plugins/markdown'],
    source: {
        include: ['./app'],
    },
    sourceType: 'module',
    tags: {
        allowUnknownTags: true,
        dictionaries: ['jsdoc'],
    },
    templates: {
        cleverLinks: true,
        monospaceLinks: true,
    },
};
