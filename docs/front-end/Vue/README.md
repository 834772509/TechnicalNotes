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

### 命令式编程和函数式编程

* 命令式编程：一步一步命令
* 函数式编程：先拿到数据，然后再处理

### Vue响应式原理

1. app.message修改数据，Vue是如何监听message数据的改变

* object.defineProperty -> 监听对象属性的改变

2. 当数据发生改变，Vue是如何知道要通知哪些人，界面发生刷新

![avatar](/img/front-end/Vue/响应式原理.png)

## 创建项目

安装Vue脚手架：```npm install -g @vue/cli```

* ```vue ui``` 可视化创建项目
* ```vue create 命令行项目目录```

* Router:路由
* Unit Tests:单元测试
* Linter / Formatter:Eslint代码规范检测（不推荐选择）
* 选择Runtime-only（性能更好，所使用的代码量更少）
* 选择```dist-sass```，```node-sass```编译缓慢

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

### 解决build后路由跳转404

index.js  
取消history

``` js
const router = new VueRouter({
  //mode: 'history',
})
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

#### prevent修饰符

prevent修饰符，用于阻止默认程序事件

``` HTML
<form>
    <input type="submit" value="提交" @click.prevent="btnClick()">
</form>
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

### v-load

v-load用于监听图片是否加载完成

``` HTML
<img :src="" @load="事件名称">
```

``` js
export default {
  methods: {
    事件名称(){

    },
},
```

### 过滤器

``` HTML
{{变量名 | 过滤器名}}
```

``` javaScript
export default {
  filters: {
    过滤器名(value){
      return value;
    }
  },
}

```

### nextTick函数

nextTick函数是待所有DOM组件创建完成后执行的回调函数，此时$ref等可以直接使用

``` JavaScript
export default {
  created() {
  this.$nextTick(()=>{

  })
  }
}
```

## 组件

### 创建组件

.Vue

``` HTML
<template>
  <div>

  </div>
</template>

<style scoped>
</style>

<script>
  export default {
    name: '',
    //传参：父传子，写法：["形参1"[,"形参2"]]
    props: {

    },
    created(){

    },
    mounted(){

    },
    data(){
      return {

      }
    },
    methods: {

    },
    mixins: [],
    components: {

    },
  }
</script>
```

::: tip 提示
```<style scoped></style>``` 中的scoped表示作用域，不予其他CSS样式相冲突
:::

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

### 组件传参

* 父传子

``` JS
export default {
  //传参：父传子，写法：["形参1"[,"形参2"]]
  props: ["参数1", "参数2"],
  //限制数据类型传参
    props: {
    参数1: Array,
    参数2: String,
    },
  /*
  支持验证以下类型：
  String
  Number
  Boolean
  Array
  Object
  Date
  Function
  Symbol
  */
}
```

``` HTML
<组件 参数1="" [参数2=""]...></组件>
```

* 子传父

``` JS
export default {
  template: "#cpn",
  methods: {
    btnClick([参数]){
      //发射事件：自定义事件
      this.$emit("事件名称" [,参数])
      }
      },
}
```

``` HTML
<组件 @事件名称="事件方法()"></组件>
```

::: tip 提示
如提示```$emit```不是一个函数则将父函数写为箭头函数
:::

### 组件事件

``` HTML
<组件 @click.native="事件方法()"></组件>
```

::: tip 提示
native修饰符用于监听组件根元素的原生组件
:::

## 混入

混入是对重复代码进行封装，与组件类似。但是混入后的组件可之间访问变量（相当于合并代码）

### 声明

mixin.js

``` JavaScript
import 组件名称 from 'components/组件名称'

export const 混入名称 = {
  created(){

  },
  mounted(){

  },
  data() {
    return {

    }
  },
  methods:{

  },
  components: {
    组件名称,
  }
}
```

### 使用

``` HTML
<组件名称></组件名称>
```

``` JavaScript
import { 混入名称 } from 'common/mixin'

export default {
  //混入
  mixins: [混入名称],
}
```

## 插槽

``` HTML
<template>
<div>
  <slot name="插槽名称"><span>插槽</span></slot>
</div>
</template>
```

``` HTML
<组件>
  <template v-slot:插槽名称> 
    <h2>这是left插槽</h2>
  </template>
</组件>
```

## 绑定元素

``` HTML
<div ref="元素标识"></div>
```

``` js
thsi.$ref.元素标识
```

::: tip 提示
ref如果是绑定在组件中的,那么通过this.$refs.refname获取到的是一个组件对象
ref如果是绑定在普通的元素中,那么通过this.$refs.refname获取到的是一个元素对象
:::

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
//跳转指定页面
this.$router.push('/XXX')
//返回上一级页面
this.$router.back();
```

### 保持页面状态

``` HTML
<keep-alive>
  <router-view />
</keep-alive>
```

排除指定页面不保持状态

``` HTML
<keep-aliv exclude="页面名称">
  <router-view />
</keep-alive>
```

指定页面需要指定页面名称：

``` JavaScript
export default {
  name: '页面名称'
}

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
    ```

    ``` js
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

路由跳转过程中的一些钩子函数

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
     //改变网页标题
     document.title=to.matched[0].meta.title
     next()
    })
```

### 阻止重复点击报错

\src\router\index.js

``` js
//重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
//重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
```

## Vuex

### 介绍

Vuex用于管理各个组件之间的共享变量、事件等

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

### mutations方法（修改共享变量）

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

### actions方法（类似mutations方法）

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

#### mapGetters 辅助函数

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

### getter方法（类似计算属性）

#### 使用

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

#### mapGetters 辅助函数

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

### 事件总线

事件总线用来共享事件（如子组件向祖父组件发送事件）

main.js

``` js
Vue.prototype.$bus = new Vue()
```

#### 发射事件

``` js
this.$bus.$emit('事件名称')
```

#### 接收事件

``` js
this.$bus.$on('事件名称',回调函数([参数]))
```

## 防抖函数（节流）

作用是将频繁执行的函数减缓次数，理想情况下只执行一次

``` js
debounce(func,delay){
  let timer = null;
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    }, delay)
  }
}
```

使用防抖函数:

``` js
const 防抖函数名称 = this.debounce(需要进行防抖处理的函数名称, 200)
防抖函数名称()
```

::: tip 提示
”需要进行防抖处理的函数名称“不能加入()，否则会识别为函数的返回值
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
    //页面加载完毕后执行的方法（渲染前）
    created(){

    },
    //页面加载完毕后执行的方法（渲染后）
    mounted(){

    },
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
    })
</script>
</body>
</html>
```

:::

## swiper（触摸框架）

### 安装

```npm install swiper --save```

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
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide,
    },
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
      },
}
```

## Better-Scroll 滚动条插件

``` js
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    //传参：父传子，写法：["形参1"[,"形参2"]]
    props: {
      probeType:{
        type:Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }

    },
    created(){

    },
    mounted(){
      //创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad,
      })
      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll' , position)
      })
      //监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    data() {
      return {
        scroll: null,
      }
    },
    methods: {
      //跳转
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      //上拉完成事件
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      //刷新
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    },
    components: {

    },
  }
</script>
```

## axios

测试请求网站
<http://httpbin.org>

### 安装

```npm install axios --save```

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
    //拦截发送请求
    instance.interceptors.request.use(config =>{
      //此处处理发送请求的数据
      //返回数据
      return config;
    }, err =>{
      //此处处理发送请求的数据
      //console.log(err);
    })
    //拦截响应
    instance.interceptors.response.use(res =>{
      //此处处理请求返回的数据
      console.log(res);
      //返回数据
      return res;
    }, err =>{
      //此处处理响应请求失败
      //config.log(err)
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

### 拦截器

#### 拦截发送请求

拦截的是发送的请求（发送前的相关配置信息）

使用案例：

* 处理config中的一些不符合服务器的信息
* 发送网络请求时，显示请求动画
* 某些网络请求（比如登陆），必须携带一些特殊的信息

``` js
axios.interceptors.request.use(config =>{
  //此处处理发送请求的数据
  //返回数据
  return config;
  }, err =>{
    //此处处理发送请求失败
    //console.log(err);
})
```

#### 拦截响应请求

``` js
axios.interceptors.response.use(res =>{
  //此处处理请求返回的数据
    console.log(res);
  //返回数据
  return res;
  }, err =>{
    //此处处理响应请求失败
    //config.log(err)
})
```

## falstclick

解决移动端点击300毫秒延时

### 安装

```npm install fastclick --save```

### 使用

main.js

``` JavaScript
import FastClick from 'fastclick'

FastClick.attach(document.body)
```

## 图片懒加载

图片需要显示在屏幕上时，再加载这张图片

### 安装

```npm install vue-lazyload -save```

### 配置

main.js

``` JavaScript
import VueLazyLoad from 'Vue-lazyload'

Vue.use(VueLazyLoad,{
  loading: require(占位加载图片路径),
})
```

### 使用

.vue

将src属性替换为v-lazy

``` HTML
<!-- <img scr=""> -->
<img v-lazy="">
```

## css单位转换插件

### 安装

```npm install postcss-px-to-viewport --save-dev```

### 使用

创建\src\postcss.config

``` JavaScript
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      //视窗宽度（设计稿的宽度）
      viewportWidth: 375,
      //视窗高度（设计稿的高度）
      viewportHeight: 667,
      //指定转换后的单位的小数位数
      unitProcision: 5,
      //指定需要转换的单位（建议vw）
      viewportUnit: 'vw',
      //指定不需要转换的类
      selectorBlacckList: ['ignore', 'tab-bar', 'tab-bar-item'],
      //小于或等于1px不转换px
      minPixelValue: 1,
      //允许在媒体查询中转换px
      mediaQuery: false,
      exclude: [/TabBar/],
    }
  }
}
```

## wowjs 插件

WOW.js 使得在页面滚动时展示动画效果，滚动条滚动到哪里就显示一个动画效果

### 安装

```npm install wowjs --save-dev```

### 配置

\src\main.js

``` JavaScript
import wow from 'wowjs'
import 'animate.css'

Vue.prototype.$wow = wow
```

### 使用

 .vue

``` Vue
<template>
  <div>
    <div class="wow 动画样式名称 test_wow1" data-wow-duration="1s"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      new this.$wow.WOW().init()
    }
  }
</script>
```

::: tip 提示
动画样式名称可在[Animate.css](https://daneden.github.io/animate.css)中查询
:::

常用动画样式：

* 淡入：```fadeIn```
* 上移：```slideInUp```
* 下移：```slideInDown```
* 左移：```slideInLeft```
* 右移：```slideInRight```
