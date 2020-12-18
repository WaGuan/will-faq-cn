---
id: howto-test-sdk
title: 测试签名捕获
---

要测试签名捕获，请使用以下任何一种方法：  


* [Capture Analyser](#capture-analyser)
* [SignHere 测试](#signhere-test)
* [Javascript 测试](#javascript-test)  

## Capture Analyser

此测试程序作为Signature SDK的一部分被安装，请从“开始”菜单启动。  

*也可以在这里下载：Capture Analyzer [Capture Analyser](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/CaptureAnalyser.zip)*

该测试是一个不使用Signature SDK COM组件的独立应用程序。

<Start...Wacom Signature SDK...Capture Analyser>

![Capture Analyser](assets/q-sig/capture-analyser.png)

要测试签名捕获：  

<Service...Test Capture...select the service name to match the capture device>:  

* signpad 用于连接的 STU 设备
* wintab 用于通过wintab驱动程序连接到Wacom签批屏， 例如：Intuos，DTU-1031X  

成功的测试将显示签名捕获窗口：

![Capture Analyser](assets/q-sig/capture-analyser-sig.png)

技术支持人员可以根据需要使用其他菜单选项进行故障排除。


---
## SignHere 测试

运行此测试以捕获一个签名： [SignHere.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/SignHere.exe)  

该测试调用32位Signature SDK ActiveX组件以捕获签名：

![Sign here](assets/q-sig/sign-here.png)

错误消息：“Error: Retrieving the COM class factory for component with CLSID ...” 表示未安装32位Signature SDK组件。

如果应用程序无法运行（例如缺少.NET），请使用功能上等效的Javascript测试。

---
## Javascript 测试

Signature SDK包含许多JavaScript代码示例。  

从以下位置下载并解压缩批处理文件：[Sign.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Sign.zip)
zip文件包含：  
```  
Sign.bat - 32位签名捕获来自Signature SDK示例  
Sign-64.bat - 64位签名捕获
```

启动命令提示符（Start ... cmd.exe），以在文件夹中运行批处理文件**Sign.bat**：

![Sign.bat](assets/q-sig/sign-bat.png)

*（单个批处理文件包含对于批处理文件和javascript步骤的注释）*

该测试将调用32位版本的Signature SDK ActiveX组件，该组件在大多数情况下已默认安装。
错误消息“Microsoft JScriptruntime error: Automation server can't create object”，说明尚未安装32位Signature SDK。

要测试64位Signature SDK的安装，请使用：**Sign-64.bat**  
批处理文件使用64位版本的cscript来调用Signature SDK ActiveX组件。  

---
---

