const path = require('path');
const merge = require('webpack-merge');
const configMerge = require('./webpack.modulesMerge');

const config = {
	"mode": 'development',
	entry: './src/client/client.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'public')
	}
};

module.exports = merge(configMerge,config);
