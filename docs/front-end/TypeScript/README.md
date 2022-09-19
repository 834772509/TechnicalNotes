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

// 由于上一行报错导致这里永远执行不到
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

   ::: details 点击查看代码

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

   :::

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

  - 推荐写法: `const 数组名: 数据类型[] = [];`
  - 泛型写法(React jsx 中有冲突): `const 数组名: Array<数据类型> = [];`

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

  在某些情况下，确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候可以使用 any 类型；

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

  void 通常用来指定一个**函数是没有返回值**的，那么它的返回值就是 void 类型。

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
  const num: number = message as unknown as number;
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
::: tip 提示
可选类型必须写在必选类型的后面
:::

```ts
function 函数名(参数名?: 数据类型) {}
```

### 默认值

从 ES6 开始，JavaScript 支持默认参数，TypeScript 也支持默认参数：

```ts
function 函数名(参数名: 数据类型, 参数名: 数据类型 = 默认值) {}
```

### 函数的剩余参数

从 ES6 开始，JavaScript 也支持剩余参数，剩余参数语法允许将一个不定数量的参数放到一个数组中。

```ts
function 函数名(...参数名: 数据类型[]) {
  console.log(参数名);
}

函数名(值1);
函数名(值1, 值2);
```

### 不确定的 this 类型

```ts
type ThisType = { 属性名: string };
function 函数名(this: ThisType) {
  console.log(this.属性名);
}

const info = {
  属性名: "值",
  函数名: 函数名,
};

// 隐式绑定
info.eating();

// 显示绑定
函数名.call({ 属性名: "值" });
函数名.apply({ 属性名: "值" });
```

### 函数重载

在 TypeScript 中，可以去编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行调用；

- 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；

::: tip 提示
在可能的情况下，尽量选择使用联合类型来实现；
:::

```ts
function 函数名(参数名: 数据类型, 参数名: 数据类型): 数据类型;
function 函数名(参数名: 数据类型, 参数名: 数据类型): 数据类型;

function 函数名(参数名: any, 参数名: any): 数据类型: any {};

函数名(值, 值);
```

## 类

### 认识类的使用

- 在早期的 JavaScript 开发中（ES5）需要通过函数和原型链来实现类和继承，从 ES6 开始，引入了 class 关键字，可以更加方便的定义和使用类。
- TypeScript 作为 JavaScript 的超集，也是支持使用 class 关键字的，并且还可以对类的属性和方法等进行静态类型检测。
- 实际上在 JavaScript 的开发过程中，更加习惯于函数式编程：
  - 比如 React 开发中，目前更多使用的函数组件以及结合 Hook 的开发模式；
  - 比如在 Vue3 开发中，目前也更加推崇使用 Composition API；
- 但是在封装某些业务的时候，类具有更强大封装性，所以也需要掌握它们。
- 类的定义通常会使用 class 关键字：
  - 在面向对象的世界里，任何事物都可以使用类的结构来描述；
  - 类中包含特有的属性和方法；

### 类的定义

::: tip 提示

- 在默认的 strictPropertyInitialization 模式下属性是必须初始化，如果没有初始化，那么编译时就会报错；
- 如果在 strictPropertyInitialization 模式下确实不希望给属性初始化，可以使用 `name!: string` 语法；

:::

```ts
class 类名 {
  属性名: 属性类型;
  属性名: 属性类型;

  // 构造器
  constructor(属性名: 属性类型, 属性名: 属性类型) {
    this.属性名 = 属性名;
    this.属性名 = 属性名;
  }

  方法名() {}
}
```

```ts
let 实例名 = new 类名(属性值, 属性值);

console.log(实例名.属性名);
实例名.方法名();
```

### 类的继承

面向对象的其中一大特性就是继承，继承不仅仅可以减代码量，也是多态的使用前提。

- 使用 `extends` 关键字来实现继承，子类中使用 `super` 来访问父类。
- 在构造函数中，可以通过 `super` 来调用父类的构造方法，对父类中的属性进行初始化；

```ts
class 类名 extends 父类名 {
  属性名: 属性类型;

  constructor(属性名: 属性类型, 属性名: 属性类型) {
    // 调用父类的构造器
    super(属性名, 属性名);
  }

  方法名() {
    super.方法名();
  }
}
```

### 类的多态

多态的目的是为了写出更加具备通用性的代码

```ts
class 父类名 {
  方法名1() {}
}

class 类名1 extends 父类名 {
  方法名1() {}
}
class 类名2 extends 父类名 {
  方法名1() {}
}
```

### 类的成员修饰符

在 TypeScript 中，类的属性和方法支持三种修饰符： public、private、protected

- public: 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是 public；
- private: 修饰的是仅在同一类中可见、私有的属性或方法；
- protected: 修饰的是仅在类自身及子类中可见、受保护的属性或方法；

```ts
class 类名 {
  public 属性名: 属性类型;
  private 属性名: 属性类型;
  protected 属性名: 属性类型;
}
```

### 只读属性 readonly

如果有一个属性不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用 readonly：

```ts
class Person {
  readonly 属性名: 数据类型;

  constructor(属性名: 数据类型) {
    this.属性名 = 属性名;
  }
}
```

### getters/setters 访问器

一些私有属性不能直接访问，或者某些属性想要监听它的获取(getter)和设置(setter)的过程，这个时候可以使用存取器。

```ts
class 类名 {
  private _属性名: 数据类型;

  constructor(属性名: 数据类型) {
    this._属性名 = 属性名;
  }

  set 属性名(属性名) {
    this._属性名 = 属性名;
  }

  get 属性名() {
    return this._属性名;
  }
}

const 实例名 = new 类名(值);
实例名.属性名 = 值;
console.log(实例名.属性名);
```

### 静态成员

在开发中, 有时候也需要定义类级别的成员和方法。

```ts
class 类名 {
  static 属性名: 数据类型 = 值;

  static 方法名() {}
}

console.log(类名.属性名);
类名.方法名();
```

### 抽象类

继承是多态使用的前提。

- 所以在定义很多通用的**调用接口时, 通常会让调用者传入父类，通过多态来实现更加灵活的调用方式**。
- 但是，**父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，可以定义为抽象方法**。

什么是抽象方法? **在 TypeScript 中没有具体实现的方法(没有方法体)，就是抽象方法**。

- 抽象方法，必须存在于抽象类中；
- 抽象类是使用 abstract 声明的类；

抽象类有如下的特点：

- 抽象类是不能被实例的话（也就是不能通过 new 创建）
- 抽象方法必须被子类实现，否则该类必须是一个抽象类；

- 定义抽象类

  ```ts
  abstract class 抽象类名 {
    abstract 抽象方法();
  }
  ```

- 实现抽象类

  ```ts
  class 类名 extends 抽象类名 {
    抽象方法() {}
  }
  ```

### 类的类型

类本身也可以作为一种数据类型。

```ts
class 类名 {
  属性名: 数据类型 = 值;
  方法名() {}
}

const 实例名 = new 类名();

const 实例名: 类名 = {
  属性名: 值,
  方法名() {},
};
```

## 接口

### 声明接口

```ts
interface 接口名 {
  属性名: 值;
  属性名: 值;
  方法名: () => void;
}
```

```ts
const 变量名: 接口名 = {
  属性名: 值,
  方法名() {},
};
```

### 实现接口

接口定义后，是可以被类实现的：

- 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入；
- 这就是面向接口开发；

```ts
class 类名 implements 接口名 {
  方法名() {}
}
```

### 索引类型

```ts
interface 索引类型名 {
  [index: number]: string;
}

const 对象名: 索引类型名 = {
  0: "值1",
  2: "值2",
};
```

### 接口继承

接口和类一样是可以进行继承的，也是使用 extends 关键字，**接口支持多继承**（类不支持多继承）。

```ts
interface 接口名 {
  方法名: () => void;
}

interface 父接口名 extends 接口名 {}

const action: 父接口名 = {
  方法名() {},
};
```

### 交叉类型

交叉类型（Intersection Types）：

- 交叉类似表示需要满足多个类型的条件；
- 交叉类型使用 `&` 符号；

```ts
// 表达的含义是number和string要同时满足（但并不存在这个类型故为never类型）
type 类型名 = number & string;
```

### interface 和 type 区别

interface 和 type 都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？

- 如果是定义非对象类型，通常推荐使用 type，比如 Direction、Alignment、一些 Function；

如果是定义对象类型，那么它们是有区别的：

- interface 可以重复的对某个接口来定义属性和方法；
- 而 type 定义的是别名，别名是不能重复的；

### 字面量赋值

TypeScript 在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制。

- 但是之后如果是将一个 变量标识符 赋值给其他的变量时，会进行 freshness 擦除操作

```ts
interface 接口名 {
  属性名1: 属性类型;
  属性名2: 属性类型;
}

const 变量名1 = {
  属性名1: 值,
  属性名2: 值,
  属性名3: 值,
};
const 变量名2: 接口名 = 变量名1;

console.log(变量名1);
console.log(变量名2);
```

## 枚举类型

枚举类型是为数不多的 TypeScript 特性有的特性之一：

- 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
- 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；

### 定义

- 基本定义

  ```ts
  enum 枚举名 {
    枚举值,
    枚举值,
  }
  ```

- 指定数据

  枚举类型默认是有值的，从 0 开始递增，同时也支持自定义值。

  ```ts
  enum 枚举名 {
    枚举值 = 值,
    枚举值 = 值,
  }
  ```

### 使用

```ts
console.log(枚举名.枚举值);
```

## 泛型

### 认识泛型

软件工程的主要目的是构建不仅仅明确和一致的 API，还要让代码具有很强的可重用性：

- 比如可以通过函数来封装一些 API，通过传入不同的函数参数，让函数来帮助完成不同的操作；
- 但是对于参数的类型是否也可以参数化呢？

什么是类型的参数化？

- 在定义函数时，不决定参数的类型；
- 而是让调用者以参数的形式告知，函数参数应该是什么类型；

### 基本使用

::: tip 提示

泛型常用名称：

- T：Type 的缩写，类型
- K、V：key 和 value 的缩写，键值对
- E：Element 的缩写，元素
- O：Object 的缩写，对象

:::

```ts
function 函数名<T, E>(参数名: T, 参数名: E) {}

// 类型推导
函数名(值, 值);

// 指定传入类型
函数名<数据类型>(值, 值);
```

### 泛型接口

在定义接口的时候也可以使用泛型：

```ts
interface 接口名<T1 = 默认数据类型, T2 = 默认数据类型> {
  属性名: T1;
  属性名: T2;
}

const 变量名: 接口名 = {
  属性名: 值,
  属性名: 值,
};
```

### 泛型类

```ts
class 类名<T> {
  属性名: T;
  属性名: T;

  constructor(属性名: T, 属性名: T) {
    this.属性名 = 属性名;
    this.属性名 = 属性名;
  }
}

// 类型推导
const 实例名 = new 类名(值, 值);
// 指定数据类型
const 实例名 = new 类名<数据类型>(值, 值);
```

### 泛型约束

有时候希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中：

- 比如 string 和 array 都有 length 属性，或者某些对象也有 length 属性；
- 那么只要是拥有 length 的属性都可以作为参数类型；

```ts
interface 约束名 {
  length: number;
}

function 函数名<T extends 约束名>(参数名: T) {
  return 参数名.length;
}

函数名("abc");
函数名(["abc", "cba"]);
函数名({ length: 10 });
```

## 模块化开发

TypeScript 支持两种方式来控制作用域：

- 模块化：每个文件可以是一个独立的模块，支持 ES Module，也支持 CommonJS；
- 命名空间：通过 namespace 来声明一个命名空间

### 命名空间

命名空间在 TypeScript 早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题。

- 声明

  ```ts
  export namespace 命名空间名称 {
    export function 函数名(参数名: 数据类型) {}
  }
  ```

- 使用

  ```ts
  import { 命名空间名称 } from "./路径";

  命名空间名称.函数名();
  ```

### 类型的查找

#### .d.ts 文件

- TypeScript 文件一般都是 .ts 文件，这些文件最终会输出 .js 文件，也是通常编写代码的地方；
- 还有另外一种文件 .d.ts 文件，它是用来做类型的声明(declare)。 它仅仅用来做类型检测，告知 TypeScript 有哪些类型；

#### 内置类型声明

内置类型声明是 TypeScript 自带的、内置了 JavaScript 运行时的一些标准化 API 的声明文件；

- 包括比如 Math、Date 等内置类型，也包括 DOM API，比如 Window、Document 等；

内置类型声明通常在我们安装 [TypeScript 环境](https://github.com/microsoft/TypeScript/tree/main/lib)中会带有的。

#### 外部定义类型声明

外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明。

这些库通常有两种类型声明方式：

- 方式一：在自己库中进行类型声明（编写.d.ts 文件），比如 axios
- 方式二：通过社区的一个公有库 DefinitelyTyped 存放类型声明文件
  - 该库的 [GitHub 地址](https://github.com/DefinitelyTyped/DefinitelyTyped/)
  - 该库[查找声明安装方式的地址](https://www.typescriptlang.org/dt/search?search=)
  - 比如我们安装 React 的类型声明： `npm i @types/react --save-dev`

#### 自己定义类型声明

什么情况下需要自己来定义声明文件？

- 情况一：使用的第三方库是一个纯的 JavaScript 库，没有对应的声明文件，比如 lodash；
- 情况二：给自己的代码中声明一些类型，方便在其他地方直接进行使用；

新建 `声明文件名.d.ts` 文件

- 声明模块

  ```ts
  declare module "模块名" {
    export function 函数名(参数名: 数据类型): 返回值类型;
  }
  ```

- 声明变量

  ```ts
  declare let 变量名: 数据类型;
  ```

- 声明函数

  ```ts
  declare function 函数名(): 返回值类型;
  ```

- 声明类

  ```ts
  declare class 类名 {
    属性名: 数据类型;
    属性名: 数据类型;
    constructor(参数名: 数据类型, 参数名: 数据类型);
  }
  ```

- 声明文件

  ```ts
  declare module "*.jpg";
  declare module "*.png";
  declare module "*.gif";
  ```

- 声明命名空间

  例如在 index.html 中直接引入了 jQuery。

  ```ts
  declare namespace 命名空间名 {
    export function 函数名(参数名: 数据类型): 返回值类型;
  }
  ```
