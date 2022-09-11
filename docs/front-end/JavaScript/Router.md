# 路由原理

## 基于 Hash

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">
      <a href="#/home">首页</a>
      <a href="#/about">关于</a>

      <div class="router-view"></div>
    </div>

    <script>
      // 获取 router-view 的DOM
      const routerViewEL = document.querySelector(".router-view");

      // 监听URL的改变
      window.addEventListener("hashchange", () => {
        console.log(location.hash);
        switch (location.hash) {
          case "#/home":
            routerViewEL.innerHTML = "首页";
            break;
          case "#/about":
            routerViewEL.innerHTML = "关于";
            break;
          default:
            routerViewEL.innerHTML = "";
            break;
        }
      });
    </script>
  </body>
</html>
```

## 基于 History

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">
      <a href="/home">首页</a>
      <a href="/about">关于</a>

      <div class="router-view"></div>
    </div>

    <script>
      // 获取 router-view 的DOM
      const routerViewEL = document.querySelector(".router-view");

      // 获取所有的a元素，自己监听a元素的改变
      const aEls = document.getElementsByTagName("a");
      for (const item of aEls) {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const href = item.getAttribute("href");
          history.pushState({}, "", href);
          urlChange();
        });
      }

      // 执行返回/前进操作时，依然调用urlChange
      window.addEventListener("popstate", urlChange);

      // 监听URL的改变
      function urlChange() {
        console.log("urlChange", location.pathname);
        switch (location.pathname) {
          case "/home":
            routerViewEL.innerHTML = "首页";
            break;
          case "/about":
            routerViewEL.innerHTML = "关于";
            break;
          default:
            routerViewEL.innerHTML = "";
            break;
        }
      }
    </script>
  </body>
</html>
```
