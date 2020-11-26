# SpringMVC

Spring MVC 是 Spring Framework 的一部分，是基于 Java 实现 MVC 的轻量级 Web 框架。

::: tip 提示
如项目无法加入 Controller 层，请检查：

- 项目结构-构件-lib 目录 是否导入正确的依赖
- 项目结构-模块-依赖 是否正确导入 Tomcat

:::

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

## 拦截器

### 过滤器于拦截器的区别

- 过滤器

  servlet 规范中的一部分,任何 JavaWeb，工程都可以使用
  在 url-pattern 中配置了/\*之后，可以对所有要访问的资源进行拦截

- 拦截器

  拦截器是 Spring MVC 框架本身的内容，只有使用了 SpringMVC 框架的工程才能使用
  拦截器只会拦截访问的控制器方法，如果访问的是 jsp/html/css/image/js 不会进行拦截

### 定义拦截器

::: tip 提示
判断条件后 `return true;` 即为放行
:::

\com\example\config\拦截器名.java

```Java
public class 拦截器名 implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("====== 拦截 ======");
        //是否执行下一个拦截器
        return true;
    }
}
```

### 配置拦截器

\src\main\resources\springmvc-servlet.xml

```xml
<!--拦截器配置-->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/拦截路径/**"/>
        <bean class="com.example.config.拦截器名"/>
    </mvc:interceptor>
</mvc:interceptors>
```

## 文件上传

### 导入依赖

\pom.xml

```xml
<!--文件上传-->
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.3.2</version>
</dependency>
```

### 配置文件上传

\resources\springmvc-servlet.xml

```xml
<!--文件上传配置-->
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <!-- 请求的编码格式，必须和jSP的pageEncoding属性一致，以便正确读取表单的内容，默认为ISO-8859-1 -->
    <property name="defaultEncoding" value="utf-8"/>
    <!-- 上传文件大小上限，单位为字节（10485760=10M） -->
    <property name="maxUploadSize" value="10485760"/>
    <property name="maxInMemorySize" value="40960"/>
</bean>
```

### Controller

\com\example\controller 名.java

```java
@Controller
public class Controller名 {

    @RequestMapping("/路径")
    @ResponseBody
    public String fileUpload(@RequestParam("file") CommonsMultipartFile file, HttpServletRequest request) throws IOException {

        //上传路径保存设置
        String path = request.getServletContext().getRealPath("/upload");
        File realPath = new File(path);
        if (!realPath.exists()) {
            realPath.mkdir();
        }

        //上传文件地址
        System.out.println("上传文件保存地址：" + realPath);

        //通过CommonsMultipartFile的方法直接写文件（注意这个时候）
        file.transferTo(new File(realPath + "/" + file.getOriginalFilename()));

        return "OK";
    }
}
```

### 网页上传

```html
<form action="/upload" enctype="multipart/form-data" method="post">
  <input type="file" name="file" />
  <input type="submit" value="upload" />
</form>
```

## 文件下载

### Controller

```java
@Controller
public class FileController {

    @RequestMapping("/路径")
    public String downloads(@RequestParam("fileName") String fileName, HttpServletResponse response, HttpServletRequest request) throws Exception {
        System.out.println(fileName);

        // 要下载的文件路径
        String path = request.getServletContext().getRealPath("/upload");

        // 设置response 响应头
        response.reset(); //设置页面不缓存,清空buffer
        response.setCharacterEncoding("UTF-8"); //字符编码
        response.setContentType("multipart/form-data"); //二进制传输数据
        // 设置响应头
        response.setHeader("Content-Disposition","attachment;fileName=" + URLEncoder.encode(fileName, "UTF-8"));

        File file = new File(path, fileName);

        // 读取文件--输入流
        InputStream input = new FileInputStream(file);

        // 写出文件--输出流
        OutputStream out = response.getOutputStream();
        byte[] buff = new byte[1024];
        int index = 0;

        // 写出操作
        while ((index = input.read(buff)) != -1) {
            out.write(buff, 0, index);
            out.flush();
        }

        out.close();
        input.close();
        return null;
    }
}
```

### 使用

访问`127.0.0.1:8080/路径/文件名`
