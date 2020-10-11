## BOM

## 基本概念

### 什么是 BOM

BOM（Browser ObjectModel）即**浏览器对象模型**，它提供了独立于内容而与**浏览器窗口进行交互的对象**，其核心对象是 window。

BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是 Netscape 浏览器标准的一部分。

### BOM 的构成

**window 对象是浏览器的顶级对象**，它具有双重角色。

1. 它是 JavaScript 访问浏览器窗口的一个接口。
2. 它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。

在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt()等。

::: warning 注意
window 下的一个特殊属性 window.name
:::

## windows 对象常见事件

### 窗口加载事件

window.onload 是窗口(页面）加载事件,当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等)，就调用的处理函数。

::: tip 提示
`document.addEventListener("DOMContentLoaded", function() {}`  
DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式表，图片，flash 等等
:::

```JavaScript
window.addEventListener("load", function() {

}
```

### 调整窗口大小事件

window.onresize 是调整窗口大小加载事件，当触发时就调用的处理函数。

```JavaScript
window.addEventListener("resize", function() {
    console.log(window.innerWidth);
}
```

### 打开标签页

```JavaScript
window.open(URL);
```

### 关闭标签页

```JavaScript
window.close(URL);
```

### 对话框

```JavaScript
//警告框
alert("内容");
//选择框，选择确定返回true，否则返回false
confirm("内容");
//输入框，返回输入的内容
prompt("内容");
```

## 定时器

::: tip 提示
window 在调用的时候可以省略
:::

### setTimeout

`setTimeout(调用函数,[延时时间])`方法用于设置一个定时器，该定时器在定时器到期后执行调用函数（延时执行代码）。

::: tip 提示

- 延时时间单位是毫秒，省略默认为 0
- 调用函数可以直接写函数，或者写函数名或者采取字符串`"函数名()"`（不推荐）三种形式

:::

```JavaScript
let 定时器名 = setTimeout(() => {

}, 延时时间);

//停止定时器
clearTimeout(定时器名);
```

### setInterval

setlnterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数

::: tip 提示

- 延时时间单位是毫秒，省略默认为 0
- 调用函数可以直接写函数，或者写函数名或者采取字符串`"函数名()"`（不推荐）三种形式

:::

```JavaScript
let 定时器名 = setInterval(() => {

}, 间隔时间);

//停止定时器
clearInterval(定时器名)
```

## JavaScript 执行队列

### JavaScript 是单线程

JavaScript 语言的一大特点就是**单线程**，也就是说，**同一个时间只能做一件事**。这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是 ∶ 如果 JavaScript 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

### 同步

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。  
比如做饭的同步做法：我们要烧水煮饭，等水开了（10 分钟之后），再去切菜，炒菜。

### 异步

你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。  
比如做饭的异步做法，我们在烧水的同时，利用这 10 分钟，去切菜，炒菜。

### JavaScript 执行机制

1. 先**执行执行栈中的同步任务**。
2. 异步任务（回调函数）放入任务队列中。
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取**任务队列**中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为**事件循环（eventloop）**.

## location 对象

### URL

统一资源定位符(Uniform Resource Locator,URL)是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

### location 对象的属性

| location 对象属性    | 返回值                           |
| -------------------- | -------------------------------- |
| **location\.href**   | 获取或者设置整个 URL             |
| location\.host       | 返回主机\(域名\)                 |
| location\.port       | 返回端口号如果未写返回空字符串   |
| location\.pathname   | 返回路径                         |
| **location\.search** | 返回参数                         |
| location\.hash       | 返回片段\#后面内容常见于链接锚点 |

```JavaScript
// 获取或者设置整个 URL
console.log(location.href);
// 返回参数
console.log(location.search);
```

### location 对象的方法

- 跳转页面（重定向页面）

  ```JavaScript
  location.assign("URL");
  ```

- 替换当前页面，不记录历史，所以不能后退页面

  ```JavaScript
  location.replace("URL");
  ```

- 重新加载页面，相当于刷新按钮或者 f5 如果参数为 true 强制刷新 ctrl+f5

  ```JavaScript
  location.reload();
  ```

## navigator 对象

navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

### 获取 UA

```JavaScript
console.log(navigator.userAgent);
```

### 判断客户端设备

```JavaScript
if (
    navigator.userAgent.match(
    /(phone|padlpod|iPhone|iPod|ios|iPad|Android| Mobilel|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
) {
    //手机
    window.location.href = "URL";
} else {
    // 电脑
    window.location.href = "URL";
}
```

## history 对象

window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的 URL。

- 后退

  ```JavaScript
  history.back();
  ```

- 前进

  ```JavaScript
  history.forward();
  ```

- 前进/后退

  如果是参数为 1 则前进 1 个页面，如果是-1 后退 1 个页面

  ```JavaScript
  history.go(参数);
  ```
