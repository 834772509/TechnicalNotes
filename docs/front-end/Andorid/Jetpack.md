# Jetpack

## ViewModel

ViewModel 专门用于存放与界面相关的数据，只要界面上看得到的数据，都应该存放在 ViewModel 中

### 引入依赖

\app\build.gradle

``` gradle
dependencies {
    implementation "androidx.lifecycle:lifecycle-extensions:2.1.0"
}
```

### 创建ViewModel类

\MainViewModel.kt

``` Kotlin
class MainViewModel : ViewModel() {
    var 变量名 = 值
}
```

### 使用

``` Kotlin
//获取ViewModel
viewModel = ViewModelProviders.of(this).get(MainViewModel::class.java)
//访问ViewModel变量
viewModel.变量名
```
