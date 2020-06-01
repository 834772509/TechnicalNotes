# Android与HTML5互调

## 加载网页

HTML5网页：新建 \src\main\ass\assets\index.html

``` HTML
<html lang="zh-CN">
  <p>hello world</p>
</html>
```

XML布局：

``` XML
<WebView
  android:id="@+id/webview"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content" />
```

Java代码：

``` Java
private WebView webview;
private Button btn;
@Override
protected void onCreate(Bundle savedInstanceState) {
   super.onCreate(savedInstanceState);
   setContentView(R.layout.activity_main);

   webview = (WebView) findViewById(R.id.webview);
   //设置支持JavaScript
   webview.getSettings().setJavaScriptEnabled(true);
   //配置调用Android函数
   webview.addJavascriptInterface(MainActivity.this, "Android");
   //设置不自动调用浏览器
   webview.setWebViewClient(new WebViewClient());
   //加载网页
   webview.loadUrl("file:///android_asset/index.html");
   //切换当前页面
   setContentView(webview);
}
```

## Android调用JavaScript

``` HTML
<html lang="zh-CN">
<script>
  function 函数名(){

  }
  function 函数名([参数1][,参数2]){

  }
</script>
</html>
```

``` Java
webview.loadUrl("javascript:函数名()");
webview.loadUrl("javascript:函数名(" + "'"   + "参数值1"+ "'"+ ",'"   + "参数值2"+ "'"+  ")");
```

## JavaScript调用Android

``` Java
//配置调用Android函数
webview.addJavascriptInterface(MainActivity.this, "Android");
```

``` HTML
<button onclick="Android.函数名()">调用安卓方法</button>
<button onclick="Android.函数名('参数1','参数2')">调用安卓方法</button>
```

``` Java
@JavascriptInterface
public void 函数名() {
  Toast.makeText(this, "JavaScript调用Android", Toast.LENGTH_SHORT).show();
}
@JavascriptInterface
public void 函数名(String msg) {
  Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
}
```

::: tip 提示
每个函数声明前都需要加```@JavascriptInterface```，否则无法调用
:::
