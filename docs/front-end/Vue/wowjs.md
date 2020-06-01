# wowjs 插件

WOW.js 使得在页面滚动时展示动画效果，滚动条滚动到哪里就显示一个动画效果

## 安装

```npm install wowjs --save-dev```

## 配置

\src\main.js

``` JavaScript
import wow from 'wowjs'
import 'animate.css'

Vue.prototype.$wow = wow
```

## 使用

 .vue

``` Vue
<template>
  <div>
    <div class="wow 动画样式名称 test_wow1" data-wow-duration="1s"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      new this.$wow.WOW().init()
    }
  }
</script>
```

::: tip 提示
动画样式名称可在[Animate.css](https://daneden.github.io/animate.css)中查询
:::

常用动画样式：

* 淡入：```fadeIn```
* 上移：```slideInUp```
* 下移：```slideInDown```
* 左移：```slideInLeft```
* 右移：```slideInRight```