# ImmutableJS

[ImmutableJS 官网](https://immutable-js.github.io/immutable-js/)

## 介绍

Immutable 对象的特点是只要修改了对象，就会返回一个新的对象，旧的对象不会发生改变。  
为了节约内存，出现了-一个新的算法: Persistent Data Structure （持久化数据结构或一致性数据结构）：
- 用一种数据结构来保存数据
- 当数据被修改时,会返回一个对象，但是新的对象会尽可的利用之前的数据结构而不会对内存造成浪费。

## Map

```js
const im = Immutable;

const info = {
  name: "kobe",
  age: 30,
  friend: {
    name: "aaa",
    age: 25,
  },
};

const infoIM = im.Map(info);

const obj = infoIM;

// info.name = "";
const infoIM2 = infoIM.set("name", "why");

console.log(obj.get("name"));
console.log(infoIM2.get("name"));
```

## List

```js
const im = Immutable;

const names = ["aaa", "bbb", "ccc"];
// const arr = names;
// names[0] = "why";
// console.log(arr);

const nameIM = im.List(names);
const arrIM = nameIM.set(0, "why");

console.log(nameIM.get(0));
console.log(arrIM.get(0));
```
