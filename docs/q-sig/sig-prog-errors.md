---
id: sig-prog-errors
title: 错误信息
---

## 签名捕获窗口上出现"String missing"错误

当签名捕获组件在加载本地化字符串时遇到问题时，将发生“字符串丢失”错误。

字符串在'MUI'文件中应位于 **\Program Files\Common Files\WacomGSS**（或Win64上的 **\Program Files (x86)\Common Files\WacomGSS**）特定语言的子文件夹中。

卸载/重新安装产品（SignPro和/或Signature SDK）应该可以解决此问题。

为了安全起见，在卸载产品后，请检查是否已删除“...\Common Files\WacomGSS”文件夹和所有子文件夹。

---
## 编译Java应用程序时出现"Unsatisfied Link"-库路径中没有flsx.jar

尝试运行基于Signature SDK的Java应用程序时，您可能会遇到以下错误：

```
"Exception in thread "main" java.lang.UnsatisfiedLinkError: no flsx in java.library.path"
```

有两种可能的解决方案。

#### 1. 重新运行安装程序并包含正确的组件

重新安装SDK，并在出现“自定义安装”窗口时，确保选择适合您系统的32或64位Java组件。

如果运行Windows 7或8，则可能需要64位组件。 

但是，如果您使用的是32位JDK，则将需要32位组件。

下面的屏幕截图示例显示了为64位SDK安装的32位Java和.NET组件。

![Sig SDK .NET](assets/q-sig/SigSDKNetComponents.png)

#### 2. 在Eclipse项目中编辑java.library.path，以使其指向已安装的flsx.jar。

签名SDK的flsx.jar文件安装位置如下：

* 32位组件：  C:\Program Files (x86)\Common Files\WacomGSS  
* 64位组件：  C:\Program Files\Common Files\WacomGSS

请参阅以下Web页面，以获取有关在Eclipse中设置java.library.path的说明：

https://stackoverflow.com/questions/957700/how-to-set-the-java-library-path-from-eclipse  
https://examples.javacodegeeks.com/java-basics/java-library-path-what-is-it-and-how-to-use/

---
## 自动化服务器无法创建对象

这可能是因为您尚未安装SDK（签名或STU）。
如果为32位CPU编译了应用程序但安装了64位SDK组件，则可能会发生类似的错误，反之亦然。
SDK组件必须安装在任何运行SDK软件的计算机上，并且DLL必须与您的应用程序的目标体系结构相对应。
唯一的例外是：

* 将SxS安装与通过STU SDK构建的C＃或Java应用程序一起使用时
* 通过STU SDK使用Java小程序时

---
## 尝试捕获签名时出现数位板错误（代码101）

通过Internet下载或通过电子邮件接收的HTML脚本存在一个已知问题。
Windows将它们识别为潜在的安全威胁，并在文件上设置了一个限制。
右键单击“文件资源管理器”中的文件名，然后选择属性，如下图所示，可以看到限制。

![解除阻止](assets/q-sig/Unblock.png)

#### 解决方案
有两种解决方案： 

1. 最简单的方法就是单击“取消阻止”复选框，单击“应用”按钮，然后重新启动浏览器。
  
2. 或者，您可以使用文本编辑器（如记事本）编辑文件，然后使用其他文件名保存文件-使用新文件名保存文件的过程将删除该块。请注意，仅重命名文件并不会解除阻止。

---
## 当使用STU-540串行模式时捕获签名返回 101 - 签名板错误

当尝试使用板载ROM图片以串行方式从STU 540捕获签名时，会出现以下错误消息：

```
  Capture returned: 101 - Tablet Error
```

#### 解决方案

请考虑以下重要因素。

##### 1. 上传图片

尝试在“签名模式”下使用540（即使用板载图像）之前，必须使用“Signature Mode Image Uploader”上载至少一个捕获窗口图像。
有关更多详细信息，请参见[STU-540操作模式](../q-stu/stu-540-modes)。

请注意，DemoButtons测试程序将上传其自己的板载图像，该图像将覆盖所有已上传的图像。


如果您使用上传器上传一个或多个图像，然后在“签名模式”下运行DemoButton，则必须再次上传原始图像才能使应用程序正常工作。  
  
##### 2. 许可证

“签名模式”不能与评估许可证一起使用，因此请确保已在代码中使用了生产许可证。
 
##### 3. 配置设置

您在配置文件（或API属性）中指定的值必须与上载图片时使用的值完全匹配。

有三种方法可以指定“签名模式”的配置值：
  
1. 在代码中指定配置文件的路径名和要使用的图片号码，例如：

```#javascript
       dc.SetProperty("stuSigModeConfig", "D:\\Signature SDK\\HTML\\STU-config.config, 1");
```

2. 在应用程序代码中指定与图像有关的每个单独的属性，例如： 
```#javascript
       dc.SetProperty("stuSigModeScreenNum",1); 
       dc.SetProperty("stuSigModeWhen",1);
       dc.SetProperty("stuSigModeOK","OK");
       dc.SetProperty("stuSigModeClear","Clear");
       dc.SetProperty("stuSigModeCancel","Cancel");
       dc.SetProperty("stuSigModeFontName","Verdana");
       dc.SetProperty("stuSigModeFontSize",10);
```  
&nbsp;  

3. 如下所示，在名为**_stuSigModeConfig_**的字符串值中指定注册表中配置文件的路径名和图像号。

**注意**  
对于32位PC上的32位应用程序或64位PC上的64位应用程序，注册表值应位于 **HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd**中。
对于64位PC上的32位应用程序（例如Internet Explorer），它们应位于**HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Florentis\sd**中。
如有疑问，请在两个位置都应用该设置，如果尚不存在，则创建“ sd”键。 

![编辑注册表](assets/q-sig/regedit.png)

---
## COM异常-位图格式不正确

如果您的签名图像的大小不足以容纳编码的数据，则会发生这种情况。

您可以通过临时删除RenderEncodeData标志来验证这一问题。然后，您应该不会看到该错误。

如果增加图像尺寸，则可能会解决该问题。

---
## Failed to retrieve a COM class factory for component with CLSID...class not registered

完整的错误消息通常比上述更长，并且与以下内容相似：

```
"Retrieving the COM class factory for component with CLSID (2000D7A5-64F7-4826-B56E-85ACC618E4D6) failed due to the following error: 80040154 - class not registered. " 
```

此错误可能是，通过为AnyCPU编译.NET程序并尝试在仅注册32位DLL的计算机上运行该程序导致的。
STU或Signature SDK可能会发生这种情况。

解决方案是将AnyCPU更改为x86（STU SDK仅注册32位DLL）或手动注册64位DLL。
要手动注册64位DLL，请根据所使用的SDK进行以下操作。

#### STU SDK

* 安装SDK
* 使用管理员权限启动命令提示符
* 转到已安装SDK的DLL的目录，即wgssSTU.dll。
* 请注意，安装程序将DLL放入**C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32**（或在32位PC上的**C:\Program Files\Wacom STU SDK\COM\bin\x64**）中。但我们建议将其安装在其他地方以进行开发和再分发。
* 从提权的CMD中运行以下命令：

    _regsvr32 wgssSTU.dll_

#### Signature SDK

如果在安装SDK时运行了64位安装程序，则不会出现上述COM类工厂，因为64位安装程序注册了64位DLL。
如果您运行32位安装程序或64位安装程序而未选择64位组件，则请执行以下操作：

* 运行64位安装程序并选择64位组件-这将注册64位的DLL。

如果出于任何原因仍要手动注册64位DLL，请使用管理员权限启动命令提示符，然后按照以下步骤操作：

```
 C: (if needed)
 cd \Program Files\Common Files\WacomGSS
 regsvr32 FlSigCapt.dll
 regsvr32 FlSigCOM.dll
 regsvr32 FlWizCOM.dll 
```

---
## Florentis assertion failure

这可能会在Windows 10上发生，可能是因为您使用的是与Windows 10不兼容的旧版SDK。

此错误已在2015年9月发布的Signature SDK版本3.2.0中修复。
 
要下载最新版本，请在 https://developer.wacom.com/developer-dashboard/downloads 中选择"For signature"。

---
## GDIplus error: Win32Error

此错误可能是输出文件到只读文件夹中导致的，例如“C:\Program Files”。

预防措施：

1. 避免写入只读目录（甚至可能是您运行应用程序的目录）
2. 指定完整路径名
3. 确保目标文件夹本身存在

有关更多信息，请参见Microsoft的[Windows错误代码列表](https://msdn.microsoft.com/en-gb/library/windows/desktop/ms681382(v=vs.85).aspx)。

---
## 无法解析主要参考Florentis.InteropFlSigCapt 

完整的消息是：
```
Primary reference Florentis.InteropFlSigCapt could not be resolved because of an indirect dependency on the .NET framework assembly
```

如果您构建针对framework 3.5的.NET应用程序，并尝试包含来自Signature SDK的为4.0构建的互操作DLL，则会发生这种情况。

解决方案是添加对DLL本身而不是互操作文件的引用。


如下面的引用管理器屏幕截图所示，**FlSigCOM.dll**和**FlSigCapt.dll**引用已添加 – Visual Studio随后将为目标框架生成自己的互操作文件。

删除对WacomGSS或Florentis互操作文件的任何现有引用，然后添加下面勾选的两个引用。

在下面的示例中，目标CPU设置为x86，这就是为什么从“C:/Program Files (x86)/Common Files/WacomGSS”而不是“C:/Program Files/Common Files/WacomGSS”中选择DLL的原因

![.NET引用管理器](assets/q-sig/NETRefManager.png)

---
## Strong name validation error

这可能是由于在Visual Studio解决方案中使用了过时的Interop文件引用引起的。

确保安装了最新的SDK，然后更改解决方案上的Interop引用，以使其指向相应SDK文件夹中相应的Interop文件，如下所述。

#### 32位应用

##### STU SDK 

STU SDK只有一个32位互操作文件 - **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32\Interop.wgssSTU.dll**

##### 签名SDK 

Signature SDK的所有32位互操作都在 **C:\Program Files (x86)\Common Files\WacomGSS**


#### 64位应用

##### STU SDK

STU SDK只有一个64位互操文件 **C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64\Interop.wgssSTU.dll**

##### 签名SDK 

签名SDK的所有64位互操作都在 **C:\Program Files\Common Files\WacomGSS**

---
## 串行模式时，STU 540上的捕获窗口需要很长时间才能显示
 
尝试以串行模式（例如，通过RDP）从STU 540捕获签名时，捕获窗口需要花费几分钟才能显示。

#### 解决方案

如果要以串行模式从STU 540捕获签名，则必须使用板载ROM图片。这称为“签名模式”。

有关如何实现“签名模式”的更多详细信息，请参见[STU-540操作模式](../q-stu/stu-540-modes)。

---
---






















