
# Vuex

Vuex用于管理各个组件之间的共享变量、事件等

## 安装

```npm install vuex --save```

## 目录结构

```
├─ store
│  ├─ actions.js
│  ├─ getters.js
│  └─ index.js
│  └─ mutations.js
├── modules
│  └─ moduleA.js
```

main.js

``` js
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

const state = {
  counter: 0,
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  modules: {
    a: moduleA
  }
})
```

getters.js、actions.js、moduleA.js

``` js
export default {

}
```

## 设置共享变量

\store\index.js

``` js
export default new Vuex.Store({
  state: {
    变量名: 值,
  },
})
```

## 使用共享变量

```$store.state.变量名```

## mutations方法（修改共享变量）

\store\index.js

``` js
export default new Vuex.Store({
  mutations: {
    方法名(state) {
      state.变量名 = 0
    },
    方法名(state,参数名) {
        state.变量名 = 0
    },
  }
})
```

使用mutations方法：

``` js
this.$store.commit('方法名')
this.$store.commit('方法名',参数名)
//传递多个参数
const test = {id:01,name:"a",age:18}
this.$store.commit('方法名',test)
```

::: tip 提示
不推荐使用 ```$store.state.变量名 = XXX``` 修改变量，跳过了很多流程
:::

## actions方法（类似mutations方法）

``` js
export default new Vuex.Store({
  actions: {

  }
})
```

使用actions方法：

``` js
this.$store.dispatch('方法名')
```

::: tip 提示

* Action提交的是Mutation，不能够直接修改state中的状态，而Mutations是可以直接修改state中状态的
* Action是支持异步操作的，而Mutations只能是同步操作
:::

## mapGetters 辅助函数

将 store 中的 actions方法 映射到局部方法

``` js
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'actions方法名',
      'actions方法名',
      ])
    },
}
```

使用：

``` JavaScript
this.actions方法名()
this.actions方法名(参数1,参数2)
```

## getter方法（类似计算属性）

\store\index.js

``` js
export default new Vuex.Store({
  getters: {
      计算属性名(state){
          return state.变量名
      },
      计算属性名(state){
          return function(参数1[,参数2]){
              return state.变量名 + 参数1
        }
      },
  }
})
```

使用getter方法：

``` js
{{$store.getters.计算属性名}}
{{$store.getters.计算属性名(1)}}
```

## mapGetters 辅助函数

将 store 中的 getter 映射到局部计算属性

``` js
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      '计算属性名',
      '计算属性名',
      ])
    },
}
```

使用：

``` JavaScript
this.计算属性名
```

## Vue-modueles

 \store\index.js

``` js
//创建对象
const 模块对象名称 = {
      state: {
      },
      mutations: {
      },
      getters: {
      },
      actions: {
      }
}
//声明模块
export default new Vuex.Store({
  modules: {
    模块名称: 模块对象名称,
  }
})
```

使用modules：

``` js
{{$store.state.模块名称.name}}
```

::: tip 提示
mutations、getters可以常规使用
:::

## 事件总线

事件总线用来共享事件（如子组件向祖父组件发送事件）

main.js

``` js
Vue.prototype.$bus = new Vue()
```

### 发射事件

``` js
this.$bus.$emit('事件名称')
```

### 接收事件

``` js
this.$bus.$on('事件名称',回调函数([参数]))
```
