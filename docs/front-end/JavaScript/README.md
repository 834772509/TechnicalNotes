# JavaScript 笔记

## 基本语法

### 注释

``` JavaScript
//单行注释
/* 多行注释 */

/**
函数文档注释
*/
function test() {

}
```

### 声明变量

``` JavaScript
let 变量名;
```

### 声明常量

``` JavaScript
const 变量名;
```

::: tip 提示
变量和常量区分大小写
首字母必须是字母或_或$，其他字母可以是_或$或数组
:::

### 数据类型

* Nubmer : 数值
* Float : 浮点型
* String : 字符串
* Boolearn : 布尔值

### 数据类型转换

转数值：```Number()```
转整数：```parseInt()```
转浮点：```parseFloat()```
转文本：```String()```
转布尔：```Boolean()```

::: tip 提示
转布尔除 ```""```、```0```、```undefined```、```null```、```NaN```值均为true
:::

### 关系运算符

* 等于 : ==
* 恒等于 : == （检查数据类型）
* 不等于 : !=
* 大于 : >
* 小于 : <>
* 小于等于 : >=
* 大于等于 : <=


### 与或非

* 与：```&&```
* 或：```||```
* 非：```!```

### 三元运算符

``` JavaScript
返回值 = 条件 ? 真-返回值 : 假-返回值
```

``` JavaScript
let a = x > 10 ? 'red' : 'blue'
```

### Object 对象

``` JavaScript
let 对象名 = {
  键名1: 值,
  键名2: ['数组1','数组2','数组3'],
  键名3: {
    内嵌键名1: 值,
    内嵌键名2: 值,
  },
}
```

使用

``` JavaScript
console.log(对象名.键名)
```

## 函数

::: tip 提示
* 所有参数会放在函数的```arguments```对象中，可当作数组使用
* 立即执行函数用完即销毁，返回值为```undefine```
:::

### 声明写法

``` JavaScript
function 函数名(){

}

function 函数名([参数1,参数2 = 默认值]){
return 返回值;
}

//立即执行函数
(function(){

}())

函数名();
函数名(参数1,参数2);
```

### 表达式写法

命名函数表达式：

``` JavaScript
let 变量 = function 函数名(){

}

变量()
```

匿名函数表达式：


``` JavaScript
let 变量 = function(){

}

变量()
```

::: tip 提示
在```{}```后加```()```即可成为立即执行函数
:::

### 箭头函数

``` JavaScript
const 箭头函数 = () =>{

}
const 箭头函数 = (参数1,参数2) =>{

}
```

## 类和方法

``` JavaScript
calss 类名{
  方法名(){

  }
}
```

## 数组

### 声明

``` JavaScript
let 变量名 = ['值1','值2','值3','值4']
```

### 使用

``` JavaScript
console.log(变量名[0])
```

### 获取数组长度

``` JavaScript
console.log(变量名.length)
```

### 获取指定数据索引

``` JavaScript
变量名.indexOf(指定数据)
```

### 遍历数组

``` JavaScript
数组名.forEach(function(item){
  console.log(item)
})
```

``` JavaScript
for(let item of 数组名){
  console.log(item)
}
```

``` JavaScript
for(let n in 数组名){
  console.log(数组名[n])
}
```

### 增加元素 unshift

在数组最签前面增加元素（支持多个参数）

``` javaScript
数组名.unshift(元素名称)
```

### 增加 push

在数组最后增加元素（支持多个参数）

``` javaScript
数组名.push(元素名称)
```

### shift

删除数组第一个元素

``` javaScript
数组名.shift()
```

### pop

删除数组最后的一个元素

``` javaScript
数组名.pop()
```

### splice

``` JavaScript
//删除元素：
数组名.splice(位置,删除几个元素)
//插入元素：
数组名.splice(位置,0,插入的元素[,插入的元素]...)
//替换元素：
数组名.splice(位置,替换几个元素,替换的值[,替换的值]...)
```

## 常用方法

### 打印内容

``` JavaScript
console.log('打印内容')
```

### 弹出提示

``` JavaScript
alert("提示信息")
```

### 转换为JSON数据

``` JavaScript
JSON数据 = JSON.stringify(需要转换为JSON的数据)
```

### 定时器

#### setTimeout

延时执行代码

``` JavaScript
对象 = setTimeout(()=>{

},时间[毫秒])

//停止定时器
clearTimeout(对象)
```

#### setInterval

每隔一段时间执行代码

``` JavaScript
对象 = setInterval(() => {
  
}, 1000);

//停止定时器
clearInterval(对象)
```

### 格式化时间

使用：

``` JavaScript
const date  = new Date(时间（秒） * 1000)
console.log(formatDate(date,'yyyy-MM-dd hh-mm'))
```

::: details 点击查看代码

``` JavaScript
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
    if (new RegExp(`(${k})`).test(fmt)) {
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

### 生成随机数

``` javaScript
randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
```

### 跳转页面

``` JavaScript
location.href='页面路径'
```

## 高阶函数

### filter

**filter**函数一般用于过滤满足条件的数组数据  

filter中的的回调函数需要返回一个布尔值

* true : 函数内部会自动将这次回调的item加入到新的数组中
* false : 函数内部会过滤掉这次的item

``` javaScript
let 新数组名 = 数组名.filter( (item) => {

})
```

``` javaScript
//需求：过滤数组中小于50的数字
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newnubs = nums.filter( (item) => {
    return item < 50
})
console.log(newnubs)
//结果：[10, 20, 40, 50]
```

### map

**map**函数一般用于批量改变数组中的数据

返回值为加入到新的数组中的数据

``` javaScript
let 新数组名 = 数组.map( (item) => {

})
```

``` javaScript
//需求：将数组中的左右数据都乘2
newnubs = [10, 20, 40, 50]
let new2nums = newnubs.map( (item) => {
    return item * 2
})
console.log(newnubs)
//结果：[20, 40, 80, 100]
```

### reduce

**reduce**一般对数组中的所有内容进行汇总（例如将数组中的数据相加/相乘，返回一个总和）

``` javaScript
新数组名称 = 数组名称.reduce((上一次值, item) => {

}, 初始值)
```

``` javaScript
//需求：将数组内的所有数字进行求和
new2Nums = [20, 40, 80, 100]
total = new2Nums.reduce((preValue, item) => {
  return preValue + item
}, 0)
console.log(total)
//结果：240
```

## ＤＯＭ

### 选择器

#### 通过元素的ID属性获取

``` JavaScript
document.getElementById(ID名)
```

#### 通过元素的标签名获取

``` JavaScript
document.getElementsByTagName("标签名")
```

``` JavaScript
document.getElementsByTagName("input")
```

#### 通过元素的类名获取

``` JavaScript
document.getElementsByClassName("类名")

```

#### querySelectorALL

``` JavaScript
document.querySelectorALL(查询名称)
```

``` JavaScript
document.querySelectorALL(.user)
document.querySelectorALL(h1)
```

#### querySelector

``` JavaScript
document.querySelector(查询名称)
```

``` JavaScript
document.querySelector(.user)
document.querySelector(h1)
```

### 节点操作

#### 获取子节点

``` JavaScript
元素.children
```

#### 获取父节点

``` JavaScript
元素.parentNode
```

#### 获取第一节点

``` JavaScript
元素.firstElementChild
```

#### 获取最后节点

``` JavaScript
元素.lastElementChild
```

### DOM元素属性

DOM的元素可通过 ```元素.属性名``` 来访问

* className: 当前元素类名
* id: 元素ID
* innerHTML: 当前元素的所有内容（包含HTML标签）
* innerText: 当前元素中所有的文本内容（没有元素标签）
* onclick: 元素的点击事件
* onmouseover: 鼠标划过事件
* onmouseout: 鼠标离开事件
* style: 当前元素所有**行内样式**值（获取和操作只能写的标签上）

### 元素属性操作

设置元素属性：

``` JavaScript
元素.setAttribute("名称","值")
```

``` JavaScript
txt1.setAttribute("value","aaa")
```

获取元素属性：

``` JavaScript
元素.getAttribute("名称")
```

删除元素属性：

``` JavaScript
元素.removeAttribute("名称")
```

### 事件

页面加载完成事件

``` JavaScript
window.onload = function(){

}
```

点击事件

``` JavaScript
const btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
  //阻止默认事件（如提交按钮）
  e.preventDefault();
})
```

移入事件

``` JavaScript
const btn = document.querySelector('.btn')
btn.addEventListener('mouseover',(e)=>{

})
```

移入事件

``` JavaScript
const btn = document.querySelector('.btn')
btn.addEventListener('mouseout',(e)=>{

})
```

### 创建元素

``` JavaScript
const 元素 = document.createElement("标签名")
父元素.appendChild((元素)
```

``` JavaScript
const li = document.createElement('li')
li.innerText = "内容"
元素.appendChild(li)
```

### 插入元素

在原有节点之前插入元素

``` JavaScript
const 元素 = document.createElement("标签名")
insertBefore(节点,原有节点)
```
