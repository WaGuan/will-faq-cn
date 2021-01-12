---
id: sig-prog-dtu
title: DTU
---

## 数据加密

数位板驱动程序对从数位板到驱动程序的USB数据进行加密。
在驱动程序中，数据未加密并发送到签批屏墨迹服务，因为任何未加密的平板电脑都会发送此类数据。

---
## 在签批屏上禁用鼠标，但允许使用笔

Actual Multiple Monitors (http://www.actualtools.com/) （由DisplayLink推荐，它为我们的多款签批屏提供了视频驱动程序）包括此功能。

 他们的网站对此[功能进行了描述](http://www.actualtools.com/multiplemonitors/features/multi_monitor_mouse/)。可以免费下载该工具的评估版，但永久许可证需要支付的费用。
 
 请注意，我们不为“Actual Multiple Monitors”提供支持，也不对使用它承担任何责任-如果有任何疑问或支持需求，请直接与相关公司联系。
 
 ---
 ## 将应用程序直接移动到DTU，而不是使用鼠标拖拽过去
 
从Windows 7开始，您可以使用键盘快捷键将窗口从一个屏幕移动到另一个屏幕：
 
 * Win+Shift+向右键 - 将当前窗口移至右侧屏幕 
 * Win+Shift+向左键 - 将当前窗口移至左侧屏幕 
 

有许多第三方应用程序通过热键或在图标上单击鼠标即可提供此功能。

例如：
 
 1. [Actual Multiple Monitors](http://www.actualtools.com/)
 2. [Ultramon](https://www.realtimesoft.com/ultramon/)


请注意，我们无法为Ultramon或Actual Multiple Monitors提供支持，也不对使用它们承担任何责任-在任何情况下，请直接与相关公司联系。

如果您的主要要求是在DTU上打开PDF，则sign pro PDF和Adobe都提供此功能，[如本Microsoft文章所述](http://answers.microsoft.com/en-us/windows/forum/windows_7-desktop/to-open-a-pdf-file-on-the-second-monitor/5a2d8b86-6b5c-45fb-87c3-8935c3d953cd?auth=1)。

另请参阅有关[使用双监视器捕获签名](../q-tablet/tablet-customise#select-the-monitor-to-be-used-for-signature-capture)的常见问题解答

---
## 直接在签批屏上打开特定的网站

下面的在线文档可能会有所帮助：
 
 * http://stackoverflow.com/questions/16363474/window-open-on-a-multi-monitor-dual-monitor-system-where-does-window-pop-up  
 * http://stackoverflow.com/questions/57652/how-do-i-get-javascript-to-open-a-popup-window-on-the-current-monitor/57684#57684  

其他解决方案，我们可能的建议有
 
 1. 使用“热键”将窗口直接移动到另一台监视器，而无需用鼠标拖动它，如[Actual Multiple Monitors](http://www.actualtools.com/)中所提供的
 2. Ultramon允许您运行自动化脚本的-例如，请参见https://www.realtimesoft.com/ultramon/scripts/ 上的LaunchApp


请注意，我们无法为Ultramon或Actual Multiple Monitors提供支持，也不对使用它们承担任何责任-在任何情况下，请直接与相关公司联系。

---
## 阻止Windows任务栏出现在签批屏上

DTU充当Windows桌面的扩展或副本，其功能与第二个监视器相同。

这意味着，在管理Windows桌面的各个方面时，可以将其视为第二个监视器处理。


#### Windows 7

在Windows 7上，任务栏通常不会显示在配置为充当桌面扩展程序的辅助监视器上。
 
如果要在每个显示器上都显示一个，则需要第三方软件支持-网上有多种应用程序可选，包括DisplayLink推荐的[Actual Multiple Monitors](http://www.actualtools.com/multiplemonitors/)


#### Windows 8

参考： http://www.eightforums.com/tutorials/5552-taskbar-hide-show-multiple-displays-windows-8-a.html


#### Windows 10

参考: http://www.tenforums.com/tutorials/3899-taskbar-hide-show-multiple-displays-windows-10-a.html
 
&nbsp;  
请注意，我们对上述网站和第三方软件的内容不提供支持或承担任何责任。

---
## 以编程方式控制签批屏打开或关闭

为了启用或禁用DTU显示（暂时将其打开或关闭），一种可行的方法是使用[DisplaySwitch](http://winaero.com/blog/switch-between-multiple-displays-monitors-directly-with-a-shortcut-or-from-the-command-line-in-windows-7-and-windows-8/)。 

有关其使用的更多详细信息，请访问[winaero.com](http://winaero.com/)。

例如，可以通过包含命令“displayswitch /internal”或“displayswitch /extend”的批处理文件激活，并链接一个桌面快捷方式。
然后可以轻松地根据用户的登录会话按需运行它。  

或者，您可能会发现第三方工具中提供了类似的功能，例如：

* [Actual Multiple Monitors](http://www.actualtools.com/)
* [Ultramon](https://www.realtimesoft.com/ultramon/)

请注意，我们无法为Ultramon或Actual Multiple Monitors提供支持，也不对使用它们承担任何责任-在任何情况下，请直接与相关公司联系。

---
## 查找在wtCintiq注册表项设置中使用的签批屏显示编号

1. 下载并安装 [EnumDisplayDevices](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/EnumDisplayDevices.zip)  
2. 下载并安装 [EnumDisplayMonitors](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet//EnumDisplayMonitors.zip)  
3. 如果需要，从命令提示符处运行EnumDisplayMonitors以查看显示设备ID的简短列表（请参见下面的示例1）
4. 从命令提示符处运行EnumDisplayDevices并查找标记为“ATTACHED_TO_DESKTOP”的显示ID（请参见下面的示例2）
5. 为**_wtCintiq_**注册表项使用适当的显示编号，例如**\\\\.\DISPLAY3** 


#### 示例 1
```
   lpRect {0,0 1920,1080}
      rcMonitor = {   0,   0 1920,1080}
      rcWork    = {   0,   0 1920,1040}
      dwFlags   = 0x00000001 [MONITORINFOF_PRIMARY]
      szDevice  = \\.\DISPLAY1  

    lpRect {1920,0 3840,1080}
      rcMonitor = {1920,   0 3840,1080}
      rcWork    = {1920,   0 3840,1040}
      dwFlags   = 0x00000000 []
      szDevice  = \\.\DISPLAY2  

   lpRect {3840,0 4864,600}
      rcMonitor = {3840,   0 4864, 600}
      rcWork    = {3840,   0 4864, 560}
      dwFlags   = 0x00000000 []
      szDevice  = \\.\DISPLAY3
```

#### 示例 2

```
    Name:   \\.\DISPLAY3
    String: Intel(R) HD Graphics
    Flags:  00000001 [ATTACHED_TO_DESKTOP]
    ID:     'PCI\VEN_8086DEV_016A\SUBSYS_1790103CREV_09'
    Key:    '\Registry\Machine\System\CurrentControlSet\Control\Video\{43767078-F844-4E74-9C90-E499C4F8E9B7}\0002'

    Number: 0
    Name:   \\.\DISPLAY3\Monitor0
    String: Generic PnP Monitor
    Flags:  00000003 [ATTACHED_TO_DESKTOP MULTI_DRIVER]
    ID:     'MONITOR\WAC1045\{4d36e96e-e325-11ce-bfc1-08002be10318}\0001'
    Key:    '\Registry\Machine\System\CurrentControlSet\Control\Class\{4d36e96e-e325-11ce-bfc1-08002be10318}\0001'
```

---
## 编写应用程序从签批屏上捕获签名

为DTU平板电脑编写签名捕获应用程序的最快方法是使用[Signature SDK](https://developer.wacom.com/developer-dashboard/downloads)-请参见"For signature"下的内容。

---
## 使用Signature SDK操作签批屏

签名SDK是通用的高级SDK，它在签名捕获笔设备上显示带有标准设计和格式的签名捕获窗口。
因此，它与几乎所有Wacom笔设备兼容，包括DTU和STU。
它的API并未针对DTU设备提供任何特定功能，因为它旨在提供通用的用户界面，该界面可在SDK中自动调整以适合当前的签名设备。

请注意，向导控件功能不适用于DTU，因为使用标准Windows窗体编程技术会更高效。

---
## Wacom签批屏的底层SDK开发
 
DTU平板电脑使用Wintab进行开发-接受Wintab API的DLL是Wacom平板电脑驱动程序的一部分随驱动安装。
无需下载任何单独的SDK-平板电脑驱动程序本身包含所有内容。

有关Wintab的更多信息，请访问我们的[Wacom开发者关系网站](https://developer.wacom.com/) 。

有关使用Wintab SDK的所有技术疑问，都可通过支持请求提交。

---
## Wacom签名板和Signature SDK向导控件

向导控件仅供STU签名板使用。

它可以通过LCD显示屏上显示的一组指令页面对用户进行引导，每个页面都需要通过笔点击签名板上按钮进行选择，例如，通过点击单选按钮然后选择‘Next’。

当使用Wacom签名显示器（例如：用DTU-1031充当Windows桌面的扩展）时，可以使用标准Windows应用程序实现类似的功能。

---
## 为什么STU SDK不支持我的DTU/DTH/DTK签名板？

STU SDK仅支持STU系列签名板。截至本文撰写时（2018年7月），这一系列产品有STU 300、430、500、520、530、540和541。
可在以下平台上使用：

* Windows 7 SP1 或更高版本
* Linux
* MAC OS 10

请注意，Linux或MAC OSX不支持浏览器。 
有关DTU设备的底层API的详细信息，请参阅Wacom Device Kit.

---
## 获取DTU的序列号

#### 通过设备管理器

DTU的序列号通常应显示在设备管理器中属性窗口的“设备实例路径”中。它看起来应该像这样：
  
> **USB\VID_056A&PID_0336\5AZQS00085**


#### 通过Wintab

使用Wintab，可以从设备上下文中获取序列号。

例如，在ScribbleDemo代码示例中，将以下调用添加到**_OpenTabletContexts_**函数的开头。
&nbsp;  
```C++
char uniqueTabletID[32] = { 0 };
int numBytes = gpWTInfoA(WTI_DEVICES, DVC_PNPID, uniqueTabletID);
```  
&nbsp;  
这会用设备0的序列号填充**_uniqueTabletID_**。
如果系统上有多个Wacom设备（或者用户首选项具有多个设备的信息，并且以前插入了不同的设备），那么可能有必要获取设备1或设备2的序列号，等等。
可以按照以下步骤进行操作：
&nbsp;  

```c++
int deviceNumber = 0; // 这里指定设备号
char uniqueTabletID[32] = { 0 };
int numBytes = gpWTInfoA(WTI_DEVICES + deviceNumber, DVC_PNPID, uniqueTabletID);
```  
&nbsp;  

如果仅将DTU-1141连接到系统，而不连接其他Wacom设备，则始终可以确保连接到系统的DTU-1141是设备0。
或者，可以通过以下任一方法来实现：

1.  

    * 清除用户首选项（这是破坏性的，将删除用户设置）
    * 停止Wacom Professional Service服务
    * 删除**C:\Users[USERNAME]\AppData\Roaming\WTablet**的内容
    * 启动Wacom Professional Service服务  
&nbsp;  

2.  在命令提示符处执行以下命令：

>  **C:\Program Files\Tablet\Wacom\32\PrefUtil.exe /remove-all**

&nbsp;  

请注意，该服务需要几秒钟才能完全启动，具体取决于机器。

---
---









 











 





