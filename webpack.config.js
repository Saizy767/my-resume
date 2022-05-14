const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    mode: 'production',
    resolve:{
        extensions: [".tsx", ".js",".ts"],
        fallback:{
            "util": require.resolve("util"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib")
        }
    },
    entry: {
        main: './src/index.tsx',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
        new SourceMapDevToolPlugin({
            filename: "[file].map"
         }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',
                              '@babel/preset-typescript',
                              '@babel/preset-react'
                  ]
                  }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',
                              '@babel/preset-react'
                  ]
                  }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',
                              '@babel/preset-react'
                  ]
                  }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env',
                              '@babel/preset-typescript',
                              '@babel/preset-react'
                              
                  ]
                  }
                }
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|ttf|eot)?$/,
                use: ['file-loader']
            },
            {
                test: /\.(pdf)?$/,
                loader: 'file-loader',
                options: {
                    name: '/files/[name].[ext]'
                }
            },
            {
                test: /\.(png|jp[e]g|svg)?$/,
                loader: 'url-loader',
            },
        ]
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
