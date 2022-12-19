# Pinia

## 什么是 Pinia？

Pinia（发音为/piːnjʌ ʌ/，如英语中的“peenya”）是最接近 piña（西班牙语中的菠萝）的词；

- Pinia 开始于大概 2019 年，最初是作为一个实验为 Vue 重新设计状态管理，让它用起来像组合式 API（Composition API）。
- 从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容 Vue2、Vue3，也并不要求你使用 Composition API；
- Pinia 本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和 Vuex、Redux 一样）；

### Pinia 和 Vuex 的区别

那么我们不是已经有 Vuex 了吗？为什么还要用 Pinia 呢？

- Pinia 最初是为了**探索 Vuex 的下一次迭代**会是什么样子，结合了**Vuex 5 核心团队**讨论中的许多想法；
- 最终，团队意识到**Pinia 已经实现了 Vuex5 中大部分内容**，所以最终**决定用 Pinia 来替代 Vuex**；
- 与 Vuex 相比，Pinia 提供了一个**更简单的 API，具有更少的仪式**，提供了**Composition-API 风格的 API**；
- 最重要的是，在**与 TypeScript 一起使用时具有可靠的类型推断支持**；
  和 Vuex 相比，Pinia 有很多的优势：
- 比如 mutations 不再存在：
  - 他们经常被认为是 _非常冗长_；
  - 他们最初带来了 devtools 集成，但这不再是问题；
- **更友好的 TypeScript 支持，Vuex 之前对 TS 的支持很不友好；**
- **不再有 modules 的嵌套结构**：
  - 可以灵活使用每一个 store，它们是通过扁平化的方式来相互使用的；
- **也不再有命名空间的概念，不需要记住它们的复杂关系；**

## 安装

npm: `npm install pinia`

## 配置 Pinia 入口

\src\stores\index.js

```js
import { createPinia } from "pinia";

const pinia = createPinia();
export default pinia;
```

\src\main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";

const app = createApp(App);
app.use(pinia);

app.mount("#app");
```

## Store

- 什么是 Store？

  - 一个 Store （如 Pinia）是一个**实体**，它会持有为绑定到你**组件树**的**状态和业务逻辑**，也就是保存了全局的状态；
  - 它有点像始终存在，并且**每个人都可以读取和写入的组件**；
  - 你可以在你的应用程序中**定义任意数量的 Store 来管理你的状态**；

- Store 有三个核心概念：
  - **state**、**getters**、**actions**；
  - 等同于组件的 data、computed、methods；
  - 一旦 store 被实例化，你就可以**直接在 store 上访问 state、getters 和 actions**中定义的任何属性；

### 定义 Store

我们需要知道 Store 是**使用 defineStore() 定义**的，

- 并且它需要一个**唯一名称**，作为第一个参数传递；
- 这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。
- 返回的函数统一使用 useX 作为命名方案，这是约定的规范

\src\stores\Store 名.js

```js
import { defineStore } from "pinia";

const useStore名 = defineStore("Store名", {
  state: () => ({
    变量: 值,
  }),
});

export default useStore名;
```

### 使用 Store

Store 在它被使用之前是不会创建的，可以通过调用 use 函数来使用 Store：

```html
<template>
  <div>
    <h2>{{ Store名.变量名 }}</h2>
  </div>
</template>

<script setup>
  import useStore名 from "@/stores/Store名.js";

  const Store名 = useStore名();
</script>
```

注意 Store 获取到后不能被解构，那么会失去响应式：

```js
const { 变量名 } = useStore名();
```

为了从 Store 中提取属性同时保持其响应式，您需要使用**storeToRefs()**。

```js
import { storeToRefs } from "pinia";
import useStore名 from "@/stores/Store名.js";

const { 变量名 } = storeToRefs(useStore名());
```

### 修改 State

- 默认情况下，您可以通过 store 实例访问状态来直接写入状态；

  ```js
  import useStore名 from "@/stores/Store名.js";

  const Store名 = useStore名();

  // 修改单个状态
  Store名.变量名 = 值;

  // 修改多个状态
  Store名.$patch({
    变量名: 值,
    变量名: 值,
  });
  ```

- 重置 State：你可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值；

  ```js
  import useStore名 from "@/stores/Store名.js";

  const Store名 = useStore名();
  Store名.$reset();
  ```

- 替换 State：您可以通过将其 $state 属性设置为新对象来替换 Store 的整个状态：

  ```js
  import useStore名 from "@/stores/Store名.js";

  const Store名 = useStore名();

  Store名.$state = {
    变量名: 值,
    变量名: 值,
  };
  ```

## Getters (计算属性)

**Getters 相当于 Store 的计算属性**：

- 它们可以用 defineStore() 中的**getters 属性**定义；
- getters 中可以**定义接受一个 state 作为参数的函数**；

### 定义 Getters

`\src\stores\Store名.js`

- 基本使用

  ```js
  import { defineStore } from "pinia";

  const useStore名 = defineStore("Store名", {
    getters: {
      Getters名(state) {
        return state.变量名 * 2;
      },
    },
  });

  export default useStore名;
  ```

- 传递参数

  ```js
  import { defineStore } from "pinia";

  const useStore名 = defineStore("Store名", {
    getters: {
      Getters名(state) {
        return function (参数名) {
          return state.变量名 + 参数名;
        };
      },
    },
  });

  export default useStore名;
  ```

- 引入另外的 getter

  ```js
  import { defineStore } from "pinia";

  const useStore名 = defineStore("Store名", {
    getters: {
      Getters名1(state){
        return state.变量名 * 2;
      }
      Getters名2(state){
        return this.Getters名1 + 1;
      }
    }
  });

  export default useStore名;
  ```

- 使用其他 Store 中的数据

  ```js
  import { defineStore } from "pinia";
  import use其他Store名 from "./其他Store名.js";

  const useStore名 = defineStore("Store名", {
    getters: {
      Getters名(state) {
        const 其他Store名 = use其他Store名();
        return 其他Store名.变量名 + 1;
      },
    },
  });

  export default useStore名;
  ```

### 使用 Getters

```html
<template>
  <div>
    <h2>{{ Store名.Getters名 }}</h2>
    <h2>{{ Store名.Getters函数名(参数值) }}</h2>
  </div>
</template>

<script setup>
  import useStore名 from "@/stores/Store名.js";

  const Store名 = useStore名();
</script>
```

## Actions (methods)

**Actions 相当于组件中的 methods**。

- 可以使用 defineStore() 中**的 actions 属性**定义，并且它们非常适合定义业务逻辑；
- 和 getters 一样，在 action 中可以通过 **this 访问整个 store 实例**的所有操作；

### 基本使用

- 定义 Actions

  `\src\stores\Store名.js`

  ```js
  import { defineStore } from "pinia";

  const useStore名 = defineStore("Store名", {
    actions: {
      Actions名() {
        this.变量名 = 值;
      },
      // 传递参数
      Actions名(参数名) {
        this.变量名 = this.变量名 + 参数名;
      },
    },
  });

  export default useStore名;
  ```

- 使用 Actions

  ```html
  <template>
    <div>
      <h2>{{ Store名.变量名 }}</h2>
      <button @click="changeState">修改State</button>
    </div>
  </template>

  <script setup>
    import useStore名 from "@/stores/Store名.js";

    const Store名 = useStore名();
    function changeState() {
      Store名.Actions名();
      Store名.Actions名(参数值);
    }
  </script>
  ```

### 异步函数

Actions 中是支持异步操作的，并且我们可以编写异步函数，在函数中使用 await；

- 定义 Actions

  `\src\stores\Store名.js`

  ```js
  import { defineStore } from "pinia";

  const useStore名 = defineStore("Store名", {
    actions: {
      async Actions名() {
        const res = await fetch("http://url");
        const data = await res.json();
        this.变量名 = data;
        return data;
      },
    },
  });

  export default useStore名;
  ```

- 使用 Actions

  ```html
  <script setup>
    import useStore名 from "@/stores/Store名.js";

    const Store名 = useStore名();
    Store名.Actions名().then((res) => {
      console.log(res);
    });
  </script>
  ```
