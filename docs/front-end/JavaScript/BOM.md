## BOM

`document`内的东西都属于 BOM

### 打开标签页

```JavaScript
window.open(URL);
```

### 关闭标签页

```JavaScript
window.close(URL);
```

### 获取 UA

```JavaScript
console.log(window.navigator.userAgent);
```

### 获取 URL 路径

```JavaScript
console.log(window.location);
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
alert("内容");
//选择框，选择确定返回true，否则返回false
confirm("内容");
//输入框，返回输入的内容
prompt("内容");
```
