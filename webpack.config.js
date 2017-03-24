var path = require('path')
var ROOT = path.resolve(__dirname)
var webpack = require('webpack')
console.log(process.env.NODE_ENV)
module.exports = {
    entry: {
        bundle: ROOT + '/src/js/app',
        vendors: ['react', 'jquery']
    },
    output: {
        path: ROOT + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: [' ', '.js', '.json', '.jsx', 'sass'],
        alias: {
            common: ROOT + '/src/commonJs/js'
        }
    },
    externals: {
        //'react': 'react',
        '$': 'jquery'
    },
    devServer: {
        contentBase: "./src",
        host: '127.0.0.1',
        port: 3000
    }

}