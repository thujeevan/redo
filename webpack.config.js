module.exports = {
    entry: __dirname + '/src/js/app.js',
    output: {
        path: __dirname + '/dist/assets',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};