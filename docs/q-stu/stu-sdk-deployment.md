---
id: stu-sdk-deployment
title: 安装
---
## SDK 安装

[1.  简介](#1-introduction)  
[2.  Internet Explorer - Javascript](#2-internet-explorer---javascript)  
[3.  Netscape Browser - Javascript](#3-netscape-browser---javascript)  
[4.  Java 应用程序](#4-java-application)  
[5.  .NET 应用程序](#5-net-application)  
[6.  脚本安装](#6-scripted-installation)  


### 1 简介

使用Wacom STU SDK开发的应用程序可以安装在目标系统上，且仅需开发语言和环境所需的SDK中的那些组件即可。  
全套组件： 

| 组件           | 描述                                        |
|---------------------|----------------------------------------------------|
| wgssSTU.dll         | 包含可执行的API代码 |
| wgssSTU.pdb         | 调试数据库包含调试信息 |
| Interop.wgssSTU.dll | .NET应用程序的wgssSTU.dll的接口  |
| wgssSTU.jar         | Java应用程序的wgssSTU.dll的接口 |

&nbsp;  
请注意，为32位和64位应用程序提供了不同版本的文件，分别包含在文件夹Win32和x64中。  
完整的STU SDK安装包括文档以及用于32位应用程序的完整组件集。  
不同的开发语言需要不同的组件，下面概述了这些组件。  

### 2 Internet Explorer - Javascript

Internet Explorer仅需要ActiveX控件：  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_wgssSTU.dll_  

安装可以是下面描述的方法之一，包括脚本方法。  
一旦安装并注册了文件，就可以通过ActiveX访问API。

### 3 Netscape 浏览器 - Javascript

除Internet Explorer之外的浏览器均需要STU SigCaptX跨浏览器组件，因为它们不支持ActiveX。
其中包括Firefox和Chrome版本。

### 4 Java应用

Java应用程序需要以下文件：  

 * wgssSTU.dll            - 包含可执行的API代码
 * wgssSTU.jar            - Java应用程序的wgssSTU.dll的接口


要部署应用程序，可以复制文件。无需注册wgssSTU.dll。  
请注意，为32位和64位应用程序提供了单独的文件版本。  

还包括： *wgssSTU.15.jar*  
如果需要对Java 1.5的支持，请使用此版本（标准.jar至少需要Java 1.7）。在1.5版中，不支持Tablet类。
协议类提供了完整的STU功能，但Tablet的自动错误处理不可用。


### 5 .NET应用

要开发.NET应用程序，需要以下两个文件：  
 * wgssSTU.dll           - 包含可执行的API代码
 * Interop.wgssSTU.dll   - 用于.NET应用程序的wgssSTU.dll的接口

请注意，为32位和64位应用程序提供了单独的文件版本。
应用程序的构建方式将影响部署：  

 * Standard ActiveX – 通过interop + wgssSTU.dll使用ActiveX访问API
 * Embedded interop – 可选地将互操作文件嵌入.exe中
 * Side-by-Side execution – 通过直接访问wgssSTU.dll来访问API

标准ActiveX操作将需要使用任何一种安装方法来安装wgssSTU.dll并进行注册。

通过设置项目属性，Visual Studio可以将Interop.wgssSTU.dll嵌入.exe中，例如：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**目标框架： .NET Framework 4**

然后，可以将对Interop.wgssSTU.dll的引用属性设置为：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **嵌入互操作类型  True**

如果文件嵌入在.exe中，则不再需要将其作为单独的文件进行部署。


并行操作需要访问 _wgssSTU.dll_ 和互操作文件（无需注册）。  
此操作方法是在项目清单文件中实现的，例如：  
```
<dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="wgssSTU" version="2.1.2.0"/>
    </dependentAssembly>
</dependency>
```
如果选择并行执行，则 _wgssSTU.dll_ 可以与.exe复制而无需注册。  

###  6 脚本式安装

对于基本的ActiveX操作，可以将wgssSTU.dll复制到文件夹中并在Windows中注册，例如，以管理员身份启动命令提示符：  

```
       regsvr32.exe wgssSTU.dll
```

安装并注册文件后，就可以通过ActiveX调用来访问API。  
请注意，为32位和64位应用程序提供了单独的文件版本。

---
