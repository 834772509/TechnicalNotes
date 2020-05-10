# Electron 笔记

[Electron API参考文档](http://www.electronjs.org/docs/api)

## 创建项目

1. 创建项目：```vue init simulatedgreg/electron-vue 项目名称```
2. 进入项目目录后```npm install```（优先使用```cnpm install```）
3. 启动项目：```npm run dev```

## 生命周期

* ready : 当Electron完成初始化时触发
* activate : 首次激活
* window-all-closed : 所有窗口被关闭
* before-quit : 在应用程序开始关闭窗口之前触发
* will-quit : 当所有窗口都已关闭并且应用程序将退出时发出
* quit : 在应用程序退出时发出

## 进程API

::: tip 提示
如出现```process is not defined```请加上```nodeIntegration: true```
:::

``` js
data() {
  return {
    //electron版本
    electron: process.versions.electron,
    //当前路由名称
    name: this.$route.name,
    //Node版本
    node: process.versions.node,
    //当前URL路径
    path: this.$route.path,
    //当前系统
    platform: require('os').platform(),
    //Vue.js版本
    vue: require('vue/package.json').version,
    //系统位数
    systemtype: process.arch,
    //CPU占用
    CPUinfo: process.getCPUUsage().percentCPUUsage,
    //内存占用
    meminfo: process.getSystemMemoryInfo().swapTotal / 1024 / 1024,
  }
}
```

## 文件API

### 拖拽文件

``` vue
<template>
    <div @drop="drop($event)" @dragover="dragover($event)">
      拖放文件测试
    </div>
</template>

<script>
export default {
  methods: {
    drop($event){
      event.preventDefault();
      event.stopPropagation();
      for (const f of event.dataTransfer.files) {
        console.log('拖拽的文件：' + f.path)
      }
    },
    dragover($event){
      event.preventDefault();
      event.stopPropagation();
    }
  },
}
</script>
```

## 对话框

### 打开文件对话框

``` JavaScript
const { dialog } = require('electron').remote

let filePath =  dialog.showOpenDialog({
  title: "打开文件",
  filters: [
    {name: '类型名称', extensions: ['exe']},
    {name: '所有文件', extensions: ['*']}
  ]
})
console.log(filePath)
```

### 保存文件对话框

``` JavaScript
const { dialog } = require('electron').remote

let filePath =  dialog.showSaveDialog({
  title: "保存文件",
  filters: [
    {name: '类型名称', extensions: ['exe']},
    {name: '所有文件', extensions: ['*']}
  ]
})
console.log(filePath)
```

### 选择对话框

``` JavaScript
const { dialog } = require('electron').remote

let message = dialog.showMessageBox({
  type: "warning",
  title: "标题",
  message: "内容",
  buttons: ["确定","取消"]
})
console.log(message);
```

### 错误对话框

``` JavaScript
dialog.showErrorBox("标题", "内容")
```

## 热键注册

### 注册

``` JavaScript
const { remote } = require('electron')

remote.globalShortcut.register('CommandOrControl+Y', () => {
  console.log("按加了 Ctrl + Y")
})
```

### 取消注册

``` JavaScript
remote.globalShortcut.unregisterAll()
```
