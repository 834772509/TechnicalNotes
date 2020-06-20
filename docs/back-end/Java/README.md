# Java 笔记

## 实用快捷输入

### 快捷键

* Alt + Insert : 快速插入代码
* Ctrl + O : 重写方法
* Alt + 选择多行 : 编辑多行文本

### 快捷输入

* psvm : 声明main主方法
* sout : System.out.println()方法


### 解决idea右键缓慢

将注册表``[HKEY_CLASSES_ROOT\Directory\Background\ShellEx\ContextMenuHandlers``除了**New**项，其余全部删除

## IDEA 连接数据库

点击 右侧->DataBase->"+"->"Data Source"->"MySQL"

* Host : 数据库地址
* User : 数据库用户名
* Password : 数据库密码
* URL :  jdbc:mysql://127.0.0.1:3306/数据库名?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8


## 基础语法

### 关系运算符

* 等于 : ==
* 不等于 : !=
* 大于 : >
* 小于 : <>
* 小于等于 : >=
* 大于等于 : <=

## 数组

### 声明数组

``` Java
类型[] 数组名;
```

### 创建数组

``` Java
类型[] 数组名=new 类型[length];
```

### 访问数组

``` Java
数组名[0]
数组名[1]
```

### 遍历数组

``` Java
for(数据类型 item: 列表名){
  System.out.println(item)
}
```

## List 集合

List 集合 可以存放任何的数据类型，数据可以重复，类似于动态数组

### 声明

``` Java
List<数据类型> List名 = new ArrayList<数据类型>();
```

### 增加数据

``` Java
List名.add(数据)
```

### 获取数据

``` Java
List名.get(int 索引值)
```

### 删除数据

``` Java
List名.remove(int 索引值)
```

### 修改数据

``` Java
List名.set(int 索引值,数据)
```

### 遍历数据

``` Java
for(数据类型 item: List名){
  System.out.println(item)
}
```

## Set 集合

Set 集合 与 List集合 类似，但不允许集合中有重复的值

### 声明

``` Java
List<数据类型> Set名 = new ArrayList<数据类型>();
```

### 增加数据

``` Java
Set名.add(数据)
```

### 获取数据

``` Java
Set名.get(索引值)
```

### 删除数据

``` Java
Set名.remove(int 索引值)
```

### 修改数据

``` Java
Set名.set(int 索引值,数据)
```

### 遍历数据

``` Java
for(数据类型 item: Set名){
  System.out.println(item)
}
```

## Map 集合

Map 是具有键值对的集合，通过键去访问值的内容。键不能重复，但是值是可以重复

### 声明

``` Java
HashMap<数据类型,数据类型> Map名 = new HashMap<String,String>();
```

### 增加数据

``` Java
Map名.put(键,值);
```

### 获取数据

``` Java
Map名.get(键)
```

### 修改数据

``` Java
Map名.pub(键,值)
```

### 删除数据

``` Java
Map名.remove(键)
```

### 遍历数据

``` Java
// 方法 1：直接打印 map 集合，通过 Key 键去得到 Value 值
Set<String> ss = Map名.keySet();// 接收所有的键
for(String i : ss){
  System.out.println("Key 键："+ i +"Value 值:"+hw1.get(i));
}

// 方法 2：获取所有的键和值
Set<Map.Entry<String,String>> set1 = Map名.entrySet();// 得到所有的键和值
for(Map.Entry<String,String> ss1: set1){
  System.out.println(ss1);
}
```

## 异常

### 捕获异常

``` Java
try{
   // 可能发生异常的代码
}catch(Exception e){
   //发生异常后的代码
}finally{
  // 无论如何都会执行的代码
}
```

## 多线程

``` Java
new Thread(new Runnable() {
  @Override
  public void run() {
  }
}
).start();
```

## 注解

注解(Annotation)是可以被程序识别的注释，可以被其他程序（如编译器等）读取

### 内置注解

* @Override

用在方法上，表示这个方法重写了父类的方法  

``` Java
public class Hero {
  String name;
  @Override
  public String toString(){
    return name;
  }
}
```

* @Deprecated

表示这个方法已经过期，不建议开发者使用（暗示在将来某个不确定的版本，就有可能会取消掉）  
使用此方法时会有删除线

``` Java
public class Hero {
  String name;
  @Deprecated
  public void hackMap(){
  }
  public static void main(String[] args) {
      new Hero().hackMap();
  }
}
```

* SuppressWarnings

用来抑制编译时的警告信息，如没有被使用等警告。使用时需要增加一个参数

``` Java
@SuppressWarnings("all")
public void 方法名() {

}
@SuppressWarnings("unchecked")
public void 方法名() {
  
}
@SuppressWarnings(value={"unchecked","deprecation"})
public void 方法名() {
  
}
```

### 元注解

元注解的作用是负责注解其他注解

* Target

用于描述注解的使用范围(被描述的注解可以用在什么地方)

* Retention

表示需要在什么级别保存该注释信息，用于描述注解的生命周期

(SOURCE < CLASS < **RUNTIME**)

* Document

说明该注解将被包含在javadoc中

* Inherited

说明子类可以**继承**父类中的该注解

``` Java
//测试原注解
@MyAnnotation
public class Test01 {
  public void test() {

  }
}

//定义一个注解
//Target 表示我们的注解可以用在哪些地方
@Target(value = {ElementType.METHOD,ElementType.TYPE})
//Retention 表示我们的注解在什么地方有效   runtime>class>source
@Retention(value = RetentionPolicy.RUNTIME)
//Documented 表示是否将我们的注解生成在JAVAdoc中
@Documented
//Inherited  子类可以继承父类的注解
@Inherited
@interface MyAnnotation {

}
```

### 自定义注解

@interface用来声明自定义注解

``` Java
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@interface  自定义注解名 {
    // 注解的参数
    数据类型 参数名();
    数据类型 参数名() default 默认值;
}

@自定义注解名(参数名 = 值,参数名 = 值)
public void 方法名() {

}
```

::: tip 提示
* 如果有默认值可以不用给注解赋值
* 如果默认值为-1则表示不存在
:::

默认参数：

``` Java
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@interface  自定义注解名 {
    // 注解的参数
    数据类型 value();
}

@自定义注解名(值)
public void 方法名() {

}
```

## 反射

反射(Reflection) 是Java被视为动态语言的关键，反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内部属性及方法

::: tip 提示
动态语言：在程序运行时可以改变程序的结构
:::

### 反射的优点和缺点

* 优点：可以实现动态创建对象和编译，体现出很大的灵活性
* 缺点：对性能有影响。使用反射基本上是一-种解释操作， 我们可以告诉JVM，我们希望做什么并且它满足我们的要求。这类操作总是慢于直接执行相同的操作。

### 获得反射对象

``` Java
Class 反射对象 = Class.forName("类名");
```

### 获取Class类的实例

1. 若已知具体的类，通过类的class属性获取，该方法最为安全可靠，程序性能最高。

``` Java
Class Class类 = Class类名.class;
```

2. 已知某个类的实例，调用该实例的getClass()方法获取Class对象

``` Java
Class Class类 = Class类名.getClass();
```

3. 已知一个类的全类名，且该类在类路径下，可通过Class类的静态方法forName()获取，可能抛出ClassNotFoundException

``` Java
Class Class类 = Class.forName("类路径");
```

4. 内置基本数据类型可以直接用类名``.Type``
5. 还可以利用ClassLoader

