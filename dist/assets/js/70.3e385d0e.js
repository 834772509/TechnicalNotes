(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{289:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jetpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jetpack"}},[t._v("#")]),t._v(" Jetpack")]),t._v(" "),s("h2",{attrs:{id:"viewmodel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewmodel"}},[t._v("#")]),t._v(" ViewModel")]),t._v(" "),s("p",[t._v("ViewModel 专门用于存放与界面相关的数据，只要界面上看得到的数据，都应该存放在 ViewModel 中")]),t._v(" "),s("h3",{attrs:{id:"引入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[t._v("#")]),t._v(" 引入依赖")]),t._v(" "),s("p",[t._v("\\app\\build.gradle")]),t._v(" "),s("div",{staticClass:"language-gradle extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('dependencies {\n    implementation "androidx.lifecycle:lifecycle-extensions:2.1.0"\n}\n')])])]),s("h3",{attrs:{id:"创建-viewmodel-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-viewmodel-类"}},[t._v("#")]),t._v(" 创建 ViewModel 类")]),t._v(" "),s("p",[t._v("\\MainViewModel.kt")]),t._v(" "),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainViewModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ViewModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" 变量名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 值\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取ViewModel")]),t._v("\nviewModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ViewModelProviders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainViewModel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//访问ViewModel变量")]),t._v("\nviewModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("变量名\n")])])]),s("h3",{attrs:{id:"传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传参"}},[t._v("#")]),t._v(" 传参")]),t._v(" "),s("p",[t._v("新建类 \\MainViewModelFactoy.kt")]),t._v(" "),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainViewModelFactoy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" 参数名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数据类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewModelProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Factory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ViewModel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modelClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Class"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" T "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainViewModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" T\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取ViewModel")]),t._v("\nviewModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ViewModelProviders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainViewModelFactoy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 默认值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainViewModel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"lifecycles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecycles"}},[t._v("#")]),t._v(" Lifecycles")]),t._v(" "),s("p",[t._v("Lifecycles 可以让任何一个类都能轻松感知到 Activity 的生命周期，同时又不需要在 Activity 中编写太多的额外逻辑")])])}),[],!1,null,null,null);a.default=n.exports}}]);