# 微信小程序

## 环境搭建

### 微信开发者工具

[微信开发者工具下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## 配置小程序

小程序的很多开发需求都规定在配置文件中

- 这样做可以更有利于我们的开发效率；
- 并且可以保证开发出来的小程序的某些风格是比较一致的;
- 比如导航栏-顶部TabBar，以及页面路由等等。

### 全局配置

### 页面配置

## 基本语法

### 数据绑定 

- 定义

\页面名.js

```js
Page({
  data: {
    变量名: 值,
  }
})
```

- 使用

\页面名.wxml

``` wxml
<view>{{变量名}}</view>
```
