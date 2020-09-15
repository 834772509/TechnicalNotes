# Flask

## 安装

`pip install Flask`

## 模板

```Python
from flask import Flask

app = Flask(__name__)

def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)
```

::: tip 提示

- 在`app.run()`中加入`debug=True`即可自动刷新修改
- 在`app.run()`中加入`threaded=True`即可开启多线程
- 在`app.run()`中加入`post=8000`即可指定端口号
- 在`app.run()`中加入`host=127.0.0.1`即可指定 IP 地址
- 增加`Flask_ENV="develop"`环境变量即可设置生产环境
  :::

## 配置跳转

```Python
@app.route('/路径')
def 方法名称():
    return "内容"

# methods用于指定请求方式（默认GET）
@app.route('/路径',methods=['GET','POST'])
def 方法名称():
    return "内容"
```

## 返回跳转

```Python
from flask import redirect, url_for

@app.route('/路径')
def 方法名称():
    return redirect(url_for('blue.get_any', an='a'))
```

## 路径传参

```Python
@app.route('/路径/<参数名称>')
def 方法名称(参数名称):
    return 参数名称
```

限制数据类型：

```Python
@app.route('/路径/<数据类型:参数名称>')
def 方法名称(参数名称):
    return 参数名称
```

数据类型可取值：

- `int` 接收整型
- `float` 接收浮点型
- `string` 接收没有任何斜杠'/'的数据
- `path` 接收从 path 修饰开始的后面所有内容
- `uuid` 只接收 uuid 字符串，唯一码
- `any` 可以指定多种路径，进行限定  
   只能访问/ a、/b 路径：  
   @app.route('/路径/<any(a,b):参数名称>')

## URL 传参

```Python
from flask import request

@app.route('/路径')
def 方法名称(参数名称):
    print(request.args)
    # 获取指定值
    print(request.args['GET参数名'])
    # 获取指定key对应的所有值
    print(request.args.getlist('GET参数名'))
    return 参数名称
```

使用：`http:///网址/路径?GET参数1=值&GET参数2=值`

## 蓝图

蓝图是用于管理视图的一种方案

```Python
from .蓝图名称 import 蓝图名称

def init_view(app):
    app.register_blueprint(蓝图名称)

```

蓝图名称.py

```Python
from flask import Blueprint

blue = Blueprint('蓝图名称', __name__)

@blue.route('/')
def index():
    return 'Hello, World'
```

## 渲染模板

渲染模板用于后端渲染 HTML5 页面并返回至客户端

```Python
from flask import render_template

@app.route('/html')
def HTML():
    return render_template('HTML5路径', 参数名=参数值)
```

templates\XXX.html

```HTML
<!doctype html>
<h1>{{参数名}}</h1>
```

## Flsak-Script

Flask-Script 是用来管理命令行的相关命令

### 安装

`pip install Flask-Script`

### 使用

```Python
from flask_script import Manager

manager = Manager(app)

@manager.command
def hello():
    print "hello"

if __name__ == "__main__":
    manager.run()
```

运行 XXX.py hello  
输出：`hello`

## Flsak-jsonify

Flsak-jsonify 用来数据进行格式化为 json 数据

```Python
from flask import jsonify

dara = {'字段': 值}
return jsonify(dara)
```

## SQLAlchemy 数据库

### 安装

`pip install pymysql`
`pip install flask-sqlalchemy`

### 解决跨域问题

`pip install flask_cors`

```Python
from flask_cors import *

CORS(app, supports_credentials=True)
```

### 常用的 SQLAlchemy 字段类型

| 类型名       | python 中类型      | 说明                                                  |
| ------------ | ------------------ | ----------------------------------------------------- |
| Integer      | int                | 普通整数，一般是 32 位                                |
| SmallInteger | int                | 取值范围小的整数，一般是 16 位                        |
| BigInteger   | int 或 long        | 不限制精度的整数                                      |
| Float        | float              | 浮点数                                                |
| Numeric      | decimal\.Decimal   | 普通整数，一般是 32 位                                |
| String       | str                | 变长字符串                                            |
| Text         | str                | 变长字符串，对较长或不限长度的字符串做了优化          |
| Unicode      | unicode            | 变长 Unicode 字符串                                   |
| UnicodeText  | unicode            | 变长 Unicode 字符串，对较长或不限长度的字符串做了优化 |
| Boolean      | bool               | 布尔值                                                |
| Date         | datetime\.date     | 时间                                                  |
| Time         | datetime\.datetime | 日期和时间                                            |
| LargeBinary  | str                | 二进制文件                                            |

### 常用的 SQLAlchemy 关系选项

| 选项名      | 说明                                                |
| ----------- | --------------------------------------------------- |
| primary_key | 如果为 True，代表表的主键                           |
| unique      | 如果为 True，代表这列不允许出现重复的值             |
| index       | 如果为 True，为这列创建索引，提高查询效率           |
| nullable    | 如果为 True，允许有空值，如果为 False，不允许有空值 |
| default     | 为这列定义默认值                                    |

### 连接数据库

```Python
  app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://数据库用户名:数据库密码@数据库地址:3306/数据库名"
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
```

### 定义模型

App\models.py:

```Python
from flask_sqlalchemy import SQLAlchemy

models = SQLAlchemy()

class 模型名称(models.Model):
    __tablename__ = '表名'
    字段名 = models.Column(models.字段类型)

class Student(models.Model):
    __tablename__ = 'Student'
    id = models.Column(models.Integer, primary_key=True)
    name = models.Column(models.String(20))
    password = models.Column(models.String(256))
```

::: tip 提示
表名可以不定义，默认表名为模型名称
:::

### 创建数据表

```Python
from App.models import models

models.create_all()
```

### 删除数据表

```Python
from App.models import models

models.drop_all()
```

### 查询数据

```Python
# filter方法
模型名称.query.filter(模型名称.字段名=="字段值").查询执行器()
# 访问
模型名称.query.filter(模型名称.字段名=="字段值").查询执行器().字段值

# filter_by方法
模型名称.query.filter_by(字段名="字段值").查询执行器()
# 访问
模型名称.query.filter_by(字段名="字段值").查询执行器().字段值
```

```Python
# 查询数据
print("查询的结果：", User.query.filter_by(name='zhou').all())
# 输出查询值
print("查询的结果：", User.query.filter_by(name='zhou').all().name)
# 查询数量
print("查询的结果：", User.query.filter_by(name='zhou').count())
```

::: tip 提示
`filter`功能更强大，可以实现更多的一些查询，支持比较运算符
:::

常用的 SQLAlchemy 查询执行器：

| 方法             | 说明                                           |
| ---------------- | ---------------------------------------------- |
| all\(\)          | 以列表形式返回查询的所有结果                   |
| first\(\)        | 返回查询的第一个结果，如果未查到，返回 None    |
| first_or_404\(\) | 返回查询的第一个结果，如果未查到，返回 404     |
| get\(\)          | 返回指定主键对应的行，如不存在，返回 None      |
| get_or_404\(\)   | 返回指定主键对应的行，如不存在，返回 404       |
| count\(\)        | 返回查询结果的数量                             |
| paginate\(\)     | 返回一个 Paginate 对象，它包含指定范围内的结果 |

### 增加数据

```Python
from App.models import models

对象 = 模型名称(字段名="字段值"[,字段名="字段值"])
models.session.add(对象)
models.session.commit()

# 增加多个数据
对象1 = 模型名称(字段名="字段值"[,字段名="字段值"])
对象2 = 模型名称(字段名="字段值"[,字段名="字段值"])
对象3 = 模型名称(字段名="字段值"[,字段名="字段值"])
models.session.add_all([对象1,对象2,对象3])
models.session.commit()
```

### 删除数据

```Python
from App.models import models

对象 = 模型名称(字段名="字段值")
models.session.delete(对象)
models.session.commit()
```

### 修改数据

```Python
from App.models import models

对象 = 模型名称(字段名="字段值")
对象.字段名 = "字段值"
models.session.commit()
```
