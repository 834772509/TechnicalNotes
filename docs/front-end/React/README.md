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
