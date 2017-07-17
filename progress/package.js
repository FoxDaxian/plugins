const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")//提取出css生成css文件

const css_extract = new ExtractTextPlugin({
	filename:"progress.css"
});

webpackConfig = {
	entry: path.resolve(__dirname, './src/progress.js'),
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
				use: ["css-loader","postcss-loader"]
			})
		}]
	},
	//生成本地服务需要的HTML文件
	plugins: [
	css_extract
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),//服务的基础路径
		compress: true,//压缩
		port: 1555
	}
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