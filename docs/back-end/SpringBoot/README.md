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