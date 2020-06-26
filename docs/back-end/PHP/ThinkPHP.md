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

# 数据库

::: tip 提示
当数据库文件设置了前缀时，name()方法内可忽略前缀
:::

## 配置

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

## 模型

### 声明

数据库的表名即为模型名（不区分大小写）  

新建 ``\app\model\模型名.php``

``` PHP
class 模型名 extends Model {
    

}
```

### 增加数据

成功返回影响行数

``` php
$模型名 = new 模型名();
$模型名->字段名 = 值;
$模型名->字段名 = 值;
$模型名->save();
```

### 删除数据

``` PHP
user::where("字段名",值)->delete();
user::where("字段名",">",值)->delete();
```

## 查询数据

### 查询所有数据

``` PHP
public function index() {
    $数据集对象 = Db::name("表名")->select();
    return json($数据集对象);
}
```

### 单数据查询

查询符合条件的**第一条数据**，如果没有找到则会返回null

``` PHP
$数据集对象 = Db::name("表名")->where("字段名",值)->find();

//条件查询
$数据集对象 = Db::name("表名")->where("字段名",">",值)->find();


//多条件查询
$数据集对象 = Db::name("表名")
                        ->where("字段名","=",值)
                        ->where("字段名","=",值)
                        ->find();

//多条件查询（数组方式）
$数据集对象 = Db::name("表名")->where([
    ["字段名","=",值],
    ["字段名","=",值]
])->find();

return json($数据集对象);
```

### 数据集查询

``` PHP
$数据集对象 = Db::name("表名")->where("字段名",值)->select();
return json($数据集对象);
```

### 通配符查询

``` PHP
$数据集对象 = Db::name("表名")->whereLike("字段名","通配符表达式")->find();
return json($数据集对象);
```

### 区间查询

``` PHP
$数据集对象 = Db::name("表名")->whereBetween("字段名", [起始值,结束值])->select();
return json($数据集对象);
```

### 显示指定字段

``` PHP
$数据集对象 = Db::name("表名")->field("字段名,字段名")->select();
return json($数据集对象);
```

### 分页查询

``` PHP
$数据集对象 = Db::name("表名")->page(当前页数,总页数)->select();
return json($数据集对象);
```

### 其他查询

返回指定字段

``` PHP
$值 = Db::name("表名")->where("字段名", 值)->value("字段名");
```

## 新增数据

修改成功返回影响行数

``` PHP
$data = [
    "字段名" => 值,
    "字段名" => 值,
];

Db::name("表名")->insert($data);
```

### 新增多条数据

返回成功增加数据的个数

``` PHP
$data = [
    "字段名" => 值,
    "字段名" => 值,
],
[
    "字段名" => 值,
    "字段名" => 值,
];

Db::name("表名")->insert($data);
```

### 数据集对象方法

``` PHP
$数据集对象 = Db::name("表名")->select();

//转换为数组
$数据集对象->toArray();

//获取查询的数量
$数据集对象->count();

//获取查询数据的最大值
$数据集对象->max();

//获取查询数据的最小值
$数据集对象->min();

//获取查询数据的平均值
$数据集对象->avg();

//获取查询数据的总和
$数据集对象->sum();
```

### save 方法

sava() 方法可以自动判断是新增还是修改数据。如主键存在则修改，不存在则新增，修改成功返回影响行数

``` PHP
$data = [
    "字段名" => 值,
    "字段名" => 值,
];
Db::name("表名")->save($data);
```

## 修改数据

修改成功返回影响行数

``` PHP
$data = [
    "字段名" => 值
];
return Db::name("表名")->where("字段名",值)->update($data);
```

::: tip 提示
如果修改的数据包含了主键信息（如id），则可省略where条件
:::

## 删除数据

删除成功返回影响行数

``` PHP
Db::name("表名")->where("字段名",值)->delete();
Db::name("表名")->where("字段名",">",值)->delete();
```

## 返回上一次操作的SQL语句

``` PHP
Db::getLastSQL();
```

##  原生SQL查询

### 查询数据

错误返回false

``` PHP
Db::query("SQL语句");
```

### 修改数据

``` PHP
Db::execute("SQL语句");
```

## 事务处理

事务处理，指的是需要执行多个SQL查询，一旦中途的某条数据执行失败，则回滚为初始状态

### 自动

``` PHP
Db::Transaction(function (){
    // 查询代码段
});
```

### 手动

``` PHP
Db::startTrans();
try {
    // 查询代码段
    Db::commit();
}catch (\Exception $e){
    Db::rollback();
    echo "执行SQL失败，数据已回滚";
}
```

## 获取器

将查询的数据字段进行处理

``` PHP
Db::name("表名")->withAttr("字段名",function($value,$data){
    //进行处理
    return $value
})->select();
```
