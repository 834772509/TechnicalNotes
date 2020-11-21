# dotenv

dotenv 是 .env 文件解析模块

## 安装

`npm install dotenv`

### env 文件格式

```
配置名=值
```

## 使用

```JavaScript
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.配置名);
```

## 封装

- \app\config.js

  ```JavaScript
  const dotenv = require("dotenv");

  dotenv.config();

  module.exports = { 配置名 } = process.env;
  ```

- 使用

  ```JavaScript
  const config = require("./app/config");

  console.log(config.配置名);
  ```
