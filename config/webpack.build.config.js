const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(baseWebpackConfig,{
    mode: 'production',
    devtool: false,
    plugins: []
})
module.exports = new Promise((resolve, reject)=>{
    resolve(buildWebpackConfig)
})
