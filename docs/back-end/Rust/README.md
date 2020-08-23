# Rust 基础

[Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/)

## 环境搭建

### 安装 Microsoft C++ 生成工具

(VisualCppBuildTools[https://download.microsoft.com/download/5/f/7/5f7acaeb-8363-451f-9425-68a90f98b238/visualcppbuildtools_full.exe]

<!-- (Visuals Studio 安装程序)[https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16]

1. 勾选 C++生成工具
2. 仅选择 生成工具 （MSVC v142 - VS 2019 C++ x64/x86 生成工具 ）
3. 安装 -->

### 安装 Rust

[安装 Rsut](https://www.rust-lang.org/zh-CN/tools/install)

打开 PowerShell，依次输入：

$ENV:RUSTUP_DIST_SERVER='https://mirrors.ustc.edu.cn/rust-static'
$ENV:RUSTUP_UPDATE_ROOT='https://mirrors.ustc.edu.cn/rust-static/rustup'
rustup-init.exe

### 集成开发环境插件

- IDEA: `Rust`
- Visual Studio Code: `Rust (rls)`
  安装完成后需要在 Visual Studio Code 中设置  rust-client.channel  为  stable。 同时建议设置  editor.formatOnSave  为  true，以便在保存时使用 rust-fmt 格式化代码

## 创建项目

- 创建项目: `cargo new 项目名`
- 语法检查: `cargo check`
- 编译项目: `cargo build`

## 基本语法

### 数据类型

- 字符型（32 位）: char
- 布尔型 : bool
- 数字型
  - 有符号
    i8 : 8 位
    i16 : 16 位
    i32 : 32 位
    i64 : 64 位
  - 无符号
    u8 : 8 位
    u16 : 16 位
    u32 : 32 位
    u64 : 64 位
  - 浮点型
    f32 : 32 位
    f64 : 64 位
- 自适应类型(长度随着平台的不同而不同)
  - 有符号: isize
  - 无符号: usize

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

```rust
// 自动推导类型
const 变量名 = 值;

// 指定数据类型
const 变量名: 数据类型 = 值;
```

### 打印输出

```rust
// 纯内容
println!("内容");

// 变量
println!("变量: {}", 变量);
```

## 函数

### 定义

```rust
fn 函数名() -> 返回值类型 {
  return 返回值;
}

// 返回表达式
fn 函数名() -> 返回值类型 {
  返回值
}
```

### 传参

::: tip 提示
Rust 中，**必须**声明每个参数的类型
:::

```rust
fn 函数名(参数名: 参数类型, 参数名: 参数类型) {
  println!("参数名={}, 参数名={}", 参数名, 参数名);
}
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

## 数组

```rust
// 自动推导
let mut 数组名 = [值, 值, 值 ];

// 指定数据类型
let mut 数组名: [数据类型; 个数] = [值, 值, 值 ];
```

## 元组

### 定义

```rust
// 自动推导
let mut 元组名 = (值, 值, 值);

// 指定数据类型
let mut 元组名: (数据类型, 数据类型, 数据类型) = (值, 值, 值);
```

### 访问

```rust
元组名.下标
```

### 元组的拆解

```rust
let mut 元组名 = (值, 值, 值);

let (x, y, z) = 元组名;
println!("x={}",x);
println!("y={}",y);
println!("z={}",z);
```

## 控制流

### if-else

::: tip 提示
if 语句后面可以不接小括号
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
    break;
  }
};
```

### while 循环

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

## 所有权

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
