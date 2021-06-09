# swiper（触摸框架）

## 安装

`npm install swiper --save`

## 图片轮播

```HTML
<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
<swiper-slide>页面1</swiper-slide>
<swiper-slide>页面2</swiper-slide>
<swiper-slide>页面3</swiper-slide>
<div class="swiper-pagination" slot="pagination"></div>
<div class="swiper-button-prev" slot="button-prev"></div>
<div class="swiper-button-next" slot="button-next"></div>
</swiper>
```

```js
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

```js
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
