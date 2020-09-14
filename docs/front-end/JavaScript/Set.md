# Set 集合

Set 集合中的元素不可重复

## 声明

```js
let 集合名 = new Set();
```

## 集合方法

### 增加元素

```js
集合名.add(元素);
```

### 删除元素

```js
集合名.delete(元素);
```

### 清空集合

```js
集合名.clear();
```

### 判断元素是否存在

存在返回 true，不存在返回 false

```js
集合名.has(元素);
```

### 获取集合大小

```js
集合名.size;
```

## 遍历集合

```js
集合名.forEach((item) => {
  console.log(item);
});
```

## 转换数组

```js
lety 数组名 = Array.from(集合名);
```
