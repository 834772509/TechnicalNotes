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
SpringMVC 发、的本质依然是 Servlelt
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

```xml
<!-- SpringMVC -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.1.9.RELEASE</version>
</dependency>
```
