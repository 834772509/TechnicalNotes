# CSS 动画

动画 ( animation ) 是 CSS3 中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

## 动画基本使用

动画是使元素从一种祥式逐渐变化为另一种样式的效果。 您可以改变任意多的样式任意多的次数。

### 定义动画

在 `@keyframes` 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。0%是动画的开始，100%是动画的完成。这样的规则就是动画序列。

::: tip 提示
请用百分比来规定变化发生的时间，或用关键词"from"和"to"，等同于 0%和 100%，**百分比可以写多个**，百分比即为时间的划分
:::

```css
@keyframes 动画名称 {
  /* 开始状态 */
  0% {
    属性名: 值;
  }
  /* 结束状态 */
  100% {
    属性名: 值;
  }
}
```

### 使用动画

```css
div {
  animation-name: 动画名称;
  animation-duration: 持续时间;
}
```

## 动画属性

### 运动曲线

```css
div {
  animation-timing-function: ease;
}
```

| 值            | 描述                                        |
| ------------- | ------------------------------------------- |
| linear        | 动画从头到尾的速度是相同的（匀速）          |
| ease          | 默认。动画以低速开始，然后加快，在结束前变慢 |
| ease\-in      | 动画以低速开始                              |
| ease\-out     | 动画以低速结束                              |
| ease\-in\-out | 动画以低速开始和结束                        |
| steps         | 指定了时间函数中的间隔数量\(步长\)          |

### 开始时间

```css
div {
  animation-delay: 1s;
}
```

### 播放次数

默认播放次数为 1

```css
div {
  /* 指定次数 */
  animation-iteration-count: 5;
  /* 无限次 */
  animation-iteration-count: infinite;
}
```

### 是否反方向播放

结束时是否反方向播放

```css
div {
  /* 结束时直接跳转至起始状态（默认） */
  animation-direction: normal;
  /* 结束时反方向播放 */
  animation-direction: alternate;
}
```

### 动画结束后保持结束状态

默认不返回（backwards）

```css
div {
  animation-fill-mode: forwards;
}
```

### 控制动画播放

```css
div {
  /* 播放（默认） */
  animation-play-state: running;
  /* 暂停 */
  animation-play-state: paused;
}
```

## 动画属性简写

语法：`animation: 动画名称 持续时间 [运动曲线] [开始时间] [播放次数] [是否反方向] [动画起始/结束状态]`

```css
div {
  animation: move 2s;
  animation: move 2s ease 0s 5 normal backwards;
  /* 多个动画 */
  animation: move1 2s, move2 2s;
}
```
