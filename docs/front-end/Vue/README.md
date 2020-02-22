# Vue笔记

## 基本概念

### 后端渲染 后端路由

* 后端渲染：由后端处理将渲染好的HTML页面并发送给客户端
* 后端路由：由后端处理URL和页面之间的映射关系

### 前后端分离

* 前后端分离：后端只负责提供数据
* 前端渲染：浏览器中显示的网页中的大部分内容,都是由前端写的js代码在浏览器中执行,最终渲染出来的网页

### 单页面富应用（SPA）

单页面富应用（SPA）整个页面只有一个HTML，所有页面都在里面（依次隐藏显示）
前端路由：URL与HTML页面间的映射关系

## 创建项目

1. ```vue ui``` 可视化创建项目
2. ```vue create 命令行项目目录```

    Router:路由
    Unit Tests:单元测试
    Linter / Formatter:Eslint代码规范检测
    选择Runtime-only（性能更好，所使用的代码量更少）

## 启动项目

启动项目：```npm run serve```
编译项目：```npm run build```

### 关闭Eslint代码规范检测

（神TM的各种奇葩规范）
\config\index.js\
```useEslint: false```

### 配置目录别名

新建文件 ```项目目录\vue.config.js```

``` js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}
```

::: tip 提示
不用配置```router```和```store```，因为可以全局访问
:::

### 解决build后打开空白问题

新建vue.config.js，内容：

``` js
module.exports = {
publicPath: './'
}
```

## 基本语法

### v-for

v-for为循环，后接表达式：变量 in 列表

``` HTML
<ul>
    <li v-for="item in textlist">{{item}}</li>
</ul>
```

绑定key用于更高效的更新虚拟DOM渲染
注意：key不能重复，不能用index

``` HTML
<ul>
  <li v-for="item in textlist" :key="item">{{item}}</li>
</ul>
<!--在遍历的过程中获取索引值-->
<ul>
  <li v-for="(item,index) in textlist">{{index+1}}:{{item}}</li>
</ul>
<!--获取key和value 格式：(value,key)-->
<ul>
  <li v-for="(value,key) in info">{{key}}:{{value}}</li>
</ul>
<!--获取key和value 格式：(value,key)-->
<ul>
  <li v-for="(value,key,index) in info">{{key}}:{{value}},{{index}}</li>
</ul>
```

### @click (v-on)

事件绑定，后接表达式：命令  
获取event事件对象：$eveut

``` HTML
<button @click="事件方法()">按钮</button>
<button v-on:click="事件方法()">按钮</button>
```

### @keyup

监听键盘的按键

``` HTML
<input type="txt" @keyup="keyup()">
<input type="txt" @keyup.enter="keyup()">
```

### v-model

双向绑定数据，后接双向绑定的变量

``` HTML
<input type="text" v-model="message">
```

### v-bind

#### 动态绑定属性

v-bind用于动态绑定属性，例如图片等
（双大括号无效）

简写:

``` HTML
<a :href="url2">v-bind简写测试</a>
```

普通写法：

``` HTML
<a v-bind:href="url2">v-bind测试</a>
```

### 动态绑定样式

后接表达式：{属性名 : 属性值}  

``` HTML
<h2 :style="{fontSize: '50px',color: color}">{{message}}</h2>
<h2 v-bind:class="getclass()">{{message}}</h2>
```

``` js
getclass() {
    return { active: this.isactive, line12: this.isline
    }
```

::: tip 提示
属性值注意增加单引号，否则会解析为变量
:::

### v-html

v-html为解析HTML，后接html字符串

``` HTML
<h1 v-html="url"></h1>
```

### v-once

v-once为只渲染一次，不随数据的改变而改变

``` HTML
<h1 v-once>{{message}}</h1>
```

### prevent修饰符

prevent修饰符，用于阻止默认程序事件

``` HTML
<form>
    <input type="submit" value="提交" @click.prevent="btnClick()">
</form>
```

### v-pre

v-pre为不解析，原封不动的显示出来

``` HTML
<h1 v-pre>{{message}}</h1>
```

### v-if

用于控制显现/隐藏，true为显现，false为隐藏

``` HTML
<h2 v-if="true">{{message}}</h2>
<!--v-else与v-if的值相反，当v-if为false时v-else则显示-->
<h2 v-else>{{message}}</h2>
```

::: tip 提示
此方法是完全隐藏，不显示在dom中，适合切换频率低的环境
:::

### v-show

v-show用于控制显现/隐藏，true为显现，false为隐藏

``` HTML
<h2 v-show="true">{{message}}</h2>
```

::: tip 提示
只是给元素增加display:none，适合切换频率高的环境
:::

## 组件

### 创建组件

.Vue

``` HTML
<template>
  <div>

  </div>
</template>

<style>
</style>

<script>
  export default {
    name: '',
    data(){
      return {

      }
    },
    components: {

    },
    methods: {

    },
    props: {
    }
  }
</script>
```

### 注册组件

``` js
import 组件名称 from '@/components/组件路径名称'

export default {
components: {
  组件名称,
},
```

### 使用组件

``` HTML
<组件名称></组件名称>
```

## 路由

### 创建路由

1. 创建路由组件
views\XXX.vue

``` HTML
<template>
  <div class="XXX">

  </div>
</template>
```

2. 配置路由映射
router\index.js

``` js
//懒加载方式
const XXX = () => import ('../views/XXX.vue')
//普通加载方式
//import XXX from '../views/XXX.vue'
const routes = [
{
  path: '/XXX',
  name: 'XXX',
  component: XXX
}
```

3. 使用路由：

``` HTML
<router-link>to=" /XXX">XXX</router-link>
<router-link>to="/XXX" tag="指定渲染的组件（如button、li）">XXX</router-link>
<router-view />
```

代码跳转：

``` js
this.$router.push('/XXX')
```

### 保持页面状态

``` HTML
<keep-alive>
  <router-view />
</keep-alive>
```

### 路由传参

1. 方法一
    XXX.vue:

    ``` HTML
    <router-link :to="'/XXX/'+变量名">用户</router-link>
    ```

    代码传参：
    this.$router.push('/XXX' + this.变量名)  
    访问参数：this.$route.params.XXX

1. 方法二

    ``` HTML
    <router-link :to="{path: '/跳转页面',query: {参数1: 值1[,参数2: 值2]}}">页面名</router-link>
    ```

    代码传参：

    ``` HTML
    <button @click="传参()">用户</button>
    传参() {
        this.$router.push({
            path: '/跳转页面',
            query: {
                参数1: 值1,
                参数2: 值2,
                }
            })
        }
    ```

    访问参数：{{$route.query.参数名}}

### 导航守卫

index.js

``` js
const routes = [
    {
        path: '/XXX',
        meta: {
            title: "页面名"
    }
 router.beforeEach((to, from, next) => {
     //从form跳转到to
     document.title=to.matched[0].meta.title
     next()
    })
```

## Vuex

### 介绍

Vuex用于管理各个组件之间的共享变量

### 安装

```npm install vuex --save```

### 目录结构

```
├─ store
│  ├─ actions.js
│  ├─ getters.js
│  └─ index.js
│  └─ mutations.js
├── modules
│  └─ moduleA.js
```

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

### 设置共享变量

\store\index.js

``` js
export default new Vuex.Store({
  state: {
    变量名: 值,
  },
})
```

### 使用共享变量

```$store.state.变量名```

### 修改共享变量（mutations）

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

使用修改方法：

``` js
this.$store.commit('方法名')
this.$store.commit('方法名,参数名')
//传递多个参数
const test = {id:01,name:"a",age:18}
this.$store.commit('方法名,test')
```

::: tip 提示
不推荐使用 ```$store.state.变量名 = XXX``` 修改变量，跳过了很多流程
:::

### getter方法（类似计算属性）

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

### Vue-modueles

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
//
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

## 常用组件使用实例

### 单选框

``` HTML
<input type="radio" id="male" name="sev" value="男" v-model="sex">男
<input type="radio" id="female" name="sev" value="女" v-model="sex">女
<br>
<h2>{{sex}}</h2>
```

### 多选框

``` HTML
<!--label标签作用：点击文字也能触发检查框-->
<label><input type="checkbox" id="agree" v-model="isagerr">同意协议</label>
<button :disabled="!isagerr">下一步</button>
<!------------------------------------------------------------------------------------>
<input type="checkbox" value="测试选项1" v-model="totalcheckbox">测试选项1
<input type="checkbox" value="测试选项2" v-model="totalcheckbox">测试选项2
<input type="checkbox" value="测试选项3" v-model="totalcheckbox">测试选项3
<input type="checkbox" value="测试选项4" v-model="totalcheckbox">测试选项4
<!------------------------------------------------------------------------------------>
<label v-for="item in totealselect">
<input type="checkbox" :value="item" v-model="totalcheckbox">{{item}}
</label>
```

### 下拉选择框

``` HTML
<select v-model="selectvalue">
    <option>测试选项1</option>
    <option>测试选项2</option>
    <option>测试选项3</option>
    <option>测试选项4</option>
    <option>测试选项5</option>
</select>
```

## HTML-Vue模板

::: details 点击查看代码

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
</head>
<body>
    <div id="app">
        <h1>{{message}}</h1>
    </div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
app = new Vue({
    //声明要绑定的id
    el: '#app',
    //数据对象
    data: {

    },
    //计算属性：属性名称(){} （调用时不需要加小括号）
    computed: {

    },
    //定义方法：方法名称(){}
    //当前对象内需要加this
    methods: {

    },
    //页面加载完毕后执行的方法
    created(){

    }
    })
</script>
</body>
</html>
```

:::

## swiper（触摸框架）

### 安装

```npm install swiper --save-dev```

### 图片轮播

``` HTML
<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
<swiper-slide>页面1</swiper-slide>
<swiper-slide>页面2</swiper-slide>
<swiper-slide>页面3</swiper-slide>
<div class="swiper-pagination" slot="pagination"></div>
<div class="swiper-button-prev" slot="button-prev"></div>
<div class="swiper-button-next" slot="button-next"></div>
</swiper>
```

``` js
export default {
    data() {
        // swiper轮播的参数
        swiperOption: {
          // 滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          // 上一张，下一张
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //开启循环切换
          loop: true,
          //设置自动切换图片
          autoplay: true,
          //设置触碰后自动切换停止
          disableOnInteraction: true,
        }
      }
```

## axios

测试请求网站
<http://httpbin.org>

### 封装

为防止第三方请求框架凉凉，需要封装自己的NetWork库，以便凉凉时更换框架

#### 目录结构

``` 
├─ src
├── network
│     ├─ request.js
```

#### 封装代码

* request.js

``` js
import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
      baseURL: '',
      timeout: 3000
    })
    //发送网络请求
    return instance(config)
  }
```

使用：

``` js
request({
  url: '/',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

### 全局配置

#### 设置全局URL

``` js
axios.defaults.baseURL=''
```

#### 超时时间（毫秒）

``` js
axios.defaults.timeot=5000
```

### 创建axios实例

``` js
const axios1 = axios.create({
  baseURL: 'URL链接',
  timeout: 超时时间（毫秒）
})
```

### 请求数据

``` js
axios({
  url: '指定的URL',
  //指定请求方式（默认为get）
  methods: 'get',
  //指定请求get方式的参数拼接(?)
  params: {
    参数: 值,
  },
}).then(res => {
  console.log(res);
})
```

### 并发请求

``` js
axios.all([axios(){
  url:''
},axios({
  url:''
})]).then(res => {
  console.log(res)
}
```
