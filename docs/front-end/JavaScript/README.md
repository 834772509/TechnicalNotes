# JavaScript 笔记

## 常用效果插件

- 常用特效展示： [superslide2](http://www.superslide2.com/demo.html)
- 触摸插件：[Swiper](https://www.swiper.com.cn/demo/index.html)
- 全屏滚动插件： [fullPage.js ](http://www.jq22.com/jquery-info1124)
- ECharts 图表数据插件：[ECharts](http://echarts.baidu.com/index.html)
- Highcharts 图表数据插件：[Highcharts](http://www.hcharts.cn/index.php)

## 基本概念

### 预解析

JavaScript 代码是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器在运行 JavaScript 代码的时候分为两步：预解析和代码执行。

1. JavaScript 引擎运行 JavaScript 分为两步：预解析、代码执行

   - (1) 预解析 JavaScript 引擎会把 JavaScript 里面所有的 let 还有 function 提升到当前作用域的最前面
   - (2) 代码执行按照代码书写的顺序从上往下执行

2. 预解析分为变量预解析（变量提升）和函数预解析（函数提升）
   - (1) 变量提升：把所有的变量声明提升到当前的作用域最前面，不提升赋值操作
   - (2) 函数提升：把所有的函数声明提升到当前作用域的最前面，不调用函数

```JavaScript
let num = 10;
function fn(){
    console.log(num);
    let num = 20;
    console.log(num);
}
fn();

// 相当于以下代码：
let num;
function fn(){
    let num;
    console.log(num);
    num = 20;
    console.log(num);
}
num = 10;
fn();

// 结果：
// undefind
// 20
```

## 基本语法

### 注释

```JavaScript
//单行注释

/*
    多行注释
    多行注释
 */
```

### 声明变量

::: tip 提示
变量区分大小写
:::

```JavaScript
let 变量名;
```

### 声明常量

::: tip 提示
常量区分大小写
:::

```JavaScript
const 变量名;
```

### 解构赋值

::: tip 提示

- 左右两边结构必须一样
- 右边必须是个东西
- 声明和赋值赋值不能分开，必须在一句话里

:::

```JavaScript
// 结构 Object 对象
let 变量 = {元素1: 值, 元素2: 值};
const {元素1, 元素2} = 变量;

// 结构数组
let [元素1, 元素2, 元素3] = [1, 2, 3];
console.log(元素1, 元素2, 元素3)

let [元素1, 元素2, 元素3, 元素4] = [{ 键: 值, 键: 值 }, [1, 2, 3], 8, "字符串"]
console.log(元素1, 元素2, 元素3, 元素4)
```

### 数据类型

::: tip 提示

- ture 参与加法运算当 1 来看， false 参与加法运算当 0 来看。
- Undefined 和 数字相加 最后的结果是 NaN (Not a number)
  :::

- Nubmer : 数值
  - Float : 浮点型
- String : 字符串
- Boolean : 布尔值
- Undefined : 声明了变量但没有赋值，此时变量的值为 Undefined
- Null : 声明的变量为空值
- object : 对象

### 数据类型转换

::: tip 提示
转布尔除 `""`、`0`、`undefined`、`null`、`NaN`值均为 true
:::

- 转数字：
  - **转整数**：`parseInt(变量)`
  - **转浮点**：`parseFloat(变量)`
  - 强制转换：`Number(变量)`
  - 隐式转换：`"10" - 0`
- 转文本：
  - 强制转换：`String(变量);`
  - 转成字符串： `变量.toString()`
  - **加号拼接字符串**：`变量 + "字符串"`
- 转布尔：`Boolean(变量)`

### 获取数据类型

```JavaScript
typeof 变量;
```

### 判断是否为数字

如果是数字则返回 true，不是则返回 false

```JavaScript
isNaN(值);
```

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
返回值 = 条件 ? 真 - 返回值 : 假 - 返回值;
```

```JavaScript
let a = x > 10 ? 'red' : 'blue';
```

### 四舍五入

将数字四舍五入，转为指定小数位的数字，返回字符串。

```JavaScript
变量.toFixed(小数位数);

const num = 100.153;
console.log(num.toFixed(1)); // 100.1
console.log(num.toFixed(2)); // 100.15
```

### 打印内容

```JavaScript
console.log('打印内容');
```

### 弹出提示

```JavaScript
alert("提示信息");
```

### 跳转页面

```JavaScript
location.assign("URL");
```

## 函数

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

function 函数名(参数1, 参数2 = 默认值) {
    return 返回值;
}
```

### 表达式写法

命名函数表达式：

```JavaScript
let 变量 = function 函数名() {

};

// 使用
变量();
```

匿名函数表达式：

```JavaScript
let 变量 = function() {

};

// 使用
变量();
```

::: tip 提示
在`{}`后加`()`即可成为立即执行函数
:::

### 可变参

::: tip 提示
所有参数会放在函数的`arguments`对象中，可当作数组使用。  
arguments 对象是伪数组，没有数组的一些方法（如 pop()、push()）
:::

```JavaScript
function 函数名() {
  console.log(arguments)
}
```

### 剩余参数

收集剩余的参数，必须当到最后一个参数位置

```JavaScript
function 函数名(参数1, 参数2, ...剩余参数) {
  console.log(参数1, 参数2, 剩余参数);
}
```

### 立即执行函数

定义后便会立即执行的函数，返回值为`undefine`

```JavaScript
(function() {

}())
```

### 箭头函数

```JavaScript
const 箭头函数 = () => {

};
const 箭头函数 = (参数1, 参数2) => {

};
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

add(5); //15
foo = 20;
add(5); //25

// 不是纯函数
const baz = {
    count: 10,
}

function add3(num) {
    return bar.count + num;
}

baz.count = 20;
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
let 对象 = new 类名();
console.log(对象.属性);
对象.方法名();
```

### 继承类

```JavaScript
calss 类名 extends 继承类名 {
    // 子类中必须初始化父类对象
    super();
}
```

## 数组

### 声明

```JavaScript
// 字面量声明
let 数组名 = ["值1", "值2", "值3", "值4"];

// new Array
let 数组名 = new Array(); // 创建空数组
let 数组名 = new Array(10); // 创建长度为10的数组
let 数组名 = new Array(1,2); // 创建数组：[1,2]
```

### 使用

```JavaScript
console.log(数组名[0]);
// 展开使用
console.log(...数组名);
```

### 获取数组长度

```JavaScript
console.log(数组名.length);
```

### 判断是否为数组

- instanceof 运算符

  ```JavaScript
  console.log(数组名 instanceof Array);
  ```

- Array.isArray

  ```JavaScript
  console.log(Array.isArray(数组名));
  ```

### 获取指定数据索引

如果存在返回索引号，不存在则返回-1。

::: tip 提示
只返回满足条件的第一个索引
:::

```JavaScript
数组名.indexOf(指定数据);
```

### 获取最后一个索引

如果存在返回索引号，不存在则返回-1。

```JavaScript
数组名.lastIndexOf();
```

### 遍历数组

- 值遍历

  ```JavaScript
  for (let item of 数组名) {
      console.log(item);
  }
  ```

- forEach

  ```JavaScript
  数组名.forEach((item,index)=> {
    console.log(index,item);
  })
  ```

- 下标遍历

  ```JavaScript
  for (let n in 数组名) {
      console.log(数组名[n]);
  }
  ```

### 增加元素

- 在数组最前面增加元素（支持多个参数），返回值为新数组的长度

  ```javaScript
  数组名.unshift(元素名称);
  ```

- 在数组最后增加元素（支持多个参数），返回值为新数组的长度

  ```javaScript
  数组名.push(元素名称);
  ```

### 修改元素

```JavaScript
数组名[下标] = 值;
```

### 删除元素

- 删除数组第一个元素

  ```javaScript
  数组名.shift();
  ```

- 删除数组最后的一个元素

  ```javaScript
  数组名.pop();
  ```

### slice

::: tip 提示
slice()方法不会改变原数组
:::

```JavaScript
新数组 = 数组.slice(起始位置, 结束位置);

// 取前4位元素
新数组 = 数组.slice(0, 4);
```

### splice

::: tip 提示
splice()方法会改变原数组
:::

```JavaScript
//删除元素
数组名.splice(位置, 删除几个元素);
//插入元素
数组名.splice(位置, 0, 插入的元素[, 插入的元素]...);
//替换元素
数组名.splice(位置, 替换几个元素, 替换的值[, 替换的值]...);
//截取元素个数
数组名.splice(起始位置, 结束位置);
```

### 颠倒数组

```JavaScript
数组.reverse();
```

### 数组排序

::: tip 提示
sort()方法默认按照转换为的字符串的诸个字符的 Unicode 位点进行排序，因此需要指定一个排序函数。
:::

```JavaScript
数组名.sort(function (a, b) {
  return a - b; // 升序的顺序排列
  //return b - a; // 降序的顺序排列
});
```

### 数组去重

```JavaScript
function unique(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length;i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
```

### 数组转字符串

- toString

  ```JavaScript
  let arr = [1,2,3];
  console.log(数组名.toString()); //1,2,3
  ```

- join

  ```JavaScript
  let arr = ["a","b","c"];

  console.log(arr.join()); //a,b,c
  console.log(arr.join("-")); // a-b-c
  console.log(arr.join("&")); // a&b&c
  ```

## Object 对象

### 声明

```JavaScript
let 对象名 = {
    键名1: 值,
    键名2: ["数组1", "数组2", "数组3"],
    键名3: {
        内嵌键名1: 值,
        内嵌键名2: 值,
    },
    函数名: function() {

    }
};
```

### 使用

```JavaScript
console.log(对象名.键名);
console.log(对象名["键名"]);
对象名.函数名();
```

### 增加元素

```JavaScript
对象名.键名 = 值;
```

### 修改元素

```JavaScript
对象名.键名 = 值;
```

## Set 集合

Set 集合中的元素不可重复

### 声明

```js
let 集合名 = new Set();
```

### 集合方法

- 增加元素

```js
集合名.add(元素);
```

- 删除元素

```js
集合名.delete(元素);
```

- 清空集合

```js
集合名.clear();
```

- 判断元素是否存在

存在返回 true，不存在返回 false

```js
集合名.has(元素);
```

- 获取集合大小

```js
集合名.size;
```

- 遍历集合

```js
集合名.forEach((item) => {
  console.log(item);
});
```

### 转换数组

```js
lety 数组名 = Array.from(集合名);
```

## 字符串

### 字符串的不可变

指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。所以字符串不能大量拼接，会消耗性能。

- 拼接字符串，消耗性能

  ```JavaScript
  let str = "";
  for (let i = 1; i <= 1000000; i++) {
    str += i;
  }
  console.log(str);
  ```

- 数组形式拼接，效率较高

  ```JavaScript
  let arr = [];
  for (let i = 1; i <= 1000000; i++) {
    arr.push(i);
  }
  console.log(arr.join(""));
  ```

### 模板字符串

```JavaScript
const 变量 = `字符串：${变量}`;
```

### 字符串的拼接

::: tip 提示
只要有字符串和其他类型相拼接，最终的结果是字符串类型。
:::

::: tip 提示
数值相加，字符相连
:::

```JavaScript
let 字符串 = "文本" + "文本"; // 文本文本
let 字符串 = "文本" + 1; // 文本1
let 字符串 = "文本" + ture; // 文本ture
```

### 寻找字符串

- 找到则返回字符串所在的位置，否则返回-1

  ```JavaScript
  位置 = 字符串.indexOf(寻找的字符串,[起始位置]);
  ```

- 从后往前寻找字符串，找到则返回字符串所在的位置，否则返回-1

  ```JavaScript
  位置 = 字符串.lastIndexOf(寻找的字符串,[起始位置]);
  ```

### 根据位置返回字符

- 返回指定位置的字符

  ```JavaScript
  字符串.charAt(位置);
  ```

- 返回指定位置的字符的 ASCII 码

  ```JavaScript
  字符串.charCodeAt(位置);
  ```

- 获取指定位置处字符

  ```JavaScript
  字符串.str(位置);
  ```

### 获取字符串长度

```JavaScript
长度 = 字符串.length("字符串");
```

### 分割字符串

```JavaScript
集合 = 字符串.split("需要分割的文本");
```

### 截取字符串

- 截取指定个数

```JavaScript
字符串.substr(起始位置,字符个数);
```

- 截取指定位置，区间：`[起始位置,结束位置)`

```JavaScript
字符串.slice(起始位置,结束位置);
```

- 截取指定位置，不接受负值，区间：`[起始位置,结束位置)`

```JavaScript
字符串.substring(起始位置,结束位置);
```

### 替换字符串

::: tip 提示
replace() 方法只会替换第一个字符
:::

```JavaScript
/**
 * 替换字符串
 * @param {String} str 字符串
 * @param {String} subStr 需要替换的字符串
 * @param {String} replacement 替换内容
 * @return {String}
 */
function replaceString(str, subStr, replacement) {
  let result = str;
  while (result.indexOf(subStr) !== -1) {
    result = result.replace(subStr, replacement);
  }
  return result;
}
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

### 圆周率

```JavaScript
Math.PI
```

### 向上取整

将小数向上取整，如 4.5 为 5

```JavaScript
Math.ceil(数字);
```

### 向下取整

将小数向下取整，如 4.5 为 4

```JavaScript
Math.floor(数字);
```

### 取绝对值

```JavaScript
Math.abs(数字);
```

### 取最大值

返回给定的一组数字中的最大值。如果给定的参数中至少有一个参数无法被转换成数字，则会返`NaN`。

```JavaScript
Math.max(1,10,20)
```

### 取最小值

返回给定的一组数字中的最小值。如果给定的参数中至少有一个参数无法被转换成数字，则会返`NaN`。

```JavaScript
Math.min(1,10,20)
```

### 四舍五入

其他数字都是四舍五入，但是.5 特殊，它往大了取

```JavaScript
Math.round(数字);
```

### 生成随机数

`Math.random()`会返回区间`[0,1)`的随机小数

```javaScript
/**
 * 取随机数，区间为：[最小值,最大值]
 * @param min 最小值
 * @param max 最大值
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
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
const date = new Date(时间（ 秒） * 1000);
console.log(formatDate(date, 'yyyy-MM-dd hh-mm'));
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

});
```

```javaScript
//需求：过滤数组中小于50的数字
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let newnubs = nums.filter((item) => {
    return item < 50;
});
console.log(newnubs);
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

});
```

```javaScript
//需求：将数组中的左右数据都乘2
newnubs = [10, 20, 40, 50];
let new2nums = newnubs.map((item) => {
    return item * 2;
});
console.log(newnubs);
//结果：[20, 40, 80, 100]
```

### reduce

**reduce**一般对数组中的所有内容进行汇总（例如将数组中的数据相加/相乘，返回一个总和）

```javaScript
新数组名称 = 数组名称.reduce((上一次值, item) => {

}, 初始值);
```

```javaScript
//需求：将数组内的所有数字进行求和
new2Nums = [20, 40, 80, 100];
total = new2Nums.reduce((preValue, item) => {
    return preValue + item;
}, 0);
console.log(total);
//结果：240
```

## Promise

Promise 让异步操作写起来，像在写同步操作的流程，不必一层层地嵌套回调函数。

特点：

- 改善了可读性，对于多层嵌套的回调函数很方便
- 充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口

### 定义

- 基本使用

```JavaScript
let Promise名 = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("成功");
  } else {
    reject("失败");
  }
});
```

- 传参

```JavaScript
function Promise名(参数名) {
  return new Promise((resolve, reject) => {
    if (1 === 1) {
      console.log(参数名);
      resolve("成功");
    } else {
      reject("失败");
    }
  });
}
```

### 使用

- 基本使用

  ```JavaScript
  Promise名.then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  ```

- 传参

  ```JavaScript
  Promise名("aaa").then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  ```

- 链式调用

  ```JavaScript
  new Promise((resolve, reject) => {})
    .then((res) => {
      //对结果进行处理
      return res + 1;
    })
    .then((res) => {
      //对结果进行处理
      return res + 1;
    })
    .then((res) => {
      //对结果进行处理
      return res + 1;
    })
    .catch((err) => {
      // 错误处理
    });
  ```

### Promise.all

将多个 Promise 对象实例包装，生成并返回一个新的 Promise 实例

promise 数组中所有的 promise 实例都变为 resolve 的时候，该方法才会返回，并将所有结果传递 results 数组中
promise 数组中任何一个 promise 为 reject 的话，则整个 Promise.all 调用会立即终止，并返回一个 reject 的新的 promise 对象

```JavaScript
const p1 = Promise名(参数);
const p2 = Promise名(参数);

Promise.all([p1, p2]).then((res) => {
  console.log(res);
});
```

### Promise.race

Promise.race() 类似于 Promise.all() ，区别在于**它有任意一个完成就算完成**

```JavaScript
const p1 = Promise名(参数);
const p2 = Promise名(参数);

Promise.race([p1, p2]).then((res) => {
  console.log(res);
});
```
