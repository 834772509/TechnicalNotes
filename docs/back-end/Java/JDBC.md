# JDBC

:::tip  
MySQL: [数据库的介绍](http://fir834772509.gitee.io/technicalnotes/back-end/SQL/)  
:::

## 创建连接

### 直接的方式

``` Java
  String url ="";  //不同的数据库版本连接方式不相同
  String user ="";  //用户名
  String password ="";  //密码

  try(
    Connection c = DriverManager.getConnection(url,user,password);
    Statement s = c.createStatement();
  ){
     //使用sql语句
  }catch(SQLException e){
    e.printStackTrace();
  }
```

### 封装成类的方式

``` Java
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;

//连接数据库类
public class DBUtil {
    static String ip = "127.0.0.1";
    static int port = 3306;
    static String database = "数据库名称";
    static String encoding = "UTC";
    static String loginName = "用户名";
    static String password = "密码";

    public static Connection getConnection() throws SQLException{
        String url = String.format(
                "jdbc:mysql://%s:%d/%s?useSSL=FALSE&serverTimezone=%s",ip,port,database,encoding);  //这是一种 方便修改 这是8.0.12的连接方式
        //String url = ""; //这种用起来不方便修改
        return DriverManager.getConnection(url,loginName,password);
    }

}
```

### 预编译的方式使用sql语句

``` Java
  /*

  + 使用预编译的方式 要提前准备号sql语句
  + 使用try-with-resource的方式 省去手动关闭连接
  + 以插入为例

  */
  String sql = "insert into 表名(字段1,字段2,字段3) values(?,?,?)";
  try(
    //这里连接使用封装成类的方式
    Connection c = BDUtil.getConnection();  
     PreparedStatement ps = c.prepareStatement(sql);
  ){
    /*

    - 设置要插入的值 注意 这里的参数从1开始 不是从0开始
    - setXXXX(位置,值);  XXXX为你要插入的值对应的类型

    */  
    //举个例子  
      ps.setString(1, "字符串");
      ps.setFloat(2, 313.0f);
      ps.setInt(3, 50);
      //开始插入
      ps.execute();
  }catch(SQLException e){
    e.printStackTrace();
  }
```

## 执行sql语句(execute与executeUpdate的区别)

* 相同点:  都可以进行 增 删 改

``` Java
  //这里演示的是不使用预编译的方式执行sql语句
  Statement s = c.createStatement();
  //创建sql语句
  String sqlInsert = "insert into Hero values (null,'盖伦',616,100)";
  String sqlDelete = "delete from Hero where id = 100";
  String sqlUpdate = "update Hero set hp = 300 where id = 100";
  // 相同点：都可以执行增加，删除，修改
  s.execute(sqlInsert);
  s.execute(sqlDelete);
  s.execute(sqlUpdate);
  s.executeUpdate(sqlInsert);
  s.executeUpdate(sqlDelete);
  s.executeUpdate(sqlUpdate);
```

* 不同点:

  1. 不同点1:  

  execute()可以执行查询语句  
  然后通过getResultSet()把结果集取出来  
  executeUpdate()不能执行查询语句.

  2. 不同点2:  

  execute()返回boolean类型，true表示执行的是查询语句，false表示执行的是insert, delete, update等等  
  executeUpdate()返回的是int，表示有多少条数据受到了影响

``` Java
  //可以使用executeQuery()语句来查询
  Statement s = c.createStatement()
  String sql = "select * from hero";
  // 执行查询语句，并把结果集返回给ResultSet
  ResultSet rs = s.executeQuery(sql);
```

## jdbc的特殊操作

* 获取自动ID

``` Java
  //Statement.RETURN_GENERATED_KEYS参数是为了用于获取自增长id
  PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
  ResultSet rs = ps.getGeneratedKeys(); //获取结果集
  if(rs.next()){
    int id = rs.getInt(1);
  }
```

* 获取表的元数据

``` Java
  /*  

  + 查看数据库层面的元数据
  + 数据库服务器版本
  + 驱动版本
  + 都有哪些数据库等等

  */
  DatabaseMetaData dbmd = c.getMetaData();
  // 获取数据库服务器产品名称
  dbmd.getDatabaseProductName()
  // 获取数据库服务器产品版本号
  dbmd.getDatabaseProductVersion()
  // 获取数据库服务器用作类别和表名之间的分隔符 如test.user
  dbmd.getCatalogSeparator()
  // 获取驱动版本
  dbmd.getDriverVersion()
  // 获取数据库名称
  ResultSet rs = dbmd.getCatalogs();
  while (rs.next()) {
    System.out.println("数据库名称:\t"+rs.getString(1));
  }
```

## 关于jdbc事务的介绍

  1. 前提: 表的类型必须是INNODB类型的  
  2. 为什么要使用事务: 当使用数据库进行多个操作时 如果某个操作失败 而其他操作成功 可能会引起数据库的数据错误,尤其是某个操作之间的联系非常紧密时,这是非常严重的.所以这时候就要使用 **事务**
  3. 什么是事务:  在进行多个操作时,如果这些操作都处于一个事务中,那么这些操作要么都成功,要么都失败.
  4. 怎么使用事务:  

      连接数据库成功后,关闭自动提交,改为手动提交.代码如下:

``` java
try (
      Connection c = BDUtil.getConnection();
      Statement s = c.createStatement();
    ) {
      // 有事务的前提下
      // 在事务中的多个操作，要么都成功，要么都失败
      //关闭自动提交
      c.setAutoCommit(false);
      //修改数据 比如血量加1
      String sql1 = "update 表名 set hp = hp +1 where id = 22";
      s.execute(sql1);
      // 在减1
      // 不小心写错写成了 updata(而非update)
      String sql2 = "updata hero set hp = hp -1 where id = 22";
      s.execute(sql2);
      // 手动提交
      c.commit();
      //因为sql2语句错误,提交失败;所以sql1语句也没有成功提交,这就是使用事务的好处
    } catch (SQLException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
}
  ```

## ORM与DAO

### ORM

1. 持久化

持久（Persistence），即把数据（如内存中的对象）保存到可永久保存的存储设备中（如磁盘）。持久化的主要应用是将内存中的数据存储在关系型的数据库中，当然也可以存储在磁盘文件中、XML数据文件中等等。  

2. 持久层:

持久层（Persistence Layer），即专注于实现数据持久化应用领域的某个特定系统的一个逻辑层面，将数据使用者和数据实体相关联  

3. ORM

即Object-Relationl Mapping，它的作用是在关系型数据库和对象之间作一个映射，这样，我们在具体的操作数据库的时候，就不需要再去和复杂的SQL语句打交道，只要像平时操作对象一样操作它就可以了。

### DAO  

1. DAO模式

DAO (DataAccessobjects 数据存取对象)是指位于业务逻辑和持久化数据之间实现对持久化数据的访问。通俗来讲，就是将数据库操作都封装起来。  

2. 模式

在面向对象设计过程中，有一些"套路”用于解决特定问题称为模式  

3. 优点

  1. 隔离了数据访问代码和业务逻辑代码。业务逻辑代码直接调用DAO方法即可，完全感觉不到数据库表的存在。分工明确，数据访问层代码变化不影响业务逻辑代码,这符合单一职能原则，降低了藕合性，提高了可复用性。
  2. 隔离了不同数据库实现。采用面向接口编程，如果底层数据库变化，如由 MySQL 变成 Oracle 只要增加 DAO 接口的新实现类即可，原有 MySQ 实现不用修改。这符合 "开-闭" 原则。该原则降低了代码的藕合性，提高了代码扩展性和系统的可移植性。  

4. 组成

  1. DAO接口： 把对数据库的所有操作定义成抽象方法，可以提供多种实现
  2. DAO 实现类： 针对不同数据库给出DAO接口定义方法的具体实现
  3. 实体类：用于存放与传输对象数据
  4. 数据库连接和关闭工具类： 避免了数据库连接和关闭代码的重复使用，方便修改
