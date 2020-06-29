# Filter 过滤器

    过滤器,用来过滤网站的数据
    用来解决一些乱码问题 或者验证登陆

## 流程

1. 导包

    ``` Java
    import javax.servlet.*;
    ```

2. 编写并实现过滤器接口

    ``` Java
    public class 自己定义的过滤器类名 implements Filter{

    }
    ```

3. 重写方法

    ``` Java
    public class 自己定义的过滤器类名 implements Filter{
        //初始化
        public void init(FilterConfig filterConfig) throws ServletException {
        }
        //
        public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

            chain.doFilter(req, resp);//交给下一个过滤器或servlet处理
        }
        //销毁
        public void destroy() {
        }
    }
    ```

4. 配置Filter

    ``` XML 
    <!--
        filter: 配置Filter
            filter-name: 随意取名
            filter-class: 你创建的过滤器.java文件的位置
        filter-mapping: 映射路径
            filter-name: 要和filter中的filter-name对应
            url-pattern:要过滤的网页或者请求 这里是过滤s1下面的所有网页和请求
    -->
    <filter>
        <filter-name>Filter</filter-name>
        <filter-class>你的Filter.java文件的位置</filter-class>
    </filter>

    <filter-mapping>
        <filter-name>Filter</filter-name>
        <url-pattern>/s1/*</url-pattern>
    </filter-mapping>
    ```
