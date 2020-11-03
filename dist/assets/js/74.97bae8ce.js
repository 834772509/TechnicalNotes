(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{293:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"移动端-web-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端-web-开发"}},[t._v("#")]),t._v(" 移动端 Web 开发")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("移动端浏览器基本以 webkit 内核为主，兼容移动端主流浏览器，处理 Webkit 内核浏览器即可")])]),t._v(" "),a("h2",{attrs:{id:"移动端主流方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端主流方案"}},[t._v("#")]),t._v(" 移动端主流方案")]),t._v(" "),a("h3",{attrs:{id:"单独制作移动端页面（主流）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单独制作移动端页面（主流）"}},[t._v("#")]),t._v(" 单独制作移动端页面（主流）")]),t._v(" "),a("p",[t._v("通常情况下，网址域名前面加 m(mobile)可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。")]),t._v(" "),a("p",[t._v("可选布局：")]),t._v(" "),a("ul",[a("li",[t._v("流式布局（百分比布局）")]),t._v(" "),a("li",[t._v("flex 弹性布局（推荐）")]),t._v(" "),a("li",[t._v("less + rem+ 媒体查询")]),t._v(" "),a("li",[t._v("混合布局")])]),t._v(" "),a("h3",{attrs:{id:"响应式页面兼容移动端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式页面兼容移动端"}},[t._v("#")]),t._v(" 响应式页面兼容移动端")]),t._v(" "),a("p",[t._v("通过判断屏幕宽度来改变样式，以适应不同终端。缺点是：制作麻烦，需要花很大精力去调兼容性问题")]),t._v(" "),a("p",[t._v("可选布局：")]),t._v(" "),a("ul",[a("li",[t._v("媒体查询")]),t._v(" "),a("li",[t._v("bootstarp")])]),t._v(" "),a("h2",{attrs:{id:"移动端常见布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端常见布局"}},[t._v("#")]),t._v(" 移动端常见布局")]),t._v(" "),a("h3",{attrs:{id:"流式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流式布局"}},[t._v("#")]),t._v(" 流式布局")]),t._v(" "),a("p",[t._v("流式布局，也称百分比布局。通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。流式布局方式是移动 web 开发使用的比较常见的布局方式。")]),t._v(" "),a("h3",{attrs:{id:"flex-弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-弹性布局"}},[t._v("#")]),t._v(" flex 弹性布局")]),t._v(" "),a("p",[t._v("flex 弹性布局操作方便，布局极为简单，移动端应用很广泛")]),t._v(" "),a("h2",{attrs:{id:"视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视口"}},[t._v("#")]),t._v(" 视口")]),t._v(" "),a("p",[t._v("视口 (viewport) 是浏览器页面内容的屏幕区域。视口可以分为 布局视口、视觉视口 和 理想视口")]),t._v(" "),a("h3",{attrs:{id:"布局视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局视口"}},[t._v("#")]),t._v(" 布局视口")]),t._v(" "),a("p",[t._v("一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的 PC 端页面在手机上显示的问题。")]),t._v(" "),a("p",[t._v("iOS、Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页大多都能在手机上呈现，但元素看上去很小，一般默认可以通过手动缩放网页。")]),t._v(" "),a("h3",{attrs:{id:"视觉视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视觉视口"}},[t._v("#")]),t._v(" 视觉视口")]),t._v(" "),a("p",[t._v("视觉视口是用户正在看到的"),a("strong",[t._v("网站的区域")]),t._v("。可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。")]),t._v(" "),a("h3",{attrs:{id:"理想视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理想视口"}},[t._v("#")]),t._v(" 理想视口")]),t._v(" "),a("p",[t._v("理想视口为了使网站在移动端有最理想的浏览和阅读宽度而设定。布局视口的宽度应该与理想视口的宽度一致（设备宽度和布局视口一致）")]),t._v(" "),a("h3",{attrs:{id:"meta-视口标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-视口标签"}},[t._v("#")]),t._v(" meta 视口标签")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("标准 viewport：")]),t._v(" "),a("ul",[a("li",[t._v("视口宽度和设备保持一致")]),t._v(" "),a("li",[t._v("视口的默认缩放比例 1.0")]),t._v(" "),a("li",[t._v("不允许用户自行缩放")]),t._v(" "),a("li",[t._v("最大允许的缩放比例 1.0")]),t._v(" "),a("li",[t._v("最小允许的缩放比例 1.0")])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("解释说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("宽度设置的是 viewport 宽度，可以设置 device-width 特殊值")])]),t._v(" "),a("tr",[a("td",[t._v("initial-scale")]),t._v(" "),a("td",[t._v("初始缩放比，大于 0 的数字")])]),t._v(" "),a("tr",[a("td",[t._v("maximum-scale")]),t._v(" "),a("td",[t._v("最大缩放比，大于 0 的数字")])]),t._v(" "),a("tr",[a("td",[t._v("minimum-scale")]),t._v(" "),a("td",[t._v("最小缩放比，大于 0 的数字")])]),t._v(" "),a("tr",[a("td",[t._v("user-scalable")]),t._v(" "),a("td",[t._v("用户是否可以缩放，yes 或 no ( 1 或 0 )")])])])]),t._v(" "),a("h2",{attrs:{id:"二倍图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二倍图"}},[t._v("#")]),t._v(" 二倍图")]),t._v(" "),a("h3",{attrs:{id:"物理像素-物理像素比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理像素-物理像素比"}},[t._v("#")]),t._v(" 物理像素&物理像素比")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("物理像素\n物理像素点指的是屏幕显示的最小颗粒（即分辨率），是物理真实存在的。")])]),t._v(" "),a("li",[a("p",[t._v("物理像素比")])])]),t._v(" "),a("ul",[a("li",[t._v("PC 端页面, 1px 等于 1 个物理像素，但是移动端不尽相同。")]),t._v(" "),a("li",[t._v("1px 的能显示的物理像素点的个数，称为物理像素比或屏幕像素比")])]),t._v(" "),a("h3",{attrs:{id:"多倍图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多倍图"}},[t._v("#")]),t._v(" 多倍图")]),t._v(" "),a("p",[t._v("多倍图是为了解决移动端视网膜屏（将多个像素合并为一个像素）图片模糊的问题。图片比实际需要的大小大几倍，即为多倍图。通常使用二倍图")]),t._v(" "),a("h2",{attrs:{id:"移动端特殊样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端特殊样式"}},[t._v("#")]),t._v(" 移动端特殊样式")]),t._v(" "),a("h3",{attrs:{id:"css3-盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3-盒子模型"}},[t._v("#")]),t._v(" CSS3 盒子模型")]),t._v(" "),a("p",[t._v("box- sizing 可以指定盒模型，计算盒子大小的方式可以发生改变")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* （默认）盒子大小为 width + padding + border */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 盒子大小保持为 width */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"去除-a-标签点击后高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去除-a-标签点击后高亮"}},[t._v("#")]),t._v(" 去除 a 标签点击后高亮")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-tap-heighlight-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"默认按钮样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认按钮样式"}},[t._v("#")]),t._v(" 默认按钮样式")]),t._v(" "),a("p",[t._v("在移动端浏览器默认的外观在 ios 上加上这个属性才能给按钮和输入框自定义样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"禁止长按弹出菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止长按弹出菜单"}},[t._v("#")]),t._v(" 禁止长按弹出菜单")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img,\na")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("h3",{attrs:{id:"什么是媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是媒体查询"}},[t._v("#")]),t._v(" 什么是媒体查询")]),t._v(" "),a("p",[t._v("媒体查询( Media Query）是 CSS3 新语法。")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("@media")]),t._v(" 查询，可以针对不同的媒体类型定义不同的样式")]),t._v(" "),a("li",[a("strong",[t._v("@media 可以针对不同的屏幕尺寸设置不同的样式")])]),t._v(" "),a("li",[t._v("当你董置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面")]),t._v(" "),a("li",[t._v("目前针对很多苹果手机、Android 手机，平板等设备都用得到多媒体查询")])]),t._v(" "),a("h3",{attrs:{id:"语法规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法规范"}},[t._v("#")]),t._v(" 语法规范")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("媒体查询一般按照从小到大的顺序来写，根据样式的层叠性，这样代码更简洁")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" 媒体类型 关键字 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("媒体特性"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* CSS样式 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("媒体类型：\n"),a("ul",[a("li",[t._v("all: 用于所有设备;")]),t._v(" "),a("li",[t._v("print: 用于打印机和打印预览;")]),t._v(" "),a("li",[a("strong",[t._v("screen: 用于电脑屏幕，平板电脑，智能手机等")])])])]),t._v(" "),a("li",[t._v("关键字：\n"),a("ul",[a("li",[a("strong",[t._v("and: 可以将多个媒体特性连接到一起，相当于“且”的意思。")])]),t._v(" "),a("li",[t._v("not: 排除某个媒体类型，相当于“非”的意思，可以省略。")]),t._v(" "),a("li",[t._v("only: 指定某个特定的媒体类型，可以省略。")])])]),t._v(" "),a("li",[t._v("媒体特性：\n"),a("ul",[a("li",[t._v("width: 定义输出设备中页面可见区域的宽度")]),t._v(" "),a("li",[t._v("min-width: 定义输出设备中页面最小可见区域宽度")]),t._v(" "),a("li",[t._v("max-width: 定义输出设备中页面最大可见区域宽度")])])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 超小设备（手机） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("属性名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 小型设备（平板电脑） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("属性名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 中型设备（台式电脑） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 992px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("属性名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 大型设备（大台式电脑） */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("选择器")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("属性名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"引入资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入资源"}},[t._v("#")]),t._v(" 引入资源")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("媒体查询一般按照从小到大的顺序来写，根据样式的层叠性，这样代码更简洁")])]),t._v(" "),a("p",[t._v("新建 \\css\\desktop.css\n新建 \\css\\mobile.css")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 500px)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./css/desktop.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 500px)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./css/mobile.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"动态计算-rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态计算-rem"}},[t._v("#")]),t._v(" 动态计算 rem")]),t._v(" "),a("ol",[a("li",[t._v("针对不同的手机屏善，设置不同的 font-size 大小")]),t._v(" "),a("li",[t._v("将所有需要适配的图片/元素/字体大小，统一使用 rem")]),t._v(" "),a("li",[t._v("利用 px 转 rem\nVisual Studio Code 插件："),a("code",[t._v("px to rem")]),t._v(" ，热键：Alt + Z")]),t._v(" "),a("li",[t._v("利用 postcss-pxtorem（最优方案）")]),t._v(" "),a("li",[t._v("利用 less/sass/stylus 的计算能力")])])])}),[],!1,null,null,null);s.default=e.exports}}]);