# WinPE 笔记


## 下载系统
* business(商业版）（推荐）:  
专业版 企业版 教育版 专业教育版 专业工作站版  
* consumer（消费者版）：  
专业版 家庭版 家庭单语言版 教育版 专业教育版 专业工作站版

## 设备管理器（替换原版系统的文件）
```
System32\zh-CN\compmgmt.msc  
System32\zh-CN\diskmgmt.msc  
System32\zh-CN\devmgmt.msc  
System32\zh-CN\services.msc
```

## 禁用回收站
删除
HKEY_LOCAL_MACHINE\_default\Software\Microsoft\Windows\CurrentVersion\Explorer\BitBucket  
下的所有内容（如无此项则创建此项），并右键-权限-高级-取消勾选“包括可从该对象的父项继承的权限”-删除-确定-是

## 修改X盘大小
1. 替换文件（推荐）
2. 修改注册表  
[HKEY_LOCAL_MACHINE\_system\ControlSet001\Services\FBWF]
"WinPECacheThreshold"=dword:00000400  
400=1GB  
3200=8GB

## boot.wim 
* 卷#1 Windows PE      相当于 winpe.wim   
* 卷#2 Windows Setup 相当于 winre.wim

## 创建img镜像文件
UltraISO-文件-新建-软盘映像  
映像大小:原iso大小 + 15MB  
引导扇区:Win10/8/7/Vista

## 修改系统属性
C:\Windows\System32\systemcpl.dll

## 修复部分安装BUG
创建
X:\Program Files (x86)\Common Files
目录，就算是空的，也必须得有。


## 增加MSI支持
msiexec.exe  
RICHED20.DLL  
MSI.DLL

## 删除开始菜单多余文件夹
\Users\Default\AppData\Roaming\Microsoft\Windows\Start Menu\Programs

## 注册表对应关系
```
Default - [HKEY_CURRENT_USER]
SoftWare - [HKEY_LOCAL_MACHIN]\SoftWare
System - [HKEY_LOCAL_MACHINE]\System
```

## 注册表服务项
[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services]

## 夜间模式
[HKEY_LOCAL_MACHINE\_Default\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize\AppsUseLightTheme]  
[HKEY_LOCAL_MACHINE\_Default\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize\SystemUsesLightTheme]  
0 : 夜间模式  
1 : 白天模式  

## iPack图标包
```
imageres.dll
imagesp1.dll
zipfldr.dll
```

## 修改我的电脑、回收站图标
\windows\system32\Imageres.dll
我的电脑:1010或109，不是149

## 修改默认输入法
HKEY_LOCAL_MACHINE\_Default\Keyboard Layout\Preload
00000804　　中文(简体)-美式键盘


## 激活PE
导入注册表：
HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\ProductOptions
釆用 "正常已激活的系统" 的 "ProductOptions.reg" 是真激活，但 "控制面版" 里面还是无法出现正确信息，必须自行修改。
除了修改\Windows\System32\zh-cn\systemcpl.dll.mui 
字串表第 100 项的值以外，还可以照下图那样把第一项也改成 "Windows 已激活。

## 任务管理器（替换原版系统的文件）
\Windows\System32\taskmgr.exe (WinRE中）
\Windows\System32\ZH-CN\taskmgr.exe.mui (特定文件）


## 去除登入桌面左上角窗口
1. 删除
Windows\system32\zh-CN\shell32.dll.mui
对话框里面的13120项

2. 在PECMD.ini中加载Explorer.exe之前，添加（删除两个注册表子项）  
REGI HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\{2C7339CF-2B09-4501-B3F3-F3508C9228ED}\!  
REGI HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\{89820200-ECBD-11cf-8B85-00AA005B4340}\!

## 自适应DPI
HKU\.DEFAULT\Control Panel\Desktop
Win8DPIScaling = 0
DesktopDPIOverride = 0

参考资料：
https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/dpi-related-apis-and-registry-settings


## 破解主题文件
```
C:\Windows\System32\Themeui.dll
C:\Windows\System32\Uxinit.dll
C:\Windows\System32\Uxtheme.dll
```

## 解决WIFI服务无法启动
补充 Windows\L2Schemas 目录文件

## 解决QQ安装后无提示
增加
```
Windows\SysWOW64\avicap32.dll
Windows\SysWOW64\rasman.dll
```

## 解决照片查看器始终显示“正在加载”
补充
```
Windows\System32\Spool
Windows\System32\coloradapterclient.dll
```

## 删除 press any key to boot from cd or dvd提示
* BIOS：删除 \boot\bootfix.bin 
* UEFI：使用efisys_noprompt.bin进行打包

## 修复Dism++不显示WinPE的注册表

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WinPE] 
"Version"="10.0.18362.145"

## 修复部分程序无法输入
补充\Windows\System32\.nls文件

## 修复服务无法创建管理单元

补充
```
Windows\System32\
filemgmt.dll
hidserv.dll
jscript9.dll
mshtml.dll
```
和ZH-CN相关文件


## 修复WinXShell接管系统属性
编辑WinXShell.lua  
handle_system_property = nil



## wimboot启动支持
\Windows\Boot\PXE\bootmgr.exe


## 修复中文字体乱码
\Windows\Fonts\segoeuib.ttf


## 修复 初始化Direct 运行库失败

补充 
```
Windows\SysWOW64
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

## 启用Administrator账户侧需要保留
```
System32\CredProv2faHelper.dll
System32\CredProvDataModel.dll
System32\credprovhost.dll
System32\credprovs.dll
System32\credprovslegacy.dll
System32\Faultrep.dll
System32\WerFault.exe
```


##  精简WinPE
1. 精简Windows目录
2. 精简System32目录
3. 精简字体 (Windows\Fonts)
4. 精简SysWOW64文件
5. 精简Winsxs文件
6. 精简注册表