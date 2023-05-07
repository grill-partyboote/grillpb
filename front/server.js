// *********************************************
// IMPORTANT!
// IMPORTANT!
// IMPORTANT! keep in mind that its only dev server
// IMPORTANT!
// IMPORTANT!
// *********************************************
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigCallback = require('./webpack.config.js');
const webpackConfig = webpackConfigCallback({watch: true})

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
	console.log('Starting server...');
	await server.start();
};

runServer();
