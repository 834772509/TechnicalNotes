# Trait

trait 用于定义与其它类型共享的功能，类似于其它语言中的接口。

1. 可以通过 trait 以抽象的方式定义共享的行为。
2. 可以使用 trait bounds 指定泛型是任何拥有特定行为的类型。

## 定义

```rust
// 定义结构体
pub struct 结构体名 {
    pub 属性名: 数据类型,
}

// 定义 Trait
pub trait Trait名 {
    fn 方法名(&self);
    fn 方法名(&self) -> 返回值类型;
}
```

## 实现

### 普通实现

```rust
impl Trait名 for 结构体名 {
    fn 方法名(&self) {

    }
    fn 方法名(&self) -> 返回值类型 {

    }
}
```

## 默认实现

有时为 trait 中的某些或全部方法提供默认的行为，而不是在每个类型的每个实现中都定义自己的行为是很有用的。这样当为某个特定类型实现 trait 时，可以选择保留或重载每个方法的默认行为。

```rust
trait Trait名 {
    fn 方法名(&self) {

    }
    fn 方法名(&self) -> 返回值类型 {

    }
}
```

```rust
impl Trait名 for 结构体名 {}
```

## 使用

```rust
let mut 实例名 = 结构体名 {
    属性名: 值
};
实例名.方法名();
```

## Trait Bound 语法

Trait Bound 语法 可以用来指定多个 Trait

### 写法 1

```rust
fn 函数名<T: trait名 + trait名>(item: &T) {
    println!("{}", item.方法名());
}
```

### 写法 2

```rust
fn 函数名<T>(item: &T) where T: trait名 + trait名 {
    println!("{}", item.方法名());
}
```
