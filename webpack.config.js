const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'calm-elements.js',
		library: 'calmElements',
		libraryTarget: 'umd',
	},

	resolve: {
		extensions: ['.ts', '.js'],
		modules: [
			path.resolve('./node_modules'),
			path.resolve('./src'),
		],
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
			},
		]
	},
};
