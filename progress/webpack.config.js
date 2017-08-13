const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")//提取出css生成css文件

const css_extract = new ExtractTextPlugin({
	filename:"progress.css"
});

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'progress.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.css$/,
			use: css_extract.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					options: {//模块化css
						modules: true,
						localIdentName: '[path][name]__[local]--[hash:base64:5]'
					}
				}, {
					loader: "postcss-loader"
				}]
			})
		}]
	},
	//生成本地服务需要的HTML文件
	plugins: [
	new htmlWebpackPlugin({
		template: path.resolve(__dirname, './src/index.html'),
		inject: 'body'
	}),
	css_extract
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),//服务的基础路径
		compress: true,//压缩
		port: 1555
	}
}