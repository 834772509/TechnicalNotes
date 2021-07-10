# Router 路由

## 基本概念

### 路由的由来

- 说起路由你想起了什么？

  - 路由是一个网络工程里面的术语。
  - 路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动. --- 维基百科

- 路由器提供了两种机制: 路由和转送.

  - 路由是决定数据包从来源到目的地的路径.
  - 转送将输入端的数据转移到合适的输出端.

- 路由中有一个非常重要的概念叫路由表.

  - 路由表本质上就是一个映射表, 决定了数据包的指向.

- 路由的概念出现最早是在后端路由中实现的，原因是 web 的发展主要经历了这样一些阶段：
  - 后端路由阶段；
  - 前后端分离阶段；
  - 单页面富应用（SPA）；

### 阶段一：后端路由阶段

- 早期的网站开发整个 HTML 页面是由服务器来渲染的.

  - 服务器直接生产渲染好对应的 HTML 页面, 返回给客户端进行展示.

- 但是, 一个网站, 这么多页面服务器如何处理呢?

  - 一个页面有自己对应的网址, 也就是 URL.
  - URL 会发送到服务器, 服务器会通过正则对该 URL 进行匹配, 并且最后交给一个 Controller 进行处理.
  - Controller 进行各种处理, 最终生成 HTML 或者数据, 返回给前端.
  - 这就完成了一个 IO 操作.

- 上面的这种操作, 就是后端路由.

  - 当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户顿.
  - 这种情况下渲染好的页面, 不需要单独加载任何的 js 和 css, 可以直接交给浏览器展示, 这样也有利于 SEO 的优化.

- 后端路由的缺点:
  - 一种情况是整个页面的模块由后端人员来编写和维护的.
  - 另一种情况是前端开发人员如果要开发页面, 需要通过 PHP 和 Java 等语言来编写页面代码.
  - 而且通常情况下 HTML 代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.

### 阶段二：前后端分离阶段

- 前端渲染的理解：

  - 每次请求涉及到的静态资源都会从静态资源服务器获取；
  - 这些资源包括 HTML+CSS+JS，然后在前端对这些请求回来的资源进行渲染；
  - 需要注意的是，客户端的每一次请求，都会从静态资源服务器请求文件；
  - 同时可以看到，和之前的后断路由不同，这时后端只是负责提供 API 了；

- 前后端分离阶段：
  - 随着 Ajax 的出现, 有了前后端分离的开发模式；
  - 后端只提供 API 来返回数据，前端通过 Ajax 获取数据，并且可以通过 JavaScript 将数据渲染到页面中；
  - 这样做最大的优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上；
  - 并且当移动端(iOS/Android)出现后，后端不需要进行任何处理，依然使用之前的一套 API 即可；
  - 目前很多的网站依然采用这种模式开发（jQuery 开发模式）；

### 阶段三：单页面富应用（SPA）

- 单页面富应用的理解：

  - 单页面富应用的英文是 single-page application，简称 SPA；
  - 整个 Web 应用只有实际上只有一个页面，当 URL 发生改变时，并不会从服务器请求新的静态资源；
  - 而是通过 JavaScript 监听 URL 的改变，并且根据 URL 的不同去渲染新的页面；

- 如何可以应用 URL 和渲染的页面呢？前端路由
  - 前端路由维护着 URL 和渲染页面的映射关系；
  - 路由可以根据不同的 URL，最终让我们的框架（比如 Vue、React、Angular）去渲染不同的组件；
  - 最终我们在页面上看到的实际就是渲染的一个个组件页面；

### 前端路由的原理

- 前端路由是如何做到 URL 和内容进行映射呢？监听 URL 的改变。

- URL 发生变化，同时不引起页面的刷新有两个办法：

  - 通过 URL 的 hash 改变 URL；
  - 通过 HTML5 中的 history 模式修改 URL；

- 当监听到 URL 发生变化时，我们可以通过自己判断当前的 URL，决定到底渲染什么样的内容。

## 安装

`npm install vue-router@4`

## 基本使用

### 创建路由页面

\src\pages\页面名\页面名.vue

```html
<template>
  <div>
    <h2>页面名</h2>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
```

### 配置路由映射

\src\router\index.js

```js
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// 普通加载
import 页面名 from "../pages/页面名/页面名.vue";

// 懒加载
const 页面名 = () => import("../pages/页面名/页面名.vue");

// 配置映射关系
const routes = [
  {
    path: "/",
    redirect: "/路径",
  },
  // 基本配置
  {
    path: "/路径",
    component: 页面名,
    }
  },
  // 其他属性
  {
    // 路由记录独一无二的名称
    name: "页面名"
    path: "/路径",
    component: 页面名,
    // 自定义的数据
    meta: {
      属性名: 值,
    }
  }
];

// 创建路由对象
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
```

### 展示路由

\src\App.vue

```html
<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
```

## 路由标签

### router-view 标签

`<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。

因为它也是个组件，所以可以配合 `<transition>` 和 `<keep-alive>` 使用。如果两个结合一起用，要确保在内层使用 `<keep-alive>`：

```html
<router-view v-slot="props">
  <transition name="transition1">
    <keep-alive>
      <component :is="props.Component"></component>
    </keep-alive>
  </transition>
</router-view>
```

### router-link 标签

router-link 标签 会自动渲染为 a 标签

- 基本使用

  ```js
  <router-link to="/路径">链接</router-link>
  ```

- 渲染为其他元素

  vue-router4.x 起移除了`tag`属性，如需将 router-link 标签渲染为其他元素可使用插槽

  ```html
  <router-link>
    <标签名>内容</标签名>
  </router-link>
  ```

- v-slot

  ```html
  <router-link to="/路径" v-slot="props">
    <!-- 需要跳转的链接 -->
    <h2>{{ props.href }}</h2>
    <!-- route对象 -->
    <h2>{{ props.route }}</h2>
    <!-- 导航函数 -->
    <h2 @click="props.navigate">内容</h2>
    <!-- 是否处于活跃状态 -->
    <h2>{{ props.isActive }}</h2>
    <!-- 是否处于精确的活跃状态 -->
    <h2>{{ props.isExActive }}</h2>
  </router-link>
  ```

- router-link 属性:

  - `to`：设置路由路径，是一个字符串，或者是一个对象
  - `replace`: 设置 replace 属性的话，当点击时，会调用 `router.replace()`，而不是 `router.push()`；
  - `active-class`：设置激活 a 元素后应用的 class，默认是`router-link-active`
  - `exact-active-class`：链接精准激活时，应用于渲染的 `<a>` 的 class，默认是 `router-link-exact-active`；

## 动态路由基本匹配

很多时候需要将给 定匹配模式的路由映射到同一个组件：

- 例如，可能有一个 User 组件，它应该对所有用户进行渲染，但是用户的 ID 是不同的；
- 在 Vue Router 中，可以在路径中使用一个动态字段来实现，称之为 **路径参数**；

### 配置路由

\src\router\index.js

```js
const routes = [
  {
    path: "/路径/:参数名",
    component: 页面组件,
  },
];
```

### 获取动态路由的值

- Template

  ```html
  <h3>{{ $route.params.参数名 }}</h3>
  ```

- Options API

  ```js
  console.log(this.$route.params.参数名);
  ```

- Composition API

  ```js
  import { useRoute } from "vue-router";

  export default {
    setup() {
      const route = useRoute();
      console.log(route.params.参数名);
    },
  };
  ```

### NotFound

对于没有匹配到的路由，通常会匹配到固定的某个页面

- 比如 NotFound 的错误页面中，可编写一个动态路由用于匹配所有的页面

:: tip 提示
如果在`/:pathMatch(.*)`后面加了一个`*`，那么表示在解析的时候，是否将`/`解析为数组。
:::

- \src\router\index.js

  ```js
  const NotFound = () => import("../pages/NotFound.vue");

  const routes = [
    {
      path: "/:pathMatch(.*)",
      component: NotFound,
    },
  ];
  ```

- 获取动态路由的值

  ```html
  <h3>{{ $route.params.pathMatch }}</h3>
  ```

## 嵌套路由

路由的嵌套是什么？

- 目前匹配的 Home、About 等都属于底层路由，在它们之间可以来回进行切换；
- 但是，Home 页面本身，也可能会在多个组件之间来回切换：
- 比如 Home 中包括 Product、Message，它们可以在 Home 内部来回切换；
- 这个时候需要使用嵌套路由，在 Home 中也使用 router-view 来占位之后需要渲染的组件；

\src\router\index.js

```js
const 页面组件 = () => import("../pages/页面组件/页面组件.vue");
const 子页面组件 = () => import("../pages/页面组件/pages/子页面组件.vue");

const routes = [
  {
    path: "/路径",
    component: 页面组件,
    children: [
      // 默认路径
      {
        path: "",
        redirect: "/路径/子路径",
      },
      {
        path: "子路径",
        component: 子页面组件,
      },
    ],
  },
];
```

## 编程式导航

有时候希望通过代码来完成页面的跳转，比如点击的是一个按钮。

### push

使用 push 的特点是压入一个新的页面，那么在用户点击返回时，上一个页面还可以回退。

::: tip 提示
使用`$route.query.参数名`可获取 query 参数值
:::

- Options API

  ```js
  // 基本使用
  this.$router.push("/路径");

  // 传入对象
  this.$router.push({
    path: "/路径",
    query: {
      参数名: "值",
    },
  });
  ```

- Composition API

  ```js
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const router = useRouter();

      // 基本使用
      router.push("/路径");

      // 传入对象
      router.push({
        path: "/路径",
        query: {
          参数名: "值",
        },
      });
    },
  };
  ```

### replace

如果希望当前页面是一个替换操作，那么可以使用 replace。

::: tip 提示
使用`$route.query.参数名`可获取 query 参数值
:::

- Options API

  ```js
  // 基本使用
  this.$router.replace("/路径");

  // 传入对象
  this.$router.replace({
    path: "/路径",
    query: {
      参数名: "值",
    },
  });
  ```

- Composition API

  ```js
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const router = useRouter();

      // 基本使用
      router.replace("/路径");

      // 传入对象
      router.replace({
        path: "/路径",
        query: {
          参数名: "值",
        },
      });
    },
  };
  ```

### 页面的前进后退

- go

  ```js
  // 向前移动一条记录，与 router.forward() 相同
  this.$router.go(1);

  // 返回一条记录，与 router.back() 相同
  this.$router.go(-1);

  // 前进三条记录
  this.$router.go(3);
  ```

- 后退

  通过调用 history.back() 回溯历史。相当于 `router.go(-1)`；

  ```js
  this.$router.back();
  ```

- 前进

  通过调用 history.forward() 在历史中前进。相当于 `router.go(1)`；

  ```js
  this.$router.back();
  ```

## 动态配置路由

### 动态增加路由

- 增加一级路由

  \src\router\index.js

  ```js
  router.addRoute({
    path: "/路径",
    component: 页面组件,
  });
  ```

- 增加二级路由

  \src\router\index.js

  ```js
  router.addRoute("一级路由name", {
    path: "路径",
    component: 二级页面组件,
  });
  ```

### 动态删除路由

- 增加 name 相同的路由

  ```js
  router.addRoute({
    name: "路由名称",
    path: "路径",
    component: 页面组件,
  });
  ```

- 通过 removeRoute 方法，传入路由的名称；

  ```js
  router.removeRoute("路由name");
  ```

- 通过 addRoute 方法的返回值回调；

  ```js
  const removeRoute = router.addRoute({
    name: "路由名称",
    path: "路径",
    component: 页面组件,
  });

  removeRoute();
  ```

### 判断路由存在

```js
router.hasRoute();
```

### 获取所有路由记录

```js
router.getRoutes();
```

## 导航守卫

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。

- 比如需要一个功能，只有登录后才能看到其他页面

\src\router\index.js

```js
router.beforeEach((to, from) => {
  return true;
});
```

- 参数：
  1. to：即将进入的路由 Route 对象；
  2. from：即将离开的路由 Route 对象；
- 返回值：
  - false：取消当前导航；
  - 不返回或者 undefined：进行默认导航；
  - 返回一个路由地址：
    - 可以是一个 string 类型的路径；
    - 可以是一个对象，对象中包含 path、query、params 等信息；
