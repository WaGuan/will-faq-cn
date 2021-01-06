---
id: stu-sdk-sigcaptx
title: STU SigCaptX
---
*以下各节包含一系列技术支持问题和解答：*

## 示例代码在我的浏览器中不工作

#### 问题
在浏览器中打开STU SigCaptX示例后，似乎没有任何反应

#### 解决方案

1. 确认PortCheck成功提示：“SigCaptX detected”。如果不是这种情况：

   浏览器是否在SigCaptX安装之后安装的？ - 如果是这样，请卸载/重新安装SigCaptX  
&nbsp;  
2. 确认STU平板电脑已连接并且可以运行。

   使用 [STU实用工具](stu-tablet.md#STU-Utilities) 测试平板电脑：  

   **Identify.exe** - 建立连接  
   **PenData.exe** - 验证笔输  
&nbsp;  
3. 从提供的示例代码中运行PortCheck.html-它应报告如下：

    **_SigCaptX Web Service: ready_**  
    **_SigCaptX DCA: ready_**

    如果DCA显示为“not detected”，则可能是由于防病毒或端口冲突引起的。

    要处理端口冲突，请参阅 [使用STU SigCaptX处理端口冲突](#Handling-Port-Conflicts)

    如果这样不起作用，请尝试暂时禁用您的防病毒软件。

    请注意，对防病毒或端口号进行任何更改后，最好重新启动。
 

## 示例代码在Firefox中不工作 

#### 问题
Firefox报告“您的连接不安全”

#### 解决方案
在Firefox Quantum（version 61）中验证。

默认情况下，STU SigCaptX要求访问https://localhost:9000。可以配置其他端口号，但这不能解决以下问题。

Firefox认为尝试与localhost的连接是安全漏洞，因此拒绝允许它 

为了解决这个问题，有必要向Firefox添加安全例外如下所述。

1. 在Firefox浏览器中导航到https://localhost:9000。
2. 将出现一条错误消息，说明连接不安全，因为localhost的所有者未正确配置其网站（请参见下文）。
3. 单击错误页面底部名为“添加例外...”的按钮。
4. 当出现“添加安全例外”对话框时，应已使用本地主机端口号自动填充了该对话框，因此，请单击窗口底部的“确认安全例外”按钮（请参见右下方）。
5. 关闭并重新启动Firefox。

![安全连接](assets/q-faq/stu/connection.png)

![安全证书](assets/q-faq/stu/security-exception.png)

---

## Demobuttons示例在Edge和Internet Explorer中不起作用 

在将demobuttons.html示例加载到Edge或IE中之后，单击“Start Demo”按钮时没有任何反应，因此可以看到此错误。

如果在Edge中按F12键，您将看到以下错误消息：  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_WebSocket Error: SECURITY_ERR, Cross zone connection not allowed_**  
&nbsp;  

如果尝试在IE中按F12，则控制台中将完全看不到任何消息。

通过使用文件资源管理器单击文件“属性”上的“取消阻止”复选框，可以修复此错误，如下所示。
 
![属性](assets/q-faq/stu/demobuttons-properties.png)


<a id="Handling-Port-Conflicts"/>

---

## 使用STU SigCaptX处理端口冲突

默认情况下，STU SigCaptX使用服务端口号9000。 

在其他应用程序也使用相同端口号或防火墙或防病毒软件限制对其访问的系统上，这有时可能会引起问题。

如果STU SigCaptX无法访问端口9000，则它将无法运行。

如果访问被安全软件阻止（尤其是卡巴斯基已经遇到过这种情况），那么一种解决方案是更改安全软件中的设置，以便允许访问该端口。

另一种解决方案是更改STU SigCaptX使用的端口号-这需要修改代码和更改注册表设置，如下所述。

#### 1.  注册表设置


有关更多详细信息，请参阅 [SigCaptX安装指南](/stu/docs/sigcaptx-guide)

Location: _HKEY_LOCAL_MACHINE\SOFTWARE\Wacom\SigCaptXSTU_ or _HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Wacom\SigCaptXSTU_  

&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   Port 9000


将端口号从9000更改为您认为不太可能引起冲突的另一个数字。 


#### 2.  代码:
 
位置：请在您的代码中搜索引用服务端口的任何位置，例如在**wgssStuSdk.js**中，如下所示：
```
                var defPort = 9000;
 ```
找到这一行代码后，将值“9000”更改为与您在注册​​表中为“端口”设置的新值。

因此，如果您将端口值指定为14500，则代码现在将显示为：
```
                   var defPort = 14500;
```
您可能还需要在其他地方更改引用，例如在我们的示例网页**PortCheck.html**中，其中“9000”将需要更改为“14500”：
```
                     Service port: <input type="text" id="portText" value="9000">
```
---
## STU SigCaptX 日志

注册表位置是： **_HKLM\Software\\(Wow6432Node\\)Wacom\SigCaptXSTU_**

在此位置需要两个注册表值：  
  

| 名称           | 类型       | 值                                                                                   |
|----------------|------------|-----------------------------------------------------------------------------------------|
| ArbitratorLog  | REG_SZ     | [服务日志文件的路径] 例如： "C:\Users\jsmith\documents\STUSigCaptX-Arbitrator.log"  |
| DeviceCtlLog   | REG_SZ     | [服务器日志文件的路径]  例如： "C:\Users\jsmith\documents\STUSigCaptX-DeviceCtl.log"   |  

创建以上条目后，应重新启动PC。  

ArbitratorLog和DeviceCtlLog必须是日志文件的绝对路径名，而不是日志目录。  

---
 






