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
\Windows\System32\activeds.dll
\Windows\System32\admin.ini
\Windows\System32\adsldpc.dll
\Windows\System32\adsnt.dll
\Windows\System32\apprepapi.dll
\Windows\System32\AuthExt.dll
\Windows\System32\BCP47mrm.dll
\Windows\System32\BioCredProv.dll
\Windows\System32\certca.dll
\Windows\System32\certcli.dll
\Windows\System32\certCredProvider.dll
\Windows\System32\CredDialogBroker.dll
\Windows\System32\CredProv2faHelper.dll
\Windows\System32\CredProvDataModel.dll
\Windows\System32\credprovhost.dll
\Windows\System32\credprovs.dll
\Windows\System32\cscapi.dll
\Windows\System32\cscdll.dll
\Windows\System32\dfscli.dll
\Windows\System32\FontGlyphAnimator.dll
\Windows\System32\fontgroupsoverride.dll
\Windows\System32\globinputhost.dll
\Windows\System32\gpsvc.dll
\Windows\System32\hhctrl.ocx
\Windows\System32\hhsetup.dll
\Windows\System32\hnetcfg.dll
\Windows\System32\IDStore.dll
\Windows\System32\ieframe.dll
\Windows\System32\InputHost.dll
\Windows\System32\InputSwitch.dll
\Windows\System32\itircl.dll
\Windows\System32\itss.dll
\Windows\System32\jscript.dll
\Windows\System32\logoncli.dll
\Windows\System32\LogonController.dll
\Windows\System32\LogonUI.exe
\Windows\System32\lz32.dll
\Windows\System32\mlang.dll
\Windows\System32\MrmCoreR.dll
\Windows\System32\mshtml.dll
\Windows\System32\msiltcfg.dll
\Windows\System32\msls31.dll
\Windows\System32\msoert2.dll
\Windows\System32\msvcp_win.dll
\Windows\System32\mtxex.dll
\Windows\System32\netjoin.dll
\Windows\System32\ngccredprov.dll
\Windows\System32\ngckeyenum.dll
\Windows\System32\ninput.dll
\Windows\System32\nlaapi.dll
\Windows\System32\profapi.dll
\Windows\System32\profext.dll
\Windows\System32\profprov.dll
\Windows\System32\profsvc.dll
\Windows\System32\profsvcext.dll
\Windows\System32\rasman.dll
\Windows\System32\rasplap.dll
\Windows\System32\rmclient.dll
\Windows\System32\RstrtMgr.dll
\Windows\System32\SecEdit.exe
\Windows\System32\seclogon.dll
\Windows\System32\Sens.dll
\Windows\System32\SensApi.dll
\Windows\System32\shacct.dll
\Windows\System32\SmartcardCredentialProvider.dll
\Windows\System32\su.ini
\Windows\System32\taskkill.exe
\Windows\System32\tasklist.exe
\Windows\System32\threadpoolwinrt.dll
\Windows\System32\tscon.exe
\Windows\System32\tsdiscon.exe
\Windows\System32\ucrtbase.dll
\Windows\System32\urlmon.dll
\Windows\System32\userinit.exe
\Windows\System32\userinitext.dll
\Windows\System32\usermgr.dll
\Windows\System32\usermgrcli.dll
\Windows\System32\usermgrproxy.dll
\Windows\System32\ustprov.dll
\Windows\System32\whoami.exe
\Windows\System32\wincorlib.dll
\Windows\System32\Windows.ApplicationModel.dll
\Windows\System32\Windows.Globalization.dll
\Windows\System32\Windows.Globalization.Fontgroups.dll
\Windows\System32\Windows.UI.dll
\Windows\System32\Windows.UI.Logon.dll
\Windows\System32\Windows.UI.Xaml.Controls.dll
\Windows\System32\Windows.UI.Xaml.dll
\Windows\System32\Windows.UI.Xaml.Resources.19h1.dll
\Windows\System32\Windows.UI.Xaml.Resources.Common.dll
\Windows\System32\Windows.UI.XamlHost.dll
\Windows\System32\wlidcredprov.dll
\Windows\System32\wmiclnt.dll
\Windows\System32\wuceffects.dll
\Windows\System32\en-US\windows.ui.xaml.dll.mui
\Windows\System32\zh-CN\activeds.dll.mui
\Windows\System32\zh-CN\adsnt.dll.mui
\Windows\System32\zh-CN\AuthExt.dll.mui
\Windows\System32\zh-CN\BioCredProv.dll.mui
\Windows\System32\zh-CN\certca.dll.mui
\Windows\System32\zh-CN\certcli.dll.mui
\Windows\System32\zh-CN\certcredprovider.dll.mui
\Windows\System32\zh-CN\CredDialogBroker.dll.mui
\Windows\System32\zh-CN\CredProv2faHelper.dll.mui
\Windows\System32\zh-CN\credprovhost.dll.mui
\Windows\System32\zh-CN\credprovs.dll.mui
\Windows\System32\zh-CN\gpsvc.dll.mui
\Windows\System32\zh-CN\hhctrl.ocx.mui
\Windows\System32\zh-CN\hnetcfg.dll.mui
\Windows\System32\zh-CN\ieframe.dll.mui
\Windows\System32\zh-CN\InputSwitch.dll.mui
\Windows\System32\zh-CN\jscript.dll.mui
\Windows\System32\zh-CN\LogonController.dll.mui
\Windows\System32\zh-CN\mlang.dll.mui
\Windows\System32\zh-CN\mshtml.dll.mui
\Windows\System32\zh-CN\msoert2.dll.mui
\Windows\System32\zh-CN\netjoin.dll.mui
\Windows\System32\zh-CN\ngccredprov.dll.mui
\Windows\System32\zh-CN\ngckeyenum.dll.mui
\Windows\System32\zh-CN\profext.dll.mui
\Windows\System32\zh-CN\profsvc.dll.mui
\Windows\System32\zh-CN\rasplap.dll.mui
\Windows\System32\zh-CN\rstrtmgr.dll.mui
\Windows\System32\zh-CN\secedit.exe.mui
\Windows\System32\zh-CN\seclogon.dll.mui
\Windows\System32\zh-CN\sens.dll.mui
\Windows\System32\zh-CN\SmartcardCredentialProvider.dll.mui
\Windows\System32\zh-CN\taskkill.exe.mui
\Windows\System32\zh-CN\tasklist.exe.mui
\Windows\System32\zh-CN\tscon.exe.mui
\Windows\System32\zh-CN\tsdiscon.exe.mui
\Windows\System32\zh-CN\urlmon.dll.mui
\Windows\System32\zh-CN\userinit.exe.mui
\Windows\System32\zh-CN\userinitext.dll.mui
\Windows\System32\zh-CN\usermgr.dll.mui
\Windows\System32\zh-CN\whoami.exe.mui
\Windows\System32\zh-CN\Windows.ApplicationModel.dll.mui
\Windows\System32\zh-CN\Windows.UI.Xaml.Controls.dll.mui
\Windows\System32\zh-CN\windows.ui.xaml.dll.mui
\Windows\SystemResources\certCredProvider.dll.mun
\Windows\SystemResources\ieframe.dll.mun
\Windows\SystemResources\mshtml.dll.mun
\Windows\SystemResources\rasplap.dll.mun
\Windows\SystemResources\Windows.UI.Logon
\Windows\SystemResources\Windows.UI.Logon\pris
\Windows\SystemResources\Windows.UI.Logon\Windows.UI.Logon.pri
\Windows\SystemResources\Windows.UI.Logon\pris\Windows.UI.Logon.zh-CN.pri
\Windows\syswow64\activeds.dll
\Windows\syswow64\admin.ini
\Windows\syswow64\adsldpc.dll
\Windows\syswow64\adsnt.dll
\Windows\syswow64\apprepapi.dll
\Windows\syswow64\AuthExt.dll
\Windows\syswow64\BCP47mrm.dll
\Windows\syswow64\BioCredProv.dll
\Windows\syswow64\certca.dll
\Windows\syswow64\certcli.dll
\Windows\syswow64\certCredProvider.dll
\Windows\syswow64\CredDialogBroker.dll
\Windows\syswow64\CredProv2faHelper.dll
\Windows\syswow64\CredProvDataModel.dll
\Windows\syswow64\credprovhost.dll
\Windows\syswow64\credprovs.dll
\Windows\syswow64\cscapi.dll
\Windows\syswow64\cscdll.dll
\Windows\syswow64\dfscli.dll
\Windows\syswow64\en-US
\Windows\syswow64\FontGlyphAnimator.dll
\Windows\syswow64\fontgroupsoverride.dll
\Windows\syswow64\globinputhost.dll
\Windows\syswow64\gpsvc.dll
\Windows\syswow64\hhctrl.ocx
\Windows\syswow64\hhsetup.dll
\Windows\syswow64\hnetcfg.dll
\Windows\syswow64\IDStore.dll
\Windows\syswow64\ieframe.dll
\Windows\syswow64\InputHost.dll
\Windows\syswow64\InputSwitch.dll
\Windows\syswow64\itircl.dll
\Windows\syswow64\itss.dll
\Windows\syswow64\jscript.dll
\Windows\syswow64\logoncli.dll
\Windows\syswow64\LogonController.dll
\Windows\syswow64\LogonUI.exe
\Windows\syswow64\lz32.dll
\Windows\syswow64\mlang.dll
\Windows\syswow64\MrmCoreR.dll
\Windows\syswow64\mshtml.dll
\Windows\syswow64\msiltcfg.dll
\Windows\syswow64\msls31.dll
\Windows\syswow64\msoert2.dll
\Windows\syswow64\msvcp_win.dll
\Windows\syswow64\mtxex.dll
\Windows\syswow64\netjoin.dll
\Windows\syswow64\ngccredprov.dll
\Windows\syswow64\ngckeyenum.dll
\Windows\syswow64\ninput.dll
\Windows\syswow64\nlaapi.dll
\Windows\syswow64\profapi.dll
\Windows\syswow64\profext.dll
\Windows\syswow64\profprov.dll
\Windows\syswow64\profsvc.dll
\Windows\syswow64\profsvcext.dll
\Windows\syswow64\rasman.dll
\Windows\syswow64\rasplap.dll
\Windows\syswow64\rmclient.dll
\Windows\syswow64\RstrtMgr.dll
\Windows\syswow64\SecEdit.exe
\Windows\syswow64\seclogon.dll
\Windows\syswow64\Sens.dll
\Windows\syswow64\SensApi.dll
\Windows\syswow64\shacct.dll
\Windows\syswow64\SmartcardCredentialProvider.dll
\Windows\syswow64\su.ini
\Windows\syswow64\taskkill.exe
\Windows\syswow64\tasklist.exe
\Windows\syswow64\threadpoolwinrt.dll
\Windows\syswow64\tscon.exe
\Windows\syswow64\tsdiscon.exe
\Windows\syswow64\ucrtbase.dll
\Windows\syswow64\urlmon.dll
\Windows\syswow64\userinit.exe
\Windows\syswow64\userinitext.dll
\Windows\syswow64\usermgr.dll
\Windows\syswow64\usermgrcli.dll
\Windows\syswow64\usermgrproxy.dll
\Windows\syswow64\ustprov.dll
\Windows\syswow64\whoami.exe
\Windows\syswow64\wincorlib.dll
\Windows\syswow64\Windows.ApplicationModel.dll
\Windows\syswow64\Windows.Globalization.dll
\Windows\syswow64\Windows.Globalization.Fontgroups.dll
\Windows\syswow64\Windows.UI.dll
\Windows\syswow64\Windows.UI.Logon.dll
\Windows\syswow64\Windows.UI.Xaml.Controls.dll
\Windows\syswow64\Windows.UI.Xaml.dll
\Windows\syswow64\Windows.UI.Xaml.Resources.19h1.dll
\Windows\syswow64\Windows.UI.Xaml.Resources.Common.dll
\Windows\syswow64\Windows.UI.XamlHost.dll
\Windows\syswow64\wlidcredprov.dll
\Windows\syswow64\wmiclnt.dll
\Windows\syswow64\wuceffects.dll
\Windows\syswow64\en-US\windows.ui.xaml.dll.mui
\Windows\syswow64\zh-CN\activeds.dll.mui
\Windows\syswow64\zh-CN\adsnt.dll.mui
\Windows\syswow64\zh-CN\AuthExt.dll.mui
\Windows\syswow64\zh-CN\BioCredProv.dll.mui
\Windows\syswow64\zh-CN\certca.dll.mui
\Windows\syswow64\zh-CN\certcli.dll.mui
\Windows\syswow64\zh-CN\certcredprovider.dll.mui
\Windows\syswow64\zh-CN\CredDialogBroker.dll.mui
\Windows\syswow64\zh-CN\CredProv2faHelper.dll.mui
\Windows\syswow64\zh-CN\credprovhost.dll.mui
\Windows\syswow64\zh-CN\credprovs.dll.mui
\Windows\syswow64\zh-CN\gpsvc.dll.mui
\Windows\syswow64\zh-CN\hhctrl.ocx.mui
\Windows\syswow64\zh-CN\hnetcfg.dll.mui
\Windows\syswow64\zh-CN\ieframe.dll.mui
\Windows\syswow64\zh-CN\InputSwitch.dll.mui
\Windows\syswow64\zh-CN\jscript.dll.mui
\Windows\syswow64\zh-CN\LogonController.dll.mui
\Windows\syswow64\zh-CN\mlang.dll.mui
\Windows\syswow64\zh-CN\mshtml.dll.mui
\Windows\syswow64\zh-CN\msoert2.dll.mui
\Windows\syswow64\zh-CN\netjoin.dll.mui
\Windows\syswow64\zh-CN\ngccredprov.dll.mui
\Windows\syswow64\zh-CN\ngckeyenum.dll.mui
\Windows\syswow64\zh-CN\profext.dll.mui
\Windows\syswow64\zh-CN\profsvc.dll.mui
\Windows\syswow64\zh-CN\rasplap.dll.mui
\Windows\syswow64\zh-CN\rstrtmgr.dll.mui
\Windows\syswow64\zh-CN\secedit.exe.mui
\Windows\syswow64\zh-CN\seclogon.dll.mui
\Windows\syswow64\zh-CN\sens.dll.mui
\Windows\syswow64\zh-CN\SmartcardCredentialProvider.dll.mui
\Windows\syswow64\zh-CN\taskkill.exe.mui
\Windows\syswow64\zh-CN\tasklist.exe.mui
\Windows\syswow64\zh-CN\tscon.exe.mui
\Windows\syswow64\zh-CN\tsdiscon.exe.mui
\Windows\syswow64\zh-CN\urlmon.dll.mui
\Windows\syswow64\zh-CN\userinit.exe.mui
\Windows\syswow64\zh-CN\userinitext.dll.mui
\Windows\syswow64\zh-CN\usermgr.dll.mui
\Windows\syswow64\zh-CN\whoami.exe.mui
\Windows\syswow64\zh-CN\Windows.ApplicationModel.dll.mui
\Windows\syswow64\zh-CN\Windows.UI.Xaml.Controls.dll.mui
\Windows\syswow64\zh-CN\windows.ui.xaml.dll.mui
```

##  精简WinPE

1. 精简Windows目录
2. 精简System32目录
3. 精简字体 (Windows\Fonts)
4. 精简SysWOW64文件
5. 精简Winsxs文件
6. 精简注册表