const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    //Loaders
    module: {
        rules: [

        //CSS Loaders

          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },

          //Loading images

          {
            test: /\.(png|svg|jpg|grif)$/,
            use: [
                'file-loader',
            ],
          },

          //Loading fonts

          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
          },

          //Loading data

          {
             test: /\.(csv|tsv)$/,
             use: [
               'csv-loader',
             ],
           },
           {
             test: /\.xml$/,
             use: [
               'xml-loader',
             ],
           },
        ],
    },
};

