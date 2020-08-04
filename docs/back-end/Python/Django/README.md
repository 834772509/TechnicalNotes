# Django

## 安装

```pip install Django```

## 创建项目

```django-admin startproject 项目名称```

## 创建应用

```python manage.py startapp 应用名称```

## 激活应用

settings.py

``` Python
INSTALLED_APPS = [
    '应用名称',
]
```

## 迁移文件

迁移文件用于创建数据表

创建迁移文件：```python manage.py makemigrations```
执行迁移文件：```python manage.py  migrate```