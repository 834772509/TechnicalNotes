# Android 笔记

## 安装Android Studio

### 下载并安装

[Android Studio](https://developer.android.google.cn/studio)

### 汉化补丁

[JetBrains 系列软件汉化包](https://github.com/pingfangx/TranslatorX)

### 修复没有运行按钮

[安装NDK](https://developer.android.google.cn/ndk/downloads)

解压后将解压目录增加至环境变量即完成安装

### 一键连接MUMU模拟器

``` bat
@echo off
set adbPath=C:\Program Files (x86)\MuMu\emulator\nemu\vmonitor\bin
cd /d %adbPath%
taskkill /f /im adb_server.exe
taskkill /f /im adb.exe
"%adbPath%\adb_server.exe" connect 127.0.0.1:7555
goto :eof
```

## 生命周期

1. onCreate() ，不可见状态
在 Activity 被创建时回调，第一个生命周期。我们一般在创建 Activity 时需要重写该方法做一些初始化的操作，如通过 setContentView 设置界面布局的资源，初始化所需要的组件信息等。

2. onStart() ，可见状态
该方法回调表示 Activity 正在启动，此时 Activity 处于可见状态，只是还没有在前台显示，因此用户也无法交互。可以简单理解为 Activity 已显示却无法被用户看见。

3. onResume() ，可见状态
Activity 已在在屏幕上显示 UI 并允许用户操作了。当 Activity 停止后（onPause、onStop 方法被调用），重新回到前台时也会调用 onResume 方法。可以在 onResume 方法中初始化一些资源，比如打开相机或开启动画。

4. onPause() ，可见状态
Activity 正在停止（Paused 形态），通常接下来 onStop() 会被回调 。但通过流程图可见，另一种情况是 onPause() 执行后直接执行了 onResume 方法，这可能是用户点击 Home 键，让程序退回到主界面，程序在后台运行时又迅速地再回到到当前的 Activity，此时 onResume 方法就会被回调。我们可以在 onPause 方法中做一些数据存储、动画停止、资源回收等操作。另外，onPause 方法执行完成后，新 Activity 的 onResume 方法才会被执行。所以 onPause 不能太耗时，因为这可能会影响到新的 Activity 的显示。

5. onStop() ，不可见状态
Activity 即将停止或者完全被覆盖（Stopped 形态），此时 Activity 不可见，仅在后台运行。同样地，在 onStop 方法可以做一些资源释放的操作，不能太耗时。

6. onRestart(），可见状态
表示 Activity 正在重新启动，由不可见状态变为可见状态。这种情况，一般发生在用户打开了一个新的 Activity 时，之前的 Activity 就会被 onStop，接着又回到之前 Activity 页面时，之前的 Activity 的 onRestart 方法就会被回调。

7. onDestroy() ，不可见状态
表示 Activity 正在被销毁，也是生命周期最后一个执行的方法，一般我们可以在此方法中做一些回收工作和最终的资源释放。

## 基础命令

### 打印输出

``` Java
Log.i("打印内容")
```

### 退出程序

``` Java
System.exit(0);
```

### 连续返回两次则退出程序

``` Java
@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
  if (keyCode == KeyEvent.KEYCODE_BACK){
    if ((System.currentTimeMillis() - exitTime) >2000){
      Toast.makeText(this, "再按一次退出程序", Toast.LENGTH_SHORT).show();
      exitTime = System.currentTimeMillis();
    }else {
        System.exit(0);
      }
      return true;
  }
  return super.onKeyDown(keyCode, event);
}
```

## 页面跳转

### 常规跳转

``` Java
Intent intent = new Intent(this,跳转Activity名.class);
startActivity(intent);
```

返回/结束页面：

``` Java
finish();
当前Activity名.this.finish();
```

::: tip 提示
可使用```intent.setFlags(intent.FLAG_ACTIVITY_NO_HISTORY);```设置返回到桌面后再次访问时不保留此页面
:::

### 页面间传递数据

传递：

``` Java
Bundle bundle = new Bundle();
bundle.putCharSequence("键1","值1");
bundle.putCharSequence("键2","值2");

Intent intent = new Intent(this,跳转Activity名.class);
intent.putExtras(bundle);
startActivity(intent);
```

获取：

``` Java
Intent intent = getIntent();
Bundle bundle = intent.getExtras();
String 值1 = bundle.getString("键1");
String 值2 = bundle.getString("键2");
```

### 获取页面的返回值

``` Java
Intent intent = new Intent(this,跳转Activity名.class);
startActivityForResult(intent,0x11);

@Override
protected void onActivityResult (int requestCode,int resultCode,Intent data){
  super.onActivityResult(requestCode,resultCode, data);
  if (requestCode == 0x11 && resultCode == 0x11) {
    Bundle bundle = data.getExtras ();
    int 值 = bundle.getInt("键");
  }
}
```

跳转的页面：

``` Java
Intent intent = getIntent();
Bundle bundle = intent.getExtras();
bundle.putInt("键","值");
intent.putExtras(bundle);
setResult(0x11,intent);
finish();
```

### 跳转至拨打电话界面

``` Java
Intent intent = new Intent();
intent.setAction(intent.ACTION_DIAL);
intent.setData(Uri.parse("tel:电话号码"));
startActivity(intent);
```

增加权限：```<uses-permission android:name="android.permission.CALL_PHONE"/>```

### 跳转至发送短信界面

``` Java
Intent intent = new Intent();
intent.setAction(intent.ACTION_SENDTO);
intent.setData(Uri.parse("smsto:短信号码"));
intent.putExtra("sms_body","短信内容");
startActivity(intent);
```

增加权限：```<uses-permission android:name="android.permission.SEND_SMS"/>```

### 跳转至桌面（不退出）

``` Java
Intent intent = new Intent();
intent.setAction(intent.ACTION_MAIN);
intent.addCategory(intent.CATEGORY_HOME);
startActivity(intent);
```

### 跳转到网页（以默认浏览器打开）

``` Java
Intent intent = new Intent();
intent.setAction(intent.ACTION_VIEW);
intent.setData(Uri.parse("网页地址"));
startActivity(intent);
```

### 多线程

* 方法1

``` Java
new Thread(new Runnable() {
  @Override
  public void run() {
  }
}
).start();
```

* 方法2

``` Java
final Handler handler1 = new Handler();
handler1.post(new Runnable() {
  @Override
  public void run() {
    handler1.postDelayed(this, 3000);
  }
});
```

### 显示Toast提示

``` Java
Toast.makeText(MainActivity.this,"提示内容",Toast.LENGTH_SHORT).show();
```

## 对话框

### 取消/确定 对话框

``` Java
//创建AlertDialog对象
AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();
//设置图标
//alertDialog.setIcon(R.drawable.ic_launcher_background);
alertDialog.setTitle("标题");
alertDialog.setMessage("内容");
alertDialog.setButton(DialogInterface.BUTTON_NEGATIVE, "取消", new DialogInterface.OnClickListener() {
  @Override
  public void onClick(DialogInterface dialog, int which) {
    Toast.makeText(MainActivity.this, "点击了取消", Toast.LENGTH_SHORT).show();
  }
});
alertDialog.setButton(DialogInterface.BUTTON_POSITIVE, "确定", new DialogInterface.OnClickListener() {
  @Override
  public void onClick(DialogInterface dialog, int which) {
    Toast.makeText(MainActivity.this, "点击了确定", Toast.LENGTH_SHORT).show();
  }
});
alertDialog.show();
```

### 列表对话框

``` Java
String[] item = new String[]{"列表项1","列表项2"};
//创建AlertDialog.Builder对象
AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
//设置图标
//builder.setIcon(R.drawable.ic_launcher_background);
builder.setTitle("标题");
builder.setItems(item, new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        Toast.makeText(MainActivity.this, "选择了：" + item[which], Toast.LENGTH_SHORT).show();
    }
});
builder.create().show();
```

### 单选 对话框

``` Java
String[] items = new String[]{"列表项1", "列表项2"};
//创建AlertDialog.Builder对象
AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
//设置图标
//builder.setIcon(R.drawable.ic_launcher_background);
builder.setSingleChoiceItems(items, 0, new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        Toast.makeText(MainActivity.this, "选择了：" + items[which], Toast.LENGTH_SHORT).show();
    }
});
builder.setPositiveButton("确定", null);
builder.create().show();
```

### 多选 对话框

``` Java
final String[] item1 = new String[]{"列表项1", "列表项2"};
//记录各列表的状态
final boolean[] checkItem=new boolean[item1.length];
AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
//设置图标
//builder.setIcon(R.drawable.ic_launcher_background);
builder.setTitle("标题");
builder.setMultiChoiceItems(item1, checkItem, new DialogInterface.OnMultiChoiceClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which, boolean isChecked) {
        //改变被操作列表项的状态
        checkItem[which] = isChecked;
    }
});
builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        String result = "";
        for (int i = 0; i < checkItem.length; i++) {
            if(checkItem[i]){
              result = result + " " + item1[i];
            }
        }
        if (result.equals("") == false){
            Toast.makeText(MainActivity.this, "选择了：" + result, Toast.LENGTH_SHORT).show();
        }
    }
});
builder.create().show();
```

## 资源

### 字符串资源

\res\values\strings.xml

``` XML
<resources>
    <string name="字符串名称">字符串</string>
</resources>
```

使用：

``` XML
android:text="@string/字符串名称"
```

``` Java
组件.setText(getResources().getString(R.string.字符串名称));
```

::: tip 提示
```string```是小写，不能大写
:::

### 颜色资源

格式：```#透明度 R值 G值 B值```（各值间**没有空格**，RGB值为十六进制，透明度可省略）  

\res\values\strings.xml

``` XML
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="颜色名称">#透明度 R值 G值 B值</color>
</resources>
```

使用：

``` XML
android:textColor="@color/颜色名称"
```

``` Java
组件.setTextColor(getResources().getColor(R.color.颜色名称));
```

### 尺寸资源

* dp: 设置资源大小
* sp: 设置字体大小

\res\values\dimens.xml （如没有则需要自行建立）

``` XML
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="尺寸名称">尺寸dp</dimen>
</resources>
```

使用：

``` XML
android:textSize="@dimen/尺寸名称"
```

``` Java
组件.setTextSize(getResources().getDimension(R.dimen.尺寸名称));
```

### Drawable资源

Drawable目录 一般用来存放图片等文件

使用：

``` XML
android:background="@drawable/资源名称"
```

``` Java
组件.setBackground(getResources().getDrawable(R.drawable.资源名称（不带后缀）);
```

### StateListDrawable资源

StateListDrawable资源一般用于控制焦点事件

### 主题资源

\res\values\styles.xml

``` XML
<resources>
  <style name="主题名称" parent="AppTheme">
   <item name="属性">值</item>
   <item name="android:属性">值</item>
  </style>
</resources>

```

全局使用：

AndroidMainifest.xml

``` XML
android:theme="@style/主题名称"
```

局部使用：

``` Java
setTheme(R.style.主题名称)
setContentView(R.layout.activity_main);
```

::: tip 提示
在Java代码中需要在```setContentView```方法前使用```setTheme```，否则不起作用
:::

### 菜单资源

\res\menu\menu.xml （如没有则需要自行建立）

``` XML
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@+id/message1" android:title="标题"></item>
</menu>
```

## MediaPlay

### 播放音乐

``` Java
try {
  mMediaPlayer = MediaPlayer.create(this, R.drawable.音乐资源名称);
  mMediaPlayer.start();
  } catch (Exception e) {}
```

## 界面布局

::: tip 提示
在Android中，不允许线程更新程序界面，需要使用```Handler```对象来更新UI，充当子线程和UI主线程的信使
:::

### 标题栏


显示标题栏：

``` Java
ActionBar actionBar = getActionBar();
actionBar.show();
```

隐藏标题栏：

``` Java
ActionBar actionBar = getActionBar();
actionBar.hide();
```

### 包含XML布局

``` XML
<include layout="@layout/XML名称"></include>
```

### 按钮 Button

``` xml
<Button
  android:id="@+id/按钮ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:text="按钮标题"
/>
```

绑定按钮事件：

``` Java
Button Button1 = (Button)findViewById(R.id.按钮ID);
Button1.setOnClickListener(new OnClickListener() {
   public void onClick(View arg0) {

   }
});
```

### 图片按钮 ImageButton

``` xml
<ImageButton
  android:id="@+id/按钮ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:src="@mipmap/图片路径"
  android:background="#0000"
/>
```

::: tip 提示
可使用```android:background="#0000"```将背景设置透明
:::

### 文本框 TextView

``` xml
<TextView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:text="@string/字符串名称"
/>
```

\src\res\values\strings.xml

``` xml
<resource>
  <string name="字符串名称">文本框内容</string>
</resource>
```

TextView常用属性：

* 字体大小：```android:`textSize="字体大小（单位sp）"``
* 字体颜色：```android:textColor="#十六进制颜色值"```
* 背景：```android:background="背景图片路径/#十六进制颜色值"```
* 设置单行：```android:singleLine="true"```

### 编辑框 EditText

``` xml
<EditText
  android:id="@+id/编辑框ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:hint="提示内容"
/>
```

TextView常用属性：

* 编辑框类型：```android:`inputType="编辑框类型"``
* 设置编辑框行数：```android:lines="行数"```
* 在上侧显示图标：```android:`drawableTop="@mipmap\图标路径"``
* 在下侧显示图标：```android:`drawableBottom="@mipmap\图标路径"``
* 在左侧显示图标：```android:`drawableLeft="@mipmap\图标路径"``
* 在右侧显示图标：```android:`drawableRight="@mipmap\图标路径"``

### 单选按钮 RadioButton

``` xml
<RadioGroup
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  <RadioButton
  android:id="@+id/单选按钮ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:text="单选按钮内容"
  android:checked="true"
  />
</RadioGroup>
```

获取选择状态：```单选按钮.isCgecked()```

### 多选框 CheckBox

``` xml
<CheckBox
  android:id="@+id/多选框ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:hint="多选框内容"
  android:checked="true"
/>
```

获取选择状态：```单选按钮.isCgecked()```

### 图片框 ImageView

``` xml
<ImageView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:src="@drawable/图片名称（无扩展名）"
/>
```

::: tip 提示

* 可使用```android:scaleType```属性设置缩放模式
* 可使用```android:adjustViewBounds="true"```属性设置取消等比例缩放
* 可使用```android:maxWidth="100dp"```属性设置最大宽度
* 可使用```android:maxHeight="100dp"```属性设置最大高度
:::

### 图片切换器 ImageSwitcher

``` xml
<ImageSwitcher
  android:id="@+id/图像切换器ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:src="@drawable/图片名称（无扩展名）"
/>
```

``` Java
private int[] 图片数组 = new int[R.drawable.图片名1,R.drawable.图片名2]

ImageSwitcher 图像切换器 = (ImageSwitcher)findViewById(R.id.图像切换器ID);
//设置淡入动画
图像切换器.setInAnimation (AnimationUtils.loadAnimation(MainActivity.this,android.R.anim.fade_in));
//设置淡出动画
图像切换器.setOutAnimation (AnimationUtils.loadAnimation(MainActivity.this,android.R.anim.fade_out));
图像切换器.setFactory (new ViewSwitcher.ViewFactory() {
  @Override
  public View makeView() {
    ImageView imageView = new ImageView (MainActivity.this);
    imageView.setImageResource(图片数组[0]) ;
    return imageView;
});
```

### 日期选择器 DatePicker

``` xml
<DatePicker
  android:id="@+id/日期选择器ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```

### 时间选择器 TimePicker

``` xml
<TimePicker
  android:id="@+id/时间选择器ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```

``` Java
TimePicker TimePicker1= (TimePicker) findViewById(R.id.时间选择器ID);
//设置24小时制
TimePicker1.setIs24HourView(true);
TimePicker1.setOnTimeChangedListener (new TimePicker.OnTimeChangedListener(){
  @Override
  public void onTimeChanged (TimePicker view,int hour0fDay, int minute) {
    String time = hour0fDay+ "时"+minute+"分";
    //显示当前选择时间
    Toast.makeText(MainActivity.this,time,Toast.LENGTH_SHORT).show();
});
```

### 计时器 Chronometer

``` xml
<Chronometer
  android:id="@+id/计时器ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```

``` Java
Chronometer Chronometer1 = (Chronometer)findViewById(R.id.计时器D);
Chronometer1.setBase(SystemClock.elapsedRealtime());
Chronometer1.setFormat("%s");
Chronometer1.start();
Chronometer1.setOnChronometerTickListener (new Chronometer.OnChronometerTickListener() {
  @Override
  public void onChr onometer Tick (Chr onometer chr onometer) {

  }
}
```

### 进度条 ProgressBar

``` XML
<ProgressBar
  android:id="@+id/进度条ID"
  style="?android:attr/progressBarStyleHorizontal"
  android:max="100"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>
```

::: tip 提示

* 可使用```style```属性设置进度条样式（默认旋转圆圈）
* 可使用```进度条.setProgress```方法设置当前进度
:::

``` Java
private int mProgress = 0;
private Handler Handler1;
@0verride
protected void onCreate (Bundle savedInstanceState) {
  super.onCreate (savedInstanceState);
  setContentView(R.layout.activity_main);
  progressBar = (ProgressBar)findViewById(进度条ID);
  Handler1 = new Handler () {
    @Override
    public void handleMessage (Message msg) {
      if(msg.what == 0x111){
        progressBar.setProgress(mProgress);
        }else{
          Toast.makeText(MainActivity.this,"耗时操作已完成",Toast.LENGTH_SHORT).show();
          progressBar.setVisibility (View.GONE);
      }

    }
};
new Thread (new Runnab1p() {
  @0verride
  public void run() {
    while(true){
      mProgress = doWork();
      Message m = new Message ();
      if (mProgress<100) {
        m.what=0x111;
        Handler1.sendMessage(m);
        }else{
          m.what = 0x110;
          Handler1.sendMessage(m);
          break;
        }
    }
  }
  private int doWork(){
    mProgress = mProgress + Math.random() * 10;
    try{
      Thread.sleep(200);
    } catch(InterruptedException e){
      e.printStackTrace();
    }
    return mProgress;
  }
}).start();
```

### 拖动条 SeekBar

``` xml
<SeekBar
  android:id="@+id/拖动条ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:max="100"
/>
```

::: tip 提示

* 可使用```thumb```属性设置进度条样式
* 可使用```拖动条.setProgress```方法设置拖动值
:::

### 星级评分条 RatingBar

``` xml
<RatingBar
  android:id="@+id/星级评分条ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:numStars="5"
  android:rating="3"
  android:stepSize="1"
  android:isIndicator="false"
/>
```

::: tip 提示

* 可使用```android:numStars```属性设置星级的数量
* 可使用```android:rating```属性设置默认选择星级的数量
* 可使用```android:stepSize```属性设置选择步长（默认可选择半颗星）
* 可使用```android:isIndicator="true"```属性设置只读
* 可使用```星级评分条.getRating()```方法获取当前选择的星级
:::

### 下拉列表

``` xml
<Spinner
  android:id="@+id/下拉列表ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:entries="@array/数组名称"
/>
```

新建\src\res\values\arrays.xml

``` XML
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string-array name="数组名称">
        <item>列表项1</item>
        <item>列表项2</item>
        <item>列表项3</item>
    </string-array>
</resources>
```

通过适配器设置列表项：

``` Java
Spinner spinner = (ListView)findViewById(下拉列表ID);

String [] 数组名称 = new String[]{"列表项1","列表项2"}
ArrayAdpter<String> adapter = new ArrayAdpter<String>(this.android.R.layout.simple.list_item_1,数组名称)
adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
spinner.setAdapter(adapter)
```

### 列表视图

``` XML
<ListView
  android:id="@+id/列表视图ID"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:entries="@array/数组名称"
/>
```

新建\src\res\values\arrays.xml

``` XML
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string-array name="数组名称">
        <item>列表项1</item>
        <item>列表项2</item>
    </string-array>
</resources>
```

通过适配器设置列表项：

``` Java
ListView listView = (ListView)findViewById(列表视图ID);

String [] 数组名称 = new String[]{"列表项1","列表项2"}
ArrayAdpter<String> adapter = new ArrayAdpter<String>(this.android.R.layout.simple.list_item_1,数组名称)
listView.setAdapter(adapter)
```

### 滚动视图

::: tip 提示
滚动视图中只能包含一个组件，一般包含其他布局（如线性布局）
:::

#### 垂直滚动

``` XML
<ScrollView
  android:layout_width="math_parent"
  android:layout_height="wrap_content">
</ScrollView>
```

#### 水平滚动

``` XML
<HorizontalScrollView
  android:layout_width="wrap_content"
  android:layout_height="math_parent">
</ScrollView>
```

### 选项卡

将自带的布局改为```TabHost```，并删除padding边距

``` XML
<TabHost xmlns:android="http://schemas.android.com/apk/res/android"
  android:id="@android:id/tabhost"
  android:layout_width="math_parent"
  android:layout_height="math_parent">
  <TabWidget
    android:id="@android:id/tabs"
    android:layout_width="math_parent"
    android:layout_height="wrap_content">
  <TabWidget/>
  <FrameLayout
    android:id="@android:id/tabcontent"
    android:layout_width="math_parent"
    android:layout_height="math_parent">
  </FrameLayout>
</TabHost>
```

``` Java
TabHost tabHost = (TabHost)findViewById(Android.R.id.tabhost);
tabHost.setip();
LayoutInflater inflater = LayoutInflater.from(this);
inflater.inflate(R.layout.XML页名1,tabHost.getTabContentView());
inflater.inflate(R.layout.XML页名2,tabHost.getTabContentView());

tabHost.addTab(tabHost.newTabSpec("tab1").setIndicator("Tab页面标题1").setContent(R.id.left))
tabHost.addTab(tabHost.newTabSpec("tab2").setIndicator("Tab页面标题2").setContent(R.id.right))
```



## 消息推送

``` Java
//创建通知基本内容
NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
        .setSmallIcon(R.drawable.ic_launcher_background)
        .setContentTitle("通知标题")
        //单行
        .setContentText("通知内容")
        //多行
        //.setStyle(new NotificationCompat.BigTextStyle().bigText("通知内容" +"通知内容" +"通知内容"))
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setAutoCancel(true);
//Android 8.0后需要设置Channel
createNotificationChannel();
//创建点击事件，启动详细页面
Intent intent1 = new Intent(this,MessageActivity.class);
PendingIntent pendingIntent = PendingIntent.getActivities(this,0, new Intent[]{intent1},0);
builder.setContentIntent(pendingIntent);
//展示通知
NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this);
// notificationId is a unique int for each notification that you must define
notificationManager.notify((int) System.currentTimeMillis(), builder.build());
```

``` Java
private void createNotificationChannel() {
  if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    CharSequence name = getString(R.string.app_name);
    String description = getString(R.string.app_name);
    int importance = NotificationManager.IMPORTANCE_HIGH;
    NotificationChannel channel = new NotificationChannel(CHANNEL_ID, name, importance);
    channel.setDescription(description);
    NotificationManager notificationManager = getSystemService(NotificationManager.class);
    notificationManager.createNotificationChannel(channel);
  }
}
```

## 广播

``` Java

```


``` Java

```

## 传感器

::: tip 提示
* SENSOR_DELAY_FASTEST : 快速获取传感器信息，延迟较小
* SENSOR_DELAY_GAME : 适合游戏的频率
* SENSOR_DELAY_NORMAL : 正常频率
* SENSOR_DELAY_UI : 适用于普通用户界面的频率，延迟较大
:::

### 坐标系

当一个设备被放在其默认的方向上时（竖屏）

* X轴是水平指向右的
* Y轴是垂直向上的
* Z轴是指向屏幕正面之外，即屏幕背面是Z的负值

### 磁场传感器

``` Java
//获取传感器管理器
SensorManager MagneticFieldSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
//传感器种类：亮度传感器
Sensor MagneticFieldSensor = MagneticFieldSensorManager.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD);
MagneticFieldSensorManager.registerListener(MagneticFieldListener, MagneticFieldSensor, SensorManager.SENSOR_DELAY_NORMAL);
```

``` Java
//磁场传感器监听事件
private SensorEventListener MagneticFieldListener = new SensorEventListener() {
  @Override
  //传感器的值发生变化时调用
  public void onSensorChanged(SensorEvent event) {
    Log.i("磁场传感器：\n"  + "X轴磁场强度："+ event.values[0] + "     Y轴磁场强度：" + event.values[1] + "      Z轴磁场强度：" + event.values[2]);
  }
  @Override
  //传感器的精度发生变化时调用
  public void onAccuracyChanged(Sensor sensor, int accuracy) {
  }
};
```



### 光线传感器

``` Java
//获取传感器管理器
SensorManager LightSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
//传感器种类：亮度传感器
Sensor LightSensor = LightSensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
LightSensorManager.registerListener(LightListener, LightSensor, SensorManager.SENSOR_DELAY_NORMAL);
```

``` Java
//亮度传感器监听事件
private SensorEventListener LightListener = new SensorEventListener() {
  @Override
  //传感器的值发生变化时调用
  public void onSensorChanged(SensorEvent event) {
    Log.i("当前亮度：" + event.values[0]);
  }
  @Override
  //传感器的精度发生变化时调用
  public void onAccuracyChanged(Sensor sensor, int accuracy) {
  }
};
```

::: tip 提示
```event.values[0]``` 返回的是光线强度值, 单位是勒克斯
:::

### 加速度传感器

### 方向传感器

### 距离传感器

距离传感器取值范围：[0,5]

``` Java
// 获取传感器管理器
SensorManager mSensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
// 传感器种类：距离传感器
mSensor = mSensorManager.getDefaultSensor(Sensor.TYPE_PROXIMITY);
mSensorManager.registerListener(new SensorEventListener() {
    @Override
    //传感器的值发生变化时调用
    public void onSensorChanged(SensorEvent event) {
      textview.setText("当前距离：" + event.values[0]);
    }
    @Override
    //传感器的精度发生变化时调用
    public void onAccuracyChanged(Sensor sensor, int accuracy) {

    }
}, mSensor, SensorManager.SENSOR_DELAY_NORMAL);
```

## 事件监听

### 触摸监听

### 基于监听器（优先级较高）

``` Java
组件.setOnTouchListener(new View.OnTouchListener() {
@Override
public boolean onTouch(View v, MotionEvent event) {
  //X: event.getX()
  //Y: event.getY()
  return false;
  }
});
```

### 基于回调

``` Java
@Override
public boolean onTouchEvent(MotionEvent event) {
  Toast.makeText(this, "onTouchEvent方法", Toast.LENGTH_SHORT).show();
  return super.onTouchEvent(event);
}
```

### 物理按键监听

监听物理 音量键、电源键、菜单键、主屏键、返回键

``` java
@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
  if (keyCode == KeyEvent.按键码){

  }
  return super.onKeyDown(keyCode, event);
}
```

::: tip 提示

按键码：

* 菜单键：```KEYCODE_MENU```
* 主屏键：```KEYCODE_HOME```
* 返回键：```KEYCODE_BACK```
* 音量加：```KEYCODE_VOLUME_UP```
* 音量减：```KEYCODE_VOLUME_DOWN```
* 电源键：```KEYCODE_POWER```

:::

### 长按事件

``` Java
组件.setOnLongClickListener(new View.OnLongClickListener() {
  @Override
  public boolean onLongClick(View v) {
    Toast.makeText(MainActivity.this, "长按事件", Toast.LENGTH_SHORT).show();
    return false;
  }
});
```

## Android与HTML5互调

### 加载网页

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

### Android调用JavaScript

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

### JavaScript调用Android

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

## QMUI

### 导入

Gradle Scripts\build.grade(Moudule: app)

``` gradle
dependencies {
    implementation 'com.qmuiteam:qmui:2.0.0-alpha07'
}
```

### 使用

\res\values\styles.xml

``` XML
<resources>
  <style name="AppTheme" parent="QMUI">

  </style>
</resources>

```