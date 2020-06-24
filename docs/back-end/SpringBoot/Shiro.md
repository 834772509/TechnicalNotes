# Shiro

Apache Shiro是一个Java的安全(权限)框架。可以非常容易的开发出足够好的应用，其不仅可以用在JavaSE环境， 也可以用在JavaEE环境。Shiro可以完成，认证，授权，加密，会话管理，Web集成，缓存等  

(更多版本)[https://mvnrepository.com/artifact/org.apache.shiro/shiro-core]

## 依赖

pom.xml

``` XML
<!-- Shiro 安全框架-->
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring</artifactId>
    <version>1.5.3</version>
</dependency>
```

## 配置


### 自定义Realm

config\UserRealm.java

``` Java
//自定义的Realm
public class UserRealm extends AuthorizingRealm {

    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("授权");
        return null;
    }

    //认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("认证");
        return null;
    }
}
```

### 配置

config\ShiroConfig.java

``` Java
@Configuration
public class ShiroConfig {
    //ShiroFillterFactoryBean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("SecurityManager") DefaultWebSecurityManager defaultWebSecurityManager) {
        ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
        //设置安全管理器
        bean.setSecurityManager(defaultWebSecurityManager);
        return bean;
    }

    //DafaultWebSecurityManager
    @Bean(name = "SecurityManager")
    public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("userRealm") UserRealm userRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        //关联realman对象
        securityManager.setRealm(userRealm);
        return securityManager;
    }

    //创建realman对象，需要自定义类

    @Bean(name = "userRealm")
    public UserRealm userRealm() {
        return new UserRealm();
    }
}
```
