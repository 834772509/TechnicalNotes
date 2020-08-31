# 微信小程序

## 基本概念

### 双线程模型

- **WXML 模板和 WXSS 样式**运行于渲染层，渲染层使用 **WebView 线程渲染**（一个程序有多个页面，会使用多个 WebView 的线程）。
- **JS 脚本**（app.js/home.js 等）运行于逻辑层，逻辑 层使用 JsCore 运行 JS 脚本。
- 这两个线程都会经由微信客户端（Native）进行中转 交互。

### 小程序启动流程

## 环境搭建

### 微信开发者工具

[微信开发者工具下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## 配置小程序

小程序的很多开发需求都规定在配置文件中

- 这样做可以更有利于我们的开发效率；
- 并且可以保证开发出来的小程序的某些风格是比较一致的;
- 比如导航栏-顶部 TabBar，以及页面路由等等。

### 全局配置

全局配置位于 `\app.json`

- **pages**
  用于指定小程序由哪些页面组成，每一项都对应一个页面的路径信息。
  **小程序中所有的页面都是必须在 pages 中进行注册**

  ```json
  {
    "pages": ["pages/页面名/页面名", "pages/页面名/页面名"]
  }
  ```

- **window: 全局默认展示**
  用户指定窗口如何展示，其中还包含了很多其他的属性

  ```json
  {
    "window": {
      "navigationBarTitleText": "小程序标题",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTextStyle": "white",
      "backgroundColor": "blue",
      "backgroundTextStyle": "light",
      "enablePullDownRefresh": true
    }
  }
  ```

- **tabBar: 顶部 tab 栏的展示**
  用于定义底部 tab 栏

  ```json
  {
    "tabBar": {
      "list": [
        {
          "pagePath": "pages/页面名/页面名",
          "text": "标题"
        },
        {
          "pagePath": "pages/页面名/页面名",
          "text": "标题"
        }
      ],
      "selectedColor": "#fff"
    }
  }
  ```

### 页面配置

页面配置位于 \页面名\页面名.json

::: tip 提示
页面配置会覆盖全局配置
:::

- **window: 全局默认展示**
  用户指定窗口如何展示，其中还包含了很多其他的属性

  ```json
  {
    "navigationBarTitleText": "小程序标题"
  }
  ```

  - **下拉刷新**

  ```json
  {
    "enablePullDownRefresh": false
  }
  ```

## 基本语法

### 数据绑定

- 定义

\页面名.js

```js
Page({
  data: {
    变量名: 值,
  },
});
```

- 使用

\页面名.wxml

```wxml
<view>{{变量名}}</view>
```
