# Ejs 模板语言

EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有如何组织内容的教条；也没有再造一套迭代和控制流语法；有的只是普通的 JavaScript 代码而已。

## 安装

`npm install ejs`

## 语法

### 引用数据

```JavaScript
<% 变量名 %>
```

### 模板语法

```JavaScript
<% if (条件) { %>
  <h2><%= 变量名 %></h2>
<% } %>
```
