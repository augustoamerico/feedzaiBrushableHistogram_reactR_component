var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'srcjs', 'feedzaiBrushableHistogram.jsx'),
    output: {
        path: path.join(__dirname, 'inst', 'www', '${package}', 'feedzaiBrushableHistogram'),
        path: path.join(__dirname, 'inst/www/feedzaiBrushableHistogram/feedzaiBrushableHistogram'),
        filename: 'feedzaiBrushableHistogram.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
	    {
                test: /\.css$/,  
                include: /node_modules/,  
                loaders: ['style-loader', 'css-loader'],
 	     }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
