# Express 框架

## 基本概念

Express 是一个路由和中间件的 Web 框架，它本身的功能非常少：Express 应用程序本质上是一系列中间件函数的调用；

### 中间件

- 中间件的本质是传递给 express 的一个回调函数；
- 这个回调函数接受三个参数：
  - 请求对象（request 对象）；
  - 响应对象（response 对象）；
  - next 函数（在 express 中定义的用于执行下一个中间件的函数）；

### 中间件中可以执行的任务

- 执行任何代码；
- 更改请求（request）和响应（response）对象；
- 结束请求-响应周期（返回数据）；
- 调用栈中的下一个中间件；
  如果当前中间件功能没有结束请求-响应周期，则必须调用 next()将控制权传递给下一个中间件功能，否则，请求
  将被挂起。

## 脚手架

### 安装

`npm install express-generator -g`

### 创建项目

`express 项目名`

### 安装依赖

`npm install`

### 启动项目

`npm run start` 或 `node bin/www`

## 中间件

::: tip 提示
当注册多个中间件时，默认使用第一个中间件，如需要使用多个中间件，需要调用`next();`函数。
:::

### 普通中间件

```JavaScript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("注册了第1个普通的中间件");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第2个普通的中间件");
    res.end();

});

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
});
```

### 路径中间件

```JavaScript
const express = require("express");

const app = express();

app.use("/home", (req, res, next) => {
  console.log("注册路径中间件 01");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("注册路径中间件 02");
  res.end();
});

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
});
```

### 路径和方法中间件

```JavaScript
const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  console.log("路径和方法匹配的中间件 01");
  res.end();
});

app.listen(8000, () => {
  console.log("路径和方法匹配的中间件服务器启动成功");
});
```

### 连续注册中间件

```JavaScript
const express = require("express");

const app = express();

app.get(
  "/home",
  (req, res, next) => {
    console.log("路径和方法中间件 01");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 02");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 03");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 04");
    res.end();
  }
);

app.listen(8000, () => {
  console.log("路径和方法匹配的中间件服务器启动成功");
});
```

### 中间件应用

- 解析 JSON

  ```JavaScript
  app.use(express.json());
  app.use(express.urlencoded(({extended: true})));

  app.post("/login", (req, res, next) => {
    console.log(req.body);
    res.end();
  });
  ```
