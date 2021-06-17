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

## 浏览器私有前缀

浏览器私有前缀是为了兼容老版本的写法，比较新版本的浏览器无须添加。

- -moz- : 代表 firefox 浏览器私有属性
- -ms- : 代表 ie 浏览器私有属性
- -wetkit- : 代表 safari、chrome 私有属性
- -o- : 代表 Opera 私有属性

## 常用布局技巧

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

### calc 函数

calc() 函数在声明 CSS 属性值时执行一些计算，括号里面可以使用 +、-、\*、/ 来进行计算。

::: tip 提示
运算符必须有空格
:::

```css
div {
  width: calc(100% - 30px);
}
```

## CSS 初始化

为了让不同的浏览器在渲染网页元素的时候形式更统一

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

## CSS 属性书写顺序

1. 布局定位属性: display / position/ float / clear / visibility / overflow (建议 display 第一个写)
2. 自身属性: width / height / margin / padding / border/ background
3. 文本属性: color / font / text-decoration / text align/ vertical-align / white- space / break-word
4. 其他属性(CSS3 ) : content / cursor / border-radius/ box- shadow / text shadow/ background:linear-gradien

## CSS 单位

- px：固定的像素
- em：相对父元素字体的大小
- rem：相对于根元素（HTML）的大小
- %：取决于应用的属性(比如字体的百分比相对于父元素的字体,宽度的百分比相对于父元素的宽度)

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

子元素选择器 只能选择作为玩素的最近一级子元素（简单理解是选子元素）

::: tip 提示
和后代选择器的区别是：子选择器只能作用于第一代后代，对其他后代不起作用。而后代选择器是作用于所有子后代元素。
:::

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

元素显示模式指元素（标签）以什么方式进行显示

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
3. 默认宽度是它本身内容的宽度。
4. 行内元素只能容纳文本或其他行内元素。

### 行内块元素

在行内元素中有几个特殊的标签：`<img/>`、`<input/>`、`<td>`，它们**同时具有块元素和行内元素的特点**。有些资料称它们为行内块元素。

行内块元素的特点：

1. 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以多个（行内元素特点）
2. 默认宽度是它本身内容的宽度（行内元素特点）。
3. 高度、行高、外边距以及内边距都可以控制(块级元素特点)。

### 元素显示模式转换

- 转换为块元素：`display: block;`
- 转换为行内元素（不常用）：`display: inline;`
- 转换为行内块元素：`display: inline-block;`

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

- 水平居中

  - 块级元素

  ```css
  div {
    margin: 0 auto;
  }
  ```

  - 行内元素、行内块元素

  ```css
  div {
    text-align: center;
  }
  ```

- 嵌套块元素垂直外边距的塌陷

  对于两个嵌套关系（父好关系）的块元素，元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值

  解决方法：

  1. 为父元素定义上边框
  2. 为父元素定义上内边距
  3. 为父元素添加 `overflow: hidden`

### 清除内外边距

网页元素很多都带有默认的内外边距，且不同浏榄器默认的也不一致。 因此我们在布局前，首先要清除下网页元素的内外边距。

```css
* {
  margin: 0;
  padding: 0;
}
```

::: tip 提示
行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以了
:::

### box-sizing

box- sizing 可以指定盒模型，计算盒子大小的方式可以发生改变

```css
div {
  /* （默认）盒子大小为 width + padding + border */
  box-sizing: content-box;
  /* 盒子大小保持为 width */
  box-sizing: border-box;
}
```

## 网页布局流

实际开发中，一个页面基本都包含了这三种布局方式

### 普通流（文档流）

标签按照规定好默认方式排列

1. 块级元素会独占一行，从上向下顺序排列
2. 行内元素会按照顺序，从左到右顺序排列，碰到父元边缘则自动换行

### 浮动流

可以让多个块级元素一行显示或者左右对齐盒子，多个块级盒子水平显示就用浮动布局

### 定位流

定位最大的特点是有层叠的概念，可以让多个盒子前后桑压来显示。如果元素自由在某个盒子内移动就用定位布局

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

- 加载单个字体

```CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址);
}
```

- 加载多个字体格式（适配兼容性）

```CSS
@font-face {
  font-family: 字体名称;
  src: url(字体网址),
        url(字体网址),
        url(字体网址);
}
```

### 字体图标

[阿里巴巴矢量图标库](https://www.iconfont.cn/) [Icomoon 图标库](https://icomoon.io/)

::: tip 提示
可直接引入下载的 CSS（注意增加 class）
:::

```CSS
@font-face {
  font-family: 字体图标名称;
  src: url(字体图标路径),
        url(字体图标路径),
        url(字体图标路径);
}
```

- 常规使用

```HTML
<span>字体图标代码</span>
```

```css
span {
  font-family: 字体图标名称;
}
```

- 伪元素使用

```HTML
<span class="iconfont 字体图标名称"></span>
```

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

- 背景大小

background-size 属性规定背景图片的尺寸

```css
div {
  /* 指定背景图片大小 */
  background-size: 100px 100px;
  /* 图像图像缩放拉伸，完全占满背景 */
  background-size: cover;
  /* 背景图像等比例拉伸 */
  background-size: contain;
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
  /* 无边框（默认） */
  border: none;
  /* 实线边框 */
  border: 边框宽度 solid 边框颜色;
  /* 虚线边框 */
  border: 边框宽度 dashed 边框颜色;
  /* 点线边框 */
  border: 边框宽度 dotted 边框颜色;
}
```

- 圆角边框

radius 半径（圆的半径）原理： 圆与边框的交集形成圆角效果

```css
div {
  /* 圆角 */
  border-radius: 16px;
  /* 上 右 下 左 圆角 */
  border-radius: 1px 1px 1px 1px;
  /* 圆角矩形（半径为高度的一半） */
  border-radius: 16px;
  /* 圆形（半径为宽度和高度的一半） */
  border-radius: 50%;
}
```

### 阴影

- 盒子阴影

  语法：`box-shadow: 水平阴影位置 垂直阴影位置 [模糊距离(阴影虚实)] [阴影大小] [阴影颜色] [内部/外部阴影]`

  ```css
  div {
    box-shadow: 0 0;
    box-shadow: 0 0 -4px rgba(0, 0, 0.5);
  }
  ```

  ::: tip 提示

  - 盒子阴影不占用空间，不会影响其他盒子排列
  - 默认的是外阴影(outset)，但是不可以写这个单词，否则导致阴影无效
    :::

- 文字阴影

语法：`text-shadow: 水平阴影位置 垂直阴影位置 [模糊距离(阴影虚实)] [阴影颜色]`

```css
div {
  text-shadow: 0 0;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
}
```

### 元素的显示、隐藏

- display 属性（常用）

display 隐藏元素后，不再占有原来的位置

```css
div {
  /* 隐藏元素 */
  display: none;
  /* 转换块级元素并显示元素 */
  display: block;
}
```

- visibility 可见性

vibility 隐藏元素后，继续占有原来的位置

```css
div {
  /* 隐藏元素 */
  visibility: hidden;
  /* 显示元素 */
  visibility: visible;
}
```

- overflow 溢出

overflow 属性指定了如果内容溢出一个元素的框 （超过其指定高度及宽度）时，会发生什么

::: tip 提示
如果有定位的盒子，请慎用 `overflow: hidden`，因为它会隐藏多余的部分
:::

```css
div {
  /* 内容溢出时依然显示溢出内容（默认） */
  overflow: visible;
  /* 内容溢出时隐藏溢出内容 */
  overflow: hidden;
  /* 显示滚动条（无论内容是否溢出） */
  overflow: scroll;
  /* 在需要的时候自动显示滚动条 */
  overflow: auto;
}
```

### 溢出文本显示省略号

- 单行文本溢出显示省略号

```css
p {
  display: inline-block;
  width: 100%;
  /* 强制显示一行文本 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 设置超出隐藏部分的文本 */
  text-overflow: ellipsis;
}
```

- 多行文本溢出显示省略号

::: tip 提示
多行文本溢出显示省略号，有较大兼容性问题，适合于 webKit 浏览器（移动端）
:::

::: tip 提示
更推荐让后台人员来做这个效果，后台人员可以设置显示多少个字，操作更简单
:::

```css
p {
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 设置超出隐藏部分的文本 */
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素 显示的文本的行数*/
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
```

### 三角形

- 等腰三角形

```css
div {
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border: 10px solid transparent;
  /* 可设置颜色位置改变三角形的朝向 */
  border-left-color: black;
}
```

- 直角三角形

```css
div {
  border-color: transparent red transparent transparent;
  border-style: solid;
  border-width: 100px 50px 0 0;
}
```

### 鼠标样式

```css
div {
  /* 默认光标 */
  cursor: default;
  /* 小手光标 */
  cursor: pointer;
  /* 移动光标 */
  cursor: move;
  /* 文本光标 */
  cursor: text;
  /* 禁止光标 */
  cursor: not-allowed;
}
```

### 轮廓线

去除默认的蓝色焦点边框

```css
input {
  outline: none;
}
```

### 防止拖拽文本域

去除文本域右下角的拖拽小按钮

```css
textarea {
  resize: none;
}
```

### vertical-align

用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效

```html
<!-- 文字 -->
<img scr="#" />文字

<!-- 图标 -->
<i></i>
```

```css
img,
i {
  /* 图片和文字顶部对齐 */
  vertical-align: top;
  /* 图片和文字垂直居中 */
  vertical-align: middle;
  /* 图片和文字底部对齐 */
  vertical-align: bottom;
}
```

### 解决图片底部空白间隙

- 给图片增加 `vertical-align: top | middle | bottom`

```css
img {
  vertical-align: middle;
}
```

- 将图片转为块级元素

```css
img {
  display: block;
}
```

### 图片模糊

filter CSS 属性将模糊或颜色偏移等图形效果应用于元素。数值越大越模糊

```css
img {
  filter: blur(5px);
}
```

### CSS3 过渡

过渡（transition）是 CSS3 中具有颠覆性的特征之一，当元素从一种样式变换为另一种样式时为元素添加效果

语法：`transition: 要过渡的属性 花费时间 [运动曲线] [开始时间]`

::: tip 提示
谁做过渡给谁加过渡属性
:::

```css
div {
  transition: all 0.5s ease;
}
```

过度方式：

- ease : 规定慢速开始，然后变快
- ease-in : 以慢速开始
- ease-out : 以慢速结束
- linear : 以相同速度开始至结束

### 2D 转换

转换可以实现元素的位移、旋转、缩放等效果

- 移动

2D 移动是 2D 转换里面的一种功能，可以改元素在页面中的位置，类似定位。

语法：`transform: translate(X轴移动位置, Y轴移动位置)`

::: tip 提示
translate 内的百分比是盒子自身的百分比
:::

```css
div {
  /* 移动X轴、Y轴坐标 */
  transform: translate(10px, 10px);
  /* 移动X轴坐标 */
  transform: translateX(10px);
  /* 移动Y轴坐标 */
  transform: translateY(10px);
}
```

移动特点：

- 定义 2D 转换中的移动,沿着 X 和 Y 轴移动元素
- translate 最大的优点：**不会影响到其他元素的位置**（类似于相对定位）
- translate 中的百分比单位是相对于自身元素的 translate:(50%, 50%);
- 对行内标签没有效果

- 旋转

2D 旋转指的是让元素在 2 维平面内顺时 t 旋转或者逆时针旋转

::: tip 提示

- 默认旋转的中心点为元素的中心点
- 角度为正数为顺时针，负数为逆时针
  :::

语法：`transform: rotate(度数);`

```css
div {
  transform: rotate(45deg);
}
```

- 设置转换中心点

语法：`transform-origin: x y;`

```css
div {
  /* 设置中心点为中间（默认） */
  transform-origin: center center;
  /* 设置中心点为左下角 */
  transform-origin: left bottom;
}
```

- 缩放

控制放大和缩小。sacle 缩放的优势：可以设置转换中心点缩放，默认以中心点缩放，而且不影响其他盒子

语法：`transform: scale(x,y);`

::: tip 提示
缩放倍数不能为负数
:::

```css
div {
  /* 宽和高放大一倍(相对于没有放大) */
  transform: scale(1, 1);
  /* 宽和高放大2倍 */
  transform: scale(2, 2);
  /* 宽和高放大2倍 */
  transform: scale(2);
  /* 宽和高缩小1.5倍 */
  transform: scale(0.5, 0.5);
}
```

### 3D 转换

- 3D 移动

3D 移动在 2D 移动的基础多加了一个可以移动的方向：z 轴方向

::: tip 提示

- X 轴坐标、Y 轴坐标 不能省略，没有可写 0
- Z 轴正值为向屏幕外移动，负值为向屏幕内移动
  :::

```css
div {
  transform: translate3d(X轴坐标, Y轴坐标, Z轴坐标);
}
```

- 透视

在 2D 平面产生近大远小视觉立体，但是只是效果二维的。如果想要在网页产生 3D 效果需要透视（理解成 3D 物体投影在 2D 平面内）

::: tip 提示

- 透视要写在**被观察元素的父元素**上
- 透视越小，元素越大
  :::

```css
div {
  perspective: 10px;
}
```

- 3D 旋转

3D 旋转指可以让元素在三维平面内沿着 x 轴、y 轴、z 轴或者自定义轴进行旋转

::: tip 提示

- 透视要写在**被观察元素的父元素**上
- 透视越小，元素越大
  :::

```css
div {
  /* 沿X轴旋转（正值为向屏幕方向旋转） */
  transform: rotateX(180deg);
  /* 沿Y轴旋转（正值为向屏幕方向旋转） */
  transform: rotateY(180deg);
  /* 沿Z轴旋转（效果即为单纯的平面旋转） */
  transform: rotateZ(180deg);
}
```

- 3D 呈现

控制子元素是否开启三维立体环境，默认没有开启 3D 立体空间

::: tip 提示
3D 呈现要写在**父元素**上
:::

```css
div {
  transform-style: preserve-3d;
}
```

## 浮动

::: tip 提示
浮动起初并不是用来布局，而是图文环绕。 **尽量不要使用浮动布局，使用 Flex 布局**
:::

有很多的布局效果，标准流没有办法完成，此时就可以利用浮动完成布局。因为浮动可以改变元素标签默认的排列方式。  
浮动最典型的应用：可以让多个块级元素一行内排列显示

float 属性用于创建浮动框，将其移动到一边,直到左边缘或右边缘触及包含块或另一个浮动框的边缘。

语法：`float: 属性值`

```css
div {
  /* 不浮动（默认） */
  float: none;
  /* 向左浮动 */
  float: left;
  /* 向右浮动 */
  float: right;
}
```

### 浮动特性

1. **浮动元素会脱离标准流（脱标）：**

   - 浮动的盒子**不再保留原先的位置**

2. 浮动的元素会一行内显示并且元素顶部对齐

3. 浮动的元素会具有行内块元素的特性：
   - 任何元素都可以浮动。不管原先是什么模式的元素，添加浮动之后具有行内块元素相似的特性
   - 如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，它的大小根据内容来决定的

### 清除浮动

- 为什么要清除浮动

  - 由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，后父级盒子高度为 0 时，就会影响下面的标准流盒子。
  - 由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响

- 清除浮动本质
  - 清除浮动的本质是清除浮动元素造成的影响
  - 如果父盒子本身有高度,则不需要清除浮动

语法：`clear: both;`

```css
div {
  /* 同时清除左右两侧浮动的影响（常用） */
  clear: both;
  /* 同时清除左侧浮动的影响 */
  clear: left;
  /* 同时清除右侧浮动的影响 */
  clear: right;
}
```

## 定位

::: tip 提示
如果一个盒子既有 left 属性也有 right 属性，则默认会执行 left 属性
:::

### 静态定位

静态定位是元素的默认定位方式（无定位）

```css
div {
  position: static;
}
```

### 相对定位

相对定位是元素在移动位置的时候，是相对于它原来的位置

```css
div {
  position: relative;
}
```

相对定位特点：

1. 它是相对于自己原来的位置来移动（移动位置的时候参照点是自己原来的位置）
2. 原来在标准流的位置继续有，后面的盒子仍然以标准流的方式对待它（不脱标，继续保留原来位置）

### 绝对定位

绝对定位是元素在移动位置的时候，是相对于它祖先元素

```css
div {
  position: absolute;
}
```

绝对定位特点：

- 如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位
- 如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元索为参考点移动位置
- 绝对定位**不再占有原先的位置**

* 水平居中算法

```css
div {
  position: absolute;
  /* 向右移动父容器的一半 */
  left: 50%;
  /* 向左移动自身宽度的一半 */
  margin-left: -50%;
}
```

- 垂直居中算法

```css
div {
  position: absolute;
  /* 向下移动父容器的一半 */
  top: 50%;
  /* 向上移动自身高度的一半 */
  margin-top: -50%;
}
```

### 子绝父相

**当子级是绝对定位时，父级要用相对定位**

- 子级绝对定位，不会占有位置,可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。
- 父盒子需要加定位限制子盒子在父盒子内显示
- 父盒子布局时，需要占有位置，因此父盒子只能是相对定位。

### 固定定位

固定定位是**元素固定于浏览器可视区的位置**。主要使用场景：可以在浏览器页面滚动时元素的位置不会改变

```css
div {
  position: fixed;
}
```

固定定位特点：

- 以浏览器的可视窗口为参照点移动元素
  - 跟父元素没有任何关系
  - 不随滚动条滚动
- 固定定位**不占有原先的位置**

### 粘性定位（了解）

粘性定位可以被认为是相对定位和固定定位的混合。可以用做吸顶效果

::: tip 提示
粘性定位兼容性较差，不支持 IE 浏览器
:::

```css
div {
  position: sticky;
}
```

粘性定位特点：

- 以浏览器的可视窗口为参照点移动元素（固定位特点）
- 粘性定位占有原先的位置（相对定位特点）
- 必须添加 top、left、right、bottom 其中一个才有效

### 定位叠放次序

在使用定位布局时，可能会出现盒子重叠的情况。此时可以使用 z-index 来控制盒子的前后次序（Z 轴）

::: tip 提示

- **只有定位的盒子才有 z-index 属性**
- 数值可以是正整数、负整数或 0，默认是 auto。数值越大，越靠上
- 如果属性值相同，则按照书写顺序，后来居上
- 数字后面不能加单位
  :::

```css
div {
  z-index: 1;
}
```

### 定位特殊特性

1. 行内元素添加绝对或者固定定位，可以直接设置高度和宽度
2. 块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小

## 精灵图

一个网页中往往会应用很多小的背图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。  
因此,为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称 CSS Sprites、CS 雪碧），**将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求**。

[自动生成精灵图样式](http://www.spritecow.com)

::: tip 提示
`background-position`和`background-size`都是固定的，如需改变大小则先指定这两个值，然后指定宽度和高度
:::

```css
.sprite {
  background: url(路径) no-repeat X轴偏移值 Y轴偏移值;
  width: 宽度;
  height: 高度;
}
```
