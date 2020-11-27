---
id: sig-prog-biometrics
title: 生物识别
---

## 我可以通过Signature SDK访问笔事件吗？

Signature SDK是一个高级SDK，它不提供对单个笔事件的访问权限-它旨在提供标准化的签名捕获窗口，并以图像（或以字符串或二进制数组表示的图像）的形式返回整个签名。

如果您需要直接访问笔事件，则需要使用STU SDK或Wintab接口。

另请参阅[捕获生物特征数据，例如压力和时间](#capture-biometric-data-such-as-pressure-and-timing)。

---
## 捕获生物特征数据，例如压力和时间

#### STU SDK - Windows 和 Linux

使用我们的低级STU SDK，您可以直接从签名板捕获笔数据。
对于我们所有的签名板，笔数据包括x和y坐标以及压力和时间信息。
使用我们最新的签名板，还包括序号和日期/时间戳。

#### Signature SDK (签名库) - Windows, iOS and Android

使用我们的Signature SDK，您可以将签名中捕获的生物特征数据编码到签名图片中-我们提供了如何实现它的示例。 
完整版的Signature SDK（简称为“签名库”）允许以以下两种标准ISO格式之一导出生物识别信息：
* ISO 19785 - XML 
* ISO 19794-7 - binary data

请注意，完整的签名库是收费产品-有关费用的详细信息，请联系您当地的Wacom业务拓展经理。
如果您使用的是SDK的“精简版”，则访问生物特征数据的唯一方法是将签名传到我们的一种分析工具（请参阅下文）中进行检查。


#### DTU 签批屏

如果您使用DTU签批屏来捕获签名，则可以使用签名库（如上所述）访问生物特征数据。
或者，您可以使用Wintab API（数位板驱动程序随附）来实时访问笔数据，即由数位板生成的数据。
有关Wintab的更多信息，请参见Wacom设备套件部分。

#### iOS 设备

使用iOS的Signature SDK，您可以在签名图像中对使用蓝牙笔之一捕获的生物识别数据进行编码-我们提供了实现此目标的客观C和Swift示例。 您能将通过我们蓝牙笔捕获到的生物特征数据编码到签名图片中-我们提供了实现此目标的objective C和Swift示例。
对于较低级别的访问或构建您自己的生物识别数据格式，将我们的Bluetooth Stylus SDK与UITouch框架结合使用来构建数据是可行的，但是建议在此平台上使用Signature SDK。

#### 分析工具

##### SSV (静态签名验证) SDK 

SSV旨在比较从纸张原件扫描的两个签名图像。还可以将扫描的签名与使用Signature SDK捕获的动态签名数据进行比较。

&nbsp;  

##### DSV (动态签名验证) SDK

该工具可让您比较两个签名的生物特征数据，并给出一个分数来表示它们的相似程度，值为1表示完全匹配。
签名可以通过签名板动态捕获，也可以从现有文件中打开，还可以从sign pro PDF或我们的Signature SDK复制/粘贴。
&nbsp;  

##### SignatureScope  

这个综合性的分析工具让您详细检查使用sign pro PDF或我们的签名SDK之一捕获的签名的生物特征数据。
有两个版本可用-演示版本可应要求提供，并且可以分析直接从用户处捕获签名；它不允许其他来源（例如文件或剪贴板）打开的签名。

完整（FDE）版本的SignatureScope使用户可以详细分析来自以下任意来源的签名：
1. 用户动态输入的
2. 由我们的签名SDK创建的文件
3. 从sign pro PDF或Signature SDK复制/粘贴的。

请注意，此完整版本仅在签署保密协议后才发给合格的文件（笔迹）司法鉴定人员（FDE）。

---
## 保存签名生物特征数据以供日后验证或分析

1. 使用sign pro PDF，生物特征数据会自动包含在签名中，并且可以复制/粘贴到我们的任何分析工具中。
&nbsp;  

2. 使用我们的Signature SDK，将签名另存为图像时，必须将**_RenderEncodeData_**选项与**_RenderBitMap_**一起使用。（有关更多信息，请参见Signature SDK组件参考手册的3.1.2.6节）。
随后可以从Signature Scope或我们的DSV SDK中打开并检查图像文件。
&nbsp;  

3. With our STU SDK you can save the biometric data in your own chosen format but you are limited to our STU range of signature pads.  
In addition the signatures cannot be examined with our analysis tools because they use a proprietary format for the biometric data which we cannot disclose.
使用我们的STU SDK，您可以将生物特征数据保存为您自己选择的格式，但是仅限于使用我们的STU签名板系列。
此外，签名无法使用我们的分析工具进行检查，因为它们使用专有格式来存储我们无法披露的生物特征数据。

---
## 签名数据格式

Signature SDK以我们不公开的专有Wacom格式生成签名数据，部分原因是为了防止伪造。
如果要在签名图像中捕获生物特征数据，可以通过使用RenderEncodeData标志在签名图像中对该数据进行编码来完成。
 
附带的示例程序显示了如何执行此操作，例如GitHub上Signature SDK示例的JScript文件夹中的**CaptureImage.js**。


 
---
---








