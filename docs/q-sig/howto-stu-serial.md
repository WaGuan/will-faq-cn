---
id: howto-stu-serial
title: 在串行模式下使用STU
---

## 在串行通信模式下使用STU  

## 硬件配置    

两种STU型号支持串行通信接口：
* STU-430V
* STU-540

签名板可配置为：  

* Human Interface Device (HID) - 标准USB连接或
* Virtual COM Port (VCP) - 通过USB的串行连接    

[STU 串行连接](../q-stu/stu-tablet#STU-Serial-Connection) 描述了如何：  

* 选择串行通讯操作方式
* 确定STU签名板连接到哪个COM端口

## Signature SDK配置

签名SDK需要以下注册表值以使用串行接口。

（在图中，签名板使用标准波特率128000连接到COM5）

#### 64位Windows上的32位签名SDK（例如：sign pro PDF安装）

  **[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]**  
  "stuPort"="COM5"  
  "stuBaudRate"=dword:0001f400  

#### 32位Windows上的32位签名SDK或64位Windows上的64位签名SDK

  **[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]**  
  "stuPort"="COM5"  
  "stuBaudRate"=dword:0001f400  


进行必要的设置后，使用[Capture Analyser](howto-test-sdk)测试签名捕获以确认安装设置。
 
---
