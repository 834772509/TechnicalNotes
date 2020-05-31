# Python 笔记

## 配置环境

[Python 下载](https://www.python.org/downloads/windows)

环境变量：

* ```\Python\```
* ```\Python\Scripts```

## 解决pip速度慢的问题

1. 在user目录中新建pip目录
2. 新建文件pip.ini
3. 内容如下：

``` ini
[global]
index-url=http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
```

## 导出/导出项目依赖

### 导入

```pip install -r requirements.txt```

### 导出

安装pipreqs：```pip install pipreqs```

1. 进入项目目录
2. 输入```pipreqs ./ --encoding utf8```

## 打包程序

安装PyInstalle：```pip install pyinstaller```
打包：```pyinstaller -F -w --clean "源码路径"```

## 数据类型

### 常用数据类型

| 数据类型        | 说明           |
| ------------- |:-------------:|
| str  | 字符串|
| bool | 布尔类型|
| int | 整形|
| float  | 浮点型|

转换：

到数值：```int(参数值)```
到浮点：```float(参数值)```
到字符串：```str(参数值)```
取长度：```len(参数值)```

### 数据类型的转换

转字符串：```str()```  
转整数：```int()```  
转浮点数：```float()```  

## 基本语法

### 三元运算符

``` Python
small = x if x < y else y
```

### 循环语句

* while循环语句

``` Python
while 条件:
  循环体
```

* for循环语句

``` Python
for 目标 in 表达式:
    循环体

#range([起始],结束[,步长])
for 目标 in range(5):
  循环体
```

* range()函数：range([start],stop[,step=1])，有三个参数，中括号中的内容可选，step是步进，这个BIF的作用是生成一个从start参数的值开始到stop参数的值结束的数字序列，经常与for循环联合使用。记住，是左闭右开区间
* break：跳出循环体
* continue：终止本轮 循环，并开始下一轮循环（如果下一轮循环的条件为真）

### lambda表达式

类似前端的箭头函数

``` Python
lambda 参数1[,参数2] : 表达式
```

### 格式化字符串

``` Python
print(f"内容：{变量名}")
print("内容：{}". format(变量名))
```

### 分割字符串

``` Python
字符串.split(分割符)
```

### with语法

with语法用于简化try异常语句

``` Python
# 捕获异常方式
with 命令 as 命令返回值:
    pass
```

## 函数

### 声明自定义函数

``` Python
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

``` Python
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

``` Python
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

* 在方法名前加```@staticmethod```表示方法是**静态方法**（无法访问**实例属性**）
* self参数不需要填写值
* 子类可以重写父类的属性、方法

:::

## 异常

### 语法

``` Python
try:
    pass
except 错误类型:
    pass
except Exception as e:
    print(traceback.format_exc(),"未知异常：",e)
```

::: tip 提示
所有异常都是```Exception```的子类，可以匹配所有异常
:::

## 集合

集合中不允许数据重复，且没有索引

### 声明

``` Python
集合名 = {0,1,2,3,4,5}
```

### 增加元素

``` Python
集合名.add(元素)
```

### 删除元素

``` Python
集合名.remove(元素)
```

### 判断元素是否存在

``` Python
元素 in 集合名
```

## 列表

列表可以存放任何的数据类型

``` Python
列表名 = [1, 字符串, 3.14, [1, 2, 3]]
```

### 添加元素

``` Python
# 注意每次只能添加一个元素，被添加的元素自动添加到列表末尾
列表名.append(要添加的元素)
```

``` Python
# 以列表的形式追加新元素到原列表，每次可以添加多个元素，被添加的元素自动添加到列表末尾
列表名.extend([元素1,元素2])，
```

### 插入元素

``` Python
列表名.insert(追加的位置,元素)
```

### 访问元素

``` Python
列表名[0]
```

## 元组

封闭的列表，一旦定义，就不可改变

### 声明

``` Python
元组名 = (元素1,元素2,元素3)
```

### 返回元组中元素最大值

``` Python
max(元组名)
```

### 返回元组中元素最小值

``` Python
min(元组名)
```

### 比较元组

``` Python
import operator

operator.eq(元组1,元组2)
```

### 计算元组元素个数

``` Python
len(元组名)
```

### 将列表转换为元组

``` Python
tuple(元组名)  
```

### 返回某个参数在元组中的位置

``` Python
元组名.index(参数)
```

### 计算某个参数在元组中出现的次数

``` Python
元组名.count(参数)
```

::: tip 提示

* 当内容不被轻易改写的时候，使用元组
* 当需要频繁修改数据，使用列表
:::

## 字典

键值对的方式存储数据，没有索引

### 声明

``` Python
字典名 = {
    "键1":"值1",
    "键2":"值2",
    "键3":"值3",
}
```

### 使用

``` Python
字典名["键名"]
```

### 增加

``` Python
字典名["键名"] = 值
```

### 修改

``` Python
字典名["键名"] = 值
```

### 删除

``` Python
del 字典名["键名"]
```

### 遍历

遍历键

``` Python
for key in 字典名.keys():
    print(key)
```

遍历值

``` Python
for value in 字典名.values():
    print(value)
```

## 常用BIF（方法）

### print

打印指定的内容

``` Python
print()
```

### input

接收用户的输入并返回

``` Python
temp = input("请输入：")
```

## 绘图

``` Python
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

``` Python
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

* 可使用```sleep(时间)```进行延时，单位为秒
* 可使用```线程名.join()```等待线程执行完成
:::

### 共享数据访问

解决多个线程操作数据时的冲突问题，在申请获取锁之后其他线程暂时无法访问数据，直到申请释放锁

``` Python
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

``` Python
# 捕获异常方式
with open(文件路径,打开方式,[encoding=编码]) as 文件对象:
# 普通方式
文件对象 = open(文件路径,打开方式,[encoding=编码])
```

``` Python
f = open('tmp.txt','w',encoding='utf8')
```

打开方式（字符串）

* r : 只读
* w : 只写
* a : 在文件末尾附加
* r+ : 读写

### 写入文件

``` Python
文件对象.write("内容")
```

### 读入文件

``` Python
# 全部读取
全部内容 = 文件对象.read()
# 读取文件下一行
一行内容 = 文件对象.readline()
# 全部读取（返回列表，以换行符分割）
全部内容列表 = 文件对象.readlines()
```

### 关闭文件

``` Python
文件对象.close()
```

## 文件和目录操作

### 创建目录

``` python
import os

os.makedirs(目录路径,exist_ok=True)
```

### 删除文件或目录

* 删除文件

``` Python
os.remove(文件路径)
```

* 删除目录

``` Python
import shutil

shutil.rmtree(目录路径)
```

### 复制文件

``` Python
from shutil import copyfile

copyfile(源文件路径, 目标文件路径)
```

::: tip 提示
如果目标路径存在，则会被复制覆盖
:::

### 复制目录

``` Python
from shutil import copytree

copytree(源目录路径,目标目录路径)
```

::: tip 提示
如目标目录路径存在则会报错
:::

### 修改文件名、目录名

``` Python
import os

# 修改目录名
os.rename(原目录路径,目标路径+新目录名称)
# 修改文件名
os.rename(原文件路径,文件路径+新文件名称)
```

### 对文件路径名的操作

``` Python
import os

# 获取路径中的文件名部分
os.path.basename(文件路径)
# 获取路径中的目录部分
os.path.dirname(文件路径)
```

### 判断文件、目录是否存在

``` Python
import os

os.path.exists(文件路径)
os.path.exists(目录路径)
```

### 判断路径是否为文件

``` Python
import os

os.path.isfile(文件路径)
```

### 判断路径是否为目录

``` Python
import os

os.path.isdir(目录路径)
```

### 获取目录大小

``` Python
os.path.getsize(目录路径)
```

### 获取目录日期

``` Python
import time

os.path.getmtime(目录路径)
time.ctime(os.path.getmtime(目录路径))
# 'Wed Apr 28 13:10:34 2010'
```

### 递归的遍历目录下面所有的文件

``` Python
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

``` Python
import os

## 目标目录
targetDir = r'd:\tmp\util\dist\check'

files =  os.listdir(目标目录)
print(files)
```

listdir返回的是该目录下面所有的文件和子目录。

如果我们只需要获取目录中所有的文件，或者只需要子目录，可以这样

``` Python
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

``` Python
import glob

exes = glob.glob(r'文件路径')
print(exes)
```

## 爬虫

[cURL转Python代码](https://curl.trillworks.com)

### 环境搭建

安装Requests（网络请求）：
```pip install requests```

安装Beautifulsoup4（解析网页）：
```pip install bs4```

### 请求网址

``` Python
import requests

def open_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    }
    res = requests.get(url, headers=headers)
    return res
```

### 返回数据

``` Python
res = open_url("网址")
print(res.text)
```

### HTML解析

``` Python
import bs4

soup = bs4.BeautifulSoup(HTML内容, "html.parser")
解析列表 = soup.find_all("解析标签名", class_="类名")
for item in 解析列表:
    print(item.解析标签名['属性名'])
```

示例：

``` Python
import bs4

soup = bs4.BeautifulSoup(res.text, "html.parser")
titles = soup.find_all("li", class_="video-item matrix")
for item in titles:
    print(item.a['title'])
```

::: tip 提示
可使用```.get_text()```方法获取HTML标签内容
:::

### Json解析

``` Python
import json

解析Json = json.loads(Json字符串)
print(解析Json['message'])
print(解析Json['data']['message'])
```

## Tkinter

### 窗口

``` Python
from tkinter import *
root = Tk()
root.mainloop()
```

### 标签

``` Python
标签 = Label(root, text="标签")
标签.pack()
```

### 图片框

``` Python
图片框 = Label(root, image=PhotoImage(file=""))
图片框.pack()
```

### 按钮

``` Python
按钮 = Button(root, text="按钮",command=调用的方法名)
BeautifyButton(按钮)
按钮.pack()
```

### 编辑框

``` Python
编辑框 = Text(root, wrap=NONE)
编辑框.insert(END, '编辑框默认内容')
编辑框.pack()
```

### 组合框

``` Python
组合框 = ttk.Combobox(root, values=(
    '1', '2', '3', '4', '5'), state='readonly')
组合框.current(0)
组合框.pack()
```

### 下拉列表框

``` Python
w = Spinbox(root, values=("1", "2", "3", "4", "5"))
w.pack()
```

### 信息框

``` Python
# 确认提示框
messagebox.showinfo(root.title() + " - 提示", message="内容")
# 是否提示框，选择是返回YES，选择否返回NO
    messagebox.askquestion(title=root.title() + " - 提示", message="内容")
```

### 窗口Demo

::: details 点击查看代码

``` Python
import os
import subprocess
import tkinter.font as tkFont
from tkinter import *
from tkinter import Menu, messagebox, ttk, filedialog

root = Tk()
#设置窗口图标
root.iconbitmap("Icon.ico")
#设置窗口颜色
root.config(background="white")
#设置默认字体
default_font = tkFont.Font(family='微软雅黑', size=9)
root.option_add("*Font", default_font)

#增加窗口菜单
menubar = Menu(root)

菜单1 = Menu(menubar, tearoff=False)
菜单1.add_command(label="菜单项1")
菜单1.add_separator()
菜单1.add_command(label="菜单项2")
menubar.add_cascade(label="菜单1", menu=菜单1)

单选菜单 = Menu(menubar, tearoff=False)
单选菜单.add_radiobutton(label="菜单项1")
单选菜单.add_radiobutton(label="菜单项2")
menubar.add_cascade(label="单选菜单", menu=单选菜单)

多选菜单 = Menu(menubar, tearoff=False)
多选菜单.add_checkbutton(label="菜单项1")
多选菜单.add_checkbutton(label="菜单项2")
menubar.add_cascade(label="多选菜单", menu=多选菜单)

root.config(menu=menubar)
# 绑定右键菜单
root.bind("<Button-3>", lambda event: 菜单1.post(event.x_root, event.y_root))

root.title("启动窗口")
root.resizable(width=False, height=False)

#增加标签
标签1 = Label(root, text="标签", background=root.cget("background"))
标签1.pack()

#增加图片框
图片框1 = Label(root, image=PhotoImage(file=""), background=root.cget("background"))
图片框1.pack()


def BeautifyButton(Button):
    Button.config(bg="#0083EE",
                  fg="white",
                  activeforeground="white",
                  activebackground="#0088FF",
                  bd=0)
    Button.bind('<Enter>', lambda self: Button.config(bg="#0F93FF"))
    Button.bind('<Leave>', lambda self: Button.config(bg="#0083EE"))

def hi():
    # 确认提示框
    messagebox.showinfo(root.title() + " - 提示", message="内容")
    # 是否提示框，选择是返回YES，选择否返回NO
    messagebox.askquestion(title=root.title() + " - 提示", message="内容")

#增加图按钮1
按钮1 = Button(root, text="按钮1",command=hi)
BeautifyButton(按钮1)
按钮1.pack()

def ping():
    # 堵塞方法执行cmd命令
    # print(os.popen("ping 127.0.0.1").read())
    # 不堵塞执行cmd命令
    print(subprocess.Popen("ping 127.0.0.1").stdout.read())

#增加图按钮2
按钮2 = Button(root, text="按钮-执行cmd", command=ping)
BeautifyButton(按钮2)
按钮2.pack()

def fileshow():
    #打开文件对话框
    FileName = filedialog.askopenfilename(title=root.title() + " - 打开文件",filetypes=[("应用程序",".exe")])
    if FileName != "":
        print(FileName)
    #保存文件对话框
    FileName = filedialog.asksaveasfilename(title=root.title() + " - 保存文件", filetypes=[("文本文件", ".txt")])
    if FileName != "":
        print(FileName)

#增加图按钮3
按钮3 = Button(root, text="按钮-浏览", command=fileshow)
BeautifyButton(按钮3)
按钮3.pack()

#增加编辑框
编辑框1 = Text(root, wrap=NONE)
编辑框1.insert(END, '零基础入门学习Python')
编辑框1.pack()

#增加组合框
组合框1 = ttk.Combobox(root, values=(
    '1', '2', '3', '4', '5'), state='readonly')
组合框1.current(0)
组合框1.pack()

#增加下拉列表框
w = Spinbox(root, values=("1", "2", "3", "4", "5"))
w.pack()


root.mainloop()
```

:::


