(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{415:function(t,a,s){t.exports=s.p+"assets/img/Babel执行阶段.e8905d6e.png"},416:function(t,a,s){t.exports=s.p+"assets/img/Babel每个阶段具体工作.41de956b.png"},534:function(t,a,s){"use strict";s.r(a);var e=s(12),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"babel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("h3",{attrs:{id:"babel-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-是什么？"}},[t._v("#")]),t._v(" Babel 是什么？")]),t._v(" "),e("ul",[e("li",[t._v("Babel 是一个工具链，主要用于旧浏览器或者环境中将 ECMAScript 2015+代码转换为向后兼容版本的 JavaScript；")]),t._v(" "),e("li",[t._v("包括：语法转换、源代码转换等；")])]),t._v(" "),e("h3",{attrs:{id:"babel-底层原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-底层原理"}},[t._v("#")]),t._v(" Babel 底层原理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Babel 的执行阶段")]),t._v(" "),e("p",[e("img",{attrs:{src:s(415),alt:"执行阶段"}})])]),t._v(" "),e("li",[e("p",[t._v("这只是一个简化版的编译器工具流程，在每个阶段又会有自己具体的工作")]),t._v(" "),e("p",[e("img",{attrs:{src:s(416),alt:"Babel每个阶段具体工作"}})])])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("babel 本身可以作为一个独立的工具（和 postcss 一样），不和 webpack 等构建工具配置来单独使用。")]),t._v(" "),e("p",[t._v("如果我们希望在命令行尝试使用 babel，需要安装如下库：")]),t._v(" "),e("ul",[e("li",[t._v("@babel/core：babel 的核心代码，必须安装；")]),t._v(" "),e("li",[t._v("@babel/cli：可以让我们在命令行使用 babel；")])]),t._v(" "),e("p",[e("code",[t._v("npm install @babel/core @babel/cli -D")])]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("h3",{attrs:{id:"命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[t._v("#")]),t._v(" 命令行")]),t._v(" "),e("p",[t._v("使用 babel 来处理我们的源代码："),e("code",[t._v("npx babel src --out-dir dist")])]),t._v(" "),e("ul",[e("li",[t._v("src：是源文件的目录；")]),t._v(" "),e("li",[t._v("--out-dir：指定要输出的文件夹 dist；")])]),t._v(" "),e("h3",{attrs:{id:"结合-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结合-webpack"}},[t._v("#")]),t._v(" 结合 Webpack")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装 babel-loader: "),e("code",[t._v("npm install @babel/core babel-loader -D")])])]),t._v(" "),e("li",[e("p",[t._v("使用 babel")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Webpack 配置方式")]),t._v(" "),e("p",[t._v("webpack.config.js")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel预设")]),t._v("\n            presets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel插件")]),t._v("\n            plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Babel插件名"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("独立文件配置方式")]),t._v(" "),e("p",[t._v("新建 babel.config.js")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel预设")]),t._v("\n  presets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel插件")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Babel插件名"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),e("h3",{attrs:{id:"箭头函数转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数转换"}},[t._v("#")]),t._v(" 箭头函数转换")]),t._v(" "),e("ol",[e("li",[t._v("安装: "),e("code",[t._v("npm install @babel/plugin-transform-arrow-functions -D")])]),t._v(" "),e("li",[t._v("使用: "),e("code",[t._v("npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions")])])]),t._v(" "),e("h3",{attrs:{id:"块级作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),e("ol",[e("li",[t._v("安装: "),e("code",[t._v("npm install @babel/plugin-transform-block-scoping -D")])]),t._v(" "),e("li",[t._v("使用: "),e("code",[t._v("npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping")])])]),t._v(" "),e("h2",{attrs:{id:"预设"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预设"}},[t._v("#")]),t._v(" 预设")]),t._v(" "),e("p",[t._v("如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）")]),t._v(" "),e("ol",[e("li",[t._v("安装："),e("code",[t._v("npm install @babel/preset-env -D")])]),t._v(" "),e("li",[t._v("使用: "),e("code",[t._v("npx babel src --out-dir dist --presets=@babel/preset-env")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);