const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        }
      }
    }
  ],
  // webpack
  webpack: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
      "@router": path.resolve(__dirname, "src/router"),
      // 把styledComponent 换成这个引擎
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
