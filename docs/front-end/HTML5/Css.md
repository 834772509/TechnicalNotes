# CSS

## 常用技巧

### 导入CSS

``` HTML
<link rel="stylesheet" type="text/css" href="CSS文件路径">
```

### 美化进度条

``` CSS
::-webkit-scrollbar {
  width: .5rem;
  height: .5rem;
  background: hsla(0, 0%, 100%, 0.6);
}
::-webkit-scrollbar-track {
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: rgb(66,66,66);
  transition: all .2s;
  border-radius: .5rem;
}
```

## 选择器

### ID选择器

``` CSS
#ID名称
{
  属性名称: 值;
}
```

### Class选择器

``` CSS
.Class名称
{
  属性名称: 值;
}
```

## 单位

* px：固定的像素
* em：相对父元素字体的大小
* rem：相对于根元素（HTML）的大小
* %：取决于应用的属性(比如字体的百分比相对于父元素的字体,宽度的百分比相对于父元素的宽度)

## 字体

### 网络字体

``` CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址);
}
```

加载多个字体格式（适配兼容性）

``` CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址),
        url(字体网址),
        url(字体网址);
}
```

### 字体图标

``` CSS
@font-face {
  font-family: 字体名称;
  src: url(字体图标网址),
        url(字体图标网址),
        url(字体图标网址);
}
```

常规使用

``` HTML
<span>字体图标代码</span>
```

伪元素

``` HTML
<span class="iconfont 字体图标名称"></span>
```

::: tip 提示
也可直接引入下载的CSS（注意增加class）
:::

## CSS动画

### transition

``` CSS
transition: property[过渡属性] duration[过渡时间] timing-function[过渡方式] delay[延时时间];
```

``` CSS
#box{
  width:100px;
  background-color: black;
  transition: all 0.5s ease;
  transition: all 0.5s ease 1s;
}

#box:hover{
  width:200px;
  background-color:red;
}
```

::: tip 提示
参数1为需要过渡的属性如"width"  ，all表示所有属性都过渡
参数2为过渡时间，默认为0秒
参数3为过度方式，一般为"ease"

* ease : 规定慢速开始，然后变快
* ease-in : 以慢速开始
* ease-out : 以慢速结束
* linear : 以相同速度开始至结束
参数4为延时触发过度的时间

:::

### transform

2D转换 : translate  
3D转换 : translate3d

#### translate 移动

``` CSS
transform: translate(X,Y);
```

#### rotate 旋转

``` CSS
transform: rotate(角度deg);
```

#### scale 缩放

``` CSS
transform: scale(缩放的倍数);
```

#### skew 倾斜

``` CSS
transform: skew(X轴倾斜度数deg,Y轴倾斜度数deg);
```

#### 无限旋转

``` CSS
@keyframes rotate{
  from{transform: rotate(0deg)}
  to{transform: rotate(360deg)}
}
#img {
  animation: rotate 3s linear infinite;
}
```

### perspective 向屏幕内侧倾斜

``` CSS
transform: perspective()
```

## 移动端适配

1. 针对不同的手机屏善，设置不同的font-size大小
2. 将所有需要适配的图片/元素/字体大小，统一使用rem

### 媒体查询

``` css
/* iphone5 */
@media screen and (min-width: 320px){
  font-size: 9px;
}
/* iphone6 */
@media screen and (min-width: 375px){
  font-size: 10px;
}
/* iphone6 plus */
@media screen and (min-width: 414px){
  font-size: 11px;
}
```

### 通过JS

### 动态计算rem

1. 利用px转rem
  Visual Studio Code 插件：```px to rem```  
  热键：Alt + Z
2. 利用postcss-pxtorem（最优方案）
3. 利用less/sass/stylus的计算能力

## Flex布局

### 基本概念

flex布局是目前web开发中使用最多的布局方案：  
flex 布局( Flexible布局,弹性布局)  
目前特别在移动端用的最多，目前PC端也使用越来越多了  

两个重要概念：

* 开启了 flex 布局的元素叫 **flex container**
* flex container 里面的直接子元素叫做**flex items**

### 开启flex布局

块级元素

``` CSS
.box{
  display: flex;
}
```

行内元素

``` CSS
.box{
  display: inline-flex:
}
```

### 应用在flex container上的CSS属性（父）

#### flex-flow

flex-flow是 flex-direction || flex-wrap 的简写

``` CSS
.box{
  /* 从左到右、多行 */
  flex-flow: row wrap;
}
```

#### flex-direction

决定主轴（X轴）的方向

* row: 从左到右(默认)
* row-reverse: 从右到左
* column: 从上到下
* column-reverse: 从下到上

#### flex-wrap

决定了flex container是单行还是多行

* nowrap: 单行显示（默认）
* wrap: 多行
* wrap-reverse: 反转主轴（X轴）和交叉轴（Y轴）

::: tip 提示
默认情况下，所有的flex item都会在同一行显示(nowrap)
:::

#### justify-content

决定了flex items在主轴（X轴）上的对齐方式

* flex-start: 与起始位置对齐
* center: 居中对齐
* flex-end: 与终止位置对齐
* space-evenly: 将item均等分开，item 之间的距离相等
* space-around: item 之间的距离相等且两边空出一部分（距离是item间距的一半）

#### align-items

决定了flex items在交叉轴（Y轴）上的对齐方式

* flex-start: 与起始位置对齐
* center: 居中对齐
* flex-end: 与终止位置对齐
* baseline: 与基准线对齐
* stretch: 自动拉伸
* normal: 自动拉伸

#### align-content

决定了 **多行** flex items在交叉轴（Y轴）上的对齐方式，用法与justify-content类似

* stretch: 自动拉伸 (默认值)
* flex-start: 与起始位置对齐（依次对齐）
* center :居中对齐
* flex-end: 与终止位置对齐
* space-between: flex items之间的距离相等，与cross start、 cross end两端对齐
* space-around: item 之间的距离相等且两边空出一部分（距离是item间距的一半）
* space-evenly: 将item均等分开，item 之间的距离相等

### 应用在flex items上的CSS属性（子）

#### flex（了解）

flex-grow || flex-shrink I| flex-basis的简写,flex属性可以指定1个, 2个或3个值

单值语法：值必须为以下其中之一：

* 一个无单位数(```<number>```):它会被当作```<flex-grow>``` 的值
* 一个有效的宽度(width)值:它会被当作```<flex-basis>```的值
* 关键字nohe , auto或initial

双值语法：  
第一个值必须为一个无单位数,并且它会被当作```<flex-grow>```的值
第二个值必须为以下之一：

* 一个无单位数:它会被当作```<flex-shrink>```的值
* 一个有效的宽度值:它会被当作< flex-basis> 的值

三值语法:

* 第一个值必须为一个无单位数，并且它会被当作```<flex-grow>```的值
* 第二个值必须为一个无单位数，并且它会被当作< flex-shrink>的值
* 第三个值必须为一个有效的宽度值，并且它会被当作```<flex-basis>```的值

#### flex-grow

决定了flex items如何扩展

可以设置任意非负数字(正小数、正整数、0) , 默认值是0
当flex container在main axis方向.上有剩余size时, flex-grow属性才会有效

* 如果所有flex items的flex-grow总和sum超过1 ,每个flex item扩展的size为：
  flex container的剩余size * flex-grow / sum
* 如果所有flex items的flex-grow总和不超过1 ,每个flex item扩展的size为：
  flex container的剩余size * flex-grow

```CSS
.box1{
  flex-grow:1;
}
.box2{
  flex-grow:1;
}
.box2{
  flex-grow:1;
}
```

#### flex-basis

设置flex items在main axis方向,上的base size

优先级（高到低）：

* max-width\max-height\min-width\min-height
* flex-basis
* width\height
* 内容本身的size

#### flex-shrink

决定flex items如何收缩

* 可以设置任意非负数字(正小数、正整数、0) , 默认值是1
* 当flex items在main axis方向.上超过了flex container的size , flex-shrink属性才会有效
* 如果所有flex items的flex-shrink 总和超过1 ,每个flex item收缩的size为：
  flex items超出flex container的size * 收缩比例/所有flex items的收缩比例之和
* 如果所有flex items的flex-shrink 总和sum不超过1 ,每个flex item收缩的size为：
  flex items超出flex container的size *sum *收缩比例/所有flex items的收缩比例之和  
  收缩比例 = flex-shrink * flex item的base size
  base size就是flex item放入flex container之前的size

#### order（了解）

决定flex items的排布顺序

* 可以设置任意整数(正整数、负整数、0) ,值越小就越排在前面
* 默认值是0

#### align-self（了解）

可以通过align-self覆盖flex container设置的align-items

* auto: 遵从flex container的align-items设置(默认值)
* stretch、flex-start、 flex-end、 center、 baseline ,效果跟align-items- -致

[30分钟彻底弄懂flex布局](https://www.cnblogs.com/qcloud1001/p/9848619.html)

``` CSS
#box{
  display:flex;
  justify-content:center;
}
```