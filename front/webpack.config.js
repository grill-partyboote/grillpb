const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        entry: path.resolve(__dirname, '.') + '/src/index.tsx',
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
                    test: /\.pcss$/i,
                    use:[
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                        ],
                                    ],
                                    modules: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            modules: [ path.resolve(__dirname, "."), "node_modules"]
        },
        output: {
            filename: "bundle.js",
            path: path.resolve("dist"),
            publicPath: process.env.backend_address || "./",
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: "src/index.html"
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
        },
        watch: true,
        mode: 'development'
    }
}
