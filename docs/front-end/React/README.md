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
