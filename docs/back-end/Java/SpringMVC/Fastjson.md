
# Fastjson

Fastjson 是一个 Java 语言编写的高性能的 JSON 处理器, 由阿里巴巴公司开发。无依赖，不需要例外额外的 jar，能够直接跑在 JDK 上。
FastJson 采用独创的算法，将 parse 的速度提升到极致，超过所有 json 库。
FastJson 在复杂类型的 Bean 转换 Json 上会出现一些问题，可能会出现引用的类型，导致 Json 转换出错，需要制定引用。有的版本存在高危漏洞，不建议生产使用

## 导入依赖

``` xml
<!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.73</version>
</dependency>
```

## 转 json

```Java
JSON.toJSONString(obj);

// 将对象转换成格式化的 json
JSON.toJSONString(obj,true);
```

## 转对象

```Java
String json = "{\"id\":\"2\",\"name\":\"Json技术\"}";
实体类 对象 = JSON.parseObject(json, 实体类.class);
```