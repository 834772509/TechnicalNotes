# Mybatis

[Mybatis 中文文档](https://mybatis.org/mybatis-3/zh/index.html)

## 简介

### 什么是Mybatis

* MyBatis 是一款优秀的**持久层框架**
* 它支持自定义 SQL、存储过程以及高级映射
* MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作
* MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录
* MyBatis本是apache的一个开源项目Batis，2010年这个项目由apache software foundation迁移到了 google code，并且改名为MyBatis。2013年11月迁移到Github

### 持久化

持久（Persistence），即把数据（如内存中的对象）保存到可永久保存的存储设备中（如磁盘）。持久化的主要应用是将内存中的数据存储在关系型的数据库中，当然也可以存储在磁盘文件中、XML数据文件中等等。  

需要持久化的原因：

* 有一些对象，不能让他丢掉
* 内存贵

### 持久层

持久层（Persistence Layer），即专注于实现数据持久化应用领域的某个特定系统的一个逻辑层面，将数据使用者和数据实体相关联  

## 导入依赖

``` xml
<!--MySQL https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.12</version>
</dependency>

<!-- MyBatis https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.5</version>
</dependency>

<!--junit https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13</version>
    <scope>test</scope>
</dependency>
```

## 使用

### 解决静态资源导出失败

``` xml
<!--在build中配置resources，来防止我们资源导出失败的问题-->
<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>false</filtering>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>false</filtering>
        </resource>
    </resources>
</build>
```

### 核心配置文件

* 内部配置

\src\main\resources\mybatis-config.xml

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <!-- Mybatis默认事务管理器为JDBC -->
            <transactionManager type="JDBC"/>
            <!-- Mybatis默认事务管理器为POOLED -->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://连接地址:3306/数据库名?serverTimezone=UTC&amp;useSSL=false&amp;useUnicode=true&amp;characterEncoding=utf8"/>
                <property name="username" value="数据库用户名"/>
                <property name="password" value="数据库密码"/>
            </dataSource>
        </environment>
    </environments> 
    
    <!-- 每一个Mapper.XML都需要在Mybatis核心配置文件中注册 -->
    <mappers>
        <mapper resource="com/example/dao/Mapper名称.xml"/>
    </mappers>

</configuration>
```

* 外部配置

\src\main\resources\db.properties

```
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://连接地址:3306/数据库名?serverTimezone=UTC&amp;useSSL=false&amp;useUnicode=true&amp;characterEncoding=utf8
username=数据库用户名
password=
```

\src\main\resources\mybatis-config.xml

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--引入外部配置文件-->
    <properties resource="db.properties">
        <!--内部配置（优先使用外部配置文件）-->
        <!-- <property name="username" value="root"></property> -->
        <!-- <property name="password" value=""></property> -->
    </properties>

    <environments default="development">

        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="${driver}"/>
                <property name="url" value="${url}"/>
                <property name="username" value="${username}"/>
                <property name="password" value="${password}"/>
            </dataSource>
        </environment>

    </environments>

    <!-- 每一个Mapper.XML都需要在Mybatis核心配置文件中注册 -->
    <mappers>
        <mapper resource="com/example/dao/Mapper名称.xml"/>
    </mappers>

</configuration>
```

### MyBatis 工具类

\com\example\utils\MybatisUtils.java

``` Java
public class MybatisUtils {
    private static SqlSessionFactory sqlSessionFactory;
    static {
        try {
            String resource = "mybatis-config.xml";
            InputStream inputStream = Resources.getResourceAsStream(resource);
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    //获取SqlSession连接
    public static SqlSession getSession() {
        return sqlSessionFactory.openSession();
    }
}
```

### 创建实体类

com\example\pojo\实体类名.java

``` Java
public class 实体类名 {
    private 数据类型 属性;
    private 数据类型 属性;

    public 数据类型 get属性() {
        return 属性;
    }

    public void set属性(数据类型 属性) {
        this.属性 = 属性;
    }

    @Override
    public String toString() {
        return "实体类名{" + "属性=" + 属性 + "}";
    }
}
```

### Mapper 接口类

com\example\dao\Mapper接口名.java

``` Java
public interface Mapper接口名 {
    返回类型 SQL方法名(数据类型 参数名);
    返回类型 SQL方法名(数据类型 参数名);
}
```

### Mapper.xml 配置文件

::: tip 提示
namespace中的包名要和 dao/mapper 接口的包名一致，否则会报错
:::

::: tip 提示
resultType 如需要返回实体类，默认需要填写完整的类路径，可通过``类型别名``来实现直接填写类名
:::

com\example\dao\Mapper名称.xml

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.dao.Mapper接口名">

    <!-- 查询数据 -->
    <select id="SQL方法名" resultType="com.example.pojo.实体类名">
        select * from 表名
    </select>

    <select id="SQL方法名" parameterType="参数类型" resultType="返回值类型">
        select * from 表名 where 字段名 = #{参数名}
    </select>

    <!-- 增加数据 -->
    <insert id="SQL方法名" parameterType="参数类型">
        insert into 表名 (字段名,字段名) values (#{参数名}},#{参数名});
    </insert>

    <!-- 修改数据 -->
    <update id="SQL方法名" parameterType="参数类型">
        update 表名 set 字段名 = #{参数名} ,字段名=#{参数名}} where 字段名 = #{参数名};
    </update>

    <!-- 删除数据 -->
    <delete id="SQL方法名" parameterType="参数类型">
        delete from 表名 where 字段名 = #{参数名}
    </delete>

</mapper>
``` 

### 测试类

``` Java
public class 测试类名 {
    @Test
    public void 查询数据() {
        SqlSession session = MybatisUtils.getSession();

       Mapper接口名 mapper = session.getMapper(Mapper接口名.class);
       List<实体类名> users = mapper.SQL方法名();

       for (实体类名 item: users){
           System.out.println(item);
      }
    }

    @Test
    public void 查询数据() {
        SqlSession session = MybatisUtils.getSession();

        Mapper接口名 mapper = session.getMapper(Mapper接口名.class);
        System.out.println(mapper.SQL方法名(参数));

        session.close();
    }

    @Test
    public void 增加数据() {
        
        SqlSession session = MybatisUtils.getSession();

        Mapper接口名 mapper = session.getMapper(Mapper接口名.class);
        int res = mapper.addUser(new 实体类名(参数1, "参数2"));
        if (res > 0) {
            System.out.println("插入成功");
        } 
        
        // 增删改需要提交事物
        session.commit();
        session.close();
    }

    @Test
    public void 修改数据() {
        SqlSession session = MybatisUtils.getSession();

        Mapper接口名 mapper = session.getMapper(Mapper接口名.class);
        int res = mapper.updateUser(new 实体类名(参数1, "参数2"));
        if (res > 0) {
            System.out.println("修改成功");
        }

        // 增删改需要提交事物
        session.commit();
        session.close();
    }

    @Test
    public void 删除数据() {
        // 增删改需要提交事物
        SqlSession session = MybatisUtils.getSession();

        Mapper接口名 mapper = session.getMapper(Mapper接口名.class);
        int res = mapper.deleteUser(new User(参数1, "参数2"));
        if (res > 0) {
            System.out.println("删除成功");
        } 
        
        // 增删改需要提交事物
        session.commit();
        session.close();
    }
}
```

### 类型别名

类型别名是为Java类型设置一个短的名字，存在的意义仅在于用来减少类完全限定名的冗余

* 单一别名

\src\main\resources\mybatis-config.xml

``` xml
<configuration>
    <typeAliases>
        <typeAlias type="com.example.pojo.实体类名" alias="实体类名"></typeAlias>
    </typeAliases>
</configuration>
```

\com\example\dao\Mapper名称.xml

``` xml
<!-- 查询数据 -->
<select id="SQL方法名" resultType="实体类名">
    select * from 表名
</select>
```

* 包名别名

指定一个包名，MyBatis会在包名下面搜索需要的JavaBean  

\src\main\resources\mybatis-config.xml

``` xml
<configuration>
    <typeAliases>
        <package name="com.example.pojo"/>
    </typeAliases>
</configuration>
```

\com\example\dao\Mapper名称.xml

``` xml
<!-- 查询数据 -->
<select id="SQL方法名" resultType="实体类名">
    select * from 表名
</select>
```

### 映射器

映射器用于注册绑定Mapper文件

1. 指定xml文件绑定注册（推荐）

\src\main\resources\mybatis-config.xml

``` xml
<configuration>
    <mappers>
        <mapper resource="com/example/dao/Mapper名称.xml"/>
    </mappers>
</configuration>
```

2. 使用class文件绑定注册

\src\main\resources\mybatis-config.xml

``` xml
<configuration>
    <mappers>
        <mapper class="com.example.dao.Mapper名称"></mapper>
    </mappers>
</configuration>
```

::: warning 注意
1. 接口和它的Mapper配置文件必须同名
2. 接口和它的Mapper配置文件必须在同一个包下
:::

3. 使用扫描包进行绑定

\src\main\resources\mybatis-config.xml

``` xml
<configuration>
    <mappers>
        <package name="com.example.dao"></package>
    </mappers>
</configuration>
```

::: warning 注意
1. 接口和它的Mapper配置文件必须同名
2. 接口和它的Mapper配置文件必须在同一个包下
:::

## 生命周期

生命周期 和 作用域 是至关重要的，错误的使用会导致非常严重的**并发问题**

![生命周期](./img/生命周期.jpg)

**SqlSessionFactoryBuilder**

一旦创建了SqlSessionFactor，就不再需要它了
* 局部变量

**SqISessionFactory**

可以想象为数据库连接池。一旦被创建就应该在应用的运行期间一直存在，**没有任何理由丢弃它或重新创建另一个实例**  

SqlSessionFactory的最佳作用域是应用作用域。最简单的就是使用单例模式或者静态单例模式。

**SqlSession**

连接到连接池的一个请求。SqlSession的实例不是线程安全的，因此是不能被共享的，  
所以它的最佳的作用域是请求或方法作用域。用完之后需要赶紧关闭，否则资源被占用。

![SqlSession](./img/SqlSession.jpg)

每一个Mapper，代表一 个具体的业务

