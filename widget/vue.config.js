module.exports = {
  lintOnSave: false,
  outputDir: "dist",
  productionSourceMap: process.env.NODE_ENV !== "production",

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  filenameHashing: false,
  pages: {
    "servv-widget": {
      entry: "src/main.js",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
