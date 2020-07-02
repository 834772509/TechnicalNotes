# React

React 用于构建用户界面的JavaScript库

## 脚手架

**脚手架让项目从搭建到开发,再到部署，整个流程变得快速和便捷**

编程中提到的脚手架 (Scaffold) , 其实是一种工具，帮我们可以快速生成项目的工程化结构，并且已经将我们所需的工程环境配置好

* 每个项目作出完成的效果不同，但是它们的基本工程化结构是相似的。既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生产基本的工程化模板
* 不同的项目，在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可
* 这样也可以间接保证项目的基本机构一致性，方便后期的维护

### 依赖

1. 安装Node.js：[Node.js官网](https://nodejs.org/zh-cn/)  
2. 安装WebPack：``npm install webpack -g``
3. 安装Vue脚手架：``npm install @vue/cli -g``

### 安装




### 使用



## 基本概念

### Babel

Babel，又名Babeljs。是目前前端使用非常广泛的编辑器、转移器。比如当下很多浏览器并不支持ES6的语法，但是确实ES6的语法非常的简洁和方便，我们开发时希望使用它。那么编写源码时我们就可以使用ES6来编写，之后通过Babel工具，将ES6转成大多数浏览器都支持的ES5的语法

::: tip 提示
直接使用``this.state.变量名``操作变量，界面是不会发生任何变化。需要使用``this.setState()``方法来操作变量
:::

## 组件化

``` jsx
//封装App组件
class App extends React.Component {

  //定义属性
  constructor() {
    super();
    this.state = {
      message: "Hello World",
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.btnClick.bind(this)}>改变文本</button>
      </div>
    )
  }
  btnClick() {
    this.setState({
      message: "测试数据",
    })

  }
}

//渲染组件
ReactDOM.render(<App />, document.getElementById("app"))
```

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
<button onClick={() => this.函数名()}>按钮</button>

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
