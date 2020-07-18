# Redux

Redux 就是一个帮助我们管理 State 的容器：Redux 是 JavaScript 的状态容器，提供了可预测的状态管理  
Redux 除了和 React 一起使用之外，它也可以和其他界面库一起来使用（比如 Vue），并且它非常小（包括依赖在内，只有 2kb）

## 简介

### 为什么需要redux

JavaScript开发的应用程序,已经变得越来越复杂了： 
  * JavaScript需要管理的状态越来越多，越来越复杂
  * 这些状态包括服务器返回的数据、缓存数据、用户操作产生的数据等等，也包括一些UI的状态，比如某些元素是否被选中，是否显示加载动效，当前分页

管理不断变化的 state 是非常困难的：
  * 状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View 页面也有可能会引起状态的变化；
  * 当应用程序复杂时，state 在什么时候，因为什么原因而发生了变化，发生了怎么样的变化，会变得非常难以控制和追踪；

React 是在视图层帮助我们解决了 DOM 的渲染过程，但是 State 依然是留给我们自己来管理：
  * 无论是组件定义自己的 state，还是组件之间的通信通过 props 进行传递；也包括通过 Context 进行数据之间的共享；
  * React 主要负责帮助我们管理视图，state 如何维护最终还是我们自己来决定；

### redux 的核心理念

Redux 的核心理念非常简单。

比如我们有一个朋友列表需要管理：

如果我们没有定义统一的规范来操作这段数据，那么整个数据的变化就是无法跟踪的；
比如页面的某处通过products.push的方式增加了一条数据；
比如另一个页面通过products[0].age = 25修改了一条数据；
整个应用程序错综复杂，当出现 bug 时，很难跟踪到底哪里发生的变化；

``` js
const initialState = {
  friends: [
    { name: "why", age: 18 },
    { name: "kobe", age: 40 },
    { name: "lilei", age: 30 },
  ]
};
```

Redux 要求我们通过 action 来更新数据：

* 所有数据的变化，必须通过派发（dispatch）action 来更新；
* action 是一个普通的 JavaScript 对象，用来描述这次更新的 type 和 content；

### redux 的三大原则

**单一数据源**

整个应用程序的 state 被存储在一颗 object tree 中，并且这个 object tree 只存储在一个 store 中：
  * Redux 并没有强制让我们不能创建多个 Store，但是那样做并不利于数据的维护；
  * 单一的数据源可以让整个应用程序的 state 变得方便维护、追踪、修改；

**State 是只读的**

唯一修改 State 的方法一定是触发 action，不要试图在其他地方通过任何的方式来修改 State：
  * 这样就确保了 View 或网络请求都不能直接修改 state，它们只能通过 action 来描述自己想要如何修改 state；
  * 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心 race condition（竟态）的问题；

**使用纯函数来执行修改**

通过 reducer 将 旧state和 actions联系在一起，并且返回一个新的 State：
  * 随着应用程序的复杂度增加，我们可以将 reducer 拆分成多个小的 reducers，分别操作不同 state tree 的一部分；
  * 但是所有的 reducer 都应该是纯函数，不能产生任何的副作用；

## 安装

npm: ``npm install redux --save``

## 使用

### index

\src\store\index.js

``` js
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;
```

### 定义类型名

\src\store\constants.js

``` js
export const 类型名1 = "类型名1";
export const 类型名2 = "类型名2";
```

### 定义 Action

\src\store\actionCreators.js

``` js
import {
  类型名1,
  类型名2,
} from './constants.js';

export const 方法名1 = () => ({
  type: 类型名1,
})

export const 方法名2 = (参数名) => ({
  type: 类型名2,
  参数名
})
```

### 定义 reducer

\src\store\reducer.js

``` js
import {
  类型名1,
  类型名2,
} from './constants.js';

const defaultState = {
  变量名: 0,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 类型名1:
      return { ...state, count: state.变量名 + 1 }
    case 类型名2:
      return { ...state, count: state.变量名 + action.参数名 }
    default:
      return state;
  }
}

export default reducer;
```

### 结合React使用

``` js
import React, { PureComponent } from 'react'

import store from '../store'
import {
  方法名1,
  方法名2,
} from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      变量名: store.getState().变量名
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        变量名: store.getState().变量名
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.变量名}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
    )
  }

  increment() {
    store.dispatch(方法名1(1));
  }
  addNumber(num) {
    store.dispatch(方法名1(num));
  }
}
```

## Redux 流程图

![Redux流程图](./img/Redux流程图.jpg)

## React-Redux

### 安装

npm: ``npm install react-redux --save``

### 定义Store

* index

\src\store\index.js

``` js
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;
```

* 定义类型名

\src\store\constants.js

``` js
export const 类型名1 = "类型名1";
export const 类型名2 = "类型名2";
```

* 定义 Action

\src\store\actionCreators.js

``` js
import {
  类型名1,
  类型名2,
} from './constants.js';

export const 方法名1 = () => ({
  type: 类型名1,
})

export const 方法名2 = (参数名) => ({
  type: 类型名2,
  参数名
})
```

* 定义 reducer

\src\store\reducer.js

``` js
import {
  类型名1,
  类型名2,
} from './constants.js';

const defaultState = {
  变量名: 0,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 类型名1:
      return { ...state, count: state.变量名 + 1 }
    case 类型名2:
      return { ...state, count: state.变量名 + action.参数名 }
    default:
      return state;
  }
}

export default reducer;
```

### 导入

\src\index.js

``` js
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 使用

\组件名.js

``` js
import React from 'react';

import { connect } from 'react-redux';
import { 方法名1, 方法名2 } from "../store/actionCreators";


function 组件名(props) {
  return (
    <div>
      <h2>当前变量: {props.count}</h2>
      <button onClick={e => props.调用方法1()}>-1</button>
      <button onClick={e => props.调用方法2(参数)}>-5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    变量名: state.变量名
  }
};
const mapDispatchToProps = dispatch => {
  return {
    调用方法1: function () {
      dispatch(方法名1());
    },
    调用方法2: function (参数名) {
      dispatch(方法名2(参数名))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(组件名);
```

## Redux 异步操作

redux引入了中间件（Middleware）的概念： 
  * 这个中间件的目的是在dispatch的action和最终达到的reducer之间，扩展一些自己的代码；
  * 比如日志记录、调用异步接口、添加代码调试功能等等；

## Redux-thunk

官网推荐的、包括演示的网络请求的中间件是使用 redux-thunk

### 安装

npm: ``npm install redux-thunk --save``

### index

\store\index.js

``` js
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import thunkMiddle from 'redux-thunk'


// 应用中间件
const storeEnhancer = applyMiddleware(thunkMiddle)

const store = createStore(reducer, storeEnhancer);

export default store;
```

### actionCreators

\store\actionCreators.js

``` js
import axios from 'axios';
import {
  类型名
} from './constants.js';

export const 方法名 = (参数名) => ({
  type: 类型名1,
  参数名
})

// redux-thunk 中定义的action函数
export const getHomeMultidata = (dispatch) => {
  // 此处可进行网络请求，通过 dispatch(方法名(值)) 来设置数据
}
```

### 组件

``` js
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  方法名
} from '../store/actionCreators'

class 组件名 extends PureComponent {
  componentDidMount() {
    this.props.方法名();
  }

  render() {
    return (
      <div>
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  方法名() {
    dispatch(方法名);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(组件名);
```

## redux-devtools

redux-devtools 是浏览器插件，方便调试

### 安装

redux-devtools

### 使用

\store\index.js

``` js
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';

import thunkMiddle from 'redux-thunk'

// 集成 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true}) || compose;

// 应用中间件
const storeEnhancer = applyMiddleware(thunkMiddle)
const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
```

## Redux-saga

Redux-saga 是第三方的中间件

### 安装

npm: ``npm install redux-saga --save``

### 集成 redux-saga 中间件

``` js
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer.js';
import mySaga from './saga';

// 通过createSagaMiddleware函数来创建saga中间件
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware));
// 将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer);

// 必须启动saga中间件，并且传入其要监听的generator
sagaMiddleware.run(mySaga);

export default store;
```

### saga.js 文件的编写

* takeEvery：可以传入多个监听的 actionType，每一个都可以被执行（对应有一个 takeLastest，会取消前面的）
* put：在 saga 中派发 action 不再是通过 dispatch，而是通过 put；
* all：可以在 yield 的时候 put 多个 action；

``` js
import { takeEvery, put, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_HOME_MULTIDATA
} from "./constants";
import {
  changeBannersAction,
  changeRecommendsAction,
} from './actionCreators';

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  const data = res.data.data;
  yield all([
    put(changeBannersAction(data.banner.list)),
    put(changeRecommendsAction(data.recommend.list))
  ])
}

function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
}

export default mySaga;
```
