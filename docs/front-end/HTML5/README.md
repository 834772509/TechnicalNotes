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