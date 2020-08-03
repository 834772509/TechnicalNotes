# CSS 动画

## transition

```CSS
transition: property[过渡属性] duration[过渡时间] timing-function[过渡方式] delay[延时时间];
```

```CSS
#box{
  width:100px;
  background-color: black;
  transition: all 0.5s ease;
  transition: all 0.5s ease 1s;
}

#box:hover{
  width:200px;
  background-color:red;
}
```

::: tip 提示
参数 1 为需要过渡的属性如"width" ，all 表示所有属性都过渡
参数 2 为过渡时间，默认为 0 秒
参数 3 为过度方式，一般为"ease"

- ease : 规定慢速开始，然后变快
- ease-in : 以慢速开始
- ease-out : 以慢速结束
- linear : 以相同速度开始至结束
  参数 4 为延时触发过度的时间

:::

## transform

2D 转换 : translate  
3D 转换 : translate3d

### translate 移动

```CSS
transform: translate(X,Y);
```

### rotate 旋转

```CSS
transform: rotate(角度deg);
```

### scale 缩放

```CSS
transform: scale(缩放的倍数);
```

### skew 倾斜

```CSS
transform: skew(X轴倾斜度数deg,Y轴倾斜度数deg);
```

### 无限旋转

```CSS
@keyframes rotate{
  from{transform: rotate(0deg)}
  to{transform: rotate(360deg)}
}
#img {
  animation: rotate 3s linear infinite;
}
```

### perspective 向屏幕内侧倾斜

```CSS
transform: perspective()
```
