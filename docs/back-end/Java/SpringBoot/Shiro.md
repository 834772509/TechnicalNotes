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

    @Autowired
    userService userService;

    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("授权");
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

        // 设置用户权限
        // info.addStringPermission("user:add");
        info.addStringPermission("user:add");
        info.addStringPermission("user:update");

        //获取当前登录对象
        Subject subject = SecurityUtils.getSubject();
        // User currentUser = (User) subject.getPrincipal();

        //设置当前用户权限
        info.addStringPermission("user:add");
        info.addStringPermission("user:update");

        return info;
    }

    //认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        System.out.println("认证");
        //String name = "root";
        //String password = "root";

        //读取封装的用户登录数据
        UsernamePasswordToken userToken = (UsernamePasswordToken) token;
        //连接数据库获取用户名、密码
        user user = userService.queryUserByName(userToken.getUsername());
        if (user == null) {
            //没有这个用户
            return null;
        }
        //密码认证
        return new SimpleAuthenticationInfo("", user.getPassword(), "");
    }
}
```

### 配置

config\ShiroConfig.java

``` Java
@Configuration
public class ShiroConfig {
    //ShiroFillterFactoryBean
    @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(@Qualifier("securityManager") DefaultWebSecurityManager defaultWebSecurityManager) {
        ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean();
        //设置安全管理器
        bean.setSecurityManager(defaultWebSecurityManager);
        //增加shiro的内置过滤器
        /*
            anon:.无需认证就可以访问
            authc:必须认证了才能访问
            user:必须拥有记住我功能才能用
            perms:拥有对某个资源的权限才能访问
            role:拥有某个角色权限才能访问
         */
        //拦截
        Map<String, String> filterMap = new LinkedHashMap<>();

        //授权，正常的情况下，没有授权会跳转到未授权页面
        // filterMap.put("/URL链接", "perms[用户名:权限]");
        filterMap.put("/user/add", "perms[user:add]");
        filterMap.put("/user/update", "perms[user:add]");

        filterMap.put("/user/*", "authc");
        bean.setFilterChainDefinitionMap(filterMap);

        //设置登录的请求
        bean.setLoginUrl("/toLogin");

        //设置未授权页面
        bean.setUnauthorizedUrl("/noauth");

        return bean;
    }

    //DafaultWebSecurityManager
    @Bean(name = "securityManager")
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
