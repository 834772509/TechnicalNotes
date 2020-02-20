# Android 笔记


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