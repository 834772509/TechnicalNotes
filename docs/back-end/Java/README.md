# Java 笔记

## IDEA

### 插件推荐

* TabNine : 更好的代码提示
* Lombok : 自动生成getter和setter方法
* Translation : 翻译插件

### 快捷键

* Alt + Insert : 快速插入代码
* Ctrl + O : 重写方法
* Alt + P : 显示参数信息
* Alt + 选择多行 : 编辑多行文本

### 快捷输入

* psvm : 声明main主方法
* sout : System.out.println()方法
* 数组.for : 快速编写for循环
* 变量.if : 快速编写if语句
* 变量.sout : 快速编写System.out.println语句
* /** + 回车 : 快速输入方法、类注释


### 解决idea右键缓慢

将注册表``[HKEY_CLASSES_ROOT\Directory\Background\ShellEx\ContextMenuHandlers``除了**New**项，其余全部删除

### IDEA 连接数据库

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
* 小于 : <
* 小于等于 : >=
* 大于等于 : <=

### 权限修饰符

| 修饰符          | public    | protected     | default  |    private     |
|-------------|---------|---------|---------|---------|
| 同一个类（自己）   | Yes     | Yes     | Yes     | Yes     |
| 同一个包（邻居）   | Yes     | Yes     | Yes     | No      |
| 不同包子类（儿子）  | Yes     | Yes     | No      | No      |
| 不同包非子类（陌生人） | Yes     | No      | No      | No      |

## 类与对象

### 声明

``` Java
public class 类名{
  //构造方法
   public 类名() {

   }
}
```

### 实例化

``` Java
类名 实例 = new  类名()
```

## 接口

接口（Interface），是一个抽象类型，抽象方法的集合，一个类通过继承接口的方式，从而来继承接口的抽象方法  

* 接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。

* 除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

* **接口无法被实例化，但是可以被实现**。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。
* 接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。

### 声明

``` Java
[修饰符] interface 接口名称 [extends 其他的接口名] {
  // 声明变量
  // 抽象方法
}
```

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

Exception 类是 Throwable 类的子类

### 捕获异常

``` Java
try{
   // 可能发生异常的代码
} catch (Exception e) {
   //发生异常后的代码
} finally {
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

### 类加载内存分析

静态代码块 > 构造代码块 > 构造器

1. 加载

* 将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象

2. 链接：将Java类的二进制代码合并到JVM的运行状态之中的过程

* 验证：确保加载的类信息符合JVM规范，没有安全方面的问题
* 准备：正式为类变量(static) 分配内存并设置类变量默认初始值的阶段,这些内存都将在方法区中进行分配
* 解析：虚拟机常量池内的符号引用(常量名)替换为直接引用(地址)的过程

3. 初始化

* 执行类构造器`<clinit>` ()方法的过程。类构造器`<clinit>`()方法是由编译期自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。(类构造器 是构造类信息的，不是构造该类对象的构造器)
* 当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化
* 虚拟机会保证一个类的`<clinit>` ()方法在多线程环境中被正确加锁和同步


### 类初始化分析

* 类的主动引用(一定会发生类的初始化)
  - 当虚拟机启动，先初始化main方法所在的类
  - new一个类的对象
  - 调用类的静态成员(除了final常量)和静态方法
  - 使用java.lang.reflect包的方 法对类进行反射调用
  - 当初始化一个类，如果其父类没有被初始化，则先会初始化它的父类

* 类的被动引用(不会发生类的初始化)
  - 当访问一个静态域时，只有真正声明这个域的类才会被初始化。如：当通过子类引用父类的静态变量，不会导致子类初始化
  - 通过数组定义类引用，不会触发此类的初始化
  - 引用常量不会触发此类的初始化(常量在链接阶段就存入调用类的常量池中了)

### 类加载器

类加载的作用：将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口。  

类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载(缓存)一段时间。不过JVM垃圾回收机制可以回收这些Class对象

### 通过反射动态创建对象执行方法

``` Java
// 获得class对象
Class class对象 = Class.forName("class类路径");
// 通过反射调用普通方法
类名 实例名 = (类名) class对象.newInstance();
// 通过反射获取一个方法
Method 类方法名 = class对象.getDeclaredMethod("类方法名", 数据类型.class);
setName.invoke(实例名, 值);
实例名.类方法名();
```

``` Java
// 获得class对象
Class class1 = Class.forName("User");
// 通过反射调用普通方法
User user3 = (User) class1.newInstance();
// 通过反射获取一个方法
Method setName = class1.getDeclaredMethod("setName", String.class);
setName.invoke(user3, "aaa");
System.out.println(user3.getName());


@Data
@AllArgsConstructor
@NoArgsConstructor
class User {
    private String name;
    public int id;
    public int age;
}

//运行结果：aaa
```

### 通过反射动态创建对象操作属性

``` Java
//获得class对象
Class class对象 = Class.forName("class类路径");
//通过反射操作属性
类名 实例名 = (类名) class对象.newInstance();
Field 属性名 = class对象.getDeclaredField("属性名");
//不能直接操作私有属性，需要关闭程序安全检测
属性名.setAccessible(true);
属性名.set(实例名, 值);
System.out.println(实例名.getName());
```

``` Java
//获得class对象
Class class1 = Class.forName("Reflection.User");
//通过反射操作属性
User user4 = (User) class1.newInstance();
Field name = class1.getDeclaredField("name");
//不能直接操作私有属性，需要关闭程序安全检测
name.setAccessible(true);
name.set(user4, "bbb");
System.out.println(user4.getName());

//输出：bbb
```

### 通过反射获得注解

``` Java
Class class类对象 = Class.forName("class类路径");

//通过反射获得注解
Annotation[] annotations = class类对象.getAnnotations();
for (Annotation item : annotations) {
    System.out.println(item);
}

//获得注解的value的值
注解名 实例名 = (注解名) class类对象.getAnnotation(注解名.class);
String value = 实例名.value();
System.out.println(value);

//获得类指定的注解
Field f = class1.getDeclaredField("name");
注解名 annotation = f.getAnnotation(注解名.class);
System.out.println(annotation.参数名());
```

