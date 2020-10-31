# Http

## 基本概念

### Web 服务器

- 什么是 Web 服务器?
  当应用程序（客户端）需要某一个资源时，可以向一个台服务器，通过 Http 请求获取到这个资源;提供资源的这个服务器，就是一个 Web 服务器;

## 创建服务器

::: tip 提示
端口可以不传, 系统会默认分配端, 后续项目中我们会写入到环境变量中；
:::

::: tip 提示
0.0.0.0：

- 监听 IPV4 上所有的地址，再根据端口找到不同的应用程序；
- 比如我们监听 0.0.0.0 时，在同一个网段下的主机中，通过 ip 地址是可以访问的；

:::

```JavaScript
// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log("服务器中的处理函数调用");
  res.end("Hello Server");
});

// 启动服务器，并且指定服务器端口号和主机
server.listen(8000, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
```

### 热部署

### 安装 nodemon

`npm install nodemon -g`

### 启动项目

`nodemon index.js`

## request 对象

### URL 属性

```JavaScript
const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 获取当前URL、参数
  const { pathname, query } = url.parse(req.url);

  if (pathname === "/URL") {
    // 解析URL中的参数
    const { 参数名, 参数名 } = qs.parse(query);
    console.log(参数名, 参数名);
    res.end("欢迎回来");
  }
});
```

### method 属性

```JavaScript
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  console.log(req.method);

  if (pathname === "/login") {
    if (req.method === "POST") {
      // 设置POST参数编码
      req.setEncoding("utf-8");
      // 获取POST参数
      req.on("data", (data) => {
        console.log(JSON.parse(data));
      });
    }
  }
});
```

### headers 属性

在 request 对象的 header 中也包含很多有用的信息，客户端会默认传递过来一些信息：

- content-type 是这次请求携带的数据的类型：

  - application/json 表示是一个 json 类型；
  - text/plain 表示是文本类型；
  - application/xml 表示是 xml 类型；
  - multipart/form-data 表示是上传文件；

- content-length：文件的大小和长度
- keep-alive：
  - http 是基于 TCP 协议的，但是通常在进行一次请求和响应结束后会立刻中断；
  - 在 http1.0 中，如果想要继续保持连接：
    - 浏览器需要在请求头中添加 connection: keep-alive；
    - 服务器需要在响应头中添加 connection:keey-alive；
    - 当客户端再次放请求时，就会使用同一个连接，直接一方中断连接；
  - 在 http1.1 中，所有连接默认是 connection: keep-alive 的；
    - 不同的 Web 服务器会有不同的保持 keep-alive 的时间；
    - Node 中默认是 5s 中断；
- accept-encoding：告知服务器，客户端支持的文件压缩格式，比如 js 文件可以使用 gzip 编码，对应 .gz 文件；
- accept：告知服务器，客户端可接受文件的格式类型；
- user-agent：客户端相关的信息；

```JavaScript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end("欢迎回来");
});
```

## response 对象

### 响应结果

```JavaScript
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("响应结果1");
  res.end("Hello world");
});
```

### 设置状态码

- 直接给属性赋值

  ```JavaScript
  const server = http.createServer((req, res) => {
    res.statusCode = 400;
  });
  ```

- 和 head 一起配置

  ```JavaScript
  const server = http.createServer((req, res) => {
    res.writeHead(400);
  });
  ```

### 响应 header

- setHeader

  ```JavaScript
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf8");
    res.end("<h2>Hello Server</h2>");
  });
  ```

- writeHead

  ```JavaScript
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
    res.end("<h2>Hello Server</h2>");
  });
  ```
