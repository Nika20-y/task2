const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const PATHS ={
    src: path.join(__dirname,'../src'),
    dist: path.join(__dirname,'../dist'),
    assets: 'assets/'
}
const PAGES_DIR =`${PATHS.src}/Pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


module.exports={
    externals: {
        paths: PATHS,
    },
    entry: {
        app: PATHS.src,
        datepicker: `${PATHS.src}/Blocks/DateDropdown/datepickerDropdown.js`,
        uiKit: `${PATHS.src}/Pages/UI-kit/uiKit.js`,
        pages: `${PATHS.src}/Pages/Pages.js`,
    },
    output: {
        filename: '[name].bundle.js',
        path: PATHS.dist,
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }},
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap:true,
                        }
                    },
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         sourceMap: true,
                    //         // postcssOptions: {config: path.resolve(__dirname, "../postcss.config.js"),},
                    //     }
                    // },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap:true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         sourceMap: true,
                    //         // postcssOptions: {config: path.resolve(__dirname, "../postcss.config.js"),},
                    //     }
                    // },
                ]
            }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from:`${PATHS.src}/images`, to:`${PATHS.assets}images`},
                {from:`${PATHS.src}/fonts`, to:`${PATHS.assets}fonts`}
            ]
        }),
        new CleanWebpackPlugin (),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template:`${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        new HtmlWebpackPlugin({
            template:`${PAGES_DIR}/UI-kit/cards.pug`,
            filename: `./UI-kit/${'cards.pug'.replace(/\.pug/,'.html')}`,
            inject: true
        }),
        new HtmlWebpackPlugin({
            template:`${PAGES_DIR}/UI-kit/colors.pug`,
            filename: `./UI-kit/${'colors.pug'.replace(/\.pug/,'.html')}`,
            inject: true
        }),
        new HtmlWebpackPlugin({
            template:`${PAGES_DIR}/UI-kit/formElements.pug`,
            filename: `./UI-kit/${'formElements.pug'.replace(/\.pug/,'.html')}`,
            inject: true
        }),
        new HtmlWebpackPlugin({
            template:`${PAGES_DIR}/UI-kit/headersFooters.pug`,
            filename: `./UI-kit/${'headersFooters.pug'.replace(/\.pug/,'.html')}`,
            inject: true
        }),




    ]
}





