const path = require('node:path');

module.exports = argv => ({
    entry: {
        main: './scripts/main.js',
        shared: './scripts/shared.js',
        test: './test/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'static', 'scripts'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            ['@babel/plugin-transform-react-jsx', {
                                runtime: 'automatic'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    //CssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg/,
                issuer: /\.(s*)css$/,
                type: 'asset/inline'
            }
        ]
    },
    //devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
    plugins: [
        // new CssExtractPlugin({
        //     filename: 'index.css'
        // })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'react': 'preact/compat',
            'react-dom': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime'
        },
        extensions: ['.jsx', '.js'],
    }
});