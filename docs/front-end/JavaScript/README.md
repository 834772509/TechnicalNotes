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
function 函数名([参数1,参数2]){

}
```

使用

``` JavaScript
函数名();
函数名(参数1,参数2);
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
