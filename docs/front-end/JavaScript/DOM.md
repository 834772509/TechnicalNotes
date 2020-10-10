# DOM

## 基本概念

### 什么是 DOM

文档对象模型(DocumentObject Model，简称 **DOM**），是 W3C 组织推荐的处理可扩展标记语言(HTML 或者 XML）的标准**编程接口**。
W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

### DOM 树

- 文档：一个页面就是一个文档，DOM 中使用 document 表示
- 元素：页面中的所有标签都是元素，DOM 中使用 element 表示
- 节点:网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示

**DOM 把以上内容都看做是对象**

## 获取元素

### 通过元素的 ID 属性获取

使用 getElementByld()方法可以获取带有 ID 的元素对象。

```JavaScript
document.getElementById(ID名);
```

```html
<div id="ID名"></div>
```

### 通过元素的标签名获取

使用 getElementsByTagName()方法可以返回带有指定标签名的**对象集合**。

```JavaScript
document.getElementsByTagName("标签名");
```

```JavaScript
document.getElementsByTagName("input");
```

### 通过元素的类名获取

使用 getElementsByTagName()方法可以返回带有根据类名返回元素**对象集合**。

```JavaScript
document.getElementsByClassName("类名");
```

### querySelector

匹配指定 CSS 选择器，找到第一个匹配节点后就返回节点对象

```JavaScript
document.querySelector(CSS选择器);
```

```JavaScript
//通过id查询
document.querySelector("#div1");
//通过class查询
document.querySelector(".div1");
//通过标签查询
document.querySelector("h1");
```

### querySelectorALL

匹配指定 CSS 选择器，找出所有匹配的节点并**返回数组**。

```JavaScript
document.querySelectorALL(CSS选择器);
```

```JavaScript
//通过id查询
document.querySelectorALL("#div1");
//通过class查询
document.querySelectorALL(".div1");
//通过标签查询
document.querySelectorALL("h1");
```

## 事件基础

`document`是整个页面的集合，第一个子节点是`<! DOCTYPE>`，第二个子节点是`<html>`

::: tip 提示
在 body 中，没有内容即没有高度
:::

### 事件三要素

1. 事件源：事件被触发的对象
2. 事件类型：如何触发,什么事件
3. 事件处理程序：通过一个函数赋值的方式

### 绑定事件

`addEventListener`适用于**多次绑定事件**，on 事件多次绑定会**覆盖**

```JavaScript
组件.addEventListener("事件名", function() {

}
```

::: tip 提示
事件名不带**on**
:::

### 解除绑定事件

```JavaScript
组件.detachEvent("事件名", 函数);
```

### 事件冒泡

事件除了触发本级，还会向父级传递

禁止事件冒泡：

```JavaScript
event.cancelBubble = true;
```

### 点击事件

```JavaScript
组件.onclick = function(event) {
    //阻止默认事件（如提交按钮等）
    event.preventDefault();
}
```

### 页面加载完成事件

```JavaScript
window.onload = function() {

}
```

### 鼠标事件

- 移入

  ```JavaScript
  组件.onmouseover = function(event) {

  }
  ```

- 移出

  ```JavaScript
  组件.onmouseout = function(event) {

  }
  ```

- 移动

  ```JavaScript
  组件.onmousemove = function(event) {
      console.log("X坐标：" + event.pageX);
      console.log("Y坐标：" + event.pageY);
  }
  ```

### 键盘事件

- 按键：

  ```JavaScript
  组件.onkeypress = function(event) {
      console.log("按键：" + event.key);
  }
  ```

- 按下按键：

  ```JavaScript
  组件.onkeydown = function(event) {
      console.log("按下的按键：" + event.key);
  }
  ```

- 弹起按键：

  ```JavaScript
  组件.onkeyup = function(event) {
      console.log("按下的按键：" + event.key);
  }
  ```

- 组合键：`ctrlKey`、`altKey`、`shiftKey`

  ```JavaScript
  组件.onkeyup = function(event) {
      if (event.key == "按键" && event.ctrlKey) {

      }
  }
  ```

### 焦点事件

- 获得焦点

  ```JavaScript
  组件.onfocus = function() {

  }
  ```

- 失去焦点

  ```JavaScript
  组件.onblur = function() {

  }
  ```

### 自定义右键菜单

```html
<div id="ID名">
  <h2>右键菜单</h2>
</div>
```

```JavaScript
let menu = document.getElementById(ID名);

document.oncontextmenu = function(event) {
  menu.style.display = "block"
  menu.style.left = event.clientX + "px";
  menu.style.top = event.clientY + "px";
  //阻止默认事件
  return false;
}
```

## 操作元素

### 改变元素内容

::: tip 提示
innerText 和 innerHTML 的区别：

- innerText 不识别 html 标签
- innerText 为非标准，而 innerHTML 为 W3C 标准。因此推荐是使用 innerHTML
  :::

```JavaScript
// 起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行
element.innerHTML = "内容";
// 从起始位置到终止位置的内容,但它去除html标签，同时空格和换行也会去掉
element.innerText = "内容";
```

### 操作元素属性

- 获取元素属性：

  ```JavaScript
  元素.属性名
  ```

  ```JavaScript
  txt1.value;
  img.src
  ```

- 设置元素属性：

  ```JavaScript
  元素.属性名 = 值;
  ```

  ```JavaScript
  txt1.value = "内容";
  ```

- 删除元素属性：

  ```JavaScript
  元素.属性名 = "";
  ```

### 自定义属性

getAttribute()方法主要用来获取自定义属性，而`元素.属性`用于获取内置属性。

::: tip 提示
dataset 是一个集合，里面存放了所有以 data 开头的自定义属性
:::

```html
<div data-属性名="值"></div>
```

- 获取元素属性：

  ```JavaScript
  元素.getAttribute("data-属性名");
  元素.dataset.属性名
  ```

- 设置元素属性：

  ```JavaScript
  元素.setAttribute("data-属性名", "值");
  ```

- 删除元素属性：

  ```JavaScript
  元素.removeAttribute("属性名");
  ```

### 操作元素样式

::: tip 提示

1. 样式采取驼峰命名法比如 fontsize、backgroundColor
2. JavaScript 修改 style 样式操作，产生的是行内样式，CSS 权重比较高
   :::

```JavaScript
// 行内样式操作
元素.style.样式名 = 值;
// 类名样式操作
元素.className = "类名";
```

## 节点操作

### 为什么学节点操作

利用节点层级关系获取元素：

- 利用父子兄节点关系获取元素
- 逻辑性强，但是兼容性稍差

### 节点概述

一般地，节点至少拥有 nodeType(节点类型)、nodeName(节点名称)和 nodeValue（节点值）这三个 基本属性。

- 元素节点 nodeType 为 1
- 属性节点 nodeType 为 2
- 文本节点 nodeType 为 3(文本节点包含文字、空格、换行等）

**我们在实际开发中，节点操作主要操作的是元素节点**

### 节点层级

利用 DOM 树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**。

1. 父节点

   parentNode 属性可返回某节点的父节点，注意是**最近的一个父节点**
   如果指定的节点没有父节点则返回 null

   ```JavaScript
   元素.parentNode
   ```

2. 子节点

   parentNode.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合。

   **注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等。**
   **如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用 childNodes**

   ```JavaScript
   元素.children
   ```

   ```JavaScript
   let ul = document.queryselector("ul");

   for(let i = 0; i < ul.childNodes.length;i++){
     if(ul.childNodes[i].nodeType == 1){
       // ll ul.childNodes[i]是元素节点
       console.log (ul.childNodes[i]);
     }
   }
   ```

   获取第一节点

   firstElementchild 返回第一个子元素节点，找不到则返回 null。

   ```JavaScript
   元素.firstElementChild
   ```

   获取最后节点

   lastElementchild 返回最后一个子元素节点，找不到则返回 null。

   ```JavaScript
   元素.lastElementChild
   ```

3. 兄弟节点

   nextElementsibling 返回当前元素下一个兄弟元素节点，找不到则返回 null。

   ```JavaScript
   元素.nextElementsibling
   ```

   previousElementsibling 返回当前元素上一个兄弟节点，找不到则返回 null。

   ```JavaScript
   元素.previousElementsibling
   ```

### 创建节点

document.createElement()方法创建由 tagName 指定的 HTM 元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。

```JavaScript
const 元素 = document.createElement("标签名");
```

### 增加节点

1. 元素.appendChild(子元素)

   将一个节点添加倒指定父节点的子节点列表**末尾**。类似于 css 里面的 after 伪元素。

2. 元素.insertBefore(子元素,原有节点元素)

   将一个节点添加到父节点的指定子节点前面。类似于 css 里面的 before 伪元素。

创建元素：

```JavaScript
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = "内容";
ul.appendChild(li);
```

### 删除节点

node.removeChild()方法从 DOM 中删除一个子节点，返回删除的节点。

```JavaScript
元素.removechild(子节点);
```

## 运动框架

```JavaScript
function startMove(obj, json, endFun) {
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }
    //开始前关闭之前obj上的定时器
    clearInterval(obj.timer);
    //定时器
    obj.timer = setInterval(function() {
        let bStop = true; //假设所有值都到目标
        for (let attr in json) { //循环json数组
            //单独处理透明度
            let cur
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }
            //速度处理
            let speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //如果当前的没到目标值
            if (cur != json[attr])
                bStop = false;
            //运动
            if (attr == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
        //所有的都到达目标值
        if (bStop) {
            clearInterval(obj.timer);
            if (endFun) endFun();
        }
    }, 15);
}
```

使用：

```JavaScript
startMove(div1, {
    width: 200,
    height: 200
})
```
