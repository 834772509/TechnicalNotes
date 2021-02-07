# 内置资源

- Cargo.toml

  ```ini
  [dependencies]
  rust-embed = "~5.9.0"
  ```

- 创建目录`assets`，并将内置资源放置于此
- main.rs

  ```rust
  use crate::{Asset};

  #[derive(RustEmbed)]
  #[folder = "./assets"]
  pub struct Asset;

  fn main() {
    for file in Asset::iter() {
      println!("{}", file.as_ref());
    }
  }

  /// 写到文件
  pub fn writeEmbedFile(filePath: &str, outFilePath: &PathBuf) -> Result<(), Box<dyn Error>> {
    let file = Asset::get(filePath).unwrap();
    File::create(outFilePath).unwrap().write(&file)?;
    Ok(())
  }
  ```
