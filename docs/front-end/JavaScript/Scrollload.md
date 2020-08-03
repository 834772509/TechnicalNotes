# Scrollload

Scrollload是一个无依赖，体积极小（压缩+gzip后不到3k），可配置性高(可以自定义加载时候动画，加载完后的dom，提前加载的距离)，可扩展性强大（很方便做到指定容器内的滚动，多tab的滚动,异常处理，刷新重新加载等），性能好（在滚动的时候做了一些性能优化，如缓存window的高度，函数节流）的js插件

## 安装

``npm install scrollload --save``

(GitHub链接)[https://github.com/fa-ge/Scrollload]

## Demo

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<script src="Scrollload.js"></script>

<body>

  <div class="scrollload-container">
    <ul class="scrollload-content">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>

  <script>
    let page = 1
    new Scrollload({
      // container 和 content 两个配置的默认取的scrollload-container和scrollload-content类的dom。只要你按照以上的dom结构写，这两个配置是可以省略的
      container: document.querySelector('.scrollload-container'),
      content: document.querySelector('.scrollload-content'),
      // 底部加载中的html
      //loadingHtml: "加载中...",
      // 底部没有更多数据的html
      noMoreDataHtml: '没有更多数据了',
      loadMore: function (sl) {
        if (page === 6) {
          // 没有数据的时候需要调用noMoreData
          sl.noMoreData()
          return
        }

        setTimeout(() => {
          const li = document.createElement('li')
          li.innerText = "测试内容"
          sl.contentDom.appendChild(li)

          // 处理完业务逻辑后必须要调用unlock
          sl.unLock()
        }, 500)

      },
      // 下拉刷新
      enablePullRefresh: true,
      pullRefresh: function (sl) {
        setTimeout(() => {
          const li = document.createElement('li')
          li.innerText = "下拉刷新"
          sl.contentDom.appendChild(li)
          // 处理完业务逻辑后必须要调用refreshComplete
          sl.refreshComplete()
        }, 500)
      }
    })
  </script>

</body>
</html>
```