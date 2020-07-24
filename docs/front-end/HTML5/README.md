# HTML5 笔记

## Visual Studio Code

### 插件推荐

* Live Server : 实时更新修改后的网页
* TabNine : 更好的代码提示
* Prettier - Code formatter : 更好的格式化代码
* vscode-icons : 图标插件
* emmit(内置) : 快速生成代码
* htmltagwrap : 自动闭合HTML标签

### 代码片段

[在线生成代码片段](https://snippet-generator.app)

### 修复WebStorme一直索引

设置-编辑器-文件类型-忽略文件和文件夹-node_modules


## HTML5结构

``` HTML
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>页面标题</title>
</head>
<body>

</body>
</html>
```

## 基础标签

### 标题

``` HTML
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

### 段落标签

``` HTML
<p>段落</p>
``` 


超出p标签内容自动显示省略号：

``` CSS
p {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### pre标签

定义预格式化的文本（保留空格和换行符）

``` HTML
<pre></pre>
```

### 超链接标签

a标签用来跳转链接

``` HTML
<a href="URL" target="弹出方式">文本或图片</a>
```

弹出方式：
  * _self : 默认值
  * blank : 新窗口打开


隐藏a标签下划线：

``` CSS
a {
  text-decoration:none;
}
```

### 描点链接

点击链接后，可以快速定位到页面中的某个位置

``` html
<a href="#id名">文本或图片</a>
```

### div 标签

块级元素

``` HTML
<div></div>
```

### span 标签

行级元素

``` HTML
<span></span>
```

### img标签（图片）

img标签用来显示图片

``` HTML
<img src="图片路径" title="提示文本" alt="图片无法显示时提示信息"/>
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

隐藏列表的小点：

``` CSS
li {
  list-style:none;
}
```

### 自定义列表

``` html
<dl>
  <dt>自定义列表标题</dt>
  <dd>自定义列表1</dd>
  <dd>自定义列表2</dd>
</dl>
```

### 表格

``` HTML
<table>
  <thead>
    <tr>
      <th>表头1</th>
      <th>表头2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```

::: tip 提示
table有一个特殊的CSS：``border-collapse: collapse;``，设置后可将双边框进行合并
:::

### 内嵌网页

``` HTML
<iframe src="网页链接"></iframe>
```

### 鼠标悬浮提示

``` HTML
<p title="提示内容"></p>
```

### label 标签

``<label>``标签通常和``<input>``标签一起使用；  
``<label>`` 标签的作用是为鼠标用户改进可用性，当用户点击``<label>``标签中的文本时，浏览器就会自动将焦点转到和该标签相关联的控件上

``` html
<label>
  用户：<input type="text" />
</label>
```

## 文本格式化标签

### 加粗

``` html
<strong>加粗文本</strong>
```

### 倾斜

``` html
<em>倾斜文本</em>
```

### 删除线

``` html
<del>删除文本</del>
```

### 下划线

``` html
<ins>下划线文本</ins>
```

## 表单标签

### 输入框

* 文本输入

``` html
<label>
  文本输入：<input type="text" placeholder="文本提示" />
</label>
```

* 密码输入

``` html
<label>
  密码输入：<input type="password" />
</label>
```

### 单选框

``` html
<label>
  单选框1：<input name="单选框1" type="radio">
  <!-- 默认选中 -->
  单选框2：<input name="单选框1" type="radio" checked>
</label>
```

::: tip 提示
单选框需要加``name``属性，且需要**相同名称**，否则无法实现单选
:::

### 多选框

``` html
<label>
  多选框1：<input type="checkbox">
  <!-- 默认选中 -->
  多选框2：<input type="checkbox" checked>
</label>
```

### 下拉框

``` html
<select>
  <option value="下拉选项1">下拉选项1</option>
  <option value="下拉选项1">下拉选项2</option>
</select>
```

### 上传

``` html

```
