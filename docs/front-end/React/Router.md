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

`npm install react-router-dom --save`

## 基本使用

::: tip 提示

- `BrowserRouter` 标签使用 history，没有#号，推荐使用
- `HashRouter` 标签使用 hash，中间会有#号
  :::

\src\App.js

```js
import React, { PureComponent } from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";
import 组件名 from "./pages/组件名";
import 组件名 from "./pages/组件名";

class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/路径">跳转</Link>

          <Switch>
            {/* 主页面 */}
            <Route exact path="/" component={组件名}></Route>
            {/* 路径 */}
            <Route path="/路径" component={组件名}></Route>
            {/* 没有匹配到页面跳转的组件 */}
            <Route component={组件名}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
```

::: tip 提示
`Switch`标签：只匹配一个路径，禁止重复匹配
:::

## 路由标签

### Link 标签

Link 标签 会自动渲染为 a 标签

```js
<Link to="/路径">链接</Link>
```

### NavLink 标签

NavLink 标签 会自动渲染为 a 标签，同时在已选择的 NavLink 标签中加入`.active`类样式

::: tip 提示
`exact`属性为精确匹配，建议加上
:::

```js
<NavLink exact to="/路径">
  {item.title}
</NavLink>
```

::: tip 提示
可以使用`activeClassName`属性来自定义活跃状态的 CSS 类名
:::

### Redirect 标签

Redirect 用于路由的重定向，**当这个组件出现时，就会执行跳转到对应的 to 路径中**

```js
import { Redirect } from "react-router-dom";

<Redirect to="/路径"></Redirect>;
```

::: tip 提示
可以用于拦截器（如登录页面）等
:::

## 嵌套路由

::: tip 提示
父路由的首链接需要加`exact`，其他不需要（否则会造成父链接只匹配到一个的情况）
:::

```js
import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

class About extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/路径">
          链接
        </NavLink>
        <NavLink exact to="/路径">
          链接
        </NavLink>

        <Switch>
          <Route exact path="/路径">
            <组件名 />
          </Route>
          <Route exact path="/路径">
            <组件名 />
          </Route>
        </Switch>
      </div>
    );
  }
}

function 组件名(props) {
  return <div></div>;
}

function 组件名(props) {
  return <div></div>;
}

export default About;
```

## 手动路由跳转

通过 JavaScript 代码来跳转指定路由的路径

### 通过路由跳转的组件

通过路由跳转的组件，可以直接获取 history、 location、 match 对象

```js
this.props.history.push("/路径");
```

### 普通渲染的组件

普通渲染的组件，不可以直接获取 history、 location、 match 对象。需要使用高阶组件：`withRouter`包裹并在外围使用`BrowserRouter`包裹

\src\index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

\src\App.js

```js
import React, { PureComponent } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={(e) => this.toPaga()}>按钮</button>

        <Switch>
          <Route path="/路径" component={组件名}></Route>
        </Switch>
      </div>
    );
  }
  toPaga() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
```

## 动态路由

动态路由：路由中的路径并不会固定，用于路由传参

###

适合传递简单的参数（如 id 等）

**传递参数：**

\src\App.js

```js
<Route path="/路径/:参数" component={组件名}></Route>
```

**接收参数：**

```js
class 组件名 extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.参数}</h2>
      </div>
    );
  }
}
```

### state 方式

state 方式传参，一般用于传递多个参数

**传递参数：**

```js
const 参数名 = {
  键: 值,
}

<NavLink to={{ pathname: "/路径", state: 参数 }}>标题</NavLink>
```

**接收参数：**

```js
class Detail3 extends PureComponent {
  render() {
    const location = this.props.location;
    return (
      <div>
        <h2>{location.state.参数名}</h2>
      </div>
    );
  }
}
```

### search 方式（不推荐）

search 方式传参，需要自己或使用第三方库来分割键值对

**传递参数：**

```js
<Link to={`/路径?参数名=值&参数名=值`}>标题</Link>
```

**接收参数：**

```js
class 组件名 extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.location.search}</h2>
      </div>
    );
  }
}
```

## Router-config

Router-config 用来统一路由的配置

### 安装

`npm install react-router-config --save`

### 使用

\src\router\index.js

```js
const routes = [
  {
    path: "/",
    exact: true,
    component: 组件名,
  },
  {
    path: "/路径",
    component: 组件名,
  },
  {
    path: "/路径",
    component: 组件名,
    // 配置子路由
    routes: [
      {
        path: "/路径",
        exact: true,
        component: 组件名,
      },
      {
        path: "/路径/路径",
        component: 组件名,
      },
    ],
  },
];

export default routes;
```

\src\App.js

```js
import { renderRoutes } from "react-router-config";
import routes from "./router";

class App extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/">
          标题
        </NavLink>
        <NavLink to="/路径">标题</NavLink>
        <NavLink to="/路径">标题</NavLink>

        {/* 路由占位 */}
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default withRouter(App);
```

::: tip 提示
子路由占位可使用 `{renderRoutes(this.props.route.routes)}`
:::
