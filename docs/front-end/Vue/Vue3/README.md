# Vue3

Vue 是-套用于构建用户界面的渐进式框架。

- 全程是 Vue.js 或者 Vuejs
- 渐进式框架：表示我们可以在项目中一点点来引入和使用 Vue ,而不一定需要全部使用 Vue 来开发整个项目

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
  const App = {
    data() {
      return {
        msg: "<span style='color: red; background: blue'>哈哈哈</span>",
      };
    },
  };
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
  const App = {
    data() {
      return {
        imgUrl: "url",
        link: "https://www.baidu.com",
      };
    },
  };
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
    const App = {
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
    };
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
  const App = {
    data() {
      return {
        info: {
          name: "why",
          age: 18,
          height: 1.88,
        },
      };
    },
  };
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
    const App = {
      methods: {
        btnClick1(event) {
          console.log(event);
        },
        btnClick2(event, name) {
          console.log(name, event);
        },
      },
    };
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