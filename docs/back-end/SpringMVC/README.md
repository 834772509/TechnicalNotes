# SpringMVC

Spring MVC 是 Spring Framework 的一部分，是基于 Java 实现 MVC 的轻量级 Web 框架。

## 基本概念

### 三层架构

1. 表现层： WEB 层，用来和客户端进行数据交互的。表现层一般会采用 MVC 的设计模型
2. 业务层： 处理公司具体的业务逻辑
3. 持久层： 用来操作数据库

### MVC 模型

- M: Model 模型，通常指的是数据模型，用来封装数据
- V: View 视图，通常用来展示数据
- C: Controll 控制器，通常用来处理程序逻辑

### SpringMVC

::: tip 提示
SpringMVC 的本质依然是 Servlelt
:::

SpringMVC 是一种基于 Java 实现的 MVC 设计模型的请求驱动类型的轻量级 WEB 框架。  
Spring MVC 属于 SpringFrameWork 的后续产品，已经融合在 Spring Web Flow 里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC 模块。  
使用 Spring 可插入的 MVC 架构，从而在使用 Spring 进行 WEB 开发时，可以选择使用 Spring 的 SpringMVC 框架或集成其他 MVC 开发框架，如 Struts1(现在一般不用)，Struts2 等。

### SpringMVC 的特点

- 轻量级，简单易学
- 高效 , 基于请求响应的 MVC 框架
- 与 Spring 兼容性好，无缝结合
- 约定优于配置
- 功能强大：RESTful、数据验证、格式化、本地化、主题等
- 简洁灵活

## 创建项目

### 导入依赖

\pom.xml

```xml
<!-- SpringMVC -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>4.2.5.RELEASE</version>
</dependency>

<!-- jstl -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>

<!-- servlet-api -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
</dependency>
```

### 配置 springmvc-servlet

\resources\springmvc-servlet.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       https://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/mvc
       https://www.springframework.org/schema/mvc/spring-mvc.xsd">

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

### 配置 web.xml

右键项目-增加框架的支持-选择 web

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
            <param-value>classpath:springmvc-servlet.xml</param-value>
        </init-param>
        <!-- 启动顺序，数字越小，启动越早 -->
        <load-on-startup>1</load-on-startup>
    </servlet>

    <!--所有的请求都会被SpringMVC拦截-->
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

</web-app>
```

## 控制器 Controller

控制器复杂提供访问应用程序的行为，通常通过接口定义或注解定义两种方法实现。

- 控制器负责解析用户的请求并将其转换为一个模型。
- 在 Spring MVC 中一个控制器类可以包含多个方法
- 在 Spring MVC 中，对于 Controller 的配置方式有很多种

### 基本使用

\com\example\controller

```Java
@Controller
// 如增加到此处则此类下的所有路径都有此父路径( \父路径\路径 )
// @RequestMapping("/父路径")
public class 控制器名 {
    // 返回字符串
    @RequestMapping("/路径")
    @ResponseBody
    public String 方法名(){
        return "字符串";
    }

    // 返回jsp页面
    @RequestMapping("/路径")
    public String 方法名(Model model){
        // 声明Model类型的参数，将Action中的数据带到视图中
        model.addAttribute("参数名", 值);
        return "jsp页面名";
    }
}
```

::: tip 提示
`@Controller` 是为了让 Spring IOC 容器初始化时自动扫描到；
`@RequestMapping` 是为了映射请求路径，这里因为类与方法上都有映射所以访问时应该是/HelloController/hello；
:::
