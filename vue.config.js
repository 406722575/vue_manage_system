module.exports = {
    css:{
      loaderOptions:{
          sass:{
              prependData: `@import "@/assets/scss/_variable.scss";`
          }
      }
    },
}