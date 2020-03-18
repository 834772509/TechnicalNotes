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

### 绑定按钮事件

``` Java

button.setOnClickListener(new OnClickListener() {
   public void onClick(View arg0) {

   }
});
```

### 页面跳转

``` Java
Intent intent = new Intent();
intent.setClass(当前Activity名.this, 跳转Activity名.class);
startActivity(intent);
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

## 界面布局

### 按钮
