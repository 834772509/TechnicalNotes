# React

React 用于构建用户界面的JavaScript库

## Visual Studio Code 插件

* ES7 React/Redux/GraphQL/React-Native snippets : 快速生成React代码段
* Reactjs code snippets : 快速生成React代码段

### 浏览器插件

* react-developer-tools

## 脚手架

**脚手架让项目从搭建到开发,再到部署，整个流程变得快速和便捷**

编程中提到的脚手架 (Scaffold) , 其实是一种工具，帮我们可以快速生成项目的工程化结构，并且已经将我们所需的工程环境配置好

* 每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的。既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生产基本的工程化模板
* 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可
* 这样也可以间接保证项目的基本机构一致性，方便后期的维护

### 依赖

1. 安装Node.js：[Node.js官网](https://nodejs.org/zh-cn/)  
2. 安装WebPack：``npm install webpack -g``

### 安装
 
安装React脚手架：``npm install -g create-react-app``

### 创建项目

创建项目：``create-react-app 项目名称``

::: warning 注意
项目名称不能包含大写字母
:::

### 启动项目

启动项目：``npm start``

### 编译项目

编译项目：``npm run build``

### 目录结构

```
项目名
├─ README.md // readme说明文档
├─ package.json // 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）
├─ public
│    ├─ favicon.ico // 应用程序顶部的icon图标
│    ├─ index.html // 应用的index.html入口文件
│    ├─ logo192.png // 被在manifest.json中使用
│    ├─ logo512.png // 被在manifest.json中使用
│    ├─ manifest.json // 和Web app配置相关
│    └─ robots.txt // 指定搜索引擎可以或者无法爬取哪些文件
├─ src
│    ├─ App.css // App组件相关的样式
│    ├─ App.js // App组件的代码文件
│    ├─ App.test.js // App组件的测试代码文件
│    ├─ index.css // 全局的样式文件
│    ├─ index.js // 整个应用程序的入口文件
│    ├─ logo.svg // 刚才启动项目，所看到的React图标
│    ├─ serviceWorker.js // 默认帮助我们写好的注册PWA相关的代码
│    └─ setupTests.js // 测试初始化文件
├─package-lock.json // 记录本地真实安装版本
└─.gitignore // 记录git版本控制的排除文件
```

## 基本概念

### Babel

Babel，又名Babeljs。是目前前端使用非常广泛的编辑器、转移器。比如当下很多浏览器并不支持ES6的语法，但是确实ES6的语法非常的简洁和方便，我们开发时希望使用它。那么编写源码时我们就可以使用ES6来编写，之后通过Babel工具，将ES6转成大多数浏览器都支持的ES5的语法

### PWA

PWA 全称 Progressive Web App，即渐进式 WEB 应用。  
一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能； 这种 Web 存在的形式，我们也称之为是 Web App；

PWA 解决了哪些问题呢？

* 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏；
* 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能；
* 实现了消息推送；
* 等等一系列类似于 Native App 相关的功能；

## JSX

JSX是一种JavaScript的语法扩 展( eXtension) , 也在很多地方称之为JavaScript XML，因为看起就是一段XML语法。  
它用于描述我们的UI界面,并且其完成可以和JavaScript融合在一起使用。  
它不同于Vue中的模块语法，你不需要专门学习模块语法中的一些指令（比如v-for、v-if、 v-else、v-bind）

``` JSX
const element = <h2>Hello World</h2>
```

### JXS 书写规范

* JSX的顶层只能有一个根元素，所以我们很多时候会在外层包裹一个div原生（或者使用后面我们学习的Fragment）
* 为了方便阅读,我们通常在jsx的外层包裹一个小括号() ,这样可以方便阅读,并且jsx可以进行换行书写
* JSX中的标签可以是单标签,也可以是双标签。注意：**如果是单标签，必须以/>结尾**

### 语法

* 注释

``` jsx
{/* 注释 */}
```

* 嵌入数据

::: tip 提示
对象不能作为jsx的子类，无法输出Object对象
:::

``` jsx
<h2>{this.state.变量名}</h2>
```

* 嵌入表达式

``` jsx
{/* 运算符表达式*/}
<h2>{变量1 + " " + 变量2}</h2>
<h2>{20 * 50}</h2>

{/* 函数调用 */}
<h2>{this.函数名()}</h2>
```

* 逻辑与算符

如果条件成立则渲染某一个组件，否则不显示

``` jsx
{条件 && <h2>渲染内容</h2>}
```

* 三元表达式

``` jsx
<h2>{变量 ? true : false}</h2>
```

* 绑定属性

``` jsx
const { title, imgUrl, link } = this.state

<h2 title={title}>我是标题</h2>
<img src={imgUrl} />
<a href={link}>百度一下</a>
```

* 绑定class

::: tip 提示
jsx中``class``为关键字，不能直接使用，需要使用``className``
:::

``` jsx
<div className="box title">div元素</div>
<div className={"box title " + (active ? "active" : "")}>div元素</div>
```

* 绑定Style

``` jsx
<div style={{color: "red", fontSize: "50px"}}>绑定Style属性</div>

<h2 style={{ display: isLogin ? 'block' : "none" }}>绑定Style属性</h2>
```

* 绑定事件

``` jsx
<button onClick={this.函数名}>按钮</button>

{/* 函数内访问this对象 */}

{/*（推荐） 直接传入一个箭头函数，在箭头函数中调用需要执行的函数 */}
<button onClick={e => this.函数名()}>按钮</button>

{/* 使用bind绑定this对象 */}
<button onClick={this.函数名.bind(this)}>按钮</button>
```

::: tip 提示
函数内访问this对象默认为undefine，因为按钮的事件函数并不是我们主动调用，而是当button发生改变时，React内部调用，当它内部调用时，并不知道要如何绑定正确的this

解决方法：

* （推荐）在jsx中直接传入一个箭头函数，在箭头函数中调用需要执行的函数
* 定义函数时，使用箭头函数
* 在构造方法中，``this.函数名 = this.函数名.bind(this)`` 绑定this对象
* 绑定函数时增加``.bind(this)``绑定this对象
:::

* 事件对象

``` JavaScript
函数名(event) {
  console.log(event);
}
```

### JSX的本质 

jsx仅仅只是React.createElement(component, props, ..children)函数的语法糖。所有的jsx最终都会被转换成 React.createElement 函数调用  

jsx ->createElement函数 -> ReactElement（对象树）->ReactDom.render

### 为什么要用虚拟DOM

* 很难跟踪状态发生的改变：原有的开发模式，我们很难跟踪到状态发生的改变，不方便针对我们应用程序进行调试
* 操作真实DOM性能较低：传统的开发模式会进行频繁的DOM操作，而这一的做法性能非常的低

## 组件

::: tip 提示
不能直接使用``this.state.变量名``操作变量，界面不会发生任何变化。需要使用``this.setState({变量名: 值})``方法来操作变量
:::

### 类组件

Visual Studio Code 快速创建类组件：``rcc``->回车

``` js
import React, { Component } from 'react'

export default class 组件名 extends Component { 
  constructor(props) {
    super(props);
    //数据对象
    this.state = {

    }
  }
  render() {
    return (
      <div>

      </div>
    )
  } 
  componentDidMount() {
    // 执行 请求网络、DOM操作、订阅 等操作
  }
}
```

::: warning 注意
* 组件的名称**必须是大写字符开头**
* 类组件需要继承自React.Component
* 类组件必须实现render函数
:::

### 函数式组件

Visual Studio Code 快速创建类组件：``rfc``->回车

函数式组件特点：

1. 没有this对象
2. 没有内部的状态（state），不能定义变量
3. 没有生命周期。也会被更新并挂载，但是没有生命周期函数

``` js 
function 函数式组件名() { 
  return (
    <div>

    </div>
  )
}
```

::: warning 注意
组件的名称**必须是大写字符开头**
:::

### render 函数返回值

render 函数可以返回： 

* jsx : 渲染为DOM节点
* 数组、fragments : 使得render方法可以返回多个元素
* Portals : 可以渲染子节，点到不同的DOM子树中
* 字符串、数值 : 在DOM中会被渲染为文本节点
* 布尔类型、null : 什么都不渲染

### 父传子

* 类组件

::: tip 提示
如不需要数据对象可以省略``constructor()``构造方法
:::

``` js
class 组件名 extends Component {
  render() {
    const { 参数1, 参数2 } = this.props

    return (
      <div>
        <h2>{参数1}</h2>
        <h2>{参数2}</h2>
      </div>
    );
  }
}
```

使用：

``` js
<组件名 参数1="值" 参数2={值}></组件名>
```

* 函数组件

``` js
function 组件名(props) {
  const { 参数1, 参数2 } = props

  return (
    <div> 
      <h2>{参数1}</h2> 
      <h2>{参数2}</h2>
    </div>
  )
}
```

使用：

``` js
<组件名 参数1="值" 参数2={值}></组件名>
```

### 子传父

``` js
export default class 父组件名 extends Component {
  render() {
    return (
      <div>
        <组件名 事件名={e => this.方法名()}></组件名>
      </div>
    )
  }
  方法名() {

  }
}

class 子组件名 extends Component {
  render() {
    const { 事件名 } = this.props
    return (
      <button onClick={e => 事件名()}></button>
    )
  }
}
```

### 跨组件传参

* 类组件

``` js
const Context名 = React.createContext({
  //设置默认值
  变量1: "",
  变量2: 0,
})

class 组件名 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      变量名: 值,
    }
  }
  render() {
    return (
      <div>
        <Context名.Provider value={this.state}>
          <传参组件名></传参组件名>
        </Context名.Provider>
      </div>
    );
  }
}


class 传参组件名 extends Component {
  render() {
    return (
      <div>
        <h2>{this.context.变量名}</h2>
      </div>
    )
  }
}

传参组件名.contextType = Context名
```

* 函数组件

``` js
const Context名 = React.createContext({
  //设置默认值
    变量名: 值,
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      变量名: 值,
    }
  }
  render() {
    return (
      <div>
        <Context名.Provider value={this.state}>
          <传参组件名></传参组件名>
        </Context名.Provider>
      </div>
    );
  }
}


function 传参组件名() {
  return (
    <Context名.Consumer>
      {
        value => {
          return (
            <div>
              <h2>{value.变量名}</h2>
            </div>
          )
        }
      }
    </Context名.Consumer>
  )
}
```

### 属性验证

限制传参的数据类型

::: tip 提示
属性验证库被移至``prop-types``，使用前需要导入此库
:::

``` js
import PropTypes from 'prop-types'

function 组件名(props) {
  const { 参数1, 参数2 } = props

  return (
    <div>

    </div>
  )
}

组件名.propTypes = {
  //（默认）可选参数
  参数1: PropTypes.数据类型,
  // 必传参数
  参数2: PropTypes.数据类型.isRequired,
}
```

### 默认值

``` js
组件名.defaultProps = {
  参数1: 值,
  参数2: 值,
}
```

### Class fields 写法

``` js
class ChildCpn2 extends Component {
  // 属性验证
  static propTypes = {

  }
  
  // 默认值
  static defaultProps = {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
```

## 生命周期

很多的事物都有从创建到销毁的整个过程，这个过程称之为是**生命周期**

[![React常用生命周期](./img/React生命周期.jpg "React常用生命周期")](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 生命周期函数

* constructor

  ``constructor(props)``

  如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。

  constructor 中通常只做两件事情：

  1. 通过给 this.state 赋值对象来初始化内部的 state
  2. 为事件绑定实例（this）

* componentDidMount

  ``componentDidMount()``

  componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用

  依赖于 DOM 的操作可以在这里进行，在此处发送网络请求就最好的地方（官方建议）
  可以在此处添加一些订阅（会在 componentWillUnmount 取消订阅）

* componentDidUpdate

  ``componentDidUpdate(prevProps, prevState, snapshot)``

  componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。

  当组件更新后，可以在此处对 DOM 进行操作；
  如果对更新前后的 props 进行了比较，也可以选择在此处进行网络请求（例如：当 props 未发生变化时，则不会执行网络请求）

  ``` js
  componentDidUpdate(prevProps) {
    // 典型用法（不要忘记比较 props）：
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  ```

* componentWillUnmount

  componentWillUnmount() 会在组件卸载及销毁之前直接调用。 
  在此方法中执行必要的清理操作（例如：清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等）

### 不常用生命周期

* getDerivedStateFromProps：state 的值在任何时候都依赖于 props 时使用；该方法返回一个对象来更新 state
* getSnapshotBeforeUpdate：在 React 更新 DOM 之前回调的一个函数，可以获取 DOM 更新前的一些信息（比如说滚动位置）
* shouldComponentUpdate：该生命周期函数很常用，但是我们等待讲性能优化时再来详细讲解

## 插槽

在开发中，我们抽取了一个组件，但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的 div、span 等等这些元素，我们应该让使用者可以决定某一块区域到底存放什么内容。  

举栗：假如我们定制一个通用的导航组件 - NavBar

* 这个组件分成三块区域：左边 - 中间 - 右边，每块区域的内容是不固定
* 左边区域可能显示一个菜单图标，也可能显示一个返回按钮，可能什么都不显示
* 中间区域可能显示一个搜索框，也可能是一个列表，也可能是一个标题，等等
* 右边可能是一个文字，也可能是一个图标，也可能什么都不显示

::: tip 提示
React 中，没有插槽的概念，需要由我们自己去实现
:::

### 匿名插槽

匿名插槽是根据下标来显示插槽内容

``` js
class 组件名 extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
      </div>
    );
  }
}
```

使用：

``` js
<组件名>
  <h2>插槽1</h2>
  <h2>插槽2</h2>
</组件名>
```

### 具名插槽

具名插槽需要指定插槽名

``` js
class 组件名 extends Component {
  render() {
    const { 插槽1, 插槽2 } = this.props
    return (
      <div>
        <div>{插槽1}</div>
        <div>{插槽2}</div>
      </div>
    );
  }
}
```

使用：

``` js
<组件名
  插槽1={<h2>插槽1</h2>}
  插槽2={<h2>插槽2</h2>}>
</组件名> 
```

## setState

### 为什么使用setState

开发中我们并不能直接通过修改state的值来让界面发生更新，因为我们修改了state之后，希望React根据最新的State来重新渲染界面，但是这种方式的修改React并不知道数据发生了变化。  
React并没有实现类似于Vue2中的0bject.defineProperty或者Vue3中的Proxy的方式来监听数据的变化。我们必须通过setState来告知React数据已经发生了变化

### 为什么设计成异步更新

setState是异步更新，并不能在执行完setState后立马拿到最新的state结果。

setState设计为异步，可以显著的提升性能

* 如果每次调用setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的 
  - 最好的办法应该是获取到多个更新，之后进行批量更新
* 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步。
  - state和props不能保持一致性，会在开发中产生很多的问题

### 基本使用

``` js
this.setState({
  变量: this.state.变量 + 1
})
```

### 获取异步更新后的数据

* 通过回调函数

``` js
this.setState({
  变量: 值,
}, () => {
  console.log(this.state.变量);
})
```

* 通过生命周期函数

``` js
componentDidUpdate() {
  console.log(this.state.变量);
}
```

### setState 变为同步更新

* 放入定时器

``` js
this.setState({
  变量: 值,
})
console.log(this.state.变量);
}, 0);
```

* 通过原生JavaScript

``` js
componentDidMount() {
  document.getElementById("button1").onclick = () => {
    this.setState({
      变量: 值,
    })
    console.log(this.state.变量);
  }
}
```

### setState的数据合并

setState方法会通过assign进行数据合并，所以不会出现“丟数据”的情况，也不需要手动编写assign方法防止数据丢失

### 多个setState合并

当执行多个同一setState时，React会将多个state进行合并

``` js
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1
})

// count默认值为0，当执行以上代码后，count值为1
```

解决方案：

``` js
this.setState(prevState => {
  return {
    变量: prevState.变量 + 1
  }
})
```
