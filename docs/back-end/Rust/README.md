# Rust 基础

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

## 创建项目

- 创建项目: `cargo new 项目名`
- 语法检查: `cargo check`
- 编译项目: `cargo build`
