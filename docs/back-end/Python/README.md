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
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=mirrors.aliyun.com
```

## 数据类型

### 常用数据类型

| 数据类型        | 说明           |
| ------------- |:-------------:|
| str  | 字符串|
| bool | 布尔类型|
| int | 整形|
| float  | 浮点型|

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

``` Python
lambda 参数1[,参数2] : 表达式
```

## 列表

列表可以存放任何的数据类型

``` Python
mix = [1, ‘小甲鱼’, 3.14, [1, 2, 3]]
```

* 向列表中添加元素（设列表的名称为member）：
* append()：member.append(要添加的元素)，注意每次只能添加一个元素，被添加的元素自动添加到列表末尾
* extend()：member.extend([元素1,元素2])，以列表的形式追加新元素到原列表，每次可以添加多个元素，被添加的元素自动添加到列表末尾
* 插入元素：insert()：member.insert(a,b)a表示要追加的位置（注意起始位置为0），b表示被插入的元素

## 元组

封闭的列表，一旦定义，就不可改变（不能添加、删除或修改）  
当我们希望内容不被轻易改写的时候，我们使用元组（把权力关进牢笼）。当我们需要频繁修改数据，我们使用列表。

``` Python
temp = (1,2,3)
```

* 元组的内置函数：  
比较两个元组的元素：operator.eq(temp1,temp2）（前提需import operator）  
计算元组元素个数：len(temp1)  
返回元组中元素最大值：max(temp1)  
返回元组中元素最小值：min(temp1)  
将列表转换为元组：tuple(list1)  

* 元组的方法：  
index：这个方法返回某个参数在元组中的位置  
count：这个方法用来计算某个参数在元组中出现的次数

## 字符串

| 方法        |           含义              |
| ------- |:---------------------------------:|
| capitalize()|把字符串的第一个字符改为大写
| casefold()|把整个字符串的所有字符改为小写
| center(width)|将字符串居中，并使用空格填充至长度width的新字符串
| count(sub[,start[,end]])|返回sub在字符串里边出现的次数，start和end参数表示范围，可选
| encode(encoding='utf-8', errors='strict')|以encoding指定的编码格式对字符串进行编码
| endswith(sub[,start[,end]])|检查字符串是否以sub子字符串结束，如果是返回True，否则返回False。start和end参数表示范围，可选
| expandtabs([tabsize=8])|把字符串中的tab符号（\t）转换为空格，如不指定参数，默认的空格数是tabsize=8
| find(sub[,start[,end]])|检测sub是否包含在字符串中，如果有则返回索引值，否则返回-1，start和end参数表示范围，可选
| index(sub[,start[,end]])|跟find方法一样，不过如果sub不在string中会产生一个异常
| isalnum()|如果字符串至少有一个字符并且所有字符都是字母或数字则返回True，否则返回False
| isalpha()|如果字符串至少有一个字符并且所有字符都是字母则返回True，否则返回False
| isdecimal()|如果字符串只包含十进制数字则返回True，否则返回False
| isdigit()|如果字符串只包含数字则返回True，否则返回False
| islower()|如果字符串中至少包含一个区分大小写的字符，并且这些字符都是小写，则返回True，否则返回False
| isnumeric()|如果字符串中只包含数字字符，则返回True，否则返回False
| isspace()|如果字符串中只包含空格，则返回True，否则返回False
| istitle()|如果字符串是标题化（所有的单词都是以大写开始，其余字母均小写），则返回True，否则返回False
| isupper()|如果字符串中至少包含一个区分大小写的字符，并且这些字符都是大写，则返回True，否则返回False
| join(sub)|以字符串作为分隔符，插入到sub中所有的字符之间。>>> str5 = 'Fishc' >>> str5.join('12345') '1Fishc2Fishc3Fishc4Fishc5'
| ljust(width)|返回一个左对齐的字符串，并使用空格填充至长度为width的新字符串
| lower()|转换字符串中所有大写字符为小写
| lstrip()|去掉字符串左边的所有空格
| partition(sub) |找到子字符串sub，把字符串分成一个3元组（pre_sub,sub,fol_sub），如果字符串中不包含sub则返回(‘原字符串’, ’’, ’’)
| replace(old,new[,count])|把字符串中的old子字符串替换成new子字符串，如果count指定，则替换不超过count次。>>> str7 = 'i love fishdm and seven' >>> str7.replace('e','E',2) 输出'i lovE fishdm and sEven'
| rfind(sub[,start[,end]]) | 类似于find()|方法，不过是从右边开始查找
| rindex(sub[,start[,end]]) | 类似于index()|方法，不过是从右边开始
| rjust(width) | 返回一个右对齐的字符串，并使用空格填充至长度为width的新字符串
| rpartition(sub)|类似于partition()|方法，不过是从右边开始查找
| rstrip()|删除字符串末尾的空格
| split(sep=None, maxsplit=-1)|不带参数默认是以空格为分隔符切片字符串，如果maxsplit参数有设置，则仅分隔maxsplit个子字符串，返回切片后的子字符串拼接的列表。>>> str7.split ()| ['i', 'love', 'fishdm', 'and', 'seven']
| splitlines(([keepends]))|按照‘\n’分隔，返回一个包含各行作为元素的列表，如果keepends参数指定，则返回前keepends行
| startswith(prefix[,start[,end]])|检查字符串是否以prefix开头，是则返回True，否则返回False。start和end参数可以指定范围检查，可选
| strip([chars])|删除字符串前边和后边所有的空格，chars参数可以定制删除的字符，可选
| swapcase()|翻转字符串中的大小写
| title()|返回标题化（所有的单词都是以大写开始，其余字母均小写）的字符串
| translate(table)|根据table的规则（可以由str.maketrans(‘a’,‘b’)定制）转换字符串中的字符。>>> str8 = 'aaasss sssaaa' >>> str8.translate(str.maketrans('s','b')) 'aaabbb bbbaaa'
| upper()|转换字符串中的所有小写字符为大写
| zfill(width)|返回长度为width的字符串，原字符串右对齐，前边用0填充

## 函数

### 声明

``` Python
def 函数名(参数1[,参数2]):
  函数体
  return
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

## 文件和目录操作

### 创建目录

os.makedirs 可以递归的创建目录结构

``` python
import os
os.makedirs('tmp/python/fileop',exist_ok=True)
```

会在当前工作目录下面创建 tmp目录，在tmp目录下面再创建 python目录，在Python目录下面再创建fileop目录  
```exist_ok=True```指定了，如果某个要创建的目录已经存在，也不报错

## 删除文件或目录

os.remove 可以删除一个文件

``` Python
os.remove('sdf.py')
```

shutil.rmtree() 可以递归的删除某个目录所有的子目录和子文件 比如

``` Python
import shutil
shutil.rmtree('tmp')
```

## 复制文件

shutil 模块里面有很多 目录文件操作的函数
复制文件，可以使用shutil模块的copyfile函数。
比如

``` Python
from shutil import copyfile
# 拷贝 d:/tools/first.py 到 e:/first.py
copyfile('d:/tools/first.py', 'e:/first.py')
```

::: tip 提示
如果复制前，e:/first.py 已经存在，则会被复制覆盖，所以使用该函数一定要小心。
:::

## 爬虫

### 环境搭建

安装Requests：
```pip install requests```

安装Beautifulsoup4：
```pip install bs4```

### 请求网址

``` Python
def open_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    }
    res = requests.get(url, headers=headers)
    return res
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
代码中可以使用 setText 方法来改变标签文本内容，比如

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

currentItem 方法可以得到列表当前选中项对象（QListWidgetItem） ，再调用这个对象的 text 方法，就可以获取文本内容，比如

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
insertRow 方法可以在指定位置插入一行，比如

``` Python
table.insertRow(0)
```

就插入一行到第 1 行这个位置， 表格原来第1行（包括原来的第1行）以后的内容，全部往下移动一行。

``` Python
table.insertRow(2)
```

就插入一行到第 3 行这个位置， 表格原来第3行（包括原来的第3行）以后的内容，全部往下移动一行。

**方法：删除一行**
removeRow 方法可以删除指定位置的一行，比如

``` Python
table.removeRow(0)
```

就删除第 1 行， 表格原来第1行以后的内容，全部往上移动一行。

``` Python
table.removeRow(2)
```

就删除第 3 行， 表格原来第3行以后的内容，全部往上移动一行。

**方法：获取某个单元格文本的内容**
item 方法可以指定位置的单元格对象（QTableWidgetItem） ，再调用这个对象的 text 方法，就可以获取文本内容，比如

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
我们可以通过它的 setRange 方法设定步骤个数，比如

``` Python
progressBar.setRange(0,5)
```

就设定了，进度分为5步。
然后，通过 setValue 方法，指定当前完成到了哪一步，比如
progressBar.setValue(3)
就表示完成了 3/5， 也就是 60%， 进度条就会显示60%的进度。
可以使用reset()将进度条倒退到开头。
有时候我们的任务没法知道完成了多少，比如下载一个未知大小的文件。
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