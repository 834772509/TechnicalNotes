# Webpack

webpack 是一个静态的模块化打包工具，为现代的 JavaScript 应用程序；

- 打包 bundler：webpack 可以将帮助我们进行打包，所以它是一个打包工具
- 静态的 static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
- 模块化 module：webpack 默认支持各种模块化开发，ES Module、CommonJS、AMD 等；
- 现代的 modern：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了 webpack 的出现和发展

![Webpack](./img/Webpack.png)

## 环境搭建

1. 安装 [Node.js](https://nodejs.org/zh-cn/)
2. 配置淘宝镜像: `npm config set registry https://registry.npm.taobao.org`
3. 安装 Webpack、webpack-cli: `npm install webpack webpack-cli -g`

## 打包

### 基本使用

1. 初始化项目: `npm init -y`
2. 安装开发依赖: `npm install webpack webpack-cli -D`
3. 在 package.json 中创建 scripts 脚本: `"build": "webpack"`，执行脚本`npm run build`即可打包

### 配置文件

新建`webpack.config.js`文件

```js
const path = require("path");

module.exports = {
  entry: "./src/入口文件名.js",
  output: {
    path: path.resolve(__dirname, "./编译目录名"),
    filename: "打包文件名.js",
  },
};
```

### 打包 CSS

1. 安装样式加载器: `npm install css-loader style-loader -D`
2. 使用加载器

- 配置方式(推荐)

  webpack.config.js

  ```JavaScript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  }
  ```

- 内联方式

  内联方式使用较少，因为不方便管理；

  ```JavaScript
  import "css-loader!../CSS路径";
  ```
