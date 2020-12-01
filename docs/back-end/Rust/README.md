# Rust 基础

[Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/)

## 环境搭建

### 安装 Microsoft C++ 生成工具

[VisualCppBuildTools](https://download.microsoft.com/download/5/f/7/5f7acaeb-8363-451f-9425-68a90f98b238/visualcppbuildtools_full.exe)

<!-- (Visuals Studio 安装程序)[https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16]

1. 勾选 C++生成工具
2. 仅选择 生成工具 （MSVC v142 - VS 2019 C++ x64/x86 生成工具 ）
3. 安装 -->

### 安装 Rust

[安装 Rsut](https://www.rust-lang.org/zh-CN/tools/install)

打开 PowerShell，依次输入：

```
$ENV:RUSTUP_DIST_SERVER='https://mirrors.ustc.edu.cn/rust-static'
$ENV:RUSTUP_UPDATE_ROOT='https://mirrors.ustc.edu.cn/rust-static/rustup'
rustup-init.exe
```

### 配置国内镜像

创建 `C:\user\用户名\.cargo\config`

```ini
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"

[http]
check-revoke = false
```

### 集成开发环境插件

- IDEA: `Rust`
- Visual Studio Code: `Rust`

## cargo

- 创建项目: `cargo new 项目名`
- 启动项目: `cargo run`
- 语法检查: `cargo check`
- 编译项目: `cargo build --release`

## 基本语法

### 数据类型

- 字符型（32 位）: char

  char 类型被用来描述语言中最基础的单个字符

  ::: tip 提示
  因为 char 类型目的是描述任意一个 unicode 字符，所以它的内存空间是**4 个字节**而不是 1 个字节
  :::

  ```rust
  let mut c = "A";
  ```

- 数字型

  ::: tip 提示
  以一个大小为 8 bits 的数据举例，无符号的表达范围是：[0,255]，有符号的表达范围是：[-128,127]
  :::

  - 有符号
    i8 : 8 位，表达范围是：[-128,127]  
    i16 : 16 位，表达范围是：[-32768,32767]  
    i32 : 32 位，表达范围是：[-2147483648,2147483647]  
    i64 : 64 位，表达范围是：[-9223372036854775808,9223372036854775807]
  - 无符号
    u8 : 8 位，表达范围是：[0,255]  
    u16 : 16 位，表达范围是：[0,65535]  
    u32 : 32 位，表达范围是：[0,4294967295]  
    u64 : 64 位，表达范围是：[0,18446744073709551615]

- 浮点型
  f32 : 32 位
  f64 : 64 位

- 字符串: String
- 布尔型 : bool
- 自适应类型(长度随着平台的不同而不同)
  - 有符号: isize
  - 无符号: usize

### 数据类型转换

- 强制类型转换

  它只能用于原始类型(i32 、i64 、f32 、f64 、 u8 、 u32 、 char 等类型)，并且它是安全的

  ```rust
  let mut number1: i8 = 100;
  let mut number2 = number1 as i32;
  println!("number2={}", number2);
  ```

- 转换字符串
  ```rust
  let mut var1 = 10;
  let mut var2 = var1.to_string();
  println!("var2={}", var2);
  ```

### 类型别名

类型别名用于给一个数据类型起别名

```rust
type 类型别名 = 数据类型;

fn main(){
  let 变量名: 类型别名 = 值;
}
```

### 定义变量

::: tip 提示
如果变量没有`mut`关键字，则数据不可变
:::

Rust 具有隐藏性。即变量可定义多次，以最后定义的变量为准。

```rust
// 自动推导类型
let mut 变量名;

// 指定数据类型
let mut 变量名: 数据类型;
```

### 定义常量

常量的类型必须标注。命名规范为全大写字母，每个单词之间用下划线分开。

```rust
const 变量名: 数据类型 = 值;
```

```rust
const MAX_POINTS: u32 = 100;
```

### 定义全局变量

静态变量的声明周期是整个程序，从启动到退出，它占用的内存空间不会在执行过程中回收。

::: tip 提示

- 全局变量必须在声明时立即初始化，并且需要指定数据类型
- 全局变量的初始化必须是编译期可确定的常量，不能包括执行期才能确定的表达式、语句和函数调用
- 带有`mut`修饰的全局变量，在使用时必须使用`unsafe`

:::

- 不可变全局变量

  ```rust
  static 变量名: 数据类型 = 值;
  ```

- 可变全局变量

  ```rust
  static mut 变量名: 数据类型 = 值;
  // 改变值
  unsafe { 变量名 = 值; }
  // 读取值
  unsafe { println!("{}", 变量名); }
  ```

### 隐藏

在 Rust 中，可以声明相同名字的变量，新的变量会隐藏之前声明的同名变量。

::: tip 提示
使用 let 声明的同名新变量，类型可以与之前不同
:::

```rust
let x = 5;
let x= x + 1;
```

### 逻辑运算符

- 与: &&
- 或: ||
- 取反: !

### 关系运算符

- 等于: ==
- 不等于: !=
- 大于: >
- 小于: <
- 小于等于: >=
- 大于等于: <=

## 函数

### 定义

```rust
fn 函数名() -> 返回值类型 {
  return 返回值;
}

// 返回表达式（返回值后面不能加;）
fn 函数名() -> 返回值类型 {
  返回值
}
```

### 传参

::: tip 提示

- Rust 中，**必须声明每个参数的类型**
- `&`表示指向值的引用（没有这个值的所有权）

:::

- 声明

  ```rust
  fn 函数名(参数名: &参数类型) {
    println!("参数名={}", 参数名);
  }

  fn 函数名(参数名: &参数类型) -> 返回值类型 {
    println!("参数名={}", 参数名);
    return 返回值;
  }
  ```

- 使用

  ```rust
  函数名(&参数);
  let mut 变量名 = 函数名(&参数);
  ```

### 函数体

::: tip 提示
函数体只能使用返回表达式，不可使用`return`关键字
:::

```rust
let 变量名 = {
  let x = 3;
  x + 1
};
```

## 控制流

### if-else

::: tip 提示

- if 语句后面的条件不接小括号
- 如果使用 if-else 语句作为返回值表达式，一定要加 else 分支，否则默认 else 分支的返回值为()

:::

- 普通使用

  ```rust
  if 条件 {

  } else if 条件 {

  } else {

  }
  ```

- 结合 let

  ```rust
  let mut 变量名 = if 条件 {
    返回值
  } else {
    返回值
  };
  ```

### loop 循环

loop 表示一个无限循环

- 普通使用

  ```rust
  loop {
    if 条件 {
      break;
    }
  }
  ```

- 结合 let

  ```rust
  let mut 变量名 = loop {
    if 条件 {
      break 值;
    }
  };
  ```

### while 循环

while 语句是带条件判断的循环语句。如果条件满足，则持续循环执行结果语句块。

```rust
while 条件 {

}
```

### for 循环

```rust
let mut 数组 = [1, 2, 3, 4, 5];
for item in &数组 {
  println!("{}",item);
}
```

### match 匹配

match 类似 switch 语句，通过关键字匹配

```rust
match 值 {
  值1 => println!("1");
  值2 => println!("2");
  // 其他情况
  _=> println!("其他");
}
```

## 数组

数组也可以将多个值放在一个类型里，每个元素的类型必须相同，**数组的长度是固定的**。

### 定义

```rust
// 自动推导
let 数组名 = [值, 值];

// 指定数据类型
let 数组名: [数据类型; 个数] = [值, 值];
```

### 访问元素

```rust
println!("{}", 数组名[索引]);
```

### 遍历数组

```rust
for item in 数组名.iter() {
  println!("{}", item);
}
```

## 元组 Tuple

Tuple 可以将多个类型的多个值放在一个类型里，Tuple 的长度是固定的，一旦声明就无法改变

### 定义

```rust
// 自动推导
let 元组名 = (值, 值, 值);

// 指定数据类型
let 元组名: (数据类型, 数据类型) = (值, 值);
```

### 访问元素

```rust
println!("{}", 元组名.索引号);
```

### 元组的拆解

```rust
let 元组名 = (值, 值);

let (item1, item2) = 元组名;
println!("item1={} item2={}", item1, item2);
```

## 动态数组 Vector

Vector 只能储存一系列**相同类型**的值。允许我们在一个单独的数据结构中储存多于一个的值，它在内存中彼此相邻地排列所有的值。

### 定义

```rust
// 无初始值
let mut Vector名: Vec<数据类型> = Vec::new();

// 有初始值
let mut Vector名 = vec![值, 值];
```

### 访问元素

```rust
// get方法（推荐）
match Vector名.get(下标) {
  Some(value) => println!("v1[0]={}", value),
  None => println!("none"),
}

// 索引语法
println!("{}", Vector名[下标]);
```

### 增加元素

```rust
Vector名.push(元素);
```

### 修改元素

```rust
Vector名[下标] = 值;
```

### 遍历元素

- 只读遍历

```rust
for item in &Vector名 {
  println!("{}", i);
}
```

- 可写遍历

```rust
for item in &mut Vector名 {
  *item = *item +1 ;
  println!("{}", item);
}
```

## HashMap

### 创建

```rust
use std::collections::HashMap;

// 指定数据类型
let mut  HashMap名: HashMap<数据类型,数据类型> = HashMap::new();

// 类型推导
let mut  HashMap名 = HashMap::new();
```

### 增加元素

当键不存在时则增加元素，存在时则修改元素

```rust
HashMap名.insert(键,值);

// 不修改值，当键不存在时才插入
HashMap名.entry(键).or_insert(值);
```

### 读取元素

- 直接访问

```rust
println!("{}", HashMap名[键]);

```

- get 方法

```rust
match HashMap名.get(键) {
  Some(value) => println!("{}", value),
  None => println!("none"),
}
```

### 遍历元素

::: tip 提示
遍历顺序为随机遍历
:::

```rust
for (key, value) in HashMap名 {
  println!("{}: {}", key, value);
}
```

## 字符串

### 创建

```rust
let mut 字符串名 = String::from("内容");
```

### 追加字符串

::: tip 提示
可以不使用`&`，因为没有获得所有权
:::

```rust
let mut 字符串名 = String::from("内容");

字符串名.push_str("内容");
println!("{}", 字符串名);
```

### 追加字符

```rust
let mut 字符串名 = String::from("内容");

字符串名.push('a');
println!("{}", 字符串名);
```

### 格式化字符串

```rust
let mut str1 = String::from("aa");
let mut str2 = String::from("bb");
let mut str3 = String::from("cc");

let mut str = format!("{}-{}-{}", str1, str2, str3);
println!("str={}", str);
```

### 遍历字符串

- 字符遍历

```rust
let mut 字符串名 = String::from("内容");

for item in 字符串名.chars(){
  println!("item={}",item);
}
```

- 字节遍历

```rust
let mut 字符串名 = String::from("内容");

for item in 字符串名.bytes(){
  println!("item={}",item);
}
```

### 字符串切片

```rust
let mut s = String::from("hello world");

println!("Hello={}", &s[0..5]);
println!("Hell={}", &s[..4]);
```

### 获取字符串长度

```rust
变量名.len();
```

## 结构体

### 定义

```rust
struct 结构体名 {
  字段名: 数据类型,
  字段名: 数据类型,
}

impl 结构体名 {
  fn 方法名(&self) -> 返回值数据类型 {
    return self.字段名;
  }

  fn 方法名(&self) {
    println!("方法调用");
  }
}
```

### 实例化

::: tip 提示
参数名和字段名同名时，可省略字段名直接写参数名
:::

```rust
// 实例化
let mut  实例名 = 结构体名 {
  字段名: 值,
  字段名: 值,
};

// 修改数据
实例名.字段名 = 值;
```

### 元组结构体

元组结构体内的成员没有名字，适用于不需要特别关系结构体内部成员的名字

- 定义

```rust
struct 元组结构体名(数据类型, 数据类型);
```

- 使用

```rust
let mut  实例名 = 元组结构体名(值, 值);

println!("实例名.0={}, 实例名.1={}", 实例名.0, 实例名.1);
```

### 打印结构体

```rust
#[derive(Debug)]

struct 结构体名 {
  字段名: 数据类型,
  字段名: 数据类型,
}

let mut  实例名 = 结构体名 {
  字段名: 值,
  字段名: 值,
};

// 整行打印
println!("实例名={:?}",实例名);
// 换行打印
println!("实例名={:#?}",实例名);
```

## 所有权

### 什么是所有权？

::: tip 提示
当一个变量被当作参数传递后，此变量则无法继续使用
:::

所有运行的程序都必须管理其使用计算机内存的方式。一些语言中具有垃圾回收机制，在程序运行时不断地寻找不再使用的内存；在另一些语言中，程序员必须亲自分配和释放内存。Rust 则选择了第三种方式：通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。在运行时，所有权系统的任何功能都不会减慢程序。

- 所有权规则

  1. Rust 中的每一个值都有一个被称为其 所有者（owner）的变量。
  2. 值在任一时刻有且只有一个所有者。
  3. 当所有者（变量）离开作用域，这个值将被丢弃。

- 所有权与函数

```rust
fn main() {
  let s1 = gives_ownership();         // gives_ownership 将返回值移给 s1

  // s2 进入作用域
  let s2 = String::from("hello");

  let s3 = takes_and_gives_back(s2);  // s2 被移动到takes_and_gives_back 中,它也将返回值移给 s3
}
// 这里, s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，
// 所以什么也不会发生。s1 移出作用域并被丢弃

// gives_ownership 将返回值移动给调用它的函数
fn gives_ownership() -> String {


  // some_string 进入作用域
  let some_string = String::from("hello");

  // 返回 some_string 并移出给调用的函数
  some_string
}

// takes_and_gives_back 将传入字符串并返回该值
fn takes_and_gives_back(a_string: String) -> String {
  // a_string 进入作用域
  a_string  // 返回 a_string 并移出给调用的函数
}
```

### 引用

`&`表示指向值的引用（没有这个值的所有权），因此，当引用离开其值指向的作用域后会被丢弃

- 引用的基本使用

```rust
fn main() {
  let mut s1 = String::from("hello");
  let mut len = getLength(&s1);

  println!("字符串={}, 长度={}", s1, len);

  fn getLength(s: &String) -> usize {
      return s.len();
  }
}
```

- 可变引用
  当需要改变参数时，需要使用可变引用。  
  注意：在特定作用域中的特定数据只能有一个可变引用

  ```rust
  fn main() {
    let mut s = String::from("hello");

    change(&mut s);
  }

  fn change(some_string: &mut String) {
    some_string.push_str(", world");
  }
  ```

## Crate

模块 让我们可以将一个 crate 中的代码进行分组，以提高可读性与重用性。模块还可以控制项的 私有性，即项是可以被外部代码使用的（public），还是作为一个内部实现的内容，不能被外部代码使用（private）。

### 声明

创建模块: `cargo new --lib 模块名`

\模块名\src\lib.rs

```rust
pub mod 模块名 {
  // 定义函数
  pub fn 函数名() {

  }

  // 定义结构体
  pub struct 结构体名 {
    pub 属性名: 数据类型,
    pub 属性名: 数据类型,
  }

  // 嵌套
  pub mod 模块名{
    pub fn 函数名(){
      // 调用父级函数
      super::函数名();
    }
  }
}
```

### 使用

- 导入依赖

\Cargo.toml

```ini
[dependencies]
模块名 = { path = "./模块名" }
```

- use 关键字引用

```rust
use 模块名::模块名;

模块名::函数名();
```

- 绝对引用

```rust
模块名::模块名::函数名();
```

### 使用第三方库

- 导入依赖

\Cargo.toml

```ini
[dependencies]
库名 = "版本"
```

- 使用

```rust
extern crate 库名;
```

## 错误

### 可恢复错误

可恢复错误通常代表向用户报告错误和重试操作是合理的情况>例如未找到文件。rust 中使用 `Result<T,E>`来实现

```rust
let mut f = File::open("hello.txt");
let mut r = match f {
    Ok(file) => file,
    Err(error) => panic!("error: {:?}", error),
};
```

### 不可恢复错误

不可恢复错误是 bug 的同义词，如尝试访问超过数组结尾的位置。rust 中通过 panic!来实现。

```rust
panic!("出现不可恢复错误");
```

### 异常捕获

- 示例、代码原型、测试用 `panic!`、`unWrap`、`expect`
- 实际项目中应使用 Result
