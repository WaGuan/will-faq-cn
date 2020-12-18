---
id: howto-upload-540
title: 上传签名屏幕图片到STU-540
---

* [介绍](#introduction)
* [安装与操作](#installation-and-operation)
* [Windows操作](#windows-operation)
* [命令行操作](#command-line-operation)
* [Signature SDK API](#signature-sdk-api)
* [Windows注册表API](#windows-registry-api)

## 介绍

STU-540签名板提供了另一种签名操作模式。选择此模式后，将直接从平板电脑的ROM存储中检索签名捕获期间显示的（背景）图像。  
这意味着，由于无需为每次签名捕获操作将图像重新发送到签名板，签名板的响应速度就会更快，并且可以在本地处理按钮的按下操作。  
图像存储在非易失性ROM中，只需一次性的安装配置步骤即可存储。  

当将STU-540设置为在较慢的串行通信模式下运行时，使用存储的图像尤为重要。  
在远程桌面配置中，有时需要串行通信方法。
这里提供在串行和USB通信之间切换STU-540的说明：[STU串行连接](../q-stu/stu-tablet#STU-Serial-Connection)  

如果您打算在串行模式下使用STU-540，请首先在USB模式下使用Screen Upload实用程序来快速上传存储签名屏幕图片。一旦存储，它们在串行模式下仍然可用。  

使用STU签名屏幕上传应用程序创建和存储签名背景图像，以便与Signature SDK一起使用。  
最多可以定义三个备用签名捕获屏幕，例如：

![标准的签名捕获屏幕](assets/q-sig/upload-capture-1.png)

## 安装与操作

该实用程序作为Signature SDK的一部分安装，并从“开始”菜单运行：  

> **开始…Wacom Signature SDK…Signature Mode Image Uploader**

或者，找到并运行安装在Common Files\WacomGSS:中的.exe：

  **wgssStuImgUploader.exe**

在应用程序中进行的设置将保存在配置文件中。  
配置文件用于生成上载到STU签名板的图像，并且在签名捕获期间由签名SDK用来验证正确的配置。  

## Windows 操作

![Screen uploadeer](assets/q-sig/upload-capture-2.png)

### 用法  

屏幕编号：   

选择签名屏幕编号1..3

操作方式：

选择可用的操作之一：

* set image （设定图片）
* delete image （删除图片）
* none （无）

当前屏幕的选择将保存在配置文件中。

### Text （文本）

#### Reason for signing（签名原因）

* Dynamic （动态的，参数“签名原因”的值）
* Static （静态的）

选择“Dynamic”选项以使用API​​调用中提供的文本来开始签名捕获。静态允许定义永久文本。  


#### 签署人

* Dynamic （动态的，参数“签名人”的值）
* Static （静态的）

选择“Dynamic”选项以使用API​​调用中提供的文本来开始签名捕获。静态允许定义永久文本。  

#### Location: （地点）

* Dynamic (动态的，参数SetProperty(“Where”)的值)
* Static （静态的）

在开始签名捕获之前，选择“动态”选项以使用SetProperty API调用中提供的文本。静态允许定义永久文本。


#### Date/time: （日期/时间）

* Dynamic （动态的，来自系统时钟）
* Not shown （不显示）

在签名捕获屏幕中显示日期和时间是可选的。

### Buttons （按钮）

使用默认语言值在 确定/清除/取消 按钮上定义文本的内容，或定义其他文本。

### Font （字体）

选择在签名捕获屏幕中用于文本的字体和大小

### 菜单选项

#### File  

  * New                                - 重置配置  
  * Open                               - 打开现有配置  
  * Save                               - 替换当前配置  
  * Save As…                      - 选择文件名并保存当前配置  
  * Exit                                 - 退出应用程序  


#### Tablets  

  * Upload current screen       - 上传当前选定的屏幕配置
  * Upload all screens            - 上传所有三个屏幕配置
  * View current image           - 预览已配置的签名屏幕


#### Help  

  * About                              - 显示版本信息


## 命令行操作

使用命令行操作编写屏幕上传过程的脚本：

  **wgssStuImgUploader.exe [config-file] -q -h**  

* [config-file]                - 应用程序保存的配置文件的名称  
* -q                          - 静默模式–上传并退出  
* -h                          - 帮助信息    

应用程序处理配置文件中定义的命令，例如：

```xml
<?xml version="1.0" encoding="utf-8"?>
<Screens>
  <Screen number="1">
    <Why>I accept the terms of the agreement</Why>
    <Who>Customer</Who>
    <When>0</When>
    <Language>EN</Language>
    <OK>OK</OK>
    <Clear>Clear</Clear>
    <Cancel>Cancel</Cancel>
    <Font size="12">Verdana</Font>
  </Screen>
  <Screen number="2">
    <Why>Ich akzeptiere die Bedingungen der Vereinbarung</Why>
    <Who>Kunde</Who>
    <When>1</When>
    <Language>DE</Language>
    <OK>OK</OK>
    <Clear>Löschen</Clear>
    <Cancel>Abbrechen</Cancel>
    <Font size="12">Verdana</Font>
  </Screen>
</Screens>

```



## Signature SDK API

通过设置以下属性，在对签名捕获的调用中启用STU签名模式：

&nbsp;&nbsp;&nbsp;&nbsp;**stuSigModeConfig**

Value (STRING)   \[完整的配置文件路径\], [签名屏幕编号 1..3]  
其中 签名屏幕编号 值 (DWORD) 为：  

* 0 – 不使用签名模式
* 1 – 使用 签名屏幕1
* 2 – 使用 签名屏幕2
* 3 – 使用 签名屏幕3

### 示例 1

```javascript
var dc  = new ActiveXObject("Florentis.DynamicCapture");
var sig = new ActiveXObject("Florentis.SigCtl");

dc.SetProperty("stuSigModeConfig", "c:\\config\\STU-screens.config,1");
dc.Capture(sig, "Customer", "I accept the terms of the agreement");
```

#### 应用说明：   

* 如果上传到签名板的图像与配置中定义的图像不匹配，则捕获将失败。

* 签名捕获必须获得许可。如果未获得许可，则由于添加了评估水印，图像比较将失败。

* 如果配置为 签名原因/签名人/位置 指定静态值，则传递给Capture()的Who和Why参数以及传递给SetProperty（“Where”）的Where值必须匹配。 

* 应该给SetProperty(“stuSigModeConfig”)传递配置文件的名称（如有必要，包括路径）+ 屏幕号（1到3），并用逗号分隔。

  如果省略屏幕编号，则Capture将使用它在配置文件中找到的第一个屏幕，或者可以通过以下调用来指定屏幕编号：  
```
     SetProperty("stuSigModeScreenNum", <num>);      
```
     
* 作为提供配置文件的替代方法，可以通过一系列带有属性名称的SetProperty调用以编程方式指定配置：

    "stuSigModeScreenNum"  
    "stuSigModeWhy"  
    "stuSigModeWho"  
    "stuSigModeWhen"      
    "stuSigModeOK"  
    "stuSigModeClear"  
    "stuSigModeCancel"  
    "stuSigModeFontName"  
    "stuSigModeFontSize"  
    "stuSigModeConfig"  

    这些值将使用上传到STU签名板的配置进行验证。

### Example 2

```javascript
var dc  = new ActiveXObject("Florentis.DynamicCapture");
var sig = new ActiveXObject("Florentis.SigCtl");//  replace dc.SetProperty("stuSigModeConfig", szSigConfig);
    dc.SetProperty("stuSigModeScreenNum",1);
//  dc.SetProperty("stuSigModeWhy",szWhy);       dynamic
//  dc.SetProperty("stuSigModeWho",szWho);       dynamic
    dc.SetProperty("stuSigModeWhen",1);
    dc.SetProperty("stuSigModeOK","OK (screen 1)");
    dc.SetProperty("stuSigModeClear","Clear");
    dc.SetProperty("stuSigModeCancel","Cancel");
    dc.SetProperty("stuSigModeFontName","Verdana");
    dc.SetProperty("stuSigModeFontSize",10);
 
 dc.Capture(sig, "Customer", "I accept the terms of the agreement");
```

* 使用query.exe（STU串行连接实用程序）来验证签名屏幕图像是否已上传。例如：

```text
...
RomImageHash[Signature,1,normal]          = 6686b765cb00bcdefd40a0f53c58d46a 
RomImageHash[Signature,1,pushed]          = 1b4bf1afd08396de7fd8715749bd9274
RomImageHash[Signature,2,normal]          = 47954cb7e99c36b8ee9b4df6f8425edd
RomImageHash[Signature,2,pushed]          = cf9d9d2727f0eef1cd646c2864e6a428
RomImageHash[Signature,3,normal]          = not stored
RomImageHash[Signature,3,pushed]          = not stored
...
```

## Windows 注册表 API

要在旧版系统中使用STU签名模式并作为在应用程序中调用SetProperty的替代方法，可以在注册表中设置等效值。  

#### 键

* 32 位: HKLM\Software\Wow6432Node\Florentis\sd
* 64 位: HKLM\Software\Florentis\sd

#### 属性: **stuSigModeConfig**

值 (STRING)  [配置文件的完整路径名], [签名屏幕编号 1..3]  
其中，签名屏幕编号值（DWORD）为：  

*  1 – 使用签名屏幕 1
*  2 – 使用签名屏幕 2
*  3 – 使用签名屏幕 3
* []  – 未指定: 使用默认签名屏幕 1

#### 示例
```
[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]"stuSigModeConfig" = "c:\\config\\STU-screens.config,1"
```

**注意**  

请注意，使用评估许可证时，签名捕获将返回错误101。  
这是因为屏幕文件的哈希不包含使用非生产许可证时显示的“评估”水印。  

---


