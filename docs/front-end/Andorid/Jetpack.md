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

### 传参

新建类 \MainViewModelFactoy.kt

``` Kotlin
class MainViewModelFactoy(private val 参数名: 数据类型) : ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return MainViewModel(参数名) as T
    }
}
```

``` Kotlin
//获取ViewModel
viewModel = ViewModelProviders.of(this,MainViewModelFactoy(参数名 = 默认值)).get(MainViewModel::class.java)
```

## Lifecycles

Lifecycles 可以让任何一个类都能轻松感知到Activity的生命周期，同时又不需要在Activity中编写太多的额外逻辑

## 
