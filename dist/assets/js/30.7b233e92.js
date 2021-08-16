(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{437:function(t,a,s){"use strict";s.r(a);var e=s(12),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javaweb-笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javaweb-笔记"}},[t._v("#")]),t._v(" JavaWeb 笔记")]),t._v(" "),s("h2",{attrs:{id:"配置环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[t._v("#")]),t._v(" 配置环境")]),t._v(" "),s("h3",{attrs:{id:"下载-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-tomcat"}},[t._v("#")]),t._v(" 下载 Tomcat")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"配置-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-tomcat"}},[t._v("#")]),t._v(" 配置 Tomcat")]),t._v(" "),s("p",[t._v("导入 "),s("code",[t._v("servlet-api.jsp")]),t._v(" 、 "),s("code",[t._v("jsp-api.jar")])]),t._v(" "),s("h3",{attrs:{id:"配置资源目录（可选）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置资源目录（可选）"}},[t._v("#")]),t._v(" 配置资源目录（可选）")]),t._v(" "),s("p",[t._v("新建\n\\web\\WEB-INF\\class 目录 : 设置编译目录\n\\web\\WEB-INF\\lib 目录 : 设置包路径")]),t._v(" "),s("h3",{attrs:{id:"解决中文乱码问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决中文乱码问题"}},[t._v("#")]),t._v(" 解决中文乱码问题")]),t._v(" "),s("p",[t._v("Idea：")]),t._v(" "),s("ol",[s("li",[t._v("文件-设置-构建、执行、部署-编译器-Java 编译器-附加命令行参数： "),s("code",[t._v("-encoding utf-8")])]),t._v(" "),s("li",[t._v("idea64.exe.vmoptions : 末尾加上 "),s("code",[t._v("-Dfile.encoding=UTF-8")]),t._v("\nTomcat 运行配置：虚拟机选项： "),s("code",[t._v("-Dfile.encoding=UTF-8")])])]),t._v(" "),s("h2",{attrs:{id:"脚本元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本元素"}},[t._v("#")]),t._v(" 脚本元素")]),t._v(" "),s("h3",{attrs:{id:"脚本段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本段"}},[t._v("#")]),t._v(" 脚本段")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%\n\n%>\n")])])]),s("h3",{attrs:{id:"声明方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明方法"}},[t._v("#")]),t._v(" 声明方法")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%!\npublic 方法名(){\n\n}\n%>\n")])])]),s("h3",{attrs:{id:"表达式（计算属性）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表达式（计算属性）"}},[t._v("#")]),t._v(" 表达式（计算属性）")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%=\n1 + 1\ngetDate()\n%>\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("表达式不是完整的语句，不能加;")])]),t._v(" "),s("h2",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),s("h3",{attrs:{id:"page-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-指令"}},[t._v("#")]),t._v(" page 指令")]),t._v(" "),s("p",[t._v("用来设定 JSP 页面的全局属性和相关功能\n作用于整个 JSP 文件通常放到 JSP 页面开始的位置")]),t._v(" "),s("p",[t._v("一个 JSP 文件可以包含多个 page 指令，指令之间是独立的。\n除了 import 和 pageEncoding 属性以外，每个属性只能定义一-次")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%@ page info="JPS文件描述信息"%>\n\x3c!--设置编码（比contentType优先级高）--\x3e\n<%@ page pageEncoding="GBK|utf-8" %>\n\x3c!--是否开启session（默认为true）--\x3e\n<%@ page session="true|false" %>\n<%@ page import="java.text.*" %>\n\x3c!--指定错误异常处理页面--\x3e\n<%@ page errorPage="XXX.jsp" %>\n\x3c!--设置当前页面为异常处理页面--\x3e\n<%@ page isErrorPage="true"%>\n<%@ page %>\n<%@ page %>\n<%@ page %>\n')])])]),s("h3",{attrs:{id:"include-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-指令"}},[t._v("#")]),t._v(" include 指令")]),t._v(" "),s("p",[t._v("向页面插入静态文件（内容）")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%@ include file="URL"%>\n')])])]),s("h3",{attrs:{id:"动作元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动作元素"}},[t._v("#")]),t._v(" 动作元素")]),t._v(" "),s("h4",{attrs:{id:"include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" include")]),t._v(" "),s("p",[t._v("在当前页面中加入静态/动态资源")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<jsp:include page="URL">\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("与"),s("strong",[t._v("include 指令")]),t._v("的区别是"),s("strong",[t._v("include 动作")]),t._v("支持动态资源")])]),t._v(" "),s("h4",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),s("h4",{attrs:{id:"frward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frward"}},[t._v("#")]),t._v(" frward")]),t._v(" "),s("p",[t._v("把当前的 JSP 页面重新定向到另一个页面上")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<jsp:forward page="重定向的页面">\n  <jsp:param name="name" value="value"/>\n</jsp:forward>\n')])])]),s("h3",{attrs:{id:"taglib-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taglib-指令"}},[t._v("#")]),t._v(" taglib 指令")]),t._v(" "),s("h3",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<%--注释内容--%>\n")])])]),s("h2",{attrs:{id:"九大内置对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九大内置对象"}},[t._v("#")]),t._v(" 九大内置对象")]),t._v(" "),s("h3",{attrs:{id:"out-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#out-对象"}},[t._v("#")]),t._v(" Out 对象")]),t._v(" "),s("p",[t._v("用于客户端和浏览器输出数据")]),t._v(" "),s("h3",{attrs:{id:"request-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-对象"}},[t._v("#")]),t._v(" Request 对象")]),t._v(" "),s("p",[t._v("请求对象，封装了客户端和浏览器的各种信息")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"键"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置字符编码")]),t._v("\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCharacterEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getScheme()-协议名  getServerName()-localhost getServerPort()-端口号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" basePath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"://"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServerName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("当前页面的URL：<%=basePath%>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n请求方式：<%=request.getMethod()%>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n路径:<%=request.getRequestURI()%>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n协议名称:<%=request.getProtocol()%>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v('\n表单提交的属性值:<%=request.getParameter("uName")%>'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v('\n设值与取值:<%=request.getAttribute("aa")%>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输出：\n当前页面的URL：http://localhost:8080/\n请求方式：GET\n路径:/res1.jsp\n协议名称:HTTP/1.1\n表单提交的属性值:null\n设值与取值:2\n")])])]),s("h3",{attrs:{id:"response-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-对象"}},[t._v("#")]),t._v(" Response 对象")]),t._v(" "),s("p",[t._v("响应对象，封装的服务器的各种信息")]),t._v(" "),s("h3",{attrs:{id:"exception-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-对象"}},[t._v("#")]),t._v(" Exception 对象")]),t._v(" "),s("p",[t._v("封装了 jsp 运行时的异常和错误")]),t._v(" "),s("h3",{attrs:{id:"config-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-对象"}},[t._v("#")]),t._v(" Config 对象")]),t._v(" "),s("p",[t._v("封装了配置信息")]),t._v(" "),s("h3",{attrs:{id:"page-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-对象"}},[t._v("#")]),t._v(" Page 对象")]),t._v(" "),s("p",[t._v("类似 Java 的 this，谁用就是谁，指是的当前页面，类似于“我”")]),t._v(" "),s("h3",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),s("p",[t._v("Session 用于存储数据，存储在浏览器中，关闭浏览器即销毁")]),t._v(" "),s("h4",{attrs:{id:"设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('request.getSession().setAttribute("Session名",值);\n')])])]),s("h4",{attrs:{id:"获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[t._v("#")]),t._v(" 获取")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('String[] 值 = (String[])request.getSession().getAttribute("Session名");\n')])])]),s("h3",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),s("p",[t._v("application 用于存储数据，存储在服务器的内存中，重启服务器即销毁")]),t._v(" "),s("h4",{attrs:{id:"设置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-2"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('application.setAttribute("标识符", 值);\n')])])]),s("h4",{attrs:{id:"获取-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-2"}},[t._v("#")]),t._v(" 获取")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('application.getAttribute("标识符");\n')])])]),s("h3",{attrs:{id:"pagecontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecontext"}},[t._v("#")]),t._v(" PageContext")]),t._v(" "),s("p",[t._v("可以得到所有的 jsp 对象")]),t._v(" "),s("h2",{attrs:{id:"cookies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[t._v("#")]),t._v(" Cookies")]),t._v(" "),s("p",[t._v("Cookies 用于存储数据，存储在客户端硬盘中，用户清理浏览器垃圾即销毁")]),t._v(" "),s("h3",{attrs:{id:"设置-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-3"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Cookie cookie = new Cookie("标识符",值);\n//设置cookies的生命周期\ncookie.setMaxAge(3*24*60*60);\nresponse.addCookie(cookie);\n')])])]),s("h3",{attrs:{id:"获取-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-3"}},[t._v("#")]),t._v(" 获取")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Cookie[] cookies = request.getCookies();\nfor(int i = 0; i < cookies.length; i++){\n  if (cookies[i].getName().equals("标识符")){\n    out.print(Integer.parseInt(cookies[i].getValue()))\n    break;\n  }\n}\n')])])]),s("h2",{attrs:{id:"servlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet"}},[t._v("#")]),t._v(" Servlet")]),t._v(" "),s("p",[t._v("Servlet 是用来响应客户端网路请求(http 请求)的服务器端 Java 程序，在 MVC 开发模式中担任控制层")]),t._v(" "),s("h3",{attrs:{id:"创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),s("p",[t._v("src\\Servlet 名称.java")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet")]),t._v("名称 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServlet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置字符编码")]),t._v("\n        req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCharacterEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/html;charset=utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintWriter")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" uri "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestURI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/跳转页名.do"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 参数名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数名"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/跳转页名.do"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" 参数名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数名"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),s("p",[t._v("\\web\\WEB-INF\\web.xml")]),t._v(" "),s("div",{staticClass:"language-XML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Servlet名称"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("action.AjaxSer"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Servlet名称"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("*.do"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<form action="跳转页名.do" method="post">\n</form>\n')])])]),s("h2",{attrs:{id:"mysql-数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据库"}},[t._v("#")]),t._v(" MySQL 数据库")]),t._v(" "),s("h3",{attrs:{id:"连接数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[t._v("#")]),t._v(" 连接数据库")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%\ntry{\n  Class.forName("com.mysql.cj.jdbc.Driver");\n  } catch(ClassNotFoundException e){\n    out.print("装载驱动程序失败");\n  }\ntry {\n  con=DriverManager.getConnection("jdbc:mysql://数据库地址:3306/数据库名?useSSL=FALSE&serverTimezone=UTC","用户名","密码");//3\n  } catch (SQLException e) {\n    out.print("链接数据库失败");\n    out.print("<br>错误信息：" + e);\n    e.printStackTrace();\n}\n%>\n')])])]),s("h3",{attrs:{id:"查询数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[t._v("#")]),t._v(" 查询数据")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%\ntry {\n  sql = con.createStatement();//4\n  rs=sql.executeQuery("SELECT * FROM 表名");//5\n} catch (SQLException e) {\n  out.print("<br>运行SQL语句失败");\n  e.printStackTrace();\n}\nwhile(rs.next()){\n  out.print(rs.getString(1));\n  out.print(rs.getString(2));\n  out.print(rs.getString("字段名"));\n}\nrs.close();\nsql.close();\n%>\n')])])]),s("h3",{attrs:{id:"增加数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加数据"}},[t._v("#")]),t._v(" 增加数据")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%\n\tString sql="insert into 表名 values(?,?)";\n\tPreparedStatement pstmt = con.prepareStatement(sql);\n\tpstmt.setString(1, 字段名1);\n\tpstmt.setString(2, 字段名2);\n\tif(pstmt.executeUpdate() == 1){\n\t\t//增加成功\n\t}\n\tpstmt.close();\n\tcon.close();\n%>\n')])])]),s("h3",{attrs:{id:"修改数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改数据"}},[t._v("#")]),t._v(" 修改数据")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%\nString sql="update 表名 set 字段名=?,字段名=? where 字段名=?";\nPreparedStatement pstmt = con.prepareStatement(sql);\npstmt.setString(1, 字段值);\npstmt.setString(2, 字段值);\npstmt.setString(3, 字段值);\nif(pstmt.executeUpdate() == 1){\n  //修改成功\n}\npstmt.close();\ncon.close();\n%>\n')])])]),s("h3",{attrs:{id:"删除数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),s("div",{staticClass:"language-JSP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<%\nString sql="delete from 表名 where 字段名=?";\nPreparedStatement pstmt = con.prepareStatement(sql);\npstmt.setInt(1, 字段值);\nif(pstmt.executeUpdate() == 1){\n  //删除成功\n}\npstmt.close();\ncon.close();\n%>\n')])])]),s("h2",{attrs:{id:"oracle-数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oracle-数据库"}},[t._v("#")]),t._v(" Oracle 数据库")]),t._v(" "),s("h3",{attrs:{id:"连接数据库-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库-2"}},[t._v("#")]),t._v(" 连接数据库")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('//加载类，并执行类中的静态代码块\nClass.forName("oracle.jdbc.OracleDriver");\n//连接数据库\nConnection conn = DriverManager.getConnection("jdbc:oracle:thin:@数据库地址:1521:XE", "用户名", "密码");\n')])])]),s("h3",{attrs:{id:"增加数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加数据-2"}},[t._v("#")]),t._v(" 增加数据")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('String sql = "insert into 表名 values (?,?)";\nPreparedStatement preparedStatement = conn.prepareStatement(sql);\npreparedStatement.setInt(1, 值);\npreparedStatement.setString(2, "值");\n\npreparedStatement.executeUpdate();\n')])])]),s("h3",{attrs:{id:"删除数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除数据-2"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('String sql = "DELETE FROM 表名 WHERE 字段值=?";\nPreparedStatement preparedStatement = conn.prepareStatement(sql);\npreparedStatement.setString(1, "值");\npreparedStatement.executeUpdate();\n')])])]),s("h3",{attrs:{id:"查询数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据-2"}},[t._v("#")]),t._v(" 查询数据")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('String sql = "select * from 表名 where 字段名=?";\nPreparedStatement preparedStatement = conn.prepareStatement(sql);\npreparedStatement.setInt(1, 值);\nResultSet rs = preparedStatement.executeQuery();\nwhite (rs.next()) {\n  System.out.println(rs.getInt("字段名"));\n  System.out.println(rs.getString("字段名"));\n}\n')])])]),s("h3",{attrs:{id:"修改数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改数据-2"}},[t._v("#")]),t._v(" 修改数据")]),t._v(" "),s("div",{staticClass:"language-jsp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('String sql = "Update 表名 Set 字段名=? where 字段名=?";\nPreparedStatement preparedStatement = conn.prepareStatement(sql);\npreparedStatement.setInt(1, 值);\npreparedStatement.setString(2, "值");\n\npreparedStatement.executeUpdate();\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);