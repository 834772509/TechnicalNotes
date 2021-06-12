# Rust 基础

[Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/)

[Rust 实例指南](https://rust-cookbook.budshome.com) [Rust 实践指南](https://rust-guide.budshome.com/)

[Crates 库](https://crates.io/)

## 环境搭建

### 安装 C++生成工具

::: tip 提示
仅安装 Microsoft C++ build tools 即可，`Windows10 SDK`可在以后需要时安装（建议也一并安装）。
:::

[VisualCpp Build Tools 在线安装](https://download.microsoft.com/download/5/f/7/5f7acaeb-8363-451f-9425-68a90f98b238/visualcppbuildtools_full.exe)

自定义安装路径（以管理员身份运行 cmd）：`visualcppbuildtools_full.exe /CustomInstallPath 安装路径`

<!-- (Visuals Studio 安装程序)[https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16]

1. 勾选 C++生成工具
2. 仅选择 生成工具 （MSVC v142 - VS 2019 C++ x64/x86 生成工具 ）
3. 安装 -->

### 配置国内镜像

1. 设置环境变量
   - `RUSTUP_DIST_SERVER`: `https://mirrors.ustc.edu.cn/rust-static`
   - `RUSTUP_UPDATE_ROOT`: `https://mirrors.ustc.edu.cn/rust-static/rustup`
2. 创建 `C:\users\用户名\.cargo\config`文件

   ::: tip 提示
   编码为 UTF-8
   :::

   ```ini
   [source.crates-io]
   # 默认中国科学技术大学，可根据实际情况进行修改
   replace-with = 'ustc'

   # 中国科学技术大学
   [source.ustc]
   registry = "git://mirrors.ustc.edu.cn/crates.io-index"

   # 清华大学
   [source.tuna]
   registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

   # 上海交通大学
   [source.sjtu]
   registry = "https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index"

   # rustcc社区
   [source.crates-io-cn]
   registry = "https://crates-io.cn/crates.io-index"

   [http]
   check-revoke = false
   ```

### 安装 Rust

::: tip 提示
默认为在线安装 Rust，需要先在环境变量内配置国内镜像才可进行正常下载
:::

自定义安装路径（设置环境变量）：

- `CARGO_HOME`: `D:\Program Files\Rust\.cargo`
- `RUSTUP_HOME`: `D:\Program Files\Rust\.rustup`

[使用 Rustup 安装 Rsut](https://www.rust-lang.org/zh-CN/tools/install)

### 集成开发环境插件

- IDEA: `Rust`
- Visual Studio Code: `Rust`

### 标准库本地化文档

[Rust 标准库本地化文档](https://github.com/wtklbm/rust-library-i18n)

## cargo

### 脚手架

- 创建项目: `cargo new 项目名`
- 启动项目: `cargo run`
- 语法检查: `cargo check`
- 自动修复: `cargo fix`
- 编译项目: `cargo build --release`

### Rustup

- 查看 Rust 版本: `rustup --version`
- 升级 Rust: `rustup update`
- 卸载 Rust: `rustup self uninstall`

### 编译 32 位程序

1. 添加`i686-pc-windows-msvc`target: `rustup target add i686-pc-windows-msvc`
2. 编译 32 位程序: `cargo build --release --target=i686-pc-windows-msvc`

### 优化编译体积

Cargo.toml

```ini
[profile.release]
# 调整优化等级。默认的 release 优化等级为 3，这个等级下编译器会进行循环展开之类的操作以体积膨胀为代价提高程序运行速度
opt-level = 'z'
# 开启 LTO（链接时优化）。可以消除大量冗余代码，减小二进制体积，代价是更长的链接时间
lto = true
# 调整并行代码生成单元数量。默认会启用 16 个并行代码生成单元，对编译速度有提升，但是会妨碍某些优化的进行
codegen-units = 1
# Panic 时立刻终止。禁用生成栈回溯，注意：此选项会对程序的行为产生影响
panic = 'abort'
```

### 增加文件版本信息

[VersionInfo 资源](https://docs.microsoft.com/zh-cn/windows/win32/menurc/versioninfo-resource?redirectedfrom=MSDN)

- Cargo.toml

  ```ini
  [package]
  build = "build.rs"

  [build-dependencies]
  embed-resource = "1.4"
  ```

- \build.rs

  ```rust
  extern crate embed_resource;

  fn main() {
    embed_resource::compile("./resource/resource.rc");
  }
  ```

- 新建`\resource`目录，将图标命名为`icon.ico`并放置于此

- \resource\resource.rc

  ::: tip 提示
  `resource.rc`需为 GBK 编码，否则将导致编译后的版本信息乱码
  :::

  ::: details 点击查看代码

  ```c
  /* 图标信息 */
  #define IDI_ICON 0x101
  IDI_ICON ICON "icon.ico"

  /* 文件信息 */
  #define VER_COMPANYNAME_STR           "公司名\0"
  #define VER_FILEDESCRIPTION_STR       "文件描述\0"
  #define VER_INTERNALNAME_STR          "内部名称\0"
  #define VER_LEGALCOPYRIGHT_STR        "版权\0"
  #define VER_ORIGINALFILENAME_STR      "原始文件名.exe\0"
  #define VER_PRODUCTNAME_STR           "产品名称\0"

  /* 文件版本 */
  #define VER_FILEVERSION               1,0,0,0
  #define VER_FILEVERSION_STR           "1.0.0.0\0"

  /* 产品版本 */
  #define VER_PRODUCTVERSION            1,0,0,0
  #define VER_PRODUCTVERSION_STR        "1.0.0.0\0"

  1 VERSIONINFO
  FILEVERSION     VER_FILEVERSION
  PRODUCTVERSION  VER_PRODUCTVERSION
  BEGIN
      BLOCK "StringFileInfo"
      BEGIN
          BLOCK "040904E4"
          BEGIN
              VALUE "CompanyName",      VER_COMPANYNAME_STR
              VALUE "FileDescription",  VER_FILEDESCRIPTION_STR
              VALUE "FileVersion",      VER_FILEVERSION_STR
              VALUE "InternalName",     VER_INTERNALNAME_STR
              VALUE "LegalCopyright",   VER_LEGALCOPYRIGHT_STR
              VALUE "OriginalFilename", VER_ORIGINALFILENAME_STR
              VALUE "ProductName",      VER_PRODUCTNAME_STR
              VALUE "ProductVersion",   VER_PRODUCTVERSION_STR
          END
      END
      BLOCK "VarFileInfo"
      BEGIN
          VALUE "Translation", 0x409, 1252
      END
  END
  ```

  :::

## 基本语法

### 数据类型

- 字符型（32 位）: `char`

  char 类型被用来描述语言中最基础的单个字符

  ::: tip 提示
  因为 char 类型目的是描述任意一个 unicode 字符，所以它的内存空间是**4 个字节**而不是 1 个字节
  :::

  ```rust
  let c = "A";
  ```

- 数字型

  ::: tip 提示
  以一个大小为 8 bits 的数据举例，无符号的表达范围是：[0,255]，有符号的表达范围是：[-128,127]
  :::

  - 有符号
    `i8` : 8 位，表达范围是：[-128,127]  
    `i16` : 16 位，表达范围是：[-32768,32767]  
    `i32` : 32 位，表达范围是：[-2147483648,2147483647]  
    `i64` : 64 位，表达范围是：[-9223372036854775808,9223372036854775807]
  - 无符号
    `u8` : 8 位，表达范围是：[0,255]  
    `u16` : 16 位，表达范围是：[0,65535]  
    `u32` : 32 位，表达范围是：[0,4294967295]  
    `u64` : 64 位，表达范围是：[0,18446744073709551615]

- 浮点型
  `f32` : 32 位
  `f64` : 64 位

- 字符串: `String`
- 布尔型 : `bool`
- 自适应类型(长度随着平台的不同而不同)
  - 有符号: `isize`
  - 无符号: `usize`

### 数据类型转换

- 强制类型转换

  它只能用于原始类型(i32 、i64 、f32 、f64 、 u8 、 u32 、 char 等类型)，并且它是安全的。

  ```rust
  let number1: i8 = 100;
  let number2 = number1 as i32;
  println!("number2={}", number2);
  ```

- 转换字符串
  ```rust
  let var1 = 10;
  let var2 = var1.to_string();
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

```rust
// 自动推导类型
let mut 变量名;

// 指定数据类型
let mut 变量名: 数据类型;
```

连续定义多个变量

```rust
let (变量名, 变量名) = (值, 值);
let (mut 变量名, mut 变量名): (数据类型, 数据类型) = (值, 值);
```

Rust 具有隐藏性。可以声明相同名字的变量，新的变量会隐藏之前声明的同名变量。

::: tip 提示
使用 let 声明的同名新变量，类型可以与之前不同
:::

```rust
let x = 5;
let x= x + 1;
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

### 逻辑运算符

- 与: `&&`
- 或: `||`
- 取反: `!`

### 关系运算符

- 等于: ==
- 不等于: !=
- 大于: >
- 小于: <
- 小于等于: >=
- 大于等于: <=

### 标准输出

- 标准输出

  ```rust
  println!("输出内容");
  println!("输出变量: {:?}", 变量名);
  ```

- 标准错误

  ```rust
  eprintln!("输出内容");
  eprintln!("输出变量: {:?}", 变量名);
  ```

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

- **必须声明每个参数的类型**
- `&`表示指向值的引用（没有这个值的所有权）

:::

- 声明

  ```rust
  fn 函数名(参数名: 参数类型) {
    println!("参数名={}", 参数名);
  }

  fn 函数名(参数名: &参数类型) -> 返回值类型 {
    println!("参数名={}", 参数名);
    return 返回值;
  }
  ```

- 使用

  ```rust
  函数名(参数);
  函数名(&参数);
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

## 闭包

闭包是可以捕获其所在环境的匿名函数。闭包通常很短小，只在狭小的上下文中工作，闭包不要求标注参数和返回值的类型，编译器通常能推断出类型

- 是匿名函数
- 保存为变量、作为参数
- 可在一个地方创建闭包，然后在另一个，上下文中调用闭包来完成运算
- 可从其定义的作用域捕获值（会产生内存开销）

### 定义闭包

```rust
let 闭包名 = |参数名| {

};
```

### 使用闭包

```rust
闭包名(参数名);
```

### Fn Trait

```rust
struct Cacher<T>
  where T: Fn(u32) -> u32 {
  calculation: T,
  value: Option<u32>,
}

impl<T> Cacher<T> where T: Fn(u32) -> u32 {
  fn new(calculation: T) -> Cacher<T> {
    Cacher { calculation, value: None }
  }
  fn value(&mut self, arg: u32) -> u32 {
    match self.value {
      Some(v) => v,
      None => {
        let v = (self.calculation)(arg);
        self.value = Some(v);
        v
      }
    }
  }
}
```

### 闭包从所在环境捕获值的方式

创建闭包时，通过闭包对环境值的使用，Rust 推断出具体使用哪个 trait

- 所有的闭包都实现了 FnOnce
- 没有移动捕获变量的实现了 FnMut
- 无需可变访问捕获变量的闭包实现了 Fn

### move

在参数列表前使用 move 关键字，可以强制闭包取得它所使用的环境值的所有权。

- 当将闭包传递给新线程以移动数据使其归新线程所有时，此技术最为有用。

```rust
let 闭包名 = move |参数名| {

}
```

## 所有权

### 什么是所有权

所有运行的程序都必须管理其使用计算机内存的方式。

- 一些语言中具有垃圾回收机制，在程序运行时不断地寻找不再使用的内存；
- 在另一些语言中，程序员必须亲自分配和释放内存。

Rust 则选择了第三种方式：

- 通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。
- 在运行时，所有权系统的任何功能都不会减慢程序。

### 栈内存与堆内存

1. 栈内存(Stack)
   按值的接受顺序来存储，按相反的顺序将它们移除（先进后出）。

   - 所有存储在栈上的数据必须拥有已知的固定大小；
   - 编译时大小未知的数据或运行时大小可能发生变化的数据必须保持到栈内存。

   - 增加数据叫“压入栈”
   - 删除数据叫“弹出栈”

2. 堆内存(Heap)
   操作系统首先需要找到一个足够大的空间来存放数据，做好记录方便下次分配

### 所有权规则

1. 每个值都有一个变量，这个变量是该值的所有者。
2. 每个值同时只能有一个所有者。
3. 当所有者超出作用域(scope)时，该值将被删除。

### 内存和分配

Rust 采用了不同的方式：对于某个值来说，当拥有它的变量走出作用范围时，内存会立即自动的交还给操作系统（调用 drop 函数）。

### 所有权与函数

把值传递给函数，会发生移动或复制。

::: tip 提示
基础类型会自动进行复制，不需要进行引用
:::

```rust
fn main() {
  let s = String::from("Hello World");
  take_ownership(s);

  let x =5;
  makes_copy(x);

  println!("x:{}", x);
}

fn take_ownership(some_string: String){
  println!("{}", some_string);

}

fn makes_copy(some_number: i32){
  println!("{}", some_number);
}
```

### 返回值与作用域

函数在返回值的过程中同样也会发生所有权的转移。

一个变量的所有权总是遵循同样的模式：

- 把一个值赋给其它变量时就会发生移动
- 当一个包含 heap 数据的变量离开作用域时，它的值就会被 drop 函数清理，除非数据的所有权移动到另-一个变量上了

```rust
fn main() {
  let s1 = gives_ownership();
  let s2 = String::from("hello");
  let s3 = takes_and_gives_back(s2);
}

fn gives_ownership() -> String {
  let some_string = String::from("hello");
  some_string
}

fn takes_and_gives_back(a_string: String) -> String {
  a_string
}
```

### 引用

`&`表示指向值的引用，允许引用某些值而不取得其所有权

- 引用的基本使用

  ```rust
  fn main() {
    let s1 = String::from("hello");
    let len = getLength(&s1);

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
  let 变量名 = if 条件 {
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
  let 变量名 = loop {
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
let 数组 = [1, 2, 3, 4, 5];
for item in &数组 {
  println!("{}",item);
}
```

### match 匹配

match 类似 switch 语句，通过关键字匹配

::: tip 提示
如无`_`匹配则 match 匹配必须穷举所有的可能
:::

```rust
match 值 {
  值1 => 1,
  值2 => 2,
  值3 => {
    return 3;
  },
  // 其他情况
  _=> -1
}
```

### if let 匹配

if let 处理只关心一种匹配而忽略其他匹配的情况。if let 放弃了穷举的可能，可以看作是 match 的语法糖。

```rust
if let 具体值 = 匹配值 {

} else {

}
```

## String 字符串

出于内存安全的考虑，Rust 将字符串分成两种类型：

1. str 字符串：固定长度，不可改变
2. String 字符串：可变长度，可增长、可修改、可拥有

### 创建

```rust
let 字符串名 = String::from("内容");
let 字符串名 = "内容".to_string();
```

### 追加字符串

将一个字符串切片附加到 String

::: tip 提示
可以不使用`&`，因为没有获得所有权
:::

```rust
let mut 字符串名 = String::from("内容");

字符串名.push_str("内容");
println!("{}", 字符串名);
```

### 追加字符

将**单个字符**附加到 String

```rust
let mut 字符串名 = String::from("内容");

字符串名.push('a');
println!("{}", 字符串名);
```

### 连接字符串

`format!()`不会获得参数的所有权

```rust
let str1 = String::from("aa");
let str2 = String::from("bb");
let str3 = String::from("cc");

let str = format!("{}{}{}", str1, str2, str3);
println!("{}", str);
```

### 拼接字符串（不推荐）

::: tip 提示

- 只有`String`才能使用`+`，`&String`不能使用`+`
- 使用`+`只能将`&str`增加到`String`

:::

```rust
let str1 = String::from("aaa");
let str2 = String::from("bbb");

let str3 = str1.clone() + &str2;

println!("str1:{}", &str1);
println!("str2:{}", &str2);
println!("str3:{}", &str3);
```

### 遍历字符串

- 字符遍历

  ```rust
  let 字符串名 = String::from("内容");

  for item in 字符串名.chars(){
    println!("item={}",item);
  }
  ```

- 字节遍历

  ```rust
  let 字符串名 = String::from("内容");

  for item in 字符串名.bytes(){
    println!("item={}",item);
  }
  ```

### 字符串切片

::: tip 提示
Rust 中，中文汉字以 3 个字符来存储
:::

```rust
println!("{}", &字符串[开始索引..结束索引]);
```

```rust
let s = String::from("Hello World");

println!("Hello={}", &s[0..5]);
println!("Hell={}", &s[..4]);
```

### 分割字符串

```rust
for item in 字符串.split("分隔符") {
  println!("{}", item);
}
```

### 获取字符串长度

```rust
字符串名.len();
```

### 判断字符串是否存在指定内容

存在返回`true`，不存在返回`false`

```rust
字符串名.contains("指定内容");
```

### 转小写

```rust
字符串名.to_lowercase();
```

### 转大写

```rust
字符串名.to_uppercase();
```

## 数组

数组也可以将多个值放在一个类型里，每个元素的类型必须相同，**数组的长度是固定的**。

### 定义

```rust
// 自动推导
let 数组名 = [值, 值];

// 指定初始值、个数
let 数组名 = [值, 个数];

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

### 取数组长度

```rust
数组名.len();
```

## 元组（Tuple）

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

### 元组的结构

为了从元组中获取单个值，可以使用模式匹配（pattern matching）来解构元组值

```rust
let 元组名 = (值, 值);

let (item1, item2) = 元组名;
println!("item1={} item2={}", item1, item2);
```

## 动态数组（Vector）

Vector 只能储存一系列**相同类型**的值。允许我们在一个单独的数据结构中储存多于一个的值，它在内存中连续存放所有的值。

### 定义

```rust
// 无初始值
let mut Vector名: Vec<数据类型> = Vec::new();

// 有初始值
let mut Vector名 = vec![值, 值];
```

### 增加元素

```rust
Vector名.push(元素);
```

### 修改元素

```rust
Vector名[下标] = 值;
```

### 删除元素

```rust
Vector名.remove(下标);
```

### 访问元素

::: tip 提示
get 方法可以返回 Option 进行异常处理，索引语法发生异常时无法处理。
:::

- get 方法（推荐）

  ```rust
  match Vector名.get(下标) {
    Some(value) => println!("v1[0]={}", value),
    None => println!("none"),
  }
  ```

- 索引语法

  ```rust
  println!("{}", Vector名[下标]);
  ```

### 遍历元素

- 只读遍历

  ```rust
  for item in &Vector名 {
    println!("{}", item);
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

HashMap 以 键值对的形式存储数据，一个键(Key)对应一个值(Value)

### 创建

```rust
use std::collections::HashMap;

// 指定数据类型
let mut HashMap名: HashMap<数据类型,数据类型> = HashMap::new();

// 类型推导
let mut HashMap名 = HashMap::new();
```

### 增加元素

- 当键不存在时则增加元素，存在时则修改元素

  ```rust
  HashMap名.insert(键,值);
  ```

- 仅当键不存在时增加元素

  ```rust
  HashMap名.entry(键).or_insert(值);
  ```

### 读取元素

::: tip 提示
get 方法可以返回 Option 进行异常处理，直接访问语法发生异常时无法处理。
:::

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

## 结构体（Struct）

### 定义

::: tip 提示

- 一旦 struct 的实例是可变的，那么实例中所有的字段都是可变的
- struct 中的字段默认是私有的（private）

:::

```rust
struct 结构体名 {
  字段名: 数据类型,
  字段名: 数据类型,
}
```

### 定义方法

```rust
impl 结构体名 {
  fn 方法名(&self) -> 返回值数据类型 {
    // 访问属性
    self.字段名
  }
}
```

### 使用

::: tip 提示
参数名和字段名同名时，可省略字段名直接写参数名
:::

```rust
// 实例化
let mut  实例名 = 结构体名 {
  字段名: 值,
  字段名: 值,
};

// 访问数据
println!("{}", 实例名.字段名);

// 修改数据
实例名.字段名 = 值;

// 调用方法
实例名.方法名();
```

### 更新语法

如果需要基于某个 struct 实例来创建一个新实例的时候，可以使用 struct 更新语法

```rust
let 实例名 = 结构体名 {
  字段名: 值,
  ..原实例名
}
```

### 元组结构体（Tuple Struct）

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

### Unit-Like Struct

单元结构体是没有任何字段的结构体

```rust
struct 空结构体名;
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

## 枚举（Enum）

枚举允许我们列举所有可能的值来定义一个类型

### 定义

- 无参数枚举体

  ```rust
  enum 枚举名 {
    属性名,
    属性名,
  }
  ```

- 带参数枚举体

  ```rust
  enum 枚举名 {
    属性名(数据类型),
    属性名(数据类型, 数据类型),
  }
  ```

### 定义方法

```rust
impl 枚举名 {
  fn 方法名(&self) {

  }
}
```

### 使用

```rust
// 无参枚举体
let 数据 = 枚举名::属性名;
// 参数枚举体
let 数据 = 枚举名::属性名(值, 值);
```

### Option 枚举

Option 枚举 定义于标准库中，位于 Prelude (预导入模块)中。描述了：某个值可能存在(某种类型)或不存在的情况。

Rust 中没有`Null`，但提供类类型`Null`概念的枚举：`Option<T>`：

```rust
enum Option<T> {
  Some(T),
  None,
}
```

```rust
let x = 1;
let y = Some(1);

let sum = x + y.unwrap();
println!("{}", sum);
```

## 错误

- 示例、代码原型、测试用 `panic!`、`unWrap`、`expect`
- 实际项目中应使用 Result

### 可恢复错误

可恢复错误通常代表向用户报告错误和重试操作是合理的情况>例如未找到文件。rust 中使用 `Result`枚举来实现

- match

  ```rust
  let f = File::open("hello.txt");
  let r = match f {
    Ok(file) => file,
    Err(error) => panic!("error: {:?}", error),
  };
  ```

- unwrap 方法

  unwrap 是 match 表达式的一个快捷方法，效果等同于以上代码。

  - 如果 Result 结果是 Ok，返回 `Ok` 里面的值
  - 如果 Result 结果是 Err，调用 `panic!` 宏

  ```rust
  let f = File::open("hello.txt").unwrap();
  ```

- expect 方法

  和 `unwrap` 类似，但可指定错误信息。

  ```rust
  let f = File::open("hello.txt").expect("错误信息");
  ```

- unwrap_or 方法

  如果值不为 None 则返回 Some 中的值，否则是使用传入的参数代替

- `?`运算符

  ::: tip 提示
  `?`运算符只能运用于**返回值为`Result`、`Option`**的函数
  :::

  `?`运算符是传播错误的一种快捷方式，用于针对不同错误原因，返回同一种错误类型。

  - 如果 Result 是 Ok: Ok 中的值就是表达式的结果，然后继续执行程序
  - 如果 Result 是 Err: Err 就是**整个函数**的返回值，就像使用了 return

  ```rust
  fn readUsernameFromFile() -> Result<String, io::Error> {
    let mut f = File::open("hello.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
  }
  ```

- `Box<dyn Error>`: 任何可能的错误类型

  ```rust
  use std::error::Error;

  pub fn main() {
    match 函数名() {
      Ok(value) => println!("{}", value),
      Err(error) => println!("{}", error),
    }
  }

  fn 函数名() -> Result<i32, Box<dyn Error>> {
    let list = [1, 2];
    let value = *list.get(3).ok_or("发生错误".to_owned())?;
    Ok(value)
  }
  ```

### 不可恢复错误

不可恢复错误是 bug 的同义词，如尝试访问超过数组结尾的位置。

当 `panic!` 宏执行:

- 程序会打印一个错误信息
- 展开(unwind) 、清理调用栈(Stack)
- 退出程序

```rust
panic!("出现不可恢复错误");
```

## 单元包 (Crate)

模块 让我们可以将一个 crate 中的代码进行分组，以提高可读性与重用性。模块还可以控制项的私有性，即项是可以被外部代码使用的（public），还是作为一个内部实现的内容，不能被外部代码使用（private）。

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

- use 关键字引用

  ```rust
  use 模块名::模块名;
  use 模块名::{模块名, 模块名};

  模块名::函数名();
  ```

- 绝对引用

  ```rust
  模块名::模块名::函数名();
  ```

- 重导出
  使用 use 将路径(名称)导入到作用域内后，该名称在此作用域内是私有的。

  `pubuse`: 重导出。
  将条目引入作用域，该条目可以被外部代码引入到它们的作用域

- 导入依赖法

  \Cargo.toml

  ```ini
  [dependencies]
  模块名 = { path = "./模块名" }
  ```

### 拆分模块

- \模块名.rs

  ```rust
  pub fn 函数名() {

  }
  ```

- \main.rs

  ```rust
  mod 函数名;

  fn main() {
    函数名::函数名();
  }
  ```

### 使用第三方库

导入依赖：

\Cargo.toml

```ini
[dependencies]
库名 = "版本"
```

## 泛型

泛型是具体类型或其它属性的抽象代替。

- 处理重复代码的问题，提高代码复用能力
- 编写的代码不是最终的代码，而是一种模板，里面有一些”占位符“
- 编译器在编译时将“占位符”替换为具体的类型

- 函数中使用泛型

  ```rust
  fn 函数名<T>(参数名: <T>) -> T {

  }
  ```

- 结构体中使用泛型

  ```rust
  struct 结构体名<T> {
    属性名: T,
    属性名: T,
  }
  ```

- 枚举类型中使用泛型

  ```rust
  enum 枚举名<T> {
    属性名(T),
    属性名(T),
  }
  ```

## Trait

Trait，抽象的定义共享行为。告诉 Rust 编译器：某种类型具有哪些并且可以与其它类型共享的功能，与其它语言的接口(interface)类似，但有些区别。
Traitbounds(约束)：泛型类型参数指定为实现了特定行为的类型

### 定义

```rust
pub trait Trait名 {
  fn 方法名(&self);
  fn 方法名(&self);
  // 默认实现
  fn 方法名(&self) {
    ...
  };
}

pub struct 结构体名 {
  pub 属性名: 数据类型,
}

impl Trait名 for 结构体名 {

}
```

### 使用

```rust
let 实例名 = 结构体名 {
  属性名: 属性值,
  属性名: 属性值,
};
实例名.方法名();
```

### 使用 Trait 作为参数

Trait Bound 语法

```rust
fn 函数名<T: Trait名>(参数名: &T) {}
fn 函数名<T: Trait名 + Trait名>(参数名: &T) {}
```

### 使用 Trait 作为返回类型

```rust
fn 函数名() -> Trait名 {
  return 结构体名 {
    属性名: 属性值,
    属性名: 属性值,
  };
}
```

## 测试

### 测试函数

```rust
#[test]
fn 测试函数名() {

}
```

### 测试命令

- 正常测试: `cargo test`
- 增加命令行: `cargo test --程序命令行`
- 指定线程数测试（默认多线程）: `cargo test --test-threadds=1`
- 测试成功时依然显示打印信息: `cargo test --show-output`
- 按测试名称测试: `cargo test 测试函数名`

### 断言

- `assert!`宏

  `assert!`宏来自标准库，用来确定某个状态是否为 true。

  - `true`: 测试通过
  - `false`: 调用 panic!，测试失败

  ```rust
  assert!(true);
  assert!(false, "自定义错误 {}", 0);
  ```

- `assert_eq!`宏

  `assert_eq!`宏来自标准库，用来判断两个参数是否相等，如果断言失败则自动打印两个参数的值。

  ```rust
  assert_eq!(0, 0);
  assert_eq!(0, 0, "自定义错误 {}", 0);
  ```

- `assert_ne!`宏

  `assert_ne!`宏来自标准库，用来判断两个参数是否不等，如果断言失败则自动打印两个参数的值。

  ```rust
  assert_ne!(0, 1);
  assert_ne!(0, 1, "自定义错误 {}", 0);
  ```

### 测试错误处理情况

测试代码是否如预期的处理了发生错误的情况，可验证代码在特定情况下是否发生了 panic
`should_panic` 属性(attribute):

- 函数 panic: 测试通过
- 函数没有 panic: 测试失败

```rust
#[test]
#[should_panic]
fn 测试函数名() {
  panic!()
}
```

### 测试中使用 Result

无需 panic，可使用`Result<T,E>`作为返回类型编写测试:

- 返回`Ok`: 测试通过
- 返回`Err`: 测试失败

```rust
#[test]
fn 测试函数名() -> Result<(), String> {
  Ok(())
}
```

::: tip 提示
不要在使用`Result<T, E>`编写的测试上标注`should_panic`
:::

### 忽略测试

```rust
#[test]
#[ignore]
fn 测试函数名(){

}
```

运行被忽略的测试: `cargo test -- --ignored`

### 单元测试

单元测试小、专注，一次对一个模块进行隔离的测试，可测试`private`接口。

```rust
#[cfg(test)]
mod tests {
  #[test]
  fn 测试函数名(){

  }
}
```

### 集成测试

集成测试完全位于被测试库的外部，目的是测试被测试库的多个部分是否能正确的一起工作（集成测试的覆盖率很重要）。

::: tip 提示

- 如果项目是 binary crate，只含有 src/main.rs 没有 src/lib.rs:
  - 不能在 tests 目录下创建集成测试
  - 无法把 main.rs 的函数导入作用域
- 只有 librarycrate 才能暴露函数给其它 crate 用
- binary crate 意味着独立运行

:::

::: tip 提示

- `tests`目录下的每个测试文件都是单独的一个 crate
- 无需标注# [cfg(test)]，tests 目录被特殊对待
- 需要将被测试库导入

:::

1. 创建`\test`目录
2. 编写测试代码

```rust
#[test]
fn 测试函数名(){

}
```

## env 模块

### 访问环境变量

常用环境变量：

- `CARGO_PKG_VERSION`: Cargo.toml 版本号
- `CARGO_PKG_AUTHORS`: Cargo.toml 作者
- `WINDIR`: `C:\Windows`
- `PROGRAMFILES`: `C:\Program Files`
- `PROGRAMFILES(X86)`: `C:\Program Files (x86)`

```rust
env::var("环境变量名"));
```

遍历环境变量：

```rust
for (key, value) in env::vars() {
  println!("  {}  =>  {}", key, value);
}
```

### 获取命令行参数

```rust
let args: Vec<String> = env::args().collect();
println!("{:?}", args);
```

### 内部常量

- 正在使用的 CPU 的体系结构: `env::consts::ARCH`

## 文件系统

### 打开文件

`open()`函数用于以**只读模式**打开一个已经存在的文件，如果文件不存在，则会抛出一个错误。如果文件不可读，那么也会抛出一个错误。

```rust
let file = fs::File::open("文件路径").expect("文件打开失败");
```

### 创建文件

`create()` 函数用于创建一个文件并返回创建的文件句柄。如果文件已经存在，则会内部调用 open() 打开文件。如果创建失败，比如目录不可写，则会抛出错误

```rust
let file = fs::File::create("文件路径").expect("文件创建失败");
```

### 读取文件

`read_to_string()` 函数用于读取文件中的所有内容并追加到 buf 中，如果读取成功则返回读取的字节数，如果读取失败则抛出错误。

```rust
let file = fs::File::open("文件路径").expect("文件打开失败");
let contents = file.read_to_string(文件路径).expect("读取文件失败");
println!("{}", contents);
```

### 写入文件

`write_all()` 用于向当前流写入 buf 中的内容。如果写入成功则返回写入的字节数，如果写入失败则抛出错误。

```rust
let mut file = fs::File::create("文件路径").expect("文件创建失败");
file.write_all("文本内容".as_bytes()).expect("文件写入失败");
```

### 追加内容到文件末尾

Rust 核心和标准库并没有提供直接的函数用于追加内容到文件的末尾。但提供了函数 `append()` 用于将文件的打开模式设置为 **追加**。

```rust
let mut file = OpenOptions::new().append(true).open("文件路径").expect("文件打开失败");
file.write_all("文本内容".as_bytes()).expect("文件写入失败");
```

### 删除文件

::: tip 提示
删除可能会失败，即使返回结果为 OK，也有可能不会立即就删除。
:::

```rust
fs::remove_file("文件路径").expect("文件删除失败");
```

## 迭代器

::: tip 提示
迭代器是零成本抽象，不会引入额外的运行时开销，实际性能比循环快。
:::

迭代器模式：对一系列项执行某些任务。迭代器负责遍历每个项并确定序列(遍历)何时完成。Rust 的迭代器是懒惰的，除非调用消费迭代器的方法，否则迭代器本身没有任何效果。

迭代方法：

- `iter()`: 在不可变引用上创建迭代器
- `into_iter()`: 创建的迭代器会获得所有权
- `iter_mut()`: 迭代可变的引用

### 使用

```rust
pub fn main() {
  let v1 = vec![1, 2, 3];
  let v1_iter = v1.iter();

  for val in v1_iter {
    println!("{}", val);
  }
}
```

### Iterator Trait

Iterator Trait 定义于标准库，所有迭代器都实现了 Iterator trait

```rust
let v1 = vec![1, 2, 3];
let mut v1_iter = v1.iter();

assert_eq!(v1_iter.next(), Some(&1));
assert_eq!(v1_iter.next(), Some(&2));
assert_eq!(v1_iter.next(), Some(&3));
```

### 消耗迭代器

在标准库中，Iterator trait 有一些带默认实现的方法。其中有一些方法会调用 next 方法。

- 实现 Iterator trait 时必须实现 next 方法的原因之一。
- 调用 next 的方法叫做“消耗型适配器”，因为调用它们会把迭代器消耗尽。

::: tip 提示
使用`sum()`时需要显式声明指定类型
:::

```rust
let v1 = vec![1, 2, 3];
let mut v1_iter = v1.iter();

let total: i32 = v1_iter.sum();
assert_eq!(total, 6);
```

### 迭代器适配器

- `map`迭代器：接收一个闭包，闭包作用于每个元素，产生一个新的迭代器。

  ```rust
  let v1 = vec![1, 2, 3];
  let v2: Vec<_> = v1.iter().map(|item| item + 1).collect();
  assert_eq!(v2, vec![2, 3, 4])
  ```

- `filter`迭代器: 接收一个闭包，闭包在遍历迭代器的每个元素时，返回 bool 类型。

  - 如果闭包返回 true: 当前元素将会包含在 filter 产生的迭代器中。
  - 如果闭包返回 false: 当前元素将不会包含在 filter 产生的迭代器中。

  ```rust
  let v1 = vec![1, 2, 3];
  let v2: Vec<_> = v1.into_iter().filter(|item| item >= &2).collect();
  assert_eq!(v2, vec![2, 3]);
  ```

### 自定义迭代器

- 定义

  ```rust
  struct Counter {
      count: u32,
  }

  impl Counter {
    fn new() -> Counter {
        Counter { count: 0 }
    }
  }

  impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
      if self.count < 5 {
        self.count = self.count + 1;
        Some(self.count)
      } else {
        None
      }
    }
  }
  ```

- 使用

  ```rust
  let mut counter = Counter::new();
  assert_eq!(counter.next(), Some(1));
  assert_eq!(counter.next(), Some(2));
  assert_eq!(counter.next(), Some(3));
  assert_eq!(counter.next(), Some(4));
  assert_eq!(counter.next(), Some(5));
  ```

## 智能指针

智能指针是这样一些数据结构：

- 行为和指针相似
- 有额外的元数据和功能

### 引用和智能指针的其它不同

- 引用: 只借用数据
- 智能指针: 很多时候都拥有它所指向的数据

### 引用计数 智能指针类型

通过记录所有者的数量，使一份数据被多个所有者同时持有，并在没有任何所有者时自动清理数据。

### 智能指针的实现

智能指针通常使用`struct`实现，并且实现了:

- `Deref`和`Drop`两个 trait
  - Deref trait: 允许智能指针 struct 的实例像引用一样使用
  - Drop trait: 允许自定义当智能指针实例走出作用域时的代码

## 多线程

### 基本使用

```rust
use std::thread;

let 线程名 = thread::spawn(move || {

});

// 等待线程结束
线程名.join();
```
