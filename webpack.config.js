const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCss=require('mini-css-extract-plugin')
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};
// const PAGES_DIR = `${PATHS.src}/pug/page`
// // вставить папку в которой будут все файлы pug
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
const CopyWebpackPlugin  = require('copy-webpack-plugin')


module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {test: /.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {test: /.(png|jpg|gif|ico)$/,
                use:[
                    {loader: "file-loader"}
                ]
            },
            {test: /.(s*)css$/,
                use:[
                    miniCss.loader,
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
        ]
    },
    plugins: [
        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page.replace(/\.pug/, '.html')}`
        // })),
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new miniCss({
            filename: "[name].css",
        }),
        // new CopyWebpackPlugin([
        //     { from: `${PATHS.src}/images`, to: `${PATHS.dist}/img` }
        // ]),
        // new CopyWebpackPlugin([
        //     { from: `${PATHS.src}/static`, to: `${PATHS.dist}/assets` }
        // ])
    ]
}