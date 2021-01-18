---
id: tablet-installation
title: 一般安装
---
## Wacom 设备规格

#### 行业产品型号

| 型号               | 压感级别 | 采样频率 (Hz) | 最高分辨率 | 屏幕/纸张 大小 (mm)   | 视频/数据 输入/输出 |
|---------------------|-----------------|--------------------|-----------------|--------------------------|-------------------------|
| DTH-1152            | 1024            | 200                | 1920 x 1080     | 223.2 x 125.6            | HDMI                    |
| DTK-1660E           | 8192            | 187                | 1920 x 1080     | 344.2 x 193.6            | HDMI                    |
| DTK-2451            | 2048            | 187                | 1920 x 1080     | 527 x 296                | DVI-I                   |
| DTH-2452            | 2048            | 100                | 1920 x 1080     | 520 x 296                | DVI-I                   |
| DTU-1141/1141B      | 1024            | 200                | 1920 x 1080     | 223.2 x 125.6            | USB                     |
| DTU-1031            | 512             | 200                | 1280 x 800      | 217 x 135.6              | USB                     |
| DTU-1031X/AX        | 512             | 200                | 1024 x 600      | 223 x 125                | USB                     |
| PHU-111 (Clipboard) | 1024            | 200                | A4              | 210 x 297 (A4)           | USB 2/Bluetooth 4.2     |

#### 创意产品型号

| 型号 | 产品名称           | 压感级别 | 采样频率 (Hz) | 有效区域/纸张 大小 (mm) | 分辨率 (lpi)  | 屏幕最高分辨率  |
|-----------|----------------------|-----------------|--------------------|-----------------------------|-------------------| ------------------------|
| CDS610G   | Bamboo Folio A5      | 1024            | 200                | 140 x 216                   |                   |                         |
| CDS810G   | Bamboo Folio F4      | 1024            | 200                | 210 x 297                   |                   |                         |
| CDS610S   | Bamboo Slate A5      | 1024            | 200                | 140 x 216                   |                   |                         |
| CDS810S   | Bamboo Slate A4      | 1024            | 200                | 210 x 297                   |                   |                         |
| CTL-4100  | Intuos Small         | 4096            | 133                | 152 x 95                    | 2540              |                         |
| CTL-6100  | Intuos Medium        | 4096            | 133                | 216 x 135                   | 2540              |                         |
| PTH-460   | Intuos Pro Small     | 8192            | 200                | 160 x 100                   | 5080              |                         |
| PTH-660   | Intuos Pro Medium    | 8192            | 200                | 224 x 148                   | 5080              |                         |
| PTH-860   | Intuos Pro Large     | 8192            | 200                | 311 x 216                   | 5080              |                         |
| PTH-660P  | Intuos Pro Paper M   | 8192            | 200                | 224 x 148                   | 5080              |                         |
| PTH-860P  | Intuos Pro Paper L   | 8192            | 200                | 311 x 216                   | 5080              |                         |
| CTL-472   | One by Wacom         | 2048            | 133                | 152 x 95                    | 2540              |                         |
| DTK-1660  | Cintiq 16            | 8192            | 180                | 344 x 194                   | 5080              | 1920 x 1080             |
| DTK-2260  | Cintiq 22            | 8192            | 187                | 476 x 268                   | 5080              | 1920 x 1080             |
| DTK-2200  | Cintiq 22 HD         | 2048            | 133                | 479 x 271                   | 5080              | 1920 x 1080             |
| DTH-1320  | Cintiq Pro 13        | 8192            | 180                | 294 x 166                   | 5080              | 1920 x 1080             |
| DTH-1620  | Cintiq Pro 16        | 8192            | 180                | 345 x 194                   | 5080              | 3840 x 2160             |
| DTH/K-2420| Cintiq Pro 24        | 8192            | 180                | 520 x 294                   | 5080              | 3840 x 2160             |
| DTH-3220  | Cintiq Pro 32        | 8192            | 180                | 697 x 392                   | 5080              | 3840 x 2160             |
| DTC-133   | Wacom One            | 4096            | 240                | 294 x 166                   | 2540              | 1920 x 1080             |


## 从命令行运行配置文件管理工具

#### Windows

Wacom 配置文件管理工具 (位于**_C:\Program Files\Tablet\Wacom\32_**) 可以从命令行中运行，如下列命令:  
&nbsp;  

|   命令                   | 引入版本 |  功能                                                                                                                                                                           |
|-----------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /remove-all                 |            | 删除所有用户的配置文件并重新启动单个驱动进程: _WacomHost.exe, Wacom_Tablet.exe, Wacom_TabletUser.exe, Wacom_TouchUser.exe_ (必须以管理员身份运行) |
| /remove                     |            | 删除当前用户的配置文件并重新启动单个驱动进程: _WacomHost.exe, Wacom_Tablet.exe, Wacom_TabletUser.exe, Wacom_TouchUser.exe_                          |
| /backup [备份文件]       |            | 备份用户配置文件。 将会尝试创建目录如果目录无效。文件扩展名必须是 **_.wacomxs_** 或 **_.wacomprefs_**                                                                 |
| /restore [备份文件]      |            | 还原指定文件路径的配置文件并重新启动各个驱动程序进程。文件扩展名必须是 **_.wacomxs_** or **_.wacomprefs_**                                      |
| /silent                     |            | 禁止对话框和输出 /export 和 /import 标签目前还不支持                                                                                          |
| /export [导出文件]       |            | 导出应用。 如果 "导出文件" 没有指定将会使用默认设置。 文件扩展名必须是 **_.wacomxs_**                                                                       |
| /import [导入文件]       |            | 导入应用。 文件扩展名必须是 **_.wacomxs_**                                                                                                                             |
| /restart                    | 6.3.28-3   | 重启驱动但不移除用户配置文件或重启驱动服务                                                                                      |
| /logs-on                    | 6.3.29-4   | 启用配置文件管理工具的驱动程序日志记录功能                                                                                                                |
| /logs-off                   | 6.3.29-4   | 禁用配置文件管理工具的驱动程序日志记录功能                                                                                                               |
| /logs-dll-on                | 6.3.30-b2  | 启用Wintab日志和配置文件管理工具的驱动程序日志记录功能                                                                                             |
| /logs-dll-off               | 6.3.30-b2  | 禁用Wintab日志和配置文件管理工具的驱动程序日志记录功能                                                                                           |
| /clear-logs                 | 6.3.29-4   | 执行配置文件管理工具中的日志清除功能                                                                                                                        |
| /package-logs               | 6.3.29-4   | 执行配置文件管理工具中的日志打包功能                                                                                                                      |
| /extract-waczip             | 6.3.28-4   | 提取 WacomLogs.waczip 日志位于当前用户桌面到 **_C:\Wacom\Logs_**， 如果目录存在                                                               |
| /extract-waczip <file-path> | 6.3.29-4   | 提取指定路径的 waczip 文件到 **_C:\Wacom\Logs_**, 如果路径存在                                                                                         |

**注意：配置文件管理工具的操作完成后将自动退出，而它在处理过程中也可能显示一个“未响应”消息，这是正常的现象。** 

#### MAC OSX

 下表显示了可以在命令行中通过以下命令格式来控制配置文件管理工具的参数:
```
/Applications/Wacom\ Tablet.localized/Wacom\ Tablet\ Utility.app/Contents/MacOS/Wacom\ Tablet\ Utility --<argument>
```
&nbsp;  

| Command          | Action                                                                                                 |
|------------------|--------------------------------------------------------------------------------------------------------|
| --restart        | 重启驱动                                                                                   |
| --uninstall      | 卸载驱动                                                                                   |
| --restore        | 移除当前用户配置文件重启驱动。 当以 super-user 身份运行时移除所有用户的配置文件  |
| --restore <path> | 从指定路径还原用户配置文件。 当以 super-user 用户模式执行时无操作                                       |
| -h --help        | 这条消息                                                                                           |

注意 _--remove_ & _--restore_ may be combined; _--remove_ 会优先执行。 当文件扩展名被忽略时搜索顺序是 _.wacompref_ 然后 _.wacomxs_

---
## 在Windows运行时切换数位屏显示开启或关闭
 
为了启用或禁用DTU显示(暂时打开或关闭它)，一种可行的方法是使用DisplaySwitch。
 有关其使用的详细资料，请参阅[winaero.com](http://winaero.com/blog/switch-between-multiple-displays-monitors-directly-with-a-shortcut-or-from-the-command-line-in-windows-7-and-windows-8/)  

例如，它可以通过一个包含命令_"displayswitch /internal"_或_"displayswitch /extend"_的批处理文件激活，并有一个桌面快捷方式链接到它。

然后可以根据用户的需要在登录会话时轻松地运行它。
您也可以在第三方工具中找到类似的功能，如:

 1. [Actual Multiple Monitors](http://www.actualtools.com/)
 2. [Ultramon](https://www.realtimesoft.com/ultramon/)

请注意，我们不对第三方应用程序提供支持。

---

## 诊断工具 

| 功能描述                                      | 名称及链接                                                                                        |
|--------------------------------------------------|------------------------------------------------------------------------------------------------------|
| 签名捕捉诊断工具                | [Capture Analyser](../q-sig/howto-test-sdk)  |
| Wintab 底层支持工具                   | [Wintab diagnostic](#wintab-diagnostic)  |
| 向DisplayLink直接报告驱动问题  | [DisplayLink support tool](http://support.displaylink.com/knowledgebase/articles/533818-how-can-i-report-windows-issues-to-displaylink)  |


 
---

## DTU-1141 工作模式手册

有关工作模式的详细描述，请参阅:
<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/Wacom-DTU-1141-Operating-Modes.pdf" target="_blank">DTU 1141 工作模式</a>


---

## DTU 用户手册 

#### DTU 1031 用户手册

有关工作模式的详细描述，请参阅:
<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/DTU-1031-User-Manual.pdf" target="_blank">DTU 1031 用户手册</a>

#### DTU 1031X 和 1141 用户手册

有关工作模式的详细描述，请参阅:
<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/1031X_1141_UsersManual.pdf" target="_blank">DTU 1031X / 1141 用户手册</a>

---

## 在Windows 7上禁用有时会出现在签名屏上的屏幕键盘

最简单的方法是在Wacom平板电脑属性控制面板中关闭 **“使用Windows Ink”**，重新启动电脑并检查它是否生效。

如果需要Windows Ink，打开 ```平板电脑设置 -> 平板电脑输入选项 -> 初始化``` 并更改配置，使输入面板不再显示。

---

## 签名捕获窗口显示在PC显示器上而不是签名板上

通常，这个问题可以通过创建一个REG_SZ类型的名为“wtCintiq”的注册表设置来解决。
根据系统配置，应该将此注册表设置放置在正确的位置，如下所示。 
&nbsp;  

| 架构                           | 注册表位置                              |
|----------------------------------------|--------------------------------------------------------|
| 32位应用程序在32位Windows系统上 | [HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]             |
| 64位应用程序在64位Windows系统上  | [HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]             |
| 32位应用程序在64位Windows系统上  | [HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd] |

&nbsp;  
wtCintiq的值由Windows分配给DTU的显示号决定。

为了实现这个设置下载并运行 [Capture Analyser](../q-sig/howto-test-sdk), 运行 "Test Capture" 选择 "wintab" 选项. 

在监视器列表中查找以**“WAC”**开头的监视器ID——在下面的示例中，它是**“WAC1047”**，其显示号为\\\.\DISPLAY4。
&nbsp;  

```
  *** Starting Analysis ***
Service: wintab
  Attempting to load wintab capture service
  wtLibrary not set
  wintab="C:\Windows\SYSTEM32\WINTAB32.DLL"
  wintab id="Wintab Digitizer Services"; name="WACOM Tablet"; spec version=260; impl version=295
SUCCEEDED
  Found monitor "MONITOR\NEC67EB\{4d36e96e-e325-11ce-bfc1-08002be10318}\0002", Device name "\\.\DISPLAY1"
  Found monitor "MONITOR\NEC67EA\{4d36e96e-e325-11ce-bfc1-08002be10318}\0003", Device name "\\.\DISPLAY2"
  Found monitor "MONITOR\WAC1047\{4d36e96e-e325-11ce-bfc1-08002be10318}\0004", Device name "\\.\DISPLAY4"
  Cintiq mapped
  "wintab" capture returned 201

*** Analysis Complete ***
```

下面的屏幕截图展示了上述wtCintiq注册表设置的细节。

![Registry settings](assets/q-tablet/wtcintiq_regentry.png) 

---

## Wintab 诊断

#### 下载


按照技术支持的指示使用测试工具来报告wintab驱动程序信息。

| 文件               | 描述                            |
|--------------------|----------------------------------------|
|[wtinfo-2.6.1.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/wtinfo-2.6.1.zip) | 诊断测试显示wintab信息 |
|[wtcapt.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/wtcapt.zip) | Wintab数据捕获诊断程序  |

#### 说明

##### wtinfo

解压文件，以访问:
* wtinfo.exe - 64位 测试
* wtinfo_x86.exe - 32位 测试

使用默认设置，按下“Do Test”按钮 —— 将显示wintab的安装细节。
使用 <右键单击...选择 所有..复制> 以将信息复制到支持工程师的电子邮件中。

##### wtcapt

下载并在 CMD命令行中运行 wtcapt.exe。  
此测试将显示实时笔数据，例如：
```
C:\wintab>wtcapt.exe
command-line diagnostic tool for Wintab drivers
v1.2
Copyright ⌐ 2006-2010 Florentis Limited

GetVersionEx()       5.1.2600
GetNativeSytemInfo() single x86

GetModuleFilename() "C:\WINDOWS\system32\WINTAB32.DLL"
hModule = 0x10000000
WTInfoW           0x100161c0
g_pWTOpenW        0x10016c00
g_pWTClose        0x10015d40
g_pWTEnable       0x10015f20
g_pWTPacketsGet   0x10016d50
g_pSignPad_InfoW  00000000
g_pSignPad_SetLCD 00000000
WTInfo(0,0,0)     8790

WTI_INTERFACE
IFC_SPECVERSION 1.4
IFC_IMPLVERSION 1.39
IFC_NDEVICES    1
IFC_NCURSORS    6
IFC_NCONTEXTS   32

WTI_DEFSYSCTX
(success)
WTI_DEVICES+4294967295
DVC_PKTRATE     100
DVC_HARDWARE    12
DVC_PKTDATA     0x0001ff
DVC_CSRDATA     0x001e00
DVC_X           (got)
DVC_Y           (got)
DVC_Z           (got)
DVC_NPRESSURE   (got)
DVC_TPRESSURE   (got)
DVC_ORIENTATION (got)

using LOGCONTEXT:
lc.lcInOrg        0,    0,-1023
lc.lcInExt    65023,40639, 2046
lc.lcOutOrg       0,    0,-1023
lc.lcOutExt   65023,40639, 2046
lc.lcSysOrg       0,    0
lc.lcSysExt    1274,  731

CreateWindowEx() returned 0x17016e
WTOpenW()      returned 00000804
WTEnable(TRUE) returned 1
    hCtx,  status,      time, changed,    serial,csr,bttn,      X,      Y,      Z,npres,tpres,  azi,  alt,twist
prox: 0001:0001
00000804,00000000,  13776796,000013b4,         1,  1,   0,  33061,   9780,     23,    0,    0, 2250,  870,    0 [13776796]
00000804,00000000,  13776804,00000394,         2,  1,   0,  33047,   9787,    256,    0,    0, 2250,  870,    0 [    8]
00000804,00000000,  13776811,00001394,         3,  1,   0,  33027,   9801,    168,    0,    0, 2430,  880,    0 [    7]
00000804,00000000,  13776819,00000394,         4,  1,   0,  33007,   9816,     63,    0,    0, 2430,  880,    0 [    8]
00000804,00000000,  13776828,00000654,         5,  1,   1,  33007,   9816,    192,  882,    0, 2430,  880,    0 [    9]
00000804,00000000,  13776836,00000794,         6,  1,   1,  32948,   9856,      0,  919,    0, 2430,  880,    0 [    8]
00000804,00000000,  13776843,00001594,         7,  1,   1,  32932,   9864,      0,  931,    0, 2700,  880,    0 [    7]
00000804,00000000,  13776851,00001494,         8,  1,   1,  32939,   9864,      0,  925,    0, 2700,  870,    0 [    8]
00000804,00000000,  13776858,00000594,         9,  1,   1,  33034,   9808,      0,  921,    0, 2700,  870,    0 [    7]
00000804,00000000,  13776866,00001594,        10,  1,   1,  33185,   9687,      0,  905,    0, 2700,  860,    0 [    8]
00000804,00000000,  13776873,00001594,        11,  1,   1,  33255,   9533,      0,  889,    0, 2700,  850,    0 [    7]
00000804,00000000,  13776881,00000594,        12,  1,   1,  33293,   9470,      0,  864,    0, 2700,  850,    0 [    8]
00000804,00000000,  13776888,00001594,        13,  1,   1,  33315,   9434,      0,  852,    0, 2700,  840,    0 [    7]
00000804,00000000,  13776896,00000594,        14,  1,   1,  33327,   9418,      0,  822,    0, 2700,  840,    0 [    8]
00000804,00000000,  13776903,00001794,        15,  1,   1,  33332,   9417,      8,  794,    0, 2700,  830,    0 [    7]
00000804,00000000,  13776911,00001694,        16,  1,   1,  33334,   9417,      0,  771,    0, 2700,  820,    0 [    8]
00000804,00000000,  13776918,00001714,        17,  1,   1,  33334,   9437,      8,  726,    0, 2770,  820,    0 [    7]
00000804,00000000,  13776926,00001594,        18,  1,   1,  33299,   9550,      8,  658,    0, 2760,  810,    0 [    8]
00000804,00000000,  13776933,00000794,        19,  1,   1,  33236,   9781,     32,  505,    0, 2760,  810,    0 [    7]
00000804,00000000,  13776941,00001654,        20,  1,   0,  33236,   9781,     96,    0,    0, 2760,  800,    0 [    8]
00000804,00000000,  13776948,00001394,        21,  1,   0,  33121,  10525,     19,    0,    0, 2800,  790,    0 [    7]
00000804,00000000,  13776956,00000394,        22,  1,   0,  33117,  10954,    252,    0,    0, 2800,  790,    0 [    8]
00000804,00000000,  13776963,00000214,        23,  1,   0,  33117,  10954,    204,    0,    0, 2800,  790,    0 [    7]
prox: 0001:0000
```

---

## 如何将Intuos数位板映射到PC显示器的一部分区域?

Wacom数位板属性控制面板中提供了此功能。
我们提供了屏幕区域和平板电脑区域的映射，两者都包含单击定义功能。通过这种方式，您可以使用笔快速定义屏幕和/或平板电脑的区域。

这些设置甚至可以是特定于应用程序的，因此您可以在一个应用程序中具有特定的屏幕映射，然后在另一个应用程序中映射到整个桌面，或以上功能的任意组合时。

![settings](assets/q-tablet/click_to_define.png) 
.  
![properties](assets/q-tablet/mapping.png) 

---

## 无法克隆或复制桌面

这是运行第三代Intel处理器之一的Windows 10 PC上的一个已知问题，即i3，i5或i7（代号Ivy Bridge）或Atom处理器（Bay Trail）。
这些处理器具有旧的图形驱动程序，不支持克隆功能。

一种解决方案是使用不基于这些处理器之一的PC。
另一种选择是使用第三方工具例如[Actual Multiple Monitors](https://www.actualtools.com/multiplemonitors/download/)为您进行克隆。
请参阅此[DisplayLink论坛文章](https://www.displaylink.org/forum/showthread.php?t=65907&highlight=wddm) 以了解更多详细信息。

---

## 与Citrix或Linux一起使用

#### Linux 

只要安装了最新的平板电脑和视频驱动程序，则Linux上支持DTU 1031和1141。
  Wacom Linux 驱动可以在网站下载 [http://sourceforge.net/projects/linuxwacom/files/xf86-input-wacom/input-wacom/](http://sourceforge.net/projects/linuxwacom/files/xf86-input-wacom/input-wacom/)  

 适用于Ubuntu Linux的DisplayLink驱动程序可以从网站下载 [http://www.displaylink.com/downloads/ubuntu.php](http://www.displaylink.com/downloads/ubuntu.php)  

 有关DisplayLink版本的支持文章请访问网站 [http://support.displaylink.com/knowledgebase/topics/103927-troubleshooting-ubuntu](http://support.displaylink.com/knowledgebase/topics/103927-troubleshooting-ubuntu)  

请注意，Linux当前不支持DTU 1031X。  
&nbsp;  


#### Citrix 

有关Citrix上DTU / DTH / DTK支持的详细信息，请参阅
 [Windows Server and Citrix FAQ](../q-sig/howto-use-rdp) 的Citrix部分。  

---

## 在Citrix上的安装和配置

请参阅以下文档，以获取有关在Citrix 7.6.3及更高版本上配置DTU 1141的说明。
对于其他显示模型，将需要在重定向规则和组策略中更改PID。
使用Cintiq时，不需要DisplayLink显卡驱动程序。

<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/DTU1141_Citrix_Connection.pdf" target="_blank">DTU 1141 连接</a>

以下文档提供了与Citrix一起使用时在Wacom显示器上设置触摸的说明

<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/Citrix-Wacom-Touch-Display-Setup.pdf" target="_blank">Citrix Wacom Touch 显示设置</a>

 
 ---
