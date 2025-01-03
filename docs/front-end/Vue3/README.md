# Vue3

Vue 是-套用于构建用户界面的渐进式框架。

- 全程是 Vue.js 或者 Vuejs
- 渐进式框架：表示可以在项目中一点点来引入和使用 Vue ,而不一定需要全部使用 Vue 来开发整个项目

## Visual Studio Code 插件

- Volar: Vue 支持
- Vue VSCode Snippets: Vue 代码片段(使用`vbase-css`初始化)

## 脚手架

**脚手架让项目从搭建到开发,再到部署，整个流程变得快速和便捷**

编程中提到的脚手架 (Scaffold) , 其实是一种工具，帮我们可以快速生成项目的工程化结构，并且已经将所需的工程环境配置好

- 每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的。既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生产基本的工程化模板
- 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可
- 这样也可以间接保证项目的基本机构一致性，方便后期的维护

### 依赖

安装 Node.js：[Node.js 官网](https://nodejs.org/zh-cn/)

### create-vue

create-vue 基于 Vite。Vite 开箱即用地支持 Vue CLI 项目中的大多数配置约定，并且由于其极快的启动和热模块更换速度，提供了明显更好的开发体验。

- 创建项目

  - 创建 Vue3 项目： `npm init vue@3`
  - 创建 Vue2 项目：`npm init vue@2`

### vue-cli

Vue CLI 基于 webpack

1. 安装

- 全局安装：`npm install @vue/cli -g`
- 升级 CLI: `npm update @vue-cli -g`

2. 创建项目

- 可视化创建项目： `vue ui`
- 命令行创建项目：`vue create 项目名称`

  - `Router`: 路由
  - `Unit Tests`: 单元测试
  - `Linter/Formatter`: 代码规范检测

3. Vue CLI 运行原理

![Vue-cli运行原理](./img/Vue-cli运行原理.png)

## 基本概念

### 命令式编程和函数式编程

- 命令式编程：一步一步命令。
- 函数式编程：先拿到数据，然后再处理。关注的是“what to do”，由框架（机器）完成“how”的过程。

## 模板语法

- React 的开发模式:

  - React 使用的 jsx ,所以对应的代码都是编写的类似于 js 的一种语法;
  - 之后通过 Babel 将 jsx 编译成 React.createElement 函数调用;

- Vue 支持 jsx 的开发模式:
  - 但是大多数情况下,使用基于 HTML 的模板语法;
  - 在模板中,允许开发者以声明式的方式将 DOM 和底层组件实例的数据绑定在一起;
  - 在底层的实现中, Vue 将模板编译成虚拟 DOM 渲染函数,这个我会在后续给大家讲到;

### Mustache 双大括号语法

如果希望把数据显示到模板( template )中,使用最多的语法是"Mustache" 语法(双大括号)的文本插值。

- 并且我们前端提到过，data 返回的对象是有添加到 Vue 的响应式系统中;
- 当**data 中的数据发生改变时**,对应的内容也会发生更新。
- 当然, Mustache 中不仅仅可以是 data 中的属性,也可以是一个 JavaScript 的表达式。

```html
<!-- Mustache的基本使用 -->
<h2>{{message}}</h2>
<!-- 表达式 -->
<h2>{{counter * 10}}</h2>
<h2>{{message.split(" ").reverse().join()}}</h2>
<!-- 调用函数、使用计算属性 -->
<h2>{{函数名()}}</h2>
<!-- 三元运算符 -->
<h2>{{isShow ? "哈哈哈" : ""}}</h2>
```

::: warning 注意
以下为错误语法
:::

```html
<h2>{{var name="abc"}}</h2>
<h2>{{if(isShow {return "哈哈哈"})}}</h2>
```

### v-once 指令

v-once 用于指定元素或者组件**只渲染一次**:

- 当数据发生变化时,**元素或者组件以及其所有的子元素**将视为**静态内容**并且跳过;
- 该指令可以用于**性能优化**;

```html
<h2 v-once>{{counter}}</h2>

<div v-once>
  <h2>{{counter}}</h2>
</div>
```

### v-test 指令

用于更新元素的 textContent

```html
<h2 v-text="message"></h2>
<!-- 等价于以下语法 -->
<h2>{{message}}</h2>
```

### v-html 指令

默认情况下,展示的内容本身是 html ,那么 vue 并不会对其进行特殊的解析。

- 如果希望这个内容被 Vue 可以解析出来,那么可以使用 v-html 来展示;

```html
<div v-html="msg"></div>

<script>
  Vue.createApp({
    data() {
      return {
        msg: "<span style='color: red; background: blue'>哈哈哈</span>",
      };
    },
  }).mount("#app");
</script>
```

### v-pre 指令

v-pre 用于跳过元素和它的子元素的编译过程,显示原始的 Mustache 标签:

- 跳过不需要编译的节点,加快编译的速度

```html
<!-- 显示 {{message}} -->
<h2 v-pre>{{message}}</h2>
```

### v-cloak 指令

这个指令保持在元素上直到关联组件实例结束编译。

- 和 CSS 规则如 `[v-cloak] { display: none }` 一起用时,这个指令可以隐藏未编译的 Mustache 标签直到组件实例准备完毕。

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>
<h2 v-cloak>{{message}}</h2>
```

### v-bind 指令

某些属性可以动态绑定，比如动态绑定 a 元素的 href 属性、动态绑定 img 元奈 src 属性;

- 缩写: `:`
- 预期: any (with argument) | Object (without argument)
- 参数: attrOrProp (optional)
- 修饰符: `.camel` -将 kebab-case attribute 名转换为 camelCase。
- 用法: 动态地绑定一个或多个 attribute ,或一个组件 prop 到表达式。

#### 使用 `v-bind` 绑定属性

```html
<!-- v-bind的基本使用 -->
<img v-bind:src="imgUrl" alt="" />
<a v-bind:href="link">百度一下</a>

<!-- v-bind语法糖 -->
<img :src="imgUrl" alt="" />
<a :href="link">百度一下</a>

<script>
  Vue.createApp({
    data() {
      return {
        imgUrl: "url",
        link: "https://www.baidu.com",
      };
    },
  }).mount("#app");
</script>
```

#### 绑定 Class

```html
<!-- 传入对象（根据布尔值决定是否绑定） -->
<h2 :class="{类名: 布尔值}"></h2>
<!-- 传入数组 -->
<h2 :class="[类名1,类名2]"></h2>
<!-- 对象、数组混用 -->
<h2 :class="[{类名 : 布尔值},类名]"></h2>
<!--传入函数 -->
<h2 :class="getclass()"></h2>
```

#### 绑定 style

可以利用`v-bind:style`来绑定一些 CSS 内联样式:

- 这次因为某些样式需要根据数据动态来决定;
- 比如某段文字的颜色，大小等等;

CSS property 名可以用驼峰式(camelCase)或短横线分隔(kebab-case ,记得用引号括起来)来命名;

- 对象语法

  ```html
  <!-- 实际值 -->
  <h2 :style="{属性: '值'}"></h2>
  <!-- 变量值 -->
  <h2 :style="{属性: 值}"></h2>
  ```

- 数组语法

  ```html
  <div :style="[styleObj,style2Obj]">哈哈哈</div>

  <script>
    Vue.createApp({
      data() {
        return {
          styleObj: {
            color: "red",
            fontSize: "30px",
          },
          style2Obj: {
            textDecoration: "underline",
          },
        };
      },
    }).mount("#app");
  </script>
  ```

#### 动态绑定属性

在某些情况下,属性的名称可能也不是固定的:

- 无论绑定 src、href. class、 style,属性名称都是固定的;
- 如果属性名称不是固定的,可以使用`:[属性名]="值"`的格式来定义;
- 这种绑定的方式称之为`动态绑定属性`;

- 动态绑定属性

  ```html
  <div :[name]="value"></div>

  <script>
    Vue.createApp({
      data() {
        return {
          info: {
            name: "why",
            age: 18,
            height: 1.88,
          },
        };
      },
    }).mount("#app");
  </script>
  ```

- 动态绑定对象

  ```html
  <div v-bind="info">哈哈哈</div>
  <!-- 语法糖（阅读性较差不推荐） -->
  <div :="info">哈哈哈</div>

  <script>
    Vue.createApp({
      data() {
        return {
          info: {
            name: "why",
            age: 18,
            height: 1.88,
          },
        };
      },
    }).mount("#app");
  </script>
  ```

### v-on 指令

- 事件绑定: `<组件 @事件名="事件方法()"></组件>`

  ```html
  <!-- 基本使用 -->
  <button v-on:click="事件方法()">按钮</button>
  <!-- 语法糖 -->
  <button @click="事件方法()">按钮</button>
  ```

- 绑定表达式

  ```html
  <button @click="counter++">{{counter}}</button>
  ```

- 绑定对象

  ```html
  <div class="area" v-on="{click: btnClick, mousemove: mouseMove}"></div>
  <div class="area" @="{click: btnClick, mousemove: mouseMove}"></div>
  ```

- 参数传递

  - 如果该方法不需要额外参数,那么方法后的()可以不添加。
    - 注意: 如果方法本身中有一个参数,那么会默认将原生事件 event 参数传递进去
  - 如果需要同时传入某个参数,同时需要 event 时,可以通过 **$event** 传入事件。

  ```html
  <!-- 默认传入event对象，可以在方法中获取 -->
  <button @click="btnClick1">按钮1</button>
  <!-- $event可以获取到事件发生时的事件对象 -->
  <button @click="btnClick2($event,'coderwhy')">按钮2</button>

  <script>
    Vue.createApp({
      methods: {
        btnClick1(event) {
          console.log(event);
        },
        btnClick2(event, name) {
          console.log(name, event);
        },
      },
    }).mount("#app");
  </script>
  ```

- 修饰符

  v-on 支持修饰符，修饰符相当于对事件进行了一些特殊的处理

  - .stop 修饰符，防止事件冒泡

    ```html
    <div @click="divClick">
      <button @click.stop="btnClick">按钮</button>
    </div>
    ```

  - .{keyAlias}，仅当事件是从特定键触发时才触发回调

    ```html
    <input type="text" @keyup.enter="事件名" />
    ```

### 条件渲染

#### v-if、v-else、v-else-if

`v-if`、`v-else`、`v-else-if` 用于根据条件来渲染某一块的内容:

- 这些内容只有在条件为 true 时,才会被渲染出来;
- 这三个指令与 JavaScript 的条件语句 if、else、 else if 类似;

::: tip 提示
`v-if`渲染原理：

- v-if 是惰性的;
- 当条件为`false`时,其判断的内容完全不会被渲染或者会被销毁掉;
- 当条件为`true`时,才会真正渲染条件块中的内容;
- 适合切换频率低的环境;

:::

- 基本使用

  true 为显现，false 为隐藏

  ```html
  <h2 v-if="true">内容</h2>
  ```

- 多个条件

  ```html
  <h2 v-if="变量 > 90">优秀</h2>
  <h2 v-else-if="变量 > 60">良好</h2>
  <h2 v-else>不及格</h2>
  ```

- 与`template`结合使用

  ```html
  <template v-if="true">
    <h2>哈哈哈</h2>
    <h2>哈哈哈</h2>
  </template>

  <template v-else>
    <h2>呵呵呵</h2>
    <h2>呵呵呵</h2>
  </template>
  ```

#### v-show

`v-show`元素无论是否需要显示到浏览器上,它的 DOM 实际都是有渲染的,只是通过 CSS 的 display 属性来进行切换。

- v-show 不支持 `template`，不可以和 `v-else`一起使用;
- 适合切换频率高的环境;

```html
<h2 v-show="true">哈哈哈</h2>
```

### 列表渲染

v-for 的基本格式是`item in 数组`:

  - 数组通常是来自`data`或者`prop`,也可以是其他方式;
  - `item`是给每项元素起的一个别名,这个别名可以自定义;
  - `(item, index)`中括号可省，但便于阅读最好加上;
  - `in`也可使用`of`，更接近 JavaSript 迭代器语法;

- 基本使用

  ```html
  <li v-for="item in 数组">{{item}}</li>
  <!-- 在遍历的过程中获取索引值 -->
  <li v-for="(item, index) in 数组">{{index}}: {{item}}</li>
  ```

- 绑定 key

  绑定`key`用于更高效的更新虚拟 DOM 渲染。注意：`key`不能重复。

  ```html
  <li v-for="item in 数组" :key="item">{{item}}</li>
  ```

- 遍历对象

  ```html
  <li v-for="item in 对象">{{item}}</li>
  <!-- 在遍历的过程中获取key和value及index -->
  <li v-for="(value, key, index) in 对象">{{key}}: {{value}}</li>
  ```

- 遍历数字

  ```html
  <li v-for="item in 10">{{item}}</li>
  ```

- 与`template`结合使用

  使用`template`来对多个元素进行包裹,而不是使用`div`来完成

  ```html
  <ul>
    <template v-for="(value, key) in 对象">
      <li>{{key}}</li>
      <li>{{value}}</li>
    </template>
  </ul>
  ```

### v-model 指令

v-model 指令可以在表单 input、 textarea 以及 select 元素上创建双向数据绑定;
它会根据控件类型自动选取正确的方法来更新元素;

#### 绑定 text 文本框

```html
<input type="text" v-model="变量名" />
<h2>{{变量名}}</h2>
```

#### 绑定 textarea 多行输入框

```html
<textarea
  name="intro"
  id="intro"
  cols="30"
  rows="10"
  v-model="变量名"
></textarea>
<h2>intro: {{变量名}}</h2>
```

#### 绑定 checkbox 多选框

- 单选

  ```html
  <input id="组件id" type="checkbox" v-model="变量名" />
  <h2>是否选中: {{变量名}}</h2>
  ```

- 多选

  ```html
  <input id="多选框1" type="checkbox" v-model="变量名(数组)" value="多选框1" />
  <input id="多选框2" type="checkbox" v-model="变量名(数组)" value="多选框2" />
  ```

#### 绑定 radio 单选框

```html
<input id="组件id" type="radio" v-model="变量名" value="内容" />内容
```

#### 绑定 select 下拉框

```html
<select v-model="变量名">
  <option value="option1">选项1</option>
  <option value="option2">选项2</option>
</select>
<h2>{{变量名}}</h2>
```

#### v-model 修饰符

- lazy 修饰符

  - 默认情况下, v-model 在进行双向绑定时,绑定的是 input 事件, 那么会在每次内容输入后就将最新的值和绑定的属性进行同步;
  - 如果使用 lazy 修饰符,那么会将绑定的事件切换为 change 事件,只有在提交时(比如回车)才会触发;

  ```html
  <input type="text" v-model.lazy="变量名" />
  ```

- number 修饰符

  默认情况下，v-model 绑定的变量总是 String 类型，使用 number 修饰符可以转换为数字类型

  ```html
  <input type="text" v-model.number="变量名" />
  ```

- trim 修饰符

  如果要自动过滤用户输入的守卫空白字符,可以给 v-model 添加 trim 修饰符

  ```html
  <input type="text" v-model.trim="变量名" />
  ```

### 自定义指令

Vue 也允许自定义自己的指令，通常在某些情况下，需要对**DOM 元素进行底层操作**，这个时候就会用到自定义指令

- 指令的生命周期

- `created`：在绑定元素的 attribute 或事件监听器被应用之前调用；
- `beforeMount`：当指令第一次绑定到元素并且在挂载父组件之前调用；
- `mounted`：在绑定元素的父组件被挂载后调用；
- `beforeUpdate`：在更新包含组件的 VNode 之前调用；
- `updated`：在包含组件的 VNode 及其子组件的 VNode 更新后调用；
- `beforeUnmount`：在卸载绑定元素的父组件之前调用；
- `unmounted`：当指令与元素解除绑定且父组件已卸载时，只调用一次；

- 自定义局部指令：组件中通过 directives 选项，只能在当前组件中使用

  ```html
  <template>
    <div>
      <input type="text" v-自定义指令名 />
    </div>
  </template>

  <script>
    export default {
      directives: {
        自定义指令名: {
          mounted(el, bindings, vnode, preVnode) {},
        },
      },
    };
  </script>
  ```

  Composition API:

  ```html
  <script setup>
    const v自定义指令名 = {
      mounted: (el) => {},
    };
  </script>
  ```

- 自定义全局指令：app 的 directive 方法，可以在任意组件中被使用

  \src\main.js

  ```js
  const app = createApp(App);

  app.directive("自定义指令名", {
    mounted(el, bindings, vnode, preVnode) {
      el.focus();
    },
  });

  app.mount("#app");
  ```

- 参数

  ```js
  export default {
    directives: {
      自定义指令名: {
        mounted(el, bindings, vnode, preVnode) {
          console.log(bindings.value);
        },
      },
    },
  };
  ```

  ```html
  <input type="text" v-自定义指令名="'值'" />
  ```

- 修饰符

  ```js
  export default {
    directives: {
      自定义指令名: {
        mounted(el, bindings, vnode, preVnode) {
          console.log(bindings.modifiers);
        },
      },
    },
  };
  ```

  ```html
  <input type="text" v-自定义指令名.修饰符1.修饰符2 />
  ```

## 计算属性 computed

### 什么是计算属性？

- 对于任何包含响应式数据的复杂逻辑,都应该使用计算属性;
- 计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例;
- **计算属性是有缓存的， 当多次使用计算属性时，计算属性中的运算只会执行一次**;
- 如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算;

### 基本使用

::: warning 注意
计算属性调用时不能加括号入（如`firstName()`)
:::

```html
<template id="my-app">
  <h2>{{计算属性名}}</h2>
</template>

<script>
  Vue.createApp({
    data() {
      return {
        firstName: "kobe",
        lastName: "Bryant",
      };
    },
    computed: {
      计算属性名() {
        return this.firstName + " " + this.lastName;
      },
    },
  }).mount("#app");
</script>
```

### 传入对象

```JavaScript
Vue.createApp({
  data() {
    return {
      firstName: "kobe",
      lastName: "Bryant",
    };
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(value) {
        this.firstName = value;
      },
    },
  },
}).mount("#app");
```

## 侦听器 watch

### 什么是侦听器?

- 开发中在 data 返回的对象中定义了数据,这个数据通过插值语法等方式绑定到 template 中;
- 当数据变化时, template 会自动进行更新来显示最新的数据;
- 但是在某些情况下,希望在代码逻辑中监听某个数据的变化, 这个时候就需要用侦听器 watch 来完成了;

### 用法

- 选项: watch
- 类型: { [key: string]: string | Function | Object | Array}

### 基本用法

```html
<template id="my-app">
  <input type="text" v-model="变量名" />
</template>

<script>
  Vue.createApp({
    data() {
      return {
        变量名: "Hello World",
      };
    },
    watch: {
      变量名(newValue, oldValue) {
        console.log(`新值: ${newValue}, 旧值: ${oldValue}`);
      },
    },
  }).mount("#app");
</script>
```

### 配置选项

- 深度侦听

  默认情况下侦听器只会针对监听的数据本身的改变，内部发生的改变无法侦听（如直接修改对象内的数据）

  ```JavaScript
  Vue.createApp({
    watch: {
      变量名: {
        handler(newValue, oldValue) {
          console.log(`新值: ${newValue}, 旧值: ${oldValue}`);
        },
        deep: true,
      },
    },
    methods: {
      changeInfoName() {
        this.变量名.属性 = 值;
      },
    },
  }).mount("#app");
  ```

- 立即执行

  在进入页面时立即执行一次

  ```JavaScript
  Vue.createApp({
    watch: {
      变量名: {
        handler(newValue, oldValue) {
          console.log(`新值: ${newValue}, 旧值: ${oldValue}`);
        },
        immediate: true,
      },
    },
  }).mount("#app");
  ```

### 侦听器的其他方式

- \$watch

  ```JavaScript
  Vue.createApp({
    created() {
      const unwatch = this.$watch("变量名", (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }, {
        deep: true,
        immediate: true,
      });

      // 取消侦听
      unwatch();
    }
  }).mount("#app");
  ```

- 字符串

  ```JavaScript
  Vue.createApp({
    watch: {
      "变量名.属性名": function (newValue, oldValue) {
        console.log(newValue, oldValue);
      }
    },
  }).mount("#app");
  ```

## 组件

### 创建组件

::: tip 提示
代码片段: `vbase-css`
:::

组件名.vue

```Vue
<template>
  <div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
```

### 注册全局组件

```html
<template id="my-app">
  <!-- 使用组件 -->
  <组件名></组件名>
</template>

<!-- 定义组件内容 -->
<template id="组件名">
  <h2>组件名</h2>
</template>

<script>
  const App = {
    template: "#my-app",
  };
  const app = Vue.createApp(App);

  // 注册组件
  app.component("组件名", {
    template: "#组件名",
    data() {
      return {};
    },
    methods: {},
  });
  app.mount("#app");
</script>
```

### 注册局部组件

```html
<template id="my-app">
  <组件名></组件名>
</template>

<template id="组件名">
  <h2>组件名</h2>
</template>

<script>
  const 组件名 = {
    template: "#组件名"
  };

  const App = {
    template: "#my-app",
    components: {
      组件名
    },
  };
  Vue.createApp(App).mount("#app");
</script>
```

### 组件传参

::: tip 提示

- HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符；
- 这意味着当使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名；
- `.vue`中可以直接写驼峰命名法，因为`.vue`文件不被浏览器解析而是 vue-loader 解析；

:::

- 父传子

  在开发中很常见的就是父子组件之间通信，比如父组件有一些数据，需要子组件来进行展示：

  - 数组语法

    ```JavaScript
    export default {
      props: ["参数1", "参数2"],
    }
    ```

  - 对象语法

    ::: tip 提示
    支持验证的类型: `String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`
    :::

    ```JavaScript
    export default {
      props: {
        // 限制数据类型
        参数1: Array,
        参数2: {
          // 限制数据类型
          type: String,
          // 是否为必传参数
          require: true,
          // 默认值
          default: "默认值"
        },
        // 对象或数组的默认值必须从一个工厂函数获取
        参数3: {
          type: Object,
          default() {
            return { 键: "值" };
          },
        }
      },
    }
    ```

  - 使用组件传参

    ```HTML
    <组件名 参数1="" [参数2=""]...></组件名>
    ```

  - 非 Prop 的 Attribute

    **什么是非 Prop 的 Attribute？**

    当传递给一个组件某个属性，但是该属性并没有定义对应的 props 或者 emits 时，就称之为 非 Prop 的 Attribute；

    - 常见的包括 class、style、id 属性等；

    **Attribute 继承**
    当组件有单个根节点时，非 Prop 的 Attribute 将自动添加到根节点的 Attribute 中

    **禁用 Attribute 继承和多根节点**

    如果不希望组件的根元素继承 attribute，可以在组件中设置 `inheritAttrs: false`：

    - 禁用 attribute 继承的常见情况是需要将 attribute 应用于根元素之外的其他元素；
    - 可以通过 \$attrs 来访问所有的 非 props 的 attribute；

    ```html
    <组件名 class="参数"></组件名>
    ```

    ```html
    <template>
      <div>
        <h2 v-bind="$attrs">内容</h2>
      </div>
    </template>

    <script>
      export default {
        inheritAttrs: false,
      };
    </script>
    ```

- 子传父

  什么情况下子组件需要传递内容到父组件？

  - 当子组件有一些事件发生的时候，比如在组件中发生了点击，父组件需要切换内容；
  - 子组件有一些内容想要传递给父组件的时候

  - 子组件

    ```html
    <template>
      <div>
        <button @click="事件名"></button>
      </div>
    </template>

    <script>
      export default {
        // 数组语法(常用)
        emits: ["发射事件名"],
        // 对象语法(验证参数)
        emits: {
          发射事件名: (参数1, 参数2) => {
            return true;
          },
        },
        methods: {
          事件名() {
            this.$emit("发射事件名");
            // 携带参数
            this.$emit("发射事件名", "参数1", "参数2");
          },
        },
      };
    </script>
    ```

  - 父组件

    ```html
    <template>
      <div>
        <子组件 @发射事件名="事件名"></子组件>
      </div>
    </template>

    <script>
    export default {
      methods: {
        事件名() {

        },
        事件名(参数) {

        },
      },
    };
    </script>
    ```

- 非父子组件通信

  比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容；

  - 在这种情况下，如果仍然将 props 沿着组件链逐级传递下去，就会非常的麻烦；

  对于这种情况下，可以使用 Provide 和 Inject ：

  - 无论层级结构有多深，父组件都可以作为其所有子组件的**依赖提供者**；
  - 父组件有一个 provide 选项来提供数据；
  - 子组件有一个 inject 选项来开始使用这些数据；

  - 父组件

    ```html
    <script>
      import { computed } from "vue";

      export default {
        provide: {
          return {
            参数名: 值,
            参数名: this.变量名,
            // 响应式
            参数名: computed(() => this.变量名),
          }
        },
      };
    </script>
    ```

  - 子孙组件

    ```html
    <template>
      <div>
        <h2>{{参数名}}</h2>
        <h2>{{参数名}}</h2>
        <!-- 响应式 -->
        <h2>{{参数名.value}}</h2>
      </div>
    </template>

    <script>
      export default {
        inject: ["参数名", "参数名", "参数名"],
      };
    </script>
    ```

### 事件总线 mitt 库

Vue3 从实例中移除了 $on、$off 和 \$once 方法，所以如果希望继续使用全局事件总线，要通过第三方的库：

- Vue3 官方有推荐一些库，例如 mitt 或 tiny-emitter；

- 安装 mitt: `npm install mitt`

- 封装事件总线工具

  \utils\eventbus.js

  ```js
  import mitt from "mitt";

  const emitter = mitt();
  export default emitter;
  ```

- 触发事件

```html
<template>
  <div>
    <button @click="btnClick">触发事件</button>
  </div>
</template>

<script>
  import emmiter from "./utils/eventbus";

  export default {
    methods: {
      btnClick() {
        emmiter.emit("事件名", { 参数名: 值, 参数名: 值 });
      },
    },
  };
</script>

<style scoped></style>
```

- 监听事件

  ```html
  <script>
    import emmiter from "./utils/eventbus";

    export default {
      created() {
        emmiter.on("事件名", (args) => {
          console.log(args);
        });
      },
    };
  </script>
  ```

- 取消监听

  - 取消所有监听: `emmiter.all.clear();`
  - 取消指定监听:

    ```js
    function 函数名() {}
    emmiter.on("事件名", 函数名);
    emmiter.off("事件名", 函数名);
    ```

### 动态组件

动态组件是使用 component 组件，通过一个特殊的 attribute is 来实现。

- 基本使用

  ```html
  <template>
    <div>
      <compontent is="组件名" 参数="值"></compontent>
    </div>
  </template>
  ```

- keep-alive

  keep-alive 用于保存组件的状态，默认情况下，在切换组件后，组件会被销毁掉，再次回来时会重新创建组件。

  ```html
  <keep-alive>
    <compontent is="组件名" 参数="值"></compontent>
  </keep-alive>
  ```

  keep-alive 属性

  - `include` - string | RegExp | Array。只有名称匹配的组件会被缓存；

    ```html
    <keep-alive include="组件名,组件名"></keep-alive>
    ```

  - `exclude` - string | RegExp | Array。任何名称匹配的组件都不会被缓存；

    ```html
    <keep-alive include="组件名,组件名"></keep-alive>
    ```

  - `max` - number | string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁；

### 异步组件

如果项目过大了，对于某些组件希望通过异步的方式来进行加载（目的是可以对其进行分包处理），那么 Vue 中给提供了一个函数：`defineAsyncComponent`

- 基本使用

  ```js
  import { defineAsyncComponent } from "vue";

  const 组件名 = defineAsyncComponent(() => import("./组件路径"));
  ```

- 传入对象(不常用)

  ```js
  import { defineAsyncComponent } from "vue";

  const AsyncCategory = defineAsyncComponent({
    loader: () => import("./组件路径"),
    // 显示Loading组件
    loadingComonent: Loading,
    // 显示Loading组件之前等待时间
    delay: 2000,
    /**
     * @param {*} error 错误信息对象
     * @param {*} retry 函数，调用retry尝试重新加载
     * @param {*} fail  函数，指示加载程序结束退出
     * @param {*} attempt 允许的最大重试次数
     */
    onError: function (error, retry, fail, attempt) {},
  });
  ```

### Suspense

Suspense 是一个内置的全局组件，该组件有两个插槽：

- `default`：如果 default 可以显示，那么显示 default 的内容；
- `fallback`：如果 default 无法显示，那么会显示 fallback 插槽的内容

```html
<suspense>
  <template #default>内容1</template>
  <template #fallback>内容2</template>
</suspense>
```

### 组件的 v-model

vue 支持在组件上使用 v-model：

- `<组件名 :v-model="message"></组件名>`
  相当于: `<组件名 :model-value="message" @update:model-value="message = $event"></组件名>`

- 绑定单个属性

  ```html
  <组件名 v-model="变量名"></组件名>
  ```

  ```html
  <template>
    <div>
      <!-- 默认绑定个事件处理 -->
      <button @click="btnClick">按钮</button>

      <!-- 通过input -->
      <input type="text" v-model="value" />
    </div>
  </template>

  <script>
    export default {
      props: {
        modelValue: String,
      },
      emits: ["update:modelValue"],
      computed: {
        value: {
          set(value) {
            this.$emit("update:modelValue", value);
          },
          get() {
            return this.modelValue;
          },
        },
      },
      methods: {
        btnClick(event) {
          this.$emit("update:modelValue", event.target.value);
        },
      },
    };
  </script>
  ```

- 绑定多个属性

  ```html
  <组件名 v-model="变量名" v-model:属性名="变量名"></组件名>
  ```

  ```html
  <template>
    <div>
      <input type="text" v-model="value" />
      <input type="text" v-model="属性名" />
    </div>
  </template>

  <script>
    export default {
      props: {
        modelValue: String,
        属性名: String,
      },
      emits: ["update:modelValue", "update:属性名"],
      computed: {
        value: {
          set(value) {
            this.$emit("update:modelValue", value);
          },
          get() {
            return this.modelValue;
          },
        },
        属性名: {
          set(value) {
            this.$emit("update:属性名", value);
          },
          get() {
            return this.属性名;
          },
        },
      },
    };
  </script>
  ```

### Teleport

Teleport 是一个 Vue 提供的内置组件，类似于 react 的 Portals，可以将组件挂载到 vue app 的其他位置。它有两个属性：

- `to`：指定将其中的内容移动到的目标元素，可以使用选择器；
- `disabled`：是否禁用 teleport 的功能；

```html
<template>
  <div>
    <teleport to="#挂载ID名">
      <h2>内容</h2>
    </teleport>
  </div>
</template>
```

index.html

```html
<body>
  <div id="挂载ID名"></div>
</body>
```

## 插槽

- 插槽的使用过程其实是**抽取共性、预留不同**；
- 会将**共同的元素、内容依然在组件内**进行封装；
- 同时会将**不同的元素使用 slot 作为占位**，让外部决定到底显示什么样的元素；

### 基本使用

- 父组件

  ```html
  <template>
    <div>
      <子组件>插槽内容</子组件>
    </div>
  </template>
  ```

- 子组件

  ```html
  <template>
    <div>
      <h2>子组件</h2>
      <slot>插槽默认内容</slot>
    </div>
  </template>
  ```

### 具名插槽

具名插槽顾名思义就是给插槽起一个名字，`<slot>`元素有一个特殊的 attribute：name；

::: tip 提示
一个不带 name 的 slot，会带有隐含的名字 default；
:::

- 父组件

  ```html
  <template>
    <div>
      <子组件>
        <template v-slot:插槽名称1>插槽内容</template>
        <!-- 缩写 -->
        <template #插槽名称2>插槽内容</template>
      </子组件>
    </div>
  </template>
  ```

- 子组件

  ```html
  <template>
    <div>
      <slot name="插槽名称1"></slot>
      <slot name="插槽名称2"></slot>
    </div>
  </template>
  ```

### 动态插槽名

可以通过 v-slot:[dynamicSlotName]方式动态绑定一个名称

- 父组件

  ```html
  <template>
    <div>
      <子组件 :name="name">
        <template v-slot:[name]>插槽内容</template>
      </子组件>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          name: "插槽名",
        };
      },
    };
  </script>
  ```

- 子组件

  ```html
  <template>
    <div>
      <slot :name="name"></slot>
    </div>
  </template>

  <script>
    export default {
      props: {
        name: String,
      },
    };
  </script>
  ```

### 作用域插槽

如果希望插槽可以访问到子组件中的内容

- 当一个组件被用来渲染一个数组元素时，使用插槽，并且希望插槽中没有显示每项的内容；

- 父组件

  ::: tip 提示
  `slotProps`可以自由命名
  :::

  ```html
  <template>
    <div>
      <子组件 :参数="变量名">
        <template v-slot="slotProps">
          <button>{{slotProps.index}}-{{slotProps.item}}</button>
        </template>
      </子组件>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        变量名: ["why", "kobe", "james", "curry"],
      };
    },
  };
  </script>
  ```

- 子组件

  ```html
  <template>
    <div>
      <template v-for="(item, index) in 参数" :key="item">
        <slot :item="item" :index="index"></slot>
      </template>
    </div>
  </template>

  <script>
    export default {
      props: {
        参数: {
          type: Array,
          default: () => [],
        },
      },
    };
  </script>
  ```

### 独占默认插槽的缩写

如果插槽是默认插槽 default，那么在使用的时候可以简写

- 如果有默认插槽和具名插槽，那么按照完整的 template 来编写；
- 只要出现多个插槽，请始终为所有的插槽使用完整的基于 `<template>` 的语法；

```html
<组件名 v-slot="slotProps">插槽内容</组件名>
```

## 引用元素和组件

::: warning 注意
Vue3 中已经移除了`$children`的属性，所以不可以使用了
:::

### Ref

某些情况下，在组件中需要直接获取到元素对象或者子组件实例：

- 在 Vue 开发中**不推荐进行 DOM 操作**；
- 这个时候，可以**给元素或者组件绑定一个 ref 的 attribute 属性**

- 绑定到元素

  ```html
  <h2 ref="ref名">内容</h2>
  ```

  使用: `this.$refs.ref名`

- 绑定到组件实例

  ```html
  <template>
    <div>
      <组件名 ref="ref名"></组件名>
      <button @click="btnClick">获取元素</button>
    </div>
  </template>

  <script>
  export default {
    methods: {
      btnClick() {
        console.log(this.$refs.ref名);
        // 获取组件根元素
        console.log(this.$refs.ref名.$el);
        // 获取组件变量
        console.log(this.$refs.ref名.变量名);
        // 调用组件方法
        this.$refs.ref名.方法名();
      },
    },
  };
  </script>
  ```

### parent

`$parent`用于访问父元素

```html
<template>
  <button @click="getParentAndRoot">获取父组件和根组件</button>
</template>

<script>
  export default {
    methods: {
      getParentAndRoot() {
        console.log(this.$parent);
      },
    },
  };
</script>
```

### root

`$root`用于访问根元素

```html
<template>
  <button @click="getParentAndRoot">获取根组件</button>
</template>

<script>
  export default {
    methods: {
      getParentAndRoot() {
        console.log(this.$root);
      },
    },
  };
</script>
```

## 生命周期

### 什么是生命周期？

- 每个组件都可能会经历从创建、挂载、更新、卸载等一系列的过程；
- 在这个过程中的某一个阶段，用于可能会想要添加一些属于自己的代码逻辑（比如组件创建完后就请求一些服务器数据）；
- 但是如何可以知道目前组件正在哪一个过程？Vue 提供了组件的生命周期函数；

### 生命周期函数

- 生命周期函数是一些钩子函数，在某个时间会被 Vue 源码内部进行回调；
- 通过对生命周期函数的回调，可以知道目前组件正在经历什么阶段；
- 那么就可以在该生命周期中编写属于自己的逻辑代码了；

### 生命周期流程

![生命周期图示](./img/生命周期图示.svg)

```js
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
```

### 缓存组件的生命周期

对于缓存的组件来说，再次进入时，不会执行 created 或者 mounted 等生命周期函数：

- 但是有时候确实希望监听到何时重新进入到了组件，何时离开了组件；
- 这个时候可以使用**activated**和**deactivated**这两个生命周期钩子函数来监听；

```js
export default {
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
```

### nextTick

官方解释：将回调推迟到下一个 DOM 更新周期之后执行，在更改了一些数据以等待 DOM 更新后立即使用它。

比如有下面的需求 ∶

- 点击一个按钮，会修改在 h2 中显示的 message，message 被修改后，获取 h2 的高度﹔

有三种实现方式:

1. 在点击按钮后立即获取到 h2 的高度（错误的做法)
2. 在 updated 生命周期函数中获取 h2 的高度（但是其他数据更新，也会执行该操作)
3. 使用 nexttick 函数;

```js
nextTick(() => {
  console.log("DOM更新");
});
```

## 动画

Vue 中为我们提供一些内置组件和对应的 API 来完成动画，利用它们可以方便的实现过渡动画效果；

### Transition 组件的原理

当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：

1. 自动嗅探目标元素是否应用了 CSS 过渡或者动画，如果有，那么在恰当的时机添加/删除 CSS 类名；
2. 如果 transition 组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用；
3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 插入、删除操作将会立即执行；

### 过渡动画 Class

- `v-enter-from`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
- `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
- `v-enter-to`：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。
- `v-leave-from`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
- `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
- `v-leave-to`：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除。

### class 的 name 命名规则

- 如果使用的是一个没有 name 的 transition，那么所有的 class 是以`v-`作为默认前缀；
- 如果添加了一个 name 属性，比如 `<transtion name="why">`，那么所有的 class 会以`why-`开头；

### 过渡动画的使用

- transition 动画

  淡入淡出效果

  ```html
  <template>
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="transition1">
        <h2 v-if="isShow">Hello</h2>
      </transition>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          isShow: true,
        };
      },
    };
  </script>

  <style scoped>
    .transition1-enter-from,
    .transition1-leave-to {
      opacity: 0;
    }

    .transition1-enter-to,
    .transition1-leave-from {
      opacity: 1;
    }

    .transition1-enter-active,
    .transition1-leave-active {
      transition: opacity 2s ease;
    }
  </style>
  ```

- animation 动画

  放大后缩小隐藏

  ```html
  <template>
    <div class="app">
      <div><button @click="isShow = !isShow">显示/隐藏</button></div>
      <transition name="transition1">
        <h2 class="title" v-if="isShow">Hello</h2>
      </transition>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          isShow: true,
        };
      },
    };
  </script>

  <style scoped>
    .app {
      width: 200px;
      margin: 0 auto;
    }
    .title {
      display: inline-block;
    }
    .transition1-enter-active {
      animation: bounce 1s ease;
    }
    .transition1-leave-active {
      animation: bounce 1s ease reverse;
    }

    @keyframes bounce {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
  ```

- transition、animation 动画结合

  ::: tip 提示
  如果某一个动画执行结束时，另外一个动画还没有结束。则需要指定 type 属性为 animation 或者 transition 来明确的告知 Vue 监听的类型
  :::

  淡入淡出效果 + 放大后缩小隐藏

  ```html
  <template>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
      </div>

      <transition name="transition1" type="transition">
        <h2 class="title" v-if="isShow">Hello</h2>
      </transition>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          isShow: true,
        };
      },
    };
  </script>

  <style scoped>
    .app {
      width: 200px;
      margin: 0 auto;
    }
    .title {
      display: inline-block;
    }
    .transition1-enter-from,
    .transition1-leave-to {
      opacity: 0;
    }

    .transition1-enter-active,
    .transition1-leave-active {
      transition: opacity 1s ease;
    }

    .transition1-enter-active {
      animation: bounce 1s ease;
    }
    .transition1-leave-active {
      animation: bounce 1s ease reverse;
    }

    @keyframes bounce {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
  ```

### 过渡的模式 mode

如果不希望同时执行进入和离开动画，那么需要设置 transition 的过渡模式

- in-out: 新元素先进行过渡，完成之后当前元素过渡离开；
- out-in: 当前元素先进行过渡，完成之后新元素过渡进入；

```html
<transition name="transition" mode="in-out"></transition>
```

### 动态组件的切换

```html
<transition name="transition" mode="out-in">
  <component :is="布尔值 ? '组件名1' : '组件名2'"></component>
</transition>
```

### 首次渲染

默认情况下，首次渲染的时候是没有动画的，如果我们希望给他添加上去动画，那么就可以增加另外一个属性 appear：

```html
<transition appear></transition>
```

### 结合 animate.css

- 如果手动一个个来编写这些动画，那么效率是比较低的，所以在开发中我们可能会引用一些第三方库的动画库，比如 animate.css。
- Animate.css 是一个已经准备好的、跨平台的动画库为我们的 web 项目，对于强调、主页、滑动、注意力引导非常有用；

1. 安装 animate.css 库: `npm install animate.css`
2. 导入 animate.css 库:

main.js

```js
import "animate.css";
```

3. 使用 animate.css 动画

::: tip 提示
动画名可以在[animate.style](https://animate.style/)查看
:::

- 结合 transition 标签

  ```html
  <template>
    <transition name="transition1" appear></transition>
  </template>

  <style scoped>
    .transition1-enter-active {
      animation: 动画名 1s ease;
    }

    .transition1-leave-active {
      animation: 动画名 1s ease;
    }
  </style>
  ```

- 直接使用 animate 库提供的类

  ```html
  <transition
    enter-active-class="animate__animated 动画名"
    leave-active-class="animate__animated 动画名"
    appear
  >
  </transition>
  ```

### 结合 gsap 库

- GSAP 是 The GreenSock Animation Platform（GreenSock 动画平台）的缩写；
- 它可以**通过 JavaScript 为 CSS 属性、SVG、Canvas**等设置动画，并且是浏览器兼容的；

1. 安装装 gsap 库: `npm install gsap`
2. 使用 gsap 库

::: tip 提示
[帮助文档](https://greensock.com/get-started/)
:::

```html
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    <transition @enter="enter" @leave="leave" :css="false">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
  import gsap from "gsap";

  export default {
    data() {
      return {
        isShow: true,
      };
    },
    methods: {
      enter(el, done) {
        gsap.from(el, {
          scale: 0,
          x: 200,
        });
      },

      leave(el, done) {
        gsap.to(el, {
          scale: 0,
          x: 200,
        });
      },
    },
  };
</script>
```

## 混入 Mixin

有时候组件和组件之间有时候会存在相同的代码逻辑，我们希望对相同的代码逻辑进行抽取。
在 Vue2 和 Vue3 中都支持的一种方式就是使用 Mixin 来完成：

- Mixin 提供了一种非常灵活的方式，来**分发 Vue 组件中的可复用功能**；
- 一个 Mixin 对象可以包含**任何组件选项**；
- 当组件使用 Mixin 对象时，**所有 Mixin 对象的选项将被 混合 进入该组件本身的选项**中；

### 基本使用

- 声明

  新建 src/mixins/Mixin 名.js

  ```js
  export const Mixin名 = {
    data() {
      return {
        变量名: 值,
      };
    },
    methods: {
      方法名() {},
    },
  };
  ```

- 使用

  ```html
  <template>
    <div>
      <h2>{{ 变量名 }}</h2>
      <button @click="方法名">按钮</button>
    </div>
  </template>

  <script>
    import { Mixin名 } from "./mixins/Mixin名";

    export default {
      mixins: [Mixin名],
    };
  </script>
  ```

### Mixin 的合并规则

如果 Mixin 对象中的选项和组件对象中的选项发生了冲突，那么 Vue 会如何操作？这里分成不同的情况来进行处理

- 情况一：如果是 data 函数的返回值对象
  - 返回值对象默认情况下会**进行合并**；
  - 如果 data 返回值对象的属性发生了冲突，那么会**保留组件自身的数据**；
- 情况二：如何生命周期钩子函数
  - 生命周期的钩子函数**会被合并到数组**中，都会被调用；
- 情况三：值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。

  - 比如都有**methods 选项**，并且都定义了方法，那么**它们都会生效**；
  - 但是如果**对象的 key 相同**，那么**会取组件对象的键值对**；

- 定义 Mixins

  新建 \mixins\Mixin 名.js

  ```js
  export const demoMixin = {
    data() {
      return {
        变量名: 值,
      };
    },
    methods: {
      方法名() {},
    },
  };
  ```

- 使用 Mixins

  ```html
  <template>
    <div>
      <h2>{{ 变量名 }}</h2>
      <button @click="方法名">按钮</button>
    </div>
  </template>

  <script>
    import { Mixin名 } from "./mixins/Mixin名";

    export default {
      mixins: [Mixin名],
    };
  </script>
  ```

- 全局 Mixin

  src\main.js

  ```js
  import { createApp } from "vue";
  import App from "./App.vue";

  const app = createApp(App);

  app.mixin({
    data() {
      return {
        变量名: 值,
      };
    },
    methods() {},
  });

  app.mount("#app");
  ```

## Composition API

### Options API 的弊端

在 Vue2 中，我们编写组件的方式是 Options API，但是这种代码有一个很大的弊端：

- 当**实现某一个功能**时，这个功能**对应的代码逻辑**会被**拆分到各个属性**中；
- 当**组件变得更大、更复杂**时，**逻辑关注点的列表**就会增长，那么**同一个功能的逻辑就会被拆分的很分散**；
- 尤其对于那些一开始**没有编写这些组件的人**来说，这个组件的代码是**难以阅读和理解**的（阅读组件的其他人）；

### setup 函数的参数

::: tip 提示
使用 `<script setup>` 的组件，可以通过 `defineExpose({变量名, 函数名})` 编译器宏来显式指定在组件中要暴露出去的属性。
:::

::: warning 注意
在`setup`中应该避免使用`this` ，因为它不会找到组件实例。`setup`的调用发生在`data` property、 `computed` property 或`methods`被解析之前，所以它们无法在`setup`中被获取。
:::

1. props，它其实就是父组件传递过来的属性会被放到 props 对象中，在 setup 中如果需要使用，那么就可以直接通过 props 参数获取：
   - 对于**定义 props 的类型**，还是和之前的规则是一样的，在 props 选项中定义；
   - 并且**在 template 中**依然是可以**正常去使用 props 中的属性**，比如 message；
   - 如果**在 setup 函数中想要使用 props**，那么**不可以通过 this 去获取**；
   - 因为 props 有直接**作为参数传递到 setup 函数中**，所以可以**直接通过参数**来使用即可；
2. 另外一个参数是 context，也称之为是一个 SetupContext，它里面包含三个属性：
   - `attrs`：所有的非 prop 的 attribute；
   - `slots`：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）；
   - `emit`：当我们组件内部需要发出事件时会用到 emit（因为不能访问 this，所以不可以通过 this.\$emit 发出事件）；

```js
setup(props, { attrs, slots, emit }) {
  console.log(props);
  console.log(attrs.id, attrs.class);
  console.log(slots);
  console.log(emit);
},
```

### 组件

- 注册组件

  - 在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：

    ```html
    <script setup>
      import ComponentA from "./ComponentA.vue";
    </script>

    <template>
      <ComponentA />
    </template>
    ```

  - 如果没有使用 `<script setup>`，则需要使用 components 选项来显式注册：

    ```js
    import ComponentA from "./ComponentA.js";

    export default {
      components: {
        ComponentA,
      },
      setup() {
        // ...
      },
    };
    ```

- 组件传参-父传子

  - 在使用 `<script setup>` 的单文件组件中，props 可以使用 defineProps() 宏来声明：

    ```html
    <script setup>
      // 数组语法
      const props = defineProps(["参数1", "参数2"]);
      // 对象语法
      const props = defineProps({
        // 限制数据类型
        参数1: Array,
        参数2: {
          // 限制数据类型
          type: String,
          // 是否为必传参数
          require: true,
          // 默认值
          default: "默认值",
        },
        // 对象或数组的默认值必须从一个工厂函数获取
        参数3: {
          type: Object,
          default() {
            return { 键: "值" };
          },
        },
      });

      console.log(props.参数1);
    </script>
    ```

  - 在没有使用 `<script setup>` 的组件中，prop 可以使用 props 选项来声明：

    ```js
    export default {
      props: ["参数1, 参数2"],
      setup(props) {
        // setup() 接收 props 作为第一个参数
        console.log(props.参数1);
      },
    };
    ```

- 组件传参-子传父

  - 父组件

  ```html
  <template>
    <div>
      <子组件 @发射事件名="事件名"></子组件>
    </div>
  </template>
  ```

  - 在使用 `<script setup>` 的单文件组件中，emit 可以使用 defineEmits() 宏来声明：

    ```js
    import { defineEmits } from "vue";

    const emit = defineEmits(["发射事件名"]);

    emit("发射事件名");
    emit("发射事件名", "参数1", "参数2");
    ```

  - 在没有使用 `<script setup>` 的组件中，emit 可以使用 emits 选项来声明：

    ```js
    export default {
      emits: ["发射事件名"],
      setup(props, ctx) {
        ctx.emit("发射事件名");
        ctx.emit("发射事件名", "参数1", "参数2");
      },
    };
    ```

### refAPI

ref 会返回一个**可变的响应式对象**，该对象作为一个 **响应式的引用** 维护着它**内部的值**，这就是**ref 名称的来源**；

- 它内部的值是**在 ref 的 value 属性**中被维护的；
- 在**模板中引入 ref 的值**时，Vue 会**自动进行解包操作**，所以并不需要在模板中通过 ref.value 的方式来使用；
- 但是在 **setup 函数内部**，它依然是一个 **ref 引用**， 所以对其进行操作时，依然需要**使用 ref.value 的方式**；
- 模板中的解包是浅层的解包；

```html
<template>
  <div>
    <!-- 当在template模板中使用ref对象，它会自动进行解包 -->
    <h2>{{ 变量名 }}</h2>
    <button @click="函数名">按钮</button>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      // 编程一个ref的可响应式的引用
      const 变量名 = ref(值);

      //局部函数
      const 函数名 = () => {
        console.log(变量名.value);
      };

      return { 变量名, 函数名 };
    },
  };
</script>
```

### reactive

如果想为了 setup 中定义的数据踢欧冠呢过响应式的特特性，可以使用 reactive 的函数。

```html
<template>
  <h2>{{ state.变量名 }}</h2>
</template>

<script setup>
  import { reactive } from "vue";

  const state = reactive({ 变量名: 值 });
  console.log(state.变量名);
</script>
```

### readonly

某些情况下，我们传入给其他地方（组件）的这个响应式对象希望在另外一个地方（组件）被使用，但是不能被修改，这个时候如何防止这种情况的出现？

- Vue3 为我们提供了 readonly 的方法；
- **readonly 会返回原生对象的只读代理**（也就是它依然是一个 Proxy，这是一个 proxy 的 set 方法被劫持，并且不能对其进行修改）

* 普通对象

  ```js
  import { readonly } from "vue";

  export default {
    setup() {
      const 变量名 = { 键: 值 };
      const 只读变量名 = readonly(变量名);

      const updateState = () => {
        只读变量名.键 = 值;
      };

      return { updateState };
    },
  };
  ```

* 响应式的对象

  ```js
  import { reactive, readonly } from "vue";

  export default {
    setup() {
      const 变量名 = ref({ 键: 值 });
      const 只读变量名 = readonly(变量名);

      const updateState = () => {
        只读变量名.键 = 值;
      };

      return { updateState };
    },
  };
  ```

* 响应式的对象 ref

  ```js
  import { ref, readonly } from "vue";

  export default {
    setup() {
      const 变量名 = ref(值);
      const 只读变量名 = readonly(变量名);

      const updateState = () => {
        只读变量名.value = 值;
      };

      return { updateState };
    },
  };
  ```

### toRefs

如果使用 ES6 的解构语法，对 reactive 返回的对象进行解构获取值，那么之后无论是修改结构后的变量，还是修改 reactive 返回的 state 对象，**数据都不再是响应式**。

- Vue 提供了一个`toRefs`的函数，可以将**reactive 返回的对象中的属性都转成 ref**；
- 那么再次进行结构出来的值本身都是 ref 的；
- 这种做法相当于已经在`state.name`和`ref.value`之间建立了 链接，**任何一个修改都会引起另外一个变化**；

```js
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const info = reactive({ 属性名: 值 });
    let { 属性名 } = toRefs(info);

    const btnClick = () => {
      info.属性名 = 值;
    };
    return { 属性名, btnClick };
  },
};
```

### toRef

如果只希望转换一个 reactive 对象中的属性为 ref, 那么可以使用 toRef 的方法

```js
import { reactive, toRef } from "vue";

export default {
  setup() {
    const info = reactive({ 属性名: 值, 属性名: 值 });
    let 属性名 = toRef(info, "属性名");

    const btnClick = () => {
      info.属性名 = 值;
    };
    return { 属性名, btnClick };
  },
};
```

### customRef

创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显示控制：

- 它需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数；
- 并且应该返回一个带有 get 和 set 的对象

* 自定义自定义 Ref

  新建 \hooks\自定义 Ref 名.js

  ```js
  import { customRef } from "vue";

  export default function (value) {
    return customRef((track, trigger) => {
      return {
        get() {
          track();
          return value;
        },
        set(newValue) {
          value = newValue;
          trigger();
        },
      };
    });
  }
  ```

* 使用自定义 Ref

  ```js
  import 自定义Ref名 from "./hook/自定义Ref名";

  export default {
    setup() {
      const 变量名 = 自定义Ref名(值);
      return { 变量名 };
    },
  };
  ```

### computed

当某些属性是依赖其他状态时，我们可以使用计算属性来处理。在 Composition API 中，可以在 setup 函数中使用 computed 方法来编写一个计算属性。

::: tip 提示
`computed`方法返回的是一个 ref 对象，因此改变值需要使用`computed名.value = 值;`
:::

- 传入 getter 函数

  ```js
  import { ref, computed } from "vue";

  export default {
    setup() {
      const firstName = ref("Kobe");
      const lastName = ref("Bryant");

      const fullName = computed(() => firstName.value + " " + lastName.value);
      return { fullName };
    },
  };
  ```

- 传入对象(包含 getter/setter)

  ```js
  import { ref, computed } from "vue";

  export default {
    setup() {
      const firstName = ref("Kobe");
      const lastName = ref("Bryant");

      const fullName = computed({
        get: () => firstName.value + " " + lastName.value,
        set: (newValue) => {
          const names = newValue.split(" ");
          firstName.value = names[0];
          lastName.value = names[1];
        },
      });

      return { fullName };
    },
  };
  ```

### watchEffect

在 Options API 中，可以通过 watch 选项来侦听 data 或者 props 的数据变化，当数据变化时执行某一些操作。

- watchEffect 用于自动收集响应式数据的依赖；
- watch 需要手动指定侦听的数据源；

* 基本使用

  ```js
  import { ref, watchEffect } from "vue";

  export default {
    setup(props) {
      const 变量名 = ref(值);

      watchEffect(() => {
        console.log("变量名: " + 变量名.value);
      });

      return { 变量名 };
    },
  };
  ```

* 停止监听

  ```js
  import { ref, watchEffect } from "vue";

  export default {
    setup(props) {
      const 变量名 = ref(值);

      cosnt stop = watchEffect(() => {
        console.log("变量名: " + 变量名.value);
      });

      stop();

      return { 变量名 };
    },
  };
  ```

* 清除副作用

  如果在开发中需要在侦听函数中执行网络请求，但是在网络请求还没有达到的时候，停止了侦听器，或者侦听器侦听函数被再次执行了。那么上一次的网络请求应该被取消掉，这个时候就可以清除上一次的副作用；

  ```js
  import { ref, watchEffect } from "vue";

  export default {
    setup(props) {
      const 变量名 = ref(值);

      const stop = watchEffect((onInvalidate) => {
        onInvalidate(() => {
          console.log("onInvalidate");
        });
        console.log("变量名: " + 变量名.value);
      });
    },
  };
  ```

### watch

watch API 完全等同于组件 watch 选项的 Property：

- watch 需要侦听特定的数据源，并在回调函数中执行副作用；
- 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调；

与 watchEffect 的比较，watch 允许我们：

- 懒执行副作用（第一次不会直接执行）；
- 更具体的说明当哪些状态发生变化时，触发侦听器的执行；
- 访问侦听状态变化前后的值

- 传入可响应式对象

  ```js
  import { ref, reactive, watch } from "vue";

  export default {
    setup() {
      const 变量名 = reactive({ 属性名: 值 });

      watch(变量名, (newValue, oldValue) => {
        console.log("newValue: " + newValue, "oldValue: " + oldValue);
      });

      return { 变量名 };
    },
  };
  ```

- 传入 getter 函数

  ```js
  import { ref, reactive, watch } from "vue";

  export default {
    setup() {
      const 变量名 = reactive({ 属性名: 值 });

      watch(
        () => info.属性名,
        (newValue, oldValue) => {
          console.log("newValue: " + newValue, "oldValue: " + oldValue);
        }
      );

      return { 变量名 };
    },
  };
  ```

- 侦听多个数据源

  ```js
  import { ref, reactive, watch } from "vue";

  export default {
    setup() {
      const 变量名1 = reactive({ 属性名: 值 });
      const 变量名2 = ref(值);

      watch(
        [变量名1, 变量名2],
        ([new变量名1, new变量名2], [old变量名1, old变量名2]) => {
          console.log("new变量名1: ", new变量名1, "old变量名1: ", old变量名1);
          console.log("new变量名2: ", new变量名2, "old变量名2: ", old变量名2);
        }
      );
    },
  };
  ```

- watch 选项

  ```js
  import { ref, reactive, watch } from "vue";

  export default {
    setup() {
      const 变量名 = reactive({ 属性名: 值 });

      watch(
        变量名,
        (newValue, oldValue) => {
          console.log("newValue: " + newValue, "oldValue: " + oldValue);
        },
        {
          // 是否深层侦听
          deep: true,
          // 是否立即执行
          immediate: true,
        }
      );

      return { 变量名 };
    },
  };
  ```

### setup 中使用 ref

```html
<template>
  <div>
    <h2 ref="Ref名">标题</h2>
  </div>
</template>

<script>
  import { ref, onMounted } from "vue";

  export default {
    setup() {
      const Ref名 = ref(null);

      onMounted(() => {
        console.log(Ref名.value);
      });

      return { Ref名 };
    },
  };
</script>
```

### 生命周期钩子

::: tip 提示
因为 `setup` 是围绕 `beforeCreate` 和 `created` 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 `setup` 函数中编写。
:::

| 选项式 API      | Hook inside setup |
| --------------- | ----------------- |
| beforeCreate    | Not needed\*      |
| created         | Not needed\*      |
| beforeMount     | onBeforeMount     |
| mounted         | onMounted         |
| beforeUpdate    | onBeforeUpdate    |
| updated         | onUpdated         |
| beforeUnmount   | onBeforeUnmount   |
| unmounted       | onUnmounted       |
| errorCaptured   | onErrorCaptured   |
| renderTracked   | onRenderTracked   |
| renderTriggered | onRenderTriggered |

```js
import { onMounted, onUpdated, onUnmounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("App mounted");
    });
    onUpdated(() => {
      console.log("App updated");
    });
    onUnmounted(() => {
      console.log("App unmounted");
    });
  },
};
```

### Provide Inject 函数

- 父组件

  ```js
  import { ref, provide, readonly } from "vue";

  export default {
    setup() {
      const 变量名 = ref(值);
      provide("变量名", readonly(变量名));
    },
  };
  ```

- 子组件

  ```js
  import { inject } from "vue";

  export default {
    setup() {
      const 变量名 = inject("变量名");
    },
  };
  ```

## h 函数

Vue 推荐在绝大数情况下使用模板来创建你的 HTML，然后一些特殊的场景，如果**真的需要 JavaScript 的完全编程的能力**，这个时候可以使用 **渲染函数** ，它**比模板更接近编译器**；

- Vue 在生成真实的 DOM 之前，会将**节点转换成 VNode**，而 VNode 组合在一起形成**一颗树结构**，就是**虚拟 DOM（VDOM）**；
- template 中的 HTML 最终也是**使用渲染函数**生成**对应的 VNode**；
- 那么，如果想充分的利用 JavaScript 的编程能力，可以自己来**编写 createVNode 函数**，生成**对应的 VNode**；

- **h() 函数**是一个用于**创建 vnode 的一个函数**；
- 其实更准备的命名是 **createVNode() 函数**，但是为了简便在 Vue 将之简化为 h() 函数；

### 使用 h 函数

```html
<script>
  import { h } from "vue";

  export default {
    render() {
      return h("标签名", { 属性: "值" }, "内容");
    },
  };
</script>

<style scoped></style>
```

### JSX 的使用

组件名.vue

```html
<script>
  export default {
    render() {
      return (
        <div>
          <h2>Hello World</h2>
        </div>
      );
    },
  };
</script>

<style scoped></style>
```
