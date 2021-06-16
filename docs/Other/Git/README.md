# Git 笔记

## 环境搭建

### 安装

::: tip 提示
Git 官网 在国内下载有难度，建议使用阿里云镜像下载
:::

[Git 官网](https://git-scm.com/)  
[Git 阿里云镜像下载](https://npm.taobao.org/mirrors/git-for-windows)

### 配置环境变量

`\PortableGit\cmd`

### 配置用户名和邮箱

- 设置用户名

`git config --global user.name "XXX"`

- 设置邮箱 (没有双引号)

`git config --global user.email XXX@qq.com`

### 记住用户名和密码

`git config --global credential.helper store`

## 初始化 Git

```
cd /d 项目目录
git init
git add .
git commit -m "首次提交"
git remote add origin "Git路径"
git pull --rebase origin master
```

## 导入本地仓库

```
git remote add origin https://gitee.com/fir834772509/rust.git
git push -u origin master
```

## 克隆 Git

```
git clone URL
```

## 拉取 Git

```
git pull
```

### 放弃本地修改 强制拉取

```
// 下载远程仓库最新内容，不做合并
git fetch --all
// 把 HEAD 指向 master 最新版本
git reset --hard origin/master
git pull //可以省略
```

## 推送 Git

```
git add -A
git commit -m "备注"
git push
```

## 查看文件变动情况

```
git status
```

## 暂存

如果当前有部分代码未提交，但需要编写其他部分代码时，则需要将当前部分代码保存至暂存区

### 暂存

```
git stash
//撤销未提交的修改
git checkout
```

### 取出

```
git stash pop
```

## 撤销修改

### 撤销未提交修改

```
git checkout 路径
```

### 撤销已提交修改

```
git reset HEAD 路径
git checkout 路径
```

## 修复 push 失败

```
git merge --abort
git reset --merge
git pull
```

## 删除排除目录

```
git rm -rf .idea
git commit -m "删除排除目录"
git push origin master
```
