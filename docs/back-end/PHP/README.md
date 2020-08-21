# PHP 基础

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

## 数据类型

* 整形 : Int
* 浮点型 : Double
* 字符串 : String
* 空值 : NULL
* 布尔型 : Bool
* 数组 : array
* 对象 : Object

### 转换数据类型

* 转整形 : (int)
* 转浮点型 : (float)
* 转字符串 : (string)
* 转数组 : (array)
* 转对象 : (object)

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
数据库类型可取``mysql``
:::

## 文件读写

::: tip 提示
一定记得关闭文件，否则会出现一些奇怪的问题
:::

### 打开文件

``` PHP
$文件对象 = fopen(文件路径,"打开方式");
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
$全部内容 = fread($文件对象,最大长度);
// 读取文件一行内容
$一行内容 = fgets($文件对象);
// 读取文件一行内容（去除HTML、PHP标记）
$一行内容 = fgetss($文件对象);
//讲文件读取到数组中
$全部内容数组 = file();
```

### 写入文件

``` PHP
//写入字符串
fwrite($文件对象,"字符串"[,写入长度]);
```

### 关闭文件

``` PHP
fclose($文件对象);
```

### file_get_contents

无需经过打开文件及关闭文件操作即可读取文件内容

``` PHP
$str = file_get_contents("路径");
echo nl2br($str);
```
### file_put_contents

无需经过打开文件及关闭文件操作即可写入文件内容

``` PHP
file_put_contents("路径",数据[,写入方式]);
```

写入方式()：

* FILE_APPEND : 追加数据


### 移动文件指针

移动文件指针到文件的开头

``` PHP
rewind($文件对象);
```

返回文件指针的当前位置

``` PHP
ftell($文件对象);
```

移动文件指针到指定位置

``` PHP
fseek($文件对象,int 位置[,起始位置]);
```

起始位置（默认为当前位置）：

* 0 : 文件开头
* 1 : 当前位置
* 2 : 文件末尾

## 文件及目录操作

### 文件操作

**复制文件**

``` PHP
copy(源文件路径,目标路径);
```

**删除文件**

``` PHP
unlink("文件路径");
```
 
**重命名文件**

``` PHP
rename(旧文件名,新文件名);
```

**判断文件/文件夹是否存在**

``` PHP
file_exists(文件名);
```

**判断指定路径是否为文件**

``` PHP
is_ifle("路径");
```

### 目录操作

**创建目录**

``` PHP
mkdir("路径");
```

**删除目录**

目录必须为空目录

``` PHP
rmdir("路径");
```

**取当前文件所在目录**

``` PHP
getcwd();
```

**改变当前目录**

``` PHP
chdir("路径");
```

**打开目录**

``` PHP
$目录指针 = opendir("路径");
```

**关闭目录**

``` PHP
closedir();
```

**将目录指针指向目录开头**

``` PHP
rewinddir("路径");
```

**遍历目录**

``` PHP
$目录 = readdir("路径");
```

**以数组形式遍历目录**

``` PHP
$目录数组 = scandir("路径",1);
```

### 文件属性

**获取文件大小**

``` PHP
$文件大小 = filesize("路径");
```

**获取文件类型**

``` PHP
$文件类型 = filetype("路径");
```

**获取文件创建时间**

``` PHP
$创建时间 = filectime("路径");
```

**获取文件修改时间**

``` PHP
$修改时间 =  filemtime("路径");
```

**获取文件物理路径**

``` PHP
$物理路径 = realpath("路径");
```

**获取文件路径、文件名信息**

以数组形式

``` PHP
pathinfo("路径");
```

**获取文件的文件名信息**

``` PHP
$信息 = hasename("路径");
```
