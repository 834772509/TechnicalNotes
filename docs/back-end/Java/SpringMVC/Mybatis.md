# 整合 Mybatis

## 导入依赖

\pom.xml

```xml
<!-- Spring-JDBC https://mvnrepository.com/artifact/org.springframework/spring-jdbc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.2.8.RELEASE</version>
</dependency>

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

<!-- Mybatis-Spring https://mvnrepository.com/artifact/org.mybatis/mybatis-spring -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>2.0.5</version>
</dependency>

<!-- C3P0 https://mvnrepository.com/artifact/com.mchange/c3p0 -->
<dependency>
    <groupId>com.mchange</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.5.5</version>
</dependency>
```

## 整合

### 实体类

\com\example\pojo\实体类名.java

```Java
public class 实体类名 {
    private 数据类型 属性名;
    private 数据类型 属性名;
}
```

### Dao 层

\com\example\dao\Mapper 名.java

```Java
public interface Mapper名 {
    返回类型 SQL方法名();
    返回类型 SQL方法名(参数类型 参数名);
    List<返回类型>  SQL方法名();
}
```

\com\example\dao\Mapper 名.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.dao.Mapper接口名">

    <!-- 查询所有数据 -->
    <select id="SQL方法名" resultType="com.example.pojo.实体类名">
        select * from 表名
    </select>

    <!-- 查询指定数据 -->
    <select id="SQL方法名" parameterType="参数类型" resultType="返回值类型">
        select * from 表名 where 字段名 = #{参数名}
    </select>

    <!-- 多参数传递 -->
    <select id="SQL方法名" parameterType="Map" resultType="返回值类型">
        select * from 表名 where 字段名 = #{参数1} and 字段名 = #{参数2}
    </select>

    <!-- 增加数据 -->
    <insert id="SQL方法名" parameterType="参数类型">
        insert into 表名 (字段名,字段名) values (#{参数名},#{参数名});
    </insert>

    <!-- 修改数据 -->
    <update id="SQL方法名" parameterType="参数类型">
        update 表名 set 字段名 = #{参数名} ,字段名=#{参数名} where 字段名 = #{参数名};
    </update>

    <!-- 删除数据 -->
    <delete id="SQL方法名" parameterType="参数类型">
        delete from 表名 where 字段名 = #{参数名}
    </delete>

</mapper>
```

### Service 层

- 接口类

  \com\example\service\Service 名.java

  ```Java
  public interface Service名 {
      返回类型 SQL方法名();
      返回类型 SQL方法名(参数类型 参数名);
      List<返回类型>  SQL方法名();
  }
  ```

- 实现类

  \com\example\service\Service 名 Impl.java

  ```Java
  public class Service名Impl implements Service名 {
      private Mapper名 MyMapper;

      public void setMyMapper(Mapper名 MyMapper) {
          this.MyMapper = MyMapper;
      }

      @Override
      public 返回值类型 SQL方法名() {
          return MyMapper.SQL方法名();
      }

      @Override
      public 返回值类型 SQL方法名(参数类型 参数名) {
          return MyMapper.SQL方法名(参数名);
      }

      @Override
      public List<返回值类型> SQL方法名() {
          return MyMapper.SQL方法名();
      }
  }
  ```

### Controll 层

```Java
@Controller
@ResponseBody
public class BookController {
    @Autowired
    @Qualifier("Service名Impl")
    private Service名 MyService;

    @RequestMapping("/路径")
    public String selectAll() {
        List<返回值类型> data = MyService.SQL方法名();
        Gson gson = new Gson();
        return gson.toJson(data);
    }
}
```

### 配置 Mybatis

\src\main\resources\mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <typeAliases>
        <package name="com.example.pojo"></package>
    </typeAliases>

    <mappers>
        <package name="com.example.dao"/>
    </mappers>

</configuration>
```

### 配置 dao 层

\src\main\resources\database.properties

```ini
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://127.0.0.1:3306/数据库名?serverTimezone=UTC&useSSL=false&useUnicode=true&characterEncoding=utf8
jdbc.username=数据库用户名
jdbc.password=数据库密码
```

\src\main\resources\spring-dao.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 关联数据库配置文件 -->
    <context:property-placeholder location="classpath:database.properties"/>

    <!-- 连接池 -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>

        <!-- c3p0连接池的私有属性 -->
        <property name="maxPoolSize" value="30"/>
        <property name="minPoolSize" value="10"/>
        <!-- 关闭连接后不自动commit -->
        <property name="autoCommitOnClose" value="false"/>
        <!-- 获取连接超时时间 -->
        <property name="checkoutTimeout" value="10000"/>
        <!-- 当获取连接失败重试次数 -->
        <property name="acquireRetryAttempts" value="2"/>
    </bean>

    <!--SqlSession-->
    <bean id="SqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <!--绑定Mybatis配置文件-->
        <property name="configLocation" value="classpath:mybatis-config.xml"/>
    </bean>

    <!--配置dao接口扫描包-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="sqlSessionFactoryBeanName" value="SqlSessionFactory"/>
        <property name="basePackage" value="com.example.dao"/>
    </bean>

</beans>
```

### 配置 SpringMVC

\src\main\resources\spring-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd  ">


    <!-- 自动扫描包，让指定包下的注解生效,由IOC容器统一管理 -->
    <context:component-scan base-package="com.example.controller"/>
    <!-- 让SpringMVC不处理静态资源 -->
    <mvc:default-servlet-handler/>
    <!--支持mvc注解驱动-->
    <mvc:annotation-driven/>

    <!-- 视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"
          id="internalResourceViewResolver">
        <!-- 前缀 -->
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <!-- 后缀 -->
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```

### 配置 Service 层

\src\main\resources\spring-service.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--扫描service下的包-->
    <context:component-scan base-package="com.example.service"/>

    <bean id="Service名Impl" class="com.example.service.Service名Impl">
        <property name="Mapper名" ref="Mapper名"/>
    </bean>

    <!--声明式事物配置-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--注入数据源-->
        <property name="dataSource" ref="dataSource"/>
    </bean>

</beans>
```

### 配置总配置文件

\src\main\resources\applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <import resource="spring-dao.xml"></import>
    <import resource="spring-service.xml"></import>
    <import resource="spring-mvc.xml"></import>

</beans>
```

### 配置 web

\web\WEB-INF\web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <!-- 配置DispatchServlet -->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!-- 绑定配置文件 -->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </init-param>
        <!-- 启动顺序，数字越小，启动越早 -->
        <load-on-startup>1</load-on-startup>
    </servlet>

    <!--所有的请求都会被SpringMVC拦截-->
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <!--过滤器-解决乱码-->
    <filter>
        <filter-name>encoding</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```
