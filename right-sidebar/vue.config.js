const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"auto",
  configureWebpack: {
    optimization:{
      splitChunks:false
    },
    plugins: [
      new ModuleFederationPlugin({
          name:'rightSidebar',
          filename:'remoteEntry.js',
          exposes:{
              './rightSidebar':'./src/main.js'
          },
          shared:{
            vue:{
              eager:true
            }
          }
      })
    ]
  }  
})
