# Oracle 数据库笔记

## 安装

### 开启Oracle数据库服务

```
@echo off
::检查管理员权限
>NUL 2>&1 REG.exe query "HKU\S-1-5-19" || (
    ECHO SET UAC = CreateObject^("Shell.Application"^) > "%TEMP%\Getadmin.vbs"
    ECHO UAC.ShellExecute "%~f0", "%1", "", "runas", 1 >> "%TEMP%\Getadmin.vbs"
    CSCRIPT //Nologo "%TEMP%\Getadmin.vbs"& DEL /f /q "%TEMP%\Getadmin.vbs" 2>NUL& Exit)
pushd "%CD%"&& CD /D "%~dp0"

net start OracleServiceXE
net start OracleXETNSListener
net start OracleXEClrAgent
echo Oracle服务开启成功，按任意键即可关闭
pause
Net Stop OracleServiceXE
Net Stop OracleXETNSListener
Net Stop OracleXEClrAgent
goto :eof
```

### Navicat 连接

\oraclexe\app\oracle\product\11.2.0\server\network\ADMIN\tnsnames.ora

* 服务名 : XE（第一行）
* 端口 : 1521
* 用户名 : sys

``oci.dll``使用Navicat自带的``oci.dll``

