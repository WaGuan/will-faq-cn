---
id: stu-tablet
title: STU 安装
---
## 内容

* [STU设备规格](#STU-Device-Specifications)
* [STU驱动程序](#STU-Driver)
* [STU驱动程序-删除缓存](#STU-Driver-delete-cache)
* [STU HID诊断工具](#STU-HID-Diagnostic-Tool)
* [STU实用程序](#STU-Utilities)
* [STU串行连接](#STU-Serial-Connection)


<a id="STU-Driver"/>

---

## STU设备规格

| 型号     | 压感等级 | 采样率 | 最大笔分辨率	 | 有效屏幕区域 | 接口 |
|-----------|-----------------|---------------|-----------------|--------------------|-----|
| STU-300   | 512             | 200 Hz        | 396 x 100       | 99 x 25 mm         | USB |
| STU-430   | 1024            | 200 Hz        | 320 x 200       | 96 x 60 mm         | USB |
| STU-500   | 512             | 200 Hz        | 640 x 480       | 102 x 76 mm        | USB |
| STU-520   | 512             | 200 Hz        | 800 x 480       | 104 x 60 mm        | USB |
| STU-530   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |
| STU-540   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |
| STU-541   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |

## STU驱动程序

下载并运行 [Wacom-STU-Driver-5.4.5.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/Wacom-STU-Driver-5.4.5.exe)
<!-- EXTERNAL -->

#### 需求

在STU SDK和Wacom Signature SDK中使用彩色STU签名板必须要驱动程序。  
在Windows 8或8.1上使用任何STU签名板时，也需要该驱动程序。

#### 概要

彩色显示的STU签名板以及在Windows 8.1上使用任何STU签名板都需要驱动程序。
它允许设备使用USB批量传输来处理增加的图像数据的传输（与单色 STU签名板相比）。
在Windows 8和8.1上，它也会禁用“增强电源管理”设置。

驱动程序安装仅配置STU签名板的USB接口，并且可以在所有配置中使用，而不会产生任何不利影响。

安装需求取决于STU型号和Windows版本，如下所示：

| STU 型号        | Windows 7                        | Windows 8                                                             | Windows 10                                 |
|------------------|----------------------------------|-----------------------------------------------------------------------|--------------------------------------------|
| STU-300, STU-500 | 不需要                     | 需要以防止节电断开连接                             | 不需要  |
| STU-520          | 需要，为更快的图像上传速度 | 需要，为更快的图像上传速度和防止节电断开连接 | 需要，为更快的图像上传速度 |
| STU-430          | 不需要                     | 不需要                                                          | 不需要     |
| STU-530          | 需要，为更快的图像上传速度 | 不需要                                                          | 推荐使用以获得最佳图像上传速度 |
| STU-540          | 需要，为更快的图像上传速度 | 不需要                                                          | 推荐使用以获得最佳图像上传速度 |
| STU-541          | 需要，为更快的图像上传速度 | 不需要                                                          | 推荐使用以获得最佳图像上传速度 |

如有任何疑问，我们建议安装它。

#### 使用说明

##### 使用Wacom-STU-Driver.exe

* 运行安装程序之前，请检查STU签名板是否已断开连接。
* 下载.exe驱动程序并直接从Windows资源管理器或DOS命令行运行它。
* .exe驱动程序自动检测32或64位Windows并进行相应安装。


要查看可用选项，请使用以下命令：  

    Wacom-STU-Driver.exe /?  
  例如，对于最少的提示：  

    Wacom-STU-Driver.exe /quiet

要禁用STU连接检查：

    Wacom-STU-Driver.exe NO_STU_CHECK=1

卸载驱动程序：

    Wacom-STU-Driver.exe NO_STU_CHECK=1 /uninstall /q

##### Windows 7注意

要使用/q选项，必须以提升的模式运行安装程序以授予管理员权限，例如：

    开始 -> 所有程序 -> 附件 -> 右键单击<CMD>: '以管理员身份运行'



<a id="STU-Driver-delete-cache"/>

---

## STU 驱动程序-删除缓存

#### 下载

下载并解压缩 [reg-delete-wacom-usb-cache.zip](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/reg-delete-wacom-usb-cache.zip)
<!-- EXTERNAL -->

| 功能                                              | zip中的文件                  |
|-------------------------------------------------------|--------------------------------|
| 删除Wacom USB缓存的exe                            | reg-delete-wacom-usb-cache.exe |
| 配合支持人员指示使用的调试文件 | reg-delete-wacom-usb-cache.pdb |

#### 需求

安装STU签名板。

#### 概要

如果在安装驱动程序并尝试使用[STU实用工具](#STU-Utilities)后STU似乎无法正常工作，请使用delete cache实用工具。
从命令行或文件资源管理器运行以删除与Wacom USB设备相关的注册表项：
````
C:\Test>reg-delete-wacom-usb-cache.exe
````

#### 描述

语法: **_reg-delete-wacom-usb-cache.exe_**

首先断开STU设备的连接。  
该实用程序提示允许您更改设备。  
然后，它搜索与Wacom USB相关的Windows注册表项，并删除找到的注册表项，例如：


````
Wacom Device USB Cache Cleaner
USB\VID_056A&PID_00A1 : The operation completed successfully.
HID\VID_056A&PID_00A1 : The operation completed successfully.
Press any key...
````

完成后，重新连接STU设备，然后Windows将重新加载它。


<a id="STU-HID-Diagnostic-Tool"/>

---

## STU HID诊断工具


#### 安装

下载 [hidinfo-x86-v2.6.14745.41.zip](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/hidinfo-x86-v2.6.14745.41.zip)
<!-- EXTERNAL -->

#### 需求

安装STU签名板。 
彩色型号需要[STU驱动程序](#STU-Driver)  
下载并解压缩诊断程序才能在32或64位Windows上运行。  

#### 概要

根据支持工程师提供的指导下载并使用该工具。  
通常，您将需要在Dos提示符下运行以下命令，并通过电子邮件发送结果文本文件：  
````
C:\Test>hidinfo.exe all > hidinfo.txt
````
#### 描述

语法： **_hidinfo [选项]_**  

选项:
  * filename    显示相关的文件名
  * kernel      显示内核句柄
  * attr        显示HidD报告的HID属性
  * caps        显示功能的报告ID
  * all         显示所有
  * /?          帮助

使用命令提示符运行hidinfo.exe：  
```
C:\Test>hidinfo.exe
```
STU设备报告应类似于以下示例之一：  
> **056a:00a2:0068 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-300" SerialNumber="\x0409"**    
> **056a:00a1:0101 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-500" SerialNumber="\x0409"**    
> **056a:00a3:0101 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-520A" SerialNumber="\x0409"**  


在所示示例中，设备可访问性描述为 **[xRW]**  
* 第一个字符（“x”或“s”）表示互斥或共享访问。  
* 第二个字符（'R'）表示读取访问。  
* 第三个字符（“ W”）表示写访问。  

**_注意：默认情况下，签名软件需要对设备进行独占读写访问才能成功运行。_**  


在某些安装中，其他应用程序或已安装的驱动程序可能会以共享模式访问设备。  
在这种情况下，只能进行共享访问： **[sRW]** 表示该设备仅可用于共享读写访问。
**_请注意，这将会阻止签名软件成功运行。_**  


如果另一个应用程序已打开该设备以进行独占访问，则“ hidinfo”将无法打开该设备并报告错误。
通常是：  
```
[Open failed] [system_error:  win32api:32 The process cannot access the file because it is being used by another process. ]
```

"hidinfo"使用对Windows CreateFile API的标准API调用，通过消除过程来确定可用的访问。
它将按顺序尝试：   
>
>**CreateFile(fileName, GENERIC_READ|GENERIC_WRITE, 0                               , ...**  
>**CreateFile(fileName, GENERIC_READ              , 0                               , ...**  
>**CreateFile(fileName, 0                         , 0                               , ...**  
>**CreateFile(fileName, GENERIC_READ|GENERIC_WRITE, FILE_SHARE_READ|FILE_SHARE_WRITE, ...**    
>**CreateFile(fileName, GENERIC_READ              , FILE_SHARE_READ|FILE_SHARE_WRITE, ...**   
>**CreateFile(fileName, 0                         , FILE_SHARE_READ|FILE_SHARE_WRITE, ...**  


<a id="STU-Utilities"/>

---

## STU 实用程序

#### 安装

1. 下载，解压缩并运行 [STU 实用程序](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-utilities-x86-v1.15.0.0.zip)
2. 下载并提取 [STU 图像](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-Images.zip)
<!-- EXTERNAL -->

#### 条件

安装STU签名板。 
彩色型号需要[STU 驱动程序](#STU-Driver)  
下载并解压缩32位实用程序在32或64位Windows上运行。

#### 概要

STU实用程序是独立程序，可用于测试STU签名板的操作。  
无需安装STU SDK即可使用它们。 
在适用的情况下，包括该程序的控制台版本，由C后缀标识，例如：
```
    ClearScreenC.exe   
```
这些应用程序使用命令提示符，并且不显示窗口。

##### ClearScreen.exe
清空签名板显示屏

##### HardwareReset.exe
对签名板固件执行硬重置

##### Identify.exe
报告检测到的签名板：
 
![Identify](assets/q-stu/stu-identify.png)

此外，测试还会在LCD显示屏上显示属性。例如
````
    STU-520A fw: 1.01 Security-IC:0.4.153.24
    Bulk Driver: in use
    Tablet extent: 10400 x 6048  Pressure levels: 511
    Screen extent: 800 x 480
    Report rate: 200
    Resolution: 2540
    Encryption: DISABLED

    Uid: 00:00:00:00
````

##### PenData.exe  
使用实时笔数据报告设备连接状态：
 
![Pen data](assets/q-stu/stu-pendata.png)

##### SendToSTU.exe  
将指定的图像文件发送到设备（有关选项，请参阅/?）。  
STU-Images.zip 包含合适的图像文件：  

| STU 型号  | 图像文件名     |
|------------|------------------------|
| STU-300    | 396x100.png |
| STU-430    | 320x200.png |
| STU-500    | 640x480.png  |
| STU-520    | 800x480.png  |
| STU-530    | 800x480-530.png |
| STU-540    | 800x480-540.png  |
| STU-541    | 800x480-541.png  |


##### SoftReset.exe  
对签名板固件执行软重置
 
<a id="STU-Serial-Connection"/>

---

## STU 串行连接

* [安装](#installation)
* [概述](#overview)
* [实用工具](#utilities)
  * [query](#query)
  * [getSerialPorts](#getserialports)
  * [simpleInterface](#simpleinterface)
  * [hid2serial](#hid2serial)
  * [serial2hid](#serial2hid)
  * [DemoButtons](#demobuttons)

#### 安装

下载 
[**串行连接实用程序**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/serial-connection.zip)
 and 
[**DemoButtons测试工具**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/DemoButtonsSerial.zip)
<!-- EXTERNAL -->


串行连接实用程序zip文件包含以下工具：

| 工具               | 描述                                                 |
|-----------------------|-------------------------------------------------------------|
| query.exe             | 显示STU固件信息 |
| simpleInterface.exe   | 显示实时笔数据 |
| hid2serial.exe        | 从HID切换到串行 |
| serial2hid.exe        | 从串行切换到HID |
| getSerialPorts.exe    | 列出可见的COM端口 |
| libeay32.dll          | 在某些Windows安装中需要的加密库  |
| DemoButtons.exe       | 通过COM端口捕获测试签名 |


#### 概述

某些STU型号支持串行通信接口： 
 
* STU-430V  
* STU-540

可将签名板置为：  
人机接口设备（HID）-标准USB连接  
或  
虚拟COM端口（VCP）-通过USB的串行连接  

连接实用程序在命令提示符中使用，提供了验证和更改连接模式的工具。

#### 实用工具

##### query

使用此实用程序来确定签名板的当前状态。  
对于USB连接：  
```
  query.exe
```
 对于串行连接：
```
 query.exe COM_PORT BAUDRATE
```
如果签名板处于HID模式，则将报告其状态。  
如果处于串行模式，则结果将是：
```
->query.exe  
STU query sample  
No USB devices found 
```

##### getSerialPorts

要找到COM端口，请使用getSerialPorts：
```
->getSerialPorts.exe
COM1 physical
COM6 virtual
```
在串行模式下，STU签名板显示为虚拟COM端口。
然后可以将虚拟com端口与query一起使用，并指定端口名称和波特率：
```
->query.exe com6 128000
```

**COM10及更高端口注意事项：** COM10及更高端口需要特殊处理。请参阅[Microsoft 支持](https://support.microsoft.com/en-us/kb/115831) 
例如：
```
 -> query \\.\COM10
```
 
<kbd>
->query.exe com6  
STU query sample  
connecting to com6  128000  
Status.statusCode                         = Ready  
Status.lastResultCode                     = None  
Status.statusWord                         = 00  
HidInformation                            = 056a:00a6:0104  
Information.modelName                     = STU-430V  
Information.firmwareMajorVersion          = 01  
Information.firmwareMinorVersion          = 04  
Information.secureIc                      = 0  
Information.secureVersion                 = bb.0.0.0  
Capability.tabletMaxX                     = 9600  
Capability.tabletMaxY                     = 6000  
Capability.tabletMaxPressure              = 1023  
Capability.screenWidth                    = 320  
Capability.screenHeight                   = 200  
Capability.maxReportRate                  = 200  
Capability.resolution                     = 2540  
Capability.encodingFlag                   = 1bitZlib  
Uid                                       = 0x00000000  
Uid2                                      = 5JZQS00032  
Eserial - not supported  
DefaultMode                               = Serial  
RenderingMode - not supported  
ReportRate                                = 150  
HostPublicKey - not supported  
DevicePublicKey - not supported  
DHprime - not supported  
DHbase - not supported  
InkingMode                                = Off  
InkThreshold.onPressureMark               = 21  
InkThreshold.offPressureMark              = 16  
HandwritingThicknessColor.penColor        = 0000  
HandwritingThicknessColor.penThickness    = 2  
BackgroundColor - not supported  
HandwritingDisplayArea.upperLeftXpixel    = 0  
HandwritingDisplayArea.upperLeftYpixel    = 0  
HandwritingDisplayArea.lowerRightXpixel   = 319  
HandwritingDisplayArea.lowerRightYpixel   = 199  
BacklightBrightness - not supported  
ScreenContrast - not supported  
HandwritingThicknessColor24.penColor      = 000000   
HandwritingThicknessColor24.penThickness  = 2  
BackgroundColor24 - not supported  
PenDataOptionMode                         = None  
OperationMode - not supported  
RomImageHash - not supported  
ReportSizeCollection                      =  
                             PenData 7  
                              Status 5  
                               Reset 2  
                      HidInformation 9  
                         Information 17   
                          Capability 17  
                                 Uid 5  
                                Uid2 11  
                         DefaultMode 3  
                          ReportRate 2  
                       RenderingMode -  
                             Eserial -  
                    PenDataEncrypted 17  
                       HostPublicKey -  
                     DevicePublicKey -  
                        StartCapture 5  
                          EndCapture 2  
                             DHprime -  
                              DHbase -  
                         ClearScreen 2  
                          InkingMode 2  
                        InkThreshold 5  
                     ClearScreenArea 11  
                  StartImageDataArea 11  
                      StartImageData 2   
                      ImageDataBlock 256  
                        EndImageData 2   
           HandwritingThicknessColor 4  
                     BackgroundColor -  
              HandwritingDisplayArea 9  
                 BacklightBrightness -  
                      ScreenContrast -  
         HandwritingThicknessColor24 5  
                   BackgroundColor24 -  
                          BootScreen 2  
                       PenDataOption -  
              PenDataEncryptedOption -  
                   PenDataOptionMode 2  
   PenDataTimeCountSequenceEncrypted 17  
            PenDataTimeCountSequence 11  
                   EncryptionCommand 68  
                    EncryptionStatus 17  
                           GetReport -  
                           SetResult -  
                          PinPadData -  
                 PinPadDataEncrypted -  
                    PinOperationMode -  
                       OperationMode -  
                   RomStartImageData -  
                   RomImageOccupancy -  
                        RomImageHash -  
                      RomImageDelete -  
                    CurrentImageArea -  
                           EventData -  
                  EventDataEncrypted -  
                     RomImageDisplay -  
                                 160 5  
                                 162 5  
                                 163 17  
                                 171 12  
                                 178 3  
                                 180 3  
                                 181 11  
                ReportSizeCollection 512  
->  
</kbd>

##### simpleInterface

使用此实用程序可以显示实时笔数据。   
当笔接触或接近数位板表面时，将报告X/Y坐标和压力值。
```
simpleInterface.exe COM_PORT BAUDRATE
```
按Ctrl-C退出程序。  

<kbd>
->simpleInterface.exe com6  
STU simpleInterface sample  
connecting to com6  128000  
Connected!  
getInformation()... modelName=STU-430V firmware=01.04.187  
getReportRate()... 150  
setPenDataOptionMode(SequenceNumberTimeCount)... ok!  
getPenDataOptionMode()... penDataOptionMode=TimeCountSequence  
setClearScreen()... ok!  
setInkingMode(On)... ok!  
(use stylus, press CTRL-C to quit)  
rdy  sw     x     y  pres  time   seq  
  1   1   612  5339  3528  3513     1  
  1   1   612  5339  3528  3516     2  
  1   1   614  5339  3528  3523     3  
  1   1   615  5329  3518  3529     4  
  1   1   620  5329  3518  3536     5  
  1   1   624  5329  3518  3543     6  
  1   1   627  5329  3518  3549     7  
  1   1   630  5318  3513  3556     8  
  1   1   632  5307  3506  3563     9  
  1   1   633  5289  3493  3569    10  
  1   1   625  5253  3468  3576    11  
  1   1   593  5189  3422  3583    12  
  1   1   470  5094  3348  3589    13  
  1   1   263  4971  3247  3596    14  
  1   1    64  4819  3111  3603    15  
  1   0     0  4664  2960  3609    16  
  1   0     0  4502  2795  3616    17  
  1   0     0  4356  2634  3623    18  
  1   0     0  4228  2484  3629    19  
  1   0     0  4124  2350  3636    20  
  1   0     0  4068  2263  3643    21  
  0   0     0     0     0  3696    22  
quitting!  
setInkingMode(Off)... ok!  
setClearScreen()... ok!  
setPenDataOptionMode(None)... ok!   
->
</kbd>

##### hid2serial

使用此实用程序将STU更改为串行VCP模式。不需要任何参数。  
您可以通过使用getSerialPorts.exe查看串行端口来验证STU处于串行模式。  
使用query.exe验证连接：  
```
query.exe COM_PORT BAUDRATE
```

<kbd>
->hid2serial.exe  
STU HID2serial sample  
Device:  
056a:00a8:0100  
Status.statusCode                       = 0  
Status.lastResultCode                   = 0  
Status.statusWord                       = 00  
Information.modelName                   = STU-540  
Information.firmwareMajorVersion        = 01  
Information.firmwareMinorVersion        = 00  
Information.secureIc                    = 0  
Information.secureVersion               = 0.0.0.0  
setDefaultMode()...  
Done!  
Status.statusCode                       = 0  
Status.lastResultCode                   = 0  
Status.statusWord                       = 00  
Rebooting device  
->
</kbd>
 
此外，您可以在Windows设备管理器中查看连接。  
HID连接，如下所示。

![Device Manager](assets/q-stu/stu-serial-dev-mgr.png)

串行连接如下所示：

![COM Ports](assets/q-stu/stu-com-port.png)

通常，Windows自动安装创建VCP所需的FTDI驱动程序。
如果签名板报告如下：  
```
**Future Devices Single RS232-HS**  
```

然后从以下位置下载并安装驱动程序： **http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm**

例如： **http://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip**

**有关串行套件的注意事项**

STU-540提供了串行套件。这包括：  

* 串行 D-型转签名板数据线  
* 电源

使用串行工具包时，签名板仍必须切换到串行模式，但可以连接到物理串行端口。  
在这种情况下，将使用不同的波特率，如下所示：
```
>query COM1 115200
```

##### serial2hid
使用此实用程序可恢复默认的STU签名板HID连接模式。
```
serial2hid.exe COM_PORT BAUDRATE
```
您可以使用query.exe确认HID连接。
```
serial2hid.exe com6 128000  
```
 
<kbd>
serial to hid STU query sample  
serial2hid serialPort baudRate  
{processReadBuffer size=22}  
  {queued report: size=  17   08 53 54 55 2d 35 34 30 00 00 01 00 00 02 00 00 00}  
  {removing 22 bytes}  
Information.modelName                   = STU-540  
Information.firmwareMajorVersion        = 01  
Information.firmwareMinorVersion        = 00  
{processReadBuffer completed  
{processReadBuffer size=5}  
  {queued report: size=   2   81 00}  
  {removing 5 bytes}  
{processReadBuffer completed  
{processReadBuffer size=5}  
  {queued report: size=   2   81 00}  
  {removing 5 bytes}  
{processReadBuffer completed  
</kbd>

##### DemoButtons

通过标准HID模式或虚拟COM端口从STU板捕获签名，并提供选项。  
签名模式也可以选择与STU 540一起使用。

![DemoButtons](assets/q-stu/stu-serial-demo.png)

