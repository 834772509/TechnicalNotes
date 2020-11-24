# Koa

koa 是 express 同一个团队开发的一个新的 Web 框架：

- 目前团队的核心开发者 TJ 的主要精力也在维护 Koa，express 已经交给团队维护了；
- Koa 旨在为 Web 应用程序和 API 提供更小、更丰富和更强大的能力；
- 相对于 express 具有更强的异步处理能力（后续我们再对比）；
- Koa 的核心代码只有 1600+行，是一个更加轻量级的框架，我们可以根据需要安装和使用中间件；

## 中间件

koa 通过创建的 app 对象，注册中间件只能通过 use 方法。同时，Koa 并没有提供 methods 的方式来注册中间件；也没有提供 path 中间件来匹配路径；

```JavaScript
app.use((ctx, next) => {
  if (ctx.request.url === "/URL") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "返回内容";
    }
  }
});
```

## 路由

koa 官方并没有给我们提供路由的库，我们可以选择第三方库：koa-router

### 安装依赖

`npm install koa-router`

### 使用

- index.js

  ```JavaScript
  const Koa = require("koa");
  const Router = require("koa-router");

  const userRouter = require("./router/user");

  const app = new Koa();

  app.use(userRouter.routes());

  app.listen(8000, () => {
    console.log("Koa路由服务器启动成功");
  });
  ```

- \router\路由名.js

  ```JavaScript
  const Router = require("koa-router");

  const router = new Router({ prefix: "/根URL" });

  router.get("/子URL", (ctx, next) => {
    ctx.response.body = "get 请求";
  });

  router.post("/子URL", (ctx, next) => {
    ctx.response.body = "post 请求";
  });

  module.exports = router;
  ```

- 访问`127.0.0.1:8000/根URL/子URL`

## 服务器参数解析

### params 参数

请求地址：http://localhost:8000/URL?参数名=值&参数名=值

```JavaScript
const Koa = require("koa");

const Router = require("koa-router");
const userRouter = require("./router/user");

userRouter.get("/URL", (ctx, next) => {
  console.log(ctx.request.params);
});

const app = new Koa();

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log("参数解析服务器启动成功");
});
```

### query 参数

请求地址：http://localhost:8000/URL/参数

```JavaScript
const Koa = require("koa");

const Router = require("koa-router");
const userRouter = require("./router/user");

userRouter.get("/URL:参数名", (ctx, next) => {
  console.log(ctx.request.query);
});

const app = new Koa();

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log("参数解析服务器启动成功");
});
```

### json-urlencoded

请求地址：http://localhost:8000/URL ，body 是 json(raw) 格式

- 安装 koa-bodyparser

  `npm install koa-bodyparser`

- 使用

  ```JavaScript
  const Koa = require("koa");
  const bodyParser = require("koa-bodyparser");

  const app = new Koa();

  app.use(bodyParser());

  app.use((ctx, next) => {
    console.log(ctx.request.body);
    // 返回数据
    ctx.response.body = "Hello World";
  });

  app.listen(8000, () => {
    console.log("参数解析-json-urlencoded服务器启动成功");
  });
  ```

### form-data

- 安装 koa-multer

  `npm install koa-multer`

- 使用

  ```JavaScript
  const Koa = require("koa");
  const bodyParser = require("koa-bodyparser");
  const multer = require("koa-multer");

  const app = new Koa();
  const upload = multer();

  app.use(bodyParser());

  app.use(upload.any());

  app.use((ctx, next) => {
    console.log(ctx.req.body);
    ctx.response.body = "Hello World";
  });

  app.listen(8000, () => {
    console.log("参数解析-form-data服务器启动成功");
  });
  ```

## 文件上传

请求地址：http://localhost:8000/根URL/子URL ，body 中 form-data 包含文件

```JavaScript
const path = require("path");

const Koa = require("koa");
const Router = require("koa-router");
const multer = require("koa-multer");

const app = new Koa();
const uploadRouter = new Router({ prefix: "/根URL" });

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./上传路径/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

uploadRouter.post("/子URL", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "文件上传成功";
});

app.use(uploadRouter.routes());

app.listen(8000, () => {
  console.log("文件上传服务器启动成功");
});
```

## 数据的响应

### 设置状态码

```JavaScript
const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.status = 200;
});

app.listen(8000, () => {
  console.log("Koa服务器启动成功");
});
```

### 返回内容

```JavaScript
const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // 返回对象
  ctx.body = {
    name: "coderwhy",
    age: 18,
    avatar_url: "http://aaa.png",
  };

  // 返回数组
  ctx.body = ["aaa", "bbb", "ccc"];
});

app.listen(8000, () => {
  console.log("Koa服务器启动成功");
});
```

## 静态服务器

koa 并没有内置部署相关的功能，所以我们需要使用第三方库：koa-static 。部署的过程类似于 express。

- 安装 koa-static

  `npm install koa-static`

- 使用

  ```JavaScript
  const Koa = require("koa");
  const staticAssets = require("koa-static");

  const app = new Koa();

  app.use(staticAssets("./静态资源目录"));

  app.listen(8000, () => {
    console.log("koa静态服务器启动成功");
  });
  ```

## 错误处理

```JavaScript
const Koa = require("koa");

const app = new Koa();

const USER_ISLOGIN = "USER_ISLOGIN";

app.use((ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    ctx.app.emit("error", new Error(USER_ISLOGIN), ctx);
  }
});

app.on("error", (err, ctx) => {
  let status = 400;
  let message = "";

  switch (err.message) {
    case USER_ISLOGIN:
      status = 401;
      message = "您还没有登录";
      break;
    default:
      message = "没有找到";
  }
  ctx.status = status;
  ctx.body = message;
});

app.listen(8000, () => {
  console.log("Koa错误处理服务器启动成功");
});
```

## 和 express 对比

从架构设计上来说：

- express 是完整和强大的，其中帮助我们内置了非常多好用的功能；
- koa 是简洁和自由的，它只包含最核心的功能，并不会对我们使用其他中间件进行任何的限制。
  - 甚至是在 app 中连最基本的 get、post 都没有给我们提供；
  - 我们需要通过自己或者路由来判断请求方式或者其他功能；

因为 express 和 koa 框架他们的核心其实都是中间件：

- 但是他们的中间件事实上，它们的中间件的执行机制是不同的，特别是针对某个中间件中包含异步操作时；

## 登录凭证

web 开发中，我们使用最多的协议是 http，但是 http 是一个无状态的协议（http 的每次请求都是一个单独的请求，与之前的请求没有关系）。

### 凭证方式

- Token 令牌；
- cookie + session （已淘汰）；

### Cookie

Cookie（复数形态 Cookies），又称为“小甜饼”。类型为“小型文本文件，某些网站为了辨别用户身份而存储
在用户本地终端（Client Side）上的数据。

- 浏览器会在特定的情况下携带上 cookie 来发送请求，我们可以通过 cookie 来获取一些信息；
- Cookie 总是保存在客户端中，按在客户端中的存储位置，Cookie 可以分为内存 Cookie 和硬盘 Cookie。
  1. 内存 Cookie 由浏览器维护，保存在内存中，浏览器关闭时 Cookie 就会消失，其存在时间是短暂的；
  2. 硬盘 Cookie 保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理；
- 如果判断一个 cookie 是内存 cookie 还是硬盘 cookie 呢？
  - 有设置过期时间，并且过期时间不为 0 或者负数的 cookie，是硬盘 cookie，需要手动或者到期时，才会删除；
  - 没有设置过期时间，默认情况下 cookie 是内存 cookie，在关闭浏览器时会自动删除；

```JavaScript
// 设置 cookie
ctx.cookies.set("cookie名", 值, {
  maxAge: 50 * 1000,
});

// 读取 cookie
const value = ctx.cookies.get("cookie名");
```

### Session

安装 koa-session: `npm install koa-session`

- 创建 Session 配置

  ```JavaScript
  const session = Session(
    {
      key: "Session名",
      maxAge: 10 * 1000,
      // 是否使用加密签名
      signed: true,
    },
    app
  );
  app.keys = ["加密键值"];
  app.use(session);
  ```

- 设置 Session

  ```JavaScript
  testRouter.get("/test", (ctx, next) => {
    const id = 110;
    const name = "coderwhy";

    ctx.session.user = { id, name };

    ctx.body = "test";
  });
  ```

- 读取 Session

  ```JavaScript
  testRouter.get("/demo", (ctx, next) => {
    console.log(ctx.session.user);
    ctx.body = "test";
  });
  ```

```

```

## Token

### Token 介绍

token 可以翻译为令牌；在验证了用户账号和密码正确的情况，给用户颁发一个令牌；这个令牌作为后续用户访问一些接口或者资源的凭证；可以根据这个凭证来判断用户是否有权限来访问；

### 安装 JsonWebToken 库

`npm install jsonwebtoken`

### 对称加密

- 生成 Token

  ```JavaScript
  const jwt = require("jsonwebtoken");

  const SERCET_KEY = "密钥";

  testRouter.post("/createToken", (ctx, next) => {
    const user = { id: 110, name: "why" };
    const token = jwt.sign(user, SERCET_KEY, { expiresIn: 10 });
    ctx.body = token;
  });
  ```

- 验证 Token

  ```JavaScript
  testRouter.get("/verifyToken", (ctx, next) => {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace("Bearer ", "");

    try {
      const result = jwt.verify(token, SERCET_KEY);
      ctx.body = result;
    } catch (error) {
      ctx.body = "token 是无效的";
    }
  });
  ```

### 生成私钥和公钥

以管理员身份运行`git-bash.exe`，输入`openssl`进入 OpenSSL 命令行

1. 生成私钥: `genrsa -out private.key 1024`
2. 生成公钥：`rsa -in private.key -pubout -out public.key`

### 非对称加密

- 生成 Token

  ```JavaScript
  const fs = require("fs");
  const jwt = require("jsonwebtoken");

  const PRIVATE_KEY = fs.readFileSync("./keys/private.key");

  testRouter.post("/createToken", (ctx, next) => {
    const user = { id: 110, name: "why" };

    const token = jwt.sign(user, PRIVATE_KEY, {
      expiresIn: 10,
      algorithm: "RS256",
    });
    ctx.body = token;
  });
  ```

- 验证 Token

  ```JavaScript
  const fs = require("fs");
  const jwt = require("jsonwebtoken");

  const PUBLIC_KEY = fs.readFileSync("./keys/public.key");

  testRouter.get("/verifyToken", (ctx, next) => {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace("Bearer ", "");
    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithm: ["RS256"],
      });
      ctx.body = result;
    } catch (error) {
      ctx.body = "token 是无效的";
    }
  });
  ```
