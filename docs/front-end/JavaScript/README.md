# JavaScript 笔记

## 常用效果插件

- 常用特效展示： [superslide2](http://www.superslide2.com/demo.html)
- 触摸插件：[Swiper](https://www.swiper.com.cn/demo/index.html)
- 全屏滚动插件： [fullPage.js ](http://www.jq22.com/jquery-info1124)
- ECharts 图表数据插件：[ECharts](http://echarts.baidu.com/index.html)
- Highcharts 图表数据插件：[Highcharts](http://www.hcharts.cn/index.php)

## 基本语法

### 注释

```JavaScript
//单行注释
/* 多行注释 */

/**
函数文档注释
*/
function 函数名() {

}
```

### 声明变量

```JavaScript
let 变量名;
```

### 声明常量

```JavaScript
const 变量名;
```

::: tip 提示
变量和常量区分大小写
首字母必须是字母或*或\$，其他字母可以是*或\$或数组
:::

### 数据类型

- Nubmer : 数值
- Float : 浮点型
- String : 字符串
- Boolearn : 布尔值

### 获取数据类型

```JavaScript
typeof 变量
```

### 数据类型转换

转数值：`Number()`  
转整数：`parseInt()`  
转浮点：`parseFloat()`  
转文本：`String()`  
转布尔：`Boolean()`

::: tip 提示
转布尔除 `""`、`0`、`undefined`、`null`、`NaN`值均为 true
:::

### 关系运算符

- 等于 : ==
- 恒等于 : == （检查数据类型）
- 不等于 : !=
- 大于 : >
- 小于 : <>
- 小于等于 : >=
- 大于等于 : <=

### 与或非

- 与：`&&`
- 或：`||`
- 非：`!`

### 三元运算符

```JavaScript
返回值 = 条件 ? 真 - 返回值 : 假 - 返回值
```

```JavaScript
let a = x > 10 ? 'red' : 'blue'
```

### 模板字符串

```JavaScript
const 变量 = `字符串：${变量}`
```

### 四舍五入

将数字四舍五入，转为指定小数位的数字

```JavaScript
变量.toFixed(小数位数)
```

## 函数

::: tip 提示

- 所有参数会放在函数的`arguments`对象中，可当作数组使用
- 立即执行函数用完即销毁，返回值为`undefine`

:::

### 声明写法

```JavaScript
/**
 * 函数说明
 * @author 作者
 * @version	@version 版本号
 * @param {参数类型} 参数说明
 * @return {返回值类型}
 */
function 函数名() {

}

function 函数名([参数1, 参数2 = 默认值]) {
    return 返回值;
}
```

### 表达式写法

命名函数表达式：

```JavaScript
let 变量 = function 函数名() {

}

// 使用
变量()
```

匿名函数表达式：

```JavaScript
let 变量 = function() {

}

// 使用
变量()
```

::: tip 提示
在`{}`后加`()`即可成为立即执行函数
:::

### 立即执行函数

定义后便会立即执行的函数

```JavaScript
(function() {

}())
```

### 箭头函数

```JavaScript
const 箭头函数 = () => {

}
const 箭头函数 = (参数1, 参数2) => {

}
```

### 纯函数

在程序设计中，若一个函数符合一下条件，那么这个函数被称为纯函数：

1. 确定的输入，一定会产生确定的输出
2. 函数在执行过程中，不能产生副作用（不能修改原参数）

**为什么纯函数在函数式编程中非常重要呢?**

- 因为可以安心的写和安心的用
- 在写的时候保证了函数的纯度，只是但是实现自己的业务逻辑即可，不需要关心传入的内容或者依赖其他的外部变量
- 在用的时候，确定了输入内容不会被任意篡改，并且自己确定的输入，一定会有确定的输出

```JavaScript
// 纯函数
function sum(num1, num2) {
    return num1 + num2;
}

// 纯函数
function pringInfo(info) {
console.log(info.name, info.age);
}

// 不是纯函数
let foo = 10
function add(num) {
    return foo + num;
}

add(5) //15
foo = 20
add(5) //25

// 不是纯函数
const baz = {
    count: 10,
}

function add3(num) {
    return bar.count + num;
}

baz.count = 20
```

## 类和方法

### 声明类

```JavaScript
calss 类名 {
    constructor(参数) {
        //构造函数
        this.属性 = 参数;
        this.属性 = 属性值;
    }
    方法名() {

    }
}
```

### 实例化类

```JavaScript
let 对象 = new 类名()
console.log(对象.属性)
对象.方法名()
```

### 继承类

```JavaScript
calss 类名 extends 继承类名 {
    // 子类中必须初始化父类对象
    super()
}
```

## 数组

### 声明

```JavaScript
let 变量名 = ['值1', '值2', '值3', '值4']
```

### 使用

```JavaScript
console.log(变量名[0])
```

### 获取数组长度

```JavaScript
console.log(变量名.length)
```

### 获取指定数据索引

```JavaScript
变量名.indexOf(指定数据)
```

### 遍历数组

- 值遍历

```JavaScript
for (let item of 数组名) {
    console.log(item)
}
```

- forEach

```JavaScript
数组名.forEach(function(item) {
    console.log(item)
})
```

- 下标遍历

```JavaScript
for (let n in 数组名) {
    console.log(数组名[n])
}
```

### 分割数组

```JavaScript
新数组 = 数组.slice(起始位置, 结束位置);

// 取前4位元素
新数组 = 数组.slice(0, 4);
```

### 增加元素 unshift

在数组最签前面增加元素（支持多个参数）

```javaScript
数组名.unshift(元素名称)
```

### 增加 push

在数组最后增加元素（支持多个参数）

```javaScript
数组名.push(元素名称)
```

### shift

删除数组第一个元素

```javaScript
数组名.shift()
```

### pop

删除数组最后的一个元素

```javaScript
数组名.pop()
```

### splice

```JavaScript
//删除元素：
数组名.splice(位置, 删除几个元素)
//插入元素：
数组名.splice(位置, 0, 插入的元素[, 插入的元素]...)
//替换元素：
数组名.splice(位置, 替换几个元素, 替换的值[, 替换的值]...)
//截取元素个数：
数组名.splice(起始位置, 结束位置)
```

## Object 对象

### 声明

```JavaScript
let 对象名 = {
    键名1: 值,
    键名2: ['数组1', '数组2', '数组3'],
    键名3: {
        内嵌键名1: 值,
        内嵌键名2: 值,
    },
}
```

### 使用

```JavaScript
console.log(对象名.键名)
```

## 字符串

### 寻找字符串

找到则返回字符串所在的位置，否则返回-1

```JavaScript
位置 = 字符串.indexOf(寻找的字符串)
```

### 分割字符串

```JavaScript
集合 = 字符串.split("需要分割的文本")
```

## Json

### Object 转 Json 对象

```JavaScript
JSON.stringify(Object);
```

### Json 对象 转 JavaScript 对象

```JavaScript
JSON.parse(Json);
```

## Math 类

### 向上取整

将小数向上取整，如 4.5 为 5

```JavaScript
Math.ceil(数字)
```

### 向下取整

将小数向下取整，如 4.5 为 4

```JavaScript
Math.floor(数字)
```

### 取绝对值

```JavaScript
Math.abs(数字)
```

## Date 类

::: tip 提示
Date() 是一个构造函数，必须使用 new 来创建日期对象
:::

### 获取当前时间

如果没有参数则返回当前时间

```js
let date = new Date();
```

### 创建日期对象

参数常用的写法：

- 数字型： 2019、10、01
- 字符串型： "2019-10-1 8:8:8"

```js
let date = new Date("2019-10-1 8:8:8");

// 返回当前年份
date.getFullYear();
// 返回当前月份（从0开始，需要+1）
date.getMonth() + 1;
// 返回当前日
date.getDate();
// 返回星期几（周一返回1，周六返回6，但周日返回的是0）
date.getDay() + 1;

// 返回小时
date.getHours();
// 返回分钟
date.getMinutes();
// 返回秒
date.getSeconds();
```

### 获取总毫秒数（时间戳）

::: tip 提示
时间戳永远不会重复
:::

获取距离**1970 年到当前时间**的总毫秒数。

```js
Date.now();
```

### 格式化时间

使用：

```JavaScript
const date = new Date(时间（ 秒） * 1000)
console.log(formatDate(date, 'yyyy-MM-dd hh-mm'))
```

::: details 点击查看代码

```JavaScript
/**
 * 格式化时间
 * @param {Date} date 时间
 * @param {String} fmt 需要格式化的格式
 */
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp( `(${k})` ).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};
```

:::

## 常用方法

### 打印内容

```JavaScript
console.log('打印内容');
```

### 弹出提示

```JavaScript
alert("提示信息");
```

### 转换为 JSON 数据

```JavaScript
JSON数据 = JSON.stringify(需要转换为JSON的数据);
```

### 生成随机数

```javaScript
randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
```

### 跳转页面

```JavaScript
location.href = '页面路径';
```

## 定时器

### setTimeout

延时执行代码

```JavaScript
对象 = setTimeout(() => {

}, 时间[毫秒])

//停止定时器
clearTimeout(对象)
```

### setInterval

每隔一段时间执行代码

```JavaScript
对象 = setInterval(() => {

}, 1000);

//停止定时器
clearInterval(对象)
```

## 高阶函数

高阶函数：至少满足一下条件之一：

- 接受一个或多个函数作为输入
- 输出一个函数

### filter

**filter**函数一般用于过滤满足条件的数组数据

回调函数有三个参数：

- 参数一：执行时的对应元素
- 参数二：对应的下标值
- 参数三：完整的数组对象

filter 中的的回调函数需要返回一个布尔值

- true : 函数内部会自动将这次回调的 item 加入到新的数组中
- false : 函数内部会过滤掉这次的 item

```javaScript
let 新数组名 = 数组名.filter((item) => {

})
```

```javaScript
//需求：过滤数组中小于50的数字
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newnubs = nums.filter((item) => {
    return item < 50
})
console.log(newnubs)
//结果：[10, 20, 40, 50]
```

### map

**map**函数一般用于批量改变数组中的数据

回调函数有三个参数：

- 参数一：执行时的对应元素
- 参数二：对应的下标值
- 参数三：完整的数组对象

返回值为加入到新的数组中的数据

```javaScript
let 新数组名 = 数组.map((item) => {

})
```

```javaScript
//需求：将数组中的左右数据都乘2
newnubs = [10, 20, 40, 50]
let new2nums = newnubs.map((item) => {
    return item * 2
})
console.log(newnubs)
//结果：[20, 40, 80, 100]
```

### reduce

**reduce**一般对数组中的所有内容进行汇总（例如将数组中的数据相加/相乘，返回一个总和）

```javaScript
新数组名称 = 数组名称.reduce((上一次值, item) => {

}, 初始值)
```

```javaScript
//需求：将数组内的所有数字进行求和
new2Nums = [20, 40, 80, 100]
total = new2Nums.reduce((preValue, item) => {
    return preValue + item
}, 0)
console.log(total)
//结果：240
```

## DOM

### 选择器

#### querySelectorALL（常用）

匹配指定 CSS 选择器，找出所有匹配的节点并**返回数组**

```JavaScript
document.querySelectorALL(CSS选择器)
```

```JavaScript
//通过id查询
document.querySelectorALL("#div1")
//通过class查询
document.querySelectorALL(".div1")
//通过标签查询
document.querySelectorALL("h1")
```

#### querySelector

匹配指定 CSS 选择器，找到第一个匹配节点后就返回节点对象

```JavaScript
document.querySelector(CSS选择器)
```

```JavaScript
//通过id查询
document.querySelector("#div1")
//通过class查询
document.querySelector(".div1")
//通过标签查询
document.querySelector("h1")
```

#### 通过元素的 ID 属性获取

```JavaScript
document.getElementById(ID名)
```

#### 通过元素的标签名获取

```JavaScript
document.getElementsByTagName("标签名")
```

```JavaScript
document.getElementsByTagName("input")
```

#### 通过元素的类名获取

```JavaScript
document.getElementsByClassName("类名")
```

### 节点操作

#### 获取子节点

```JavaScript
元素.children
```

#### 获取父节点

```JavaScript
元素.parentNode
```

#### 获取第一节点

```JavaScript
元素.firstElementChild
```

#### 获取最后节点

```JavaScript
元素.lastElementChild
```

### DOM 元素属性

DOM 的元素可通过 `元素. 属性名` 来访问

- className: 当前元素类名
- id: 元素 ID
- innerHTML: 当前元素的所有内容（包含 HTML 标签）
- innerText: 当前元素中所有的文本内容（没有元素标签）
- onclick: 元素的点击事件
- onmouseover: 鼠标划过事件
- onmouseout: 鼠标离开事件
- style: 当前元素所有**行内样式**值（获取和操作只能写的标签上）

### 元素属性操作

设置元素属性：

```JavaScript
元素.setAttribute("名称", "值")
```

```JavaScript
txt1.setAttribute("value", "aaa")
```

获取元素属性：

```JavaScript
元素.getAttribute("名称")
```

删除元素属性：

```JavaScript
元素.removeAttribute("名称")
```

### 创建元素

```JavaScript
const 元素 = document.createElement("标签名")
元素.innerHTML = "内容"
父元素.appendChild((元素)
```

```JavaScript
const li = document.createElement('li')
li.innerText = "内容"
元素.appendChild(li)
```

### 插入元素

在原有节点之前插入元素

```JavaScript
const 元素 = document.createElement("标签名")
insertBefore(节点, 原有节点)
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

## 事件

`document`是整个页面的集合，第一个子节点是`<! DOCTYPE>`，第二个子节点是`<html>`

::: tip 提示
在 body 中，没有内容即没有高度
:::

### 事件冒泡

事件除了触发本级，还会向父级传递

禁止事件冒泡：

```JavaScript
event.cancelBubble = true;
```

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

### 鼠标事件

移入：

```JavaScript
组件.onmouseover = function(event) {

}
```

移出：

```JavaScript
组件.onmouseout = function(event) {

}
```

移动：

```JavaScript
组件.onmousemove = function(event) {
    console.log("X坐标：" + event.pageX);
    console.log("Y坐标：" + event.pageY);
}
```

### 键盘事件

按键：

```JavaScript
组件.onkeypress = function(event) {
    console.log("按键：" + event.key);
}
```

按下按键：

```JavaScript
组件.onkeydown = function(event) {
    console.log("按下的按键：" + event.key);
}
```

弹起按键：

```JavaScript
组件.onkeyup = function(event) {
    console.log("按下的按键：" + event.key);
}
```

组合键：`ctrlKey`、`altKey`、`shiftKey`

```JavaScript
组件.onkeyup = function(event) {
    if (event.key == "按键" && event.ctrlKey) {

    }
}
```

### 自定义右键菜单

```JavaScript
document.oncontextmenu = function(event) {
    div1.style.display = "block"
    div1.style.left = event.clientX + "px";
    div1.style.top = event.clientY + "px";
    //阻止默认事件
    return false
}
```

### 页面加载完成事件

```JavaScript
window.onload = function() {

}
```

### 点击事件

```JavaScript
组件.onclick = function(event) {
    //阻止默认事件（如提交按钮等）
    event.preventDefault();
}
```

## BOM

`document`内的东西都属于 BOM

### 打开标签页

```JavaScript
window.open(URL)
```

### 关闭标签页

```JavaScript
window.close(URL)
```

### 获取 UA

```JavaScript
console.log(window.navigator.userAgent);
```

### 获取 URL 路径

```JavaScript
console.log(window.location)
```

### 获取滚动条位置

```JavaScript
window.onscroll = function () {
    console.log(document.documentElement.scrollTop)
}
```

### 对话框

```JavaScript
//警告框
alert("内容")
//选择框，选择确定返回true，否则返回false
confirm("内容")
//输入框，返回输入的内容
prompt("内容")
```

## Generator

Generator 是生成器函数，每一次使用迭代器的 next 方法便会返回一个新的返回值，直到返回值使用完毕返回 undefined

### 定义生成器

```JavaScript
function* 生成器函数名() {
    yield 返回值1;
    yield 返回值2;
    yield 返回值3;
}
```

### 使用迭代器

调用一次 next，就会消耗一次迭代器

```JavaScript
const 迭代器 = 生成器函数名();
console.log(迭代器.next().value);
console.log(迭代器.next().value);
```
