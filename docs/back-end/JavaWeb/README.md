# JavaWeb 笔记

## 配置环境

### 下载 Tomcat

[Tomcat](https://tomcat.apache.org/)

### 配置 Tomcat

导入 ` `  ` servlet-api.jsp `  `  ` 、 `  `  ` jsp-api.jar `  ` ` 

### 配置资源目录（可选）

新建
\web\WEB-INF\class 目录 : 设置编译目录
\web\WEB-INF\lib 目录 : 设置包路径

## 脚本元素

### 脚本段

``` jsp
<%

%>
```

### 声明方法

``` jsp
<%!
public 方法名(){

}
%>
```

### 表达式（计算属性）

``` jsp
<%=
1 + 1
getDate()
%>
```

::: tip 提示
表达式不是完整的语句，不能加; 
:::

## 指令

### page指令

用来设定JSP页面的全局属性和相关功能
作用于整个JSP文件通常放到JSP页面开始的位置

一个JSP文件可以包含多个page指令，指令之间是独立的。
除了import和pageEncoding属性以外，每个属性只能定义一-次

``` jsp
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

### include指令

向页面插入静态文件（内容）

``` jsp
<%@ include file="URL"%>
```

### 动作元素

#### include

在当前页面中加入静态/动态资源

``` jsp
<jsp:include page="URL">
```

::: tip 提示
与**include指令**的区别是**include动作**支持动态资源
:::

#### action

``` jsp

```

#### frward

把当前的JSP页面重新定向到另一个页面上

``` jsp
<jsp:forward page="重定向的页面">
  <jsp:param name="name" value="value"/>
</jsp:forward>
```

### taglib指令

### 注释

``` jsp
<%--注释内容--%>
```

## 数据库

### 连接数据库

``` JSP
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

``` JSP
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

``` JSP
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

``` JSP
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

``` JSP
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

## Session

Session 用于存储数据，存储在浏览器中，关闭浏览器即销毁

### 设置

``` jsp
request.getSession().setAttribute("Session名",值);
```

### 获取

``` jsp
String[] 值 = (String[])request.getSession().getAttribute("Session名");
```

## Application

application 用于存储数据，存储在服务器的内存中，重启服务器即销毁

### 设置

``` JSP
application.setAttribute("标识符", 值);
```

### 获取

``` JSP
application.getAttribute("标识符");
```

## Cookies

Cookies 用于存储数据，存储在客户端硬盘中，用户清理浏览器垃圾即销毁

### 设置

``` jsp
Cookie cookie = new Cookie("标识符",值);
//设置cookies的生命周期
cookie.setMaxAge(3*24*60*60);
response.addCookie(cookie);
```

### 获取

``` jsp
Cookie[] cookies = request.getCookies();
for(int i = 0; i < cookies.length; i++){
  if (cookies[i].getName().equals("标识符")){
    out.print(Integer.parseInt(cookies[i].getValue()))
    break;
  }
}
```
