(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{575:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flex-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[t._v("#")]),t._v(" Flex 布局")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[t._v("flex 布局是目前 web 开发中使用最多的布局方案："),s("br"),t._v("\nflex 布局( Flexible 布局,弹性布局)"),s("br"),t._v("\n目前特别在移动端用的最多，目前 PC 端也使用越来越多了")]),t._v(" "),s("p",[t._v("两个重要概念：")]),t._v(" "),s("ul",[s("li",[t._v("开启了 flex 布局的元素叫 "),s("strong",[t._v("flex container")])]),t._v(" "),s("li",[t._v("flex container 里面的直接子元素叫做"),s("strong",[t._v("flex items")])])]),t._v(" "),s("h2",{attrs:{id:"开启-flex-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-flex-布局"}},[t._v("#")]),t._v(" 开启 flex 布局")]),t._v(" "),s("p",[t._v("块级元素")]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("行内元素")]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("inline-flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"应用在-flex-container-上的-css-属性-父"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用在-flex-container-上的-css-属性-父"}},[t._v("#")]),t._v(" 应用在 flex container 上的 CSS 属性（父）")]),t._v(" "),s("h3",{attrs:{id:"flex-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[t._v("#")]),t._v(" flex-flow")]),t._v(" "),s("p",[t._v("flex-flow 是 flex-direction || flex-wrap 的简写")]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 从左到右、多行 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"flex-direction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[t._v("#")]),t._v(" flex-direction")]),t._v(" "),s("p",[t._v("决定主轴（X 轴）的方向")]),t._v(" "),s("ul",[s("li",[t._v("row: 从左到右(默认)")]),t._v(" "),s("li",[t._v("row-reverse: 从右到左")]),t._v(" "),s("li",[t._v("column: 从上到下")]),t._v(" "),s("li",[t._v("column-reverse: 从下到上")])]),t._v(" "),s("h3",{attrs:{id:"flex-wrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[t._v("#")]),t._v(" flex-wrap")]),t._v(" "),s("p",[t._v("决定了 flex container 是单行还是多行")]),t._v(" "),s("ul",[s("li",[t._v("nowrap: 单行显示（默认）")]),t._v(" "),s("li",[t._v("wrap: 多行")]),t._v(" "),s("li",[t._v("wrap-reverse: 反转主轴（X 轴）和交叉轴（Y 轴）")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("默认情况下，所有的 flex item 都会在同一行显示(nowrap)")])]),t._v(" "),s("h3",{attrs:{id:"justify-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[t._v("#")]),t._v(" justify-content")]),t._v(" "),s("p",[t._v("决定了 flex items 在主轴（X 轴）上的对齐方式")]),t._v(" "),s("ul",[s("li",[t._v("flex-start: 与起始位置对齐")]),t._v(" "),s("li",[t._v("center: 居中对齐")]),t._v(" "),s("li",[t._v("flex-end: 与终止位置对齐")]),t._v(" "),s("li",[t._v("space-evenly: 将 item 均等分开，item 之间的距离相等")]),t._v(" "),s("li",[t._v("space-around: item 之间的距离相等且两边空出一部分（距离是 item 间距的一半）")]),t._v(" "),s("li",[t._v("space-between: 两端对齐，第一个子元素和最后一个子元素会贴着边框")])]),t._v(" "),s("h3",{attrs:{id:"align-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[t._v("#")]),t._v(" align-items")]),t._v(" "),s("p",[t._v("决定了 flex items 在交叉轴（Y 轴）上的对齐方式")]),t._v(" "),s("ul",[s("li",[t._v("flex-start: 与起始位置对齐")]),t._v(" "),s("li",[t._v("center: 居中对齐")]),t._v(" "),s("li",[t._v("flex-end: 与终止位置对齐")]),t._v(" "),s("li",[t._v("baseline: 与基准线对齐")]),t._v(" "),s("li",[t._v("stretch: 自动拉伸")]),t._v(" "),s("li",[t._v("normal: 自动拉伸")])]),t._v(" "),s("h3",{attrs:{id:"align-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[t._v("#")]),t._v(" align-content")]),t._v(" "),s("p",[t._v("决定了 "),s("strong",[t._v("多行")]),t._v(" flex items 在交叉轴（Y 轴）上的对齐方式，用法与 justify-content 类似")]),t._v(" "),s("ul",[s("li",[t._v("stretch: 自动拉伸 (默认值)")]),t._v(" "),s("li",[t._v("flex-start: 与起始位置对齐（依次对齐）")]),t._v(" "),s("li",[t._v("center :居中对齐")]),t._v(" "),s("li",[t._v("flex-end: 与终止位置对齐")]),t._v(" "),s("li",[t._v("space-between: flex items 之间的距离相等，与 cross start、 cross end 两端对齐")]),t._v(" "),s("li",[t._v("space-around: item 之间的距离相等且两边空出一部分（距离是 item 间距的一半）")]),t._v(" "),s("li",[t._v("space-evenly: 将 item 均等分开，item 之间的距离相等")])]),t._v(" "),s("h2",{attrs:{id:"应用在-flex-items-上的-css-属性-子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用在-flex-items-上的-css-属性-子"}},[t._v("#")]),t._v(" 应用在 flex items 上的 CSS 属性（子）")]),t._v(" "),s("h3",{attrs:{id:"flex-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-了解"}},[t._v("#")]),t._v(" flex（了解）")]),t._v(" "),s("p",[t._v("flex-grow || flex-shrink I| flex-basis 的简写,flex 属性可以指定 1 个, 2 个或 3 个值")]),t._v(" "),s("p",[t._v("单值语法：值必须为以下其中之一：")]),t._v(" "),s("ul",[s("li",[t._v("一个无单位数("),s("code",[t._v("<number>")]),t._v("):它会被当作"),s("code",[t._v("<flex-grow>")]),t._v(" 的值")]),t._v(" "),s("li",[t._v("一个有效的宽度(width)值:它会被当作"),s("code",[t._v("<flex-basis>")]),t._v("的值")]),t._v(" "),s("li",[t._v("关键字 nohe , auto 或 initial")])]),t._v(" "),s("p",[t._v("双值语法："),s("br"),t._v("\n第一个值必须为一个无单位数,并且它会被当作"),s("code",[t._v("<flex-grow>")]),t._v("的值\n第二个值必须为以下之一：")]),t._v(" "),s("ul",[s("li",[t._v("一个无单位数:它会被当作"),s("code",[t._v("<flex-shrink>")]),t._v("的值")]),t._v(" "),s("li",[t._v("一个有效的宽度值:它会被当作< flex-basis> 的值")])]),t._v(" "),s("p",[t._v("三值语法:")]),t._v(" "),s("ul",[s("li",[t._v("第一个值必须为一个无单位数，并且它会被当作"),s("code",[t._v("<flex-grow>")]),t._v("的值")]),t._v(" "),s("li",[t._v("第二个值必须为一个无单位数，并且它会被当作< flex-shrink>的值")]),t._v(" "),s("li",[t._v("第三个值必须为一个有效的宽度值，并且它会被当作"),s("code",[t._v("<flex-basis>")]),t._v("的值")])]),t._v(" "),s("h3",{attrs:{id:"flex-grow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[t._v("#")]),t._v(" flex-grow")]),t._v(" "),s("p",[t._v("决定了 flex items 如何扩展")]),t._v(" "),s("p",[t._v("可以设置任意非负数字(正小数、正整数、0) , 默认值是 0\n当 flex container 在 main axis 方向.上有剩余 size 时, flex-grow 属性才会有效")]),t._v(" "),s("ul",[s("li",[t._v("如果所有 flex items 的 flex-grow 总和 sum 超过 1 ,每个 flex item 扩展的 size 为：\nflex container 的剩余 size * flex-grow / sum")]),t._v(" "),s("li",[t._v("如果所有 flex items 的 flex-grow 总和不超过 1 ,每个 flex item 扩展的 size 为：\nflex container 的剩余 size * flex-grow")])]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"flex-basis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[t._v("#")]),t._v(" flex-basis")]),t._v(" "),s("p",[t._v("设置 flex items 在 main axis 方向,上的 base size")]),t._v(" "),s("p",[t._v("优先级（高到低）：")]),t._v(" "),s("ul",[s("li",[t._v("max-width\\max-height\\min-width\\min-height")]),t._v(" "),s("li",[t._v("flex-basis")]),t._v(" "),s("li",[t._v("width\\height")]),t._v(" "),s("li",[t._v("内容本身的 size")])]),t._v(" "),s("h3",{attrs:{id:"flex-shrink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[t._v("#")]),t._v(" flex-shrink")]),t._v(" "),s("p",[t._v("决定 flex items 如何收缩")]),t._v(" "),s("ul",[s("li",[t._v("可以设置任意非负数字(正小数、正整数、0) , 默认值是 1")]),t._v(" "),s("li",[t._v("当 flex items 在 main axis 方向.上超过了 flex container 的 size , flex-shrink 属性才会有效")]),t._v(" "),s("li",[t._v("如果所有 flex items 的 flex-shrink 总和超过 1 ,每个 flex item 收缩的 size 为：\nflex items 超出 flex container 的 size * 收缩比例/所有 flex items 的收缩比例之和")]),t._v(" "),s("li",[t._v("如果所有 flex items 的 flex-shrink 总和 sum 不超过 1 ,每个 flex item 收缩的 size 为：\nflex items 超出 flex container 的 size *sum *收缩比例/所有 flex items 的收缩比例之和"),s("br"),t._v("\n收缩比例 = flex-shrink * flex item 的 base size\nbase size 就是 flex item 放入 flex container 之前的 size")])]),t._v(" "),s("h3",{attrs:{id:"order-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order-了解"}},[t._v("#")]),t._v(" order（了解）")]),t._v(" "),s("p",[t._v("决定 flex items 的排布顺序")]),t._v(" "),s("ul",[s("li",[t._v("可以设置任意整数(正整数、负整数、0) ,值越小就越排在前面")]),t._v(" "),s("li",[t._v("默认值是 0")])]),t._v(" "),s("h3",{attrs:{id:"align-self-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-self-了解"}},[t._v("#")]),t._v(" align-self（了解）")]),t._v(" "),s("p",[t._v("可以通过 align-self 覆盖 flex container 设置的 align-items")]),t._v(" "),s("ul",[s("li",[t._v("auto: 遵从 flex container 的 align-items 设置(默认值)")]),t._v(" "),s("li",[t._v("stretch、flex-start、 flex-end、 center、 baseline ,效果跟 align-items- -致")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/qcloud1001/p/9848619.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 分钟彻底弄懂 flex 布局"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);