# 移动端网页特效

## 触屏事件

touch 对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指(或触控笔）对屏幕或者触控板操作。

- 手指触摸到一个 DOM 元素时触发

```JavaScript
div.addEventListener("touchstart", function (event) {
  console.log("触摸");
});
```

- 手指在一个 DOM 元素上滑动时触发

```JavaScript
div.addEventListener("touchmove", function (event) {
  console.log("滑动");
});
```

- 手指从一个 DOM 元素上移开时触发

```JavaScript
div.addEventListener("touchend", function (event) {
  console.log("移开");
});
```

### 触摸事件对象

TouchEvent 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和成少，等等

| 触摸列表       | 说明                                             |
| -------------- | ------------------------------------------------ |
| touches        | 正在触摸屏幕的所有手指的一个列表                 |
| targetTouches  | 正在触摸当前 DOM 元素上的手指的一个列表（常用）  |
| changedTouches | 手指状态发生了改变的列表，从无到有，从有到无变化 |

### 拖动元素

```JavaScript
let startX = 0;
let startY = 0;
let x = 0;
let y = 0;

组件.addEventListener("touchstart", function (event) {
  startX = event.targetTouches[0].pageX;
  startY = event.targetTouches[0].pageY;
  x = this.offsetLeft;
  y = this.offsetTop;
});

组件.addEventListener("touchmove", function (event) {
  let moveX = event.targetTouches[0].pageX - startX;
  let moveY = event.targetTouches[0].pageY - startY;
  this.style.left = x + moveX + "px";
  this.style.top = y + moveY + "px";
  // 阻止屏幕滚动的默认行为
  e.preventDefault();
});
```
