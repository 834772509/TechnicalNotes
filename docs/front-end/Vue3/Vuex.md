# Vuex

## 基本概念

### 状态管理是什么

在开发中，应用程序需要处理各种各样的数据，这些数据需要保存在应用程序中的某一个位置，对于这些数据的管理就称之为是 **状态管理**。

### Vuex 的状态管理

管理不断变化的 state 本身是非常困难的：

- 状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View 页面也有可能会引起状态的变化；
- 当应用程序复杂时，state 在什么时候，因为什么原因而发生了变化，发生了怎么样的变化，会变得非常难以控制和追踪；

因此，是否可以考虑将组件的内部状态抽离出来，以一个全局单例的方式来管理呢？

- 在这种模式下，组件树构成了一个巨大的 “试图 View”；
- 不管在树的哪个位置，任何组件都能获取状态或者触发行为；
- 通过定义和隔离状态管理中的各个概念，并通过强制性的规则来维护视图和状态间的独立性，代码会变得更加结构化和易于维护、跟踪；

这就是 Vuex 背后的基本思想，它借鉴了 Flux、Redux、Elm（纯函数语言，redux 有借鉴它的思想）：

### 单一状态树

Vuex 使用单一状态树：

- 用一个对象就包含了全部的应用层级状；
- 采用的是 SSOT，Single Source of Truth，也可以翻译成单一数据源；
- 这也意味着，每个应用将**仅仅包含一个 store 实例**；
- 单状态树和模块化并不冲突，可以使用 modules；

单一状态树的优势：

- 如果状态信息是保存到多个 Store 对象中的，那么之后的管理和维护等等都会变得特别困难；
- 所以 Vuex 也使用了单一状态树来管理应用层级的全部状态；
- 单一状态树能够以最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护；

### Vuex 五大核心

1. state: 保存状态（变量）
2. getters: 保存需要经过变化后的状态（计算属性）
3. mutations: 更改状态（同步操作）
4. actions: 提交 mutation(异步操作)
5. modules: 模块化管理数据

## Vue devtool

vue 提供了一个 devtools，方便对组件或者 vuex 进行调试：

### 安装

- 通过 chrome 的商店；
- 手动下载代码，编译、安装；
  1. [devtools](https://github.com/vuejs/devtools/tree/v6.0.0-beta.15)下载代码；
  2. 执行 yarn install 安装相关的依赖；
  3. 执行 yarn run build 打包；

## 安装

1. `npm install vuex@next`
2. 配置

   \src\main.js

   ```js
   import { createApp } from "vue";
   import App from "./App.vue";
   import store from "./store";

   createApp(App)
     .use(store)
     .mount("#app");
   ```

## State

### 基本使用

::: warning 注意
不能直接通过`this.$store.state.变量名 = 值`改变 store 中的状态，改变 store 中的状态的唯一途径就显示**提交 (commit) mutation**，这样可以方便的跟踪每一个状态的变化，从而让我们能够通过一些工具帮助更好的管理应用的状态。
:::

- 创建 \src\store\index.js

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    state() {
      return {
        变量名: 值,
      };
    },
    mutations: {
      变量操作方法(state) {
        state.变量名 = 值;
      },
    },
  });

  export default store;
  ```

- 访问共享变量:

  ```html
  <h2>{{$store.state.变量名}}</h2>
  ```

- 修改共享变量: `this.$store.commit("变量操作方法");`

### mapState 辅助函数

如果有很多个状态都需要获取的话，通过`$store.state.变量名`表达式过长，可以使用 mapState 的辅助函数，可以使得**共享变量可以直接访问**。

#### Option API

- 数组类型

  ```js
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState(["变量名", "变量名"]),
    },
  };
  ```

- 对象类型

  ```js
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState({
        变量别名: (state) => state.变量名,
      }),
    },
  };
  ```

#### Composition API

默认情况下，Vuex 并没有提供非常方便的使用 mapState 的方式，这里进行了一个函数的封装。

- 新建\src\hooks\useState.js

  ```js
  import { computed } from "vue";
  import { mapState, useStore, createNamespacedHelpers } from "vuex";

  export default function(moduleName, mapper) {
    let mapperFn = mapState;
    if (typeof moduleName === "string" && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapState;
    }

    // 拿到store独享
    const store = useStore();

    // 获取对应的对象的functions
    const storeStateFns = mapperFn(mapper);

    // 对数据进行转换
    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store });
      storeState[fnKey] = computed(fn);
    });

    return storeState;
  }
  ```

- 使用

  ```js
  import useState from "./hooks/useState";

  export default {
    setup() {
      const storeState = useState(["变量名", "变量名"]);

      return { ...storeState };
    },
  };
  ```

## Getters

某些属性可能需要经过变化后来使用，类似于计算属性，这个时候可以使用 getters。

### 基本使用

- 创建 \src\store\index.js

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    getters: {
      getter名(state) {
        return 1 + 1;
      },
      // 引用getter
      getter名(state, getters) {
        return getters.getter名;
      },
    },
  });

  export default store;
  ```

- 使用 getter

  ```html
  <h2>{{$store.getters.getter名}}</h2>
  ```

### getters 的返回函数

getters 中的函数本身，可以返回一个函数，那么在使用的地方相当于可以调用这个函数。

```js
import { createStore } from "vuex";

const store = createStore({
  getters: {
    getter名(state, getters) {
      return function(n) {
        return n;
      };
    },
  },
});

export default store;
```

### mapGetters 辅助函数

如果有很多个 getter 都需要获取的话，通过`$store.getters.getter名`表达式过长，可以使用 mapGetters 的辅助函数，可以使得**getter 可以直接访问**。

#### Option API

- 数组类型

  ```js
  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters(["getter名", "getter名"]),
    },
  };
  ```

- 对象类型

  ```js
  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters({
        getter别名: "getter名",
        getter别名: "getter名",
      }),
    },
  };
  ```

#### Composition API

默认情况下，Vuex 并没有提供非常方便的使用 mapGetters 的方式，这里进行了一个函数的封装。

- 新建\src\hooks\useGetters.js

  ```js
  import { computed } from "vue";
  import { useGetters, useStore, createNamespacedHelpers } from "vuex";

  export default function(moduleName, mapper) {
    let mapperFn = mapGetters;
    if (typeof moduleName === "string" && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapGetters;
    }

    // 拿到store独享
    const store = useStore();

    // 获取对应的对象的functions
    const storeStateFns = mapperFn(mapper);

    // 对数据进行转换
    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store });
      storeState[fnKey] = computed(fn);
    });

    return storeState;
  }
  ```

- 使用

  ```js
  import useGetters from "./hooks/useGetters";

  export default {
    setup() {
      const storeGetters = useGetters(["getter名", "getter名"]);

      return { ...storeGetters };
    },
  };
  ```

## Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

### Mutation 重要原则

一条重要的原则就是要记住 **mutation 必须是同步函数**

- 这是因为 devtool 工具会记录 mutation 的日记；
- 每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照；
- 但是在 mutation 中执行异步操作，就无法追踪到数据的变化；
- 所以 Vuex 的重要原则中要求 mutation 必须是同步函数；

### 基本使用

- 创建 \src\store\index.js

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    state() {
      return {
        变量名: 值,
      };
    },
    mutations: {
      变量操作方法(state) {
        state.变量名 = 值;
      },
    },
  });

  export default store;
  ```

- 访问共享变量:

  ```html
  <h2>{{$store.state.变量名}}</h2>
  ```

- 修改共享变量: `this.$store.commit("变量操作方法");`

### 携带参数

- 传递参数

  ```js
  this.$store.commit("变量操作方法", { 参数名: 值, 参数名: 值 });
  ```

- 接收参数

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    state() {
      return {
        变量名: 值,
      };
    },
    mutations: {
      变量操作方法(state, payload) {
        state.变量名 = payload.参数名;
      },
    },
  });

  export default store;
  ```

### 对象风格提交

```js
this.$store.commit({
  type: "变量操作方法",
  参数名: 值,
  参数名: 值,
});
```

### Mutation 常量类型

- 定义常量

  \src\store\mutation-types.js

  ```js
  export const 变量操作方法 = "变量操作方法";
  ```

- 定义变量操作方法

  \src\store\index.js

  ```js
  import { createStore } from "vuex";
  import { 变量操作方法 } from "./mutation-types";

  const store = createStore({
    state() {
      return {
        变量名: 值,
      };
    },
    mutations: {
      变量操作方法(state) {
        state.变量名 = 值;
      },
    },
  });

  export default store;
  ```

- 提交事件

  ```js
  import { 变量操作方法 } from "../store/mutation-types";

  this.$store.commit("变量操作方法");
  ```

### mapMutation 辅助函数

如果有很多个 Mutation 都需要使用的话，通过`$store.commit("变量操作方法")`表达式过长，可以使用 mapMutation 的辅助函数，可以使得**Mutation 可以直接使用**。

```html
<button @click="变量操作方法">按钮</button>
```

#### Option API

- 数组类型

  ```js
  import { mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations(["变量操作方法", "变量操作方法"]),
    },
  };
  ```

- 对象类型

  ```js
  import { mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations({
        变量操作方法别名: "变量操作方法",
      }),
    },
  };
  ```

#### Composition API

- 数组类型

  ```js
  import { mapMutations } from "vuex";

  export default {
    setup() {
      const storeMutations = mapMutations(["变量操作方法", "变量操作方法"]);
      return { ...storeMutations };
    },
  };
  ```

- 对象类型

  ```js
  import { mapMutations } from "vuex";

  export default {
    setup() {
      const storeMutations = mapMutations({
        变量操作方法别名: "变量操作方法",
      });
      return { ...storeMutations };
    },
  };
  ```

## Actions

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态；
- Action 可以包含任意异步操作；

### 基本使用

- 创建 \src\store\index.js

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    state() {
      return {
        变量: 值,
      };
    },

    mutations: {
      变量操作方法(state, payload) {
        state.变量 = payload;
      },
    },

    actions: {
      Actions名(context) {
        // 可在此进行网络请求再调用 mutation
        context.commit("变量操作方法");
      },
    },
  });

  export default store;
  ```

- 分发

  ```js
  export default {
    mounted() {
      this.$store.dispatch("Actions名");
    },
  };
  ```

### 携带参数

- 传递参数(分发)

  ```js
  this.$store.dispatch("Actions名", { 参数名: 值, 参数名: 值 });
  ```

- 接收参数

  ```js
  import { createStore } from "vuex";

  const store = createStore({
    state() {
      return {
        变量: 值,
      };
    },

    mutations: {
      变量操作方法(state, payload) {
        state.变量 = payload;
      },
    },

    actions: {
      Actions名(context, payload) {
        // 可在此进行网络请求再调用 mutation
        console.log(payload.参数名);
        context.commit("变量操作方法");
      },
    },
  });

  export default store;
  ```

### 对象风格分发

```js
this.$store.dispatch({
  type: "Actions名",
  参数名: 值,
  参数名: 值,
});
```

### mapActions 辅助函数

如果有很多个 Action 都需要使用的话，通过`$store.dispatch("Actions名")`表达式过长，可以使用 mapActions 的辅助函数，可以使得**Action 可以直接使用**。

```html
<button @click="Actions名">按钮</button>
```

#### Option API

- 数组类型

  ```js
  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions(["Actions名", "Actions名"]),
    },
  };
  ```

- 对象类型

  ```js
  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions({
        Actions别名: "Actions名",
      }),
    },
  };
  ```

#### Composition API

- 数组类型

  ```js
  import { mapActions } from "vuex";

  export default {
    setup() {
      const actions = mapActions(["Actions名", "Actions名"]);
      return { ...actions };
    },
  };
  ```

- 对象类型

  ```js
  import { mapActions } from "vuex";

  export default {
    setup() {
      const actions = mapActions({
        Actions别名: "Actions名",
      });
      return { ...actions };
    },
  };
  ```

## Modules

### Module 是什么？

- 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，store 对象就有可能变得相当臃肿；
- 为了解决以上问题，Vuex 允许将 store 分割成**模块（module）**；
- 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块；

### module 的命名空间

- 默认情况下，模块内部的 action 和 mutation 仍然是注册在**全局的命名空间**中：
  - 这样使得多个模块能够对同一个 action 或 mutation 作出响应；
  - Getter 同样也默认注册在全局命名空间，使用`$store.getters.getter名`进行访问；
- 如果希望模块具有更高的封装度和复用性，可以添加 `namespaced: true` 的方式使其成为带命名空间的模块：
  - 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名；

### 基本使用

- 新建 \src\store\models\模块名.js

  ```js
  const 模块名 = {
    namespaced: true,
    state() {
      return {
        变量名: 值,
      };
    },
    getters: {
      getter名(state) {
        return 1 + 1;
      },
    },
    mutations: {
      变量操作方法(state) {
        state.变量名 = 值;
      },
    },
    actions: {
      Actions名(context) {
        context.commit("变量操作方法");
      },
    },
  };

  export default 模块名;
  ```

- \src\index.js

  ```js
  import { createStore } from "vuex";
  import 模块名 from "./modules/模块名";

  const store = createStore({
    modules: {
      模块名,
    },
  });

  export default store;
  ```

- 使用

  ```html
  <template>
    <div>
      <h2>{{ $store.state.模块名.变量名 }}</h2>
      <h2>{{ $store.getters["模块名/getter名"] }}</h2>

      <button @click="btn1">+1</button>
      <button @click="btn2">+1</button>
    </div>
  </template>

  <script>
    export default {
      methods: {
        btn1() {
          this.$store.commit("模块名/变量操作方法");
        },
        btn2() {
          this.$store.dispatch("模块名/Action名");
        },
      },
    };
  </script>
  ```

### module 的辅助函数

#### Option API

- 通过完整的模块空间名称来查找

  ```js
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

  export default {
    computed: {
      ...mapState({
        变量别名: (state) => state.模块名.变量名,
      }),
      ...mapGetters({
        getter别名: "/模块名/getter名",
      }),
    },
    methods: {
      ...mapMutations({
        变量操作方法别名: "/模块名/变量操作方法",
      }),
      ...mapActions({
        Action别名: "/模块名/Action名",
      }),
    },
  };
  ```

- 第一个参数传入模块空间名称，后面写上要使用的属性；

  ```js
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

  export default {
    computed: {
      ...mapState("模块名", ["变量名"]),
      ...mapGetters("模块名", ["getter名"]),
    },
    methods: {
      ...mapMutations("模块名", ["变量操作方法"]),
      ...mapActions("模块名", ["Action名"]),
    },
  };
  ```

- 通过 createNamespacedHelpers 生成一个模块的辅助函数（推荐）

  ```js
  import { createNamespacedHelpers } from "vuex";

  const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
  } = createNamespacedHelpers("模块名");

  export default {
    computed: {
      ...mapState(["变量名"]),
      ...mapGetters(["getter名"]),
    },
    methods: {
      ...mapMutations(["变量操作方法"]),
      ...mapActions(["Action名"]),
    },
  };
  ```

#### Composition API

```js
import useState from "../hooks/useState";
import useGetters from "../hooks/useGetters";

const { mapMutations, mapActions } = createNamespacedHelpers("模块名");

export default {
  setup() {
    const state = useState("模块名", ["变量名"]);
    const getters = useGetters("模块名", ["getter名"]);
    const mutations = mapMutations(["变量操作方法"]);
    const actions = mapActions(["Action名"]);

    return { ...state, ...getters, ...actions, ...mutations };
  },
};
</script>
```
