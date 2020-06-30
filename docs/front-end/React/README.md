# React

React 用于构建用户界面的JavaScript库

## 基本概念

### Babel

Babel，又名Babeljs。是目前前端使用非常广泛的编辑器、转移器。比如当下很多浏览器并不支持ES6的语法，但是确实ES6的语法非常的简洁和方便，我们开发时希望使用它。那么编写源码时我们就可以使用ES6来编写，之后通过Babel工具，将ES6转成大多数浏览器都支持的ES5的语法

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
* JSX中的标签可以是单标签,也可以是双标签
  - 注意：**如果是单标签，必须以/>结尾**

### 语法

* 注释

``` jsx
{/* 注释 */}
```

* 嵌入数据

``` jsx
<h2>{this.state.变量名}</h2>
```

* 嵌入表达式

``` jsx
{/* 运算符表达式*/}
<h2>{变量1 + " " + 变量2}</h2>
<h2>{20 * 50}</h2>

{/* 三元表达式*/}
<h2>{变量 ? "欢迎回来~" : "请先登录"}</h2>

{/* 函数调用 */}
<h2>{this.函数名()}</h2>
```
