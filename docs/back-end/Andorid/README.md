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

## 基础命令

### 页面跳转

``` Java
Intent intent = new Intent();
intent.setClass(当前Activity名.this, 跳转Activity名.class);
startActivity(intent);
```

返回页面：

``` Java
当前Activity名.this.finish();
```

### 多线程

1. 方法1

``` Java
new Thread(new Runnable() {
  @Override
  public void run() {
  }
  }
  ).start();
```

2. 方法2

``` Java
final Handler handler1 = new Handler();
handler1.post(new Runnable() {
  @Override
  public void run() {
    handler1.postDelayed(this, 3000);
    }
});
```

### 播放音乐

``` Java
try {
  mMediaPlayer = MediaPlayer.create(this, R.drawable.音乐资源名称);
  mMediaPlayer.start();
  } catch (Exception e) {}
```

### 显示Toast提示

``` Java
Toast.makeText(MainActivity.this,"提示内容",Toast.LENGTH_SHORT).show();
```

## 界面布局

::: tip 提示
在Android中，不允许线程更新程序界面，需要使用```Handler```对象来更新UI，充当子线程和UI主线程的信使
:::

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

通过适配器指定列表项
