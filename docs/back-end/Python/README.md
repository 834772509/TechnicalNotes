# Python 笔记

## 配置环境

[Python 下载](https://www.python.org/downloads/windows)
[Python 中文文档](https://yiyibooks.cn/xx/python_352/index.html)

### 配置环境变量

- `\Python\`
- `\Python\Scripts`

### 配置镜像 

`\user\用户名\pip\pip.ini`

```ini
[global]
index-url=http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
```

## 导出/导出项目依赖

### 导入

`pip install -r requirements.txt`

### 导出

安装 pipreqs：`pip install pipreqs`

1. 进入项目目录
2. 输入`pipreqs ./ --encoding utf8`

## 打包程序

1. 安装 PyInstalle：`pip install pyinstaller`  
2. 打包： `pyinstaller -F -w --clean "源码路径"`

## 数据类型

### 常用数据类型

| 数据类型 |   说明   |
| -------- | :------: |
| str      |  字符串  |
| bool     | 布尔类型 |
| int      |   整形   |
| float    |  浮点型  |

转换：

- 到数值：`int(参数值)`
- 到浮点： `float(参数值)`
- 到字符串：`str(参数值)`
- 取长度：`len(参数值)`

## 基本语法

### 三元运算符

```Python
变量 = 真值 if 条件 else 假值
```

### 循环语句

- 指定循环次数

```Python
for i in range(10):
  print(i)
```

- while 循环

  ```Python
  while 条件:
    循环体
  ```

- for 循环

  ```Python
  for 目标 in 表达式:
    循环体
  ```

- range()函数：range([start], stop[, step=1])，有三个参数，中括号中的内容可选，step 是步进，这个 BIF 的作用是生成一个从 start 参数的值开始到 stop 参数的值结束的数字序列，经常与 for 循环联合使用。记住，是左闭右开区间
- break：跳出循环体
- continue：终止本轮 循环，并开始下一轮循环（如果下一轮循环的条件为真）

### print

打印指定的内容

```Python
print()
```

### input

接收用户的输入并返回

```Python
temp = input("请输入：")
```

### lambda 表达式

类似前端的箭头函数

```Python
lambda 参数1[,参数2] : 表达式
```

### 格式化字符串

```Python
print(f"内容：{变量名}")
print("内容：{}". format(变量名))
```

### 分割字符串

```Python
字符串.split(分割符)
```

### with 语法

with 语法用于简化 try 异常语句

```Python
# 捕获异常方式
with 命令 as 命令返回值:
    pass
```

## 函数

### 声明自定义函数

```Python
def 函数名():
        """
        函数说明
        :return: 返回值说明
        """
        return
def 函数名(参数1,参数2="默认值"):
        """
        函数说明
        :param 参数1: 说明
        :param 参数2: 说明
        :return: 返回值说明
        """
        return
```

## 类

```Python
class 类名:
    属性名 = 值

    def 方法名(self):
        return
    def 方法名(self,参数1,参数2):
        return
    # 初始化方法（可省略），实例化类时会自动调用
    def __init__(self):
        pass
    def __init__(self,实例属性1,实例属性2):
        pass

# 定义子类（子类拥有父类的一切特性）
class 类名(父类名):
    def __init__(self):
        # 调用父类的初始化方法（解释器不会自动执行父类初始化方法）
        父类名.__init__(self)
```

使用：

```Python
# 实例化
实例名 = 类名()
实例名 = 类名(实例属性值1,实例属性值2)
# 调用方法
实例名.方法名()
实例名.方法名(参数值1,参数值2)
# 访问属性
实例名.属性名
```

::: tip 提示

- 在方法名前加`@staticmethod`表示方法是**静态方法**（无法访问**实例属性**）
- self 参数不需要填写值
- 子类可以重写父类的属性、方法

:::

## 异常

### 语法

```Python
try:
    pass
except 错误类型:
    pass
except Exception as e:
    print(traceback.format_exc(),"未知异常：",e)
```

::: tip 提示
所有异常都是``Exception`的子类，可以匹配所有异常
:::

## 集合

集合中不允许数据重复，且没有索引

### 声明

```Python
集合名 = {0,1,2,3,4,5}
```

### 增加元素

```Python
集合名.add(元素)
```

### 删除元素

```Python
集合名.remove(元素)
```

### 判断元素是否存在

```Python
元素 in 集合名
```

## 列表

列表可以存放任何的数据类型

```Python
列表名 = [1, 字符串, 3.14, [1, 2, 3]]
```

### 添加元素

```Python
# 注意每次只能添加一个元素，被添加的元素自动添加到列表末尾
列表名.append(要添加的元素)
```

```Python
# 以列表的形式追加新元素到原列表，每次可以添加多个元素，被添加的元素自动添加到列表末尾
列表名.extend([元素1,元素2])，
```

### 插入元素

```Python
列表名.insert(追加的位置,元素)
```

### 访问元素

```Python
列表名[0]
```

## 元组

封闭的列表，一旦定义，就不可改变

### 声明

```Python
元组名 = (元素1,元素2,元素3)
```

### 返回元组中元素最大值

```Python
max(元组名)
```

### 返回元组中元素最小值

```Python
min(元组名)
```

### 比较元组

```Python
import operator

operator.eq(元组1,元组2)
```

### 计算元组元素个数

```Python
len(元组名)
```

### 将列表转换为元组

```Python
tuple(元组名)
```

### 返回某个参数在元组中的位置

```Python
元组名.index(参数)
```

### 计算某个参数在元组中出现的次数

```Python
元组名.count(参数)
```

::: tip 提示

- 当内容不被轻易改写的时候，使用元组
- 当需要频繁修改数据，使用列表

:::

## 字典

键值对的方式存储数据，没有索引

### 声明

```Python
字典名 = {
    "键1":"值1",
    "键2":"值2",
    "键3":"值3",
}
```

### 使用

```Python
字典名["键名"]
```

### 增加

```Python
字典名["键名"] = 值
```

### 修改

```Python
字典名["键名"] = 值
```

### 删除

```Python
del 字典名["键名"]
```

### 遍历

遍历键

```Python
for key in 字典名.keys():
    print(key)
```

遍历值

```Python
for value in 字典名.values():
    print(value)
```

## 绘图

```Python
import turtle

# 向左转向
turtle.left(90)

# 向右转向
turtle.left(90)

# 设置画笔颜色
turtle.pencolor('blue')

# 设置画笔宽度
turtle.pensize(10)

# 向当前方向画
turtle.forward(100)

# 向当前反方向画
turtle.backward(100)

# 抬起画笔
turtle.penup()

# 落下画笔
turtle.pendown()

# 设置单击关闭窗口退出
turtle.exitonclick()
```

## 多线程

### 使用

```Python
from threading import Thread
from time import sleep

def 函数名():
    pass

线程名 = Thread(target=函数名)
线程名.start()

def 函数名(参数1,参数2):
    pass

线程名 = Thread(target=函数名,args=('参数1', '参数2'))
线程名.start()
```

::: tip 提示

- 可使用`sleep(时间)`进行延时，单位为秒
- 可使用`线程名.join()`等待线程执行完成

:::

### 共享数据访问

解决多个线程操作数据时的冲突问题，在申请获取锁之后其他线程暂时无法访问数据，直到申请释放锁

```Python
from threading import Thread,Lock
from time import sleep

锁对象 = Lock()

def 函数名():
    # 操作共享数据前，申请获取锁
    锁对象.acquire()

    # 操作数据

    # 操作完共享数据后，申请释放锁
    锁对象.release()
```

## 文件读写

::: tip 提示
一定记得关闭文件，否则会出现一些奇怪的问题
:::

### 打开文件

```Python
# 捕获异常方式
with open(文件路径,打开方式,[encoding=编码]) as 文件对象:
# 普通方式
文件对象 = open(文件路径,打开方式,[encoding=编码])
```

```Python
f = open('tmp.txt','w',encoding='utf8')
```

打开方式（字符串）

- r : 只读
- w : 只写
- a : 在文件末尾附加
- r+ : 读写

### 写入文件

```Python
文件对象.write("内容")
```

### 读入文件

```Python
# 全部读取
全部内容 = 文件对象.read()
# 读取文件下一行
一行内容 = 文件对象.readline()
# 全部读取（返回列表，以换行符分割）
全部内容列表 = 文件对象.readlines()
```

### 关闭文件

```Python
文件对象.close()
```

## 文件和目录操作

### 创建目录

```python
import os

os.makedirs(目录路径,exist_ok=True)
```

### 删除文件或目录

- 删除文件

```Python
os.remove(文件路径)
```

- 删除目录

```Python
import shutil

shutil.rmtree(目录路径)
```

### 复制文件

```Python
from shutil import copyfile

copyfile(源文件路径, 目标文件路径)
```

::: tip 提示
如果目标路径存在，则会被复制覆盖
:::

### 复制目录

```Python
from shutil import copytree

copytree(源目录路径,目标目录路径)
```

::: tip 提示
如目标目录路径存在则会报错
:::

### 修改文件名、目录名

```Python
import os

# 修改目录名
os.rename(原目录路径,目标路径+新目录名称)
# 修改文件名
os.rename(原文件路径,文件路径+新文件名称)
```

### 对文件路径名的操作

```Python
import os

# 获取路径中的文件名部分
os.path.basename(文件路径)
# 获取路径中的目录部分
os.path.dirname(文件路径)
```

### 判断文件、目录是否存在

```Python
import os

os.path.exists(文件路径)
os.path.exists(目录路径)
```

### 判断路径是否为文件

```Python
import os

os.path.isfile(文件路径)
```

### 判断路径是否为目录

```Python
import os

os.path.isdir(目录路径)
```

### 获取目录大小

```Python
os.path.getsize(目录路径)
```

### 获取目录日期

```Python
import time

os.path.getmtime(目录路径)
time.ctime(os.path.getmtime(目录路径))
# 'Wed Apr 28 13:10:34 2010'
```

### 递归的遍历目录下面所有的文件

```Python
import os

# 目标目录
targetDir = r'd:\tmp\util\dist\check'
files = []
dirs  = []

# 下面的三个变量 dirpath, dirnames, filenames
# dirpath 代表当前遍历到的目录名
# dirnames 是列表对象，存放当前dirpath中的所有子目录名
# filenames 是列表对象，存放当前dirpath中的所有文件名

for (dirpath, 所有子目录, 所有文件名) in os.walk(targetDir):
   files += 所有文件名
   dirs += 所有子目录

print(files)
print(dirs)
```

### 得到目录中所有的文件和子目录名

```Python
import os

## 目标目录

targetDir = r'd:\tmp\util\dist\check'

files =  os.listdir(目标目录)
print(files)
```

listdir 返回的是该目录下面所有的文件和子目录。

如果我们只需要获取目录中所有的文件，或者只需要子目录，可以这样

```Python
import os
from os.path import isfile, join,isdir

## 目标目录

targetDir = r'd:\tmp\util\dist\check'

## 所有的文件

print([f for f in os.listdir(目标目录) if isfile(join(目标目录, f))])

## 所有的目录

print([f for f in os.listdir(目标目录) if isdir(join(目标目录, f))])
```

### 得到目录中指定扩展名的文件和子目录

```Python
import glob

exes = glob.glob(r'文件路径')
print(exes)
```
