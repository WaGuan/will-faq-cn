---
id: sig-prog-general
title: 常规
---

## 签名SDK示例代码在哪里

签名SDK示例代码可在GitHub上找到：
 https://github.com/Wacom-Developer/sdk-for-signature-windows

同样 SigCaptX:  
 https://github.com/Wacom-Developer/sdk-for-signature-sigcaptx-windows


---

## 处理PDF文件

Signature SDK不包含任何与PDF文档接口的功能-因此您需要使用第三方库，例如PDFNet或PDFium。

有关更多信息，另请参阅将签名保存为PDF文件。

---
## 确保签名完整性 

签名SDK具有四种内置方法，可帮助确保签名完整性，如下所示。
&nbsp;  

1.  签名数据包括签名的上下文，即“谁”，“何时”和“为什么”数据。它还可以包含其他标识信息，例如驱动程序，操作系统和数字化仪板的详细信息。
&nbsp;  
       
2.  签名的生物特征信息可以在图像数据中进行隐写编码-为此使用专有格式，即使对于程序员也没有公开。

    只能使用我们的一种签名分析工具进行分析-这种有目的的功能设计，能最大程度地减少伪造的可能性。 
&nbsp;  

3.  可以从正在签名的文档中计算哈希值，并将其合并到签名数据中。
 
    当稍后再次访问文档时，可以从嵌入式签名中提取哈希值，并将其与文档的当前哈希值进行比较。
    如果它们不相同，则签名被视为无效，因为签名或文档或两者都已更改。
&nbsp;  

4.  在捕获到签名数据后，可以选择将多键值嵌入签名数据中。这样可以保护数据的完整性，并提供一种检测数据中存在任何变更的方法。


**注意**  

签名SDK除了通过生成存储在签名本身中的哈希值或密钥值之外，不提供任何其他方法来检查文档的完整性。

如果需要添加独立于签名数据的文档完整性检查，则必须使用其他机制，例如适当的第三方库。

---
## 支持的网络浏览器

SDK可以通过使用ActiveX直接在Interner Explorer（IE）中使用或通过Java小程序的方式在Firefox和Chrome浏览器中使用。

为了直接支持更多的浏览器（即不使用applet）我们开发了一个基于JSONP的姐妹产品 SigCaptX。

Signature SDK下载文件中提供了SigCaptX的安装程序。

SigCaptX支持至少Windows7，8和10，IE9至11，EDGE, Firefox 2.0或更高版本以及Chrome 2.0或更高版本。

---
## 支持的操作系统

Signature SDK 支持Windows7 SP1及更高版本。

完全兼容的Signature SDK版本也可用于iOS和Android。

可以在以下网址的“For signature”页下载所有三个SDK： 三个版本的SDKs都可在网站的“For signature”页面下载：https://developer.wacom.com/en-us/developer-dashboard/downloads 

---

## 支持的输入设备

Signature SDK 支持Windows，Andorid和iOS平台。下面列出了支持的要求和设备（在撰写本文时-2019年8月）。

请注意，此列表并非详尽无遗，因为新设备一直在增加，同时较旧的设备已经停产。

#### Windows 7 SP1 或更高版本

##### Wacom 专用设备：
* 任何带笔输入的Wacom接口设备（Cintiq Companion Hybrid 和 Bamboo pad除外）- 包括所有STU签名板和DTU交互签名屏。

* 请注意 标准的Cintiq Companion是支持的，但是Companion Hybrid除外。

* Wacom FT203 （笔合作伙伴）

##### 其他制造商设备, 视情况而定：

*此列表并不详尽，并且可能会随着时间的推移不断扩展。*

* ASUS Eee Slate B121
* ASUS Vivo Tab TF810C
* ASUS VivoTab Note 8 (excluding ASUS VivoTab RT, ASUS VivoTab Smart)
* Dell Latitude 10 tablet (excluding Dell Latitude 10 essentials)
* Eee Slate EP121 B12
* Fujitsu ARROWS Tab Q548H, QH55M, Q704H and QH77M
* Fujitsu LIFEBOOK T731D, T732, T901D, T904 H, TH90 P and T902 F
* HP Elite x2
* Interlink ePad
* Lenovo ThinkPad Helix (type 3xxx)
* Lenovo ThinkPad Tablet 2 and X220 Tablet
* Microsoft Surface Pro 1 and 2 (but not the Surface Pro 3 or 4)
* Panasonic Toughbook CF-19, CF-C1, CF-H1 and CF-H2
* Samsung ATIV smart PC
* Samsung ATIV Tab 3, 5 and 7
* Toshiba Dynabook Tab
* Toshiba WT310
 
#### iOS SDK

* iPad with Retina Display (2012年推出) 或后续平板
* Wacom Bluetooth LE styli using Bluetooth 4.0 LE - 当前是 Intuos Creative Stylus (CS-500), Intuos Creative Stylus 2 (CS-600), Bamboo Stylus fineline (CS-600C) and Fineline 2
* iOS 6.1 或更高版本， Xcode 5.1.1 或更高版本

#### Android SDK

* Android 4.1.2 或更高版本
* Wacom Cintiq Companion Hybrid
* Samsung Galaxy Note phone/tablet with Samsung S pen, 例如* Note
* Note 2
* Note 3
* Note 8.0
* Note 10.1
* Note 10.1 2014 Edition
* Note Pro 12.2
    * Samsung Galaxy Tab S3 9,7’
    * Samsung Galaxy Tab S4
    * Samsung Galaxy Tab A
* Huawei Media Pad M5 Pro
* Huawei Media Pad M5 Lite
* 从理论上讲，任何具有内置触控笔的Android设备都支持压力，尽管我们仅测试了上面列出的Samsung Note系列

---
## 支持Citrix的签名设备

请查看以下已通过认证与Citrix兼容的Wacom笔输入产品的列表截至2019年7月10日。有关最新信息，请访问
 https://citrixready.citrix.com/category-results.html?search=wacom for the latest information.  
&nbsp;  

| 产品名称    | Citrix 产品                                                                                                    | Citrix Marketplace链接                                           |
|-----------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| STU-300B        | XenDesktop 7.6 LTSR, 7.8, 7.9                                                                                     | https://citrixready.citrix.com/wacom-co-ltd/wacom-stu-300b.html   |
| STU-530         | Citrix Virtual Apps and Desktops Service on Azure; XenApp 7.0 -> 7.9, 7.11; XenDesktop 7.0, 7.1, 7.5 -> 7.9, 7.11 | https://citrixready.citrix.com/wacom-co-ltd/wacom-stu-530.html    |
| STU-430         | XenApp 7.9, XenDesktop 7.6 LTSR, 7.8, 7.9                                                                         | https://citrixready.citrix.com/wacom-co-ltd/wacom-stu-430.html |
| STU-430V        | XenApp 6.5, XenDesktop 7.14, 7.15 LTSR, 7.16 → 7.18                                                               | https://citrixready.citrix.com/wacom-co-ltd/wacom-stu-430v.html |
| STU-540         | XenApp 6.5, XenApp 7.6, 7.8, 7.9, XenDesktop 7.0 -> 7.9                                                           | https://citrixready.citrix.com/wacom-co-ltd/stu-540.html |
| STU-541         | XenApp 6.5, XenApp 7.0 -> 7.9, XenDesktop 7.0, 7.6 → 7.9                                                          | https://citrixready.citrix.com/wacom-co-ltd/wacom-stu-541.html |
| DTH-1152        | XenApp 7.13, 7.14. XenDeskTop 7.0 -> 7.14                                                                         | https://citrixready.citrix.com/wacom-co-ltd/wacom-dth-1152.html |
| DTH-2452        | XenDesktop 7.6 → 7.16                                                                                             | https://citrixready.citrix.com/wacom-co-ltd/wacom-dth-2452.html |
| DTU-1141        | XenDesktop 7.6 LTSR, 7.8, 7.9, 7.15 LTSR, 7.16, 7.17                                                              | https://citrixready.citrix.com/wacom-co-ltd/wacom-dtu-1141.html |
| DTU-1141B       | XenDesktop 7.15 LTSR, 7.16, 7.17                                                                                  | https://citrixready.citrix.com/wacom-co-ltd/wacom-dtu-1141b.html |
| DTK-1651        | XenDesktop 7.6, 7.14, 7.15 LTSR, 7.16, 7.17                                                                       | https://citrixready.citrix.com/wacom-co-ltd/wacom-dtk-1651.html |
| DTK-2451        | XenDesktop 7.14 → 7.17                                                                                            | https://citrixready.citrix.com/wacom-co-ltd/wacom-dtk-2451.html  |
| Intuos PTH-451  | XenDesktop 7.6, 7.14 → 7.17                                                                                       | https://citrixready.citrix.com/wacom-co-ltd/intuos-pth-451-k0-c.html |

---
## Wacom签名设备的技术简介

在 http://signature.wacom.eu/products/ 上，右侧有一个产品类别列表。 

首先选择一个类别，然后单击产品-数据表可以下载PDF文档。

此外，可从 https://www.wacom.com/zh-cn/support/product-support/drivers 获得所有产品的CE证书。

---
## 是什么决定了签名SDK是否使用加密，是否可以将其关闭？

Signature SDK是否使用加密取决于签名板上是否启用了加密。

使用STU板，您可以运行Identify.exe（我们的[STU实用工具](../q-stu/stu-tablet#STU-Utilities)之一）来确定是否启用了加密。当签名捕获窗口出现时，一个挂锁图标指示是否正在使用加密。

在已启用加密的签名板上无法以编程方式禁用加密。

DTU一直使用加密，因为Wintab就是这样做的-Signature SDK无法对此进行控制。

---
## 如何在签名捕获窗口中更改签名日期的格式？

“签名捕获”窗口中日期和时间的格式取决于Windows设置（在“控制面板”中），不能以编程方式覆盖。

---
## 捕获窗口中“签名人”，“签名原因”和“签名时间”文本的对齐

无法更改签名捕获窗口中的签名人，签名原因和签名时间的对齐方式。
 
参考手册中提供的 _ShowWho_，_ShowWhy_ 和 _ShowWhen_ 属性与签名捕获后在Windows窗体控件中的显示有关，而与捕获窗口本身无关。

文本在捕获窗口中的位置是固定的-这样做的主要原因之一是要在所有捕获设备之间实现一致性。

---
## 将签名保存到文件时RenderBitmap的位图尺寸

如果您只想输出签名图像（即不输出生物特征数据），则位图尺寸可以根据您的实际情况选择尽可能大/小的尺寸。
如果图像太小，签名将不清晰。如果将其设置得太大，则其边缘的油墨可能看起来粗糙。

如果要在签名图像文件中包含生物特征信息（使用RenderBitmap的RenderEncodeData标志位），则需要确保尺寸足够大。 
通常，150 x 100的位图大小应为您提供足够的空间来编码典型的签名，并且输出文件的大小应小于3Kb。

编码签名所需的最小像素数是：2 *（12 +字节数）。

字节数因设备而异。通常，每个都有四个字节：

* 笔画 Id
* x 坐标
* y 坐标
* 上/下状态

此外：  

* 如果设备提供时间信息，则将有4个字节表示时间
* 如果设备提供压力感应，将有4个字节用于表示压力


给定一个具有恒定报告速率的设备（当前的STU板每秒都产生200个点），并且知道每个点的笔数据字节数，就可以粗略估算生物特征识别签名每秒钟的字节数。
笔数据始终构成签名数据的主体，但是还涉及其他因素，并且流存储中存在一定量的压缩，将会减少要编码的字节数。

在下面的示例中（取自我们的标准CaptureImage.js），位图为300 x 150 = 45,000像素，对于大多数签名的编码应该足够用了。
&nbsp;  
```csharp
filename = "sig.png"; 
flags = 0x1000 | 0x80000 | 0x400000; //SigObj.outputFilename | SigObj.color32BPP | SigObj.encodeData 
rc = sigCtl.Signature.RenderBitmap(filename, 300, 150, "image/png", 0.5, 0xff0000, 0xffffff, 0.0, 0.0, flags );
```
&nbsp;  
但是，签名中的生物统计数据的数量可能会因签名的长度（着墨量）及其书写速度而有很大不同。

If the same signature is written more slowly it will generate more data because the pen still outputs the same number of points per second (200 on an STU tablet), regardless of how fast the signature is written. 如果书写同一个的签名的速度较慢，则会生成更多的数据，因为无论签名速度如何，笔每秒都会输出相同数量的点（在STU数位板上为200）。

如果使用eSeal，则需要更大的位图，因为eSeal图像与签名数据一起被编码。
因此，位图必须足够大，以用于eSeal图像和签名数据。
 
这是使用eSeal时计算适当的图像尺寸（像素尺寸）的一些指导。

这些计算的假设是：

1. 您要渲染32位像素的颜色（使用RenderColor32BPP标志）
2. 签名数据本身需要15,000像素（这是一个很高的估计值）
3. 编码eSeal图像的一个字节大约需要2个像素（这是一个大概的指导原则）  
&nbsp;  
&nbsp;  

这是两个示例：
&nbsp;  

| eSeal大小（以像素为单位） | 每个像素所需的字节数 | 编码eSeal所需的字节 | 对eSeal进行编码所需的像素 | 签名所需的像素 | 所需总像素         |
|----------------------|------------------------|------------------------------|-------------------------------|-----------------------------|-----------------------------|
| 400x240              | 4 (即32位)       | 400 * 240 * 4 = 384,000      | 384,000 / 2 = 192,000         | 15,000                      | 192,000 + 15,000 = 207,000  |
| 684x432              | 4 (即32位)       | 684 * 432 * 4 = 1,181,952    | 1,181,952 / 2 = 590,976       | 15,000                      | 590,976 + 15,000 = 605,976  |

&nbsp;  
使用JPG或压缩的PNG或较小的位深度应实质上有助于减少输出图像的尺寸要求。
另外，您可以增加所请求位图的大小（像素数），以提供更多空间在其中进行编码。

---
## 我可以在签名图像上打印诸如签名者名称，原因，日期和时间之类的信息吗？

我们的SDK中没有内置功能可以实现此目的。

如果使用的是Signature SDK，则可以将签名图像的位图加载到您选择的图像处理应用程序中，并自己在其上标记额外的信息。

请注意，如果将RenderBitmap（）与“ RenderEncodeData”标志一起使用来对签名图像中的签名数据（即生物特征信息）进行编码，则不要尝试执行此操作。
在图像中嵌入任何其他数据可能会损害编码的生物统计数据。

---
## 签名SDK DLL的位置和名称

用于签名SDK的DLL安装在以下目录之一中：

* C:\Program Files\Common Files\WacomGSS （用于64位组件）
* C:\Program Files (x86)\Common Files\WacomGSS （用于32位组件）

DLL的名称如下：

* FlSigCapt.dll
* FlSigCOM.dll
* FlWizCOM.dll


还有一些与.NET应用程序一起使用的互操作文件，如下所示：

* Florentis.InteropAxFlSigCOM.dll
* Florentis.InteropAxFlWizCOM.dll
* Florentis.InteropFlSigCapt.dll
* Florentis.InteropFlSigCOM.dll
* Florentis.InteropFlWizCOM.dll


如果缺少上述文件，请从下载站点或上次下载的MSI重新安装SDK。
在安装向导中提示时，请确保选择要安装的.NET组件。
下面的示例屏幕快照显示了为64位SDK安装的32位.NET组件。

![SDK setup](assets/q-sig/sdk-setup.png)

---
## jar文件的位置




使用签名SDK运行Java所需的jar文件和相关的DLL安装在以下目录之一中：

* C:\Program Files\Common Files\WacomGSS （用于64位SDK）
* C:\Program Files (x86)\Common Files\WacomGSS（用于32位SDK）

这两个文件的名称如下
* flsx.dll
* flsx.jar

如果缺少上述文件，请从下载站点或上次下载的MSI重新安装SDK。
在安装向导中提示时，请确保选择要安装的Java组件。
下面的示例屏幕快照显示了为64位SDK安装的32位Java组件。
 
![SDK java setup](assets/q-sig/SigSDKJavaComponentsOnly.png)

--
## 将签名图像从HTML保存到文件

请注意，由于安全脚本编写的规则，您无法在Internet Explorer中从HTML / Javascript创建文件。

解决方案如下：

#### STU SDK 

从GitHub下载附带的HTML示例。

其中有一个名为**demobuttons-save**的HTML示例，它说明了如何将签名保存到画布上 —— 特别是请参见函数 _generateImage()_。

一旦签名在画布上，就可以使用[toDataURL](http://msdn.microsoft.com/en-us/library/ie/ff975241(v=vs.85).aspx)以JPEG或PNG格式提取签名。

然后，您可以创建一个表示图像的Base64编码的字符串，该字符串可以提交到服务器并转换为图像文件。

#### Signature SDK
 
要在IE外部创建文件，请参见Signature SDK Samples-Jscript文件夹中的**CaptureImage.js**。

另外，在IE中，您可以使用RenderBitmap创建代表图像文件的Base64字符串。可以将其提交到服务器，然后将其转换为文件。

Signature SDK示例可以从GitHub下载。
 
---
## HTML签名应用程序不适用于Chrome，Edge或Firefox

我们的Signature SDK和STU SDK使用ActiveX对象，唯一仍与ActiveX兼容的Web浏览器是Internet Explorer。

当前，我们的Signature SDK HTML示例仅适用于IE。或者，您可以编写Java applet或使用与IE，Edge，Chrome和Firefox兼容的SigCaptX跨浏览器。
如果您需要通过我们的STU SDK支持Chrome和Firefox，我们建议您使用我们的STU SigCaptX跨浏览器组件。

请注意，当前并支持Safari。
Please note that Safari is not currently supported.

---
## 将签名保存到PDF文件

根据您需要实现的业务流程，我们建议使用四个选项：

1. **sign pro PDF**：它提供了一个现成的用户界面，用于编辑PDF文件，使您可以添加签名，便笺和自由格式的图形
&nbsp;  

2. **sign pro PDF API**: 它能让您在使用sign pro PDF时，实现自动化放置签名的某些方面。您可以预定义签名区域的显示位置，来代替用户自己放置签名。请注意，该产品是收费的。有关定价信息，请联系您当地的Wacom业务拓展经理。如果您不知道这是谁，请发送电子邮件至solutions@wacom.eu。
&nbsp;

3. **Signature SDK**: 使用SDK捕获签名，然后使用第三方库（下面的示例）将签名嵌入PDF文件中。
Signature SDK可与多种Wacom输入设备配合使用，并以与sign pro PDF和我们的签名分析产品兼容的格式捕获签名。
这是我们使用过的一些PDF库的列表。请注意，这仅供参考——并非所有可用产品的详尽列表，我们无法为第三方产品提供任何支持或保证。
&nbsp;  

| 库名  | 下载链接                                                                           |
|------------------|-----------------------------------------------------------------------------------------|
| Foxit            | https://developers.foxitsoftware.com/pdf-sdk/Windows/                                   |
| PDFNet           | https://www.pdftron.com/pdfnet/                                                         |
| Debenu           | https://www.debenu.com/products/development/debenu-pdf-library/windows-pdf-sdk/         |
| iText            | https://itextpdf.com/en                                                                 |
| PDFium           | https://opensource.google.com/projects/pdfium                                           |  
&nbsp;  

4. **STU SDK**: 使用SDK捕获签名，然后使用第三方库（上面的示例）将签名嵌入PDF文件中。
   这样的好处是您可以指定自己的图像格式，但限制是只支持使用我们的STU签名板系列硬件产品，并且需要更多的开发工作。 
   请注意，以此方式捕获的签名与我们的分析工具不兼容。

&nbsp;  
 
---
## 安装日志文件的位置 

安装日志文件在%TEMP%中创建。 

假设Windows登录ID为“jsmith”，则应位于：**C:\Users\jsmith\AppData\Local\Temp**

---
## 自定义签名捕获窗口

使用注册表值可以对标准签名捕获窗口进行一些外观上的更改。
这些内容记录在SDK下载附带的Signature SDK参考手册的第7节中。
以下是主要内容的摘要。


#### BtnsInside

该注册表值显示Windows捕获对话框外部的按钮，并将其从签名板的显示中删除。它仅适用于STU设备。

应用它意味着不能使用笔单击任何按钮-而必须由PC操作员使用鼠标来完成。

下面的屏幕截图显示了捕获窗口，该窗口显示在PC监视器上，底部带有按钮。

STU显示屏上根本不显示按钮。

![Custom Capture setup](assets/q-sig/customise-1.png)

#### CaptureExtentX, CaptureExtentY

这些注册表值可用于以像素为单位设置捕获区域的宽度和高度。捕获区域不包含按钮。

如果与STU一起使用，则STU上的捕获窗口不受影响-大小仅应用于PC监视器上的捕获窗口。

#### InsideFontFaceName, InsideFontHeight

用于指定捕获区域内文本的字体名称和字号（即，签名人，原因和时间的值）

#### OutsideFontFaceName, OutsideFontHeight
 
用于指定捕获区域外（即按钮上的文本）的字体名称和字号


以下示例展示了将以下值与STU 530一起使用的效果：
>
InsideFontFaceName - Broadway  
InsideFontHeight       - 16  
OutsideFontFaceName  -  Stencil  
OutsideFontHeight        -  20  

![Custom Capture setup](assets/q-sig/customise-2.png)

#### SignatureGuideType

用于确定使用哪种类型的图形来指示将签名放置在何处。选项包括：
&nbsp;  

| 值   | 效果                                                                     |
|---------|----------------------------------------------------------------------------|
|   0     | 水平线（默认设置如上面的屏幕截图所示） |
|  1,2    | 四角标识 (更多详细信息，请参见参考手册)             |
|   3     | 无 |
|   4     | 按钮在右侧 (STU 300的默认设置) |

#### 语言

通常，签名捕获窗口（主要是按钮）上使用的语言由当前系统语言或当前应用程序的语言（如果不同）决定。

使用“语言”注册表项，您可以更改上述默认行为。缩写如下（另请参见 http://www.lingoes.net/en/translator/langcode.htm）：
 
       de = German  el = Greek   en = English   es = Spanish   fr = French   it = Italian   ja = Japanese   ko = Korean   nl = Dutch   pl = Polish

       pt-BR = Portuguese (Brazil)   ru = Russian   zh-CN = simplified Chinese   zh-TW = traditional Chinese  


The registry key should be placed in **_HKLM\SOFTWARE\(Wow6432Node)\Florentis\SigCapt_** rather than **_HKLM\SOFTWARE\(Wow6432Node)\Florentis\sd_** as with all the other registry keys shown above.  
与上面显示的所有其他其他注册表项一样，注册表项应放置在**_HKLM\SOFTWARE\(Wow6432Node)\Florentis\SigCapt_**中，而不是**_HKLM\SOFTWARE\(Wow6432Node)\Florentis\sd_**中。

输入的内容应一式两份，以分号或逗号分隔，例如en；en。如使用简体中文，请参见以下屏幕截图设置。

另请注意，您可能需要重新启动浏览器才能使语言设置生效-上面提到的其他注册表设置不属于这种情况。

![Custom Capture setup](assets/q-sig/customise-3.png)

---
## 如何更改字体的宽度和颜色？

首先，如果要设置颜色，请确保使用的签名设备支持彩色。
例如，STU-500和STU-430是单色的签名板，不支持彩色。

可以在四个地方定义颜色和墨水宽度：

1. 在签名板上显示的图像（文本和按钮等）中
2. 在用笔签名时，在签名屏上显示的墨迹
3. 在捕获签名后呈现签名的应用程序的表单（例如HTML画布或Windows图像）上
4. 在生成并保存到磁盘的图像中


#### 签名设备上显示的图像

##### 1) 商业解决方案的签批屏，例如DTH-1152，DTU-1141B

这些笔输入设备不支持向导控制，因此字体颜色和宽度的设置仅限于在笔书写时在签名捕获窗口上的墨迹。
This is done via the sigCtl properties or registry entries **_CaptureInkWidth_** and **_CaptureInkColor_**. 这是通过sigCtl属性或注册表项**_CaptureInkWidth_**和**_CaptureInkColor_**设置的。有关更多信息，请参见下面“正在签名时在签名板上进行书写”部分。


##### 2) STU 签名板

1. 使用向导控件 (WizCtl)：
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) 图像上传：在这种情况下，平板将从操作系统接收到的图像进行简单渲染。如果需要更改字体颜色或大小，则必须通过编辑磁盘上的原始图像来完成。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) 添加对象，例如按钮，文本，单选框或复选框：颜色和字体大小是通过在将对象添加到WizCtl之前根据代码中的要求设置字体大小和颜色来控制的。

2. 使用签名控件（SigCtl）：
   在SigCtl（动态捕获）的情况下，只能通过注册表条目（如参考手册第7节中所述）自定义在键盘上的签名捕获显示。
   请同时参阅以下部分中的屏幕截图。

#### 在签名屏上签名时的墨迹

   可以通过API参考手册中指定的两个属性**_CaptureInkWidth_**和**_CaptureInkColor_**进行控制。
   下面是HTML的示例：

```Javascript
          var dc = new ActiveXObject("Florentis.DynamicCapture");          
          dc.SetProperty("CaptureInkWidth", "5");
          dc.SetProperty("CaptureInkColor", "0,0,1");
          var rc = dc.Capture(sigCtl, "who", "why");
```

这些属性也可以在注册表中设置-缺点是它们随后将成为当前用户的永久设置，直到更改或禁用它们为止。
但是，可以通过如上所述在应用程序中设置相应的属性来覆盖它们。
必须将注册表设置放置在**HKEY_LOCAL_MACHINE\Software\Florentis\sd**，如果在64位操作系统上使用32位SDK安装，则位于 **HKEY_LOCAL_MACHINE\Software\WOW6432Node\Florentis\sd**中。
这是一个注册表设置的示例：

![Custom Capture ink](assets/q-sig/capture-ink.png)

#### 捕获后在应用程序中呈现的签名

可以通过应用程序通过API参考手册中定义的sigCtl对象的**_InkColor_**和**_InkWidth_**属性设置签名的墨水宽度和颜色。
用于被捕获签名图像其他特征（例如签名人，原因）的颜色和字体，签名原因的值和签名下划线的颜色同样可以使用sigCtl属性的**_ForeColor_** and **_BackColor_**来控制。 
请注意，仅当**_BackStyle_**设置为0时，SigCtl的**_BackColor_**属性才有效。

这是HTML表单中的一个JavaScript的示例，其中展示了上面列出的所有字体宽度和颜色类型：

```
     var sigCtl = document.getElementById("sigCtl1");
     sigCtl.Licence = "AgAkAEy2cKydAQVXYWNvbQ1TaWduYXR1cmUgU0RLAgKBAgJkAACIAwEDZQA";

     //  设置HTML表单签名控件上显示的墨水颜色和宽度。 
     sigCtl.InkColor = 0x0000AA;
     sigCtl.InkWidth = 1;
     sigCtl.BackStyle = 0;  // 强制背景样式设置为0不透明，这样就可以在控件上设置背景颜色。

     // 接下来的3个属性指出签名人、签名时间和签名原因值应该与签名一起显示在签名控件上
     sigCtl.ShowWhen = ShowText.TxtShowLeft;
     sigCtl.ShowWho = ShowText.TxtShowRight;
     sigCtl.ShowWhy = ShowText.TxtShowCenter;
     
     // BackColor和ForeColor设置签名控件的背景色和签名线的颜色
     // 和签名人，签名时间和原因文字的颜色（但不是签名本身）
     sigCtl.BackColor = 0x00FF00;
     sigCtl.ForeColor = 0x0000FF;
     var dc = new ActiveXObject("Florentis.DynamicCapture");
          
     // CaptureInkWidth设置捕获窗口上的墨迹宽度，它显示在PC监视器上，而不是签名捕获设备上的墨迹宽度
     dc.SetProperty("CaptureInkWidth", "2");  
     dc.SetProperty("CaptureInkColor", "0,1,0");  // 设置在PC监视器以及在捕获设备上的墨迹颜色
          
     var rc = dc.Capture(sigCtl, "who", "why");
```




#### 保存到磁盘的图像

使用API​​方法**_RenderBitmap()_**将签名图像保存到磁盘。
与签名墨迹相关的三个参数-**_inkWidth, inkColor_**和**_backgroundColor_**在API参考手册中有详细说明。
**_inkWidth_** - 以毫米为单位的值。
**_inkColor_** - OLE_COLOR格式的值，例如**0x0000FF**为红色，**0xFFFFFF**为白色
**_backgroundColor_** - 如上所述  

这是我们demo中的一个JavaScript的示例：

```Javascript
     rc = sigCtl.Signature.RenderBitmap(filename, 300, 150, "image/png", 0.5, 0xff0000, 0xffffff, 0.0, 0.0, flags );
```

---

## 哪些开发语言与Wacom Signature SDK兼容？

In order to benefit from full support we recommend using one of the development languages for which we already provide sample code on [GitHub](https://github.com/Wacom-Developer/sdk-for-signature-windows):  为了从全面支持中受益，我们建议使用一种我们已经在GitHub上提供了示例代码的开发语言：

* C++
* Delphi
* HTML
* JavaScript
* Java
* C# 
* VB.NET
  
如果您希望使用其他开发语言，请注意，Signature SDK的功能是通过ActiveX DLL交付的，因此，从理论上讲，任何可以与ActiveX交互的语言都应该能够与Signature SDK进行交互。
   
在Web开发方面，我们的Signature SDK带有一个称为SigCaptX的跨浏览器组件，该组件可与不支持ActiveX的浏览器（例如Edge，Firefox和Chrome）兼容。

---
---














 









