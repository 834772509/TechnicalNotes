# MyBatis

## 依赖

创建项目勾选：MySQL Driver、mybatis Framework

``` xml
<!-- MySQL Driver -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- MyBatis -->
<dependency>
 <groupId>org.mybatis.spring.boot</groupId>
 <artifactId>mybatis-spring-boot-starter</artifactId>
 <version>2.1.2</version>
</dependency>
```

## 配置

application.yml

``` yaml
spring:
  datasource:
    username: root
    password: '数据库密码'
    url: jdbc:mysql://127.0.0.1:3306/数据库名?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
    driver-class-name: com.mysql.cj.jdbc.Driver
    # 自动执行SQL语句，resources\sql
    schema:
      - classpath:sql/XXX.sql
      - classpath:sql/XXX.sql
    initialization-mode: always
```

::: tip 提示
MySQL 8.0 以上必须要设置时区serverTimezone
:::

### 连接测试

``` Java
@Autowired
DataSource dataSource;

@Test
void contextLoads() throws SQLException {
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
}
```

## 使用-XML配置方式

### 配置XML

application.yml

``` yaml
#整合Mybatis
mybatis:
  type-aliases-package: com.example.pojo
  mapper-locations: classpath*:mybatis/mapper/*.xml
```

### 配置Dao

\com\example\mapper\Mapper名.java

``` Java
//这个注解表示mybatis的mapper类：Dao
@Mapper
@Repository
public interface Mapper名 {
    返回类型 SQL方法名(数据类型 参数名);
    返回类型 SQL方法名(数据类型 参数名);
}
```

\resources\mybatis\mapper\SQL配置名.xml

``` XML
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.mapper.Mapper名">

    <!-- 查询数据 -->
    <select id="SQL方法名" resultType="返回值类型">
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

### 使用

\Controller\控制器名.java

``` Java
@Autowired
private SQL配置名 SQLMapper;


// 查询数据
@RequestMapping("/路径")
public 返回值类型 方法名() {
    返回值类型 变量名 = SQLMapper.SQL方法名();
    return 变量名;
}

@RequestMapping("/路径/{参数名}")
public String 方法名(@PathVariable 参数数据类型 参数名){
    返回值类型 变量名 = SQLMapper.SQL方法名(参数名);
    return 变量名;
}

// 增加数据
@RequestMapping("/路径")
public String 方法名() {
    SQLMapper.SQL方法名(参数1,参数2);
    return "OK";
}

// 修改数据
@RequestMapping("/路径")
public String 方法名() {
    SQLMapper.方法名(参数1,参数2);
    return "OK";
}

// 删除数据
@RequestMapping("/路径")
public String 方法名() {
    SQLMapper.方法名(参数);
    return "OK";
}
```

## 使用-注解版

使用注解来映射简单语句会使代码显得更加简洁。  
然而对于稍微复杂-点的语句，Java 注解就力不从心了，并且会显得更加混乱。  
因此，如果需要完成很复杂的事情，那么最好使用XML来映射语句。

### Mapper接口

``` Java
//指定这是一个操作数据库的mapper
@Mapper
public interface Mapper接口名 {
    //查询所有数据
    @Select("select * from 表名")
    List<返回类型> SQL方法名(); 
    
    // 查询指定数据
    @Select("select * from 表名 where 字段名=#{参数名}")
    public 返回类型 SQL方法名(返回类型 参数名);

    //插入数据
    @Insert("insert into 表名(字段名) values(#{参数名})")
    public 返回类型 SQL方法名(返回类型 参数名);

    //修改数据
    @Update("update 表名 set 字段名=#{参数名}")
    public 返回类型 SQL方法名(返回类型 参数名);

    //删除数据
    @Delete("delete from 表名 where id =#{参数名}")
    public 返回类型 SQL方法名(返回类型 参数名);
}
```

### 使用

``` Java
@RequestMapping("/URL")
public Department 地址 () {
    departmentMapper.方法名();
    return department;
}

@RequestMapping("/URL")
public Department 地址 (Department department) {
    departmentMapper.方法名(department);
    return department;
}
```
