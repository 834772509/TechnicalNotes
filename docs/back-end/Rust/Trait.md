# Trait

trait 用于定义与其它类型共享的功能，类似于其它语言中的接口。

1. 可以通过 trait 以抽象的方式定义共享的行为。
2. 可以使用 trait bounds 指定泛型是任何拥有特定行为的类型。

## 定义

```rust
pub trait Trait名 {
    fn 方法名(&self) -> 返回值类型;
    fn 方法名(&self) -> u32;
}
```

## 实现

```rust
impl Trait名 for Student {
    fn get_name(&self) -> &String {
        return &self.name;
    }
    fn get_age(&self) -> u32 {
        return *&self.age;
    }
}
```
