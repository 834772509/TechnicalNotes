# 微信小程序

[微信小程序开放文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 环境搭建

### 注册 AppID(小程序 ID)

[注册 AppID](https://mp.weixin.qq.com/)

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
  onLaunch: function () {},

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {},

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {},
});
```

### 判断小程序的进入场景

[小程序场景值](https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html)

```js
App({
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
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
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
```

## 获取用户信息

### getUserInfo

::: tip 提示
`wx.getUserInfo`接口即将废弃
:::

```js
wx.getUserInfo({
  success: function (res) {
    console.log(res);
  },
});
```

### button 组件

\页面名.wxml

```xml
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

```xml
<!-- 用户名 -->
<open-data type="userNickName"></open-data>
<!-- 用户头像 -->
<open-data type="userAvatarUrl"></open-data>
```

## 内置组件

[微信小程序组件](https://developers.weixin.qq.com/miniprogram/dev/component/)

### Text 组件

Text 组件用于显示文本，类似于 span 标签，是行内元素。

- 基本使用

  ```xml
  <!-- 基本使用 -->
  <text>内容</text>
  <!-- 换行 -->
  <text>内容\n</text>
  <!-- 长按可选文本（默认情况下Text组件中的文本长按无法选中） -->
  <text selectable>内容</text>
  ```

- 空格大小

  ```xml
  <!-- 默认文本空格大小 -->
  <text space="nbsp">内容</text>
  <!-- 半个中文字符空格大小 -->
  <text space="ensp">内容</text>
  <!-- 一个中文字符空格大小 -->
  <text space="emsp">内容</text>
  ```

- 解码文本

  用来解析 HTML 的特殊符号

  ```xml
  <text decode>5 &gt; 3</text>
  ```

### Button 组件

- 基本使用

  ```xml
  <!-- 普通按钮 -->
  <button>按钮</button>

  <!-- 小按钮（行内块元素） -->
  <button size="mini">按钮</button>

  <!-- 禁用状态 -->
  <button disabled>按钮</button>
  ```

- type 属性

  ```xml
  <!-- 绿色按钮 -->
  <button size="mini" type="primary">按钮</button>
  <!-- 白色按钮 -->
  <button size="mini" type="default">按钮</button>
  <!-- 红色按钮 -->
  <button size="mini" type="warn">按钮</button>
  ```

- Loading 效果

  ```xml
  <button size="mini" loading="{{true}}">按钮</button>
  ```

- 自定义 hover 样式

  ```xml
  <button hover-class="样式名">按钮</button>
  ```

### View 组件

视图组件（块级元素，独占一行，通常用作容器组件）

- 基本使用

```xml
<view>内容</view>
```

- 自定义 hover 样式

  ```xml
  <view hover-class="样式名">内容</view>

  <!-- 设置按多久出现 hover 效果 -->
  <view hover-class="样式名" hover-start-time="{{0}}">内容</view>

  <!-- 设置松开后保留状态时间 -->
  <view hover-class="样式名" hover-stay-time="{{0}}">内容</view>
  ```

- 指定是否阻止本节点的祖先节点出现点击态（事件冒泡）

  ```xml
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

  ```xml
  <!-- 本地图片 -->
  <image src="/路径/图片名"></image>
  <!-- 网络图片 -->
  <image src="网络图片地址"></image>
  <!-- 懒加载 -->
  <image src="网络图片地址" lazy-load></image>
  ```

- 图片裁剪、缩放的模式

  ```xml
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

  ```xml
  <image src="" bindload="事件名"></image>
  ```

  \页面名.js

  ```js
  事件名(){
    console.log("图片加载完成");
  },
  ```

- 开启长按图片显示识别小程序码菜单

  ```xml
  <image src="网络图片地址" show-menu-by-longpress></image>
  ```

- 选择相册中的图片

  \页面名.wxml

  ```xml
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

  ```xml
  <!-- 普通使用 -->
  <input></input>
  <!-- 默认内容 -->
  <input value="默认内容"></input>
  <!-- 提示文字 -->
  <input placeholder="提示信息"></input>
  ```

- 设置输入方式

  ```xml
  <!-- 密码输入 -->
  <input password></input>
  ```

- 绑定事件

  \页面名.wxmlz

  ```xml
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

  ```xml
  <!-- 文本输入键盘 -->
  <input type="text"></input>
  <!-- 数字输入键盘 -->
  <input type="number"></input>
  <!-- 身份证输入键盘 -->
  <input type="idcard"></input>
  <!-- 带小数点输入键盘 -->
  <input type="digit"></input>
  ```

### Scroll-view 组件

Scroll-view 可以实现局部滚动

- 水平滚动

  \页面名.wxml

  ```xml
  <scroll-view scroll-x class="container1">
    <view wx:for="{{10}}" class="item1">{{item}}</view>
  </scroll-view>
  ```

  \页面名.wxss

  ```css
  .container1 {
    background: purple;
    white-space: nowrap;
  }

  .item1 {
    width: 100px;
    height: 100px;
    margin: 10px;
    display: inline-block;
    background: red;
  }
  ```

- 垂直滚动

  ::: tip 提示
  需要设置`scroll-view`的宽度
  :::

  \页面名.wxml

  ```xml
  <scroll-view scroll-y class="container2">
    <view wx:for="{{10}}" class="item2">{{item}}</view>
  </scroll-view>
  ```

  \页面名.wxss

  ```css
  .container2 {
    background: orange;
    height: 200px;
    margin-top: 20px;
  }

  .item2 {
    height: 100px;
    background: blue;
    margin: 10px;
  }
  ```

- 监听事件

  \页面名.wxml

  ```xml
  <scroll-view bindscroll="事件名"></scroll-view>
  ```

  \页面名.js

  ```js
  Page({
    事件名(event) {
      console.log("正在滚动", event);
    },
  });
  ```

### slider 组件

slider 是进度条组件，可以随意拖动。value 属性为默认进度

```xml
<slider value="50"></slider>
```

### 组件共有属性

::: tip 提示
除 String 类型外，其他类型需要使用`属性名="{{值}}"`形式
:::

| 属性名           | 类型         | 描述           | 注解                                     |
| ---------------- | ------------ | -------------- | ---------------------------------------- |
| id               | String       | 组件的唯一标示 | 保持整个页面唯一                         |
| class            | String       | 组件的样式类   | 在对应的 WXSS 中定义的样式类             |
| style            | String       | 组件的内联样式 | 可以动态设置的内联样式                   |
| hidden           | Boolean      | 组件是否显示   | 所有组件默认显示                         |
| data\-\*         | Any          | 自定义属性     | 组件上触发的事件时，会发送给事件处理函数 |
| bind\* / catch\* | EventHandler | 组件的事件     | 详见事件                                 |

## WXSS

WXSS 主要用来写样式，优先级依次是： 行内样式 > 页面样式 > 全局样式

### 尺寸单位 - rpx

::: tip 提示
开发微信小程序时设计师可以用 `iPhone6` 作为视觉稿标准
:::

rpx (responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。
如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

### 行内样式

\页面名.wxml

```xml
<view style="属性名: 属性值;">内容</view>

<view style="color: red;">内容</view>
```

### 页内样式

\页面名.wxml

```xml
<view class="类名">内容</view>
```

\页面名.wxss

```css
.类名 {
  属性名: 属性值;
}
```

### 全局样式

\页面名.wxml

```xml
<view class="类名">内容</view>
```

\app.wxss

```css
.类名 {
  属性名: 属性值;
}
```

### 样式导入

在某些情况下，我们可能会将样式分在多个 wxss 文件中，方便对样式的管理。这个时候，我们就可以使用样式导入，来让单独的 wxss 生效

```css
@import "wxss路径";
```

### 官方样式库

::: tip 提示
导入项目时需要导入`dist`目录
:::

为了减少开发者样式开发的工作量，小程序官方提供了 [WeUI.wxss 基本样式库](https://github.com/Tencent/weui-wxss)

## WXML

### WXML 基本格式

- 类似于 HTML 代码：比如可以写成单标签，也可以写成双标签
- 必须有严格的闭合：没有闭合会导致编译错误
- 大小写敏感：class 和 Class 是不同的属性

### Mustache 语法

```xml
<!-- 基本使用 -->
<view>{{变量名}}</view>

<!-- 拼接 -->
<view>{{变量名}} {{变量名}}</view>
<view>{{变量名}}+ " " + {{变量名}}</view>

<!-- 三元运算符 -->
<view>{{变量名 条件 ? 成立值 : 不成立值}}</view>

<!-- 绑定属性 -->
<view class="{{isActive ? '类名' : ''}}">内容</view>
```

### 逻辑判断

- wx:if

  wx:if 用于控制元素的 显示/隐藏

  ::: tip 提示
  与 hidden 属性的区别是：wx:if 隐藏后该组件不存在（没有创建），而 hidden 属性隐藏后依然存在

  - 如果显示和隐藏切换的频繁非常高，选择使用 hidden
  - 如果显示和隐藏切换的频繁非常低，选择使用 wx:if

  :::

  ```xml
  <view wx:if="{{true}}">内容</view>
  ```

- wx:elif、wx:else

  ```xml
  <view wx:if="{{变量名 >=90}}">优秀</view>
  <view wx:elif="{{变量名 >=80}}">良好</view>
  <view wx:elif="{{变量名 >=60}}">及格</view>
  <view wx:else>不及格</view>
  ```

### 列表渲染

wx:for 用于列表渲染

```xml
<!-- 遍历数组 -->
<view wx:for="{{数组名}}" key="{{index}}">{{index}}: {{item}}</view>

<!-- 遍历字符串 -->
<view wx:for="coderwhy" key="{{index}}">{{item}}</view>

<!-- 遍历数字（指定次数） -->
<view wx:for="{{10}}" key="{{index}}">{{item}}</view>

<!-- 自定义item、index名称 -->
<view wx:for="{{数组名}}" wx:for-item="item名称" wx:for-index="index名称" key="{{index名称}}"
  >{{index名称}}: {{item名称}}</view
>
```

- key 属性

key 属性的作用主要是为了高效的更新虚拟 DOM

```xml
<view wx:for="{{数组名}}" key="{{index}}">{{index}}: {{item}}</view>
```

### block 标签

我们希望对这一组组件标签进行整体的操作，或者某些情况下，我们需要使用 wx:if 或 wx:for 时，这个时候应该使用 block 标签。

::: tip 提示
`<block/>`并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性（`wx:*`属性，不接受`class`等属性）
:::

```xml
<view wx:if="{{isShow}}">
  <button>按钮</button>
  <view>内容</view>
  <text>内容</text>
</view>
```

使用 block 有两个好处:

1. 将需要进行遍历或者判断的内容进行包裹。
2. 将遍历和判断的属性放在 block 便签中，不影响普通属性的阅读，提高代码的可读性。

### 模板

::: tip 提示
早些时候小程序不支持自定义组件，为了进行代码复用而使用模板
:::

WXML 提供模板(template) ,可以在模板中定义代码片段，在不同的地方调用。(是一 -种 wxml 代码的复用机制)

- 定义模板

  ```xml
  <template name="模板名">
    <view>{{参数名}}</view>
  </template>
  ```

- 使用模板

  ```xml
  <template is="模板名" data="{{参数名: 值}}"></template>
  ```

### 导入

wxml 中不能递归引入(也就是 A 引入了 B 的 template,不会引入 B 中引入 C 的 template)

- import 导入：可以导入模板
- include 导入：将目标文件中除了 `<template />`、`<wxs/>`外的整个代码引入，相当于是拷贝到 include 位置

```xml
<!-- import 导入 -->
<import src="/wxml路径" />

<!-- include导入 -->
<include src="/wxml路径" />
```

## WXS

WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。

- 官方: WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。(不过基本一 致)

### 为什么要设计 WXS 语言呢？

- 在 WXML 中是不能直接调用 Page/Component 中定义的函数的.
- 但是某些情况，我们可以希望使用函数来处理 WXML 中的数据(类似于 Vue 中的过滤器)，这个时候就使用 WXS 了

### WXS 使用的限制和特点

- WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。
- WXS 函数不能作为组件的事件回调。
- 由于运行环境的差异，在 ios 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异。

### WXS 定义方式

::: warning 注意
WXS 只能使用 ES5 语法，不兼容 ES6 语法
:::

- 直接在 WXML 中定义

  ```xml
  <!-- 定义 -->
  <wxs module="WXS名">
    var 变量名  = "值";

    function 函数名(参数名){
      return 参数名;
    }

    module.exports = {
      变量名: 变量名,
      函数名: 函数名,
    }
  </wxs>

  <!-- 使用 -->
  <view>{{WXS名.变量名}}</view>
  <view>{{WXS名.函数名(值)}}</view>
  ```

- 定义在单独的 WXS 文件，再导入使用

  **定义**

  新建 \页面名.wxs

  ```js
  var 变量名 = "值";

  var 函数名 = function (参数名) {
    return 参数名;
  };

  module.exports = {
    变量名: 变量名,
    函数名: 函数名,
  };
  ```

  **使用**

  ::: tip 提示
  导入 wxs 中，不能使用绝对路径，必须使用相对路径
  :::

  ```xml
  <wxs src="./WXS名.wxs" module="WXS名"></wxs>

  <view>{{WXS名.变量名}}</view>
  <view>{{WXS名.函数名(值)}}</view>
  ```

## 事件

### 什么时候会产生事件

- 小程序需要经常和用户进行某种交互，比如点击界面上的某个按钮或者区域，比如滑动了某个区域
- 这些交互都会产生各种各样的事件

### 事件时如何处理呢

- 事件是通过 bind/catch 这个属性绑定在组件上的（和普通的属性写法很相似，以 key= "value" 形式）
- key 以 bind 或 catch 开发，从 1.5.0 版本开始，可以在 bind 和 catch 后加上一个冒号
- 同时在当前页面的 Page 构造器中定义对应的事件处理函数 tapName，如果没有对应的函数，触发事件时会报错
- 当用户点击该 button 区域时，达到触发条件生成事件 tap,该事件处理函数 tapName 会被执行，同时还会收到一个事件对象 event。

### 组件事件

- button 按钮

  \页面名.wxml

  ```xml
  <button bindtap="事件名">按钮</button>
  ```

  \页面名.js

  ```js
  Page({
    事件名() {
      console.log("按钮发生点击");
    },
  });
  ```

### 事件参数传递

\页面名.wxml

```xml
<button bindtap="事件名" data-参数名="{{值}}" data-参数名="{{值}}">按钮</button>
```

\页面名.js

```js
Page({
  事件名(event) {
    const { 参数名, 参数名 } = event.currentTarget.dataset;
    console.log(参数名, 参数名);
  },
});
```

### 常见事件类型

\页面名.wxml

```xml
<view
  bind:touchstart="handleTouchStart"
  bind:touchmove="handleTouchMove"
  bind:touchend="handleTouchEnd"
  bind:tap="handleTap"
  bind:longpress="handleLongpress"
></view>
```

\页面名.js

```js
Page({
  handleTouchStart() {
    console.log("手指触摸动作开始");
  },
  handleTouchMove() {
    console.log("手指触摸后移动");
  },
  handleTouchEnd() {
    console.log("手指触摸动作结束");
  },
  handleTap() {
    console.log("手指触摸后马上离开");
  },
  handleLongpress() {
    console.log("手指触摸后，超过350ms再离开");
  },
});
```

### 事件对象

| 属性           | 类型    | 说明                                         | 基础库版本 |
| -------------- | ------- | -------------------------------------------- | ---------- |
| type           | String  | 事件类型                                     |            |
| timeStamp      | Integer | 事件生成时的时间戳                           |            |
| target         | Object  | 触发事件的组件的一些属性值集合               |            |
| currentTarget  | Object  | 当前组件的一些属性值集合                     |            |
| mark           | Object  | 事件标记数据                                 | 2\.7\.1    |
| detail         | Object  | 额外的信息                                   |            |
| touches        | Array   | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |            |
| changedTouches | Array   | 触摸事件，当前变化的触摸点信息的数组         |            |

- touches 和 changedTouches 区别

  - touches: 当前屏幕上所有触摸点的列表
  - changedTouches: 触发事件时改变的触摸点的集合

- target 和 currentTarget 区别

  - target: 产生事件的 view
  - currentTarget: 触发事件的 view

### 事件冒泡

事件冒泡：事件除了触发本级，还会向父级传递

- bind: 一层层传递
- catch: 阻止事件的进一步传递

```xml
<view catchtap="事件名1">
	<view catchtap="事件名2">
		<view catchtap="事件名3"></view>
	</view>
</view>
```

### 事件捕获

```xml
<view capture-bind:tap="事件名" > </view>
```

## 组件

### 什么是组件化

- 如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展。
- 但如果，我们将一个页面拆分成一个个小的功能块，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了。

### 创建自定义组件

::: warning 注意

- 组件名只能是 小写字母、下划线、中划线、数字 的组合
- 组件名不能以`wx`作为前缀，否则会报错
  :::

1. 创建目录 \components\组件名
2. 右键组件名目录->新建 components->输入组件名

### 注册自定义组件

- 局部注册组件

  \页面名\components.json

  ```json
  {
    "usingComponents": {
      "组件名": "/components/组件名/组件名"
    }
  }
  ```

- 全局注册组件

  \app.json

  ```json
  {
    "usingComponents": {
      "组件名": "/components/组件名/组件名"
    }
  }
  ```

### 使用自定义组件

```xml
<组件名></组件名>
```

### 自定义组件样式

- **组件内不能使用 id 选择器、属性选择器、标签选择器**
- 组件内的 class 样式，只对组件 wxml 内的节点生效，对于引用组件的 Page 页面不生效

### 使自定义组件样式可以相互影响

::: tip 提示

- isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响(默认取值) ;
- apply-shared 表示页面 WXSS 样式将影响到自定义组件，但自定义组件 WXSS 中指定的样式不会影响页面;
- shared 表示页面 WXSS 样式将影响到自定义组件，自定义组件 WXSS 中指定的样式也会影响页面和其他设置了
  :::

```js
Component({
  options: {
    styleIsolation: "apply-shared",
  },
});
```

### 组件传参

- 接收参数

  \组件名.js

  ```js
  Component({
    properties: {
      // 基础写法
      参数名: 数据类型,

      // 详细写法（推荐）
      参数名: {
        type: 数据类型,
        value: 默认值,
        // 监听数据变化（可省略）
        observer: function (newValue, oldValue) {
          console.log(newValue, oldValue);
        },
      },
    },
  });
  ```

  \组件名.wxml

  ```xml
  <view>{{参数名}}</view>
  ```

- 传递参数

  \页面名.wxml

  ```xml
  <组件名 参数名="值"></组件名>
  ```

### 组件传递样式

- 接收参数

  \组件名.js

  ```js
  Component({
    externalClasses: ["样式名"],
  });
  ```

  \组件名.wxml

  ```xml
  <view class="样式名"></view>
  ```

- 传递参数

  \页面名.wxml

  ```xml
  <组件名 样式名="类名"></组件名>
  ```

  \页面名.wxss

  ```css
  .类名 {
    属性名: 值;
  }
  ```

### 自定义事件传递

- 发射事件

  \组件名.js

  ```js
  // 仅传递事件
  this.triggerEvent("事件名", {}, {});
  // 传递参数
  this.triggerEvent("事件名", { 参数名: 值 }, {});
  ```

- 接收事件

  \页面名.wxml

  ```xml
  <组件名 bind:事件名="事件函数名"></组件名>
  ```

  \页面名.js

  ```js
  Page({
    事件函数名(event) {
      console.log("事件传递");
      // 访问参数
      console.log(event.detail.参数名);
    },
  });
  ```

### 获取组件对象

\页面名.wxml

```xml
<组件名 id="对象ID"></组件名>
```

\页面名.js

```js
const 组件对象 = this.selectComponent("#对象ID");

// 调用组件内的方法
组件对象.方法名();

// 直接修改组件内的数据（不推荐）
组件对象.setData({
  变量名: 组件对象.data.变量名 + 1,
});
```

## 插槽

### 什么是插槽

- 插槽是为了让我们封装的组件更加具有扩展性。
- 让使用者可以决定组件内部的一些内容到底展示什么。

### 单个插槽

- 定义

  \组件名.wxml

  ```xml
  <slot></slot>
  ```

- 使用

  \页面名.wxml

  ```xml
  <组件名>
    <view>插槽内容</view>
  </组件名>
  ```

### 多个插槽

- 定义

  \组件名.js

  ```js
  Component({
    options: {
      multipleSlots: true,
    },
  });
  ```

  \组件名.wxml

  ```xml
  <slot name="插槽名"></slot>
  <slot name="插槽名"></slot>
  ```

- 使用

  \页面名.wxml

  ```xml
  <组件名>
    <view slot="插槽名">插槽内容</view>
    <view slot="插槽名">插槽内容</view>
  </组件名>
  ```

## 网络请求

### 配置服务器域名

每个微信小程序需要事先设置通讯域名，小程序只可以跟指定的域名进行网络通信。包括普通 HTTPS 请求（wx.request）、上传文件（wx.uploadFile）、下载文件（wx.downloadFile) 和 WebSocket 通信（wx.connectSocket）。

从基础库 2.4.0 开始，网络接口允许与局域网 IP 通信，但要注意 不允许与本机 IP 通信。

### 基本使用

- GET 请求

```js
wx.request({
  url: "URL",
  // 携带参数
  data: {
    参数名: 值,
  },
  success: function (res) {
    console.log(res);
  },
  fail: function (err) {
    console.log(err);
  },
});
```

- POST 请求

```js
wx.request({
  url: "URL",
  method: "POST",
  // 携带参数
  data: {
    参数名: 值,
  },
  success: function (res) {
    console.log(res);
  },
  fail: function (err) {
    console.log(err);
  },
});
```

### 请求函数封装


