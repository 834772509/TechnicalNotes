# 移动端适配

1. 针对不同的手机屏善，设置不同的 font-size 大小
2. 将所有需要适配的图片/元素/字体大小，统一使用 rem

## 媒体查询

```css
/* iphone5 */
@media screen and (min-width: 320px) {
  font-size: 9px;
}
/* iphone6 */
@media screen and (min-width: 375px) {
  font-size: 10px;
}
/* iphone6 plus */
@media screen and (min-width: 414px) {
  font-size: 11px;
}
```

## 动态计算 rem

1. 利用 px 转 rem
   Visual Studio Code 插件：`px to rem`  
   热键：Alt + Z
2. 利用 postcss-pxtorem（最优方案）
3. 利用 less/sass/stylus 的计算能力
