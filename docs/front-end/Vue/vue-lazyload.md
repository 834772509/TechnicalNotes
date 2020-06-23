# 图片懒加载

图片需要显示在屏幕上时，再加载这张图片

## 安装

```npm install vue-lazyload -save```

## 配置

main.js

``` JavaScript
import VueLazyLoad from 'Vue-lazyload'

Vue.use(VueLazyLoad,{
  loading: require(占位加载图片路径),
})
```

## 使用

.vue

将src属性替换为v-lazy

``` HTML
<!-- <img scr=""> -->
<img v-lazy="">
```
