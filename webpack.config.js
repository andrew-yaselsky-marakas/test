const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputJsFileName = process.env.OUTPUT_JS_FILENAME || 'bundle.min.js';
const outputCssFileName = process.env.OUTPUT_CSS_FILENAME || 'bundle.min.css';
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/js/index.js',
    mode: mode,
    output: {
        path: path.resolve(process.cwd(), 'assets'),
        filename: outputJsFileName,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: outputCssFileName,
        }),
    ],
};
