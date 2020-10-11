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

### querySelector（推荐）

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

### querySelectorALL（推荐）

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

## 事件基础

### 事件三要素

1. 事件源：事件被触发的对象
2. 事件类型：如何触发,什么事件
3. 事件处理程序：通过一个函数赋值的方式

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

- 移入事件

  ```JavaScript
  组件.onmouseover = function(event) {

  }
  ```

- 移出事件

  ```JavaScript
  组件.onmouseout = function(event) {

  }
  ```

- 移动事件

  ```JavaScript
  组件.onmousemove = function(event) {
      console.log("X坐标：" + event.pageX);
      console.log("Y坐标：" + event.pageY);
  }
  ```

- 右键事件

  ```JavaScript
  document.addEventListener("contextmenu",function(event){

  })
  ```

- 选中文字

  ```JavaScript
  document.addEventListener("selectstart",function(event){

  })
  ```

### 键盘事件

::: tip 提示
onkeydown 和 onkeyup 不区分字母大小写，onkeypress 区分字母大小写。
:::

- 按键：

  ```JavaScript
  组件.onkeypress = function(event) {
      console.log("按键：", event.KeyCode,event.key);
  }
  ```

- 按下按键：

  ```JavaScript
  组件.onkeydown = function(event) {
      console.log("按下的按键：", event.KeyCode,event.key);

  }
  ```

- 弹起按键：

  ```JavaScript
  组件.onkeyup = function(event) {
      console.log("弹起的按键：", event.KeyCode,event.key);
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

## 事件高级

### 传统注册事件方式

特点：注册事件的唯一性。同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

### 绑定事件

方法监听注册方式绑定事件，w3c 标准推荐方式。  
特点 ∶ 同一个元素同一个事件可以注册多个监听器

组件.addEventListener()方法将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。

::: tip 提示
事件名不带**on**
:::

```JavaScript
组件.addEventListener("事件名", function() {

}
```

::: tip 提示
`attachEvent()`为非标准，请尽量不要在生产环境中使用它
:::

### 解绑事件

```JavaScript
组件.removeEventListener("事件名", 函数名);
```

### 事件对象

事件发生后，**跟事件相关的一系列信息数据的集合**都放到这个对象里面，这个对象就是事件对象 event，它有很多属性和方法。

```JavaScript
组件.addEventListener("事件名", function(event) {

}
```

### event.target 和 this 区别

1. event.target 返回的是触发事件的对象（元素），this 返回的是绑定事件的对象
2. event.target 点击了哪个元素，就返回哪个元素，this 哪个元素绑定了这个点击事件，那么就返回谁

### 事件流

事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。

DOM 事件流分为 3 个阶段 ∶

1. 捕获阶段：由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程
2. 当前目标阶段
3. 冒泡阶段：事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程

### 事件冒泡

事件除了触发本级，还会向父级传递

禁止事件冒泡：

::: tip 提示
`event.cancelBubble`为非标准，请尽量不要在生产环境中使用它
:::

```JavaScript
event.stopPropagation()
```

### 阻止默认行为

::: tip 提示
`returnValue()`为非标准，请尽量不要在生产环境中使用它
:::

```JavaScript
event.preventDefault();
```

### 事件委托

事件委托：不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。  
事件委托的作用：只操作一次 DOM，提高了程序的性能

```HTML
<ul>
  <li>子元素</li>
  <li>子元素</li>
  <li>子元素</li>
</ul>
```

```JavaScript
let u1 = document.querySelector("ul");
u1.addEventListener("click",function(){
  console.log("点击");
})
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

### 删除节点

node.removeChild()方法从 DOM 中删除一个子节点，返回删除的节点。

```JavaScript
元素.removechild(子节点);
```

### 复制节点

node.cloneNode()方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点

::: tip 提示

- 如果括号参数为**空或者为 false**，则是**浅拷贝**，即只克隆复制节点本身，不克隆里面的子节点
- 如果括号参数为 true，则是**深度拷贝**，会复制节点本身以及里面所有的子节点

:::

```JavaScript
// 仅复制节点本身
const 克隆元素 = 元素.cloneNode();
// 复制节点本身以及里面所有的子节点
const 克隆元素 = 元素.cloneNode(true);
```

## 创建元素

### document.write()

document.write()直接写入页面的内容流，但是**文档流执行完毕，则它会导致页面全部重绘**

```JavaScript
document.write("<div>内容</div>");
```

### innerHTML

innerHTML 是将内容写入某个 DoM 节点，不会导致页面全部重绘

::: tip 提示
**innerHTML 创建多个元素效率更高**(不要拼接字符串，采取数组形式拼接），结构稍微复杂
:::

```JavaScript
let 元素 = document.querySelector(".div");
元素.innerHTML = "<div>内容</div>";
```

### document.createElement()

createElement()创建多个元素效率稍低一点点，但是结构更清晰

```JavaScript
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = "内容";
ul.appendChild(li);
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
