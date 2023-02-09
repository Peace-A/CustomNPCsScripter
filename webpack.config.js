const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader"},
      { test: /\.css$/, use: ["style-loader", "css-loader"]},
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'assets/images/'
          //the images will be emited to dist/assets/images/ folder
        }
      }
		]
	},
  devServer: {
    contentBase: __dirname
  },
	output: {
		path: __dirname,
		filename: "index.js"
	},
	plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
    })
  ],
  mode: "production"
}

