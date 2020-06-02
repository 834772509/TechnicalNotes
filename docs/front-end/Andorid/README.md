# Android 笔记

## 安装 Android Studio

### 下载并安装

[Android Studio](https://developer.android.google.cn/studio)

### 汉化补丁

[JetBrains 系列软件汉化包](https://github.com/pingfangx/TranslatorX)

### 实用插件

* Android ButterKnife Zelezny（快速findViewById）
* Android WiFi ADB（通过WIFI用手机调试）

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

### 振动

``` Java
//获取振动器
Vibrator vibrator = (Vibrator) getSystemService(Service.VIBRATOR_SERVICE);
//振动，单位为毫秒
vibrator.vibrate(500);
```

增加权限： ` `  ` <uses-permission android:name="android.permission. VIBRATE" /> `  ` ` 

### 获取电量

``` Java
//获取电量信息管理器
BatteryManager batteryManager = (BatteryManager) getSystemService(BATTERY_SERVICE);
//输出当前电量（百分比）
Log.i("当前电量：" + batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY))
```

### 直接拨打电话

``` Java
//判断是否已申请权限
if (ContextCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED){
  ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CALL_PHONE},1);
}else {
    intent.setAction(intent.ACTION_CALL);
    intent.setData(Uri.parse("tel:电话号码"));
    startActivity(intent);
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
可使用 ` `  ` intent.setFlags(intent. FLAG_ACTIVITY_NO_HISTORY); `  ` ` 设置返回到桌面后再次访问时不保留此页面
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

增加权限： ` `  ` <uses-permission android:name="android.permission. CALL_PHONE"/> `  ` ` 

### 跳转至发送短信界面

``` Java
Intent intent = new Intent();
intent.setAction(intent.ACTION_SENDTO);
intent.setData(Uri.parse("smsto:短信号码"));
intent.putExtra("sms_body","短信内容");
startActivity(intent);
```

增加权限： ` `  ` <uses-permission android:name="android.permission. SEND_SMS"/> `  ` ` 

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
` `  ` string `  ` ` 是小写，不能大写
:::

### 颜色资源

格式： ` `  ` #透明度 R值 G值 B值 `  ` ` （各值间**没有空格**，RGB值为十六进制，透明度可省略）  

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
在Java代码中需要在 ` `  ` setContentView `  `  ` 方法前使用 `  `  ` setTheme `  ` ` ，否则不起作用
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

## 动态权限

``` Java
//判断是否已申请权限
if (ContextCompat.checkSelfPermission(this, Manifest.permission.权限名称) != PackageManager.PERMISSION_GRANTED){
  ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.权限名称},1);
}
```

### 定位

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

* 菜单键： ` `  ` KEYCODE_MENU `  ` ` 
* 主屏键： ` `  ` KEYCODE_HOME `  ` ` 
* 返回键： ` `  ` KEYCODE_BACK `  ` ` 
* 音量加： ` `  ` KEYCODE_VOLUME_UP `  ` ` 
* 音量减： ` `  ` KEYCODE_VOLUME_DOWN `  ` ` 
* 电源键： ` `  ` KEYCODE_POWER `  ` ` 

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

## 持久化技术

### 文件存储

所有的文件默认会存放于``/data/data/包名/files``目录下

#### 写入文件

``` Kotlin
try {
  val output = openFileOutput("文件名", Context.MODE_PRIVATE)
  val writer = BufferedWriter(OutputStreamWriter(output))
  writer.use {
      it.write("文件内容")
  }
} catch (e: IOException) {
  e.printStackTrace()
}
```

#### 读入文件

``` Kotlin
val content = StringBuilder()
try {
  val input = openFileInput("文件名")
  val reader = BufferedReader(InputStreamReader(input))
  reader.use {
    reader.forEachLine {
      content.append(it)
    }
  }
} catch (e: IOException) {
  e.printStackTrace()
}
return content.toString()
```

### SharedPreferences

SharedPreferences使用键值对的方式存储数据

#### 存储数据

``` Java
SharedPreferences.Editor editer = getSharedPreferences("文件名(无后缀)", Context.MODE_PRIVATE).edit();
//字符串型
editer.putString("字段名", "值");
//整数型
editer.putInt("字段名",0);
// 布尔值
editer.putBoolean("字段名",true);
editer.apply();
```

#### 读取数据

``` Java
SharedPreferences preferences = getSharedPreferences("文件名(无后缀)", Context.MODE_PRIVATE);
Log.i(preferences.getString("字段名"),默认值);
Log.i(preferences.getInt("字段名"),默认值);
Log.i(preferences.getBoolean("字段名",默认值));
```

## 多线程


