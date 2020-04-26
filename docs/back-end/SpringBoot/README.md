# SpringBoot 笔记

## 配置文件

SpringBoot使用一个全局的配置文件，配置文件名```application```是固定的；

* application.properties
* application.yml

配置文件的作用：修改SpringBoot自动配置的默认值；SpringBoot在底层都给我们自动配置好

### YAML

以```数据```为中心，比json、xml等更适合做配置文件

位置：```\application.yml```

#### 语法

##### 对象、Map（属性和值）：

`k: v`在下一行来写对象的属性和值的关系；注意缩进

1. ```yaml
   person:
     name: 张三
     gender: 男
     age: 22
   ```

2. 行内写法

   ```yaml
   person: {name: 张三,gender: 男,age: 22}
   ```


##### 数组（List、Set）

1. ```
   fruits: 
     - 苹果
     - 桃子
     - 香蕉
   ```

2. 行内写法

   ```
   fruits: [苹果,桃子,香蕉]
   ```

### 配置文件值注入两种方式对比

配置文件值注入有两种方式，一个是Spring Boot的`@ConfigurationProperties`注解，另一个是spring原先的`@value`注解

|                      | @ConfigurationProperties | @Value     |
| -------------------- | ------------------------ | ---------- |
| 功能                 | 批量注入配置文件中的属性 | 一个个指定 |
| 松散绑定（松散语法） | 支持                     | 不支持     |
| SpEL                 | 不支持                   | 支持       |
| JSR303数据校验       | 支持                     | 不支持     |
| 复杂类型封装         | 支持                     | 不支持     |

**松散绑定**：例如Person中有`lastName`属性，在配置文件中可以写成

`lastName`或`lastname`或`last-name`或`last_name`等等



## 模版引擎 thymeleaf

### 导入

\pom.xml

``` xml
<dependency>
   <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```
### 使用

\src\main\resources\templates\页面名称.html

``` html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<h1>参数：<span th:text="${参数名}"></span></h1>

</body>
</html>
```

``` Java
@Controller
public class HelloController {
   //普通使用：
    @RequestMapping("/XXX")
    public String XXX(){
        return  "页面名称";
    }
    //传参：
    @RequestMapping("/XXX")
    public String XXX(Map<String,Object> map){
       map.put("参数名","参数值");
       return  "页面名称";
    }
}
```

## 错误页面配置

### 模板引擎

创建：  
```\main\resources\templates\error\404.html```
```\main\resources\templates\error\4xx.html```

``` HTML
<h1>状态码：[[${status}]]</h1>
<h1>时间：[[${timestamp}]]</h1>
```

### 自定义Json异常

**在所有路由中出现的错误都会被这里接管**

无自适应（纯Json）：

``` Java
@ControllerAdvice
public class Error {
    @ResponseBody
    @ExceptionHandler(Exception.class)
    public Map<String, Object> handleException(Exception e) {
        Map<String, Object> map = new HashMap(2);
        map.put("code", "100011");
        map.put("message", e.getMessage());
        return map;
    }
}
```

自适应（浏览器显示页面，其他客户端显示Json）：

``` Java
@ControllerAdvice
public class Error {
    @ExceptionHandler(Exception.class)
    public String handleException(Exception e, HttpServletRequest request) {
        Map<String, Object> map = new HashMap(2);
        map.put("name", "hello");
        map.put("password", "123456");

        //设置状态码
        request.setAttribute("javax.servlet.error.status_code", 500);

        //把数据放到request域中
        request.setAttribute("ext", map);
        return "forward:/error";
    }
}
```

## Servlet

### 创建

``` Java
public class MyServlet  extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("Hello MyServlet");
    }
}
```

### 注册

\MyServerConfig.java

``` Java
@Configuration
public class MyServerConfig {
    @Bean
    public ServletRegistrationBean myServlet(){
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(new MyServlet());
        return registrationBean;
    }
}
```
