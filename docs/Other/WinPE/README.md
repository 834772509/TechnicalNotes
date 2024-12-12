# WinPE 笔记

::: tip 提示
部分内容搜集于[无忧论坛](http://bbs.wuyou.net)，此处仅为集合，如有侵权请联系删除
:::

## 下载系统

- （推荐）business(商业版）: 专业版 企业版 教育版 专业教育版 专业工作站版
- consumer（消费者版）： 专业版 家庭版 家庭单语言版 教育版 专业教育版 专业工作站版

## 微软自带 WinPE 工具

- winpeshl.exe

  微软自带，有自己的脚本 winpeshl.ini 用于初始化 winpe ，程序名称是 WinPE Shell, 应该是用于初始化 winpe 外壳用的。核心是调用 wpeinit.exe 。

- wpeinit.exe
  微软自带，用于初始化 winpe ,程序名称是 WinPE Initialization Program。

- wpeutil.exe
  微软自带，用于设置 winpe ,程序名称：WinPE Utilities (Console) 。
  功能：初始化网络组件和驱动，设置页面文件，语言设置，重启，关机，更新注册表中关于启动信息的一些内容，关闭或开启网络防火墙等

  wpeutil.exe InitializeNetwork [/NoWait]
  初始化网络组件和驱动程序，并将计算机名称设置为随机选择的值。如果省略 "/NoWait"，将阻止此命令，直至获取网络地址。

- netcfg.exe
  微软自带，用于设置 网络，程序名称：WinPE network installer。
  主要功能是附带参数 -winpe ，为 Windows 预安装环境安装 TCP/IP、NetBIOS 和 Microsoft 客户端，还有安装网络服务。

- pecmd init 指令，
  pecmd.exe 自带的指令，用于初始化 winpe ,如果紧跟 shel explorer.exe 指令，就可以得到一个 最简单的 winpe 桌面环境。

## 设备管理器（替换原版系统的文件）

System32\zh-CN\compmgmt.msc
System32\zh-CN\diskmgmt.msc
System32\zh-CN\devmgmt.msc
System32\zh-CN\services.msc

## 禁用回收站

1. 删除 `HKEY_LOCAL_MACHINE_default\Software\Microsoft\Windows\CurrentVersion\Explorer\BitBucket` 下的所有内容（如无此项则创建此项）
2. 右键-权限-高级-取消勾选“包括可从该对象的父项继承的权限”-删除-确定-是

## 修改 X 盘大小

1. 替换文件（推荐）: fbwf.cfg
2. 修改注册表 `HKEY_LOCAL_MACHINE_system\ControlSet001\Services\FBWF`，`"WinPECacheThreshold"=dword:00000400`

400=1GB，3200=8GB

## boot.wim

- 卷#1 Windows PE 相当于 winpe.wim
- 卷#2 Windows Setup 相当于 winre.wim

## 创建手机引导镜像

1. UltraISO-文件-新建-软盘映像
2. 映像大小:原 iso 大小 + 15MB
3. 引导扇区:Win10/8/7/Vista
4. 将 iso 内的文件放入 img 内
5. 保存

## 修改系统属性

C:\Windows\System32\systemcpl.dll

## 删除开始菜单多余文件夹

\Users\Default\AppData\Roaming\Microsoft\Windows\Start Menu\Programs

## 注册表对应关系

- Default: [HKEY_CURRENT_USER]
- SoftWare: [HKEY_LOCAL_MACHIN]\SoftWare
- System: [HKEY_LOCAL_MACHINE]\System
- SoftWare\Classes: [HKEY_CLASSES_ROOT]

注册表服务项：

[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services]

## 夜间模式：

`HKEY_LOCAL_MACHINE_Default\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize\AppsUseLightTheme`
`HKEY_LOCAL_MACHINE_Default\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize\SystemUsesLightTheme`

- 0 : 夜间模式
- 1 : 白天模式

## iPack 图标包：

`imageres.dll` 、`imagesp1.dll` 、`zipfldr.dll`

## 修改我的电脑、回收站图标

`\windows\system32\Imageres.dll`

注意：我的电脑:1010 或 109，不是 149

## 修改默认输入法

`HKEY_LOCAL_MACHINE_Default\Keyboard Layout\Preload`

00000804 　　中文(简体)-美式键盘

## 修改任务栏右键菜单

`explorer.exe.mui`，菜单 205-2052 项

## 激活 PE

导入注册表： `HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\ProductOptions`

注意：釆用 "正常已激活的系统" 的 "ProductOptions.reg" 是真激活，但 "控制面版" 里面还是无法出现正确信息，必须自行修改。
除了修改`\Windows\System32\zh-cn\systemcpl.dll.mui`

字串表第 100 项的值以外，还可以照下图那样把第一项也改成 "Windows 已激活。
![](/file/full?type=note_img&fileid=1450339843.yhUMxbJfrQ8SHT8M7-hATw)

## 使用 Win7 任务管理器

`\Windows\System32\taskmgr.exe` (WinRE 中）
`\Windows\System32\ZH-CN\taskmgr.exe.mui` (特定文件）

## 去除登入桌面左上角个性化窗口

- 方法 1：删除 `Windows\system32\zh-CN\shell32.dll.mui` 对话框里面的 13120 项
- 方法 2：
  在 PECMD.ini 中加载 Explorer.exe 之前，添加（删除两个注册表子项）
  REGI HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\{2C7339CF-2B09-4501-B3F3-F3508C9228ED}\!
  REGI HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\{89820200-ECBD-11cf-8B85-00AA005B4340}\!

## 自适应 DPI

`HKU\.DEFAULT\Control Panel\Desktop`

Win8DPIScaling = 0
DesktopDPIOverride = 0

参考资料： https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/dpi-related-apis-and-registry-settings

## 破解主题文件

`C:\Windows\System32\Themeui.dll`
`C:\Windows\System32\Uxinit.dll`
`C:\Windows\System32\Uxtheme.dll`

## 修复 Ctfmon 提示 Unknown Hard error

增加

`\Windows\system32\Windows.web.dll`
`\Windows\system32\zh-CN\Windows.web.dll.mui`

CDP.DLL DSREG.DLL

## 修复 Dism++不显示 WinPE 的注册表

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WinPE] "Version"="10.0.18362.145"

## 修复部分程序无法输入

补充\Windows\System32\.nls 文件

## 修复服务无法创建管理单元

补充 `Windows\System32\`
`filemgmt.dll`
`hidserv.dll`
`jscript9.dll`
`mshtml.dll`

和 ZH-CN 相关文件

## 修复 WinXShell 接管系统属性

编辑 WinXShell.lua

`handle_system_property = nil` （无单引号）

## 7z 直接修改 wim 支持

imagex.exe(6.1.7600.16385 版本或者不高于 6.1.7600.16385 版即可)

`imagex.exe /boot /compress max /capture 打包路径 生成 WIM 路径 "WindowsPE"`

## 增加电池图标

Batmeter.dll
Batmeter.dll.mui

## 解决 UUP 吊销

在调用 Aria2 时加上 --check-certificate=false

## 修复系统属性左侧不显示图标

[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons]

## 解决 PE 关机、重启延时

删除
system32\
authui.dll
authui.mui
authui.num
imapi2.DLL

## 精简 WinSxS

删除没有打补丁之前的版本的文件，保留当前补丁号版本
以下目录保留一份：
`amd64*microsoft-windows-servicingstack*`
`x86*microsoft-windows-servicingstack*`

## 修复 任务管理器进程栏不显示

点击”CPU“栏后再次点击“进程”栏
