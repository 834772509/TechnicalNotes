# Clap

## 安装依赖

Cargo.toml

```ini
clap = "*"
```

## 使用

```rust
fn main() {
  let matches = App::new("软件名")
    .setting(AppSettings::ArgRequiredElseHelp)
    .version(crate_version!())
    .help_message("打印帮助信息")
    .version_message("打印版本信息")
    .subcommand(SubCommand::with_name("help")
      .about("打印此信息或子命令的帮助"))
    .subcommand(SubCommand::with_name("命令")
      .about("命令描述")
      .arg(Arg::with_name("参数名")
        .help("参数说明")
        // 是否为必选参数
        .required(true)
        .index(1))
      .arg(Arg::with_name("选项")
        .long("选项")
        .short("短选项")
        .help("选项说明")))
    .get_matches();

  if let Some(matches) = matches.subcommand_matches("命令") {
    let input = matches.value_of("参数名").unwrap();
    println("参数: {}", input);
    println("选项: {}", matches.is_present("选项"));
  }
}
```
