module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables.sass"'
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
