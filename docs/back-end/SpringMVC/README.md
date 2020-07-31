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

IDEA-创建 Maven 项目

### 导入依赖

\pom.xml

```xml
<!-- Spring Web https://mvnrepository.com/artifact/org.springframework/spring-web -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>5.2.8.RELEASE</version>
</dependency>

<!--SpringMVC https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.2.8.RELEASE</version>
</dependency>

<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>

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

## 控制器 Controller

控制器复杂提供访问应用程序的行为，通常通过接口定义或注解定义两种方法实现。

- 控制器负责解析用户的请求并将其转换为一个模型。
- 在 Spring MVC 中一个控制器类可以包含多个方法
- 在 Spring MVC 中，对于 Controller 的配置方式有很多种

### 基本使用

::: tip 提示
`@Controller` 是为了让 Spring IOC 容器初始化时自动扫描到；
`@RequestMapping` 是为了映射请求路径，这里因为类与方法上都有映射所以访问时应该是/HelloController/hello；
:::

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

    // 指定请求类型
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public String 方法名() {
        return "";
    }

    // GET方式请求数据
    @GetMapping
    public String 方法名() {
        return "";
    }

    // Pos方式请求数据
    @PostMapping
    public String 方法名() {
        return "";
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

### 传参

::: tip 提示
可以接收实体类参数
:::

```Java
@Controller
public class 控制器名 {
    @RequestMapping("/路径")
    @ResponseBody
    public String 方法名(参数类型 参数名) {
        return "";
    }

    @RequestMapping("/路径")
    @ResponseBody
    public String 方法名(@RequestParam("参数名") 参数类型 参数名) {
        return "";
    }
}
```

访问：`/路径?参数名=值`

```Java
public class 控制器名 {
    @RequestMapping("/路径/{参数名}/{参数名}")
    @ResponseBody
    public String 方法名(@RequestParam("参数名") 参数类型 参数名, @RequestParam 参数类型 参数名) {
        return "";
    }
}
```

访问：`/路径/值/值`

### Restful 风格

Restful 就是一个资源定位及资源操作的风格。不是标准也不是协议，只是一种风格。基于这个风格设计的软件可以更简洁，更有层次，更易于实现缓存等机制。

```Java
public class 控制器名 {
    // GET方式请求数据
    @GetMapping
    public String 方法名() {
        return "";
    }

    // Pos方式请求数据
    @PostMapping
    public String 方法名() {
        return "";
    }

    // Put方式请求数据
    @PutMapping
    public String 方法名() {
        return "";
    }

    // Delete方式请求数据
    @DeleteMapping
    public String 方法名() {
        return "";
    }

    // Patch方式请求数据
    @PatchMapping
    public String 方法名() {
        return "";
    }
}
```

## 解决乱码

\web\WEB-INF\web.xml

```xml
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
```

## Gson

Gson 是目前功能最全的 Json 解析神器，Gson 当初是为因应 Google 公司内部需求而由 Google 自行研发而来，但自从在 2008 年五月公开发布第一版后已被许多公司或用户应用。

Gson 在功能上面无可挑剔，但是性能上面比 FastJson 有所差距。

### 导入依赖

\pom.xml

```xml
<!-- https://mvnrepository.com/artifact/com.google.code.gson/gson -->
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.6</version>
</dependency>
```

### 解决乱码

\resources\springmvc-servlet.xml

``` xml
<!--修复Gson乱码-->
<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <constructor-arg value="UTF-8"/>
        </bean>
        <bean id="jsonConverter" class="org.springframework.http.converter.json.GsonHttpMessageConverter">
            <property name="supportedMediaTypes">
                <list>
                    <value>text/json;charset=UTF-8</value>
                    <value>application/json;charset=UTF-8</value>
                </list>
            </property>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

### 转 json

```Java
Gson gson = new Gson();
String json = gson.toJson(对象);
```

### 转对象

```Java
Gson gson = new Gson();
String json = "{\"id\":\"2\",\"name\":\"Json技术\"}";
Book book = gson.fromJson(json, Book.class);
```

## Fastjson

Fastjson 是一个 Java 语言编写的高性能的 JSON 处理器, 由阿里巴巴公司开发。无依赖，不需要例外额外的 jar，能够直接跑在 JDK 上。
FastJson 采用独创的算法，将 parse 的速度提升到极致，超过所有 json 库。
FastJson 在复杂类型的 Bean 转换 Json 上会出现一些问题，可能会出现引用的类型，导致 Json 转换出错，需要制定引用。有的版本存在高危漏洞，不建议生产使用

### 导入依赖

``` xml
<!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.73</version>
</dependency>
```

### 转 json

```Java
JSON.toJSONString(obj);

// 将对象转换成格式化的 json
JSON.toJSONString(obj,true);
```

### 转对象

```Java
String json = "{\"id\":\"2\",\"name\":\"Json技术\"}";
实体类 对象 = JSON.parseObject(json, 实体类.class);
```
