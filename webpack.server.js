const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const configMerge = require('./webpack.modulesMerge');

const config = {
	"mode": 'development',
	target: 'node',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'build')
	},
	externals: [webpackNodeExternals()]
};
module.exports = merge(configMerge,config);
