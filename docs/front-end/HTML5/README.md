# HTML5 笔记

## 常用导入语句

### 导入CSS

``` HTML
<link rel="stylesheet" type="text/css" href="CSS文件路径">
```

### 导入JavaScript

``` HTML
<script src="JavaScript路径"></script>
```

## 基础标签

### 标题

``` HTML
<h1>标题</h1>
<h2>标题</h2>
<h3>标题</h3>
<h4>标题</h4>
<h5>标题</h5>
<h6>标题</h6>
```

### 段落标签

``` HTML
<p>段落</p>
```

### pre标签

定义预格式化的文本（保留空格和换行符）

``` HTML
<pre></pre>
```

### a标签（超链接）

``` HTML
<a href="https://超链接">a标签</a>
```

### img标签（图片）

``` HTML
<img src="图片路径" />
```

### 分割线

``` HTML
<hr />
```

### 换行符

``` HTML
<br>
```

### 有序列表

``` HTML
<ol>
  <li>有序列表1</li>
  <li>有序列表2</li>
</ol>
```

### 无序列表

``` HTML
<ul>
  <li>无序列表1</li>
  <li>无序列表2</li>
</ul>
```

### 表格

``` HTML
<table border="1">
<tr>
<td>第一行第一列</td>
<td>第一行第二列</td>
</tr>
<tr>
<td>第二行第一列</td>
<td>第二行第二列</td>
</tr>
</table>
```

### 内嵌网页

``` HTML
<iframe src="网页链接"></iframe>
```

## CSS

### 选择器

#### ID选择器

``` CSS
#ID名称
{
  属性名称: 值;
}
```

#### Class选择器

``` CSS
.Class名称
{
  属性名称: 值;
}
```

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