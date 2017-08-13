const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")//提取出css生成css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const css_extract = new ExtractTextPlugin({
	filename:"progress.css"
});

webpackConfig = {
	entry: path.resolve(__dirname, './src/progress.js'),
	output: {
		path: path.resolve(__dirname, './lib/'),
		filename: 'progress.js',
		publicPath: '/',
		//以下两个选项用于以umd方式打包
		library: "progress",
		libraryTarget: "umd"
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
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	// new OptimizeCssAssetsPlugin({
	// 	assetNameRegExp: /\.css$/g,//匹配要压缩的文件后缀
	// 	cssProcessor: require('cssnano'),//why cssnano？https://github.com/iuap-design/blog/issues/159
	// 	cssProcessorOptions: { discardComments: {removeAll: true } },
	// 	canPrint: true
	// }),
	css_extract
	]
}
webpack(webpackConfig, function (err, stats) {
	if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n\n')
	console.log('pack complete')
})