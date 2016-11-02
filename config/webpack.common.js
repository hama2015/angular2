/**
 * Created by zhao on 2016/10/31.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './config/polyfills.ts',//现代浏览器中运行 Angular 程序时需要的标准填充物
        'vendor': './config/vendor.ts',//提供商依赖  Angular 、 Lodash 、 bootstrap.css
        'app': './src/main.ts' //应用代码
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {   //用于加载 Angular 组件的模板和样式
                test: /\.ts$/,//.ts 模式 一个用于把 TypeScript 代码转译成 ES5 的加载器，它会由 tsconfig.json 文件提供指导
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,//为组件模板准备的加载器
                loader: 'html'// loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,//图片和字体文件也能被打包。
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,//第一个模式匹配应用级样式
                exclude: helpers.root('src/app', './'),//排除了 /src/app 目录下的 .css 文
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,//组件局部样式   raw 加载器把它们加载成字符串
                include: helpers.root('src/app', './'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        //共享依赖等级体系： app -> vendor -> polyfills
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
       //自动为我们注入那些 script 和 link 标签。
        new HtmlWebpackPlugin({
            template: 'index_p.html'
        })
    ]
};