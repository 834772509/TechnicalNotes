# JavaWeb 笔记

## 配置环境

### 下载 Tomcat

[Tomcat](https://tomcat.apache.org/)

### 配置 Tomcat

导入 `servlet-api.jsp` 、 `jsp-api.jar`

### 配置资源目录（可选）

新建
\web\WEB-INF\class 目录 : 设置编译目录
\web\WEB-INF\lib 目录 : 设置包路径

### 解决中文乱码问题

Idea：

1. 文件-设置-构建、执行、部署-编译器-Java 编译器-附加命令行参数： `-encoding utf-8`
2. idea64.exe.vmoptions : 末尾加上 `-Dfile.encoding=UTF-8`
   Tomcat 运行配置：虚拟机选项： `-Dfile.encoding=UTF-8`

## 脚本元素

### 脚本段

```jsp
<%

%>
```

### 声明方法

```jsp
<%!
public 方法名(){

}
%>
```

### 表达式（计算属性）

```jsp
<%=
1 + 1
getDate()
%>
```

::: tip 提示
表达式不是完整的语句，不能加;
:::

## 指令

### page 指令

用来设定 JSP 页面的全局属性和相关功能
作用于整个 JSP 文件通常放到 JSP 页面开始的位置

一个 JSP 文件可以包含多个 page 指令，指令之间是独立的。
除了 import 和 pageEncoding 属性以外，每个属性只能定义一-次

```jsp
<%@ page info="JPS文件描述信息"%>
<!--设置编码（比contentType优先级高）-->
<%@ page pageEncoding="GBK|utf-8" %>
<!--是否开启session（默认为true）-->
<%@ page session="true|false" %>
<%@ page import="java.text.*" %>
<!--指定错误异常处理页面-->
<%@ page errorPage="XXX.jsp" %>
<!--设置当前页面为异常处理页面-->
<%@ page isErrorPage="true"%>
<%@ page %>
<%@ page %>
<%@ page %>
```

### include 指令

向页面插入静态文件（内容）

```jsp
<%@ include file="URL"%>
```

### 动作元素

#### include

在当前页面中加入静态/动态资源

```jsp
<jsp:include page="URL">
```

::: tip 提示
与**include 指令**的区别是**include 动作**支持动态资源
:::

#### action

#### frward

把当前的 JSP 页面重新定向到另一个页面上

```jsp
<jsp:forward page="重定向的页面">
  <jsp:param name="name" value="value"/>
</jsp:forward>
```

### taglib 指令

### 注释

```jsp
<%--注释内容--%>
```

## 九大内置对象

### Out 对象

用于客户端和浏览器输出数据

### Request 对象

请求对象，封装了客户端和浏览器的各种信息

```Java
request.setAttribute("键",值)
// 设置字符编码
request.setCharacterEncoding("utf-8");
//getScheme()-协议名  getServerName()-localhost getServerPort()-端口号
String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/";
```

```html
当前页面的URL：<%=basePath%><br />
请求方式：<%=request.getMethod()%><br />
路径:<%=request.getRequestURI()%><br />
协议名称:<%=request.getProtocol()%><br />
表单提交的属性值:<%=request.getParameter("uName")%><br />
设值与取值:<%=request.getAttribute("aa")%>
```

```
输出：
当前页面的URL：http://localhost:8080/
请求方式：GET
路径:/res1.jsp
协议名称:HTTP/1.1
表单提交的属性值:null
设值与取值:2
```

### Response 对象

响应对象，封装的服务器的各种信息

### Exception 对象

封装了 jsp 运行时的异常和错误

### Config 对象

封装了配置信息

### Page 对象

类似 Java 的 this，谁用就是谁，指是的当前页面，类似于“我”

### Session

Session 用于存储数据，存储在浏览器中，关闭浏览器即销毁

#### 设置

```jsp
request.getSession().setAttribute("Session名",值);
```

#### 获取

```jsp
String[] 值 = (String[])request.getSession().getAttribute("Session名");
```

### Application

application 用于存储数据，存储在服务器的内存中，重启服务器即销毁

#### 设置

```JSP
application.setAttribute("标识符", 值);
```

#### 获取

```JSP
application.getAttribute("标识符");
```

### PageContext

可以得到所有的 jsp 对象

## Cookies

Cookies 用于存储数据，存储在客户端硬盘中，用户清理浏览器垃圾即销毁

### 设置

```jsp
Cookie cookie = new Cookie("标识符",值);
//设置cookies的生命周期
cookie.setMaxAge(3*24*60*60);
response.addCookie(cookie);
```

### 获取

```jsp
Cookie[] cookies = request.getCookies();
for(int i = 0; i < cookies.length; i++){
  if (cookies[i].getName().equals("标识符")){
    out.print(Integer.parseInt(cookies[i].getValue()))
    break;
  }
}
```

## Servlet

Servlet 是用来响应客户端网路请求(http 请求)的服务器端 Java 程序，在 MVC 开发模式中担任控制层

### 创建

src\Servlet 名称.java

```Java
public class Servlet名称 extends HttpServlet {
    public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      //设置字符编码
        req.setCharacterEncoding("utf-8");
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter o = resp.getWriter();
        String uri = req.getRequestURI();
        if (uri.equals("/跳转页名.do")) {
            String 参数名 = req.getParameter("参数名");
            o.print(参数名);
        } else if (uri.equals("/跳转页名.do")) {
            String 参数名 = req.getParameter("参数名");
            o.print(参数名);
        }
    }
}
```

### 声明

\web\WEB-INF\web.xml

```XML
<servlet>
  <servlet-name>Servlet名称</servlet-name>
  <servlet-class>action.AjaxSer</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>Servlet名称</servlet-name>
  <url-pattern>*.do</url-pattern>
</servlet-mapping>
```

### 使用

```jsp
<form action="跳转页名.do" method="post">
</form>
```

## MySQL 数据库

### 连接数据库

```JSP
<%
try{
  Class.forName("com.mysql.cj.jdbc.Driver");
  } catch(ClassNotFoundException e){
    out.print("装载驱动程序失败");
  }
try {
  con=DriverManager.getConnection("jdbc:mysql://数据库地址:3306/数据库名?useSSL=FALSE&serverTimezone=UTC","用户名","密码");//3
  } catch (SQLException e) {
    out.print("链接数据库失败");
    out.print("<br>错误信息：" + e);
    e.printStackTrace();
}
%>
```

### 查询数据

```JSP
<%
try {
  sql = con.createStatement();//4
  rs=sql.executeQuery("SELECT * FROM 表名");//5
} catch (SQLException e) {
  out.print("<br>运行SQL语句失败");
  e.printStackTrace();
}
while(rs.next()){
  out.print(rs.getString(1));
  out.print(rs.getString(2));
  out.print(rs.getString("字段名"));
}
rs.close();
sql.close();
%>
```

### 增加数据

```JSP
<%
	String sql="insert into 表名 values(?,?)";
	PreparedStatement pstmt = con.prepareStatement(sql);
	pstmt.setString(1, 字段名1);
	pstmt.setString(2, 字段名2);
	if(pstmt.executeUpdate() == 1){
		//增加成功
	}
	pstmt.close();
	con.close();
%>
```

### 修改数据

```JSP
<%
String sql="update 表名 set 字段名=?,字段名=? where 字段名=?";
PreparedStatement pstmt = con.prepareStatement(sql);
pstmt.setString(1, 字段值);
pstmt.setString(2, 字段值);
pstmt.setString(3, 字段值);
if(pstmt.executeUpdate() == 1){
  //修改成功
}
pstmt.close();
con.close();
%>
```

### 删除数据

```JSP
<%
String sql="delete from 表名 where 字段名=?";
PreparedStatement pstmt = con.prepareStatement(sql);
pstmt.setInt(1, 字段值);
if(pstmt.executeUpdate() == 1){
  //删除成功
}
pstmt.close();
con.close();
%>
```

## Oracle 数据库

### 连接数据库

```jsp
//加载类，并执行类中的静态代码块
Class.forName("oracle.jdbc.OracleDriver");
//连接数据库
Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@数据库地址:1521:XE", "用户名", "密码");
```

### 增加数据

```jsp
String sql = "insert into 表名 values (?,?)";
PreparedStatement preparedStatement = conn.prepareStatement(sql);
preparedStatement.setInt(1, 值);
preparedStatement.setString(2, "值");

preparedStatement.executeUpdate();
```

### 删除数据

```jsp
String sql = "DELETE FROM 表名 WHERE 字段值=?";
PreparedStatement preparedStatement = conn.prepareStatement(sql);
preparedStatement.setString(1, "值");
preparedStatement.executeUpdate();
```

### 查询数据

```jsp
String sql = "select * from 表名 where 字段名=?";
PreparedStatement preparedStatement = conn.prepareStatement(sql);
preparedStatement.setInt(1, 值);
ResultSet rs = preparedStatement.executeQuery();
white (rs.next()) {
  System.out.println(rs.getInt("字段名"));
  System.out.println(rs.getString("字段名"));
}
```

### 修改数据

```jsp
String sql = "Update 表名 Set 字段名=? where 字段名=?";
PreparedStatement preparedStatement = conn.prepareStatement(sql);
preparedStatement.setInt(1, 值);
preparedStatement.setString(2, "值");

preparedStatement.executeUpdate();
```
