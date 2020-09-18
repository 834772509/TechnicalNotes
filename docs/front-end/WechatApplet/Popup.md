# 展示弹窗

## Toast

Toast 的效果是显示一个提示，可以自定义提示的图片

[wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)

```js
wx.showToast({
  title: "内容",
  duration: 1000,
  icon: "loading",
});
```

## Modal

Modal 的效果是显示一个对话框，默认有“确定”、“取消”两个按钮

[wx.showModal](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)

- 确定、取消 对话框

  ```js
  wx.showModal({
    title: "标题",
    content: "内容",
    // 自定义取消按钮文本
    cancelText: "退出",
    success: function(res) {
      if (res.confirm) {
        console.log("点击了确定按钮");
      }
      if (res.cancel) {
        console.log("点击了取消按钮");
      }
    },
  });
  ```

- 仅显示确定对话框

  ```js
  wx.showModal({
    title: "标题",
    content: "内容",
    showCancel: false,
    success: function(res) {
      if (res.confirm) {
        console.log("点击了确定按钮");
      }
    },
  });
  ```

## Loading

[wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)

::: tip 提示
必须手动调用`wx.hideLoading()`loading 才会消失
:::

显示一个 Loading 对话框，和 Toast 不同的是，Toast 必须设置指定的时间就会消失

```js
wx.showLoading({
  title: "加载中",
});

setTimeout(() => {
  wx.hideLoading();
}, 1000);
```

## showActionSheet

[wx.showActionSheet](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)

showActionSheet 的效果是：从底部显示一个菜单，用户可以选择

```js
wx.showActionSheet({
  itemList: ["菜单1", "菜单2", "菜单3"],
  success: function(res) {
    switch (res.tapIndex) {
      case 0:
        console.log("0");
        break;
      case 1:
        console.log("1");
        break;
      default:
        break;
    }
  },
});
```
