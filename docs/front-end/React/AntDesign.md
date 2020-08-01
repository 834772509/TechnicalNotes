# AntDesign

[AntDesign 组件总览](https://ant.design/components/overview-cn/)

## 基本概念

AntDesign，简称 antd，是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

- 中后台的产品 属于**工具性产品**，很多优秀的设计团队通过自身的探索和积累，形成了自己的设计体系。

### AntDesign 特点

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 React 组件。
- 目使用 TypeScript 开发,提供完整的类型定义文件。
- 源全链路开发和设计工具体系。
- 数十个国际化语言支持。
- 深入每个细节的主题定制能力。

### 全链路开发和设计

全链路这个词是 16 年左右阿里提出的：

- 从业务战略一用户场景一设计目标一交互体验一用户流程一预期效率全方面进行分析和考虑
- 这个主要是产品经理会考虑的一个点

### AntDesign 兼容性

现代浏览器和 IE11（需要 polyfills），antd@2.0 之后不再支持 IE8 , antd@4.0 之后不再支持 IE9/10

## 安装

AntDesign：`npm install antd --save`  
Icon 图标：`npm install --save @ant-design/icons`

## 导入依赖

```js
// ico图标
import Icon from "@ant-design/icons";
// 基础样式
import "antd/dist/antd.css";
```

## 自定义 AntDesign 主题

### 安装 craco

安装 craco ：`npm install @craco/craco --save`  
安装 craco-less ：`npm install craco-less --save`

### 修改启动信息

package.json

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

### 配置信息

新建文件 `项目目录\craco.config.js`

```js
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

### 使用

导入 antd.less

```js
// import 'antd/dist/antd.css'
import "antd/dist/antd.less";
```
