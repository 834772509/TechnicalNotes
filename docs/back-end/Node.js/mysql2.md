# mysql2

mysql2：在mysql的基础之上，进行了很多的优化、改进；mysql2兼容mysql的API，并且提供了一些附加功能：

* 更快/更好的性能；
* Prepared Statement（预编译语句）：
  * 提高性能：将创建的语句模块发送给MySQL，然后MySQL编译（解析、优化、转换）语句模块，并且存储它但是不执行，之后我们在真正执行时会给?提供实际的参数才会执行；就算多次执行，也只会编译一次，所以性能是更高的；
  * 防止SQL注入：之后传入的值不会像模块引擎那样就编译，那么一些SQL注入的内容不会被执行；or 1 = 1不会被执行；
* 支持Promise，所以我们可以使用async和await语法

## 安装

`npm install mysql2`

## 预编译语句

Prepared Statement（预编译语句）：

* 提高性能：将创建的语句模块发送给MySQL，然后MySQL编译（解析、优化、转换）语句模块，并且存储它但是不执行，之后我们在真正执行时会给?提供实际的参数才会执行；就算多次执行，也只会编译一次，所以性能是更高的；
* 防止SQL注入：之后传入的值不会像模块引擎那样就编译，那么一些SQL注入的内容不会被执行；or 1 = 1不会被执行；

```javascript
const statement = `SELECT * FROM 表名 WHERE 字段名 > ? AND 字段名 > ?`;

connection.execute(statement, [字段值, 字段值], (err, results) => {
  console.log(results);
});
```

::: tip 提示
如果再次执行该语句，它将会从LRU（Least Recently Used） Cache中获取获取，省略了编译statement的时间来提高性能。
:::

## 连接池

 连接池可以在需要的时候自动创建连接，并且创建的连接不会被销毁，会放到连接池中，后续可以继续使用；
我们可以在创建连接池的时候设置LIMIT，也就是最大创建个数；

```javascript
const mysql = require("mysql2");

const connection = mysql.createPool({
  hostname: "localhost",
  post: 3306,
  database: "数据库名",
  user: "用户名",
  password: "密码",
  connectionLimit: 10,
});

// 执行SQL语句
const statement = `SELECT * FROM 表名 WHERE 字段名 > ? AND 字段名 > ?`;

connection
  .promise()
  .execute(statement, [字段值, 字段值])
  .then(([results]) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

```

## 对象关系映射 ORM

 对象关系映射（英语：Object Relational Mapping，简称ORM，或O/RM，或O/R mapping），是一种程序设计的方案：

- 从效果上来讲，它提供了一个可在编程语言中，使用 虚拟对象数据库 的效果；
- 比如在Java开发中经常使用的ORM包括：Hibernate、MyBatis；
- Node当中的ORM我们通常使用的是 sequelize;
  - Sequelize是用于Postgres，MySQL，MariaDB，SQLite和Microsoft SQL Server的基于Node.js 的 ORM；
  - 它支持非常多的功能；
- 如果我们希望将Sequelize和MySQL一起使用，那么我们需要先安装两个东西：
  - mysql2：sequelize在操作mysql时使用的是mysql2；
  - sequelize：使用它来让对象映射到表中；

### 安装

安装 mysql2 ：`npm install mysql2`

安装 sequelize：`npm install sequelize`