# Ajax

## 概念

Ajax : Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）  

主要作用是请求服务器上的文件并返回内容，用于 无刷新数据读取

## 阻止缓存

在请求URL后加上没有用的参数，如当前时间

## GET POST

### Get

通过URL链接传参，安全性较低，容量较小，有缓存

### Post

不通过URL链接传参，安全性较高，容量较大（2G），没有缓存

## Ajax

``` JavaScript
  function Ajax(url, method, SuccessFunction, ErrorFunction) {
    //创建Ajax对象
    let Ajax
    if (window.XMLHttpRequest) {
      Ajax = new XMLHttpRequest()
    } else {
      //兼容辣鸡IE浏览器
      Ajax = window.ActiveXObject("Microsoft.XMLHTTP")
    }
    //连接服务器
    //Ajax.open("请求方式","请求地址",是否异步)
    Ajax.open(method, url, true)
    //发送请求
    Ajax.send()
    //接受返回
    Ajax.onreadystatechange = function () {
      /*
      Ajax.readState：
        0：未初始化，还没调用open(方法)
        1：载入，已调用send()方法，作者发送请求
        2：解析，正在解析响应内容
        3：解析，正在解析响应内容
        4：完成，响应内容解析完成，可以在客户端调用
      */
      if (Ajax.readyState == 4) {
        //读取完成
        if (Ajax.status == 200) {
          //成功
          SuccessFunction(Ajax.responseText)
        } else {
          //失败，如果有失败回调函数则调用
          if (ErrorFunction) {
            ErrorFunction(Ajax.status)
          }
        }
      }
    }
  }
```

使用：

``` JavaScript
Ajax(URL链接, "get", (text) => {
  alert(text)
}, (status) => {
  alert("失败" + "\n状态码：" + status)
})
```

## 同步和异步

* 同步：一件一件来
* 异步：多件事一起，各干各的
