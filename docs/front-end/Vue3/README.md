# Vue3

Vue 是-套用于构建用户界面的渐进式框架。

- 全程是 Vue.js 或者 Vuejs
- 渐进式框架：表示我们可以在项目中一点点来引入和使用 Vue ,而不一定需要全部使用 Vue 来开发整个项目

## Visual Studio Code 插件

- Vetur: Vue 支持
- Vue VSCode Snippets: Vue 代码片段(使用`vbase-css`初始化)

## 脚手架

**脚手架让项目从搭建到开发,再到部署，整个流程变得快速和便捷**

编程中提到的脚手架 (Scaffold) , 其实是一种工具，帮我们可以快速生成项目的工程化结构，并且已经将我们所需的工程环境配置好

- 每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的。既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生产基本的工程化模板
- 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可
- 这样也可以间接保证项目的基本机构一致性，方便后期的维护

### 依赖

1. 安装 Node.js：[Node.js 官网](https://nodejs.org/zh-cn/)
2. 安装 WebPack：`npm install webpack -g`

### 安装

- 全局安装：`npm install @vue/cli -g`
- 升级 CLI: `npm update @vue-cli -g`

### 创建项目

- 可视化创建项目： `vue ui`
- 命令行创建项目：`vue create 项目名称`

  - `Router`: 路由
  - `Unit Tests`: 单元测试
  - `Linter/Formatter`: 代码规范检测

### Vue CLI 运行原理

![Vue-cli运行原理](./img/Vue-cli运行原理)

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

如果我们希望把数据显示到模板( template )中,使用最多的语法是"Mustache" 语法(双大括号)的文本插值。

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

注意：以下为错误语法

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

- 和 CSS 规则如 [v-cloak] { display: none } 一起用时,这个指令可以隐藏未编译的 Mustache 标签直到组件实例准备完毕。

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

- 缩写: `::`
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

在某些情况下,我们属性的名称可能也不是固定的:

- 无论绑定 src、href. class、 style,属性名称都是固定的;
- 如果属性名称不是固定的,可以使用`:[属性名]="值"`的格式来定义;
- 这种绑定的方式称之为`动态绑定属性`;

```html
<div v-bind="info">哈哈哈</div>
<!-- 语法糖 -->
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
  - 如果需要同时传入某个参数,同时需要 event 时,可以通过\$event 传入事件。

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

v-for 的基本格式是"item in 数组":

- 数组通常是来自`data`或者`prop`,也可以是其他方式;
- `item`是我们给每项元素起的一个别名,这个别名可以自定义;
- `(item, index)`中括号可省，但便于阅读最好加上;
- `in`也可使用`of`，更接近 JAVaSript 迭代器语法;

- 基本使用

  ```html
  <li v-for="item in 数组">{{item}}</li>
  <!--在遍历的过程中获取索引值-->
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
  <!--在遍历的过程中获取key和value及index-->
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
      <hr />
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

## 计算属性 computed

### 什么是计算属性？

- 对于任何包含响应式数据的复杂逻辑,都应该使用计算属性;
- 计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例;
- **计算属性是有缓存的， 当我们多次使用计算属性时，计算属性中的运算只会执行一次**;
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

- 开发中我们在 data 返回的对象中定义了数据,这个数据通过插值语法等方式绑定到 template 中;
- 当数据变化时, template 会自动进行更新来显示最新的数据;
- 但是在某些情况下,我们希望在代码逻辑中监听某个数据的变化, 这个时候就需要用侦听器 watch 来完成了;

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

Vue3 从实例中移除了 $on、$off 和 \$once 方法，所以我们如果希望继续使用全局事件总线，要通过第三方的库：

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

- 当一个组件被用来渲染一个数组元素时，我们使用插槽，并且希望插槽中没有显示每项的内容；
- 这个 Vue 给我们提供了作用域插槽；

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