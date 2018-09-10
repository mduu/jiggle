const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: "js/[name].bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                loader: "file-loader?name=assets/img/[name].[ext]"
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: "file-loader?name=assets/[name].[ext]"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
            }
        }
    }
};