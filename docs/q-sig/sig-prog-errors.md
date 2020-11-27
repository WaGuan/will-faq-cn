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

下面的示例屏幕快照显示了为64位SDK安装的32位Java和.NET组件。

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
## Tablet Error (code 101) when trying to capture a signature

There is a known issue with HTML scripts which have been downloaded over the Internet or received via email.    
Windows recognises them as a potential security threat and places a block on the file itself.
The block can be seen by right-clicking on the file name in File Explorer and selecting properties as illustrated in the screenshot below.  

![Unblock file](assets/q-sig/Unblock.png)

#### Solution
There are 2 solutions:  

1. The easiest one is simply to click the "Unblock" check box, click the "Apply" button and restart the browser.
  
2. Alternatively you can edit the file with a text editor such as Notepad and save it with a different file name - the process  of saving it with a new file name removes the block.  Note that simply renaming the file does not unblock it.  

---
## Capture returned 101 - Tablet Error when using the 540 in serial mode 尝试捕获签名时出现数位板错误（代码101）当使用STU-540串行模式捕获签名时返回 101 - 签名板错误

When trying to capture a signature from the STU 540 in serial mode using the on-board ROM images the following error message appears:  

```
  Capture returned: 101 - Tablet Error
```

#### Solution

Please take into account the important factors listed below.

##### 1. Upload the image

Before attempting to use the 540 in "Signature Mode" (i.e. on-board images) at least one capture window image must be uploaded using the Signature Mode Image Uploader.  
For further details see [STU-540 Operating Modes](../q-stu/stu-540-modes).

Please note that the DemoButtons test program uploads its own on-board images which will overwrite any that have already been uploaded.  


If you upload one or more images with the uploader and then run DemoButtons in "Signature Mode" you will have to upload the original image(s) again to make your application work.  
  
##### 2. Licensing

"Signature Mode" cannot be used with an evaluation licence so make sure that you have specified a production licence in your code.  
 
##### 3. Configuration Settings

The values which you specify in your configuration file (or in the API properties) must exactly match the values which were used when the image was uploaded.  

There are three ways of specifying the configuration values for "Signature Mode":  
  
1. Specify the path name of the configuration file and the image number which you want to use in the code, e.g.  

```#javascript
       dc.SetProperty("stuSigModeConfig", "D:\\Signature SDK\\HTML\\STU-config.config, 1");
```

2. Specify each individual property relating to the image in the application code, e.g.  
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

3. Specify the path name and image number of the configuration file in the registry in a string value named **_stuSigModeConfig_** as illustrated below.  

**NOTE**  
For 32-bit applications on a 32-bit PC or 64-bit applications on a 64-bit PC the registry values should be in **HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd**.  
For 32-bit applications (e.g. Internet Explorer) on a 64-bit PC they should be in **HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Florentis\sd**.  
If any doubt please put them in both locations and create the "sd" key if it doesn't already exist.  

![Edit registry](assets/q-sig/regedit.png)

---
## COM exception - bitmap not in a suitable format

This can occur if your signature image is not big enough to hold the encoded data.  

You can prove this by temporarily removing the RenderEncodeData flag. Then you should not see the error.  

If you increase the image size the problem will probably be resolved.

---
## Failed to retrieve a COM class factory for component with CLSID...class not registered

The full error message is normally much longer than the above and is similar to the following:

```
"Retrieving the COM class factory for component with CLSID (2000D7A5-64F7-4826-B56E-85ACC618E4D6) failed due to the following error: 80040154 - class not registered. " 
```

This error can be caused by compiling a .NET program for AnyCPU and trying to run it on a machine where only the 32-bit DLL has been registered.  
This can happen with the STU or the Signature SDK.  

The solution is either to change AnyCPU to x86 (the STU SDK only registers the 32-bit DLL) or to register the 64-bit DLL manually.  
To register the 64-bit DLL manually please proceed as follows depending on which SDK you are using. 

#### STU SDK

* Install the SDK
* Start a command prompt with Administrator privileges
* Go to the directory where you have installed the SDK's DLL i.e. wgssSTU.dll.
* Note that the installer puts the DLL in **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32** (or **C:\Program Files\Wacom STU SDK\COM\bin\x64** on a 32-bit PC) but we recommend installing it somewhere else for the purposes of development and redistribution.
* Run the following command from your elevated prompt:  

    _regsvr32 wgssSTU.dll_

#### Signature SDK

If you ran the 64-bit installer when you installed the SDK then the above COM class factory should not occur because the 64-bit installer registers the 64-bit DLLs.  
If you ran the 32-bit installer, or the 64-bit installer without selecting the 64-bit components, then proceed as follows:  

* Run the 64-bit installer and select the 64-bit components - this will register the 64-bit DLLs. 

If for any reason you still want to register the 64-bit DLLs manually then start a command prompt with Administrator privileges and proceed as follows:

```
 C: (if needed)
 cd \Program Files\Common Files\WacomGSS
 regsvr32 FlSigCapt.dll
 regsvr32 FlSigCOM.dll
 regsvr32 FlWizCOM.dll 
```

---
## Florentis assertion failure

This  can happen on Windows 10 and is probably because you are using an old version of the SDK which is not compatible with Windows 10.  

This error was fixed in release 3.2.0 of the Signature SDK which was released in September 2015.  
 
To download the latest version please select "For signature" at https://developer.wacom.com/developer-dashboard/downloads 

---
## GDIplus error: Win32Error

This error could be caused by outputting to a file on a read-only folder such as "C:\Program Files".

Preventative measures:

1. Avoid writing to a read-only directory (this might even be the directory in which you are running your application)
2. Specify a full path name
3. Make sure the target folder itself exists

For further information please see Microsoft's list of [Windows error codes](https://msdn.microsoft.com/en-gb/library/windows/desktop/ms681382(v=vs.85).aspx)

---
## Primary reference Florentis.InteropFlSigCapt could not be resolved

The full message is:
```
Primary reference Florentis.InteropFlSigCapt could not be resolved because of an indirect dependency on the .NET framework assembly
```

This can happen if you build a .NET application targeted at framework 3.5 and try to include the interop DLLs from the Signature SDK which are built for 4.0.  

The solution to this is to add references to the DLLs themselves and not the interop files.  


As illustrated in the Reference Manager screenshot below references have been added to **FlSigCOM.dll** and **FlSigCapt.dll** – Visual Studio will then generate its own interop files for your target framework.  

Remove any existing references to WacomGSS or Florentis interop files and then add the two shown with ticks below.  

In the example below the target CPU is set to x86 which is why the DLLs have been selected from "C:/Program Files (x86)/Common Files/WacomGSS" and not "C:/Program Files/Common Files/WacomGSS" 

![.NET reference manager](assets/q-sig/NETRefManager.png)

---
## Strong name validation error

This can be caused by using an out-of-date Interop file reference in the Visual Studio solution.  

Make sure the latest SDK is installed, then change the Interop reference on the solution so that it points to the relevant Interop file from the appropriate SDK installation folder as detailed below.  

#### 32-Bit Applications

##### STU SDK 

There is only one 32-bit interop file for the STU SDK - **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32\Interop.wgssSTU.dll**

##### Signature SDK 

All the 32-bit interops for the Signature SDK are in **C:\Program Files (x86)\Common Files\WacomGSS**


#### 64-Bit Applications

##### STU SDK

There is only one 64-bit interop for the STU SDK and this is **C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64\Interop.wgssSTU.dll**

##### Signature SDK 

All the 64-bit interops for the Signature SDK are in **C:\Program Files\Common Files\WacomGSS**

---
## The capture window on the STU 540 takes a very long time to appear when used serially
 
When trying to capture signatures from the STU 540 in serial mode (e.g. over RDP) the capture window takes several minutes to be displayed

#### Solution

If you want to capture signatures from the STU 540 in serial mode you must use the on-board ROM images.  This is known as "Signature Mode".  

For further details of how to implement "Signature Mode" please see the [STU-540 Operating Modes](../q-stu/stu-540-modes).

---
---






















