# PHP 笔记

## 常见问题

### 解决PHP乱码

``` PHP
header("Content-Type: text/html;charset=utf-8");
```

## 数据库 MySQLi

::: tip 提示
mysql_XXX已在PHP 7.0以下版本废弃，请使用mysqli_XXX
:::

### 连接数据库

```PHP
$conn = mysqli_connect("数据库地址","数据库用户名","数据库密码");
//判断是否成功连接上MySQL数据库
if(mysqli_connect_errno()){
  //如果连接错误，则抛出异常
 throw new Exception('数据库连接错误！');
}
```

### 查询数据

遍历表：

```PHP
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
