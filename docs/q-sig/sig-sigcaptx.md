---
id: sig-sigcaptx
title: SigCaptX
---

## 卸载SigCaptX时，日志文件中的“错误0x80070643：无法卸载MSI软件包”

Internet上的搜索引擎结果表明，可能是您的.NET框架已损坏，或者您的MSI软件更新注册了。

按照本文的说明，可以通过使用Microsoft Fix It解决此问题：https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed

请注意，对于第三方提供的工具，我们不承担任何责任或义务，我们也不保证它们将解决问题。

---
## 安装SigCaptX时出现“无法启动SigCaptX服务”

在Windows 7上安装SigCaptX时，您可能会收到一条错误消息，提示无法启动SigCaptX服务。

导致此错误的两个已知原因如下。
 
1. 我们对Wacom可执行文件和DLL应用了更严格的数字签名方法，这通常会在Windows 7上引起问题。


   应用此附加保护是为了防止文件被修改的可能性。
 
   如果已使用Windows Update完全更新Windows，则不会报告该错误消息。如果无法应用完整的Windows Update，则此特定更新通常可以解决问题：KB 3153171
 
   可以从[Microsoft.com](http://microsoft.com/)下载此更新：
&nbsp;  

   * [KB 3153171 - 32-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52140)

   * [KB 3153171 - 64-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52069)


2. SigCaptX服务默认使用端口8000。可能是由于另一个进程正在使用该端口而导致它失败（或者它已被您的防病毒或防火墙阻止）。


   您可以使用“ netstat -a”来查找是否有另一个使用该端口的进程。您可以按照《 SigCaptX用户指南》中的说明更改SigCaptX使用的端口号。
   
   请注意，如果您在注册表中更改了默认端口号，则还需要更改Javascript代码中使用的端口号。
下面显示了在示例代码中如何使用端口号：
&nbsp;  
```
   wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 8000);
``` 

---
## 处理端口冲突

默认情况下，SigCaptX使用起始端口号8000（用于SigCaptX服务进程）。8001用于第一个服务器进程，8002用于第二个服务器进程，依此类推。

在其他应用程序也使用相同范围内的端口号或防火墙或防病毒软件限制对其访问的系统上，这有时可能会引起问题。

您可以通过运行以下命令来确定另一个应用程序或进程是否正在侦听端口8000：  
&nbsp;  
```
netstat -a -o | find "LISTENING" | find ":8000"
```
&nbsp;  
如果SigCaptX无法访问端口8000和8001，则它将无法运行。  

如果安全软件阻止了访问（尤其是卡巴斯基和Sophos曾遇到过这种情况），则一种解决方案是更改安全软件中的设置，以便允许访问这些端口。  

另一种解决方案是更改SigCaptX使用的端口号-这需要更改编码和注册表设置，如下所述。  
&nbsp;  

1. Registry settings (for more details please see the SigCaptX installation guide at Signature Library - Windows - SigCaptX - User Guide - using word):   注册表设置（有关更多详细信息，请参Signature SDK下载中包含的SigCaptX安装指南：SigCaptX-User-Guide.pdf）：  


    位置： **HKEY_LOCAL_MACHINE\SOFTWARE\Wacom\SigCaptX** 或 **HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Wacom\SigCaptX**  

                 start_port 8000
                 end_port   65535  


    将start_port号从8000更改为另一个您认为不太可能引起冲突的数字。  
    如果需要，也可以更改end_port。  

&nbsp;  

2. 代码：
        位置： 请在您的代码中搜索调用起始端口的位置，如下所示：   
&nbsp;  

```
     wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 8000);
```  

&nbsp;  
找到这一行代码后，将值“8000”更改为与您在注册​​表中为上述“start_port”设置的新值相同。
因此，如果您指定的start_port值为10500，那么代码现在将变更为：   
&nbsp;  

```
     wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 10500);
```

---
## 在Firefox上运行SigCaptX生成错误，指出未检测到签名SDK服务

此错误消息可能是Firefox内部安全检查引起的。要确认此问题，请直接在浏览器的地址栏中输入“https://localhost:8000”，以查看是否收到错误消息。  

如果看到错误SEC_ERROR_REUSED_ISSUER_AND_SERIAL，请按照以下Mozilla支持页面上的说明删除cert8.db和cert9.db文件：  

https://support.mozilla.org/en-US/questions/1203237  

如果然后在地址栏中重新输入 https://localhost:8000 ，则可能会在左下方看到错误消息，即“您的连接不安全”-在这种情况下，请按照以下说明解决问题。  

如果在尝试访问端口8000时未看到SEC_ERROR_REUSED_ISSUER_AND_SERIAL错误代码，请直接转到下面概述的步骤。  

SigCaptX默认需要访问端口 https://localhost:8000 和 https://localhost:8001。可以配置其他起始端口号，但这不能解决连接问题。  
Firefox认为尝试与localhost的连接是安全漏洞，因此拒绝允许它。  
为了解决这个问题，必须按照以下步骤向Firefox添加安全例外。  
 
1. 在Firefox浏览器中访问https://localhost:8000。  
2. 将出现一条错误消息，说明连接不安全，因为localhost的所有者未正确配置其网站（请参见左下方）  
3. 点击<高级>按钮  
4. 单击错误页面底部的 <添加例外..> 的按钮。如果不存在，请遵循下面的附加说明。  
5. 当出现“添加安全例外”对话框时，带有本地主机端口号的信息应该已自动填充了该对话框，因此请单击窗口底部的<确认安全例外>按钮（请参见右下方）。  
6. 现在，您需要对 https://localhost:8001 和 https://localhost:8002 重复上述步骤1到4 。在非常繁忙的系统上，可能还需要添加端口8003，但是您可能无法通过在地址栏中输入端口号来执行此操作。因此，您必须转到Firefox的“选项”菜单，然后在左侧选择“隐私和安全性”。然后向下滚动到底部，然后点击<查看证书>。  
7. 在“服务器”下，您应该看到已为 localhost:8000 添加的异常。单击<添加例外..>按钮，然后在标有“地址：”的字段中输入“https://localhost:8001”，然后单击<获取证书>  
8. 单击<确认安全例外>按钮  
9. 在非常繁忙的系统上，您可能还需要为端口8002和8003重复7和8。  
10. 关闭并重新启动Firefox。  

如果没有<Add Exception ..>按钮，添加安全例外的说明：  

1. 单击浏览器窗口右上方的Firefox菜单图标，然后选择<选项>  
2. 从左侧列表中选择“隐私和安全性”  
3. 向下滚动到“证书”部分，然后单击<查看证书...>按钮  
4. 选择“服务器”选项卡，然后单击“ <添加例外...>”按钮  
5. Enter "https://localhost:8000 in the "Location" field and click <Get Certificate> - if no certificate is found click the <Confirm Security Exception> button and also the checkbox labelled "Permanently store this exception"  在“地址”字段中输入“https://localhost:8000”，然后单击<获取证书> -如果未找到证书，请单击<确认安全性例外>按钮，然后单击标记为“永久存储此例外”的复选框。

![Connection not secure](assets/q-sig/SigCaptX_FF_LocalHostConnectionError.png)

![Add security exception](assets/q-sig/SigCaptX_FF_AddSecurityException.png)

---
## 示例代码在我的浏览器中不工作

在浏览器中打开SigCaptX示例后，似乎没有任何作用。  

#### 解决方案

首先确认PortCheck成功指示：“SigCaptX detected”。  
如果不是这种情况：  
安装SigCaptX之后是否安装了浏览器？-如果是这样，请卸载/重新安装SigCaptX  

---
## SigCaptX日志记录

注册表位置是：**_HKLM\Software\\(Wow6432Node\\)Wacom\SigCaptX_**

此位置需要三个注册表值：  
&nbsp;  

| 名称      | 类型         | 值                                                                             |
|-----------|--------------|-----------------------------------------------------------------------------------|
| Logging   | REG_DWORD    | 1 (用于服务), 2 (用于服务器) 或 3/FF for both  |
| ServiceLog  | REG_SZ     | [服务日志文件的路径]例如："C:\Users\jsmith\documents\SigCaptX-service.log"  |
| ServerLog   | REG_SZ     | [服务器日志文件的路径]例如"C:\Users\jsmith\documents\SigCaptX-server.log"   |  
&nbsp;

如果省略ServerLog或ServiceLog，则会在“公共文档”中创建具有默认名称的文件。  

必须重新启动服务器和服务进程才能使设置生效-最简单的选择是重新启动PC。  

注意： ServiceLog和ServerLog必须是日志文件的绝对路径名，而不是日志目录。

---
## SigCaptX示例在Edge或Internet Explorer中不起作用  

尝试在Edge或Internet Explorer中运行SigCaptX示例代码时，单击按钮时没有任何反应。

# 解决方案

这通常是由于示例代码通过zip文件从Internet下载而引起的。
解决方法是右键单击要运行的HTML文件，然后选中下图中以黄色突出显示的“取消阻止”复选框。

![Unblock](assets/q-sig/Unblock.png)

---
## 检测到SigCaptX服务，但未检测到服务器  

这表明SigCaptX服务器进程已崩溃或停止，从未启动或由于某种原因无法访问。  

为了找到根本原因，请尝试以下操作：  

1. 禁用防病毒软件（Sophos和Kaspersky存在已知问题）。如果这解决了问题，请配置您的防病毒软件以允许SigCaptX运行并可以访问端口8000和8001。
&nbsp;

2. 在调试模式下（使用F12）启动浏览器，然后在地址栏中键入“ https://localhost:8000 ”，以查看控制台窗口中是否有任何错误消息。
   如果有任何消息表明无法访问端口8000，请参阅有关处理端口冲突的常见问题解答
   [Handling Port Conflicts](#handling-port-conflicts)  
&nbsp;  

3. 在Windows应用程序事件日志中查看是否存在与该过程有关的任何错误消息，并通过提交支持请求进行报告  

4. 如果您有权访问注册表，则还可以按照[SigCaptX日志记录](#sigcaptx-logging) 中的说明启用日志记录，然后将日志文件附加到支持请求。  

---
## SigCaptX可与Internet Explorer一起使用，但不能与Firefox或Chrome一起使用

请注意，必须在安装SigCaptX**之前**安装Firefox和Chrome ，否则SigCaptX将无法找到它们并且无法使用它们，即使它可用于Internet Explorer。  

特别是必须先安装Firefox，然后还必须启动用户会话-这是因为Firefox创建安全证书数据库，并且SigCaptX需要知道其位置。  

且仅当第一个普通用户浏览器会话启动时，安装程​​序才创建该数据库。

---
## 未检测到签名SDK服务

为了确定问题的确切根源，请按照给出的顺序进行以下操作：  

1.  必须安装Signature SDK及其SigCaptX组件。可以使用各自的安装程序分别安装它们，也可以组合使用SigCaptX安装程序来安装两者。 
   所有安装程序都包含在Signature SDK下载文件中，该文件可在 https://developer.wacom.com/developer-dashboard/downloads “For signature”页面下找到。提取后，创建的目录包含三个子文件夹，如下所示（请注意，确切的文件名将根据当前版本而有所不同）：
&nbsp;  

| 文件夹名称     | 内容                                                                                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 文件资料   | API参考手册以及安装和用户指南 |
| SigCaptX        | **Wacom-SigCaptX-1.21.2.exe**: SDK和跨浏览器的组合安装程序。 **Wacom-Signature-SDK-SigCaptX-1.21.2.msi**: 仅用于SigCaptX跨浏览器的MSI安装程序|
| SignatureSDK    | **Wacom-Signature-SDK-x86-4.5.1.msi**: 用于32位Signature SDK的MSI安装程序。 **Wacom-Signature-SDK-x64-4.5.1.msi**: 用于64位Signature SDK的MSI安装程序  |

&nbsp;  

2.  SigCaptX必须要在使用其的所有浏览器安装之后安装-如果在SigCaptX之后安装了任何浏览器，请卸载并重新安装SigCaptX。
&nbsp;  
3.  运行PenData.exe以检查数位板是否已连接并响应笔输入-PenData是我们的[STU实用工具之一](../q-stu/stu-tablet#STU-Utilities)  
&nbsp;  
4.  运行**TestSDKCapture.html**示例程序，该示例程序可在SDK附带的“Signature Library - Windows - Samples”中找到。  
&nbsp;  
5.  确保Windows服务中的“Wacom SigCaptX”服务正在运行。如果未出现，请尝试从安装程序重新安装SigCaptX。
&nbsp;  
6.  运行SigCaptX示例中的**PortCheck.html**，查看它是否检测到SigCaptX服务。
&nbsp;  
7.  如果以上所有操作均成功，请尝试运行SigCaptX中的**SigCaptX-Capture.html**示例程序，以查看是否可以捕获签名。
&nbsp;  
8.  如果仍然无法捕获签名，请参阅[处理端口冲突](#handling-port-conflicts) 中的常见问题解答。


如有任何错误请通过支持请求提交。

---
---







