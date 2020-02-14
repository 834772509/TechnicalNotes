# Python 笔记


## Python简介
Python是脚本语言  
脚本语言(Scripting language)是电脑编程语言，因此也能让开发者藉以编写出让电脑听命行事的程序。以简单的方式快速完成某些复杂的事情通常是创造脚本语言的重要原则，基于这项原则，使得脚本语言通常比 C语言、C++语言或 Java 之类的系统编程语言要简单容易


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

## 函数

### 声明

def 函数名():

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
### 窗口Demo：
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
