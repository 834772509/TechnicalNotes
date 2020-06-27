# Lombok

Lombok 的作用是：通过注解的方式，自动生成getter和setter方法，减少代码的臃肿

### 安装插件

Lombok

### 导入

\pom.xml

``` xml
<!--Lombok -->
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
