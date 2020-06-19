# SpringBoot 笔记

## 创建项目

### 创建

IDEA-新建项目-Spring Initializr  

包名：com.example  

Web-Spring Web : 基础Web服务
Developer Tools - Spring Boot DevTools : 调试工具

### 配置

新建包

* 新建\com\包名\controller : 控制器
* 新建\com\包名\dao : 数据访问
* 新建\com\包名\pojo : 对象
* 新建\com\包名\service

## 配置文件

SpringBoot使用一个全局的配置文件，配置文件名```application```是固定的；

* application.properties
* application.yml

配置文件的作用：
* 修改SpringBoot自动配置的默认值
* SpringBoot在底层都给我们自动配置好

### 配置文件优先级

从高到低：

1. 项目路径下的config文件夹配置文件
2. 项目路径下配置文件
3. 资源路径下的config文件夹配置文件
4. 资源路径下配置文件


### 多环境配置文件

``` yaml
# 选择当前配置
spring:
  profiles:
    active: dev
---
server:
  port: 8000
# 设置当前配置名
spring:
  profiles: dev
---
server:
  port: 8080
# 设置当前配置名
spring:
  profiles: test

```

## YAML

以```数据```为中心，比json、xml等更适合做配置文件

删除```\src\main\resources\application.properties```
新建```\src\main\resources\application.yml```

### 键值对

``` yaml
键: 值
```

### 对象

`键: 值`在下一行来写对象的属性和值的关系；注意缩进

``` yaml
对象名:
    属性名: 值
    属性名: 值
对象名: {属性名: 值,属性名: 值}
```


### 数组

``` yaml
数组名: 
     - 值
     - 值
数组名: [值,值]
```

### 注入配置文件

将yaml中的数据注入到代码中，一般用于配置类，如数据库信息等

``` Java
@Component
@ConfigurationProperties(prefix = "对象名")
public class 类名 {
    private  数据类型 属性名;
    private 数据类型 属性名;
}
```

``` yaml
对象名:
  属性名: 值
  属性名: 值
```

解决报红：  

在 \pom.xml 内加入以下依赖

``` xml
<!-- 解决注入配置文件报错 -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-configuration-processor</artifactId>
	<optional>true</optional>
</dependency>
```

### JSR303 数据校验

用来检验数据是否符合指定规格

``` Java
@Validated
public class 类名 {
    @Email(message = "邮箱格式错误")
    private  String email;
}
```

解决报红：  

在 \pom.xml 内加入以下依赖

``` xml
<!-- 解决JSR303报错 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

空检查：

* @Null : 验证对象是否为null
* @NotNull : 验证对象是否不为null，无法检测长度为0的字符串
* @NotBlank : 检测字符串是不是Null和被Trim的长度是否大于0，只对字符串，且会去掉前后空格
* @NotEmpty : 检查约束元素是否为NULL或者是EMPTY

Booelan 检查：

* @AssertTrue : 验证 Booelan 对象是否为True
* @AssertFalse : 验证 Booelan 对象是否为False

长度检查：

* @Size(min=,max=) : 验证对象长度是否在指定范围内
* @Length(min=,max=)

日期检查：

* @Past : 验证 Date 和 Calendar 对象是否在当前时间之前
* @Future : 验证 Date 和 Calendar 对象是否在当前时间之后
* @Pattern : 验证 String 对象是否符合正则表达式规则

## 自定义配置

新建``\java\com\包名\config``目录

### 创建

新建``\java\com\包名\config\配置名.java``文件

``` Java
@Configuration
public class 配置名 implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index.html").setViewName("index");
        registry.addViewController("/main.html").setViewName("dashboard");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginHanderInterceptor()).addPathPatterns("/**").excludePathPatterns("/index.html","/","/user/login","/static/**");
    }
}
```

## 控制器

新建``\java\com\包名\controller``目录

### 创建

新建``\java\com\包名\controller\控制器名.java``文件

``` Java
@Controller
@ResponseBody
public class 控制器名 {
    // 常规请求
    @RequestMapping("/路径")
    public String 方法名(){
        return "Hello World";
    }

    // Get请求
    @GetMapping("/路径")
    public String 方法名() {
        return "Hello World";
    }

    //Post请求
    @PostMapping("/路径")
    public String 方法名() {
        return "Hello World";
    }
}
```

### 传参

``` Java
@RequestMapping("/路径/{参数名}")
public String 方法名(@PathVariable("参数名") String 参数名) {
    return 参数名;
}
```

### 注解

* @Controller : 可以返回视图页面
* @ResponseBody : 将 Controller 的方法返回的对象，通过 springmvc 提供的HttpMessageConverter接口转换为指定格式的数据如：json,xml 等，通过 Response 响应给客户端
* @RestController : 相当于 @Controller + @ResponseBody，只能返回 json 数据，无法返回 jsp 、 html 视图页面
* @

## 静态资源

### 优先级

如不存在目录可新建

1. \src\main\resources\resources
2. \src\main\resources\static （默认）
3. \src\main\resources\public

### 首页

默认首页为资源目录下的``index.html`

## thymeleaf 模版引擎

模板弓|擎的作用是我们来写一个页面模板， 比如有些值是动态的，我们写一些表达式。
而这些值，从哪来呢，我们来组装一些数据， 把这些数据找到。然后把这个模板和这个数
据交给我们模板引擎，模板引|擎按照我们这个数据帮你把这表达式解析、填充到我们指定的位
置，然后把这个数据最终生成一个我们想要的内容给我们写出去， 这就是模板引擎

### 导入

\pom.xml

``` xml
<dependency>
   <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

### 关闭模板引擎缓存

\src\main\resources\application.yml

``` yaml
# 关闭模版引擎缓存
spring:
  thymeleaf:
    cache: false
```

### 使用

``` Java
//templates目录下页面只能通过 controller 跳转
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

\src\main\resources\templates\页面名称.html

``` html
<!DOCTYPE html>
<!-- 增加命名空间，代码提示 -->
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

### 遍历数据

``` Java
@Controller
public class IndexController {
    //在templates目录下的所有页面，只能通过controller 跳转
    @RequestMapping("/test")
    public String test(Model model){
        model.addAttribute("数组名", Arrays.asList("值1","值2"));
        return "test";
    }
}
```

``` html
<p th:each="item : ${数组名}}" th:text="${item}"></p>
```

### 三元运算符

``` html
<p th:text="${变量 == 值 ? '真' : '假'}"></p>
```

### 格式化时间

``` html
<p th:text="${#dates.format(时间,'yyyy-MM-dd HH:mm')}"></p>
```

### 自定义错误

创建：  
```\main\resources\templates\error\404.html```
```\main\resources\templates\error\4xx.html```

``` HTML
<h1>状态码：[[${status}]]</h1>
<h1>时间：[[${timestamp}]]</h1>
```

## Lombok

Lombok 的作用是：通过注解的方式，自动生成getter和setter方法，减少代码的臃肿

### 安装插件

Lombok

### 导入

\pom.xml

``` xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

### 使用

``` Java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class 类名 {
    private 数据类型 属性;
    private 数据类型 属性;
}
```

## 拦截器

创建 ``com\example\config\拦截器名.java``

``` Java
public class 拦截器名 implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object loginUser = request.getSession().getAttribute("Session名");
        if (loginUser == null){
            //没有登录
            request.setAttribute("msg", "没有权限，请登录");
            request.getRequestDispatcher("/index.html").forward(request,response);
            return false;
        }else {
            return true;
        }

    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
```

## 错误页面配置

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


## MyBatis

### 依赖

``` xml
<!-- MyBatis -->
<dependency>
 <groupId>org.mybatis.spring.boot</groupId>
 <artifactId>mybatis-spring-boot-starter</artifactId>
 <version>2.1.2</version>
</dependency>
```

### 注解版（不推荐）

``` Java
//指定这是一个操作数据库的mapper
@Mapper
public interface DepartmentMapper {

    //查询数据

    @Select("select * from 表名")
    public List<Department> 方法名();

    @Select("select * from 表名 where 字段名=#{字段值}")
    public Department 方法名(Integer 字段值);

    //插入数据
    @Options(useGeneratedKeys = true, keyProperty = "id")
    @Insert("insert into 表名(字段名) values(#{departmentName})")
    public int 方法名(Department department);

    //修改数据
    @Update("update 表名 set 字段名=#{departmentName}")
    public int 方法名(Department department);

    //删除数据
    @Delete("delete from 表名 where id =#{id}")
    public int 方法名(Integer id);
}
```

使用

``` Java
@RequestMapping("/地址")
public Department 地址 () {
    departmentMapper.方法名();
    return department;
}

@RequestMapping("/地址")
public Department 地址 (Department department) {
    departmentMapper.方法名(department);
    return department;
}
```
