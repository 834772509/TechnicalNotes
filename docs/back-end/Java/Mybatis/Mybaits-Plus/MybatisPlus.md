# MyBatisPlus

Mybatis的升级,节省我们大量的工作时间,所有CRUD代码它都可以自动化

## [官方文档](https://baomidou.com/guide/page.html)

> 简介

是什么? MyBatis是简化JDBC操作,它是简化Mybatis的操作

> 特性

- **无侵入**：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
- **强大的 CRUD 操作**：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求
- **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
- **支持主键自动生成**：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
- **支持 ActiveRecord 模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
- **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）
- **内置代码生成器**：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
- **内置分页插件**：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
- **分页插件支持多种数据库**：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
- **内置性能分析插件**：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
- **内置全局拦截插件**：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作



## 快速入门

1. 创建数据库,导入数据
2. IDEA创建Springboot项目
3. 导入依赖

```xml
<!--数据库驱动-->
<dependency>
    <groupId>mysql</groupId>
    	<artifactId>mysql-connector-java</artifactId>
    <version>8.0.21</version>
</dependency>
<!--Mybatis-plus-->
<dependency>
    <groupId>com.baomidou</groupId>
    	<artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.0.5</version>
</dependency>
```

4.配置文件连接数据库

```yaml
spring:
  datasource:
    username: 用户名
    password: "密码"
    #数据库 8.0及以上的链接方式
    url: jdbc:mysql://127.0.0.1:3306/数据库名?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
	#数据库8.0及以上驱动
    driver-class-name: com.mysql.cj.jdbc.Driver
```

5.mybatis-plus的步骤:

- 创建实体类
- 创建Mapper接口
- 继承BaseMapper接口

```Java
//实体类
public class User {
}
```

```java
//mapper接口
//在对应的Mapper接口上面继承基本的类 BaseMapper<T>
@Mapper //能够让Mybatis找到该接口
@Repository//创建一个该接口的实现类并交给springboot管理	可有可无
public interface UserMapper extends BaseMapper<User> {

}
```

```java
@SpringBootTest
class MybatisPlusApplicationTests {

    @Resource
    UserMapper userMapper;
    @Test
    void contextLoads() {
        //参数是一个wrapper.条件构造器,可以传null
        //查询全部用户
        List<User> users = userMapper.selectList(null);
        for (User user : users) {
            System.out.println(user);
        }
    }

}
```



## 配置日志

看sql执行流程

```yaml
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```



## CRUD

### 插入

```java
@Test
public void testInsert(){
    User user = new User(null,"QZS",18,"22222@qq.com");
    int re = userMapper.insert(user);
    System.out.println(re); //受影响行数 1
    System.out.println(user);//发现Id 自动回填
}

结果:
sql语句:
Preparing: INSERT INTO user ( id, name, age, email ) VALUES ( ?, ?, ?, ? )
参数值:
1324912175405109250(Long), QZS(String), 18(Integer), 22222@qq.com(String)
re:
1
user:
User{id=1324912175405109250, name='QZS', age=18, email='22222@qq.com'}
```

> 数据库插入的id的默认值为: 全局的唯一id

### 主键生成策略

> 默认 ID_WORKER 全局唯一id

​	分布式系统唯一id生成

1. 雪花算法:

   snowflake是Twitter开源的分布式ID生成算法，结果是一个long型的ID。其核心思想是：使用41bit作为毫秒数，10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID），12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID），最后还有一个符号位，永远是0。

   ![img](https://upload-images.jianshu.io/upload_images/13382703-b64e38457ddd13e2.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1021/format/webp)

   > 主键自增

   我们需要配置主键自增

   1.实体类字段上加入@TableId(type = IdType.AUTO )

   2.数据库主键字段一定要是自增

   > 其他的生成策略

   ```
   public enum IdType {
       AUTO(0),  //数据库id自增
       NONE(1),  //未设置
       INPUT(2), //手动输入 需要自己配置id
       ID_WORKER(3),//默认的全局唯一id
       UUID(4), //全局唯一id uuid
       ID_WORKER_STR(5);//ID_WORKER 字符串表示法
   ```

### 更新操作

```java
//第一次
public void testUpdate(){
        User user = new User(1324912175405109250L,"QZS11",20,"22222@qq.com");
     	
        int re = userMapper.updateById(user);
        System.out.println(re);
}
//第二次
public void testUpdate(){
        User user = new User();
    	user.setId(1324912175405109250L);
     	user.setName("1111");
        int re = userMapper.updateById(user);
        System.out.println(re);
}

结果:
//第一次
UPDATE user SET name=?, age=?, email=? WHERE id=? 
//第二次
UPDATE user SET name=? WHERE id=? 
```

发现:所有的sql都是自动帮你动态配置的!

### 自动填充

创建时间、修改时间 这些个操作一遍都是自动化完成,不希望手动完成

> 方式一: 数据库级别

1. 在表中新增字段 create_time,update_time
2. 设置默认时间戳 和 更新时间戳
3. 更新实体类 
4. 测试 

> 方式二: 代码级别

1. 删除设置的默认时间戳 和 更新时间戳

2. 在实体类上加上注解

   ```java
   @TableField(fill = FieldFill.INSERT) //执行更新操作时
   private Date createTime;
   @TableField(fill = FieldFill.INSERT_UPDATE) //执行 更新和修改操作时
   private Date updateTime;
   ```

3. 编写处理器来处理这个注解即可!

   ```java
   
   
   @Component //将处理器加入到IOC容器中
   public class MyMetaObjectHandler implements MetaObjectHandler {
       //插入是的填充策略
       @Override
       public void insertFill(MetaObject metaObject) {
           System.out.println("inset .....");
           //setFieldValByName(String fieldName, Object fieldVal, MetaObject metaObject)
           //字段名, 字段值,要给哪个数据处理
           this.setFieldValByName("createTime",new Date(),metaObject);
           this.setFieldValByName("updateTime",new Date(),metaObject);
       }
       //更新时的填充策略
       @Override
       public void updateFill(MetaObject metaObject) {
           System.out.println("update .....");
           this.setFieldValByName("updateTime",new Date(),metaObject);
       }
   }
   ```

### 乐观锁

> 乐观锁 : 总是认为不会出现问题,无论干什么都不会上锁,一旦出现问题,就再次更新值测试
>
> 悲观锁: 总认为会出现问题,无论干什么都会上锁!再去操作!

乐观锁实现方式：

> - 取出记录时，获取当前version
> - 更新时，带上这个version
> - 执行更新时， set version = newVersion where version = oldVersion
> - 如果version不对，就更新失败

1. 数据库增加字段version 默认值为1
2. 实体类增加属性version并加上乐观锁注解@Version
3. 注册组件

3.0.5版本

```java
//mybatis-plus  3.0.5 的方式
@Configuration //配置类
public class MybatisPlusConfig{
    //注册乐观锁插件
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor(){
        return new OptimisticLockerInterceptor();
    }
    
}
```

3.4.0版本 

```java
@Configuration
public class MybatisPlusConfig {

    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 乐观锁配置
        interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
        return interceptor;
    }
}
```



### 查询

```java
@Test
public void testQuery(){
	User user = userMapper.selectById(1L); //id查询
	System.out.println(user);
	List<User> users = userMapper.selectBatchIds(Arrays.asList(1L, 2L, 3L));//多用户id查询
    for (User user1 : users) {
    	System.out.println(user1);
    }
    HashMap<String,Object> map = new HashMap<String,Object>();
    map.put("name","1213123");
    List<User> users1 = userMapper.selectByMap(map); //map查询
    System.out.println(users1);
}
```



### 分页查询

 1.配置拦截器组件

3.0.5版本

```java
public class MybatisPlusConfig{
    //注册分页插件 3.0.5
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
}
```

3.4.0版本

```java
@Configuration
public class MybatisPlusConfig {

    /**
     * 新的分页插件,一缓和二缓遵循mybatis的规则,需要设置 MybatisConfiguration#useDeprecatedExecutor = false 避免缓存出现问题(该属性会在旧插件移除后一同移除)
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.H2));
        return interceptor;
    }

    @Bean
    public ConfigurationCustomizer configurationCustomizer() {
        return configuration -> configuration.setUseDeprecatedExecutor(false);
    }
}
```

### 删除

和查询基本相同

### 逻辑删除

> 物理删除: 从数据库中直接移除
>
> 逻辑删除: 在数据库中没有删除,而是通过一个变量来让他失效

管理员可以查看被删除的记录!防止数据的丢失类似回收站!

1. 增加一个字段deleted 默认值为0  **不要和数据库关键字delete冲突**

2. 实体类中增加属性并加上逻辑删除注解@TableLogic

   ```Java
   @TableLogic //逻辑删除
   private Integer deleted;
   ```

3. 配置逻辑删除组件

   3.0.5 版本

   ```Java
   @Bean
   public ISqlInjector sqlInjector(){
       return new LogicSqlInjector();
   }
   ```

4. 在配置文件中配置一下

   ```yaml
   mybatis-plus:
     global-config:
       db-config:
         logic-delete-value: 1      #删除
         logic-not-delete-value: 0  #未删除
   ```

   3.4.0 版本

   步骤3不需要

5. 测试

   ```java
   @Test
   public void testDelete(){
       userMapper.deleteById(1324912175405109250L);
   }
   结果:
   sql语句:
   UPDATE user SET deleted=1 WHERE id=? AND deleted=0
   参数:1324912175405109250(Long)
   返回值:1 一条数据被影响
       
   再查询改条记录:
   sql语句:
   SELECT id,name,age,email,create_time,update_time,version,deleted FROM user WHERE id=? AND deleted=0 
   参数:1324912175405109250(Long)
   总数: 0  没有查找到 
   ```

   结论:

   ​	逻辑删除走的是更新操作而不是删除操作

   ​	该插件查询的时候会自动过滤被逻辑删除的字段

   ​	

## 性能分析插件

3.0.5 版本

1. 导入插件

   ```Java
   @Bean
   @Profile({"dev","test"})//选择设置的项目环境 基本上都是 开发dev 和 测试test 环境
   public PerformanceInterceptor performanceInterceptor(){
       PerformanceInterceptor per = new PerformanceInterceptor();
       per.setMaxTime(100);  //sql执行的最大时间
       per.setFormat(true);  //sql 是否格式化输出
       return  per;
   }
   ```

3.4.0  版本

```pro
modulelist=com.baomidou.mybatisplus.extension.p6spy.MybatisPlusLogFactory,com.p6spy.engine.outage.P6OutageFactory
# 自定义日志打印
logMessageFormat=com.baomidou.mybatisplus.extension.p6spy.P6SpyLogger
#日志输出到控制台
appender=com.baomidou.mybatisplus.extension.p6spy.StdoutLogger
# 使用日志系统记录 sql
#appender=com.p6spy.engine.spy.appender.Slf4JLogger
# 设置 p6spy driver 代理
deregisterdrivers=true
# 取消JDBC URL前缀
useprefix=true
# 配置记录 Log 例外,可去掉的结果集有error,info,batch,debug,statement,commit,rollback,result,resultset.
excludecategories=info,debug,result,commit,resultset
# 日期格式
dateformat=yyyy-MM-dd HH:mm:ss
# 实际驱动可多个
#driverlist=org.h2.Driver
# 是否开启慢SQL记录
outagedetection=true
# 慢SQL记录标准 2 秒
outagedetectioninterval=2
```

## 条件构造器

十分重要 Wapper 作用类似动态sql

不用自己手写 如 like  is   between 这种

wapper这个类封装这些sql关键字



## 代码生成器

导入依赖

```xml
<!--Mybatis-plus-->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>版本</version>
</dependency>
<!--如果上面这个版本是3.0.5之后的就必须导入下面这个-->
<!--建议导入上面jar包时查看有没有包含下面这个没有就导入-->
<!--代码生成器依赖-->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-generator</artifactId>
    <version>3.4.0</version>
</dependency>
```

```xml
<!-- 模板引擎 依赖-->
<dependency>
    <groupId>org.apache.velocity</groupId>
    <artifactId>velocity-engine-core</artifactId>
    <version>版本</version>
</dependency>
```

```java
import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.po.TableFill;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

import java.util.ArrayList;

//代码自动生成器
public class AutoCode {
    public static void main(String[] args) {
        //自动生成器对象
        AutoGenerator mpg = new AutoGenerator();

        //1.全局配置
        GlobalConfig gc = new GlobalConfig();
        //获取当前系统目录
        String project = System.getProperty("user.dir");
        //设置输出目录
        gc.setOutputDir(project+"/src/main/java");
        //设置作者名字
        gc.setAuthor("qzs");
        //是否打开资源管理器
        gc.setOpen(false);
        //是否覆盖原来生成的文件
        gc.setFileOverride(false);
        //设置服务名字
        gc.setServiceName("%sService");//去Service的I前缀
        //设置生成策略
        gc.setIdType(IdType.ID_WORKER);
        //设置日期类型
        gc.setDateType(DateType.ONLY_DATE);
        //是否配置swagger
        gc.setSwagger2(true);
        //将 全局配置 配置到自动生成器对象中
        mpg.setGlobalConfig(gc);

        //2.配置数据源
        DataSourceConfig dsc = new DataSourceConfig();
        //url
        dsc.setUrl("jdbc:mysql://127.0.0.1:3306/mybatis_plus?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8");
        //用户名
        dsc.setUsername("root");
        //密码
        dsc.setPassword("991106");
        //驱动
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        //数据库类型
        dsc.setDbType(DbType.MYSQL);
        //将 数据源 配置到自动生成器对象中
        mpg.setDataSource(dsc);

        //3.包配置
        PackageConfig pc = new PackageConfig();
        //模块名
        pc.setModuleName("blog");
        //设置包
        pc.setParent("com.qu");
        //pojo
        pc.setEntity("pojo");
        //mapper
        pc.setMapper("mapper");
        //controller
        pc.setController("controller");
        //service
        pc.setService("service");
        //将 包配置 配置到自动生成器对象中
        mpg.setPackageInfo(pc);

        //4.策略配置
        StrategyConfig strategy = new StrategyConfig();
        //设置数据库 到文件 命名规则
        strategy.setNaming(NamingStrategy.underline_to_camel);
        //这是列的命名规则
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        //设置要映射的表名
        strategy.setInclude("user");
        strategy.setSuperEntityClass("你自己的父类实体,没有就不用设置!");
        //设置lombok风格
        strategy.setEntityLombokModel(true);
        //设置逻辑删除
        strategy.setLogicDeleteFieldName("deleted");
        //设置自动填充
        TableFill gmtCreat = new TableFill("gmt_creat", FieldFill.INSERT);
        TableFill gmtModified = new TableFill("gmt_modified", FieldFill.INSERT_UPDATE);
        ArrayList<TableFill> tableFills = new ArrayList<>();
        tableFills.add(gmtCreat);
        tableFills.add(gmtModified);
        strategy.setTableFillList(tableFills);
        //乐观锁
        strategy.setVersionFieldName("version");
        //驼峰命名格式
        strategy.setRestControllerStyle(true);
        //将 策略配置 配置到自动生成器对象中
        mpg.setStrategy(strategy);

        mpg.execute();

    }
}
```

前提: 把你需要用到底jar包提前导入进去 避免生成完成后,代码报错

