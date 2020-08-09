# ImmutableJS

[ImmutableJS 官网](https://immutable-js.github.io/immutable-js/)

## 介绍

Immutable 对象的特点是只要修改了对象，就会返回一个新的对象，旧的对象不会发生改变。  
为了节约内存，出现了一个新的算法： Persistent Data Structure （持久化数据结构或一致性数据结构）：

- 用一种数据结构来保存数据
- 当数据被修改时,会返回一个对象，但是新的对象会尽可的利用之前的数据结构而不会对内存造成浪费。

## 安装

npm:`npm install immutable --save`

## 使用

### Map

管理对象中的数据

```js
import { Map } from "immutable";

// 声明数据
const 变量名 = Map({
  键: 值,
  键: {
    键: 值,
  },
});

// 修改数据
const 新变量 = 变量名.set("键", 值);

// 获取数据
变量名.get("键");
新变量.get("键");

// 迭代获取数据
变量名.getIn(["键", "键"]);
```

### List

管理数组中的数据

```js
import { List } from "immutable";

// 声明数据
const 变量名 = List(["数据1", "数据2", "数据3"]);

// 修改数据
const 新变量 = 变量名.set(0, 值);

// 获取数据
变量名.get(0);
新变量.get(0);
```

## 结合 React

### 安装

npm: `npm install immutable --save`
npm: `npm install redux-immutable --save`

### 结合

\src\store\reducer.js

``` js
import { combineReducers } from "redux-immutable";

const cReducer = combineReducers({
  
});

export default cReducer;
```
