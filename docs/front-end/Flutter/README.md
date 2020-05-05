# Flutter 笔记

## 环境搭建

### 安装 Flutter SDK

[Flutter SDK 下载](https://flutter.dev/docs/development/tools/sdk/releases)

选择```Stable channel（稳定版本）```  
解压后增加```\Flutter SDK\bin```环境变量  
执行```flutter --version```即可查看当前Flutter版本

### 配置镜像

Windows 环境变量修改：点击计算机图标 - 属性 - 高级系统设置 - 高级 - 环境变量
* 新建 变量 PUB_HOSTED_URL，其值为 https://pub.flutter-io.cn
* 新建 变量 FLUTTER_STORAGE_BASE_URL， 其值为 https://storage.flutter-io.cn

### 开发环境安装插件

安装插件：
* Flutter 为 Flutter 开发准备
* Dart 为 Flutter 开发准备
* Code Runner 点击右上角的按钮快速运行代码

## 基础语法

### main函数

简化main函数

``` dart
main(){
  print("Hello World");
}
```

完整main函数，List列表为命令行参数列表

``` dart
void main(List<String> args) {
  print("Hello World");
  print(args);
}
```

### 定义变量

``` dart
//明确声明
数据类型 变量 = 值;
//类型推导
var 变量 = 值;
```

``` dart
String name = "abc";
int age = 18;
double height = 1.88;
```

### 定义常量

``` dart
final 变量 = 值;
const 变量;
```

::: tip 提示
* final 可以在运行时赋值
* const 必须直接赋值常量
:::

### 定义动态变量

动态变量可随时改变其数据类型

``` dart
dynamic 变量名;
```

## 数据类型

### 整数类型

int 变量名 = 10;

### 浮点类型

``` dart
double 变量名 = 1.00;
```

### 布尔类型

``` dart
var 变量名 = true;
var 变量名 = false;
```

### 字符串

``` dart
var message1 = "Hello World";
var message2 = 'Hello World';
var message3 = """
abc
cba
""";
```

字符串拼接：

``` dart
print("${变量} ${变量}");
```

### 集合

#### List

``` dart
List<String> 集合名 = ["元素1", "元素2"];
```

#### Set

Set类型不允许重复，一般用来去重

``` dart
Set<int> 集合名 = {1, 2, 3, 4};
print(集合名);
```

#### Map

``` dart
Map<String, dynamic> 变量名 = {
  "键1" : "值",
  "键2" : 1
};
```

## 函数

``` dart
void 函数名(){

}

返回值类型 函数名() {

}

返回值类型 函数名(参数类型 参数名,参数类型 参数名) {

}
```

::: tip 提示
默认值只能用在可选参数
:::

### 位置可选参数

``` dart
返回值类型 函数名([参数类型 参数名,参数类型 参数名 = 默认值]) {

}

函数名(参数值)
函数名(参数值,参数值)
```

### 命名可选参数

``` dart
返回值类型 函数名(参数类型 参数名,{参数类型 参数名}) {

}

函数名(参数值)
函数名(参数值,参数名: 参数值)
```