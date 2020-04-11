# Git笔记

## 配置环境变量（可省略）

```\PortableGit\cmd```

## 配置用户名和邮箱

### 设置用户名

```git config --global user.name "XXX"```

### 设置邮箱 (没有双引号)

```git config --global user.email XXX@qq.com```

## 初始化Git

``` bat
cd /d 项目目录
git init
git commit -m "首次提交"
git remote add origin "Git路径"  
git pull --rebase origin master
```

## 克隆Git

``` bat
git clone http://XXX.git
```

## 拉取Git

``` bat
git pull
```

## 推送Git

``` bat
git add -A
git commit -m "备注"
git push
```
