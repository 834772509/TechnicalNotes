# css 单位转换插件

## 安装

`npm install postcss-px-to-viewport --save-dev`

## 使用

创建\src\postcss.config

```JavaScript
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      //视窗宽度（设计稿的宽度）
      viewportWidth: 375,
      //视窗高度（设计稿的高度）
      viewportHeight: 667,
      //指定转换后的单位的小数位数
      unitProcision: 5,
      //指定需要转换的单位（建议vw）
      viewportUnit: 'vw',
      //指定不需要转换的类
      selectorBlacckList: ['ignore', 'tab-bar', 'tab-bar-item'],
      //小于或等于1px不转换px
      minPixelValue: 1,
      //允许在媒体查询中转换px
      mediaQuery: false,
      exclude: [/TabBar/],
    }
  }
}
```
