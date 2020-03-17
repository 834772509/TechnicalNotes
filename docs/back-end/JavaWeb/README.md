# JavaWeb 笔记

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

```jsp
<jsp:include page="URL">
```

::: tip 提示
与**include指令**的区别是**include动作**支持动态资源
:::

#### action

```jsp

```

#### frward

把当前的JSP页面重新定向到另一个页面上

```jsp
<jsp:forward page="重定向的页面">
  <jsp:param name="name" value="value"/>
</jsp:forward>
```

### taglib指令

### 注释

``` jsp
<%--注释内容--%>
```
