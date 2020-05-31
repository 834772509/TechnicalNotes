# QT界面

* PyQt是GPLv3协议，大意是你的程序中用了它，你的程序就要开源，如果闭源商用就会违反协议（后果自负，脸皮够厚无所谓）。除非你搞封装动态加载那一套来强行规避。
* PySide是LGPL协议，如果你只是作为库用用它，你的程序还是可以闭源商用。

## 安装 PySide2

```pip install pyside2```

## 界面设计师 Qt Designer

路径:```\Pyhton\Lib\site-packages\PySide2\designer.exe```

## 动态加载UI文件

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

## 转化UI文件为Python代码

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

## 按钮 QPushButton

**信号：被点击**

``` Python
button.clicked.connect(事件函数名)
```

**方法：改变文本**

``` Python
button.setText(文本内容)
```

## 标签 QLabel

**方法：改变文本**  
代码中可以使用 setText 方法来改变标签文本内容

``` Python
button.setText(text)
```

## 单行文本框 QLineEdit

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

## 多行纯文本框 QPlainTextEdit

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

## 组合选择框

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

## 列表 QListWidget

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

## 表格 QTableWidget

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

## 单选按钮 和 按钮组 QRadioButton

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

## 多选框 QCheckBox

**说明**  
通常建议：多组勾选按钮，放到不同的 按钮组 QButtonGroup 中，按钮组就是父控件。

**信号：选中状态改变**  
如果用户操作点击了按钮组 QButtonGroup 中的一个按钮， QButtonGroup 就会发出 buttonClicked 信号，可以这样指定处理该信号的函数

``` Python
buttongroup.buttonClicked.connect(handleButtonClicked)
```

然后，在处理函数中调用QButtonGroup对象的 checkedButton() 函数，返回值就是被选中的按钮对象。  
再调用这个返回的按钮对象的 text() 方法得到界面文本，就可以知道是哪个选项被选中了。

## 进度条 QProgressBar

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
