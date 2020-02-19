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
转字符串：```str()  ```  
转整数：```int()  ```  
转浮点数：```float()  ```  

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
| capitalize()|	把字符串的第一个字符改为大写
| casefold()|	把整个字符串的所有字符改为小写
| center(width)	|将字符串居中，并使用空格填充至长度width的新字符串
| count(sub[,start[,end]])	|返回sub在字符串里边出现的次数，start和end参数表示范围，可选
| encode(encoding='utf-8', errors='strict')	|以encoding指定的编码格式对字符串进行编码
| endswith(sub[,start[,end]])	|检查字符串是否以sub子字符串结束，如果是返回True，否则返回False。start和end参数表示范围，可选
| expandtabs([tabsize=8])	|把字符串中的tab符号（\t）转换为空格，如不指定参数，默认的空格数是tabsize=8
| find(sub[,start[,end]])	|检测sub是否包含在字符串中，如果有则返回索引值，否则返回-1，start和end参数表示范围，可选
| index(sub[,start[,end]])	|跟find方法一样，不过如果sub不在string中会产生一个异常
| isalnum()|	如果字符串至少有一个字符并且所有字符都是字母或数字则返回True，否则返回False
| isalpha()|	如果字符串至少有一个字符并且所有字符都是字母则返回True，否则返回False
| isdecimal()|	如果字符串只包含十进制数字则返回True，否则返回False
| isdigit()|	如果字符串只包含数字则返回True，否则返回False
| islower()|	如果字符串中至少包含一个区分大小写的字符，并且这些字符都是小写，则返回True，否则返回False
| isnumeric()|	如果字符串中只包含数字字符，则返回True，否则返回False
| isspace()|	如果字符串中只包含空格，则返回True，否则返回False
| istitle()|	如果字符串是标题化（所有的单词都是以大写开始，其余字母均小写），则返回True，否则返回False
| isupper()|	如果字符串中至少包含一个区分大小写的字符，并且这些字符都是大写，则返回True，否则返回False
| join(sub)|	以字符串作为分隔符，插入到sub中所有的字符之间。>>> str5 = 'Fishc' >>> str5.join('12345') '1Fishc2Fishc3Fishc4Fishc5'
| ljust(width)	|返回一个左对齐的字符串，并使用空格填充至长度为width的新字符串
| lower()|	转换字符串中所有大写字符为小写
| lstrip()|	去掉字符串左边的所有空格
| partition(sub) |	找到子字符串sub，把字符串分成一个3元组（pre_sub,sub,fol_sub），如果字符串中不包含sub则返回(‘原字符串’, ’’, ’’)
| replace(old,new[,count])	|把字符串中的old子字符串替换成new子字符串，如果count指定，则替换不超过count次。>>> str7 = 'i love fishdm and seven' >>> str7.replace('e','E',2) 输出'i lovE fishdm and sEven'
| rfind(sub[,start[,end]]) | 类似于find()|方法，不过是从右边开始查找
| rindex(sub[,start[,end]]) | 类似于index()|方法，不过是从右边开始
| rjust(width) | 返回一个右对齐的字符串，并使用空格填充至长度为width的新字符串
| rpartition(sub)	|类似于partition()|方法，不过是从右边开始查找
| rstrip()|	删除字符串末尾的空格
| split(sep=None, maxsplit=-1)|	不带参数默认是以空格为分隔符切片字符串，如果maxsplit参数有设置，则仅分隔maxsplit个子字符串，返回切片后的子字符串拼接的列表。>>> str7.split ()| ['i', 'love', 'fishdm', 'and', 'seven']
| splitlines(([keepends]))	|按照‘\n’分隔，返回一个包含各行作为元素的列表，如果keepends参数指定，则返回前keepends行
| startswith(prefix[,start[,end]])|	检查字符串是否以prefix开头，是则返回True，否则返回False。start和end参数可以指定范围检查，可选
| strip([chars])	|删除字符串前边和后边所有的空格，chars参数可以定制删除的字符，可选
| swapcase()|	翻转字符串中的大小写
| title()|	返回标题化（所有的单词都是以大写开始，其余字母均小写）的字符串
| translate(table)	|根据table的规则（可以由str.maketrans(‘a’,‘b’)定制）转换字符串中的字符。>>> str8 = 'aaasss sssaaa' >>> str8.translate(str.maketrans('s','b')) 'aaabbb bbbaaa'
| upper()|	转换字符串中的所有小写字符为大写
| zfill(width)	|返回长度为width的字符串，原字符串右对齐，前边用0填充


## 函数

### 声明
``` Python
def 函数名(参数1[,参数2]):
  函数体
  return
```

## 文件和目录操作

### 创建目录

os.makedirs 可以递归的创建目录结构，比如

``` python
import os
os.makedirs('tmp/python/fileop',exist_ok=True)
```

会在当前工作目录下面创建 tmp目录，在tmp目录下面再创建 python目录，在Python目录下面再创建fileop目录  
```exist_ok=True```指定了，如果某个要创建的目录已经存在，也不报错

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

### 窗口Demo

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
    # 确实提示框
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

## QT界面

* PyQt是GPLv3协议，大意是你的程序中用了它，你的程序就要开源，如果闭源商用就会违反协议（后果自负，脸皮够厚无所谓）。除非你搞封装动态加载那一套来强行规避。
* PySide是LGPL协议，如果你只是作为库用用它，你的程序还是可以闭源商用。

### 安装 PySide2

```pip install pyside2```

### 按钮事件

``` Python
button.clicked.connect(事件函数名)
```
