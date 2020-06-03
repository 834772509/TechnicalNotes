(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{227:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"javaweb-笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javaweb-笔记"}},[t._v("#")]),t._v(" JavaWeb 笔记")]),t._v(" "),e("h2",{attrs:{id:"配置环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[t._v("#")]),t._v(" 配置环境")]),t._v(" "),e("h3",{attrs:{id:"下载-tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-tomcat"}},[t._v("#")]),t._v(" 下载 Tomcat")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomcat"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"配置-tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-tomcat"}},[t._v("#")]),t._v(" 配置 Tomcat")]),t._v(" "),e("p",[t._v("导入 "),e("code",[t._v("servlet-api.jsp")]),t._v("、"),e("code",[t._v("jsp-api.jar")])]),t._v(" "),e("h3",{attrs:{id:"配置资源目录（可选）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置资源目录（可选）"}},[t._v("#")]),t._v(" 配置资源目录（可选）")]),t._v(" "),e("p",[t._v("新建\n\\web\\WEB-INF\\class 目录 : 设置编译目录\n\\web\\WEB-INF\\lib 目录 : 设置包路径")]),t._v(" "),e("h2",{attrs:{id:"脚本元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本元素"}},[t._v("#")]),t._v(" 脚本元素")]),t._v(" "),e("h3",{attrs:{id:"脚本段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本段"}},[t._v("#")]),t._v(" 脚本段")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<%\n\n%>\n")])])]),e("h3",{attrs:{id:"声明方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#声明方法"}},[t._v("#")]),t._v(" 声明方法")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<%!\npublic 方法名(){\n\n}\n%>\n")])])]),e("h3",{attrs:{id:"表达式（计算属性）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式（计算属性）"}},[t._v("#")]),t._v(" 表达式（计算属性）")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<%=\n1 + 1\ngetDate()\n%>\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("表达式不是完整的语句，不能加;")])]),t._v(" "),e("h2",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),e("h3",{attrs:{id:"page指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page指令"}},[t._v("#")]),t._v(" page指令")]),t._v(" "),e("p",[t._v("用来设定JSP页面的全局属性和相关功能\n作用于整个JSP文件通常放到JSP页面开始的位置")]),t._v(" "),e("p",[t._v("一个JSP文件可以包含多个page指令，指令之间是独立的。\n除了import和pageEncoding属性以外，每个属性只能定义一-次")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%@ page info="JPS文件描述信息"%>\n\x3c!--设置编码（比contentType优先级高）--\x3e\n<%@ page pageEncoding="GBK|utf-8" %>\n\x3c!--是否开启session（默认为true）--\x3e\n<%@ page session="true|false" %>\n<%@ page import="java.text.*" %>\n\x3c!--指定错误异常处理页面--\x3e\n<%@ page errorPage="XXX.jsp" %>\n\x3c!--设置当前页面为异常处理页面--\x3e\n<%@ page isErrorPage="true"%>\n<%@ page %>\n<%@ page %>\n<%@ page %>\n')])])]),e("h3",{attrs:{id:"include指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#include指令"}},[t._v("#")]),t._v(" include指令")]),t._v(" "),e("p",[t._v("向页面插入静态文件（内容）")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%@ include file="URL"%>\n')])])]),e("h3",{attrs:{id:"动作元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动作元素"}},[t._v("#")]),t._v(" 动作元素")]),t._v(" "),e("h4",{attrs:{id:"include"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[t._v("#")]),t._v(" include")]),t._v(" "),e("p",[t._v("在当前页面中加入静态/动态资源")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<jsp:include page="URL">\n')])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("与"),e("strong",[t._v("include指令")]),t._v("的区别是"),e("strong",[t._v("include动作")]),t._v("支持动态资源")])]),t._v(" "),e("h4",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n")])])]),e("h4",{attrs:{id:"frward"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frward"}},[t._v("#")]),t._v(" frward")]),t._v(" "),e("p",[t._v("把当前的JSP页面重新定向到另一个页面上")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<jsp:forward page="重定向的页面">\n  <jsp:param name="name" value="value"/>\n</jsp:forward>\n')])])]),e("h3",{attrs:{id:"taglib指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taglib指令"}},[t._v("#")]),t._v(" taglib指令")]),t._v(" "),e("h3",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),e("div",{staticClass:"language-jsp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<%--注释内容--%>\n")])])]),e("h2",{attrs:{id:"数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),e("h3",{attrs:{id:"连接数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[t._v("#")]),t._v(" 连接数据库")]),t._v(" "),e("div",{staticClass:"language-JSP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\ntry{\n  Class.forName("com.mysql.cj.jdbc.Driver");\n  } catch(ClassNotFoundException e){\n    out.print("装载驱动程序失败");\n  }\ntry {\n  con=DriverManager.getConnection("jdbc:mysql://数据库地址:3306/数据库名?useSSL=FALSE&serverTimezone=UTC","用户名","密码");//3\n  } catch (SQLException e) {\n    out.print("链接数据库失败");\n    out.print("<br>错误信息：" + e);\n    e.printStackTrace();\n}\n%>\n')])])]),e("h3",{attrs:{id:"查询数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[t._v("#")]),t._v(" 查询数据")]),t._v(" "),e("div",{staticClass:"language-JSP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\ntry {\n  sql = con.createStatement();//4\n  rs=sql.executeQuery("SELECT * FROM 表名");//5\n} catch (SQLException e) {\n  out.print("<br>运行SQL语句失败");\n  e.printStackTrace();\n}\nwhile(rs.next()){\n  out.print(rs.getString(1));\n  out.print(rs.getString(2));\n  out.print(rs.getString("字段名"));\n}\nrs.close();\nsql.close();\n%>\n')])])]),e("h3",{attrs:{id:"增加数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加数据"}},[t._v("#")]),t._v(" 增加数据")]),t._v(" "),e("div",{staticClass:"language-JSP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\n\tString sql="insert into 表名 values(?,?)";\n\tPreparedStatement pstmt = con.prepareStatement(sql);\n\tpstmt.setString(1, 字段名1);\n\tpstmt.setString(2, 字段名2);\n\tif(pstmt.executeUpdate() == 1){\n\t\t//增加成功\n\t}\n\tpstmt.close();\n\tcon.close();\n%>\n')])])]),e("h3",{attrs:{id:"修改数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改数据"}},[t._v("#")]),t._v(" 修改数据")]),t._v(" "),e("div",{staticClass:"language-JSP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\nString sql="update 表名 set 字段名=?,字段名=? where 字段名=?";\nPreparedStatement pstmt = con.prepareStatement(sql);\npstmt.setString(1, 字段值);\npstmt.setString(2, 字段值);\npstmt.setString(3, 字段值);\nif(pstmt.executeUpdate() == 1){\n  //修改成功\n}\npstmt.close();\ncon.close();\n%>\n')])])]),e("h3",{attrs:{id:"删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),e("div",{staticClass:"language-JSP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<%\nString sql="delete from 表名 where 字段名=?";\nPreparedStatement pstmt = con.prepareStatement(sql);\npstmt.setInt(1, 字段值);\nif(pstmt.executeUpdate() == 1){\n  //删除成功\n}\npstmt.close();\ncon.close();\n%>\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);