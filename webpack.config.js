const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascripts/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'javascripts/main.js'
    },
    module: {
        rules: [
          {
            test: /\.(css|sass|scss)/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.(png|jpg)/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name][ext]'
            },
            use: [
                // {
                //     loader: 'file-loader',
                //     options: {
                //         esModule: false,
                //         name: 'images/[name].[ext]'
                //     },
                // },
            ],
          },
          {
            test: /\.pug/,
            use: [
                {
                    loader: 'html-loader',
                },
                {
                    loader: 'pug-html-loader',
                    options: {
                        pretty: true,
                    }
                }
            ]
          }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/main.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templetes/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templetes/access.pug',
            filename: 'access.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/templetes/members/taro.pug',
            filename: 'members/taro.html'
        }),
        new CleanWebpackPlugin(),
    ],
}
