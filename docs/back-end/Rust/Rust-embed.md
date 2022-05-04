# 内置资源

## 增加依赖

Cargo.toml

```ini
[dependencies]
rust-embed = "6.3.0"
```

## 放置静态文件

- 创建目录`assets-x64`，并将内置资源放置于此
- 创建目录`assets-x86`，并将内置资源放置于此
- 创建目录`assets-ARM64`，并将内置资源放置于此

### 编写代码

main.rs

```rust
use rust_embed::RustEmbed;

// 配置内置资源
// x64平台
#[cfg(target_arch = "x86_64")]
#[derive(RustEmbed)]
#[folder = "./assets-x64"]
pub struct Asset;

// x86平台
#[cfg(target_arch = "x86")]
#[derive(RustEmbed)]
#[folder = "./assets-x86"]
pub struct Asset;

// ARM平台
#[cfg(target_arch = "arm")]
#[derive(RustEmbed)]
#[folder = "./assets-ARM64"]
pub struct Asset;

fn main() {
  for file in Asset::iter() {
    println!("{}", file.as_ref());
  }
}

/// 写到文件
pub fn writeEmbedFile(filePath: &str, outFilePath: &PathBuf) -> Result<(), Box<dyn Error>> {
  let file = Asset::get(filePath).unwrap();
  File::create(outFilePath).unwrap().write_all(&file.data)?;
  Ok(())
}
```
