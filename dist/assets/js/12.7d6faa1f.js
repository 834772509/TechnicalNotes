(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-笔记"}},[t._v("#")]),t._v(" Git 笔记")]),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("Git 官网 在国内下载有难度，建议使用阿里云镜像下载")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 官网"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 阿里云镜像下载"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[t._v("#")]),t._v(" 配置环境变量")]),t._v(" "),s("p",[s("code",[t._v("\\PortableGit\\cmd")])]),t._v(" "),s("h3",{attrs:{id:"配置用户名和邮箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置用户名和邮箱"}},[t._v("#")]),t._v(" 配置用户名和邮箱")]),t._v(" "),s("ul",[s("li",[t._v("设置用户名")])]),t._v(" "),s("p",[s("code",[t._v('git config --global user.name "XXX"')])]),t._v(" "),s("ul",[s("li",[t._v("设置邮箱 (没有双引号)")])]),t._v(" "),s("p",[s("code",[t._v("git config --global user.email XXX@qq.com")])]),t._v(" "),s("h3",{attrs:{id:"记住用户名和密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记住用户名和密码"}},[t._v("#")]),t._v(" 记住用户名和密码")]),t._v(" "),s("p",[s("code",[t._v("git config --global credential.helper store")])]),t._v(" "),s("h2",{attrs:{id:"初始化-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化-git"}},[t._v("#")]),t._v(" 初始化 Git")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('cd /d 项目目录\ngit init\ngit add .\ngit commit -m "首次提交"\ngit remote add origin "Git路径"\ngit pull --rebase origin master\n')])])]),s("h2",{attrs:{id:"导入本地仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入本地仓库"}},[t._v("#")]),t._v(" 导入本地仓库")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git remote add origin https://gitee.com/fir834772509/rust.git\ngit push -u origin master\n")])])]),s("h2",{attrs:{id:"克隆-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆-git"}},[t._v("#")]),t._v(" 克隆 Git")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone URL\n")])])]),s("h2",{attrs:{id:"拉取-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取-git"}},[t._v("#")]),t._v(" 拉取 Git")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git pull\n")])])]),s("h3",{attrs:{id:"放弃本地修改-强制拉取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#放弃本地修改-强制拉取"}},[t._v("#")]),t._v(" 放弃本地修改 强制拉取")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 下载远程仓库最新内容，不做合并\ngit fetch --all\n// 把 HEAD 指向 master 最新版本\ngit reset --hard origin/master\ngit pull //可以省略\n")])])]),s("h2",{attrs:{id:"推送-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送-git"}},[t._v("#")]),t._v(" 推送 Git")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git add -A\ngit commit -m "备注"\ngit push\n')])])]),s("h2",{attrs:{id:"查看文件变动情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件变动情况"}},[t._v("#")]),t._v(" 查看文件变动情况")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git status\n")])])]),s("h2",{attrs:{id:"暂存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂存"}},[t._v("#")]),t._v(" 暂存")]),t._v(" "),s("p",[t._v("如果当前有部分代码未提交，但需要编写其他部分代码时，则需要将当前部分代码保存至暂存区")]),t._v(" "),s("h3",{attrs:{id:"暂存-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂存-2"}},[t._v("#")]),t._v(" 暂存")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git stash\n//撤销未提交的修改\ngit checkout\n")])])]),s("h3",{attrs:{id:"取出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取出"}},[t._v("#")]),t._v(" 取出")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git stash pop\n")])])]),s("h2",{attrs:{id:"撤销修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[t._v("#")]),t._v(" 撤销修改")]),t._v(" "),s("h3",{attrs:{id:"撤销未提交修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销未提交修改"}},[t._v("#")]),t._v(" 撤销未提交修改")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout 路径\n")])])]),s("h3",{attrs:{id:"撤销已提交修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销已提交修改"}},[t._v("#")]),t._v(" 撤销已提交修改")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git reset HEAD 路径\ngit checkout 路径\n")])])]),s("h2",{attrs:{id:"修复-push-失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复-push-失败"}},[t._v("#")]),t._v(" 修复 push 失败")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git merge --abort\ngit reset --merge\ngit pull\n")])])]),s("h2",{attrs:{id:"删除排除目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除排除目录"}},[t._v("#")]),t._v(" 删除排除目录")]),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git rm -rf .idea\ngit commit -m "删除排除目录"\ngit push origin master\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);