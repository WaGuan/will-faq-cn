---
id: stu-sdk-application
title: 编程问题
---
*以下各节包含一系列技术支持问题和解答：*

## 在哪里可以找到示例代码？

示例代码可在GitHub上找到： 
[https://github.com/Wacom-Developer/stu-sdk-samples](https://github.com/Wacom-Developer/stu-sdk-samples)

## wgs​​sSTU.dll的多个版本

问：我的系统上可以有wgssSTU.dll的多个版本，每个版本由不同的程序使用吗？ 
 
该问题的答案取决于您如何开发和编译应用程序以及是否正注册DLL。  
是否需要注册wgssSTU.dll实际上取决于您的使用方式。  

在以下情况下，无需注册：  

 1. 如果您的程序是Java或使用C接口（尽管前者除了DLL，还需要安装 _wgs​​sSTU.jar_ ）。 
 2. 如果你使用COM接口（包括通过.Net interop）与免注册COM一起使用

 在上述任何情况下， _wgssSTU.dll_ 的多个版本可以在系统上共存，并且每个程序都可以使用其自己的本地副本。 

另一方面，如果通过更传统的基于注册表的方式使用COM接口，则必须进行注册。  
在这种情况下，由于注册表设置只能指向一个DLL，因此wgssSTU.dll必须位于同一位置，并且多个版本不能共存。

--- 
## COM端口号大于COM9

问：我可以在STU SDK串行接口上​​使用大于COM9的COM口吗？ 

COM10及更高版本需要特殊处理。查看更多详细信息，请参阅 [Microsoft支持](https://support.microsoft.com/en-us/kb/115831)  

例如，要使用COM10定义完整的路径名：
```
 query \\.\COM10 
```

---
## DLL安装

问：如何在不安装SDK或注册DLL的情况下部署应用程序？ 

#### 1. C++
C ++应用程序可以包含SDK C++源代码，因此不需要进一步的软件安装。 

#### 2. .NET
通过将interop包括在Visual Studio中作为参考，可以部署使用我们的STU SDK构建的.NET应用程序而无需注册DLL（并行部署）。  

#### 3. Java

    这同样适用于Java部署——DLL需要与Java应用程序在同一个目录中，但它不必注册。
    Java 要求 **wgssSTU.jar** 和 **wgssSTU.dll** 在安装目录中   

#### 4. 并行(Side-by-Side) 

并行操作需要访问wgssSTU.dll和互操作文件（无需注册）。

此操作方法是在项目清单文件中实现的，例如：

``` 
  <dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="wgssSTU" version="2.1.2.0"/>
    </dependentAssembly>
  </dependency>
```

---
## ISO压力单位转换为牛顿
 
问：笔压感值如何转换为牛顿以便以ISO格式存储？

由于笔特征的可变性，无法从数字转换器单位精确地转换为力量单位。

数字化仪的值不是施加力的线性函数，并且还有滞后现象，这意味着在给定负载下的结果将取决于笔是正在加载还是卸载。

为了进行验证，最好比较归一化的力曲线而不是绝对值。 

请注意，ISO 19794-7的标题为“信息技术–生物统计数据**交换**格式”。

它用于在不同供应商的系统之间交换生物​​识别数据时使用-主要不是存储格式，也没有义务以这种方式存储生物识别数据。

如果确实要使用它，则可以通过使用本机数字化仪单元并忽略通道描述中的可选缩放值，以ISO格式存储未校准的数据。 


---
## STU SDK 加密

问：STU SDK如何处理加密？

加密分为三个级别： 
 
 * STU-300/500/520 - EncryptionHandler
 * STU-430/530/540 - EncryptionHandler2
 * STU-541 - TLS

 
EncryptionHandler使用Diffie-Hellmann密钥交换和AES-128加密来处理300/500/520加密。

EncryptionHandler2使用标准的RSA密钥交换（1024-2048位）和AES 128-256位加密。 

每个签名板的密钥大小和算法都是固定的。  
这两个处理程序都对笔数据流进行加密，并且都提供一定程度的保护以防止重放攻击（或回放攻击）。


开发人员可以使用EncryptionHandler和EncryptionHandler2接口为Tablet类提供加密实现。  
Tablet类位于“接口和协议”之上，以提供适合大多数开发人员需求的更简单的接口。 

Tablet类跟踪开发人员是否已启用加密（请参阅startCapture()/ endCapture()），安装了哪种类型的签名板以及需要哪种加密版本。  

可以通过不使用Tablet类并且仅使用接口和协议来透明地手动完成所有操作，但是不建议您这样做，除非您有Tablet类无法处理的非常具体的要求。 

Tablet类仅促进开发人员应用程序与签名板之间的加密；它本身不包含解码功能。

STU-541的“安全设计”，首先协商完整的TLS握手，然后再通过安全连接进行所有通信。 

签名板的私钥由公共机构签名，并经过CRL检查。 


---
## 笔采样频率

问：笔数据多久采样一次？ 

在STU签名板上，笔数据每5毫秒（即每秒200次）进行采样。 

---
## STU签名板唯一ID

问：如何获取STU签名板的唯一ID 

我们较旧的签名板（例如STU 500）在固件中具有唯一的ID，出厂时将其设置为零–可以使用 **iTablet.setUid()** 进行编程设置，并使用 **iTablet.getUid()** 进行检索。

我们较新的平板电脑（例如430、530、540、541）具有两个唯一的ID –上面提到的ID，还有工厂设置的第二个ID –可以使用 **iTablet.getUid2()** 进行检索。

如果您运行STU工具Identify.exe（请参阅[STU实用工具](stu-tablet.md#STU-Utilities)），它将在屏幕上显示UID的当前值，具体取决于所连接的数位板。
 
为了检索单个平板电脑的UID，您必须先连接到平板电脑，然后再调用**getUID()**或**getUID2()**。

如果要通过签名板的UID连接到特定签名板，则需要编写一个功能，该功能可在所有USB设备上循环并依次打开每个USB设备以检查其UID。

与示例代码demobuttons.js中一样，您可以按以下方式检索所有USB设备的列表：
```
     var usbDevices = createObject("WacomGSS.STU.UsbDevices");
```
 
这将创建一个连接的USB设备的数组–然后您可以循环浏览该数组并查看每个设备的属性–查看IUsbDevice类及其属性在SDK参考页  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **_C:\Program Files (x86)\Wacom STU SDK\COM\doc\interfacewgss_s_t_u_1_1_i_usb_device.html_** (取决于SDK的安装位置)中。

如果您不能使用这些属性替代UID，则需要如上所述连接到每个设备以检查其UID。
 

---
## Java版本支持 

问：支持哪些Java版本？

根据STU SDK中提供的“入门”文档，最低Java版本为1.5-但开发人员应注意，Tablet类要求为1.7。

---
## 笔压感最大值

问：最大笔压值是多少？

PenData.pressure的最大值取决于所使用的STU：  

| 签名板型号           | 压感数值                     |
|-------------------------|-----------------------------------------------|
| STU 300/500/520         | 511   （即从0开始的512压力水平） |
| STU 430/530/540/541     | 1023  （1024压力等级） |

---
## STU-430G / STU-430V 的区别

问：STU-430G和STU-430V有什么区别？ 
 
430G和430V的外观，大小和分辨率都相同-唯一的区别是它们与Windows进行通信的方式。  
标准430G可作为普通USB设备运行，并在设备管理器中显示。  
430V配置为通过虚拟COM端口作为串行设备运行-请参阅下面的“设备管理器”屏幕截图。  
这样做的优点是430V可以通过RDP会话转发到远程服务器，而无需任何其他USB转发软件，从而减少了支出。  

如果要通过RDP使用430G，则必须安装第三方USB转发软件，因为RDP无法自行处理笔数据。  
有关更多信息，另请参见[无法通过远程桌面/Citrix连接到签名板](../q-stu/stu-sdk-runtime#cannot-connect-to-the-pad-over-remote-desktopcitrix)

---
## STU-540 / STU-541 的区别

问：STU-540和STU-541之间有什么区别？

#### 1.  TLS 加密:  

STU-541使用TLS加密，以在设备和PC之间获得最大的安全性。在STU SDK中，这需要特殊的编程，仅可通过C++和Java使用。  
请注意，标准示例未提供用于使用STU-541进行签名捕获的STU SDK示例代码，但是可以在GitHub示例文件夹的以下两个位置找到它：  

* cpp\samples\DemoButtons  
* Java\samples\DemoButtons  

#### 2.  板载ROM图片：  

STU-540可以转换为以串行模式运行。  这样做的主要原因是，通过利用其板上图像存储功能，可以在RDP上有效地使用它。  
STU-541也支持板载图像，但不能串行操作。由于它可以作为标准USB设备高效运行，因此几乎不需要使用板载ROM映像功能。  
&nbsp;  

#### 3.  串行操作：

如上所述，STU-540可以在HID和串行模式之间转换。541不提供此功能。  


---
## 签名板分辨率

问：我的签名板的分辨率是多少？ 

Wacom STU签名板的显示像素尺寸如下： 
&nbsp;  
&nbsp;  

| 签名板型号        | 尺寸以像素为单位   |
|------------------------|------------------------|
| STU-300/300B           | 396 x 100  |
| STU-430/430V           | 320 x 200  |
| STU-500                | 640 x 480  |
| STU-520, 530, 540, 541 | 800 x 480  |


---
## 支持的操作系统

问：STU SDK支持哪些操作系统？ 

STU SDK与Windows 7或更高版本兼容。 

对Linux也提供单独的版本供下载。

可以通过提出支持请求获取有关Mac OS 10的STU SDK。

如下所示，Signature SDK可用于Windows，Android和iOS平台。
* Windows 7 SP1 或更高版本
* iOS 6.1 或更高版本, Xcode 5.1.1 或更高版本
* Android 4.1.2 或更高版本

请注意，Signature SDK当前不适用于Linux。 

---
## STU SDK支持的产品

问：STU SDK可以使用哪些Wacom产品？

STU SDK仅可与STU签名板一起使用。在撰写本文时（2019年8月），这些是STU 300、430、500、520、530、540和541。

在以下平台上可用： 
* Windows 7 SP1 or higher
* Linux
* MAC OS 10

请注意，MAC OSX不支持浏览器。 

---
## 支持的浏览器

问：支持哪些Web浏览器？ 

STU SDK随附的基于HTML和Javascript的示例程序只能与Internet Explorer一起使用。 

为了提供与其他浏览器的兼容性，我们开发了配套产品STU SigCaptX，可与IE10 +，Chrome和Firefox配合使用。

---
## 在STU-541中使用示例代码

#### 解决方案

The STU 541 is a specialised tablet which uses TLS encryption for a high level of security.
Currently it is only supported via C++ and Java.STU 541是特殊的签名板，使用TLS加密来提高安全性。当前仅通过C++和Java支持。  
GitHub示例文件夹中提供了使用TLS的工作示例：
- cpp\samples\DemoButtons_
- Java\samples\DemoButtons_


---
## STU SDK 与 DTU 1031

问：为什么STU SDK无法与我的DTU 1031一起使用？

STU SDK仅可与STU签名板一起使用。在撰写本文时（2019年8月），这些是STU 300、430、500、520、530、540和541。

在以下平台上可用： 
* Windows 7 SP1 或更高版本
* Linux
* MAC OS 10

请注意，MAC OSX不支持浏览器。 

有关DTU设备的低级API的详细信息，请参阅Wacom Device Kit。
 
---

##  哪些编程语言与STU SDK兼容？

为了从全面支持中受益，我们建议使用一种开发语言，我们已经在[GitHub上提供了示例代码](https://github.com/Wacom-Developer/stu-sdk-samples):： 

* C
* C++
* C#
* Delphi
* HTML/JavaScript
* Java
  
如果您希望使用另一种开发语言，请注意STU SDK的功能是通过ActiveX DLL提供的，因此，从理论上讲，任何可以与ActiveX交互的语言都应该能够与STU SDK进行交互。   
在Web开发方面，我们的STU SDK带有一个称为STU SigCaptX的跨浏览器组件，该组件可与不支持ActiveX的浏览器（例如Edge，Firefox和Chrome）兼容。  

---
---



