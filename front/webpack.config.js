const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules:[
            {
                test: /\.(js|tsx?)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.pcss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve("dist"),
        publicPath: process.env.Domain || "./",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        }),
    ]
}
