# TypeScript

[TypeScript](https://www.typescriptlang.org/) 是拥有类型的**JavaScript 超集**，它可以编译成**普通、干净、完整**的 JavaScript 代码。

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

// 未传递参数，执行过程报错
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

::: tip 提示
默认情况下，推荐在可以推导出对应的标识符的类型使用，不加数据类型。
:::

```ts
// 类型推导
let 变量名 = 值;
// 类型注解
let 变量名: 数据类型 = 值;
```

### 定义常量

::: tip 提示
默认情况下，推荐在可以推导出对应的标识符的类型使用，不加数据类型。
:::

```ts
// 类型推导
const 变量名 = 值;
// 类型注解
const 变量名: 数据类型 = 值;
```

## 数据类型

### 基本类型

- number 类型

  数字类型是开发中经常使用的类型，不区分整数类型（int）和浮点型（double），统一为 number 类型。;

  - 十进制: `let num: number = 100;`
  - 二进制: `let num: number = 0b111;`
  - 八进制: `let num: number = 0o456;`
  - 十六进制:`let num: number = 0xabcd;`

- boolean 类型

  boolean 类型只有两个取值：true 和 false

  - `let 布尔名: boolean = true`

- string 类型

  string 类型是字符串类型，可以使用单引号或者双引号表示：

  - `let 字符串名: string = "Hello World`

- array 类型

  - 泛型写法: `const 数组名: Array<数据类型> = [];`
  - 推荐写法: `const 数组名: 数据类型[] = [];`

- object 类型

  object 对象类型可以用于描述一个对象

  - `const Object名 = {属性名: 值, 属性名: 值}`

- undefined 类型

  undefined 类型既是实际的值，也是自己的类型

  - `let n2: undefined = undefined;`

- null 类型

  undefined 类型既是实际的值，也是自己的类型

  - ``let n1 = null;`

- Symbol 类型

  可以通过 symbol 来定义相同的名称，因为 Symbol 函数返回的是不同的值。

  ```ts
  const 属性名1 = Symbol("属性名");
  const 属性名2 = Symbol("属性名");

  const info = {
    [属性名1]: "值",
    [属性名2]: "值",
  };
  ```

- any 类型

  在某些情况下，确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用 any 类型；

  any 类型有点像一种讨巧的 TypeScript 手段：

  - 可以对 any 类型的变量进行任何的操作，包括获取不存在的属性、方法；
  - 给一个 any 类型的变量赋值任何的值，比如数字、字符串的值；

  如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候可以使用 any：

  - 包括在 Vue 源码中，也会使用到 any 来进行某些类型的适配；

  ```ts
  let 变量名: any = "Hello world!";

  变量名 = 100;
  变量名 = true;
  变量名 = {};
  ```

- unknow 类型

  unknown 是 TypeScript 中比较特殊的一种类型，它用于描述类型不确定的变量。

  ```ts
  const flag = true;
  let result = unknown;

  if (flag) {
    result = "foo";
  } else {
    result = 123;
  }

  if (typeof result === "string") {
    console.log(result.length);
  }
  ```

- void 类型

  void 通常用来指定一个函数是没有返回值的，那么它的返回值就是 void 类型。

  - 可以将 null 和 undefined 赋值给 void 类型，也就是函数可以返回 null 或者 undefined；
  - 这个函数没有写任何类型，它默认返回值的类型是 void ，也可以显示的来指定返回值是 void；

  ```ts
  function sum(num1: number, num2: number) {
    console.log(num1 + num2);
  }
  ```

- never 类型

  never 表示永远不会发生值的类型，比如一个函数：

  - 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数不会返回东西，那么写 void 类型或者其他类型作为返回值类型都不合适，就可以使用 never 类型；

  应用场景:

  - 永远不会返回返回值

    ```ts
    function foo(): never {
      while (true) {}
    }
    ```

  - 抛出异常

    ```ts
    function bar(): never {
      throw new Error();
    }
    ```

  - 防止因增加参数导致遗漏处理逻辑

    ```ts
    function handleMessage(message: string | number | boolean) {
      switch (typeof message) {
        case "string":
          console.log("string处理方式处理message");
          break;
        case "number":
          console.log("number处理方式处理message");
          break;
        case "boolean":
          console.log("boolean处理方式处理message");
          break;
        default:
          const check: never = message;
      }
    }
    ```

- tuple 类型

  tuple 是元组类型，很多语言中也有这种数据类型，比如 Python、Swift 等。

  tuple 和数组的区别：

  - 数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组中）
  - 元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

  ```ts
  const 元组名: [数据类型, 数据类型] = [值, 值];
  ```

### 类型别名

当需要多次在其他地方使用时类型时，就要编写多次，可以给对象类型起一个别名。

```ts
type 类型别名 = 数据类型 | 数据类型;
```

### 类型断言

有时候 TypeScript 无法获取具体的类型信息，这个时候需要使用类型断言（Type Assertions）。

- 比如通过 document.getElementById，TypeScript 只知道该函数会返回 HTMLElement ，但并不知道它具体的类型：

  ```ts
  const el = document.getElementById("id") as HTMLImageElement;
  el.src = "url地址";
  ```

- TypeScript 只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换：

  ```ts
  const message = "Hello world";
  const num: number = (message as unknown) as number;
  ```

### 非空类型断言

非空断言使用的是`!` ，表示可以确定某个标识符是有值的(默认 undefined)，跳过 ts 在编译阶段对它的检测。

```ts
function 函数名(参数名?: 参数类型) {
  console.log(参数名!);
}
```

### 可选链

可选链事实上并不是 TypeScript 独有的特性，它是 ES11（ES2020）中增加的特性：

- 可选链使用可选链操作符 `?.`；
- 它的作用是当对象的属性不存在时，会短路，直接返回 undefined，如果存在，那么才会继续执行；
- 虽然可选链操作是 ECMAScript 提出的特性，但是和 TypeScript 一起使用更版本；

```ts
type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
  };
};

const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
  },
};

console.log(info.friend?.name);
console.log(info.friend?.age);
```

### ??和!!的作用

- `!!`操作符：

  - 将一个其他类型转换成 boolean 类型；
  - 类似于 Boolean(变量)的方式；

  ```ts
  // true
  console.log(!!"Hello world");
  ```

- `??`操作符：

  - 它是 ES11 增加的新特性；
  - **空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数**；

  ```ts
  let message: string | null = null;
  const content = message ?? "Hello world";

  // "Hello world"
  console.log(content);
  ```

### 字面量类型

字面量类型的意义：必须结合联合类型。

```ts
type 联合类型名 = "值1" | "值2" | "值3";
let 变量名: 联合类型名;
变量名 = "值1";
变量名 = "值2";
```

### 类型缩小

什么是类型缩小(Type Narrowing)？

- 可以通过类似于 typeof padding === "number" 的判断语句，来改变 TypeScript 的执行路径；
- 在给定的执行路径中，可以缩小比声明时更小的类型，这个过程称之为 缩小;
- 而编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

常见的类型保护有如下几种：

- typeof

  在 TypeScript 中，检查返回的值 typeof 是一种类型保护：因为 TypeScript 对如何 typeof 操作不同的值进行编码。

  ```ts
  function 函数名(参数名: 数据类型 | 数据类型) {
    if (typeof 参数名 === "数据类型") {
      console.log(参数名);
    } else {
      console.log(参数名);
    }
  }
  ```

- 平等缩小

  可以使用 Switch 或者相等的一些运算符来表达相等性（比如===, !==, ==, and != ）：

  ```ts
  function 函数名(参数名: "值1" | "值2") {
    // if判断
    if (参数名 === "值1") {
      console.log(参数名);
    }

    // switch判断
    switch (参数名) {
      case "值1":
        console.log(参数名);
        break;
      case "值2":
        console.log(参数名);
        break;
    }
  }
  ```

- instanceof

  JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”：

  ```ts
  function 函数名(参数名: 数据类型 | 数据类型) {
    if (time instanceof 数据类型) {
      console.log(参数名);
    } else {
      console.log(参数名);
    }
  }
  ```

- in

  in 运算符用于确定对象是否具有带名称的属性：

  - 如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true；

  ```ts
  type Fish = { swimming: () => void };
  type Dog = { running: () => void };

  function walk(animal: Fish | Dog) {
    if ("swimming" in animal) {
      animal.swimming();
    } else {
      animal.running();
    }
  }

  const fish: Fish = {
    swimming() {
      console.log("swimming");
    },
  };

  walk(fish);
  ```

## 函数

### 定义函数

函数是 JavaScript 非常重要的组成部分，TypeScript 允许指定函数的参数和返回值的类型。

::: tip 提示
通常情况下不需要返回类型注解，因为 TypeScript 会根据 return 返回值推断函数的返回类型
:::

```ts
function 函数名(参数名: 数据类型): 返回值类型 {
  return 返回值;
}
```

### 对象类型

如果希望限定一个函数接受的参数是一个对象，可以使用对象类型。

- 属性之间可以使用`,`或者`;`来分割，最后一个分隔符是可选的；
- 每个属性的类型部分也是可选的，如果不指定，那么就是 any 类型

```ts
function 函数名(参数名: { 属性名: 数据类型; 属性名: 数据类型 }) {}

函数名({ 属性名: 值, 属性名: 值 });
```

### 联合类型

TypeScript 的类型系统允许使用多种运算符，从现有类型中构建新类型。

- 联合类型是由两个或者多个其他类型组成的类型；
- 表示可以是这些类型中的任何一个值；
- 联合类型中的每一个类型被称之为联合成员（union's members）；

```ts
function 函数名(参数名: 数据类型 | 数据类型) {
  if (typeof 参数名 === "数据类型") {
  }
}
```

### 可选类型

可选类型(即可选参数)可以看做是 类型|undefined 的联合类型

```ts
function 函数名(参数名?: 数据类型) {}
```
