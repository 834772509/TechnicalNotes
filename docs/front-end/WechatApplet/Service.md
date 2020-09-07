# 网络请求

## 配置服务器域名

每个微信小程序需要事先设置通讯域名，小程序只可以跟指定的域名进行网络通信。包括普通 HTTPS 请求（wx.request）、上传文件（wx.uploadFile）、下载文件（wx.downloadFile) 和 WebSocket 通信（wx.connectSocket）。

从基础库 2.4.0 开始，网络接口允许与局域网 IP 通信，但要注意 不允许与本机 IP 通信。

## 基本使用

### GET 请求

```js
wx.request({
  url: "URL",
  // 携带参数
  data: {
    参数名: 值,
  },
  success: function (res) {
    console.log(res);
  },
  fail: function (err) {
    console.log(err);
  },
});
```

### POST 请求

```js
wx.request({
  url: "URL",
  method: "POST",
  // 携带参数
  data: {
    参数名: 值,
  },
  success: function (res) {
    console.log(res);
  },
  fail: function (err) {
    console.log(err);
  },
});
```

## 请求函数封装

### 封装

创建 \service\network.js

```js
export default function request(options) {
  if (!options) return null;
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || "GET",
      data: options.data || {},
      success: resolve,
      fail: reject,
    });
  });
}
```

### 使用

```js
import request from "../../service/network";

request({
  url: "URL",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
