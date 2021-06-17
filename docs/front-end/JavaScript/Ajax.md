# Ajax

## 概念

Ajax : Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）

主要作用是请求服务器上的文件并返回内容，用于 无刷新数据读取

## 阻止缓存

在请求 URL 后加上没有用的参数，如当前时间

## GET POST

### Get

暴露参数，参数长度有限制。一般用于查询

### Post

由 requestbody 携带，一般用于提交

## Ajax

```JavaScript
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

```JavaScript
Ajax(URL链接, "get", (text) => {
  alert(text)
}, (status) => {
  alert("失败" + "\n状态码：" + status)
})
```
