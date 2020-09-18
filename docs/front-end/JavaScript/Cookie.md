# Cookie

`Cookie` 用来保存信息，如自动登录的用户名

- 同一个网站的所有页面共享一套 Cookie
- Cookie 的数量、大小有限
- Cookie 有过期时间

## 封装函数

```JavaScript
  function setCookie(name, value, day) {
      let date = new Date()
      date.setDate(date.getDate() + day)
      document.cookie = name + "=" + value + ";expires=" + date
  }

  function getCookie(name) {
      let arr = document.cookie.split("; ")
      for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("=")
          if (arr2[0] == name) {
              return arr2[1]
          }
      }
      return ""
  }

  function delCookie(name) {
      setCookie(name, 1, -1)
  }
```

## 设置 Cookie

```JavaScript
document.cookie = "键=值"
```

::: tip 提示
`document.cookie =` 是增加数据，不是覆盖数据
:::

## 设置 Cookie 过期时间

::: tip 提示
默认 Cookie 过期时间为浏览器关闭
:::

```JavaScript
let date = new Date()
//7天
date.setDate(date.getDate() + 7)
document.cookie = "键1=值1" + ";expires=" + date
```

## 读取 Cookie

对`document.cookie`获取的值进行分割拆分

```JavaScript
let arr = document.cookie.split("; ")
for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("=")
    if (arr2[0] == 键) {
        console.log(arr2[1])
    }
}
```

## 删除 Cookie

利用过期时间，将 Cookie 进行删除

```JavaScript
let date = new Date()
date.setDate(date.getDate() -1)
document.cookie = "键=1" + ";expires=" + date
```
