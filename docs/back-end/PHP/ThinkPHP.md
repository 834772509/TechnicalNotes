# ThinkPHP

## 配置环境

### 配置 Composer

Composer 是PHP包管理工具  

将 composer.bat 、composer.phar 放置于 php.exe 同目录内

### 设置淘宝镜像

```composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/```

## 创建项目

### 创建

```composer create-project topthink/think 项目路径```

### 运行

执行```php think run```后打开```127.0.0.1:8000```

### 开启调试模式

将根目录中的```.example.env```重命名为```.env```
