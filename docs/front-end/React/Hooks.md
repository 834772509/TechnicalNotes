# React Hooks

## 基本概念

### 为什么需要 Hook

Hook 是 React 16.8 的新增特性，它可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性（比如生命周期）

我们先来思考一下 class 组件相对于函数式组件有什么优势？比较常见的是下面的优势：

- class 组件可以定义自己的 state，用来保存组件自己内部的状态；
  - 函数式组件不可以，因为函数每次调用都会产生新的临时变量；
- class 组件有自己的生命周期，我们可以在对应的生命周期中完成自己的逻辑；
  - 比如在 componentDidMount 中发送网络请求，并且该生命周期函数只会执行一次；
  - 函数式组件在学习 hooks 之前，如果在函数中发送网络请求，意味着每次重新渲染都会重新发送一次网络请求；
- class 组件可以在状态改变时只会重新执行 render 函数以及我们希望重新调用的生命周期函数 componentDidUpdate 等；
  - 函数式组件在重新渲染时，整个函数都会被执行，似乎没有什么地方可以只让它们调用一次；

所以，在 Hook 出现之前，对于上面这些情况我们通常都会编写 class 组件。

### Class 组件存在的问题

- 复杂组件变得难以理解：
  - 我们在最初编写一个 class 组件时，往往逻辑比较简单，并不会非常复杂。但是随着业务的增多，我们的 class 组件会变得越来越复杂；
  - 比如 componentDidMount 中，可能就会包含大量的逻辑代码：包括网络请求、一些事件的监听（还需要在
    componentWillUnmount 中移除）；
  - 而对于这样的 class 实际上非常难以拆分：因为它们的逻辑往往混在一起，强行拆分反而会造成过度设计，增加代码的复杂度；
- 难以理解的 class：
  - 很多人发现学习 ES6 的 class 是学习 React 的一个障碍。
  - 比如在 class 中，我们必须搞清楚 this 的指向到底是谁，所以需要花很多的精力去学习 this；
  - 虽然我认为前端开发人员必须掌握 this，但是依然处理起来非常麻烦；
- 组件复用状态很难：
  - 在前面为了一些状态的复用我们需要通过高阶组件或 render props；
  - 像我们之前学习的 redux 中 connect 或者 react-router 中的 withRouter，这些高阶组件设计的目的就是为了状态的复用；
  - 或者类似于 Provider、Consumer 来共享一些状态，但是多次使用 Consumer 时，我们的代码就会存在很多嵌套；
  - 这些代码让我们不管是编写和设计上来说，都变得非常困难；

### Hook 的出现

- Hook 的出现，可以解决上面提到的这些问题；
- 简单总结一下 hooks：
  - 它可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性；
  - 但是我们可以由此延伸出非常多的用法，来让我们前面所提到的问题得到解决；
- Hook 的使用场景：
  - Hook 的出现基本可以代替我们之前所有使用 class 组件的地方（除了一些非常不常用的场景）；
  - 但是如果是一个旧的项目，你并不需要直接将所有的代码重构为 Hooks，因为它完全向下兼容，你可以渐进式的来使用它；
  - Hook 只能在函数组件中使用，不能在类组件，或者函数组件之外的地方使用；

### useState 解析

- useState 来自 react，需要从 react 中导入，它是一个 hook；
  参数：初始化值，如果不设置为 undefined；
- 返回值：数组，包含两个元素；
  - 元素一：当前状态的值（第一调用为初始化值）；
  - 元素二：设置状态值的函数；
- Hook 就是 JavaScript 函数，这个函数可以帮助你 钩入（hook into） React State 以及生命周期等特性；
- 但是使用它们会有两个额外的规则：
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
  - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

### 为什么叫 useState 而不叫 createState

“Create” 可能不是很准确，因为 state 只在组件首次渲染的时候被创建。在下一次重新渲染时，useState 返回给我们当前的 state。如果每次都创建新的变量，它就不是 “state”了。这也是 Hook 的名字 总是 以 use 开头的一个原因。

## 基本使用

Visual Studio Code 快速使用 useState：`useState`->选择代码段->回车

```js
import React, { useState } from "react";

export default function MulutState() {
  const [变量名, set变量名] = useState(初始值);
  const [变量名, set变量名] = useState(["值", "值"]);

  return (
    <div>
      <h2>{变量名}</h2>
    </div>
  );
}
```

### 修改数据

```js
// 修改普通数据
set变量名(值);

// 改变数组内Object的值
const Object = [...变量名];
Object[index].键 = 值;
set变量名(Object);
```

### 多个 useState 合并

当执行多个同一 useState 时，React 会将多个 state 进行合并

```js
setCount(count + 10);
setCount(count + 10);
setCount(count + 10);
setCount(count + 10);

// count默认值为0，当执行以上代码后，count值为10
```

解决方案：

```js
setCount((prevCount) => prevCount + 10);
setCount((prevCount) => prevCount + 10);
setCount((prevCount) => prevCount + 10);
setCount((prevCount) => prevCount + 10);
```

## Effect Hook

Effect Hook 可以让完成一些类似于 class 中生命周期的功能；
事实上，类似于网络请求、手动更新 DOM、一些事件的监听，都是 React 更新 DOM 的一些副作用（Side Effects）；
所以对于完成这些功能的 Hook 被称之为 Effect Hook；

::: tip 提示
useEffect 的第二个参数表示依赖的变量，只有当依赖的变量发生改变时才调用此 Hook。  
如果不传值，则 DOM 重新渲染时会重新调用此 Hook。传递空数组则表示只执行一次
:::

```js
import React, { useEffect } from "react";

useEffect(() => {
  // 修改DOM
});

useEffect(() => {
  // 修改DOM（只有当依赖的变量发生改变时才调用此Hook）
}, [依赖变量1, 依赖变量2]);

useEffect(() => {
  // 订阅事件

  return () => {
    // 取消订阅事件
  };
}, []);

useEffect(() => {
  // 网络请求
}, []);
```

## 跨组件传参

```js
import React, { createContext } from "react";

export const Context名 = createContext();

function App() {
  return (
    <div>
      <Context名.Provider value={{ 变量名: 值 }}>
        <传参组件名></传参组件名>
      </Context名.Provider>
    </div>
  );
}
```

```js
import React, { useContext } from "react";
import { Context名 } from "../App";

export default function 传参组件名() {
  const Context别名 = useContext(Context名);
  console.log(Context别名);

  return (
    <div>
      <h2>{Context别名.变量名}</h2>
    </div>
  );
}
```

## useReducer

useReducer 仅仅是 useState 的一种替代方案，并不能替代 Redux：

- 在某些场景下，如果 state 的处理逻辑比较复杂，我们可以通过 useReducer 来对其进行拆分；
- 或者这次修改的 state 需要依赖之前的 state 时，也可以使用；
- **数据不会共享**，它们只是使用了相同的 counterReducer 的函数而已。

```js
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "类型名1":
      return { ...state, 变量名: state.变量名 + 1 };
    case "类型名2":
      return { ...state, 变量名: state.变量名 - 1 };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { 变量名: 默认值 });

  return (
    <div>
      <h2>{state.变量名}</h2>
      <button onClick={(e) => dispatch({ type: "类型名1" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "类型名2" })}>-1</button>
    </div>
  );
}
```

## useCallback

useCallback 实际的目的是为了进行性能的优化：

- useCallback 会返回一个函数的 memoized（记忆的） 值；
- 在依赖不变的情况下，多次定义的时候，返回的值是相同的；

::: tip 提示
使用场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用 useCallback 对函数进行处理
:::

```js
import React, { useState, useCallback, memo } from "react";

const HYButton = memo((props) => {
  console.log("HYButton 重新渲染");
  return <button onClick={props.incremt}>HYButton +1</button>;
});

export default function CallbackHookDemo01() {
  console.log("CallbackHookDemo01 重新渲染");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const incremt1 = () => {
    console.log("执行incremt1函数");
    setCount(count + 1);
  };

  const incremt2 = useCallback(() => {
    console.log("执行incremt2函数");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <HYButton incremt={incremt1}></HYButton>
      <HYButton incremt={incremt2}></HYButton>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
```

## useMemo

useMemo 实际的目的也是为了进行性能的优化

- useMemo 返回的也是一个 memoized（记忆的） 值；
- 在依赖不变的情况下，多次定义的时候，返回的值是相同的；

```js
import React, { useState, useMemo } from "react";

function calcNumber(count) {
  console.log("重新计算");
  return ((1 + count) * count) / 2;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  //  const total = calcNumber(count);

  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
```
