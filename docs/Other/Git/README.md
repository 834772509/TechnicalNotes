# Git笔记

## 一键初始化Git

``` bat
@echo off
set /p dirpath=请输入要初始化的路径：
set /p gitpath=请输入Git仓库路径：`

cd /d %dirpath%
git init
git commit -m "first commit"
git remote add origin "%gitpath%"  
git pull --rebase origin master
rem git push -u origin master
echo 仓库初始化完毕，可使用Vscode直接同步
pause
```

## 推送Git

``` bat
git add -A
git commit -m "备注"
git push
``` 