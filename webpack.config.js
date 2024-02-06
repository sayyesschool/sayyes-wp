const path = require('node:path');

module.exports = argv => ({
    entry: './scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'scripts.js'
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
    devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
    plugins: [
        // new CssExtractPlugin({
        //     filename: 'index.css'
        // })
    ],
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'react': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime',
            'react-dom': 'preact/compat'
        },
        extensions: ['.jsx', '.js'],
    }
});