const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// environment
const env = process.env.NODE_ENV || 'development';
const DEV = env === 'development';
const PROD = env === 'production';
const config =
    process.env.NODE_ENV !== 'production' ? require('./webpack.dev.config') : require('./webpack.prod.config');

// directory
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'dist';
const ASSET_PATH = process.env.ASSET_PATH || '/';

const createHTMLWebpackPlugin = htmlPluginOptions =>
    new HtmlWebpackPlugin({
        ...htmlPluginOptions,
        templateParameters: {
            ...htmlPluginOptions.templateParameters,
        },
    });

const common = {
    bail: true,
    entry: path.resolve(__dirname, 'src'),

    output: {
        path: path.resolve(__dirname, OUTPUT_DIR),
        filename: PROD ? '[name].[chunkhash].js' : '[name].[hash].js',
        chunkFilename: PROD ? '[name].[chunkhash].js' : '[name].[hash].js',
        publicPath: ASSET_PATH,
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
        descriptionFiles: ['package.json'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        createHTMLWebpackPlugin({
            template: 'index.ejs',
            filename: 'index.html',
            templateParameters: {
                title: 'New Page',
            },
        }),
    ]
};
module.exports = merge.smart(common, config);