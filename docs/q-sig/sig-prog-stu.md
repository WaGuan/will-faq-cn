---
id: sig-prog-stu
title: STU
---

## STU SDK和Signature SDK之间的区别

这两个SDK之间的主要区别如下：

#### 高级别的 Signature SDK

* 简化签名捕获，支持一系列的Wacom平板电脑（包括STU和DTU）
* 签名数据以未公开的专有格式保存，并且可以与其他Wacom签名产品一起使用，例如Signature Scope和签名验证
* SDK中提供了签名图像创建
* 用户界面和签名数据格式由SDK定义
* Signature SDK无法使用多个平板电脑，因为它没有选择设备的机制
* 使用Wacom墨水层语言（WILL）渲染签名，以提供高质量的数字笔和墨水体验

#### 低级别的 STU SDK

* 仅用于一系列STU平板电脑的签名捕获
* 开发人员可以自由地以任何格式保存签名数据，但这将与未公开的Signature SDK数据不兼容
* 用户界面和签名数据格式对开发人员开放
* 签名图像必须由开发人员根据笔数据值创建

---
## Windows 7上的连接失败

使用Office 2013的Windows 7上存在端口访问问题。

在运行Office 2013或Lync时，会有一些启动代码可以打开STU板。之后，签名板将保持打开状态，并且不能以独占方式访问。

签名和STU SDK通常需要独占访问签名板，以防止不同的应用程序尝试同时访问该板而引起的潜在冲突。

有关更多信息，请参见此相关的常见问题解答：[STU HID诊断工具](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool) 

Windows 8上的Office 2013不会发生访问问题。

此外，由于STU-430或530的固件定义了不同类型的USB接口，因此不会发生这种情况。

解决方案因所使用的SDK而异：

#### STU SDK

解决方法是使应用程序对STU板使用共享访问而不是排他访问：
例如，更改  
&nbsp;  
```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], true);
```

为

```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], false);
```

#### STU SigCaptX

使用STU SDK跨浏览器，需要以下语法来启用共享连接：

```
 return intf.connect(m_usbDevices[0], true);
```

#### 签名 SDK

要使用Signature SDK解决共享访问问题，必须按如下所述创建注册表值。

**32位 SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "stuShared"=dword:00000001

**64位 SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stuShared"=dword:00000001


使用共享访问的危险在于，另一个应用程序也可能会打开同一STU设备，然后I/O命令可能会相互冲突。
如果可能的话，应采取措施避免这种情况。

---
## 测试工具

STU签名板的测试实用程序下载[STU实用程序](../q-stu/stu-tablet#STU-Utilities)。
其中最有用的是**PenData**和**Identify**。
这些工具无需安装SDK就可以运行。

此外，以下内容很有用：
 
* [STU HID诊断工具](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool)（命令行诊断程序）
* [Capture Analyser](../q-sig/howto-test-sdk) 测试工具（检查可用的签名捕获设备）

---
## 自定义STU签名板显示以添加定制文本或图像或让用户在签名之前回答问题

标准Signature SDK签名捕获窗口上可用的自定义地方仅限于一些次要功能，例如字体的使用和捕获区域的尺寸。
在签名SDK下载文件中包含的API参考手册的第7节中对此进行了描述，该文件可在此处的“For signature”下找到：

   https://developer.wacom.com/developer-dashboard/downloads  

在SDK的第3版中，我们还引入了更改墨水宽度和颜色以及背景纹理的可能性。在同一下载中提供的第3版开发人员手册中对此进行了描述。
请参阅 [自定义签名捕获窗口](../q-sig/sig-prog-general#customising-the-signature-capture-window)


如果您使用的是Signature SDK，并且要对签名板的显示进行重大更改，则需要使用向导控件（仅限于使用STU硬件产品的情况）。
Signature SDK示例中提供了各种基于向导的示例。
 
如果您想在签名板空闲时显示图像，可以使用我们的[STU幻灯片播放工具](../q-sig/howto-slideshow) 

---
## 找出保持USB口打开状态的进程

1. 下载并安装[STU HID诊断工具](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool) 
&nbsp;  

2. 下载并安装以下任一程序： 

    * [handle.exe](https://docs.microsoft.com/en-us/sysinternals/downloads/handle)
    * [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)  
&nbsp;  

3. 打开命令提示符并键入：**hidinfo kernel**
&nbsp;  

4. 在列表中找到STU数位板（该行已“056a.00a ....”开始）。
&nbsp;  

5. 记下语句“kernel = ...”的引号内的文本（例如“\Device\0000006b”）
&nbsp;  

6. 使用以下方法之一确定打开该签名板的过程：
&nbsp;  

    1. 使用handle.exe（命令行）：

        * 以管理员身份打开命令提示符，然后键入：
        * **handle -a "???"** (其中“???”是您上面记下的设备名称，例如：**handle -a "\Device\0000006b"**)
        * 这将返回一个在签名板打开了句柄的进程列表
&nbsp;  

    2. 使用 "Process Explorer":
        * 以管理员权限打开Process Explorer。
        * 选择菜单项“查找”->“查找句柄或DLL”。
        * 在输入框中输入您记下的文字（不带引号），然后按搜索按钮。
        * 这将返回具有平板电脑句柄的进程列表。

---
## 现有的应用程序无法与新的STU 430/530签名板一起使用

旧版的SDK不支持STU 430和530。

STU SDK 2.1.1版（于2013年11月11日发行）和Signature SDK 1.11.2版（于2013年10月23日发行）引入了对这些模型的支持。

STU SDK（也称为Vinae SDK）的发行分支1使用了一个名为**STUTablet.dll**的DLL和与当前STU SDK不同的API。


如果您有此较旧的发行版分支，则还需要使用当前STU示例作为指南来重做所有现有的应用程序代码。

请下载适当的SDK和示例的最新版本，以确保兼容性。

现在可以随时从我们的[开发者关系网站](https://developer.wacom.com) 上的“资源”页面下载SDK，
您需要首先通过主页右上方的“登录”链接在网站上进行注册。 

---
## 在Windows 8.1上找不到签名板

Windows增强电源管理存在问题，该问题已在Windows 8.1中进行了修改。

Windows 8.0可以正常使用所有STU设备。

#### 解决方案

Windows 8.1更改了“增强型电源管理”，因此在不使用STU签名板时会关闭电源。

这导致STU签名板对于SDK软件不可用，并且用户将看到诸如“找不到签名板”之类的错误。

最新型号STU-430、530、540不受增强型电源管理的影响，并且可以使用，因为它们使用不同类型的USB接口，因此不会出现问题。

为防止其他型号关闭电源（STU-300/430/500/520），请安装STU平板电脑驱动程序-STU-300通常不需要此驱动程序，但是它将防止关闭签名板的电源。

---
## STU-540签名捕获

要在具有串行连接的签名模式下使用STU-540，请遵循以下说明：[如何使用以串行模式运行的STU-540平板电脑进行签名？](../q-app/app-signpro#how-do-i-sign-with-an-stu-540-tablet-operating-in-serial-mode)

这些说明描述了32位窗口的注册表配置。
在64位安装中，在HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd中进行注册表设置，例如：
&nbsp;  


| 注册表设置      | 类型        | 标准值                        | 备注                                                                        |
|-----------------------|-------------|--------------------------------------|------------------------------------------------------------------------------|
| stuPort               | REG_SZ      | COM5                                 | 如getSerialPorts.exe所示 |
| stuBaudRate           | REG_DWORD   | 128000                               | 固定波特率（十进制值）  |
| stuSigModeConfig      | REG_SZ      | c:\\config\\STU-540.config,1         | 屏幕上载文件名的完整路径名，签名模式1使用屏幕1  |

---
## 将应用程序代码从STU 530迁移到STU 540

对于540，您至少需要版本5.4.2的[STU驱动程序](../q-stu/stu-tablet#STU-Driver)。


对于STU SDK，必须重新编写现有代码，因为540以不同的格式返回笔数据，因此必须正确设置**PenDataOptionMode**。

对于Signature SDK，如果540仅使用标准动态捕获功能使用签名板或签名屏，则540应该能与现有代码一起使用。
如果您的代码使用向导控件，则必须至少安装3.19.2版。

如果有问题，我们总是建议您首先测试现有代码。

请注意，540的其他优点是，与530相比，它可以大大缩短响应时间，尤其是在使用板载图像的情况下。
 
---
## 尽管签名已在PC监视器上正确绘制，但STU 540上没有墨迹

这是某些STU 540签名板的已知问题，可能需要固件更新。

请提交支持请求以确认是这种情况。

---
## 转换现有应用程序以在串行模式下使用430V或540

为了从以串行方式运行的STU-430V或STU 540捕获签名，您的应用程序必须知道STU连接到哪个串行端口。

请阅读有关[STU串行连接](../q-stu/stu-tablet#STU-Serial-Connection)的常见问题解答以了解相关的虚拟COM端口号。

然后，您有两个选择：

1. 在注册表中指定COM端口和波特率

2. 在应用程序中指定COM端口和波特率，如Signature SDK HTML示例**TestSDKCapture-Serial.html** html中所示

如果您需要上述方面的技术帮助，请提出支持请求。

---

## 可以在STU上滚动显示吗？

STU签名板本质上是“哑”终端，不具有任何内置的滚动功能-它们只是显示上传到它们的图像。
通过为用户提供诸如箭头键之类的控制按钮可以在不同的屏幕显示之间移动，可以模拟滚动。
[GitHub上的Signature SDK Extra HTML Samples](<https://github.com/Wacom-Developer/sdk-for-signature-windows/tree/master/Extra%20Samples/HTML>)中的WizardScript-ScrollBar.html提供了一个非常基本的示例。
  
请注意，由于各种因素，将图像上传到STU总是会产生一定程度的延迟。
特别是彩色图像比单色图像花费更长的时间。
因此，通过诸如上述样本中所示的机制来提供滚动可能是不切实际的。
在大多数情况下，最好使用标准的“下一页”和“上一页”向导样式的按钮将文本分布在连续的屏幕显示上。

---
---













