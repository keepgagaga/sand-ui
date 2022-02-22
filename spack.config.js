const { config } = require('@swc/core/spack')

module.exports = config({
    entry: {
        index: __dirname + '/components/index.js',
    },
    output: {
        path: __dirname + '/lib',
    },
})