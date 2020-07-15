# Lombok

Lombok 是一个Java库，作用是：通过注解的方式，自动生成getter和setter方法，减少代码的臃肿

## 安装插件

Idea: Lombok

::: warning 注意
如Idea没有安装Lombok插件则没有效果
:::

## 依赖

\pom.xml

``` xml
<!--Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

## 使用

``` Java
// get、set、toString、hashcode、equals
@Data
// 有参构造方法
@AllArgsConstructor
// 无参构造方法
@NoArgsConstructor
public class 类名 {
    private 数据类型 属性;
    private 数据类型 属性;
}
```

## 常用注解

* @NonNull : 用在方法参数前，会自动对该参数进行非空校验,为空抛出NPE (NullPointerException)
* @Cleanup : 自动管理资源，用在局部变量之前，在当前变量范围内即将执行完毕退出前会清理资源，生成try-finally的代码关闭流
* @Getter/@Setter : 用在属性上,不用自己手写setter和getter方法，还可指定访问范围
* @ToString : 用在类上，可以自动覆写toString方法
* @EqualsAndHashCode : 用在类上，自动生成equals方法和hashCode方法
* @NoArgsConstructor, @RequiredArgsConstructor and @AllArgsConstructor : 用在类上,自动生成无参构造和使用所有参数的有参构造函数。
* @Data : 用在类上,相当于同时使用了@ToString、@EqualsAndHashCode、 @Getter、@Setter 和 @RequiredArgsConstrutor这些注解， 对pojo类十分有用
* @Value : 用在类上，是@Data的不可变形式，相当于为属性添加final声明，只提供getter方法，而不提供setter方法
* @SneakyThrows : 自动抛受检异常,而无需显式在方法上使用throws语句
* @Synchronized : 用在方法上,将方法声明为同步的，并自动加锁
* @Getter(azy=true ): 可以替代经典的Double Check Lock样板代码

