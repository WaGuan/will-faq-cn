---
id: stu-sdk-runtime
title: 运行时问题
---
*以下各节包含一系列技术支持问题和解答：Windows 8.0可以正常使用所有STU设备。*

## .NET 应用程序生成一个"Strong name validation error"错误

#### 问题
.NET 应用程序生成一个"Strong name validation error"错误

这可能是由于在Visual Studio解决方案中使用了过时的Interop文件引用引起的。  

确保安装了最新的SDK，然后更改解决方案上的Interop参考，以使其指向相应的SDK安装文件夹中的相关Interop文件，如下所述。  

#### 32位应用

##### STU SDK 

STU SDK只有一个32位互操作文件 - **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32\Interop.wgssSTU.dll**

##### Signature SDK 

Signature SDK的所有32位互操文件作都在 **C:\Program Files (x86)\Common Files\WacomGSS**


#### 64位应用

##### STU SDK

STU SDK只有一个64位互操作文件，它是 **C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64\Interop.wgssSTU.dll**

##### Signature SDK 

Signature SDK的所有64位互操作文件都在 **C:\Program Files\Common Files\WacomGSS**

---

## "Failed to retrieve a COM class factory for component with CLSID...class not registered"

#### 问题
错误 "Failed to retrieve a COM class factory for component with CLSID...class not registered"

完整的错误消息通常比上述更长，并且与以下内容相似：

```
"Retrieving the COM class factory for component with CLSID (2000D7A5-64F7-4826-B56E-85ACC618E4D6) failed due to the following error: 80040154 - class not registered. " 
```

通过为AnyCPU编译.NET程序并尝试在仅注册32位DLL的计算机上运行该程序，可能导致此错误。  
STU或Signature SDK可能会发生这种情况。  

解决方案是将AnyCPU更改为x86（STU SDK仅注册32位DLL）或手动注册64位DLL。  
要手动注册64位DLL，请根据所使用的SDK进行以下操作。 

#### STU SDK

* 安装SDK
* 使用管理员权限启动命令提示符
* 转到安装SDK的DLL的目录，即 wgssSTU.dll.
* 请注意，安装程序会将DLL放在 **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32** (或在32位PC上的 **C:\Program Files\Wacom STU SDK\COM\bin\x64**)，但是我们建议将其安装在其他地方以进行开发和重新分发。
* 从提权的提示符下运行以下命令：  

    _regsvr32 wgssSTU.dll_

#### Signature SDK

如果在安装SDK时运行了64位安装程序，则不会出现上述COM类工厂，因为64位安装程序注册了64位DLL。  
如果您运行32位安装程序或64位安装程序而未选择64位组件，则请执行以下操作：  

* 运行64位安装程序并选择64位组件 - 这将注册64位DLL。 

如果出于任何原因您仍然想要手动注册64位DLL，请使用管理员权限启动命令提示符，然后按照以下步骤操作：

```
 C: (如果需要)
 cd \Program Files\Common Files\WacomGSS
 regsvr32 FlSigCapt.dll
 regsvr32 FlSigCOM.dll
 regsvr32 FlWizCOM.dll 
```

---
## Windows 8.1上"Pad not found"错误 

#### 问题
Windows增强电源管理存在问题，该问题已在Windows 8.1中进行了修正。

Windows 8.0可以正常使用所有STU设备。 

#### 解决方案
Windows 8.1更改了增强型电源管理，因此在不使用STU签名板时会关闭电源。  

这导致STU签名板对于SDK软件不可用，并且用户将看到诸如"pad not found"之类的错误。

最新型号STU-430、530、540不受增强型电源管理的影响，并且可以毫无问题地使用，因为它们使用了不同类型的USB接口。

为防止其他型号关闭电源（STU-300/430/500/520），请安装STU平板电脑驱动程序-STU-300通常不需要此驱动程序，但是它将防止平板电脑关闭电源。

---
## 64位编译无法运行

#### 问题
SDK会安装并注册64位应用程序找不到的32位组件**wgssSTU.dll**。

#### 解决方案
注册64位组件，并可以选择取消注册32位DLL。

要注册64位DLL：

* 使用管理员权限启动命令提示符cmd.exe
* 将目录更改为安装文件夹，即 **_cd C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64_**
* 注册DLL： **_regsvr32 wgssSTU.dll_**

&nbsp;  
如果不需要，则可以从其文件夹中注销32位dll，如下所示：  
&nbsp;  
&nbsp;  
```
cd C:\Wacom STU SDK\COM\bin\Win32
regsvr32 /u wgssSTU.dll
```

---

## Windows 7无法连接到签名板

使用Office 2013的Windows 7上存在端口访问问题。 

当Office 2013或Lync运行时，会有一些启动代码可以打开STU板。之后，将签名板保持打开状态，并且不能以独占方式使用。

Signature和STU SDK通常需要独占访问签名板，以防止不同的应用程序尝试同时访问该板而引起的潜在冲突。

有关更多信息，请参见此相关的常见问题解答：[STU HID诊断工具](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool)

Windows 8上的Office 2013不会发生访问问题。

另外，由于STU-430或530的固件定义了不同类型的USB接口，因此不会发生这种情况。

解决方案因所使用的SDK而异：

#### STU SDK

解决方法是使应用程序对STU板使用共享访问而不是排他访问： 
例如，更改  
&nbsp;  
```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], true);
```

至

```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], false);
```

#### STU SigCaptX

使用STU SDK跨浏览器，需要以下语法来启用共享连接：  

```
 return intf.connect(m_usbDevices[0], true);
```

#### Signature SDK

要使用Signature SDK解决共享访问问题，必须按如下所述创建注册表值。

**32-bit SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "stuShared"=dword:00000001

**64-bit SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stuShared"=dword:00000001

使用共享访问的风险在于，另一个应用程序也可能会打开同一STU设备，然后I/O命令可能会相互冲突。  
 如果可能的话，应采取措施避免这种情况。

---

## 无法将签名板连接到远程桌面/Citrix

当前，有两种方法可以使STU签名板在远程桌面，瘦客户端或Citrix环境中工作：  

#### 1. 串行操作

   使用单色 **STU-430V** 串行设备或彩色 **STU-540** 签名板（可以配置为串行操作）。

   当STU板用作串行设备时，它们不受Windows应用于作为标准USB设备的STU相同的限制。  
   [STU串行连接指南](../q-stu/stu-tablet#STU-Serial-Connection)中提供了430V的设置  
   对于430V，请参见[STU-430V的安装和配置](../q-stu/stu-430-installation)。  
   对于540V，请参见[STU-540串行操作配置](../q-stu/stu-540-installation)。  

   串行模式下的STU 430V和540可以与我们的SDK（STU和Signature）一起使用，但必须经过适当的编程  
   但请阅读下面有关Citrix的特别说明。  

#### 2. USB重定向

   使用其他产品将笔数据转发到服务器（USB重定向）。  

   多种第三方工具可用于执行此操作，例如：  

   * [USB for Remote Desktop by Fabulatech](https://www.fabulatech.com/usb-for-remote-desktop-download.html#tab_usbrdp-win-current)
   * [Dell Wyse TCX](http://www.dell.com/ed/business/p/wyse-tcx/pd)
   * [USB Redirector TS Edition by Incentives Pro](http://www.incentivespro.com/usb-redirector-ts.html)
   * [USB Network Gate by Eltima](https://www.eltima.com/products/usb-over-ethernet/)  

   请注意，尽管我们在某些配置中已经取得了一些成功，但我们不能保证它们将在您的特定环境中工作。  
   我们没有上述工具的任何性能度量，也没有为它们提供支持-您需要联系供应商自己进行测试。


#### 有关CITRIX兼容性的说明

Citrix 7.6.3（Feature Pack 3）引入了对Wacom签名板的本机支持，如[What's New article](http://docs.citrix.com/en-us/xenapp-and-xendesktop/7-6/xad-whats-new.html)文章所述。  

在撰写本文时（2019年7月），当前支持的设备列表如下：[Citrix支持的设备](../q-sig/sig-prog-general#signature-devices-supported-on-citrix)
 
可以在Citrix自己的网站上看到类似的信息：[Citrix兼容的Wacom Pen设备](https://citrixready.citrix.com/category-results.html?search=wacom)  
 
如果使用我们任何较旧的签名板，请提交支持请求。
 

对于较旧版本的Citrix（最常见的版本可能是6.5），则需要在串行模式下使用430V或STU 540。  
在撰写本文时，这些设备在XenDeskTop或XenApp 6.5上支持的最大波特率是每秒128,000位。  
如有疑问，请在上面给出的链接上提出支持请求，以请求最新信息，尤其是当您要使用其他版本的Citrix时。

---

## 将SDK下载到Windows 10会产生有关MSI损坏或无效的错误

在Windows 10上下载我们的安装程序时，这是一个已知问题。您应该发现文件实际上已经下载并且仍然可以执行它们。   

如果需要，以下变通方法可能会有所帮助： 

1. 如上所述暂时关闭SmartScreen筛选器控制面板中的安全性下如[这里](http://winaero.com/blog/how-to-disable-windows-smartscreen-in-windows-10/)所述。
2. 在您的Internet选项中将 https://gsdt.wacom.eu 添加为受信任的站点（假设您从那里下载了安装程序）


如果以上方法均无帮助，请提出支持请求。

---

## GDIplus 错误 

输出到只读文件夹中的文件，例如"C:\Program Files"，可能导致此错误。

预防措施：

1. 避免写入只读目录（甚至可能是您运行应用程序的目录）
2. 指定完整路径名
3. 确保目标文件夹本身存在

有关更多信息，请参见Microsoft的[Windows错误代码列表](https://msdn.microsoft.com/en-gb/library/windows/desktop/ms681382(v=vs.85).aspx)。

---

## 图片显示缓慢

#### 问题
上穿到STU设备的图像显示在显示器上的速度很慢。

#### 解决方案
有多种因素会影响将图像上传到STU签名板的速度。彩色设备（例如520和530）更容易发现速度缓慢。

应考虑以下因素： 
 
* 对于STU 520和530，可能需要签名板驱动程序-请参考 [STU驱动程序下载页面](../q-stu/stu-tablet#STU-Driver)
* 上载速度可能会受到图像大小的影响，因此请尝试确保图像文件的大小尽可能小
* 彩色图像的尺寸往往会比单色图像大得多-如果不需要彩色，则可以使用单色
* 用于对图像进行编码的编码模式会极大地影响上传时间-请参阅任何SDK示例以获取更多详细信息
* 如果您的STU签名板不是本地连接，而是通过远程桌面或瘦客户端配置，请考虑可能是网络问题
* 如果将430或530与STU SDK一起使用，请尝试使用writeImageArea()而不是writeImage()避免一次刷新整个签名板显示，因为这可以显著提高刷新速度
* 如果在签名板和PC之间不需要加密（可能是将签名板连接到本地PC的情况），请尝试捕获笔数据而不进行加密

---

##  SxS构建的Manifest文件错误

典型错误信息：
```
This application has failed to start because the application configuration is incorrect.  Review the manifest file for possible errors.
```

尝试运行已构建为可以并行运行（SxS）的.NET应用程序时，可能会发生上述错误。

这通常是因为app.manifest文件中的程序集标识版本号不正确。

要找到正确的值，请转到Windows应用程序的事件日志，并查找SideBySide错误消息以及启动应用程序的生成时间。

The error message itself will give the version number which Windows was expecting to find in the app.manifest file as below.错误消息本身将提供Windows通常在app.manifest文件中找到的版本号，如下所示。

![App Manifest](assets/q-faq/stu/SxS-Manifest.PNG)

---

## 使用setHandwritingDisplayArea / writeImageArea时出现问题

最重要的任务是正确定义作为参数传递给上述方法的矩形的坐标。

特别要注意的是，矩形坐标是从零开始向上编号的，因此左上角的坐标值为0,0。 

通过使用数位板的宽度和高度值来计算矩形的右侧坐标，可能会导致错误。 

例如，属性 _ICapability.screenWidth_ 将在530或540签名板上产生800的结果，但是使用该结果指定矩形的右侧坐标将失败。 

这是因为530或540上最右边的像素的x坐标是799，而不是800。 

同样，530或540的右下角y坐标不是480，而是479。 

因此，请注意以下语句： 
```
rect.LowerRightXPixel = rect.upperLeftXPixel + capability.screenWidth 
```
 This should be: 
```
rect.LowerRightXPixel = rect.upperLeftXPixel + capability.screenWidth - 1 
```

请注意，将无效的矩形传递给**setHandwritingDisplayArea()**不会产生错误-命令将仅失败并且显示区域不会从其当前值更改。 


另一方面，如果将无效的坐标值传递给**writeImageArea()**，则会引发异常。  

**注意**
最近的调查发现，使用STU-430的C#程序中**setHandwritingDisplayArea()**如果使用无效的像素位置，则将将产生错误。  
但是，对于STU-530或JavaScript，则不会发生这种情况。  

另请注意，**setHandwritingDisplayArea()**和**writeImageArea()**在较旧的签名板（例如300、500和520）上不可用。  

---

## STU SDK不支持DTU/DTK/DTH签批屏

STU SDK仅可与STU签名板一起使用。在撰写本文时（2019年8月），这些是STU 300、430、500、520、530、540和541。

在以下平台上可用： 
* Windows 7 SP1 或更高版本
* Linux
* MAC OS 10

请注意，MAC OSX不支持浏览器。 

有关DTU设备的低级API的详细信息，请参阅Wacom Device Kit。
 
---

## 不是所有用户都可以在Internet Explorer中使用Wacom插件

如果通过CAB文件安装了SDK组件，则会发生这种情况。 

 有2个CAB文件用于安装STU组件：

 
1. wgssColorSTU.cab
 （最初称为wgssSTU520.cab）- 它包括STU驱动程序安装程序，并且需要管理员权限。它为PC上的所有用户启用了STU组件。

2. wgssSTU.cab - 仅对当前用户启用STU组件，而不使用STU驱动程序。它不需要管理员权限）

---

## Windows无法验证数字证书 

安装了我们的STU或签名SDK后，尝试运行使用它们构建的应用程序时，您可能会遇到以下错误消息：  
&nbsp;  
```
    Windows cannot verify the digital certificate for this file. A recent hardware or software change
    might have installed a file that is signed incorrectly or damaged, or that might be malicious
    software from an unknown source.
```
&nbsp;  
在对Wacom可执行文件和DLL应用更严格的数字签名方法之后，首先会遇到这种情况，并且主要在Windows 7上发生
这种情况。附加保护措施是为了防止文件被修改的可能性。
 
如果已使用Windows Update完全更新Windows，则不会报告该错误消息。  
如果无法应用完整的Windows Update，则此特定更新通常可以解决问题：KB 3153171 
 
可以从[Microsoft.com](http://microsoft.com/)下载此更新： 

 
* [KB 3153171 - 32位](https://www.microsoft.com/en-us/download/details.aspx?id=52140)


* [KB 3153171 - 64位](https://www.microsoft.com/en-us/download/details.aspx?id=52069)


 ---
 