# Spring

Spring是一个轻量级的控制反转（ IOC）和面向切片编程（AOP）的框架

## 基本概念

### SSH

Struct2 + Spring + Hibernate

### SSM

SpringMVC + Sping + Mybatis

### 优点

* Spring是一个开源的免费的框架（容器）
* Spring是一个轻量级的、 非入侵式的框架
* 控制反转（IOC），面向切面编程(AOP) 
* 支持事务的处理，对框架整合的支持

### IOC 理论推导

在我们之前的业务中，用户的需求可能会影响我们原来的代码，我们需要根据用户的需求去修改原代码!如果程序代码量十分大，修改一次的成本代价十分昂贵。  
使用了set注入后，程序不再具有主动性，而是变成了被动的接受对象。  
这种思想，从本质上解决了问题，我们程序猿不用再去管理对象的创建了。系统的耦合性大大降低，可以更加专注的在业务的实现上。这是IOC的原型  
 
控制反转是一种通过描述（XML或注解）并通过第三方去生产或获取特定对象的方式。在Spring中实现控制反转的是IOC容器，其实现方法是依赖注入(Dependency Injection DI)

## Bean

### 自动装配

\resources\applicationContext.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">

    <!--指定要扫描的包，这个包下的注解就会生效-->
    <context:component-scan base-package="com.包名"></context:component-scan>

    <!--开启注解支持-->
    <context:annotation-config/>

</beans>
```

``` java
public class 类名 {
  // 一般装配
  @Autowired
  private 自动装配类名 属性名;

  // 对象可以为null
  @Autowired(required = false)
  private 自动装配类名 属性名;

  // 指定Bean对象
  @Autowired()
  @Qualifier(value = "BeanID")
  private 自动装配类名 属性名; 
  
  // 设置值
  @Value(值)
  private 数据类型 属性名; 
  
  @Value(值) 
  public void 方法名(数据类型 变量) {
    this.变量 = 变量; 
  }
}
```

::: tip 提示
``@Autowired``是根据类型进行确定Bean对象，当类型不唯一（重复）时，根据BeanID寻找Bean对象
:::

``` Java
ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
类名 实例化名 = context.getBean("BeanID");
实例化名.方法名();
```

### Java类装配

\config\配置类名.java

``` Java
@Configuration
public class MyConfig {
    //注册一个bean
    @Bean
    public Bean类名 方法名(){
        return new Bean类名();
    }
}
```

``` Java
@Component
public class User {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{" + "name='" + name + '\'' + '}';
    }
}
```

``` Java
ApplicationContext context = new AnnotationConfigApplicationContext(配置类名.class);
Bean类名 方法名 = context.getBean("方法名");
System.out.println(方法名.toString());
```

### 手动装配

\resources\applicationContext.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

  <!-- 导入其他配置文件 -->
  <import resource="文件名.xml"></import>

  <!-- 
    id : bean 的唯一标识符，也就是相当于我们学的对象名 
    class : bean 对象所对应的全限定名：包名+类型 
    name : 也是别名，而且name可以同时取多个别名
   -->


  <!-- 无参构造注入  -->
  <bean id="BeanID" class="类路径">
    <property name="属性" value="值"></property>
  </bean>

  <!-- Bean注入（ref） -->
  <bean id="BeanID" class="类路径">
    <property name="属性" ref="引用Spring容器创建好的对象"></property>
  </bean>

  <!-- 有参构造注入  -->
  <bean id="BeanID" class="类路径">
    <constructor-arg name="属性" value="值"></constructor-arg>
  </bean>

  <!-- 配置别名 -->
  <bean id="BeanID" class="类路径" name="别名"> </bean>
  <bean id="BeanID" class="类路径" name="别名1,别名2"> </bean>

</beans>
```

使用：

``` Java
ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
类名 实例化名 = context.getBean("BeanID");
实例化名.方法名();
```

## 使用注解开发

### 注解

这四个注解功能都是一样的，都是代表将某个类注册到Spring中，装配Bean

* @Component : pojo
* @Repository : dao
* @Controller : controller
* @Service : service

## AOP

### 代理模式

代理模式的分类：

* 静态代理
* 动态代理
