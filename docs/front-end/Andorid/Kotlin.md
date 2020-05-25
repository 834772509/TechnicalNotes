# Kotlin

## 语法

### 变量

``` Kotlin
var 变量名
```

### 常量

``` Kotlin
val 变量名
```

### 数据类型

* Int : 整形
* Long : 长整型
* Short 短整形
* Float : 单精度浮点型
* Double : 双精度浮点型
* Boolean : 布尔型
* Char : 字符型
* String : 字符串
* Byte : 字节型

类型转换：

* toByte()：转换为 Byte 类型 
* toShort()：转换为 Short 类型
* toInt()：转换为 Int 类型
* toLong()：转换为 Long 类型
* toFloat()：转换为 Float 类型
* toDouble()：转换为 Double 类型
* toChar()：转换为 Char 类型

### 字符串内嵌表达式

``` Kotlin
var 变量 = 值
println("值：$变量")
```

### 函数

``` Kotlin
fun 函数名() {

}

fun 函数名(参数名: 数据类型, 参数名: 数据类型 = 默认值): 返回值数据类型 {

}

fun 函数名(参数名:数据类型, 参数名:数据类型) = max(num1,num2)
```

### if 语句

``` Kotlin
if (条件){

}else {

}
```

::: tip 提示
在 Kotlin 中，if语句有返回值，因此可以对代码进行简化
:::

### when 语句

``` Kotlin
when (值){
  匹配值 -> {执行逻辑}
  匹配值 -> {执行逻辑}
}
```

### 类与对象

``` Kotlin
class 类名 {

}

class 类名  : 继承类名() {

}

class 类名(val 属性名: 属性数据类型) {
  //构造函数
    init {

    }
}
```

### 修饰符

* public : 所有类可见（默认）
* private : 当前类可见
* protected : 当前类、子类可见
* defaulf : 无
* internal : 同一模块中的类可见

### 集合

#### List集合

可变集合

``` Kotlin
var 集合名 = mutableListOf(值1,值2)

集合名.add(值)

for (item in 集合名){
  println(item)
}
```

不可变集合

``` Kotlin
val 集合名 = lostOf(值1,值2)

for (item in 集合名){
  println(item)
}
```

#### Map集合

``` Kotlin
var 集合名 = hashMapOf<String,Int>()
map["键"] = 值
for (item in map){
  println(item)
  println(item.value)
}
```
