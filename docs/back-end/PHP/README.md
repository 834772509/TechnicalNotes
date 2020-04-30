# PHP 笔记

## 常见问题

### IDEA集成PHP

安装插件：
* PHP
* PHP Remote Interpreter
* Chinese PHP Documentation

### 解决PHP乱码

``` PHP
header("Content-Type: text/html;charset=utf-8");
```

## 数据库 MySQLi

::: tip 提示
mysql_XXX已在PHP 7.0以下版本废弃，请使用mysqli_XXX
:::

### 连接数据库

``` PHP
$conn = mysqli_connect("数据库地址","数据库用户名","数据库密码");
//判断是否成功连接上MySQL数据库
if(mysqli_connect_errno()){
  //如果连接错误，则抛出异常
 throw new Exception('数据库连接错误！');
}
```

### 查询数据

遍历表：

``` PHP
$sql = "SELECT *   FROM 表名";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // 输出数据
    while($row = mysqli_fetch_assoc($result)) {
      echo  $row["字段名"] . $row["字段名"];
    }
} else {
    echo "没有数据";
}
```

过滤记录：

``` PHP
$result = mysqli_query($conn,"SELECT * FROM 表名 WHERE 字段名='值'");

while($row = mysqli_fetch_array($result)){
    echo $row['字段名'];
    echo "<br>";
}
```

### 插入数据

``` PHP
$sql = "INSERT INTO 表名 (表项1, 表项2) VALUES ('值1', '值2')";

if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
```

### 插入多条数据

``` PHP
$sql = "INSERT INTO 表名 (表项1, 表项2) VALUES ('值1', '值2')";
$sql .= "INSERT INTO 表名 (表项1, 表项2) VALUES ('值1', '值2')";
$sql .= "INSERT INTO 表名 (表项1, 表项2) VALUES ('值1', '值2')";

if ($conn->multi_query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
```

### 修改数据

``` PHP
$sql = "UPDATE 表名 SET 字段名=值 WHERE 字段名='值'";

if (mysqli_query($conn, $sql)) {
    echo "数据修改成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
```

### 删除数据

``` PHP
$sql = "DELETE FROM 表名 WHERE 字段名='值'";

if (mysqli_query($conn, $sql)) {
    echo "数据删除成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
```

### 取执行影响行数

``` PHP
mysqli_affected_rows($数据库对象)
```

## 数据库 PDO

### 连接数据库

``` PHP
$PDO对象 = "数据库类型:host=数据库地址;dbname=数据库名称";
$数据库对象 = new PDO($PDO对象,'数据库用户名','数据库密码');
```

::: tip 提示
数据库类型可取`` `mysql` ``
:::

## 文件读写

::: tip 提示
一定记得关闭文件，否则会出现一些奇怪的问题
:::

### 打开文件

``` PHP
$文件对象 = fopen(文件路径,"打开方式")
```

打开方式（字符串）

* r : 只读
* w : 只写
* a : 在文件末尾附加
* r+ : 读写（先读后写）
* w+ : 读写（先写后读）
* b : 二进制（一般与w、r混用）

### 读入文件

``` PHP
// 全部读取
fread()
// 读取文件一行内容
$一行内容 = fgets()
// 读取文件一行内容（去除HTML、PHP标记）
$一行内容 = fgetss()
//讲文件读取到数组中
$全部内容数组 = file()
```

### 关闭文件

``` PHP
fclose($文件对象)
```
