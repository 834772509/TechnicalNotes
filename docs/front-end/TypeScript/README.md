# TypeScript

TypeScript 是拥有类型的**JavaScript 超集**，它可以编译成**普通、干净、完整**的 JavaScript 代码。

- 可以将 TypeScript 理解成**加强版的 JavaScript**。
- JavaScript 所拥有的特性，TypeScript 全部都是支持的，并且它紧随 ECMAScript 的标准，所以 ES6、ES7、ES8 等新语法标准，它都是支持的；
- 并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型（Enum）、元组类型（Tuple）等；
- TypeScript 在实现新特性的同时，总是保持和 ES 标准的同步甚至是领先；
- 并且 TypeScript 最终会被编译成 JavaScript 代码，所以并不需要担心它的兼容性问题，在编译时也不需要借助于 Babel 这样的工具；
- 所以，可以把 TypeScript 理解成更加强大的 JavaScript，不仅让 JavaScript 更加安全，而且给它带来了诸多好用的好用特性；

## 基本概念

### JavaScript 是一门优秀的编程语言吗？

- 每个人可能观点并不完全一致，但是从很多角度来看，JavaScript 是一门**非常优秀的编程语言**；
- 而且，可以说在很长一段时间内**这个语言不会被代替**，并且会在**更多的领域**被大家广泛使用；

### 著名的 Atwood 定律

- Stack Overflow 的创立者之一的 Jeff Atwood 在 2007 年提出了著名的 Atwood 定律。
- any application that can be written in JavaScript, will eventually be written in JavaScript.
- 任何可以使用 JavaScript 来实现的应用都最终都会使用 JavaScript 实现

### JavaScript 的痛点

- 比如 ES5 以及之前的使用的 var 关键字关于作用域的问题；
- 比如最初 JavaScript 设计的数组类型并不是连续的内存空间；
- 比如直到今天 JavaScript 也没有加入类型检测这一机制；

### 类型带来的问题

首先你需要知道，编程开发中我们有一个共识：**错误出现的越早越好**

- 能在**写代码的时候**发现错误，就不要在**代码编译时**再发现（IDE 的优势就是在代码编写过程中帮助我们发现错误）。
- 能在**代码编译期间**发现错误，就不要在**代码运行期间**再发现（类型检测就可以很好的帮助我们做到这一点）。
- 能在开发阶段发现错误，就不要在测试期间发现错误，能在测试期间发现错误，就不要在上线后发现错误。

现在我们想探究的就是如何在 **代码编译期间** 发现代码的错误：

- JavaScript 可以做到吗？不可以，来看下面这段经常可能出现的代码问题。

```js
function foo(message) {
  console.log(message.length);
}

foo("Hello World");

foo();

// 永远执行不到
console.log("===================");
```

### TypeScript 的特点

**始于 JavaScript，归于 JavaScript**

- TypeScript 从今天数以百万计的 JavaScript 开发者所熟悉的语法和语义开始。使用现有的 JavaScript 代码，包括流行的 JavaScript 库，
  并从 JavaScript 代码中调用 TypeScript 代码；
- TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的 JavaScript 引擎中；

**TypeScript 是一个强大的工具，用于构建大型项目**

- 类型允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构；
- 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有 JavaScript 库的行为；

**拥有先进的 JavaScript**

- TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件；
- 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的 ECMAScript3（或更新版本）的 JavaScript；

## 环境搭建

`npm install typescript -g`

### 使用 ts-node

1. `npm install ts-node -g`
2. `npm install tslib @types/node -g`

运行 TypeScript 代码: `ts-node ts文件路径`

### Webpack

1. 安装依赖：

   - `npm install webpack webpack-cli -D`
   - `npm install webpack-dev-server -D`
   - `npm install html-webpack-plugin -D`
   - `npm install ts-loader typescript -D`

2. Webpack 配置文件

   ```js
   const path = require("path");
   const HtmlWebpackPlugin = require("html-webpack-plugin");

   module.exports = {
     mode: "development",
     entry: "./src/index.ts",
     output: {
       path: path.resolve(__dirname, "./dist"),
       filename: "bundle.js",
     },
     resolve: {
       extensions: [".ts", ".js"],
     },
     module: {
       rules: [
         {
           test: /\.ts$/,
           loader: "ts-loader",
         },
       ],
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: "./index.html",
       }),
     ],
   };
   ```

3. package.json 运行配置

   ```json
   {
     "scripts": {
       "build": "webpack",
       "serve": "webpack serve"
     }
   }
   ```

4. 初始化 TypeScript 配置文件: `tsc --init`

## 基本语法

### 定义变量

```ts
// 类型推导
let 变量名 = 值;
// 类型注解
let 变量名: 数据类型 = 值;
```

### 定义常量

```ts
// 类型推导
const 变量名 = 值;
// 类型注解
const 变量名: 数据类型 = 值;
```
