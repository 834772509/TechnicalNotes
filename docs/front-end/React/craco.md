## craco

craco 是一个对 React 脚手架进行自定义配置的社区解决方案

### 安装

npm: `npm install @craco/craco --save`

### 修改启动信息

package.json

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

### 编写配置

新建文件 `项目目录\craco.config.js`

```js
module.exports = {};
```

### 配置别名

\craco.config.js

```js
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
    },
  },
};
```

- 配置 Visual Studio Code

使 Visual Studio Code 支持跳转别名路径的外部方法

\jsconfig.json

``` json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"]
}
```
