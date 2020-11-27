---
id: sig-installation
title: 安装
---

## 部署签名SDK

* [安装](#installation)
    * [UI 安装](#ui-installation)
    * [命令行安装](#command-line-installation)
    * [示例](#examples)

#### 安装

SDK作为一组ActiveX / COM组件安装在文件夹：

&nbsp;&nbsp;&nbsp;&nbsp; **C:\Program Files\Common Files\WacomGSS**  

When the 32-bit version is installed on 64-bit Windows the components are installed in:  
当32位版本安装在64位Windows上时，组件安装在：
&nbsp;&nbsp;&nbsp;&nbsp; **C:\Program Files (x86)\Common Files\WacomGSS**  

安装中包括语言翻译文件，用于在签名捕获对话框中使用本机的Windows语言。

安装需要在Windows注册表中使用大量支持项进行COM注册，这是通过运行SDK MSI安装程序来实现的。 

由于安装过程的复杂性，用脚本模仿操作是不切实际的，但是提供了许多自动化选项。

#### UI 安装

运行安装程序以显示选项对话框：

![自定义安装](assets/q-sig/setup.png)

选择项包括Java和.Net组件。
安装后，可以在Common Files \ WacomGSS文件夹中看到已安装的文件，例如：

![安装的文件](assets/q-sig/wacomgss.png)


| .NET 组件                 | Java 组件        | ActiveX 控件      | 语言翻译文件 | 支持文件               |
|---------------------------------|------------------------|-----------------------|----------------------------|-----------------------------|
| Florentis.InteropAxFlSigCOM.dll | flsx.dll               | FlSigCapt.dll         | de                         | FlCaptureAnalyzer.exe       | 
| Florentis.InteropAxFlWizCOM.dll | flsx.jar               | FlSigCOM.dll          | en                         | wgssStuImgUploader.exe      |
| Florentis.InteropFlSigCapt.dll  | wgssLicenceJNI.dll     | FlWizCOM.dll          | es                         |                             |
| Florentis.InteropFlSigCOM.dll   | wgssLicenceJNI.jar     | wgssLicenceClient.dll | 等等                       |                             |
| Florentis.InteropFlWizCOM.dll   |                        |                       |                            |                             |  

&nbsp;  
要在安装后添加Java或.NET组件，请再次运行安装程序，然后在Windows中选择“更改”选项以重新显示选项对话框。
除了创建和注册组件文件外，还将项目添加到Windows“开始”菜单：Wacom Signature SDK。


#### 命令行安装

使用命令行通过使用标准Windows MSI安装应用程序来定制安装。
例如，为Java应用程序安装最少的组件不带开始菜单选项：
&nbsp;  
```
 msiexec /q MINIMAL=1 JAVA=1 /i Wacom-Signature-SDK-x86-3.20.4.msi
```  
&nbsp;  

有许多选项可用，因此无论是否安装完整的SDK，都可以安装特定的组件：

| 选项                 | 描述                                                                                                           |
|------------------------|-----------------------------------------------------------------------------------------------------------------------|
| MINIMAL=1              | 不含Windows快捷方式和实用程序 |
| JAVA=1                 | 包括Java组件 |
| DOTNET=1               | 包括.NET组件 |
| WIN32=0                | 从x64安装程序中排除x86组件（默认情况下，x64安装程序将安装32位和64位组件）  |
| ADDPATH=Win32          | 将32位组件文件夹添加到系统PATH |
| ADDPATH=Win64          | 将64位组件文件夹添加到系统PATH |
| WIZARDSHOWWAIT=0       | 禁用在STU-430和STU-530上的向导控件显示的沙漏图标 |
| STUSHARED=1            | 对STU签名板使用共享（非独占）访问权限 |

#### 示例

| 描述                                    | 命令                                                                  |
|------------------------------------------------|--------------------------------------------------------------------------|
| 安装SDK                                | msiexec /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 在没有UI的情况下安装SDK                     | msiexec /q /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 安装SDK的Java组件          | msiexec JAVA=1 /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 安装IE HTML应用程序的组件  | msiexec /q MINIMAL=1 /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 安装Java应用程序的组件      | msiexec /q MINIMAL=1 JAVA=1 /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 创建一个日志文件                              | msiexec /q /l*v log.txt /i Wacom-Signature-SDK-x86-3.20.4.msi |
| 卸载                                      | msiexec /x Wacom-Signature-SDK-x86-3.20.4.msi |


---

## 我可以在没有用户输入的情况下安装Signature SDK吗？

上面列出了安装程序选项。

总结一下：

静默选项允许UI自动安装，如下图所示。
&nbsp;  
```
msiexec /q /i Wacom-Signature-SDK.msi 
```

---

## *安装程序*.msi的签名已损坏或无效

这是一个已知问题。在Windows 10上下载我们的安装程序时，您应该发现文件实际上已经下载并且仍然可以执行。

如果需要，以下变通方法可能会有所帮助：

1. 如上所述暂时关闭SmartScreen筛选器，在控制面板中的安全性下[这里](http://winaero.com/blog/how-to-disable-windows-smartscreen-in-windows-10/).
2. Add https://gsdt.wacom.eu as a trusted site in your internet options (assuming you downloaded the installers from there) 在您的Internet选项中将 https://gsdt.wacom.eu 添加为受信任的站点（假设您从那里下载了安装程序）



如果以上方法均无帮助，请提交支持请求。
 
---

## Windows 7无法验证数字证书

安装了我们的STU或Signature SDK后，尝试运行使用它们构建的应用程序时，您可能会遇到以下错误消息：
&nbsp;  
```
    Windows cannot verify the digital certificate for this file. A recent hardware or software change
    might have installed a file that is signed incorrectly or damaged, or that might be malicious
    software from an unknown source.
```
&nbsp;  
在对Wacom可执行文件和DLL应用更严格的数字签名方法之后，首先会遇到这种情况，并且主要在Windows 7上发现
这种情况。
附加的保护措施是为了防止文件被修改的可能性。

如果已使用Windows Update完全更新Windows，则不会报告该错误消息。 
如果无法应用完整的Windows Update，则此特定更新通常可以解决问题：KB 3153171
 
可以从[Microsoft.com](http://microsoft.com/)下载此更新：

 
* [KB 3153171 - 32-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52140)


* [KB 3153171 - 64-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52069)

 
---

## What options are there for silent installation, repair or uninstallation of the SDKs and STU driver?有哪些选项可用于静默安装，修复或卸载SDK和STU驱动程序？

#### STU SDK + SIGNATURE SDK

| 静默安装                                           | 创建日志文件           | 修复               | 卸载             | 不重启              |
|--------------------------------------------------|---------------------------|----------------------|-----------------------|------------------------------|
| 使用 /q, 例如 msiexec **/q** /i Wacom-STU-SDK-2.13.6.msi   | 添加: /l*v logfile.txt      | 用/f替换/i   | 用/x替换/i    | /norestart |

#### STU 驱动

| 静默安装，跳过‘连接设备’检查                      | 创建日志文件           | 修复                          | 卸载                          | 不重启            |
|------------------------------------------------------------|---------------------------|---------------------------------|------------------------------------|------------------------------|
| wacom-stu-driver-5.4.2.exe NO_STU_CHECK=1 /install /quiet  | /log log.txt              | 用/repair替换/install   | 用/uninstall替换/install   | /norestart |
&nbsp;  

默认情况下，在%TEMP%文件夹中创建日志文件。

如果在将STU连接到PC时运行STU驱动程序安装程序，则可能无法更新某些注册表设置。
 
因此，之后重新启动PC是最安全的。

---







