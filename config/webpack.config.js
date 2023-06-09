'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) =>
    merge(common, {
        entry: {
            options: PATHS.src + '/options.tsx',
            contentScript: PATHS.src + '/contentScript.tsx',
            background: PATHS.src + '/background.ts',
        },
        devtool: argv.mode === 'production' ? false : 'source-map',
    });

module.exports = config;
