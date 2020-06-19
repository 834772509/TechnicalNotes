# Java 笔记

::: tip 说明
笔记中列出的方法是作者 常用的方法(尤其是构造方法) 和 了解的方法 所以并不完全. ^_^
:::

---

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

Set 集合 与List集合类似，但不允许集合中有重复的值

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

### 内置注解(基础)

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

* 还有2个注解(未完成)
