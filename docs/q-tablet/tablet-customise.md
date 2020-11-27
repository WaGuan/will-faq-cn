---
id: tablet-customise
title: Configuration and customisation
---

## 我能在安装DisplayLink驱动程序时设置DTU屏幕分辨率吗？

#### 问题

我想在安装DisplayLink驱动程序时将DTU显示器的分辨率设置为特定大小。

#### 解决方案
 
这无法通过DisplayLink安装程序进行。只能通过DTU-1141中存储的EDID进行设置，这将需要刷新DTU的固件。

相反，系统集成商可以编写脚本通过Powershell，命令提示符，注册表修改或通过组策略来更改分辨率。组策略还可以用于防止用户更改其显示分辨率。

---

## 配置文件 - 位置和功能

| 文件/文件夹名称        | 功能说明                                                                                                          | 位置                                    | 
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| Wacom_Tablet.dat        | 当用户登录时生成，在校准数位板或通过数位板控制面板更改设置时更新。 | C:\Users\\\[Userid]\AppData\Roaming\WTablet   |
| WacomTouch.xml          | 与触摸驱动有关，无论数位板是否支持触摸功能始终运行                   | C:\Users\\\[Userid]\AppData\Roaming\WTablet   |                                  
| Install.log             | 日志文件包含驱动程序安装的有关信息                                                                        | C:\Program Files\Tablet\Wacom               |
| App Specific Settings   | 包含驱动程序用来获取特定应用程序的预设值的预设配置文件。                     | C:\Program Files\Tablet\Wacom               |  

&nbsp;  

 要获得有关数位板自定义设置的更多帮助，请提交支持请求。

---

## 配置双显示器环境

请参阅： <a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/Dual-Monitor-Environments-with-DTU-1031.pdf" target="_blank">用DTU-1031实现双显示器</a>

---

## 为一个或多个用户创建默认设置

单个用户可以使用Wacom配置文件管理工具为DTU配置自己的首选设置。
它可以备份和还原设置-更多详细信息请查看[配置文件管理工具](../q-tablet/tablet-installation#run-the-preferences-utility-from-the-command-line)
 
根据保密协议的签署，系统管理员可以设置可应用于一个或所有用户的配置文件。

对于所有用户 - _WacomTabletDefaults.xml_ 位于 **C:\Windows\System32**

对于特定用户 - _WacomTabletUserDefaults.xml_ 位于 **%APPDATA%\wtablet** (e.g. **C:\Users\jsmith\AppData\Roaming\WTablet**). 

可以使用相同的XML值集填充这两个配置文件，以确定DTU的行为。

如果使用了任意一种类型的默认文件，则一旦用户通过数位板控制面板更改了首选项，这些更改将覆盖默认值。

当用户通过数位板配置文件管理工具清除首选项时，驱动程序将重新读取这些默认文件并重新应用其中指定的默认值。

---

## 自定义Express按键

请参阅： <a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/Customizing-ExpressKeys-on-Wacom-DTU-1031.pdf" target="_blank">自定义快捷键</a>

---

## 禁用DTH-1152的触摸

####  如何禁用DTH-1152的触摸功能？

1.  对于个人用户，请更改相应的 WacomTouch.xml文件中TDList下的<Enabled>标签的值，如下所示。

```
<TDList type="map">
      <TD_0 type="map">
        <DisplayID type="string">Display_0</DisplayID>
        <Enabled type="bool">false</Enabled>
        <FilterList type="map">
```


2.  要为系统上的所有用户实施，请将以下文件添加到System32文件夹中并删除配置文件。
 
    默认情况下，所有连接的数位板都将禁用触摸功能。 
    如果您对其他自定义设置感兴趣，请提交支持请求。

文件名: **WacomTabletDefaults-1152-notouch.xml**  
文件内容：
```
<?xml version="1.0" encoding="utf-8"?>
<!--Author: Wacom Co.,Ltd.-->
<root>

  <!-- Customize Tablet touch enabled -->
  <TouchEnabled>0</TouchEnabled>

</root>
```
---

## 隐藏显示在系统托盘中的DisplayLink设置图标

请参阅： [DisplayLink Article](https://support.displaylink.com/knowledgebase/articles/528017)

---

## 选择要用于签名捕获的监视器

注册表值可用于强制选择特定的监视器，例如：

| **32-bit Windows**                                                                                         |
|------------------------------------------------------------------------------------------------------------|
| 1. 在 **_HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\_** 下创建一个名为“sd”的键（不带引号）             |
| 2. 在该键下，创建字符串值“ WTCintiq”，并添加值 "\\.\DISPLAY2" （不带引号）     |

&nbsp;  

| **64-bit Windows**                                                                                         |
|------------------------------------------------------------------------------------------------------------|
| 1. 在 **_HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\_** 下创建一个名为“sd”的键（不带引号） |
| 2. 在该键下，创建字符串值“ WTCintiq”，并添加值 "\\.\DISPLAY2" （不带引号） |

&nbsp;  
为了简化设置值，可以从这里下载一组.reg文件： [SelectCaptureDisplay.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/SelectCaptureDisplay.zip)  

根据需要从Windows-32bit或Windows-64bit文件夹中双击所需的.reg文件。
提供了DeleteSelectDisplay.reg文件以删除设置。

---

## 系统层应用笔和数位板设置

满足上述要求的标准解决方案是使用“教室模式”配置。或者，可以使用“PrefsLocation”标签。
 
#### 教室模式

* 给定的用户（例如管理员）设置其数位板并校准得当。
* 然后，该用户将其Wacom_Tablet.dat文件复制到 C:\Windows\System32.
* 当新用户登录（或清除其首选项）时，他们将从System32中的文件继承设置，因此不会提示您进行校准。
* 然后，用户可以从控制面板更改其设置。  

 请注意：当驱动程序在用户登录或系统启动中重启动时（假设用户未清除其配置文件），那么所做的任何更改都将被从System32中Wacom_Tablet.dat文件继承的默认值覆盖。


#### "PrefsLocation" 标签

该设置允许将驱动程序更新的Wacom_Tablet.dat写入指定位置，并且该文件将应用于所有人。  
因此，如果有人更改其设置，则所有用户都将应用这些设置。
在这种情况下，必须将WacomTabletDefaults.xml（包含“ PrefsLocation”标签）放置在C:\Windows\System32.


以下是一个wacomtabletdefaults.xml文件的示例，该文件演示了如何使用PrefsLocation标记。

请注意，“课堂模式”和“ PrefsLocation”重定向之间的细微差别在于，在后者中，如果任何人清除了其配置文件，则提示将再次出现（并且需要进行校准）。 
在前者中，默认设置将保持有效。

文件名： **wacomtabletdefaults.xml**  
文件内容：
```
<?xml version="1.0" encoding="utf-8"?>
<root>
    <PrefsLocation>c:\temp\WTablet\Wacom_Tablet.dat</PrefsLocation>
</root>
```

---


 



 







---





 



