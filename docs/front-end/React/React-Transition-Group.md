# React-Transition-Group

React曾为开发者提供过动画插件react addons-css-transition-group，后由社区维护，形成了现在的react-transition-group。  
这个库可以帮助我们方便的实现组件的入场和离场动画，使用时需要进行额外的安装。  
react-transition-group本身非常小，不会为我们应用程序增加过多的负担。

## 安装

npm : ``npm install react-transition-group --save``
yarn : ``yarn add react-transition-group``

## Transition

该组件是一个和平台无关的组件 (不定要结合CSS)  。
在前端开发中，我们一般是结合CSS来完成样式，所以比较常用的是CSSTransition

## CSSTransition

在前端开发中，通常使用CSS Transition来完成过渡动画效果

CSSTransition执行过程中，有三个状态：
  1. appear : 开始状态，对应的类是：- appear、 -enter、 exit
  2. enter : 执行动画，对应的类是：-appear-active、-enter-active、 -exit-active
  3. exit : 执行结束，对应的类是-appear-done、-enter-done、 -exit- done

### 基本使用

``` js
import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './CSS名.css'


export default class 组件名 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true
    }
  }

  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={e => this.setState({ isShow: !isShow }) } type="primary">显示/隐藏</button>
        <CSSTransition
          // 设置类名
          classNames="动画类名"
          in={this.state.isShow}
          timeout={300}
          // 设置隐藏后从DOM中卸载
          unmountOnExit={true}
          // 增加页面加载动画
          appear

          // 生命周期
          onEnter={el => { console.log("进入状态"); }}
          onEntering={el => { console.log("正在进入"); }}
          onEntered={el => { console.log("进入完成"); }}

          onExit={el => { console.log("开始退出"); }}
          onExiting={el => { console.log("退出状态"); }}
          onExited={el => { console.log("退出完成"); }}
          >
        </CSSTransition>
      </div>
    )
  }
}
```

\CSS名.css

``` CSS
.动画类名-enter , .动画类名-appear {
  /* 开始状态 */
  opacity: 0; 
  transform: scale(.6);
}

.动画类名-enter-active , .动画类名-appear-active {
  /* 执行动画 */
  opacity: 1; 
  transform: scale(1);
  transition: opacity 300ms,transform 300ms;
}

.动画类名-enter-done , .动画类名-appear-done {
  /* 进入完成 */

}

.动画类名-exit {
  /* 开始退出 */
  opacity: 1;
  transform: scale(1)
}

.动画类名-exit-active {
  /* 退出状态 */
  opacity: 0;
  transform: scale(.6);
  transition: opacity 300ms,transform 300ms;
}

.动画类名-exit-done {
  /* 退出完成 */
  opacity: 0;
}
```

### 生命周期

``` js
<CSSTransition
  onEnter={el => { console.log("进入状态"); }}
  onEntering={el => { console.log("正在进入"); }}
  onEntered={el => { console.log("进入完成"); }}

  onExit={el => { console.log("开始退出"); }}
  onExiting={el => { console.log("退出状态"); }}
  onExited={el => { console.log("退出完成"); }}
  >
</CSSTransition>
```

## SwitchTransition

两个组件显示和隐藏切换时，使用该组件

### 基本使用

``` js
import React, { PureComponent } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import "./CSS名.css"


export default class 组件名 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true,
    }
  }

  render() {
    const { isOn } = this.state

    return (
      <div>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={isOn ? "on" : "off"}
            classNames="动画类名"
            timeout={300}
          >
            <button onClick={e => this.setState({ isOn: !isOn })}>{isOn ? "开" : "关"}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
```

\CSS名.css

``` CSS
.动画类名-enter{
  opacity: 0;
  transform: translateX(100%);
}

.动画类名-enter:active{
  opacity: 1;
  transition: opacity 300ms;
  transform: translateX(0);
}

.动画类名-exit{
  opacity: 1;
}

.动画类名-exit-active{
  opacity: 0;
  transition: opacity 300ms;
  transform: translateX(-100%);
}
```

## TransitionGroup

将多个动画组件包裹在其中，一般用于列表中元素的动画

### 基本使用

``` js
import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import './CSS名.css'

export default class 组件名 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ["aaa", "bbb", "ccc"],
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
        {
          this.state.names.map((动画类名, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="动画类名"
              >
                <div key={index}>{动画类名}</div>
              </CSSTransition>
            )
          })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
        
      </div>
    );
  }

  addName() { 
    this.setState({
      names: [...this.state.names,"ddd"]
    })
  }
}
```

\CSS名.css

``` css
.动画类名-enter {
  /* 开始状态 */
  opacity: 0; 
  transform: scale(.6);
}

.动画类名-enter-active {
  /* 执行动画 */
  opacity: 1; 
  transform: scale(1);
  transition: opacity 300ms,transform 300ms;
}

.动画类名-enter-done {
  /* 进入完成 */
  color:red;
}

.动画类名-exit {
  /* 开始退出 */
  opacity: 1;
  transform: scale(1)
}

.动画类名-exit-active {
  /* 退出状态 */
  opacity: 0;
  transform: scale(.6);
  transition: opacity 300ms,transform 300ms;
}

.动画类名-exit-done {
  /* 退出完成 */
  opacity: 0;
}
```
