# PoctCSS

## 什么是 PostCSS？

- PostCSS 是一个通过 JavaScript 来转换样式的工具；
- 这个工具可以帮助我们进行一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式的重置；
- 但是实现这些功能，我们需要借助于 PostCSS 对应的插件

## 安装

- 安装 postcss: `npm install postcss postcss-cli -D`
- 安装 postcss-loader: `npm install postcss-loader -D`

## 插件

### postcss-preset-env

可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或者运行时环境添加所需的 polyfill

- 安装: `npm install postcss-preset-env -D`

### autoprefixer

自动增加浏览器前缀

- 安装: `npm install autoprefixer -D`

## 使用

- 新建 postcss.config.js

  ```JavaScript
  module.exports = {
    plugins: [require("插件名"), require("插件名")],
  };
  ```

- webpack.config.js

  ```JavaScript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["postcss-loader"],
        },
      ],
    },
  };
  ```
