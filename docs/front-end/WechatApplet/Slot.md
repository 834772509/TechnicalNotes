# 插槽

## 什么是插槽

- 插槽是为了让我们封装的组件更加具有扩展性。
- 让使用者可以决定组件内部的一些内容到底展示什么。

## 单个插槽

- 定义

  \组件名.wxml

  ```xml
  <slot></slot>
  ```

- 使用

  \页面名.wxml

  ```xml
  <组件名>
    <view>插槽内容</view>
  </组件名>
  ```

## 多个插槽

- 定义

  \组件名.js

  ```js
  Component({
    options: {
      multipleSlots: true,
    },
  });
  ```

  \组件名.wxml

  ```xml
  <slot name="插槽名"></slot>
  <slot name="插槽名"></slot>
  ```

- 使用

  \页面名.wxml

  ```xml
  <组件名>
    <view slot="插槽名">插槽内容</view>
    <view slot="插槽名">插槽内容</view>
  </组件名>
  ```
