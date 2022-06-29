const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|jpeg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath:'assets/img/',
                            useRelativePath:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify:{collapseWhitespace:true,
            removeComments:true,
            removeRedundantAttributes:true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true,
            useShortDoctype:true
}
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}