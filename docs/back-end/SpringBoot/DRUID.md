# DRUID

DRUID 是阿里巴巴开源平台上一个数据库连接池实现，结合了C3P0、DBCP、PROXOOL等DB池的优点，同时加入了日志监控  
Druid 可以很好的监控DB池连接和SQL的执行情况，天生就是针对监控而生的DB连接池  
Spring Boot 2.0 以上默认使用Hikari数据源，可以说Hikari与Driud都是当前Java Web.上最优秀的数据源

(更多版本)[http://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter]
 
## 依赖

\pom.xml

``` xml
<!--阿里巴巴数据源-->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.22</version>
</dependency>
```

## 配置

application.yml

``` yaml
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    #Spring Boot 默认是不注入这些属性值的，需要自己绑定
    #druid 数据源专有配置
    initialSize: 5
    minIdle: 5
    maxActive: 20
    maxWait: 60000
    timeBetweenEvictionRunsMillis: 60000
    minEvictableIdleTimeMillis: 300000
    validationQuery: SELECT 1 FROM DUAL
    testWhileIdle: true
    testOnBorrow: false
    testOnReturn: false
    poolPreparedStatements: true
```

## Log4j

Log4j 是一个 web 界面，方便用户查看、监控数据库

::: tip 提示
因为SpringBoot内置了 servlet 容器,所以没有web.xml，替代方法: ServletRegistrationBean
:::

### 依赖

\pom.xml

``` xml
<!--Log4j-->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.12</version>
</dependency>
```

### 配置

application.yml

``` yaml
spring:
  datasource:
    #配置监控统计拦截的filters，stat:监控统计、log4j：日志记录、wall：防御sql注入
    #如果允许时报错  java.lang.ClassNotFoundException: org.apache.log4j.Priority
    #则导入 log4j 依赖即可，Maven 地址：https://mvnrepository.com/artifact/log4j/log4j
    filters: stat,wall,log4j
    maxPoolPreparedStatementPerConnectionSize: 20
    useGlobalDataSourceStat: true
    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
    type: com.alibaba.druid.pool.DruidDataSource
```

新建\com.example\config\DruidConfig.java

``` Java
@Configuration

public class DruidConfig {
    @ConfigurationProperties(prefix = "spring.datasource")
    @Bean
    public DataSource druidDataSource() {
        return new DruidDataSource();
    }

    //后台监控
    @Bean
    public ServletRegistrationBean StatServlet() {
        ServletRegistrationBean<StatViewServlet> bean = new ServletRegistrationBean<>(new StatViewServlet(), "/druid/*");
        //后台需要有人登录，账号密码配置
        HashMap<String, String> initParameters = new HashMap<>();

        //增加配置

        //登录Key
        initParameters.put("loginUsername", "admin");
        initParameters.put("loginPassword", "123456");

        //允许谁可以访问
        initParameters.put("allow", "");

        //禁止谁访问
        // initParameters.put("aaa", "192.168.11.123")

        // 设置初始化参数
        bean.setInitParameters(initParameters);
        return bean;
    }

    //filter
    @Bean
    public FilterRegistrationBean webStatFilter() {
        FilterRegistrationBean bean = new FilterRegistrationBean();
        bean.setFilter(new WebStatFilter());
        //可以过滤哪些请求？
        Map<Object, Object> initParameters = new HashMap<>();
        //这些东西不进行统计
        initParameters.put("Exclusion", "*.js,*.css,/druid/*");

        bean.setInitParameters(initParameters);
        return bean;
    }
}
```

### 使用

访问：``127.0.0.1:8080/druid``
