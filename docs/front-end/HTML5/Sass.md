# Sass

Visual Studio Code 插件：``Live Sass Compiler``

::: tip 提示
一般使用Sass后缀名为``.scss``
:::

## 变量

声明：``$变量名: 值; ``  
使用：``$变量名``

## 嵌套

``` CSS
.nav {

    /* 样式 */
    ul {

        /* 样式 */
        li {

            /* 样式 */
            $:hover {
                /* 样式 */
            }
        }
    }

    /*嵌套类*/
    & 类名 {
        /* 样式 */
    }
}
```

嵌套属性：

``` CSS
/* 简化设置字体 */
body {
    font: {
        family: Helvetica, Arial, , sans-serif;
        size: 15px;
        weight: normal;
    }
}
```

## 混合 mixin

混合用于使用重复的样式（混合内部可以嵌套）

``` CSS
@mixin 混合名称 {
    /* 样式 */
}

@mixin 混合名称($参数1, $参数2) {
    /* 样式 */
}
```

使用：

``` CSS
.类名 {
    @include 混合名称;
}

.类名 {
    @include 混合名称(值1, 值2);
}
```

## 继承样式

用于继承指定的样式

``` CSS
.类名 {
    @extend .继承类名;
}
```

## 导入样式

创建``_base.scss``，内填写基本样式

导入：

``` CSS
@import "base";
```

## 取绝对值 abs 函数

``` CSS
abs(-10px)
/* 结果：10px */
```

## 四舍五入 round 函数

``` CSS
round(3.5)
/* 结果：4 */
```

## 四舍五入(强制进位) ceil 函数

``` CSS
ceil(3.5)
/* 结果：4 */
```

## 四舍五入(强制退位) floor 函数

``` CSS
ceil(3.6)
/* 结果：3 */
```

## 数字转百分比 percentage 函数

``` CSS
percentage(650px / 100px)
/* 结果：65% */
```

## 取最小值

``` CSS
min(1, 2, 3)
/* 结果：1 */
```

## 取最大值

``` CSS
max(1, 2, 3)
/* 结果：3 */
```

## 将字母转大写

``` CSS
to-upper-case("abc")
/* 结果：ABC */
```

## 将字母转小写

``` CSS
to-lower-case("ABC")
/* 结果：abc */
```

## @if

``` CSS
.类名 {
    @if 条件 {
        样式
    }

    @else if 条件 {
        样式
    }

    @else {
        样式
    }
}
```

## @for

``` CSS
@for $var from 开始值 through 结束值 {
    .类名 {
        样式
    }
}
```

示例：

``` CSS
$columns=4;

@for $n from 1 through $columns {
    .col-#{$n} {
        width: 100% / $column * $n;
    }
}

/*
输出：

.col-1 {
  width: 25%;
}
.col-2 {
  width: 50%;
}
.col-3 { 
  width: 75%;
}
.col-4 { 
  width:100%;
}
*/
```

## @each

``` CSS
$列表名=列表项1 列表项2 列表项3;

@each $item in $ 列表名 {
    .类名-#{$item} {
        样式
    }
}
```

示例：

``` CSS
$icons=success error warning;

@each $item in $ icons {
    .icon-#{$item} {
        background-img: url(../img/icons/#{$icon}.png)
    }
}

/*
输出：

.icon-success {
  background-img: url(../img/icons/success.png)
}

.icon-error {
  background-img: url(../img/icons/success.png)
}

.icon-warning {
  background-img: url(../img/icons/success.png)
}
*/
```

## @while

``` CSS
@while 条件 {}
```

``` CSS
$n: 6;

@while $n>0 {
    .item-#{$n} {
        width: 5px * $n;
    }

    $n: $n -2;
}

/*
输出：

.item-6 {
  width: 30px; 
}

.item-4 {
  width: 20px;
}
.item-2 {
  width: 10px;
}
*/
```

## 自定义函数

``` CSS
@function 函数名称 (参数1, 参数2) {
    @return 返回值;
}
```
