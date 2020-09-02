# 微信小程序

[微信小程序开放文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 环境搭建

### 微信开发者工具

[微信开发者工具下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

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

### 页面生命周期函数

```js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
});
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

## 内置组件

### Text 组件

Text 组件用于显示文本，类似于 span 标签，是行内元素。

- 基本使用

  ```html
  <!-- 基本使用 -->
  <text>内容</text>
  <!-- 换行 -->
  <text>内容\n</text>
  <!-- 长按可选文本（默认情况下Text组件中的文本长按无法选中） -->
  <text selectable>内容</text>
  ```

- 空格大小

  ```html
  <!-- 默认文本空格大小 -->
  <text space="nbsp">内容</text>
  <!-- 半个中文字符空格大小 -->
  <text space="ensp">内容</text>
  <!-- 一个中文字符空格大小 -->
  <text space="emsp">内容</text>
  ```

- 解码文本

  用来解析 HTML 的特殊符号

  ```html
  <text decode>5 &gt; 3</text>
  ```

### Button 组件

- 基本使用

  ```html
  <!-- 普通按钮 -->
  <button>按钮</button>

  <!-- 小按钮（行内块元素） -->
  <button size="mini">按钮</button>

  <!-- 禁用状态 -->
  <button disabled>按钮</button>
  ```

- type 属性

  ```html
  <!-- 绿色按钮 -->
  <button size="mini" type="primary">按钮</button>
  <!-- 白色按钮 -->
  <button size="mini" type="default">按钮</button>
  <!-- 红色按钮 -->
  <button size="mini" type="warn">按钮</button>
  ```

- Loading 效果

  ```html
  <button size="mini" loading="{{true}}">按钮</button>
  ```

- 自定义 hover 样式

  ```html
  <button hover-class="样式名">按钮</button>
  ```

### View 组件

视图组件（块级元素，独占一行，通常用作容器组件）

- 基本使用

```html
<view>内容</view>
```

- 自定义 hover 样式

  ```html
  <view hover-class="样式名">内容</view>

  <!-- 设置按多久出现 hover 效果 -->
  <view hover-class="样式名" hover-start-time="{{0}}">内容</view>

  <!-- 设置松开后保留状态时间 -->
  <view hover-class="样式名" hover-stay-time="{{0}}">内容</view>
  ```

- 指定是否阻止本节点的祖先节点出现点击态（事件冒泡）

  ```html
  <view>
    <view hover-stop-propagation>内容</view>
  </view>
  ```

### Image 组件

Image 组件用于显示图片，行内块级元素

::: tip 提示

- Image 组件可以写双标签，也可以写单标签
- Image 组件默认大小为：320 \* 240
  :::

- 基本使用

  ```html
  <!-- 本地图片 -->
  <image src="/路径/图片名"></image>
  <!-- 网络图片 -->
  <image src="网络图片地址"></image>
  <!-- 懒加载 -->
  <image src="网络图片地址" lazy-load></image>
  ```

- 图片裁剪、缩放的模式

  ```html
  <image src="" mode="模式"></image>
  ```

  | 值           | 说明                                                                                                                                 |
  | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
  | scaleToFill  | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素                                                                |
  | aspectFit    | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。                                       |
  | aspectFill   | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
  | widthFix     | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变                                                                                 |
  | heightFix    | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变                                                                                 |
  | top          | 裁剪模式，不缩放图片，只显示图片的顶部区域                                                                                           |
  | bottom       | 裁剪模式，不缩放图片，只显示图片的底部区域                                                                                           |
  | center       | 裁剪模式，不缩放图片，只显示图片的中间区域                                                                                           |
  | left         | 裁剪模式，不缩放图片，只显示图片的左边区域                                                                                           |
  | right        | 裁剪模式，不缩放图片，只显示图片的右边区域                                                                                           |
  | top left     | 裁剪模式，不缩放图片，只显示图片的左上边区域                                                                                         |
  | top right    | 裁剪模式，不缩放图片，只显示图片的右上边区域                                                                                         |
  | bottom left  | 裁剪模式，不缩放图片，只显示图片的左下边区域                                                                                         |
  | bottom right | 裁剪模式，不缩放图片，只显示图片的右下边区域                                                                                         |

- 监听图片加载完成

  \页面名.wxml

  ```html
  <image src="" bindload="事件名"></image>
  ```

  \页面名.js

  ```js
  事件名(){
    console.log("图片加载完成");
  },
  ```

- 开启长按图片显示识别小程序码菜单

  ```html
  <image src="网络图片地址" show-menu-by-longpress></image>
  ```

- 选择相册中的图片

  \页面名.wxml

  ```html
  <button bindtap="事件名">选择图片</button>
  ```

  \页面名.js

  ```js
  事件名(){
    wx.chooseImage({
      count: 0,
      success: (res)=>{
        console.log(res.tempFilePaths);
      }
    })
  }
  ```

### input 组件

Input 组件用于接收用户的输入信息，也是开发中非常常见的组件

::: tip 提示
Input 组件可以写双标签，也可以写单标签
:::

- 基本使用

  ```html
  <!-- 普通使用 -->
  <input></input>
  <!-- 默认内容 -->
  <input value="默认内容"></input>
  <!-- 提示文字 -->
  <input placeholder="提示信息"></input>
  ```

- 设置输入方式

  ```html
  <!-- 密码输入 -->
  <input password></input>
  ```

- 绑定事件

  \页面名.wxmlz

  ```html
  <input bindinput="获取焦点事件"
              bindfocus="输入事件"
              bindblur="失去焦点事件"
  ></input>
  ```

  \页面名.js

  ```js
  Page({
    获取焦点事件(event) {
      console.log("用户输入内容: ", event);
    },
    输入事件(event) {
      console.log("input获取焦点: ", event);
    },
    失去焦点事件(event) {
      console.log("input失去焦点: ", event);
    },
  });
  ```

- 设置键盘类型

  ```html
  <!-- 文本输入键盘 -->
  <input type="text"></input>
  <!-- 数字输入键盘 -->
  <input type="number"></input>
  <!-- 身份证输入键盘 -->
  <input type="idcard"></input>
  <!-- 带小数点输入键盘 -->
  <input type="digit"></input>
  ```
