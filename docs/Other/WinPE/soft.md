# 软件相关

## 修复部分安装 BUG

创建 `X:\Program Files (x86)\Common Files` 目录，就算是空的，也必须得有。

## 增加 MSI 支持

msiexec.exe
RICHED20.DLL
MSI.DLL

## 解决照片查看器始终显示“正在加载”

补充 `\Windows\System32\Spool`、`\Windows\System32\coloradapterclient.dll`

## 解决 QQ 安装后无提示

增加
`\Windows\SysWOW64\avicap32.dll`
`\Windows\SysWOW64\rasman.dll`
`\Windows\SysWOW64\msvfw32.dll`

## 修复 初始化 Direct 运行库失败

补充 Windows\SysWOW64

```
d2d1.dll
d3d10warp.dll
d3d10_1.dll
d3d11.dll
d3d9.dll
dui70.dll
duser.dll
dwmapi.dll
DWrite.dll
DXCore.dll
dxgi.dll
dxva2.dll
```

## dism 组件必须文件

wdscore.dll

## GUI 界面必须文件

TextShaping.dll

## GUI 浏览必须文件

wldp.dll

explorer++必须文件

dui70.dll

## 关机重启必须文件

wpeutil.exe

## diskgen 必须文件

oleacc.dll
oledlg.dll

## Dism 离线集成驱动必须文件

drvstore.dll

## 分区助手 PE 版必须文件（explorer++最新的 Beta 版也需要这两个文件）

iertutil.dll
urlmon.dll

## regsvr32 必须文件

regapi.dll

## wpeinit 必须文件

dnsapi.dll
odbc32.dll

## 粘贴文件必须文件(WinXShell 必须以参数-winpe 运行）

difxapi.dll
shdocvw.dll
Windows.FileExplorer.Commonl

## 资源管理器访问 ftp 所需文件

hcproviders.dll
msieftp.dll

## 2004 世界之窗下载所需文件

SysWOW64\Windows.FileExplorer.Common.dll

## 解决世界之窗拖拽标签崩溃

拖动标签会崩需要 64 文件夹里 twinapi.dll

## 解决微信打开时提示缺文件

SysWOW64\ddraw.dll,DCIMAN32.dll

## 解决 PotPlayer 无法播放

补充 quartz.dll

## 解决向日葵远程无法安装

补充 msdmo.dll SensApi.dll

## 解决 32 位程序对话框无法打开

Syswow64\dui70.dl
