# Gson

Gson 是目前功能最全的 Json 解析神器，Gson 当初是为因应 Google 公司内部需求而由 Google 自行研发而来，但自从在 2008 年五月公开发布第一版后已被许多公司或用户应用。

Gson 在功能上面无可挑剔，但是性能上面比 FastJson 有所差距。

## 导入依赖

\pom.xml

```xml
<!-- https://mvnrepository.com/artifact/com.google.code.gson/gson -->
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.6</version>
</dependency>
```

## 解决乱码

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

## 转 json

```Java
Gson gson = new Gson();
String json = gson.toJson(对象);
```

## 转对象

```Java
Gson gson = new Gson();
String json = "{\"id\":\"2\",\"name\":\"Json技术\"}";
Book book = gson.fromJson(json, Book.class);
```