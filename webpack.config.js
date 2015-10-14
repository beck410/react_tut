var webpack = require('webpack');
module.exports = {
    //tells webpack where entry file is and the server
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    //where bundled files should go
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    //add/remove loaders based on what webpack needs to bundle - put sass loader here
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    },

    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
