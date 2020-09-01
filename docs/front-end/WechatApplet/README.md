# 微信小程序

## 基本概念

### 双线程模型

- **WXML 模板和 WXSS 样式**运行于渲染层，渲染层使用 **WebView 线程渲染**（一个程序有多个页面，会使用多个 WebView 的线程）。
- **JS 脚本**（app.js/home.js 等）运行于逻辑层，逻辑 层使用 JsCore 运行 JS 脚本。
- 这两个线程都会经由微信客户端（Native）进行中转 交互。

### 界面渲染整体流程

1. 在渲染层，宿主环境会把 WXML 转化成对应的 JS 对象;
2. 将 JS 对象再次转成真实 DOM 树，交由渲染层线程渲染;
3. 将最新变化的内容反映到真实的 DOM 树中，更新 Ul;
4. 数据变化时，逻辑层提供最新的变化数据，JS 对象发生变化比较进行 diff 算法对比;

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

[小程序全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)

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

[小程序页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)

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

## 注册小程序

注册 App 时，一般会做以下事情：

1. 判断小程序的进入场景
2. 监听生命周期函数，在生命周期中执行对应的业务逻辑，比如在某个生命周期函数中获取微信用户的信息。
3. 因为 App()实例只有一个，并且是全局共享的（单例对象），所以我们可以将一些共享数据放在这里。

### 生命周期函数

\app.js

快捷输入：App

```js
// 注册小程序实例
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {},

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {},

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {},
});
```

### 判断小程序的进入场景

[小程序场景值](https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html)

```js
App({
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    switch (options.scene) {
      case 1001:
        // 发现栏小程序主入口
        break;
      case 1005:
        // 微信首页顶部搜索框的搜索结果页
        break;
      default:
        break;
    }
  },
});
```

### 保留全局变量

- 定义

\app.js

```js
App({
  globalData: {
    变量名: 值,
    变量名: 值,
  },
});
```

- 使用

```js
// 获取App()产生的示例对象
const app = getApp();

console.log(app.globalData.变量名);
```

## 注册页面

### 页面声明周期函数

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

## 获取用户信息

### getUserInfo

::: tip 提示
`wx.getUserInfo`接口即将废弃
:::

```js
wx.getUserInfo({
  success: function(res) {
    console.log(res);
  },
});
```

### button 组件

\页面名.wxml

```html
<button open-type="getUserInfo" bindgetuserinfo="事件名">获取用户信息</button>
```

\页面名.js

```js
Page({
  事件名(event) {
    console.log(event.detail.userInfo);
  },
});
```

### open-data 组件展示

open-data 组件只能展示

```html
<!-- 用户名 -->
<open-data type="userNickName"></open-data>
<!-- 用户头像 -->
<open-data type="userAvatarUrl"></open-data>
```
