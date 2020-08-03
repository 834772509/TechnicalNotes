# CSS

## CSS 三大特性

### 层叠性

相同选择器给设置相同的样式，此时一个样式就会**覆盖(（层叠）**另一个冲突的样式，层叠性主要解决样式冲突的问题。

层叠性原则：

- 样式冲突，遵循的原则是**就近原则**，哪个样式离结构近就执行哪个样式
- 样式不冲突，不会层蠱

### 继承性

子标签会继承父标签的部分样式（如字体颜色和字号）。恰当地使用继承可以简化代码，降低 CSS 样式的复杂性。

### 优先级

当同一个元素指定多个选择器，就会有优先级的产生。

- 选择器相同，则执行层叠性
- 选择器不同，则根据选择器权重执行：**!important > 行内 > id > 类 > 元素 > \* > 继承**
- 权重叠加：如果是复合选择器,则会有权重叠加,需要计算权重。

::: tip 提示
**继承的权重是 0**。如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0
:::

## 常用技巧

### 引入 CSS

```HTML
<link rel="stylesheet" href="CSS文件路径">
```

### 单行文字垂直居中

让文字的行高等于盒子的高度

```css
p {
  height: 40px;
  line-height: 40px;
}
```

### 美化进度条

```CSS
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

### 标签选择器

```HTML
<h2></h2>
```

```CSS
标签名 {
  属性名: 值;
}
```

### ID 选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式

```HTML
<h2 id="#ID名称"></h2>
```

```CSS
#ID名称 {
  属性名: 值;
}
```

### 类选择器

```HTML
<h2 class="类名称"></h2>
<h2 class="类名称1 类名称2"></h2>
```

```CSS
.类名称 {
  属性名: 值;
}
```

### 通配符选择器

通配符选择器 表示选取页面中所有元素

```CSS
* {
  属性名: 值;
}
```

### 后代选择器

后代选择器又称为包含选择器，可以选择元素面子元素。当标签发生嵌套时，内层标签就成为外层标签的后代。

```html
<元素1>
  <元素2></元素2>
</元素1>
```

```css
元素1 元素2 {
  属性名: 值;
}
```

### 子元素选择器

子元素选择器 只能选择作为玩素的最近一级子元素。 简单理解就是选子元素

```html
<父元素>
  <子元素>子元素</子元素>
  <p><子元素>孙元素</子元素></p>
</父元素>
```

```css
父元素 > 子元素 {
  属性名: 值;
}
```

### 并集选择器

并集选择器可以选择多组标签同时为他们定义相同的样式，通常用于集体声明

```css
元素1,
元素2 {
  属性名: 值;
}
```

### 伪类选择器

伪类选择器用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第 1 个，第 n 个元素

- 链接伪类选择器

```css
/* 选择未被访问的链接*/
a:link {
  属性名: 值;
}
/* 选择已被访问的链接 */
a:visited {
  属性名: 值;
}
/* 选择未鼠标指针位于其上的链接 */
a:hover {
  属性名: 值;
}
/* 选择未鼠标按下未弹起的链接 */
a:active {
  属性名: 值;
}
```

- :focus 伪类选择器

:focus 伪类选择器用于选取**当前焦点的表单元素**

::: tip 提示
一般情况只有`<input>`元素才能获取
:::

```css
input:focus {
  属性名: 值;
}
```

### 属性选择器

属性选择器可以根据元素特定属性的来选择元素。这样就可以不用借助于类或者 id 选择器

- 选择有特定属性的元素

```html
<元素 属性/>

<input type="text" />
```

```css
元素[属性] {
  属性名: 值;
}

input[type] {
  属性名: 值;
}
```

- 选择符合指定属性的元素

```html
<元素 属性="值"/>

<input type="text" />
```

```css
元素[属性="值"] {
  属性名: 值;
}

input[type="text"] {
  属性名: 值;
}
```

- 匹配具有指定属性，且以值开头的所有元素

```html
<元素 属性="值1"></div>
<元素 属性="值2"></div>


<div class="icon1"></div>
<div class="icon2"></div>
<div class="icon3"></div>
<div class="icon4"></div>
```

```css
元素[属性^="值"] {
  属性名: 值;
}

div[class^="icon"] {
  属性名: 值;
}
```

- 匹配具有指定属性，且以值结尾的所有元素

```html
<元素 属性="1值"></元素>
<元素 属性="2值"></元素>


<i class="icon1-data"></i>
<i class="icon2-data"></i>
```

```css
元素[属性$="值"] {
  属性名: 值;
}

i[class$="data"] {
  属性名: 值;
}
```

- 匹配具有指定属性，且包含值的所有元素

```html
<元素 属性="值"></元素>
<元素 属性="值"></元素>


<i class="icon1-ui-data"></i>
<i class="icon2-ui-data"></i>
```

```css
元素[属性*="值"] {
  属性名: 值;
}

i[class*="ui"] {
  属性名: 值;
}
```

### 结构伪类选择器

结构伪类选择器主要根据文档结构来选择器元素，常用于根据父级选择器里面的子元素

::: tip 提示
`nth-child(n)` 与 `nth-of-type(n)`的区别：

- `:nth-child(n)` 选择器匹配属于其父元素的第 N 个子元素，**不论元素的类型**
- `:nth-of-type(n)` 选择器匹配属于父元素的**特定类型**的第 N 个子元素的每个元素
  :::

::: tip 提示
`nth-child(n)`、`nth-of-type(n)`

- n 可以为数字：表示选择子元素的位置，从 1 开始
- n 可以为关键字：event 偶数，odd 奇数
- n 可以是公式：2n（偶数），2n+1（奇数），5n（5 10 15 ...），n+5（[5,∞]），-n+5（[1,5]）
  :::

```html
<ul>
  <li>我是第1个</li>
  <li>我是第2个</li>
  <li>我是第3个</li>
  <li>我是第4个</li>
</ul>
```

- nth-child(n)

  - 选择第一个子元素

  ```css
  父元素 :first-child {
    属性名: 值;
  }

  ul :first-child {
    属性名: 值;
  }
  ```

  - 选择最后一个子元素

  ```css
  父元素 :last-child {
    属性名: 值;
  }

  ul :last-child {
    属性名: 值;
  }
  ```

  - 选择指定子元素

  ```css
  父元素 :nth-child(位置) {
    属性名: 值;
  }

  ul :nth-child(3) {
    属性名: 值;
  }
  ```

  - 选择所有子元素

  ::: tip 提示
  此处必须是 n，其他字母无效
  :::

  ```css
  父元素 :nth-child(n) {
    属性名: 值;
  }
  ```

  - 选择偶数子元素

  选择所有子元素的偶数位置

  ```css
  父元素 :nth-child(even) {
    属性名: 值;
  }
  ```

  - 选择奇数子元素

  选择所有子元素的奇数位置

  ```css
  父元素 :nth-child(odd) {
    属性名: 值;
  }
  ```

- nth-of-type(n)

  - 选择第一个子元素

  ```css
  父元素 子元素:first-of-type {
    属性名: 值;
  }

  ul li:first-of-type {
    属性名: 值;
  }
  ```

  - 选择最后一个子元素

  ```css
  父元素 子元素:last-of-type {
    属性名: 值;
  }

  ul li:last-of-type {
    属性名: 值;
  }
  ```

  - 选择任意子元素

  ```css
  父元素 子元素:nth-of-type(位置) {
    属性名: 值;
  }

  ul li:nth-of-type(3) {
    属性名: 值;
  }
  ```

  - 选择所有子元素

  ::: tip 提示
  此处必须是 n，其他字母无效
  :::

  ```css
  父元素 子元素:nth-of-type(n) {
    属性名: 值;
  }
  ```

  - 选择偶数子元素

  选择所有子元素的偶数位置

  ```css
  父元素 子元素:nth-of-type(even) {
    属性名: 值;
  }
  ```

  - 选择奇数子元素

  选择所有子元素的奇数位置

  ```css
  父元素 子元素:nth-of-type(odd) {
    属性名: 值;
  }
  ```

### 伪元素选择器

伪元素选择器可以帮助我们利用 CSS 创建新标签元素，而不需要 HTML 标签，从而简化 HTML 结构

::: tip 提示

- 伪元素选择器 创建的元素在 DOM 中无法找到，所有被称为伪元素
- 伪元素选择器 创建的元素属于**行内元素**，默认无法改变大小（需要转为块级元素）
  :::

```html
<div></div>
```

- 在元素内部的前面插入内容

```css
div::before {
  content: "内容";
}
```

- 在元素内部的后面插入内容

```css
div::after {
  content: "内容";
}
```

## 元素显示模式

元素显示模式就是元素（标签）以什么方式进行显示

HTML 元愫一般分为**块元素**和**行内元素**两种类型：

### 块元素

常见的块元素有`<h1>`-`<h6>`、`<p>`、`<div>`、 `<ul>`、 `<ol>`、`<li>`等，其中`<div>`标签是最典型的块元素

块级元素的特点:

1. 独占一行
2. 高度、宽度、外边距以及内边距都可以控制
3. 宽度默认是容器(父级宽度)的 100%
4. 是一个容器及盒子，里面可以放行内或者块级元素

::: warning 注意
字类的元素内不能使用块级元素：

- `<p>`标签主要用于存放文字，因此`<p>`里面不能放块级元素（特别是`<div>`）
- `<h1>`-`<h6>`等都是文字类块级标签，里面也不能放其他块级元素
  :::

### 行内元素

常见的行内元素有 `<a>`、`<strong>`、 `<b>`.、`<em>`、`<i>`、 `<del>`. `<S>`、 `<ins>`、`<u>`、`<span>` 等，其中`<span>`标签是最典型的行内元素。有的地方也将行内元素称为内联元素。

行内元素的特点：

1. 相行内元素在一行上， 一行可以示多个。
2. 高、宽直接设置是无效的。
3. 默认宽度就是它本身内容的宽度。
4. 行内元素只能容纳文本或其他行内元素。

### 行内块元素

在行内元素中有几个特殊的标签：`<img/>`、`<input/>`、`<td>`，它们**同时具有块元素和行内元素的特点**。有些资料称它们为行内块元素

行内块元素的特点：

1. 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以多个（行内元素特点）
2. 默认宽度就是它本身内容的宽度（行内元素特点）。
3. 高度、行高、外边距以及内边距都可以控制(块级元素特点)。

### 元素显示模式转换

- 转换为块元素：`display: block;`
- 转换为行内元素（不常用）：`display: inline;`
- 转换为行内块元素：`display: inline-block;`

## 单位

- px：固定的像素
- em：相对父元素字体的大小
- rem：相对于根元素（HTML）的大小
- %：取决于应用的属性(比如字体的百分比相对于父元素的字体,宽度的百分比相对于父元素的宽度)

## 盒子模型

盒子模型：把 HTML 面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。  
CSS 子模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边框、外边距、内边距、和实际内容

### 内边距

padding 属性用于设置内边距，即边框与内容之间的距离

::: tip 提示
如果盒子本身没有指定 width/height 属性，则此时 padding 不会撑开盒子大小
:::

```css
div {
  /* 上下左右内边距 */
  padding: 1px;
  /* 上下 左右 内边距 */
  padding: 1px 1px;
  /* 上 左右 下 内边距 */
  padding: 1px 1px 1px;
  /* 上 右 下 左 内边距 （顺时针） */
  padding: 1px 1px 1px 1px;
}
```

### 外边距

margin 属性用于设置外边距，即控制盒子和盒子之间的距离

```css
div {
  /* 上下左右内边距 */
  margin: 1px;
  /* 上下 左右 内边距 */
  margin: 1px 1px;
  /* 上 左右 下 内边距 */
  margin: 1px 1px 1px;
  /* 上 右 下 左 内边距 （顺时针） */
  margin: 1px 1px 1px 1px;
}
```

## 字体

### 字体属性

- 设置字体

```CSS
p {
  font-family: "字体名";
  /* 指定多个字体时，依次按照顺序查找当前可用字体 */
  font-family: "字体1","字体2";
}
```

- 设置大小

```css
p {
  font-size: 字体大小;
}
```

::: tip 提示
默认浏览器字体大小为 16px
:::

- 字体粗细

```css
p {
  /* 正常字体 */
  font-weight: normal;
  /* 粗体 */
  font-weight: 700;
  font-weight: bold;
  /* 细体 */
  font-weight: 400;
  font-weight: normal;
}
```

- 斜体

```css
p {
  /* 正常字体 */
  font-style: normal;
  /* 斜体 */
  font-style: italic;
}
```

- 复合属性

```css
p {
  font: font-style font-weight font-size font-family;
}
```

::: tip 提示
不需要设置的属性可以省略（取默认值），但**必须保留 font-size 和 font-family 属性**，否则 font 属性将不起作用
:::

### 网络字体

```CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址);
}
```

加载多个字体格式（适配兼容性）

```CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址),
        url(字体网址),
        url(字体网址);
}
```

### 字体图标

```CSS
@font-face {
  font-family: 字体名称;
  src: url(字体图标网址),
        url(字体图标网址),
        url(字体图标网址);
}
```

常规使用

```HTML
<span>字体图标代码</span>
```

伪元素

```HTML
<span class="iconfont 字体图标名称"></span>
```

::: tip 提示
也可直接引入下载的 CSS（注意增加 class）
:::

## CSS 属性

### 文本属性

- 文本颜色

```css
p {
  /* 十六进制颜色（常用） */
  color: #fff;
  /* 英文颜色 */
  color: red;
  /* RGB代码 */
  color: rgb(r, g, b);
  color: rgb(100%, 0%, 0%);
}
```

- 对齐文本

```css
p {
  /* 左对齐（默认） */
  text-align: left;
  /* 居中对齐 */
  text-align: center;
  /* 右对齐 */
  text-align: right;
}
```

- 装饰文本

CSS Text 属性可定义文本的外观,比如文本的颜色、对齐文本、
装饰文本、文本缩进、行间距等

```css
p {
  /* 默认，无装饰线（常用） */
  text-decoration: none;
  /* 下划线 */
  text-decoration: underline;
  /* 上划线（几乎不用） */
  text-decoration: overline;
  /* 删除线（不常用） */
  text-decoration: line-through;
}
```

- 文本缩进

text-indent 属性用来指定文本的第一行的缩进,通常是将段落的首行缩进

```css
p {
  /* 文本的第一行缩进 */
  text-indent: 2em;
}
```

::: tip 提示
2em 为 2 个文字大小
:::

- 行间距

line-height 属性用于设置行间的距离(行高)。可以控制文字行与行之间的距离.

```css
p {
  line-height: 10px;
}
```

::: tip 提示
行间距有上间距与下间距，两者大小相同
:::

### 背景

- 背景颜色

```css
div {
  background-color: red;
}
```

- 背景图片

```css
div {
  /* 无背景图（默认） */
  background-image: none;
  background-image: url(图片路径);
}
```

- 背景平铺

```css
div {
  /* 背景图片横向纵向平铺（默认） */
  background-repeat: repeat;
  /* 背景图片不平铺 */
  background-repeat: no-repeat;
  /* 背景图片横向平铺 */
  background-repeat: repeat-x;
  /* 背景图片纵向平铺 */
  background-repeat: repeat-y;
}
```

- 背景图片位置

background-position 属性可以改变图片在背景中的位置

```css
div {
  /* 顶部水平居中 */
  background-position: top center;
  /* 精确单位（X轴坐标,Y轴坐标） */
  background-position: 20px, 20px;
  /* 混合单位，水平居中，顶部20px */
  background-position: center, 20px;
}
```

- 背景图像固定

background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动。可以制作视差滚动的效果。

```css
body {
  /* 背景图像是随对象内容滚动（默认） */
  background-attachment: scroll;
  /* 背景图像固定 */
  background-attachment: fixed;
}
```

- 背景复合写法

为了简化背景属性的代码，可以将多个属性合并简写在同一个属性 background 中，从而节约代码量

::: tip 提示
没有特定的书写顺序，这只是一般习惯约定顺序
:::

```css
body {
  background: 背景颜色 图片地址 背景平铺 图像滚动 图片位置;
}
```

- 背景色半透明

CSS3 为我们提供了背景颜色半透明的效果。最后一个参数为 Alpha 透明度，取值范围为(0,1)，值越低越透明。

```css
div {
  background: rgba(0, 0, 0, 0.5);
}
```

::: tip 提示
盒子内容不受影响，设置的仅仅是盒子**背景半透明**
:::

### 边框

- 为元素增加边框

```css
div {
  /* 实线边框 */
  border: 边框宽度 solid 边框颜色;
  /* 虚线边框 */
  border: 边框宽度 dashed 边框颜色;
  /* 点线边框 */
  border: 边框宽度 dotted 边框颜色;
}
```

- 为元素增加圆角

```css
div {
  border-radius: 16px;
}
```

## 精灵图

[自动生成精灵图样式](http://www.spritecow.com)

```css
.sprite {
  background: url(路径) no-repeat X偏移值 Y偏移值;
  width: 宽度;
  height: 高度;
}
```

## CSS 动画

### transition

```CSS
transition: property[过渡属性] duration[过渡时间] timing-function[过渡方式] delay[延时时间];
```

```CSS
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
参数 1 为需要过渡的属性如"width" ，all 表示所有属性都过渡
参数 2 为过渡时间，默认为 0 秒
参数 3 为过度方式，一般为"ease"

- ease : 规定慢速开始，然后变快
- ease-in : 以慢速开始
- ease-out : 以慢速结束
- linear : 以相同速度开始至结束
  参数 4 为延时触发过度的时间

:::

### transform

2D 转换 : translate  
3D 转换 : translate3d

#### translate 移动

```CSS
transform: translate(X,Y);
```

#### rotate 旋转

```CSS
transform: rotate(角度deg);
```

#### scale 缩放

```CSS
transform: scale(缩放的倍数);
```

#### skew 倾斜

```CSS
transform: skew(X轴倾斜度数deg,Y轴倾斜度数deg);
```

#### 无限旋转

```CSS
@keyframes rotate{
  from{transform: rotate(0deg)}
  to{transform: rotate(360deg)}
}
#img {
  animation: rotate 3s linear infinite;
}
```

### perspective 向屏幕内侧倾斜

```CSS
transform: perspective()
```

## 移动端适配

1. 针对不同的手机屏善，设置不同的 font-size 大小
2. 将所有需要适配的图片/元素/字体大小，统一使用 rem

### 媒体查询

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

### 动态计算 rem

1. 利用 px 转 rem
   Visual Studio Code 插件：`px to rem`  
   热键：Alt + Z
2. 利用 postcss-pxtorem（最优方案）
3. 利用 less/sass/stylus 的计算能力

## Flex 布局

### 基本概念

flex 布局是目前 web 开发中使用最多的布局方案：  
flex 布局( Flexible 布局,弹性布局)  
目前特别在移动端用的最多，目前 PC 端也使用越来越多了

两个重要概念：

- 开启了 flex 布局的元素叫 **flex container**
- flex container 里面的直接子元素叫做**flex items**

### 开启 flex 布局

块级元素

```CSS
.box{
  display: flex;
}
```

行内元素

```CSS
.box{
  display: inline-flex:
}
```

### 应用在 flex container 上的 CSS 属性（父）

#### flex-flow

flex-flow 是 flex-direction || flex-wrap 的简写

```CSS
.box{
  /* 从左到右、多行 */
  flex-flow: row wrap;
}
```

#### flex-direction

决定主轴（X 轴）的方向

- row: 从左到右(默认)
- row-reverse: 从右到左
- column: 从上到下
- column-reverse: 从下到上

#### flex-wrap

决定了 flex container 是单行还是多行

- nowrap: 单行显示（默认）
- wrap: 多行
- wrap-reverse: 反转主轴（X 轴）和交叉轴（Y 轴）

::: tip 提示
默认情况下，所有的 flex item 都会在同一行显示(nowrap)
:::

#### justify-content

决定了 flex items 在主轴（X 轴）上的对齐方式

- flex-start: 与起始位置对齐
- center: 居中对齐
- flex-end: 与终止位置对齐
- space-evenly: 将 item 均等分开，item 之间的距离相等
- space-around: item 之间的距离相等且两边空出一部分（距离是 item 间距的一半）

#### align-items

决定了 flex items 在交叉轴（Y 轴）上的对齐方式

- flex-start: 与起始位置对齐
- center: 居中对齐
- flex-end: 与终止位置对齐
- baseline: 与基准线对齐
- stretch: 自动拉伸
- normal: 自动拉伸

#### align-content

决定了 **多行** flex items 在交叉轴（Y 轴）上的对齐方式，用法与 justify-content 类似

- stretch: 自动拉伸 (默认值)
- flex-start: 与起始位置对齐（依次对齐）
- center :居中对齐
- flex-end: 与终止位置对齐
- space-between: flex items 之间的距离相等，与 cross start、 cross end 两端对齐
- space-around: item 之间的距离相等且两边空出一部分（距离是 item 间距的一半）
- space-evenly: 将 item 均等分开，item 之间的距离相等

### 应用在 flex items 上的 CSS 属性（子）

#### flex（了解）

flex-grow || flex-shrink I| flex-basis 的简写,flex 属性可以指定 1 个, 2 个或 3 个值

单值语法：值必须为以下其中之一：

- 一个无单位数(`<number>`):它会被当作`<flex-grow>` 的值
- 一个有效的宽度(width)值:它会被当作`<flex-basis>`的值
- 关键字 nohe , auto 或 initial

双值语法：  
第一个值必须为一个无单位数,并且它会被当作`<flex-grow>`的值
第二个值必须为以下之一：

- 一个无单位数:它会被当作`<flex-shrink>`的值
- 一个有效的宽度值:它会被当作< flex-basis> 的值

三值语法:

- 第一个值必须为一个无单位数，并且它会被当作`<flex-grow>`的值
- 第二个值必须为一个无单位数，并且它会被当作< flex-shrink>的值
- 第三个值必须为一个有效的宽度值，并且它会被当作`<flex-basis>`的值

#### flex-grow

决定了 flex items 如何扩展

可以设置任意非负数字(正小数、正整数、0) , 默认值是 0
当 flex container 在 main axis 方向.上有剩余 size 时, flex-grow 属性才会有效

- 如果所有 flex items 的 flex-grow 总和 sum 超过 1 ,每个 flex item 扩展的 size 为：
  flex container 的剩余 size \* flex-grow / sum
- 如果所有 flex items 的 flex-grow 总和不超过 1 ,每个 flex item 扩展的 size 为：
  flex container 的剩余 size \* flex-grow

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

设置 flex items 在 main axis 方向,上的 base size

优先级（高到低）：

- max-width\max-height\min-width\min-height
- flex-basis
- width\height
- 内容本身的 size

#### flex-shrink

决定 flex items 如何收缩

- 可以设置任意非负数字(正小数、正整数、0) , 默认值是 1
- 当 flex items 在 main axis 方向.上超过了 flex container 的 size , flex-shrink 属性才会有效
- 如果所有 flex items 的 flex-shrink 总和超过 1 ,每个 flex item 收缩的 size 为：
  flex items 超出 flex container 的 size \* 收缩比例/所有 flex items 的收缩比例之和
- 如果所有 flex items 的 flex-shrink 总和 sum 不超过 1 ,每个 flex item 收缩的 size 为：
  flex items 超出 flex container 的 size *sum *收缩比例/所有 flex items 的收缩比例之和  
  收缩比例 = flex-shrink \* flex item 的 base size
  base size 就是 flex item 放入 flex container 之前的 size

#### order（了解）

决定 flex items 的排布顺序

- 可以设置任意整数(正整数、负整数、0) ,值越小就越排在前面
- 默认值是 0

#### align-self（了解）

可以通过 align-self 覆盖 flex container 设置的 align-items

- auto: 遵从 flex container 的 align-items 设置(默认值)
- stretch、flex-start、 flex-end、 center、 baseline ,效果跟 align-items- -致

[30 分钟彻底弄懂 flex 布局](https://www.cnblogs.com/qcloud1001/p/9848619.html)

```CSS
#box{
  display:flex;
  justify-content:center;
}
```
