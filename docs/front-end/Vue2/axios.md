# Axios

Axios (ajax i/o system) 是目前前端使用非常广泛的网络请求库，包括 Vue 作者也是推荐在 Vue 中使用 axios。  
主要特点包括：在浏览器中发送 XMLHttpRequests 请求、在 node.js 中发送 http 请求、支持 Promise API、拦截请求和响应、转换请求和响应数据等等。

::: tip 提示
测试请求网站：[httpbin.org](http://httpbin.org)
:::

## 安装

`npm install axios --save`

## 封装

为防止第三方请求框架凉凉，需要封装自己的 NetWork 库，以便凉凉时更换框架

### 目录结构

```
├─ src
├── network
│     ├─ request.js
```

### 封装代码

- 创建文件`src\network\request.js`

```js
import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "",
    timeout: 3000,
  });

  //拦截发送请求
  instance.interceptors.request.use(
    (config) => {
      //此处处理发送请求的数据，可以在此处增加 动画、授权登录等功能
      //返回数据
      return config;
    },
    (err) => {
      //此处处理发送请求的数据
      //console.log(err);
    }
  );

  //拦截响应
  instance.interceptors.response.use(
    (res) => {
      //此处处理请求返回的数据
      console.log(res);
      //返回数据
      return res;
    },
    (err) => {
      //此处处理响应请求失败
      //config.log(err)
    }
  );

  //发送网络请求
  return instance(config);
}
```

### 使用

```js
import { request } from "@/network/request";

request({
  // 指定请求方式（默认为get）
  url: "指定的URL",
  // 指定请求get方式的参数拼接(?)
  method: "get",

  // 指定GET请求参数
  params: {
    参数: 值,
  },

  // 指定POST请求参数
  data: {
    参数: 值,
  },
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## 请求数据

::: tip 提示

- params 是添加到 url 的请求字符串中的，用于 get 请求
- data 是添加到请求体（body）中的， 用于 post 请求
  :::

### 创建实例方式

```js
const axios1 = axios.create({
  baseURL: 'URL链接',
  timeout: 超时时间（毫秒）
})
```

### GET

```js
axios({
  // 指定请求方式（默认为get）
  url: "指定的URL",
  // 指定请求get方式的参数拼接(?)
  method: "get",
  // 指定参数
  params: {
    参数: 值,
  },
}).then((res) => {
  console.log(res);
});
```

### POST

```js
axios({
  // 指定请求方式（默认为get）
  url: "指定的URL",
  // 指定请求get方式的参数拼接(?)
  method: "post",
  // 指定参数
  data: {
    参数: 值,
  },
}).then((res) => {
  console.log(res);
});
```

### 并发请求

```js
const request1 = axios({
  url: "",
  params: {},
});

const request2 = axios({
  url: "",
  method: "POST",
  data: {},
});

axios
  .all([request1, request2])
  .then(([res1, res2]) => {
    console.log(res1);
    console.log(res2);
  })
  .catch((err) => {
    console.log(err);
  });
```

## 全局配置

### 设置全局基础 URL

```js
axios.defaults.baseURL = "";
```

### 超时时间（毫秒）

```js
axios.defaults.timeot = 5000;
```

## 拦截器

### 拦截发送请求

拦截的是发送的请求（发送前的相关配置信息）

使用案例：

- 处理 config 中的一些不符合服务器的信息
- 发送网络请求时，显示请求动画
- 某些网络请求（比如登陆），必须携带一些特殊的信息

```js
axios.interceptors.request.use(
  (config) => {
    //此处处理发送请求的数据
    //返回数据
    return config;
  },
  (err) => {
    //此处处理发送请求失败
    //console.log(err);
  }
);
```

### 拦截响应请求

```js
axios.interceptors.response.use(
  (res) => {
    //此处处理请求返回的数据
    console.log(res);
    //返回数据
    return res;
  },
  (err) => {
    //此处处理响应请求失败
    //config.log(err)
  }
);
```
