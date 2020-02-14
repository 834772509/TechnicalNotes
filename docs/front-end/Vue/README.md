# Vue笔记


## 创建项目

1. vue ui 可视化创建项目
2. vue create 命令行项目目录

    Router:路由
    Unit Tests:单元测试
    Linter / Formatter:Eslint代码规范检测
    选择Runtime-only（性能更好，所使用的代码量更少）
## 启动项目
启动项目：```npm run serve  ```   
编译项目：```npm run build  ```

### 关闭Eslint代码规范检测（神TM的各种奇葩规范）：
\config\index.js\
```useEslint: false```

    
    
    
    
    
    
    
    
    
    
    
## 打包项目
命令：```npm run build  ```
### 解决build后打开空白问题
新建vue.config.js，内容：
``` js
module.exports = {
publicPath: './'
}
```