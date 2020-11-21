# mysql2

mysql2：在 mysql 的基础之上，进行了很多的优化、改进；mysql2 兼容 mysql 的 API，并且提供了一些附加功能：

- 更快/更好的性能；
- Prepared Statement（预编译语句）：
  - 提高性能：将创建的语句模块发送给 MySQL，然后 MySQL 编译（解析、优化、转换）语句模块，并且存储它但是不执行，之后我们在真正执行时会给?提供实际的参数才会执行；就算多次执行，也只会编译一次，所以性能是更高的；
  - 防止 SQL 注入：之后传入的值不会像模块引擎那样就编译，那么一些 SQL 注入的内容不会被执行；or 1 = 1 不会被执行；
- 支持 Promise，所以我们可以使用 async 和 await 语法

## 安装

`npm install mysql2`

## 预编译语句

Prepared Statement（预编译语句）：

- 提高性能：将创建的语句模块发送给 MySQL，然后 MySQL 编译（解析、优化、转换）语句模块，并且存储它但是不执行，之后我们在真正执行时会给?提供实际的参数才会执行；就算多次执行，也只会编译一次，所以性能是更高的；
- 防止 SQL 注入：之后传入的值不会像模块引擎那样就编译，那么一些 SQL 注入的内容不会被执行；or 1 = 1 不会被执行；

```javascript
const statement = `SELECT * FROM 表名 WHERE 字段名 > ? AND 字段名 > ?`;

connection.execute(statement, [字段值, 字段值], (err, results) => {
  console.log(results);
});
```

::: tip 提示
如果再次执行该语句，它将会从 LRU（Least Recently Used） Cache 中获取获取，省略了编译 statement 的时间来提高性能。
:::

## 连接池

连接池可以在需要的时候自动创建连接，并且创建的连接不会被销毁，会放到连接池中，后续可以继续使用；
我们可以在创建连接池的时候设置 LIMIT，也就是最大创建个数；

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

对象关系映射（英语：Object Relational Mapping，简称 ORM，或 O/RM，或 O/R mapping），是一种程序设计的方案：

- 从效果上来讲，它提供了一个可在编程语言中，使用 虚拟对象数据库 的效果；
- 比如在 Java 开发中经常使用的 ORM 包括：Hibernate、MyBatis；
- Node 当中的 ORM 我们通常使用的是 sequelize;
  - Sequelize 是用于 Postgres，MySQL，MariaDB，SQLite 和 Microsoft SQL Server 的基于 Node.js 的 ORM；
  - 它支持非常多的功能；
- 如果我们希望将 Sequelize 和 MySQL 一起使用，那么我们需要先安装两个东西：
  - mysql2：sequelize 在操作 mysql 时使用的是 mysql2；
  - sequelize：使用它来让对象映射到表中；

### 安装

安装 mysql2 ：`npm install mysql2`  
安装 sequelize：`npm install sequelize`

### 连接数据库

```JavaScript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("数据库名", "用户名", "密码", {
  host: "数据库地址",
  dialect: "mysql",
});
```

### 初始化

```JavaScript
const { Sequelize, DataTypes, Model } = require("sequelize");

class Model名 extends Model {}

Model名.init(
  {
    字段名: {
      type: DataTypes.数据类型,
      primaryKey: true,
      autoIncrement: true,
    },
    字段名: {
      type: DataTypes.数据类型,
      allowNull: false,
    },
    字段名: DataTypes.数据类型,
  },
  {
    tableName: "表名",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);
```

### 查询数据

```JavaScript
const { Op } = require("sequelize");

async function queryData() {
  // 查询所有内容
  const result = await Model名.findAll({
    where: {
      字段名: {
        [Op.gte]: 值,
      },
    },
  });
  console.log(result);
}

queryData();
```

### 增加数据

```JavaScript
async function insertData() {
  const result = await Model名.create({
    字段名: 值,
    字段名: 值,
  });
  console.log(result);
}

insertData();
```

### 修改数据

```JavaScript
async function updateData() {
  const result = await Model名.update(
    {
      字段名: 值,
    },
    {
      where: {
        字段名: 值,
      },
    }
  );
  console.log(result);
}

updateData();
```

### 删除数据

```JavaScript
async function deleteData() {
  const result = await Model名.destroy({
    where: {
      字段名: 值,
    },
  });

  console.log(result);
}

deleteData();
```

### 一对多操作

::: details 点击查看代码

```JavaScript
const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("数据库名", "用户名", "密码", {
  host: "数据库地址",
  dialect: "mysql",
});

class Brand extends Model {}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: DataTypes.STRING,
    phoneRank: DataTypes.INTEGER,
  },
  {
    tableName: "brand",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER,
      references: {
        model: Brand,
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// 将两张表联系在一起
Product.belongsTo(Brand, { foreignKey: "brandId" });

async function queryProduct() {
  const result = await Product.findAll({
    include: {
      model: Brand,
    },
  });
  console.log(result);
}

queryProduct();
```

:::

### 多对多操作

::: details 点击查看代码

```JavaScript
const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("数据库名", "用户名", "密码", {
  host: "数据库地址",
  dialect: "mysql",
});

// 学生
class Student extends Model {}
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: DataTypes.INTEGER,
  },
  {
    tableName: "students",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// 课程
class Course extends Model {}
Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.DOUBLE,
  },
  {
    tableName: "courses",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

class StudentCourse extends Model {}
StudentCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },
      field: "student_id",
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: "id",
      },
      field: "course_id",
    },
  },
  {
    tableName: "students_select_courses",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// 多对多关系的联系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: "studentId",
  otherKey: "courseId",
});

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: "courseId",
  otherKey: "studentId",
});

async function queryProduct() {
  const result = await Student.findAll({
    include: {
      model: Course,
    },
  });
  console.log(result);
}

queryProduct();
```

:::
