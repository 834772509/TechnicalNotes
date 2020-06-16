# ThinkPHP

(ThinkPHP6 帮助文档)[https://www.kancloud.cn/manual/thinkphp6_0]

## 配置环境

### 配置 Composer

Composer 是PHP包管理工具  

将 composer.bat 、composer.phar 放置于 php.exe 同目录内，并将此目录增加环境变量

### 设置淘宝镜像

```composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/```

## 创建项目

### 创建

```composer create-project topthink/think 项目路径```

### 更新

```composer update topthink/framework```

### 运行

执行```php think run```后打开```127.0.0.1:8000```

### 开启调试模式

将根目录中的```.example.env```重命名为```.env```

## URL访问模式

* 多应用: http://serverName/index.php/应用/控制器/方法名/参数名/值;
* 单应用: http://serverName/index.php/控制器/方法名/参数名/值;

::: tip 提示
**index.php**可以省略，需要设置URL重写
:::

控制器： controller 目录下的文件

## 控制器

控制器存放于 ``controller`` 目录

* 如果创建的名字是驼峰式，可以直接访问，也可在大写字母前加``_``进行访问
* 控制器方法使用return返回数据，可使用```json($data)```输出json
* 使用``halt("信息")``中断，进行调试

### 创建控制器

\app\controller\控制器名.php

``` PHP
<?php
namespace app\controller;

class 控制器名{
    public function 方法名(){
        // 获取方法名
        $this->request->action();
        // 获取实际路径
        $this->app->getBasePath()
        return "Hello World";
    }
}
```

访问方法：``/控制器名/方法名/参数名/值``

### 空控制器

定义Error类控制器，自定义错误

``` PHP
class Error{
    public function index(){
        return "当前控制器不存在";
    }
}
```

### 多级控制器

在 ``controller``目录再建立目录并创建控制器

\controller\目录名\控制器名.php

``` PHP
class 控制器名{
    public function index(){
      return "Hello World";
    }
}
```

访问方法：``/目录名.控制器名/方法名/参数名/值``

## 模型

新建 ``\app\model`` 目录

``` PHP
<?php
namespace app\model;

use think\Model;

class 模型名 extends Model {

}
```

## 数据库

::: tip 提示
当数据库文件设置了前缀时，name()方法内可忽略前缀
:::

### 配置

开发环境：  

\.env

```
[DATABASE]
TYPE = mysql
HOSTNAME = 数据库地址
DATABASE = 数据库名
USERNAME = 用户名
PASSWORD = 密码
HOSTPORT = 3306
CHARSET = utf8
DEBUG = true
```

部署环境：  

\config\database.php

``` PHP
'connections'     => [
    'mysql' => [
        // 数据库类型
        'type'              => env('database.type', 'mysql'),
        // 服务器地址
        'hostname'          => env('database.hostname', '127.0.0.1'),
        // 数据库名
        'database'          => env('database.database', ''),
        // 用户名
        'username'          => env('database.username', 'root'),
        // 密码
        'password'          => env('database.password', ''),
        // 端口
        'hostport'          => env('database.hostport', '3306'),
    ],
]
```

### 查询所有数据

``` PHP
use think\facade\Db;

public function index() {
    $数据集对象 = Db::table("表名")->select();
    return json($数据集对象);
}
```

### 单数据查询

如果没有找到数据，则会返回null

``` PHP
use think\facade\Db;

$数据集对象 = Db::table("表名")->where("字段名",值)->find();
```

### 数据集查询

``` PHP
use think\facade\Db;

$数据集对象 = Db::table("表名")->where("字段名",值)->select();
```

### 转Array数组

``` PHP
$数据集对象->toArray();
```

### 其他查询

返回指定字段

``` PHP
$值 = Db::table("表名")->where("字段名", 值)->value("字段名");
```
