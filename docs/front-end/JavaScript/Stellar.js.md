# 视差滚动插件

视差滚动(Parallax Scrolling) 指网页滚动过程中，多层次的元素进行不同程度的移动，视觉上形成立体运动效果的网页展示技术
主要核心就是前景和背景以不同的速度移动，从而创造出 3D 效果。这种效果可以给网站一个很好的补充。

## 基本概念

### 特性

- 视差滚动效果酷炫，适合于个性展示的场合。
- 视差滚动徐徐展开，适合于娓娓道来，讲故事的场合。
- 视差滚动容易迷航，需要具备较强的导航功能。

### 原理

传统的网页的文字、图片、背景都是一起按照相同方向相同速度滚动的，而视差滚动则是在滚动的时候，内容和多层次的背景实现或不同速度，或不同方向的运动。
有的时候也可以加上一些透明度、大小的动画来优化显示。
利用 backgroundattachment 属性实现。
`background-attachment: fixed | | scroll | | local`
