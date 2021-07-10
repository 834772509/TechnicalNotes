# 路由

## 创建路由

1. 创建路由组件

   views\XXX.vue

   ```HTML
   <template>
     <div class="XXX">

     </div>
   </template>
   ```

2. 配置路由映射

   router\index.js

   ```js
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

   ```HTML
   <router-link>to=" /XXX">XXX</router-link>
   <router-link>to="/XXX" tag="指定渲染的组件（如button、li）">XXX</router-link>
   <router-view />
   ```

   代码跳转：

   ```js
   //跳转指定页面
   this.$router.push("/XXX");
   //返回上一级页面
   this.$router.back();
   ```

## 保持页面状态

```HTML
<keep-alive>
  <router-view />
</keep-alive>
```

- 排除指定页面不保持状态

  ```HTML
  <keep-aliv exclude="页面名称">
    <router-view />
  </keep-alive>
  ```

- 指定页面需要指定页面名称：

  ```JavaScript
  export default {
    name: '页面名称'
  }
  ```

## 路由传参

- 方法一
  XXX.vue:

  ```HTML
  <router-link :to="'/XXX/'+变量名">用户</router-link>
  ```

  代码传参：

  - `this.$router.push('/XXX' + this.变量名)`
  - 访问参数：`this.$route.params.XXX`

- 方法二

  ```HTML
  <router-link :to="{path: '/跳转页面',query: {参数1: 值1[,参数2: 值2]}}">
    页面名
  </router-link>
  ```

  代码传参：

  ```HTML
  <button @click="传参()">用户</button>
  ```

  ```js
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

  访问参数：`{{$route.query.参数名}}`

## 导航守卫

路由跳转过程中的一些钩子函数

index.js

```js
const routes = [
  {
    path: '/XXX',
    meta: {
      title: "页面名"
    }
    router.beforeEach((to, from, next) => {
     //从form跳转到to
     //改变网页标题
     document.title = to.matched[0].meta.title;
     next();
    })
  }
]
```

## 阻止重复点击报错

\src\router\index.js

```js
//重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

//重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
```
