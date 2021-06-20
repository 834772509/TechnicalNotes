# Vite

## 基本概念

Vite 主要由两部分组成：

- 一个开发服务器，它基于原生 ES 模块提供了丰富的内建功能，HMR 的速度非常快速；
- 一套构建指令，它使用 rollup 打开我们的代码，并且它是预配置的，可以输出生成环境的优化过的静态资源；

### ESBuild 的特点

- 超快的构建速度，并且不需要缓存；
- 支持 ES6 和 CommonJS 的模块化；
- 支持 ES6 的 Tree Shaking；
- 支持 Go、JavaScript 的 API；
- 支持 TypeScript、JSX 等语法编译；
- 支持 SourceMap；
- 支持代码压缩；
- 支持扩展其他插件

## 环境搭建

1. 安装 [Node.js](https://nodejs.org/zh-cn/)
2. 配置淘宝镜像: `npm config set registry https://registry.npm.taobao.org`
3. 安装 Vite-CLI: `npm install @vitejs/create-app -g`

- 创建项目: `create-app 项目名称`
- 运行项目: `npm run dev`
- 编译项目: `npm run build`
- 预览项目: `npm run serve`
