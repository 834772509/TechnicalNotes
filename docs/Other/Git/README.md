# Git 笔记

## 环境搭建

### 配置环境变量

```\PortableGit\cmd```

### 配置用户名和邮箱

* 设置用户名

```git config --global user.name "XXX"```

* 设置邮箱 (没有双引号)

```git config --global user.email XXX@qq.com```

### 记住用户名和密码

``git config --global credential.helper store``

## 初始化Git

``` cmd
cd /d 项目目录
git init
git add .
git commit -m "首次提交"
git remote add origin "Git路径"  
git pull --rebase origin master
```

## 克隆Git

``` cmd
git clone URL
```

## 拉取Git

``` cmd
git pull
```

## 推送Git

``` cmd
git add -A
git commit -m "备注"
git push
```

## 查看文件变动情况

``` cmd
git status
```

## 暂存

如果当前有部分代码未提交，但需要编写其他部分代码时，则需要将当前部分代码保存至暂存区

### 暂存

``` cmd
git stash
//撤销未提交的修改
git checkout
```

### 取出

``` cmd
git stash pop
```

## 撤销修改

### 撤销未提交修改

``` cmd
git checkout 路径
```

### 撤销已提交修改

``` cmd
git reset HEAD 路径
git checkout 路径
```

## 修复push失败

``` cmd
git merge --abort
git reset --merge
git pull
```

## 删除排除目录

``` cmd
git rm -rf .idea
git commit -m "删除排除目录"
git push origin master
```
