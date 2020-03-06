# PHP 笔记

## 数据库

::: tip 提示
mysql_connect已在PHP 7.0以下版本废弃，请使用mysqli_connect
:::

### 连接数据库

```PHP
header("Content-Type: text/html;charset=utf-8");
$返回的对象 = mysqli_connect("数据库地址","数据库用户名","数据库密码");
```

## 查询表

```PHP
mysqli_select_db($返回的对象,"表名称");
mysqli_query($返回的对象,"set names 'UTF8'");
$result =mysqli_query($返回的对象,"SQL语句");
$row = mysqli_fetch_assoc($result);
```