# 整合 Spring Security

Spring Security 是针对Spring项目的安全框架，也是Spring Boot底层安全模块默认的技术选型，它可以实现强大的Web安全控制。对于安全控制，我们仅需要引入 spring-boot-starter-security 模块，进行少量的配置，即可实
现强大的安全管理


WebSecurityConfigurerAdapter : 自定义Security策略
AuthenticationManagerBuilder : 自定义认证策略
@EnableWebSecurity: 开启WebSecurity模式


## 依赖

pom.xml

``` XML
<!--Spring Security-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## 使用

新建 com\example\config\SecurityConfig.java

``` Java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //首页所有人可以访问，功能页只有对应有权限的人才能访问
        //请求授权的规则
        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/路径").hasRole("权限组1")
                .antMatchers("/路径").hasRole("权限组2");
        //设置没有权限默认跳转至登录页面
        // http.formLogin();
        http.formLogin().loginPage("/登录路径").usernameParameter("用户名参数名").usernameParameter("用户密码参数名").loginProcessingUrl("/登录验证Url");
        //设置注销登陆后跳转的页面
        http.logout().logoutSuccessUrl("/");
    }

    //认证规则
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .withUser("用户名")
                .password(new BCryptPasswordEncoder().encode("密码"))
                .roles("权限组1")
                .and()
                .withUser("用户名")
                .password(new BCryptPasswordEncoder().encode("密码"))
                .roles("权限组1","权限组2");
    }
}
```

::: tip 提示
Spring Security 必须配置密码的加密方式，否则会报错
:::
