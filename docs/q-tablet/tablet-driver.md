---
id: tablet-driver
title: 驱动安装及故障排除
---

## 企业安装DisplayLink图形驱动程序

#### 问题

我想在企业环境中为已经连接了DTU设备的PC上安装DisplayLink显卡驱动程序。

#### 解决方案

请参与 [DisplayLink 企业安装指南](https://support.displaylink.com/knowledgebase/articles/615840-how-to-deploy-displaylink-msi-files-in-a-corporate)

---

## 设备未连接（Windows 7）

#### 问题

安装Wacom数位板驱动程序后，数位板无法正常工作，并在尝试访问控制面板（Wacom数位板属性）时出现以下错误：

          Device not connected

#### 解决方案

在某些版本的Windows（尤其是Windows 7）上，如果Windows未完全更新，则可能会发生这种情况。
解决方案是运行Windows Update，直到您确定所有更新都已安装。

另外，您可以单独安装以下3个更新：

KMDF - https://support.microsoft.com/en-us/help/2685811/kernel-mode-driver-framework-version-1-11-update-for-windows-vista-win  

UMDF - https://support.microsoft.com/en-us/help/2685813/user-mode-driver-framework-version-1-11-update-for-windows-vista-windo  

SHA-2 - https://docs.microsoft.com/en-us/security-updates/securityadvisories/2015/3033929  

---

## DTH 1152触摸屏不适用于XenApp

如果由于Citrix和Microsoft之间的已知问题而在Wacom数位板控制面板中禁用了Windows Ink，则1152上的笔只能与XenApp一起使用。
由于XenApp的性质及其与共享资源一起使用的方式，Windows Ink无法在XenApp主机上工作。
默认情况下，Wacom笔会尝试使用Windows Ink，这就是为什么在禁用Ink的情况下使其在XenApp中工作的原因。 
对于触摸，1152始终使用Windows Ink进行一指和两指输入。
此问题已通过多个渠道报告给Citrix，我们知道他们正在与Microsoft合作，以在将来对XenApp的更新中解决此问题。 
在撰写本文时（2018年11月），此问题尚无解决方法-它取决于Citrix和Microsoft在更高版本的XenApp和/或Windows中来提供解决方案。

---

## DTH-1152 Touch可在主显示器上使用，而不是在扩展屏幕上使用

Windows触摸输入由操作系统映射。 Wacom驱动程序尝试覆盖此设置，但在某些环境中可能并不总是成功的。
通过打开Tablet PC设置，选择“显示”选项卡，单击 <设置> 按钮以配置笔和触摸显示器，然后选择“触摸”进行校准，即可轻松设置触摸映射。
触摸校准工具在Windows 10上是隐藏的，无法通过Windows 10菜单系统进行访问-只能通过“运行”对话框进行访问。
以下命令将打开“Tablet PC设置”窗口：
&nbsp;  

```
 1. %windir%\explorer.exe shell:::{80F3F1D5-FECA-45F3-BC32-752C152E456E}
 2.  tabletpc.cpl @1
 3.  multidigimon -touch
```  
&nbsp;  

Windows触摸显示映射作为设备路径和视频路径存储在Windows注册表中。这些路径对于每台机器和设​​备都是唯一的，因此不能在机器之间共享。 
因此，此映射将需要在每台计算机上单独执行，但是该设置将保留在该设备上，因为该设备当前已连接到计算机。
可以编写脚本来创建这些注册表项而无需校准，但是这需要由本地IT服务创建。
这些注册表项和Tablet PC设置快捷方式的相关信息可以在下面的屏幕快照中找到。

![mapping](assets/q-tablet/touch_mapping.png) 

---

## Mac OS 10.13.6 High Sierra上无法识别DTU 1141

DisplayLink针对此问题有一个常见问题解答。   
请在 https://support.displaylink.com/knowledgebase/articles/1854724 上查看必要的步骤，以使支持DisplayLink的显示器在10.13.6上正常工作 。

---

## Mac OS Catalina 10.15无法识别DTU-1141

请在Mac OS 10.15 Catalina上查看以下常见问题解答以获取正确的驱动程序功能：

https://www.wacom.com/en-us/support?guideTitle=Is-there-a-driver-for-Mac-OS-10.15-Catalina%3F&guideId=015-916 

---

## DTU-1031X在Mac OS 11上不起作用

在Mac OS 11上不支持DTU-1031X-尽管数位屏可以工作，但显示屏无法显示。

但是请注意，更高版本的DTU-1031AX受支持并且可以正常工作。

---

## DTU / DTH / DTK故障排除指南

1. 理想情况下，应使用连接线将DTU直接连接到PC的USB端口且两个USB线都要连接。如果必须使用USB集线器，则应使用带有A/C供电的。

2. 对于DTU 1141，建议连接第二个USB插头，以确保设备供电充足。

3. 确保安装了[Wacom驱动程序支持页面](http://www.wacom.com/en-us/support/product-support/drivers)的最新版驱动程序。

4. 确保按照以下方式安装了针对特定DTU型号的最新显卡驱动程序。

#### DTU 1031/1141

对于Windows 10周年更新1607版，不需要图形驱动程序。
对于所有其他版本，这些设备的DisplayLink驱动程序可在此处获得：[DisplayLink驱动程序下载](http://www.displaylink.com/downloads/windows)

DisplayLink驱动程序在程序和功能中显示为“DisplayLink Core Software”。旧版本也显示第二个条目“DisplayLink Graphics”

#### DTU 1031X
请下载[UV-A8301 USB 2.0 Display Adapter](https://www.mct.com.tw/download.php?lang=en&tb=1&cid=28).  (请注意，下载文件中提供的MAC驱动程序与1031X不兼容)。通常，如果您的PC连接到了Internet，MCT驱动程序将会自动更新到最新版本。1031X MCT驱动程序将在PC上的“程序和功能”中显示为“ Trigger External Graphics Family ...”。-请参阅此页面底部的屏幕截图

5. 安装上述任何驱动程序后，请重新启动电脑。

6. 检查DTU是否在“设备管理器”中的“人体学设备”下显示为“Wacom Tablet”。在大多数Windows版本中，它也应显示为USB显示适配器，如下所示
![DTU device](assets/q-tablet/dtu-device.png)

在Windows 10周年更新1607版中，它将显示在“人体学输入设备”下以及“显示适配器”下，如下所示
![Device manager](assets/q-tablet/devicemgrw101141.png)

7. 在Windows屏幕分辨率对话框中，检查DTU是否被Windows识别为监视器。

8.  一旦安装了相关的驱动程序，请检查Windows服务中是否正在运行“ Wacom Professional Service”服务-如果未运行，请卸载并重新安装驱动程序，然后再次检查。

9. 对于DisplayLink驱动程序，还应该有一个名为“ DisplayLinkManager”的Windows服务，该服务也应该正在运行。如果没有手动启动它。
    如果它在下次重新启动时没有自动启动，请尝试卸载并重新安装DisplayLink驱动程序。

10. 对于DTU-1031X，Wacom Professional Service应该正在运行，但没有类似的图形驱动程序服务。但是，您应该能在系统托盘中找到一个新的紫色图标。
    请查看下面的“程序和功能”屏幕截图，以了解该图标的外观。

11. 在Wacom桌面中心的“备份设置”下，选择“本地备份”下的“重置设置”。

12. 使用Wacom数位板控制面板校准笔，该面板应在“开始”菜单中显示为“ Wacom数位板属性”（通常不是必需的，但是如果您的笔对不准时则可能会有所帮助）。

13. 完成上述任务后，如果签名捕获窗口未出现或没有出现但没有墨迹，请按照以下步骤操作：

    * 卸载并重新安装Tablet驱动程序
    * 如果失败，则运行capture analyser test工具。如果在程序列表中找不到此文件，则该可执行文件为“ FlCaptureAnalyser.exe”，可以在以下任一文件中找到：

```
 C:\Program Files (x86)\Common Files\WacomGSS 
or 
 C:\Program Files\Common Files\WacomGSS
```

如果您尚未安装SDK（可能是因为您具有sign pro PDF），请从“Capture Analyser”页面上的[Test signature capture page](../q-sig/howto-test-sdk)下载链接下载分析工具。
启动捕获分析器后，请在“Service”菜单下选择“Test Capture”选项，然后选择“wintab”。
将输出保存在文本文件中，并作为支持凭单的附件发送给我们。
可以通过单击[支持页面](../q-support/support)上的“Initial Support Request”按钮来创建支持凭单。
我们将努力在一个工作日内做出回应（注意支持团队在欧洲有时差）。
请注意，您需要先通过在开发人员关系网站上的“登录”链接注册账户。
 
14. 如果以上操作均不能解决问题，则可能有必要[启用驱动程序日志记录](#enable-driver-logging)并通过支持票证发送日志文件。

#### "程序和功能" 中显示的Trigger Family video 驱动 和 Wacom tablet 驱动程序: 

![Trigger video](assets/q-tablet/trigger.png)

---

## 启用驱动程序日志记录

#### 驱动程序版本6.3.36及更高版本

* 打开Wacom桌面中心，然后选择左侧的**支持**
* 点击“驱动程序日志”
* 按下“清除日志文件”按钮，从日志文件夹中删除旧的日志文件
* 单击“日志记录”打开/关闭开关-这将启用日志记录并重新启动平板电脑驱动程序
* 驱动程序完成启动后，您应该在logs文件夹中看到新的日志文件（默认为C:\wacom\logs）
* 使用数位板，直到出现问题为止
* 发生问题时，请按“打包日志文件”按钮，在桌面上创建一个zip文件名为WacomLogs.waczip。
* 通过将zip文件附加到支持票证将其发送到Wacom支持系统

驱动程序日志在C:\Wacom\Logs中创建，并且日志将继续在该位置生成，直到禁用日志记录为止。
日志仅捕获Wacom驱动程序的跟踪语句，当前用户会话的用户名，使用中的计算机的OS版本以及最前面的应用程序的应用程序名称（更改时）。

#### 驱动程序版本6.3.28-3及更高版本

* 打开Wacom数位板首选项实用程序-现在它具有一些控件来管理日志文件
* 按下“清除日志”按钮以从日志文件夹中删除旧的日志文件
* 选中复选框：“诊断登录”-这将启用日志记录并重新启动平板电脑驱动程序
* 驱动程序完成启动后，您应该在logs文件夹中看到新的日志文件（默认为C:\wacom\logs）
* 使用平板电脑，直到出现问题为止 
* 发生问题时，请按“ Package Logs”按钮，在桌面上创建一个zip文件WacomLogs.waczip 
* 通过将zip文件附加到支持票证将其发送到Wacom支持系统

驱动程序日志在C:\Wacom\Logs中创建，并且日志将继续在该位置生成，直到禁用日志记录为止。
日志仅捕获Wacom驱动程序的跟踪语句，当前用户会话的用户名，使用中的计算机的OS版本以及最前面的应用程序的应用程序名称（更改时）。

#### 驱动程序版本6.3.27及以前版本

下载zip文件[debuggingProRegistryScripts.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/debuggingProRegistryScripts.zip). 它包含两个reg文件。一种启用日志记录，另一种禁用日志记录。
要使用这些文件，必须手动为日志创建一个文件夹。
脚本默认情况下使用 C:\wacom\logs，但是您可以编辑脚本以使用具有权限的任何文件夹。

 1. 创建日志文件夹（请参阅上面的1） 
 2. 停止驱动程序服务
 3. 执行debuggingprofull.reg脚本以启用日志记录 
 4. 启动驱动程序服务
 5. 运行直到出现问题
 6. 从任务管理器创建一个小型转储，如下所示：
    1. 打开任务管理器
    2. 选择详细信息选项卡
    3. 右键单击Wacom_Tablet.exe
    4. 选择“创建转储文件”
    5. 弹出窗口将指示minidump文件的写入位置
 7. 执行debuggingprofullu.reg脚本以禁用日志记录 
 8. 停止驱动程序服务
 9. 压缩日志文件夹和小型转储
 10. 将zip文件作为附件添加到[Support Ticket](../q-support/support)中。

#### 故障转储

如果要从Internet Explorer生成故障转储，请参阅这些[Microsoft 说明](https://docs.microsoft.com/en-us/windows/desktop/wer/collecting-user-mode-dumps)  

另外，[Procdump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) 可用于捕获所有崩溃转储，包括完整转储。

例如使用
```
 Procdump -ma -i c:\dumps
```
在Windows命令行中将procdump设置为最后机会调试器。删除就像完成后删除procdump可执行文件一样简单。

---

## 安装程序命令行参数

可以在命令行中传递以下列出的参数，以修改驱动程序安装过程。
在“示例”中列\<Installer.exe\>代表已下载的安装程序文件，例如：
**C:\Users\\<current user\>\Downloads\WacomTablet_6.3.36-1.exe**  
 
&nbsp;  

| 功能 (版本号) |  参数    | 例子                                                 | 描述                                                                                                                 |
|--------------------|---------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 卸载          | /u            | <Installer.exe> /u   | 卸载参数对于快速清除未成功或部分成功的安装很有用。   |
| 静默安装  | /s            | <Installer.exe> /s   | 公司或组织通常使用静默安装选项进行大规模部署而不会打扰用户。它会在没有任何用户输入的情况下安装驱动程序，并且在安装过程中不会出现用户可见的消息。静默安装将跳过.NET下载和安装，因为该功能不是静默的。 |
| STU 模式安装   | /custom STU_MODE | <Installer.exe> /custom STU_MODE | “STU模式”安装选项通常在签名环境中使用，因为它会阻止数位板正常功能的运行。笔不能在STU模式下用于导航，而只能在签名应用程序将签名窗口分配给数位板时使用。签名完成并提交后，笔应再次变为非活动状态。 |
| 无Wacom桌面中心（WDC）的安装 (6.3.19) | /opt nowdc | <Installer.exe> /opt nowdc | 使用“无WDC”安装选项，用户可以在安装过程中跳过WDC（Wacom Desktop Center）的安装。这对于不使用WDC的设备的大型部署很有帮助，安装后占用的空间更少，并且消除了对 .NET 4.0 / 4.5可能需要的任何要求；至少在Wacom方面。 |
| 不安装用户帮助内容 (6.3.16) | /opt nohelp | <Installer.exe> /opt nohelp | 使用“无用户帮助”安装选项，用户可以在安装过程中跳过本地用户帮助内容的安装。只要存在网络连接，联机用户帮助内容仍将可访问。 |
| 无网络安装 (6.3.29) | /opt noinet | <Installer.exe> /opt noinet | 使用“无Internet”安装选项，用户可以在安装过程中跳过对任何驱动程序/ WDC必备组件的检查，下载和安装。 |
| 启用驱动程序日志记录 (6.3.31) | /opt DebugDrv | <Installer.exe> /opt DebugDrv | 启用驱动程序日志记录参数对于在安装时启用完整的驱动程序日志很有用。 |
| 启用 Wintab和驱动程序日志记录 (6.3.31 | /opt DebugDll | <Installer.exe> /opt DebugDll | 启用 Wintab日志记录参数对于在安装时启用完整的Wintab和驱动程序日志非常有用。 |
 
---

## 数位板和视频驱动的静默安装或卸载

从6.3.21-3版本开始，可以在具有管理员权限的提示符下使用以下所示的命令以静默方式安装Wacom驱动程序： 

```
  wacomtablet_6.3.21-3.exe /s
```

要静默卸载，只需在上面的命令中添加 /u 即可。

另外（对于旧版本），您可以按照以下步骤进行：
* 将下载的.exe扩展名重命名为.zip，例如，“ WacomTablet_6.3.21-3.exe”变为“ WacomTablet_6.3.21-3.zip”
* 从zip文件中提取所有文件和文件夹
* 运行“ setup.exe /silent (/uninstall)"

要以静默方式（例如，通过SCCM或批处理脚本）安装/卸载DisplayLink视频驱动程序，您将需要使用DisplayLink企业安装程序指南：

<a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/CorpInstallUsersGuide.pdf" target="_blank">DisplayLink 安装指南</a>

MCT驱动程序（用于1031X）的静默安装开关为“/s”-另请参见**MCT静默安装命令列表**： 


    Install Command:
    /s or -s : 静默模式
    /f1 or -f1: 指定可选响应文件名和路径
    /f2 or -f2: 指定可选日志文件名和路径
    静默安装：
    =================================
    运行 "setup.exe /s /f2<path\LogFile>"
    例如,
    setup.exe /s /f2c:\ AspireLinkInst.log
    静默卸载：
    =================================
    运行 "setup.exe Uninstall /s /f1<path\uninstall.iss> /f2<path\LogFile>"
    例如,
    setup.exe Uninstall /s /f1.\uninstall.iss /f2c:\ AspireLinkUninst.log

---

## DisplayLink 驱动问题支持

DisplayLink不直接向最终用户提供支持。可从[DisplayLink 支持页面](https://support.displaylink.com/)获得一些帮助。

知识库中涵盖了许多常见问题。该论坛包含DisplayLink用户报告的一系列问题。

他们还有一个支持工具，可用于生成日志文件，然后将其转发给DisplayLink进行调查或发送给我们。  
请参阅[如何将Windows问题报告给DisplayLink?] (http://support.displaylink.com/knowledgebase/articles/533818-how-can-i-report-windows-issues-to-displaylink)  

 或者，请通过单击[Wacom支持页面](../q-support/support) 上的“初始支持请求”按钮在我们的系统上提交请求。 我们将努力在一个工作日内做出回应。
 请注意，您还需要先通过[开发人员关系网站](https://developer.wacom.com/)上的“登录”链接注册账户如果您还没有Wacom 账户。

---

## 数位板安装

#### 系统要求

##### Wacom 数位板驱动程序

就系统规格而言，没有建议的RAM要求来安装Wacom数位板驱动程序。
笔式数位板使用的资源很少，因此我们认为任何可以操作鼠标和键盘的计算机都应与数位板和驱动程序兼容。

##### DisplayLink 显卡驱动程序

DisplayLink 提供了某些数位屏所需的有关显卡驱动程序的系统兼容性信息（更多详细信息，请参见下面的概述）
https://support.displaylink.com/knowledgebase/articles/544297-is-my-windows-computer-compatible-with-displaylink

#####  MCT (Trigger Family) 驱动程序 

MCT驱动程序（DTU-1031X必需）的建议最低硬件要求如下： 
* 可用的USB 2.0端口
* 1〜2个显示屏（办公类应用）
* CPU: Intel/AMD 单核 1.5GHz 或更高处理器
* 内存: 1GB 内存或更高
* 不建议通过USB端口播放DVD（720p），因为USB2.0带宽不足并且播放DVD的性能可能很差
* Windows XP/Vista/7/8/8.1/10 (32-bit / 64-bit)
* 建议使用更高的处理器，以实现多显示器和最佳性能

#### 数位板和驱动程序概述 
 
我们最常用于商业目的的平板电脑是1031X(或1031AX)，1031、1141（或1141B）和1152（按分辨率升序）。
&nbsp;  
对于1031X（或1031AX），1031和1141（或1141B），通常需要两个驱动程序：
* Wacom 数位板驱动程序（用于控制笔和按钮等功能）
* 图形显卡驱动程序处理USB视频  
 
对于DTH和DTK型号，不需要图形驱动程序，因为图形信号是通过HDMI电缆单独传输的而不是通过USB。
The tablet driver is the same for all pen tablets but the 1031X requires a different video driver from the 1031 and 1141.  数位板驱动程序与所有数位板相同，但1031X和1031AX需要的视频驱动程序与1031，1141和1141B不同。
&nbsp;  

请注意，这两个视频驱动程序相互不兼容，通常不能一起安装（在最新版本的Windows 10中可能会出现，但不建议这样做）。
这意味着您不能在同一台PC上同时使用1031X（或1031AX）和1031，1141（或1141B）。
&nbsp;  
连接兼容的DisplayLink显示器时，Windows平台通常会处理DisplayLink图形驱动程序的安装。
Windows 10（自年度更新以后）包括基本的DisplayLink支持。
在Windows 7上，Windows Update将为您获取适当的驱动程序并进行安装，但安装不会保持静默。

#### 手动安装驱动程序

通常，驱动程序在Wacom设备随附的CD中提供。如果没有CD，则可以按照以下步骤操作：

1. 导航到Wacom驱动程序支持页面
2. 选择适合您的操作系统的驱动程序并下载
3. 运行安装程序文件-请注意，在继续完成此过程之前，需要重启PC
4. 如果使用1031，1141或1141B，请从 http://www.displaylink.com/downloads/windows 下载DisplayLink驱动程序 
5. 对于DTU 1031X，请下载发布在MCT网站上的UV-A8301 USB 2.0显示适配器。（请注意，下载文件中包含的MAC驱动程序与1031X不兼容）。
6. 请注意，如果您的PC连接到MCT驱动程序，它将自动从Internet更新到最新版本。
7. 检查安装是否成功： 
    * 对于DisplayLink驱动程序，您应该在“程序和功能”中看到一个名为“ DisplayLink Core Software”的项目。在旧版本中，您还将看到“DisplayLink Graphics”。
    * 1031X驱动程序将在PC上的“程序和功能”中显示为“Trigger External Graphics Family...”-请参阅此页面底部的屏幕截图。

一旦安装了相关的驱动程序，请检查Windows服务中是否正在运行“Wacom Professional Service”服务-如果没有，请手动启动它。
对于DisplayLink驱动程序，还应该有一个名为“ DisplayLinkManager”的服务，该服务也应该正在运行。

对于DTU-1031X，没有这样的服务，但是您应该在系统托盘中找到一个新的紫色图标。
请查看下面的“程序和功能”屏幕截图，以了解该图标的外观。
&nbsp;  
在尝试捕获签名之前，请检查以下内容：
* 有关的数位板已配置为可作为扩展显示屏运行
* 数位屏正在显示Windows背景
* 笔已校准-首次将笔放置到数位屏感应区上时，校准对话框应自动出现-如果没有，请从Wacom控制面板运行它

#### 故障排除

完成上述任务后，如果签名捕获窗口未出现或已出现但没有墨迹，请按照以下步骤操作：
* 卸载并重新安装平板电脑驱动程序
* 如果失败，则运行capture analyser 测试工具 - 可执行文件名为 "FlCaptureAnalyser.exe" 可以在以下位置找到：
   _C:\Program Files (x86)\Common Files\WacomGSS_  
    or  
   _C:\Program Files\Common Files\WacomGSS_ (如果您安装了Signature SDK的64位安装程序)  
 如果尚未安装SDK（可能是因为您安装了sign pro PDF）， 请从[测试签名捕获页面](../q-sig/howto-test-sdk)下载**CaptureAnalyser**。
  
启动捕获分析器后，请在“Service”菜单下选择“Test Capture”选项，然后选择“ wintab”，并将输出作为文本文件附加到支持凭单。

如果您在执行上述步骤时遇到任何困难，请提交支持请求。

&nbsp;  

####    "程序和功能"中显示的 Trigger Family 视频驱动 and Wacom tablet 驱动:

![mct driver](assets/q-tablet/mct.png) 

---

## 测试DTU功能是否正常

#### 1.  检查设备管理器以确保所有HID显示设备均已显示，没有任何事件（即黄色的感叹号）
  
#### 2.  使用以下方法之一检查Wacom驱动程序是否正常运行：  

   * 打开Wacom桌面中心
   * 转到“支持”，该按钮在左侧窗格中
   * 选择“驱动程序检查”
   * 点击“开始”
   * 如果下一个对话框显示检查成功，则表明驱动程序没有任何问题

  另一种方法是：

 * 打开Wacom数位板属性
 * 在顶部的“设备”行中选择DTU设备
 * 选择“关于”按钮
 * 选择“诊断...”以查看实时手写笔输入
 * 如果在选择“诊断”时按住CTRL按钮，您将获得我们所描述的“原始”数据-即，它实际上是未经处理的


---

## Wacom数位板驱动程序6.3.30需要.NET Framework 4.5

只有Wacom Desktop Center功能才需要.NET 4.5，该组件包含在6.3.30驱动程序包中。  
Wacom Desktop Center软件不支持DTU-1141或1141B，因此无需安装该设备以与该设备一起使用。
如果客户在安装过程中使用“/opt nowdc”参数，则他们可以排除该功能，.NET 4.5将不会尝试安装。

例如:
```
    C:\Users\<user>\Desktop\WacomTablet_6.3.30-6.exe /opt nowdc
```
---

## DTU需要什么显示驱动程序？

除了Wacom数位板驱动程序外，DTU 1031、1141和1141B还需要安装[DisplayLink图形驱动程序](http://www.displaylink.com/support/downloads.php)  
 
1031X和1031AX（Adonis Light）需要MCT提供的不同的图形驱动程序。
为此，请下载[UV-A8301 USB 2.0 Trigger Family Display Adapter](https://www.mct.com.tw/download.php?lang=en&tb=1&cid=28)。（请注意，下载文件中包含的MAC驱动程序与1031X或AX不兼容）。

所有其他DTU，DTH和DTK平板电脑都使用标准的视频连接，例如DVI，HDMI，DisplayPort或USB Type-C，并且不需要附加的视频图形驱动程序。

**请注意：**  
DisplayLink和MCT驱动程序通常不应该一起安装在同一台PC上，因为它们不兼容-实际上，它们在安装时会相互冲突。
可以避免在最新版本的Windows 10上发生冲突，在该版本上DisplayLink已与Microsoft合作在Windows提供原生支持。

在Windows的较早版本中，无法安装两个驱动程序，因此在那种情况下，DTU 1031和1031X不能在同一台计算机上一起使用。

---

## DisplayLink驱动程序安装的日志文件在哪里？

DisplayLink驱动程序的安装日志文件是 ```setupapi.xxx.log```  
(其中 "xxx" 可以是 "offline" 或 "setup" 或 "dev" 或 "upgrade")  
可以在以下位置找到 ```C:\Windows\INF```

---

## Windows无法验证此设备所需驱动程序的数字签名

#### 情景  

 1. Wacom数位板驱动程序已安装在PC上
 2. 已安装适当的图形驱动程序（MCT或DisplayLink）
 3. Wacom数位板属性显示错误“您的设备未连接到计算机” 
 4. 设备管理器报告错误52：“ Windows无法验证此设备所需的驱动程序的数字签名” 
 5. Windows Update KB3153171已安装或不适用于计算机

#### 可能的解决方案  

计算机上很可能没有安装必需的SHA-2驱动程序签名支持。这是通过Windows更新分发的，客户可以查看其已安装的更新以查看是否已安装。
2014年10月以后生产的所有新硬件驱动程序都需要SHA-2驱动程序签名。SHA-2驱动程序签名是Windows 8和Windows 10的固有功能，但不是Windows 7的固有功能。
如果没有安装必要的更新，Windows 7将认为驱动程序的SHA-2签名无效，因为它无法识别签名。

有关此问题的更多信息，请参见以下相关知识库更新的Microsoft支持文章： [https://docs.microsoft.com/en-us/security-updates/securityadvisories/2015/3033929](https://docs.microsoft.com/en-us/security-updates/securityadvisories/2015/3033929)

---







