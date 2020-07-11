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

AOP (Aspect Oriented Programming)意为：面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。  
AOP是0OP的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。  
利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合 度降低，提高程序的可重用性，同时提高了开发的效率。


* 横切关注点 : 跨越应用程序多个模块的方法或功能。即：与我们业务逻辑无关的，但是我们需要关注的部分，就是横切关注点。如日志,安全,缓存,事务等等.....
* 切面 (ASPECT) : 横切关注点被模块化的特殊对象。即，它是一个类
* 通知 (Advice) : 切面必须要完成的工作。即，它是类中的一一个方法
* 目标 (Target) : 被通知对象
* 代理( Proxy) : 向目标对象应用通知之后创建的对象
* 切入点 (PointCut) : 切面通知执行的“地点”的定义
* 连接点 (JointPoint) : 与切入点匹配的执行点。


### 代理模式

* 静态代理

  代理模式的好处：
  - 可以使真实角色的操作更加纯粹，不用去关注一些公共的业务
  - 公共也就就交给代理角色，实现了业务的分工
  - 公共业务发生扩展的时候，方便集中管理

  缺点:
  - 一个真实角色就会产生一个代理角色，代码量会翻倍，开发效率会变低。

* 动态代理

  动态代理的好处: .

  - 可以使真实角色的操作更加纯粹，不用去关注一 些公共的业务
  - 公共也就就交给代理角色，实现了业务的分工
  - 公共业务发生扩展的时候，方便集中管理
  - 一个动态代理类代理的是一个接口，一般就是对应的一类业务
  - 一个动态代理类可以代理多个类，只要是实现了同一个接口即可

### 注解实现AOP

\resources\applicationContext.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--注册bean-->
    <bean id="userService" class="com.kuang.service.UserService"></bean>
    <bean id="log" class="com.kuang.log.log"></bean>
    <bean id="afterLog" class="com.kuang.log.AfterLog"></bean>

    <bean id="annotationPointCut" class="com.kuang.diy.AnnotationPointCut"></bean>
    <!--开启注解支持-->
    <aop:aspectj-autoproxy></aop:aspectj-autoproxy>

    <!--开启注解支持-->
    <context:annotation-config/>

</beans>
```

``` Java
//标注类是一个切面
@Aspect
public class AnnotationPointCut {

    @Before("execution(* com.kuang..service.UserService.*(..))")
    public void before() {
        System.out.println("=====方法执行前=====");
    }

    @After("execution(* com.kuang..service.UserService.*(..))")
    public void after() {
        System.out.println("=====方法执行后======");
    }

    //在环绕增强中，我们可以给定一个参数，代表我们要获取处理
    @Around("execution(* com.kuang..service.UserService.*(..))")
    public void around(ProceedingJoinPoint jp) throws Throwable {
        System.out.println("环绕前");

        //获得签名
        Signature signature = jp.getSignature();
        System.out.println("签名：" + signature);

        //执行方法
        Object proceed = jp.proceed();
        System.out.println("环绕后");
        System.out.println(proceed);
    }
}
````

``` Java
public class MyTest {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = context.getBean("userService", UserService.class);
        userService.add();
    }
}
```

## 声明式事务

把一组业务当成一个业务来做;要么都成功，要么都失败。   
事务在项目开发中，十分的重要，涉及到数据的一致性问题，不能马虎，确保完整性和一致性。

### 事物ACID原则

* 原子性
* 一致性
* 隔离性
 - 多个业务可能操作同一个资源，防止数据损坏
* 持久性
 - 事物一旦提交，无论系统发送什么问题，结果都不会再影响，被持久化的写到存储器中
