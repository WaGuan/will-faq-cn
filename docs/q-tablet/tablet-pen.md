---
id: tablet-pen
title: 手写笔配置及故障排除
---

## 确保笔操作与系统光标分离

通常两个用户无法互不干扰地操作同一个会话窗口，因为这需要两个系统光标而且Windows系统并不允许这种情况。
另外Windows只接受来自当前活动（光标选中的）窗口或应用的输入，并且不能同时有两个活动的应用或窗口。


解决这个问题的一个方法是配置DTU设备工作在所谓的“STU模式” - 也就是只有在Wacom驱动面板中指定的应用程序才可以响应笔操作。
这种情况下PC的操作者可以打开相关的应用且显示到DTU设备屏幕上 - 然后DTU用户就可以用笔在DTU上操作应用程序了。
关于更多详细信息情况阅读DTU运行模式指南。
为了防止系统光标跟随笔移动，可以结合STU模式在你的Wintab程序中应用 **CXO_SYSTEM**。 
或者注册表中的 **SyncCursor** 项设置可以在Signature SDK或sign pro PDF应用中（捕获签名时）实现同样的效果。
关于**SyncCursor**的更多信息，请阅读Signature SDK下载包中documentation文件夹内的Signature SDK API参考手册(下载地址：https://developer.wacom.com/en-us/developer-dashboard/downloads)。

但是请注意，STU模式不允许在PC监视器和DTU上并发输入——它的主要目的是防止DTU操作员接管系统光标，除非在预先指定的应用程序中。

另一种解决方案是编写一个Wintab应用程序，通过为笔创建一个虚拟光标，使笔能够独立于鼠标和键盘进行操作。

下面两个程序展示了这方面的例子:

* **[ScribbleDemoOverlap](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/ScribbleDemoOverlap.zip)**
* **[DTU-multiple-cursors](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/tablet/dtu-multiple-cursors.zip)**


 这些示例展示了基本原理——创建适合本地需求的应用程序需要进一步的编程工作。
 ---
 
## 笔迹与笔尖不一致（没对齐）
 
#### 问题

当在DTU(或其他扩展Windows桌面的Wacom设备)上签名时，墨迹与笔不一致。

#### 解决方案

如果墨迹距离笔尖只有几毫米，那么你可能需要通过**Wacom Tablet属性**控制面板来校准你的Wacom设备。

如果墨点距离很远，甚至在签名捕获窗口之外，那么通常的补救方法是删除用户的首选项。

可以通过**Wacom桌面中心**完成，你可以通过你的开始菜单找到它。

当它出现时，点击左边的**备份设置**，然后“重置设置”(下面红色圆圈)，等待它完成。

如果以上两项都不能正常工作，请参阅[FAQ 笔偏移](#pen-gap-offset-problems)

![preferences](assets/q-tablet/desktopcenter.png) 

--- 

## 操作模式-用于控制笔如何影响系统光标

请注意，本FAQ中用于安装命令的驱动程序版本(6.3.36-1)是本文撰写时的最新版本，即2019年8月。
这个版本号应该替换为您正在使用的版本。

Wacom行业方案的签名屏有两种操作模式，如DTU 1141、DTU 1031X和DTH 1152。
这两种模式是:

* DTU 模式
* STU 模式

DTU模式是正常的平板电脑使用。平板上的笔在DTU显示器上工作并移动光标;通过驱动属性控制面板可以对平板的按钮进行编程。
STU模式之所以如此命名，是因为它模仿了较小的Wacom STU签名平板电脑(LCD显示)的行为。

在“STU模式”下，笔只能在Wintab应用中使用，或者只能在通过驱动属性面板“+”按钮添加的应用中使用，如下图所示。
此外，STU模式禁止笔移动系统光标。

![properties](assets/q-tablet/cpl_penplus.png) 

在驱动程序版本6.3.17-3之前，需要运行一些脚本来设置STU模式(这些脚本仍然随驱动程序一起提供)。
但是，从6.3.17-3开始，您可以使用安装程序选项**_/custom STU_MODE_**安装用于STU模式的驱动程序

安装程序可执行文件setup.exe 是下载驱动程序的一部分需要被解压缩(将.exe替换为.zip)。

#### 脚本化的安装  

脚本可以通过以下两种方式之一设置STU模式:

 1. Download installer, 6.3.36-1.exe, replace .exe with .zip, unzip, execute **_Scripts\SetSTUMode.cmd_** in the unzipped folder.
 下载安装程序，6.3.36-1.exe，将.exe替换为.zip，解压缩，执行位于解压缩后的文件夹中的**_Scripts\SetSTUMode.cmd_**。
 2. 下载安装程序，6.3.36-1.exe, 将.exe替换为.zip，解压缩，在解压后的文件夹中执行 **_setup.exe /custom STU_MODE_** 。

 
注意，执行**_setup.exe_**如果不带命令行选项，则正常安装驱动程序(返回到DTU模式)。这与**SetDTUMode.cmd**脚本实现的功能相同。

#### 手动安装

要手动设置STU模式，可以在安装驱动程序时设置，也可以在以后设置。

##### 在安装时配置STU模式  

 1. 下载驱动
 2. 重命名驱动安装文件，把**WacomTablet_6.3.36-1.exe** 改为 **WacomTablet_6.3.36-1.zip**
 3. 将生成的zip文件解压缩到您选择的位置
 4. 使用管理员权限启动命令提示符
 5. 在解压缩的文件夹中找到setup.exe
 6. 运行: **_setup.exe /custom STU_MODE_**
 7. 重启电脑

##### 在驱动程序安装后配置STU模式

 1. 重命名驱动安装文件，把**WacomTablet_6.3.36-1.exe** 改为 **WacomTablet_6.3.36-1.zip**
 2. 将生成的zip文件解压缩到您选择的位置
 3. 使用管理员权限启动命令提示符
 4. 在解压缩的文件夹中打开Scripts目录 
 5. 运行：**_SetSTUMode.cmd_**
 6. 出现重启提示时，重启电脑
 7. 重启后移除用户配置文件


注意，执行**_setup.exe_**如果不带命令行选项，则正常安装驱动程序(返回到DTU模式)。这与**SetDTUMode.cmd**脚本实现的功能相同。

更多信息请阅读 [DTU Operating Modes Guide](../q-tablet/tablet-installation#dtu-1141-operating-modes-manual)

---

## 笔工无法正常使用 

各种因素都会影响笔的操作，请检查以下事项:

 * 确保您已经安装了DisplayLink或MCT驱动程序。 
&nbsp;  
 * 检查设备管理器，确保DTU出现在连接的设备列表中-如果没有尝试重新安装Wacom驱动程序并重新启动。 
&nbsp;  
 * 确保平板电脑USB直接连接到机器后面的USB端口(主板上的一个端口)，而不是通过集线器或其他USB扩展。  
&nbsp;  
 * 在BIOS设置中，确保“boot from USB stick”和"USB legacy support"选项被关闭。
&nbsp;  
&nbsp;  
 * 试着把签名板从其他电子设备上移开——有时近距离可能会造成干扰，导致笔抖动。
   如果您看到抖动现象，请尝试移动平板，看看这是否会对问题产生影响。  
   如果这种情况下解决了问题，那么要么保持这个距离，要么使用一些屏蔽。
   虽然不可能给出一个明确的规则来避免发生干扰的距离，但我们建议使用多个平板电脑时，至少要间隔30厘米。
&nbsp;  
 * 检查Windows USB电源管理设置如下:

    * 在设备管理器中，打开USB ->Root/Hub->属性->高级->电源管理
    * 禁用Windows关闭设备以节省电力的选项。
    * 如果不关闭，Windows可能会断开或减少USB电源，这样签名板就只能作为鼠标工作，而笔将无法控制系统光标。
&nbsp;  
&nbsp;  
 * 连接注意事项，以确保有足够的电量(电量不足会导致笔的间歇性响应):
    * 确保平板电脑是直接插入PC上的USB端口，而不是插在USB Hub上。
    * 将DTU上的辅助USB电缆连接到PC上单独的USB端口，以增加DTU的电源可用性

---

##  笔尖与光标有间距 (偏移) 问题 

有许多因素可能会造成笔尖位置和墨迹存在间隙。
请参阅下面可能的解决方案列表。
 
1. 尝试使用Wacom控制面板上的标准校准工具重新校准笔。  
&nbsp;  
2. 通过Wacom桌面中心的“备份设置”选项卡重置设置(这是一个独立的工具，与Wacom平板电脑属性控制面板不同)，然后重新校准笔以确保。  
&nbsp;  
3. 如果使用DTU、DTH或DTK签名屏，请检查是否以本机分辨率运行，即Windows允许的最大分辨率。
&nbsp;  
4. 确保你没有变更任何Windows文本大小的设置[在 Windows 10 中更改文本大小](https://support.microsoft.com/zh-cn/help/4028566/windows-10-change-the-size-of-text) (同时参考下面第10条).  
&nbsp;  
5. 确保你已安装了最新版本的 [Wacom Tablet 驱动](https://www.wacom.com/zh-cn/support/product-support/drivers) 或者 [Wacom Feel 驱动](http://us.wacom.com/en/feeldriver/) 如果你是通过触摸屏电脑或使用带有笔的平板电脑来捕获签名。
&nbsp;  
6. 检查你是用的是最新版本的Signature SDK，在网站的"For signature"标签页下载 [https://developer.wacom.com/developer-dashboard/downloads](https://developer.wacom.com/developer-dashboard/downloads)  
&nbsp;  
7. 卸载Wacom tablet驱动，重启电脑，重装驱动然后再重启电脑。

    重启是非常重要的。如果第一次没有改进，就重复整个过程。 
&nbsp;  
8. 尝试以下注册表设置(但不要同时使用它们):  

    **wtMapDigitizer** (try setting to 0)  
    **wtCintiq** (try setting to **\\\\.\DISPLAY1** for a tablet PC or **\\\\.\DISPLAY2** for a DTU attached to a desktop PC)  

    这些注册表值应该放置在正确的位置，取决于系统配置情况:  

    * 32位Windows上的32位应用程序，或64位Windows上的64位应用程序: _[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]_
    * 64位Windows上的32位应用程序: _[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]_  
&nbsp;  
9. 在 **C:\Windows\System32:**文件夹中，检查是否存在以下文件 
   * **Wacomtabletdefaults.xml**
   * **Wacom_tablet.dat**

   如果存在，并且您的系统不要求所有用户都使用相同的校准设置，那么请根据需要移动、重命名或删除它们。
   然后删除用户配置文件并重新校准钢笔。   
&nbsp;  
10. 如果您使用的是高分辨率的DTU 1141产品，请检查显示器的DPI设置如下：  

    * 桌面上右键单击，选择“屏幕分辨率”
    * 选择显示器(如DTU-1141)
    * 点击“更改文本、应用等项目的大小”
    * 选择 100% （推荐）设置
    * 应用设置
&nbsp;  
11. 如果以上方法都不起作用，而您使用的是平板电脑，那么请使用**_tabletpc;wintab_**作为您的**_CaptureService_**注册表设置。

    这在SDK下载中提供的签名SDK API参考手册7.1节中有详细说明。  
&nbsp;  

12. 如果您遇到的问题是笔抖动或间歇性响应，而不是持续大小的笔偏移问题，请参阅[笔无法正常使用](../q-tablet/tablet-pen#pen-does-not-work-properly)

---

## 笔写的字在电脑显示器上而不是在数位屏上
 
如果笔的光标映射到错误的显示屏，尝试以下方法：

1. Remove your tablet preferences with the tablet attached.  You can remove preferences using the Wacom Preference File Utility which is installed with the driver.  删除数位板带的用户配置文件。您可以使用与驱动程序一起安装的Wacom数位板配置文件管理工具来删除用户预置配置文件。
&nbsp;  
2. 在Wacom数位板属性的校准选项卡中更改监视器选择。

---

## 防止弹出校准提示

请注意，在Wacom平板驱动程序的最新版本中，校准提醒已经被删除。
这是因为除了需要在旧平板电脑上执行精确工作的客户外，手工校准已经不再需要了。
如果您的系统提示您的用户进行校准(可能是因为您使用的是较老版本的数位板驱动程序)，那么请使用这里提供的解决方案。 [System-wide implementation FAQ](../q-tablet/tablet-customise#system-wide-implementation-of-pen-and-tablet-settings)  

---






 

