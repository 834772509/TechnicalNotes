# Swagger

[Swagger](https://swagger.io) 号称世界上最流行的API框架，RestFul API 文档在线自动生成工具，支持多种语言。

::: tip 提示
在正式发布时，出于安全考虑，请**关闭Swagger**
:::

## 依赖

pom.xml

``` xml
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
<dependency>
   <groupId>io.springfox</groupId>
   <artifactId>springfox-swagger2</artifactId>
   <version>2.6.1</version>
</dependency>

<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
   <groupId>io.springfox</groupId>
   <artifactId>springfox-swagger-ui</artifactId>
   <version>2.6.1</version>
</dependency>
```

## 配置

\com\example\config\SwaggerConfig.java

* 简单配置

``` Java
@Configuration
//开启Swagger2
@EnableSwagger2
public class SwaggerConfig {

}
```

* 高级配置

``` Java
@Configuration
//开启Swagger2
@EnableSwagger2
public class SwaggerConfig {

    // 自定义分组
    @Bean
    public Docket docket1() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("分组1");
    }

    //配置Swagger的Docket的bean实例
    @Bean
    public Docket docket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                //是否启动Swagger
                .enable(true)
                .select()
                /*
                RequestHandlerSelectors 配置要扫描接口的方式

                basePackage : 指定要扫描的包
                any() : 扫描全部
                none() : 不扫描

                withClassAnnotation : 扫描类上的注解
                withMethodAnnotation : 扫描方法上的注解
                 */
                // .apis(RequestHandlerSelectors.basePackage("com.example.controller"))
                // 过滤请求
                // .paths(PathSelectors.ant("/example/**"))
                .build();
    }

    private ApiInfo apiInfo() {
        //作者信息
        Contact contact = new Contact("联系人名", "联系人链接", "联系人链接邮箱");
        return new ApiInfo(
                "API 文档标题",
                "描述",
                "v1.0",
                "组织链接",
                contact,
                "Apach 2.0 许可",
                "http://www.apache.org/licenses/LICENSE-2.0"
        );
    }
}
```

## 常用注解

### 控制器方法说明

作用在模块类上

``` Java
@Api(tags = "控制器说明")
@RestController
public class 控制器类名 {

}
```

### 接口方法说明

作用在接口方法上

``` Java
@ApiOperation("方法说明")
@RequestMapping("/路径")
public String 方法名() {
   return "Hello World";
}
```

### 接口方法参数说明

作用在参数、方法和字段上

``` Java
@RequestMapping("/路径")
public String 方法名(@ApiParam("参数说明") 参数类型 参数){
   return "参数：" + 参数;
}
```

### 实体类说明

作用在类方法和属性上，hidden 设置为 true 可以隐藏该属性

``` Java
@ApiModel("实体名")
public class User {
   @ApiModelProperty("属性说明")
   public 数据类型 属性;
   @ApiModelProperty("属性说明")
   public 数据类型 属性;
}
```

## 汉化

新建 \src\main\resources\META-INF\resources\swagger-ui.html

``` HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="icon" type="image/png" href="webjars/springfox-swagger-ui/images/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="webjars/springfox-swagger-ui/images/favicon-16x16.png" sizes="16x16" />
    <link href='webjars/springfox-swagger-ui/css/typography.css' media='screen' rel='stylesheet' type='text/css' />
    <link href='webjars/springfox-swagger-ui/css/reset.css' media='screen' rel='stylesheet' type='text/css' />
    <link href='webjars/springfox-swagger-ui/css/screen.css' media='screen' rel='stylesheet' type='text/css' />
    <link href='webjars/springfox-swagger-ui/css/reset.css' media='print' rel='stylesheet' type='text/css' />
    <link href='webjars/springfox-swagger-ui/css/print.css' media='print' rel='stylesheet' type='text/css' />

    <script src='webjars/springfox-swagger-ui/lib/object-assign-pollyfill.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/jquery-1.8.0.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/jquery.slideto.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/jquery.wiggle.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/jquery.ba-bbq.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/handlebars-4.0.5.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/lodash.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/backbone-min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/swagger-ui.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/highlight.9.1.0.pack.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/highlight.9.1.0.pack_extended.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/jsoneditor.min.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/marked.js' type='text/javascript'></script>
    <script src='webjars/springfox-swagger-ui/lib/swagger-oauth.js' type='text/javascript'></script>

    <script src='webjars/springfox-swagger-ui/springfox.js' type='text/javascript'></script>
    <!-- 加入国际化的js -->
    <script src="webjars/springfox-swagger-ui/lang/translator.js" type="text/javascript"></script>
    <script src="webjars/springfox-swagger-ui/lang/zh-cn.js" type="text/javascript"></script>
</head>

<body class="swagger-section">
    <div id='header'>
        <div class="swagger-ui-wrap">
            <a id="logo" href="http://swagger.io"><img class="logo__img" alt="swagger" height="30" width="30" src="webjars/springfox-swagger-ui/images/logo_small.png" /><span class="logo__title">swagger</span></a>
            <form id='api_selector'>
                <div class='input'>
                    <select id="select_baseUrl" name="select_baseUrl" />
                </div>
                <div class='input'><input placeholder="http://example.com/api" id="input_baseUrl" name="baseUrl" type="text" /></div>
                <div id='auth_container'></div>
                <div class='input'><a id="explore" class="header__btn" href="#" data-sw-translate>Explore</a></div>
            </form>
        </div>
    </div>

    <div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>
    <div id="swagger-ui-container" class="swagger-ui-wrap"></div>
</body>

</html>
```

## 使用

访问 (http://127.0.0.1:8080/swagger-ui.html)
