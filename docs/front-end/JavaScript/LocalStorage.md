# 本地存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5 规范提出了相关解决方案。

本地存储特点：

- 数据存储在用户浏览器中
- 设置、读取方便、甚至页面刷新不丢失数据
- 容量较大，sessionStorage 约 5M、localStorage 约 20M
- 只能存储字符串，可以将对象 JSON.stringify)编码后存储

## window.sessionStorage

window.sessionStorage 的**生命周期为关闭浏览器窗口**，在同一个窗口(页面)下数据可以共享，以键值对的形式存储使用。

### 存储数据

```JavaScript
sessionStorage.setItem("键名", 值);
```

### 读取数据

```JavaScript
sessionStorage.getItem("键名");
```

### 删除数据

```JavaScript
sessionStorage.removeItem("键名")
```

### 删除所有数据

```JavaScript
sessionStorage.clear();
```

## window.loalStorage

window.loalStorage 的**生命周期永久生效**，除非手动删除否则关闭页面也会存在。可以多窗口（页面）共享(同一浏览器可以共享），以键值对的形式存储使用。

### 存储数据

```JavaScript
localStorage.setItem("键名", 值);
```

### 读取数据

```JavaScript
localStorage.getItem("键名");
```

### 删除数据

```JavaScript
localStorage.removeItem("键名")
```

### 删除所有数据

```JavaScript
localStorage.clear();
```

## Cookie

`Cookie` 用来保存信息，如自动登录的用户名

- 同一个网站的所有页面共享一套 Cookie
- Cookie 的数量、大小有限
- Cookie 有过期时间

### 设置数据

```JavaScript
/**
 * 设置Cookie
 * @param name 键名
 * @param value 值
 * @param day 过期时间，单位为天数
 */
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + date;
}
```

### 获取数据

```JavaScript
/**
 * 获取Cookie
 * @param name 键名
 */
function getCookie(name) {
  let arr = document.cookie.split("; ");
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("=");
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return "";
}
```

### 删除数据

```JavaScript
/**
 * 删除Cookie
 * @param name 键名
 */
function delCookie(name) {
  setCookie(name, 1, -1);
}
```
