const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: {
        main: ['./index.js']
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      //filename: getFilename('js')
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new HtmlWebpackPartialsPlugin([
            {
                path: path.resolve(__dirname, './src/views/partials/header.html'),
                template_filename: '*'
            },
            {
                path: path.resolve(__dirname, './src/views/partials/footer.html'),
                template_filename: '*'
            }
            ])
    ]
};