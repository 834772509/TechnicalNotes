# 登陆小程序

\App.js

```js
const TOKEN = "token";

App({
  globalData: {
    token: "",
  },
  onLaunch: function () {
    // 判断缓存中是否有token
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length !== 0) {
      // 有 token，验证token是否过期
      this.check_token(token);
    } else {
      // 没有token，进行登陆
      this.login();
    }
  },

  // 验证token是否过期
  check_token(token) {
    console.log("验证token");

    wx.request({
      url: "url",
      method: "POST",
      header: {
        token: token,
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log("token有效");

          this.globalData.token = token;
        } else {
          this.login();
        }
        console.log(res);
      },
    });
  },

  // 登陆操作
  login() {
    console.log("登陆操作");
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        // 获取code
        const code = res.code;
        // 登陆操作
        // 将code发送给服务器
        wx.request({
          url: "url",
          method: "post",
          data: {
            code: code,
          },
          success: (res) => {
            // 获取 token
            const token = res.data.token;
            // 保存 token 至全局变量
            this.globalData.token = token;

            // 进行本地存储
            wx.setStorageSync(TOKEN, token);
          },
        });
      },
    });
  },
});
```
