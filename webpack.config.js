var webpack = require('webpack'),  
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        app: path.join(srcPath, 'js', 'app.js'),
        vendor: ['react', 'react-router', 'flux', 'classnames', 'keymirror', 'object-assign']
    },
    output: {
        path: path.join(__dirname , 'dist'),
        filename: 'assets/[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
};