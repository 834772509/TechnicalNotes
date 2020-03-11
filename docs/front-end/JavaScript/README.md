# JavaScript 笔记

## 基本语法

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
:::

### 数据类型

* Nubmer : 数值
* String : 字符串
* Boolearn : 布尔值

### 引用对象

#### Object 对象

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

### 数组

#### 声明

``` JavaScript
let 变量名 = ['值1','值2','值3','值4']
```

#### 使用

``` JavaScript
console.log(变量名[0])
```

#### 获取数组长度

``` JavaScript
console.log(变量名.length)
```

#### 获取指定数据索引

``` JavaScript
变量名.indexOf(指定数据)
```

#### 遍历数组

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

### 函数

``` JavaScript
function 函数名(){

}

function 函数名([参数1,参数2 = 默认值]){
return 返回值;
}
```

使用

``` JavaScript
函数名();
函数名(参数1,参数2);
```

### 箭头函数

``` JavaScript
const 箭头函数 = ([参数1,参数2]) =>{

}
```

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

### 类和方法

``` JavaScript
calss 类名{
  方法名(){

  }
}
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

### setTimeout

延时执行

``` JavaScript
setTimeout(()=>{

},时间[毫秒])
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

## ＤＯＭ

### 选择器

#### 查询选择器

``` JavaScript
document.querySelectorALL(查询名称)
document.querySelectorALL(.user)
document.querySelectorALL(h1)
```

``` JavaScript
document.querySelector(查询名称)
document.querySelector(.user)
document.querySelector(h1)
```

#### 多元素选择器

``` JavaScript
document.getElementById(ID名)
```

### DOM操作

#### 监听事件

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

#### 创建元素

``` JavaScript
const 元素 = document.createElement('元素名称')
元素.appendChild(documentcreateTextNode(`元素内容`))
```

``` JavaScript
const li = document.createElement('li')
元素.appendChild(documentcreateTextNode(`123`))
```
