module.exports = {
  lintOnSave: false,
  outputDir: "dist",
  filenameHashing: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/wp-content/plugins/servvai/widget/dist/"
      : "/",

  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            enforce: true,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.output.filename("js/[name].js").chunkFilename("js/[name].js");

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },

  pages: {
    "servv-widget": {
      entry: "src/main.js",
      filename: "index.html",
    },
  },
};
