# Python 笔记

## Python简介

Python是脚本语言  
脚本语言(Scripting language)是电脑编程语言，因此也能让开发者藉以编写出让电脑听命行事的程序。以简单的方式快速完成某些复杂的事情通常是创造脚本语言的重要原则，基于这项原则，使得脚本语言通常比 C语言、C++语言或 Java 之类的系统编程语言要简单容易

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

## 打包程序

安装PyInstalle：```pip install pyinstaller```

```  bat
@echo off
rem set /p exepath=请输入Python源码的位置：
set exepath=D:\Homework\Python\_窗口Demo.py
pyinstaller -F -w --clean "%exepath%"
```

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
print("内容：{}". format(字符串))
```

### 分割字符串

``` Python
字符串.split(分割符)
```

### with语法

with语法用于简化try异常语句

``` Python
# 捕获异常方式
with 命令 as 命令返回值
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

## QT界面

* PyQt是GPLv3协议，大意是你的程序中用了它，你的程序就要开源，如果闭源商用就会违反协议（后果自负，脸皮够厚无所谓）。除非你搞封装动态加载那一套来强行规避。
* PySide是LGPL协议，如果你只是作为库用用它，你的程序还是可以闭源商用。

### 安装 PySide2

```pip install pyside2```

### 界面设计师 Qt Designer

路径:```\Pyhton\Lib\site-packages\PySide2\designer.exe```

### 动态加载UI文件

有了界面定义文件，我们的Python程序就可以从文件中加载UI定义，并且动态 创建一个相应的窗口对象。

``` Python
from PySide2.QtWidgets import QApplication, QMessageBox
from PySide2.QtUiTools import QUiLoader

class Stats:
    def __init__(self):
        # 从文件中加载UI定义

        # 从 UI 定义中动态 创建一个相应的窗口对象
        # 注意：里面的控件对象也成为窗口对象的属性了
        # 比如 self.ui.button , self.ui.textEdit
        self.ui = QUiLoader().load('main.ui')
        self.ui.pushButton.clicked.connect(self.事件方法)

    def 事件方法(self):
        #事件方法
app = QApplication([])
stats = Stats()
stats.ui.show()
app.exec_()
```

### 转化UI文件为Python代码

``` Python
pyside2-uic main.ui > ui_main.py
```

::: details 点击查看代码

``` Python
from PySide2.QtWidgets import QApplication,QMainWindow
from ui_main import Ui_MainWindow

class MainWindow(QMainWindow):

    def __init__(self):
        super().__init__()
        # 使用ui文件导入定义界面类
        self.ui = Ui_MainWindow()
        # 初始化界面
        self.ui.setupUi(self)

        # 使用界面定义的控件，也是从ui里面访问
        self.ui.webview.load('http://www.baidu.com')

app = QApplication([])
mainw = MainWindow()
mainw.show()
app.exec_()
```

:::

### 按钮 QPushButton

**信号：被点击**

``` Python
button.clicked.connect(事件函数名)
```

**方法：改变文本**

``` Python
button.setText(文本内容)
```

### 标签 QLabel

**方法：改变文本**  
代码中可以使用 setText 方法来改变标签文本内容

``` Python
button.setText(text)
```

### 单行文本框 QLineEdit

**信号：文本被修改**  
当文本框中的内容被键盘编辑，被点击就会发出 textChanged 信号，可以这样指定处理该信号的函数

``` Python
edit.textChanged.connect(事件方法)
```

**方法：获取文本**  
通过 text 方法获取编辑框内的文本内容

``` Python
text = edit.text()
```

**方法：设置提示**  
通过 setPlaceholderText 方法可以设置提示文本内容

``` Python
edit.setPlaceholderText('提示内容')
```

**方法：设置文本**  
通过 setText 方法设置编辑框内的文本内容为参数里面的文本字符串

``` Python
edit.setText("文本")
```

原来的所有内容会被清除

**方法：清除所有文本**  
clear 方法可以清除编辑框内所有的文本内容

``` Python
edit.clear()
```

**方法：拷贝文本到剪贴板**  
copy 方法可以清除编辑框内所有的文本内容

``` Python
edit.copy()
```

**方法：粘贴剪贴板文本**  
paste 方法可以把剪贴板内容，拷贝到编辑框当前光标所在处

``` Python
edit.paste()
```

### 多行纯文本框 QPlainTextEdit

**信号：文本被修改**  
当文本框中的内容被键盘编辑，被点击就会发出 textChanged 信号，可以这样指定处理该信号的函数

``` Python
edit.textChanged.connect(handleTextChange)
```

**信号：光标位置改变**  
当文本框中的光标位置变动，就会发出 cursorPositionChanged 信号，可以这样指定处理该信号的函数

``` Python
edit.cursorPositionChanged.connect(handleChanged)
```

**方法：获取文本**  
通过 toPlainText 方法获取编辑框内的文本内容

``` Python
text = edit.toPlainText()
```

**方法：设置提示**  
通过 setPlaceholderText 方法可以设置提示文本内容

``` Python
edit.setPlaceholderText('请在这里输入薪资表')
```

**方法：设置文本**  
通过 setPlainText 方法设置编辑框内的文本内容为参数里面的文本字符串

``` Python
edit.setPlainText('''文本内容''')
```

原来的所有内容会被清除

**方法：在末尾添加文本**  
通过 appendPlainText 方法在编辑框末尾添加文本内容

``` Python
edit.appendPlainText('文本内容')
```

**方法：清除所有文本**  
clear 方法可以清除编辑框内所有的文本内容

``` Python
edit.clear()
```

**方法：拷贝文本到剪贴板**  
copy 方法可以清除编辑框内所有的文本内容

edit.copy()
**方法：粘贴剪贴板文本**  
paste 方法可以把剪贴板内容，拷贝到编辑框当前光标所在处

``` Python
edit.paste()
```

### 组合选择框

**信号：选项改变**  
如果用户操作修改了QComboBox中的选项就会发出 currentIndexChanged 信号，可以这样指定处理该信号的函数

``` Python
cbox.currentIndexChanged.connect(handleSelectionChange)
```

**方法：添加一个选项**  
代码中可以使用 addItem 方法来添加一个选项到 末尾 ，参数就是选项文本

``` Python
cbox.addItem('选项文本')
```

**方法：添加多个选项**  
代码中可以使用 addItems 方法来添加多个选项到 末尾，参数是包含了多个选项文本的列表

``` Python
cbox.addItems(['数据1','数据2','数据3'])
```

**方法：清空选项**  
代码中可以使用 clear 方法来清空选项，也就是删除选择框内所有的选项

``` Python
cbox.clear()
```

**方法：获取当前选项文本**  
代码中可以使用 currentText 方法来获取当前 选中的选项 的文本

``` Python
method = cbox.currentText()
```

### 列表 QListWidget

**方法：添加一个选项**  
代码中可以使用 addItem 方法来添加一个选项到 末尾 ，参数就是选项文本

``` Python
listWidget.addItem('byhy')
```

**方法：添加多个选项**  
代码中可以使用 addItems 方法来添加多个选项到 末尾，参数是包含了多个选项文本的列表

``` Python
listWidget.addItems(['数据1','数据2','数据3'])
```

**方法：删除一个选项**  
代码中可以使用 takeItem 方法来删除1个选项，参数是该选项所在行

``` Python
listWidget.takeItem(1)
```

就会删除第二行选项

**方法：清空选项**
代码中可以使用 clear 方法来清空选项，也就是删除选择框内所有的选项

``` Python
listWidget.clear()
```

**方法：获取当前选项文本**  
currentItem 方法可以得到列表当前选中项对象（QListWidgetItem） ，再调用这个对象的 text 方法，就可以获取文本内容

``` Python
listWidget.currentItem().text()
就获取了 第1行，第1列 的单元格里面的文本。
```

``` Python
listWidget.currentItem().text()
```

### 表格 QTableWidget

**方法：获取所有行数**  
代码中可以使用 rowCount 方法来获取表格所有的函数

``` Python
method = table.rowCount()
```

**方法：获取当前选中是第几行**  
代码中可以使用 currentRow 方法来获取当前选中是第几行

``` Python
method = table.currentRow()
```

::: tip 提示
行数是从0开始的， 第一行的行数是 0
:::

**方法：插入一行**  
insertRow 方法可以在指定位置插入一行

``` Python
table.insertRow(0)
```

就插入一行到第 1 行这个位置， 表格原来第1行（包括原来的第1行）以后的内容，全部往下移动一行。

``` Python
table.insertRow(2)
```

就插入一行到第 3 行这个位置， 表格原来第3行（包括原来的第3行）以后的内容，全部往下移动一行。

**方法：删除一行**  
removeRow 方法可以删除指定位置的一行

``` Python
table.removeRow(0)
```

就删除第 1 行， 表格原来第1行以后的内容，全部往上移动一行。

``` Python
table.removeRow(2)
```

就删除第 3 行， 表格原来第3行以后的内容，全部往上移动一行。

**方法：获取某个单元格文本的内容**  
item 方法可以指定位置的单元格对象（QTableWidgetItem） ，再调用这个对象的 text 方法，就可以获取文本内容

``` Python
table.item(0,0).text()
```

就获取了 第1行，第1列 的单元格里面的文本。

``` Python
table.item(2,4).text()
```

就获取了 第3行，第5列 的单元格里面的文本。

### 单选按钮 和 按钮组 QRadioButton

**说明**  
同一个父窗口 里面的多个单选按钮，只能选中一项。
如果你有多组单选按钮， 每组都应该有不同的父控件，或者不同的Layout。
通常建议：多组单选按钮，放到不同的 按钮组 QButtonGroup 中，按钮组就是父控件

**方法：获取是否选中**

``` Python
radioButton.isChecked()
```

**信号：选中状态改变**  
如果用户操作点击了按钮组 QButtonGroup 中的一个按钮， QButtonGroup 就会发出 buttonClicked 信号，可以这样指定处理该信号的函数  

``` Python
buttongroup.buttonClicked.connect(handleButtonClicked)
```

然后，在处理函数中调用QButtonGroup对象的 checkedButton() 函数，返回值就是被选中的按钮对象。  
再调用这个返回的按钮对象的 text() 方法得到界面文本，就可以知道是哪个选项被选中了。  

### 多选框 QCheckBox

**说明**  
通常建议：多组勾选按钮，放到不同的 按钮组 QButtonGroup 中，按钮组就是父控件。

**信号：选中状态改变**  
如果用户操作点击了按钮组 QButtonGroup 中的一个按钮， QButtonGroup 就会发出 buttonClicked 信号，可以这样指定处理该信号的函数

``` Python
buttongroup.buttonClicked.connect(handleButtonClicked)
```

然后，在处理函数中调用QButtonGroup对象的 checkedButton() 函数，返回值就是被选中的按钮对象。  
再调用这个返回的按钮对象的 text() 方法得到界面文本，就可以知道是哪个选项被选中了。

### 进度条 QProgressBar

**说明**  
进度条也是一个常用的控件，当程序需要做一件比较耗费时间的任务（比如统计数据，下载文件等）时，可以用来向用户指示操作的进度。
而且有了进度显示，用户就知道应用程序仍在运行，并没有出问题。
QProgressBar进度条把每个进度称之为一个step（步骤）。
我们可以通过它的 setRange 方法设定步骤个数

``` Python
progressBar.setRange(0,5)
```

就设定了，进度分为5步。
然后，通过 setValue 方法，指定当前完成到了哪一步
progressBar.setValue(3)
就表示完成了 3/5， 也就是 60%， 进度条就会显示60%的进度。
可以使用reset()将进度条倒退到开头。
有时候我们的任务没法知道完成了多少下载一个未知大小的文件。
这时，可以把range 范围都设置为0，这样，进度条会显示忙碌指示符，而不是显示进度百分比。

下面是一个进度条程序的示例代码

::: details 点击查看代码

``` Python
from PySide2.QtWidgets import QApplication, QMainWindow, QPushButton,  QProgressBar,QMessageBox
from time import sleep
from threading import  Thread

# 定义信号对象
from PySide2.QtCore import Signal,QObject
class SignalSrc(QObject):
    progress_update = Signal(int)

class Stats():
    def __init__(self):
        self.so = SignalSrc()
        # 连接信号到处理的slot函数
        self.so.progress_update.connect(self.setProgress)

        self.window = QMainWindow()
        self.window.resize(500, 400)
        self.window.move(300, 300)

        self.progressBar = QProgressBar(self.window)
        self.progressBar.resize(300, 20)
        self.progressBar.move(80, 30)
        # 进度是 0 - 5，
        self.progressBar.setRange(0,5)

        self.button = QPushButton('统计', self.window)
        self.button.move(80, 80)

        self.button.clicked.connect(self.handleCalc)

        # 统计进行中标记，不能同时做两个统计
        self.ongoing = False

    def handleCalc(self):
        def workerThreadFunc():
            self.ongoing = True
            for i in range(1,6):
                sleep(1)
                # 发出信息，通知主线程进行进度处理
                self.so.progress_update.emit(i)
            self.ongoing = False

        if self.ongoing:
            QMessageBox.warning(
                self.window,
                '警告','任务进行中，请等待完成')
            return

        worker = Thread(target=workerThreadFunc)
        worker.start()

    # 处理进度的slot函数
    def setProgress(self,value):
        self.progressBar.setValue(value)


app = QApplication([])
stats = Stats()
stats.window.show()
app.exec_()
```

:::

## Flask

### 安装

```pip install Flask```

### 模板

``` Python
from flask import Flask

app = Flask(__name__)

def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)
```

::: tip 提示

* 在```app.run()```中加入```debug=True```即可自动刷新修改
* 在```app.run()```中加入```threaded=True```即可开启多线程
* 在```app.run()```中加入```post=8000```即可指定端口号
* 在```app.run()```中加入```host=127.0.0.1```即可指定IP地址
* 增加```Flask_ENV="develop"```环境变量即可设置生产环境
:::

### 配置跳转

``` Python
@app.route('/路径')
def 方法名称():
    return "内容"

# methods用于指定请求方式（默认GET）
@app.route('/路径',methods=['GET','POST'])
def 方法名称():
    return "内容"
```

### 返回跳转

``` Python
from flask import redirect, url_for

@app.route('/路径')
def 方法名称():
    return redirect(url_for('blue.get_any', an='a'))
```

### 传参

``` Python
@app.route('/路径/<参数名称>')
def 方法名称(参数名称):
    return 参数名称
```

限制数据类型：

``` Python
@app.route('/路径/<数据类型:参数名称>')
def 方法名称(参数名称):
    return 参数名称
```

数据类型可取值：

* ```int``` 接收整型
* ```float``` 接收浮点型
* ```string``` 接收没有任何斜杠'/'的数据
* ```path``` 接收从path修饰开始的后面所有内容
* ```uuid``` 只接收uuid字符串，唯一码
* ```any``` 可以指定多种路径，进行限定  
    只能访问/ a、/b 路径：  
    @app.route('/路径/<any(a,b):参数名称>')

### GET传参

``` Python
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

使用：```http:///网址/路径?GET参数1=值&GET参数2=值```

### 蓝图

蓝图是用于管理视图的一种方案

``` Python
from .蓝图名称 import 蓝图名称

def init_view(app):
    app.register_blueprint(蓝图名称)

```

蓝图名称.py

``` Python
from flask import Blueprint

blue = Blueprint('蓝图名称', __name__)

@blue.route('/')
def index():
    return 'Hello, World'
```

### 渲染模板

渲染模板用于后端渲染HTML5页面并返回至客户端

``` Python
from flask import render_template

@app.route('/html')
def HTML():
    return render_template('HTML5路径', 参数名=参数值)
```

templates\XXX.html

``` HTML
<!doctype html>
<h1>{{参数名}}</h1>
```

### Flsak-Script

Flask-Script是用来管理命令行的相关命令

#### 安装

```pip install Flask-Script```

#### 使用

``` Python
from flask_script import Manager

manager = Manager(app)

@manager.command
def hello():
    print "hello"

if __name__ == "__main__":
    manager.run()
```

运行 XXX.py hello  
输出：```hello```

### SQLAlchemy 数据库

#### 安装

```pip install pymysql```
```pip install flask-sqlalchemy```

#### 常用的SQLAlchemy字段类型

| 类型名          | python中类型          | 说明                            |
|--------------|--------------------|-------------------------------|
| Integer      | int                | 普通整数，一般是32位                   |
| SmallInteger | int                | 取值范围小的整数，一般是16位               |
| BigInteger   | int或long           | 不限制精度的整数                      |
| Float        | float              | 浮点数                           |
| Numeric      | decimal\.Decimal   | 普通整数，一般是32位                   |
| String       | str                | 变长字符串                         |
| Text         | str                | 变长字符串，对较长或不限长度的字符串做了优化        |
| Unicode      | unicode            | 变长Unicode字符串                  |
| UnicodeText  | unicode            | 变长Unicode字符串，对较长或不限长度的字符串做了优化 |
| Boolean      | bool               | 布尔值                           |
| Date         | datetime\.date     | 时间                            |
| Time         | datetime\.datetime | 日期和时间                         |
| LargeBinary  | str                | 二进制文件                         |

#### 常用的SQLAlchemy关系选项

| 选项名          | 说明                            |
|--------------|-------------------------------|
| primary\_key | 如果为True，代表表的主键                |
| unique       | 如果为True，代表这列不允许出现重复的值         |
| index        | 如果为True，为这列创建索引，提高查询效率        |
| nullable     | 如果为True，允许有空值，如果为False，不允许有空值 |
| default      | 为这列定义默认值                      |

#### 连接数据库

``` Python
  app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://数据库用户名:数据库密码@数据库地址:3306/数据库名"
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
```

#### 定义模型

App\models.py:

``` Python
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

#### 创建数据表

``` Python
from App.models import models

models.create_all()
```

#### 删除数据表

``` Python
from App.models import models

models.drop_all()
```

#### 查询数据

``` Python

```

#### 增加数据

``` Python
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

#### 删除数据

``` Python
from App.models import models

对象 = 模型名称(字段名="字段值")
models.session.delete(对象)
models.session.commit()
```

#### 修改数据

``` Python
from App.models import models

对象 = 模型名称(字段名="字段值")
对象.字段名 = "字段值"
models.session.commit()
```

## Django

### 安装

```pip install Django```

### 创建项目

```django-admin startproject 项目名称```

### 创建应用

```python manage.py startapp 应用名称```

### 激活应用

settings.py

``` Python
INSTALLED_APPS = [
    '应用名称',
]
```

### 迁移文件

迁移文件用于创建数据表

创建迁移文件：```python manage.py makemigrations```
执行迁移文件：```python manage.py  migrate```
