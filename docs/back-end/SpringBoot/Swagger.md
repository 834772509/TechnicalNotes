# Swagger

[Swagger](https://swagger.io) 号称世界上最流行的API框架，RestFul API 文档在线自动生成工具，支持多种语言

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

``` Java
@Configuration
//开启Swagger2
@EnableSwagger2
public class SwaggerConfig {

}
```

## 使用

访问 http://127.0.0.1:8080/swagger-ui.html
