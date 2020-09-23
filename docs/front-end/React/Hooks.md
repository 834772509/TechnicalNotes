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

<!-- ::: tip 提示
不能在 useEffect 中使用 setState。
useEffect 通知 React 组件需要在渲染后执行什么操作。每次 render 之后都会执行 useEffect。
而 setState 用于渲染 dom 的时候，会触发 useEffect，从而触发循环，导致内存耗尽。
::: -->

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

## useRef

useRef 返回一个 ref 对象，返回的 ref 对象再组件的整个生命周期保持不变。

最常用的 ref 是两种用法：

1. 引入 DOM（或者组件，但是需要是 **class 组件**）元素；
2. 保存一个数据，这个对象在整个生命周期中可以保存不变；

### useRef 引用 DOM

```js
import React, { useRef } from "react";

export default function 组件名() {
  const Ref名 = useRef();

  return (
    <div>
      <h2 ref={Ref名}>RefHookDemo01</h2>
      <button onClick={(e) => changeDOM()}>修改DOM</button>
    </div>
  );

  function changeDOM() {
    console.log(Ref名.current);
    Ref名.current.innerHTML = "Hello World";
  }
}
```

### useRef 引用其他数据

```js
import React, { useRef, useState, useEffect } from "react";

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>count 上一次的值：{numRef.current}</h2>
      <h2>count 这一次的值：{count}</h2>
      <button onClick={(e) => setCount(count + 10)}>+10</button>
    </div>
  );
}
```

## useImperativeHandle

通过 useImperativeHandle 可以值暴露固定的操作：

- 通过 useImperativeHandle 的 Hook，将传入的 ref 和 useImperativeHandle 第二个参数返回的对象绑定到了一起；
- 所以在父组件中，使用 inputRef.current 时，实际上使用的是返回的对象；
- 比如我调用了 focus 函数，甚至可以调用 printHello 函数；

```js
import React, { useRef, forwardRef, useImperativeHandle } from "react";

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );

  return <input ref={inputRef} type="text" />;
});

export default function ForwardRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}></HYInput>
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
```

## useLayoutEffect

useLayoutEffect 和 useEffect 非常的相似，事实上他们也只有一点区别

- useEffect 会在渲染的内容更新到 DOM 上后执行，不会阻塞 DOM 的更新；
- **useLayoutEffect 会在渲染的内容更新到 DOM 上之前执行，会阻塞 DOM 的更新**；
- 如果我们希望在某些操作发生之后再更新 DOM，那么应该将这个操作放到 useLayoutEffect。

```js
import React, { useState, useEffect, useLayoutEffect } from "react";

export default function EffectCountDemo() {
  const [count, setCount] = useState(10);

  // 如使用useEffect，会先渲染0，然后再渲染随机数
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random());
    }
  }, [count]);

  return (
    <div>
      <h2>数字：{count}</h2>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
```

## 自定义 Hook

自定义 Hook 本质上只是一种函数代码逻辑的抽取，严格意义上来说，它本身并不算 React 的特性

::: tip 提示
在函数前加上`use`即可成为自定义 Hook
:::

```js
function useHook名() {
  // Hooks相关代码（如useEffect等）
}
```

### Context 共享

```js
import { useContext } from "react";
import { UserContext, TokenContext } from "../App";

function useUserContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  return [user, token];
}

export default useUserContext;
```

使用

```js
import React from "react";
import userUserContext from "../hooks/user-hook";

export default function CustomContextShareHook() {
  const [user, token] = userUserContext();

  console.log(user, token);

  return (
    <div>
      <h2>CustomContextShareHook</h2>
    </div>
  );
}
```

### 获取滚动位置

```js
import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.onscroll = handleScroll;

    return () => {
      document.onscroll = null;
    };
  }, []);

  return [scrollPosition];
}

export default useScrollPosition;
```

使用：

```js
import React, { useEffect, useState } from "react";
import useScrollPosition from "../hooks/scroll-position-hook";

export default function CustomScrollPositionHook() {
  const scrollPosition = useScrollPosition();

  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", left: 0, top: 0 }}>
        CustomScrollPositionHookï¼š{scrollPosition}
      </h2>
    </div>
  );
}
```

### localStorage 存储

```js
import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem(key));
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
```

使用：

```js
import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/local-store-hook";

export default function CustomDataStoreHook() {
  const [name, setName] = useLocalStorage();

  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <button onClick={(e) => setName("coderwhy")}>设置name</button>
    </div>
  );
}
```
