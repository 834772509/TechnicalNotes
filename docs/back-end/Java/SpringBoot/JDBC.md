# 整合 JDBC

JDBC 是Java操作数据库的底层，所有Java数据库框架都要经过JDBC

## 依赖

创建项目勾选：JDBC API、MySQL Driver

``` xml
<!-- jdbc依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
<scope>runtime</scope>
```

## 配置

application.yml

``` yaml
spring:
  datasource:
    username: root
    password: '数据库密码'
    url: jdbc:mysql://127.0.0.1:3306/数据库名?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8
    driver-class-name: com.mysql.cj.jdbc.Driver
    # 自动执行SQL语句，resources\sql
    schema:
      - classpath:sql/XXX.sql
      - classpath:sql/XXX.sql
    initialization-mode: always
```

::: tip 提示
MySQL 8.0 以上必须要设置时区serverTimezone
:::

### 连接测试

``` Java
@Autowired
DataSource dataSource;

Connection connection = dataSource.getConnection();
System.out.println(connection);
```

## 查询数据

``` Java
@RequestMapping("/路径")
public List<Map<String, Object>> 方法名() {
    String sql = "select * from 表名";
    List<Map<String, Object>> list_maps = jdbcTemplate.queryForList(sql);
    return list_maps;
}
```

## 增加数据

``` Java
@RequestMapping("/路径")
public String 方法名() {
    String sql = "insert into 表名 (字段名,字段名) value (值,值)";
    jdbcTemplate.update(sql);
    return "数据插入成功";
}
```

## 修改数据

``` Java
@RequestMapping("/路径/{参数名}")
public String 方法名(@PathVariable("id") String id) {
    String sql = "update 表名 set 字段名=?,字段名=? where 字段名=" + 参数名;
    Object[] objects = new Object[2];
    objects[0] = "值";
    objects[1] = "值";
    jdbcTemplate.update(sql,objects);
    return "数据修改成功";
}
```

## 删除数据

``` Java
@RequestMapping("/路径/{参数名}")
public String deleteUser(@PathVariable("参数名") int 参数名) {
    String sql = "delete from 表名 where 参数名=?";
    jdbcTemplate.update(sql,id);
    return "数据删除成功";
}
```
