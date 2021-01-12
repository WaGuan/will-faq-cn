---
id: sig-licensing
title: 许可证
---

## 显示签名SDK许可证

要显示您的应用程序中使用的许可证，请使用*\<About\>* 菜单

点击绿色图标，然后选择 **About** ...

![License display](assets/q-sig/license-display.png)

About对话框显示:

 * 签名组件的版本
 * 许可证信息

---

## 移除签名上的'评估'水印

‘评估’字样的水印显示在签名背景中:（译注：下图界面语言是英文显示 Evaluation，即中文的‘评估’）

![Ecaluation License](assets/q-sig/eval-license.png)


#### 解决方案

安装商业版或企业版许可证可以移除水印。

如何获取许可证请查看: [Licensing](../q-licensing/licensing)

如何安装许可证请查看: [How to install a license](#how-to-install-a-license)

查看应用中使用的许可证，点击签名捕捉窗口上的绿色图标，然后 **关于**菜单会显示许可证信息。

---

## 找不到有效的签名组件许可证

当运行使用Wacom Signature SDK创建的签名应用程序时，下列的情况会引发此错误。

* 签名板没有连接到电脑
* 签名板已连接但是Windows没有设备它（在Windows的设备管理器中可能会显示错误）
* 签名板已连接但它不是Wacom生产的产品
* 你使用的是带有触摸屏的电脑或笔记本电脑，它没有Wacom的数字化仪 - 如果对此有疑问请联系制造商 
* 许可证字符串无效， 比如它已过期或者有字符的缺失或新增 （请把许可证字符串粘贴到 https://jwt.io 检查它的有效性）
* 新型的长字符串许可证被应用到旧版本的仅支持短许可证的SDK中。长字符串JWT许可证只支持3.19.0以后版本。
* 你正尝试在远程桌面或Citrix上运行你的应用程序，且签名板没有通过网络重定向。
  更多信息请访问 [Use Citrix for signature capture](howto-use-citrix)
* 你正在使用的虚拟机没有转发签名板数据到虚拟的操作系统中


#### 解决方案

1. 安装最新板的Signature SDK并插入有小的许可证字符串，具体步骤请访问[How to install a license](#how-to-install-a-license).  
Signature SDK (Lite version) 的有效许可证可以从GETTING STARTED.md document on [GitHub](https://github.com/Wacom-Developer/sdk-for-signature-windows)文档中获得.  
如果你不希望升级到最新的版SDK，你可以继续使用旧版的短许可证字符串。请在支持系统中提交请求获取。
2. 确保你使用的是Wacom生产的签名捕捉设备（数字化仪模组或数位板）
3. 如果你是使用远程桌面，请确保数位板数据已通过网络转发（查看上面关于远程桌面的FAQ）
4. 如果你使用Citrix请确保数位板是支持的 - 请查看页面[Signature Devices supported on Citrix](sig-prog-general#signature-devices-supported-on-citrix)
5. 如果你使用VM请确保签名板已成功重定向 - 不是所有的 VM 软件支持自动重定向。

---

## 我的生产许可证无效

在GitHub上的Signature SDK samples中获取的生产许可证不工作。 错误信息是许可证无效或找不到签名板。

# 解决方案

GitHub页面上提供的长字符串生产许可证不支持3.20.4版本之前的Signature SDK。  
两个解决方案:  

1. 升级到最新版的Signature SDK在Wacom Developer网站的"For signature" 页面下载 [https://developer.wacom.com/en-us/developer-dashboard/downloads](https://developer.wacom.com/en-us/developer-dashboard/downloads) 

2. 如果不想升级SDK，请通过支持系统请求申请一个短字符串格式的许可证。

---

## 如何安装许可证

许可证是一串文本字符串保存在下载的文件中，例如：

_eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMTVMiLCJleHAiOjE1MzAxODEwMDQsImlhdCI6MTUyMjIzMjIwNCwicmlnaHRzIjpbIkNETF9BQ0NFU1MiLCJDRExfTElWRV9TVFJFQU1JTkciLCJDRExfVEhJUkRQQVJUWV9QRU5TIiwiQ0RMX1BIVV8xMTEiLCJTSUdfU0RLX0NPUkUiLCJTSUdDQVBUWF9BQ0NFU1MiXSwiZGV2aWNlcyI6W10sInR5cGUiOiJldmFsIiwibGljX25hbWUiOiJXSUxMX1NpZ25hdHVyZV9FZGl0aW9uIiwid2Fjb21faWQiOiI0NjFjMjZjMDRlMGQ0YjQyODk1MjNiNDcwZDZiNTJhMSIsImxpY191aWQiOiJiMzFkYjFmMS1lODdjLTQzZGUtODQ4MS1kMzJiNmUyYWRlOGUiLCJhcHBzX3dpbmRvd3MiOltdLCJhcHBzX2lvcyI6W10sImFwcHNfYW5kcm9pZCI6W10sIm1hY2hpbmVfaWRzIjpbXX0.r_ntKX8JHbvE5lIjZgInsv-SbxenS60ymxgXYew8o5l4_UPdMAXxFa0xTNzIrTfb1DbJakLxcLUgeW2FeXnd5oaDt8fLrQDEgCt3SScp92YsCPnVnze7j4GHTVElDNgYtQzMBPAgPUGIg4NbinWZt8YthcDMCQbDFxWVhU3-AQMguGClxuZxxJHOzLp71nSczQ9aYsBMK2vaaMhjqVMt83XHc_MLtFiWoMM08n09oAsZqnkySyqgjPgXzR73ZWOrCcnwSKUU2VDraXIrO7z79UV1JvMYYQq7RtBQizjPRJlPz9YsBDrE8fexShNIzdizDNJliR_6YtHfQ1vKIdvtBA_

如下所示修改程序代码添加许可证：

#### 签名SDK 

##### HTML/Javascript

如 TestSDKCapture.html 中所示，使用下列语法：
```
 sigCtl.SetProperty("Licence","licence_string");
```

 例如：

``` 
sigCtl.SetProperty("Licence","eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMTVMiLCJleHAiOjE1NTA1NzgzODYsImlhdCI6MTUxOTA0MjUwNiwicmlnaHRzIjpbIlNJ....tkmp48TZNg"); 
```

同样，如果使用Wizard contorl也必须应用许可证

```
 wizCtl = new WizCtl(); 
 wizCtl.licence = "licence_string";
```


##### Java

```
 SigCtl sigCtl = new SigCtl(); 
 sigCtl.licence("licence_string");
```

##### C#
```
 SigCtl sigCtl = new SigCtl(); 
 sigCtl.Licence = "licence_string"; 
```

##### VB.NET
```
  Dim sigCtl As New SigCtl 
  sigCtl.Licence = "licence_string"
```
##### Delphi

```
sigCtl := TSigCtl.Create(Self); 
sigCtl.Licence := 'licence_string';
```
注意，Delphi TSting 限定255个字符，所以你必须将许可证字符分割成连续的字符串，比如：
```
license_string := 'first part of the license' + 'another part of the licence' +  '.....' + 'last part of the license.';
```
   
#### SigCaptX 

##### HTML/Javascript

 如 **SigCaptX-SessionControl.js** 所示，使用下面的代码结构：
```
 sigCtl.PutLicence("licence_string", onSigCtlPutLicence);
```

如果你使用的是WizCtl，请确保许可证字符串以同样的方式被应用，比如：

```
 WizCtl.PutLicence("licence_string", onWizCtlPutLicence);
```

为了方便地找到许可证字符串应该被插入的位置，请在相应的示例代码中搜索字符串 "\<\<license\>\>"。

SDK的示例代码可以在GitHub上的Signature SDK和SigCaptX的仓库下载。

查看应用程序使用的许可证，点击签名捕获窗口上的绿色图标，然后*\<关于\>*菜单会显示许可证信息。

---

## 如何移除板子上显示的“评估”水印

如果你的应用程序代码没有应用许可证字符串或者你使用的不是 Wacom 签名板，评估水印就会出现。

解决方案是添加许可证字符串在你应用程序代码的适当位置。

如果你使用的是一款我们支持的非Wacom签名板，必须从Wacom购买特定的许可证并应用到代码中。

如果没有应用许可证， 则默认的“评估”字样的水印将会出现在签名图片上。

用于标准的 Signature SDK 和 SigCaptX 的生产许可证在位于示例代码中的 GETTING STARTED 文档中提供 https://github.com/Wacom-Developer/sdk-for-signature-windows 

**注意**  

 使用Wacom签名设备必须使用许可证字符串的要求在Signature SDK 1.23.3版中移除，但在3.13.2版中被重新引入。

 如果你用1.23.3之前的版本，移除许你代码中的可证字符串并不能解决这个问题。

 从 3.13.2 到 3.20.3 短许可证字符串是必须的；后来的长许可证字符串（在GitHub和developer.wacom.com网站上提供的）是不被支持的。
 
 如果你使用的是上面范围内的版本，且不想升级你的SDK，请通过支持系统（下面的链接）提交申请获取短许可证字符串。

 如有更多问题请在支持系统中提交请求。

---

## "LQ Wizard not licensed" 或 "DynCaptNotLicensed" 错误

关于这个错误最可能的解释是你正用于签名捕捉的电脑没有安装 Signature SDK 组件。

你必须安装 SDK 和你的签名应用程序。

---
  
## 如何获取Signature SDK许可证，费用是多少？ 

#### 评估许可证 
你可以下载评估许可证在我们的网站 [Developer Relations Web site licensing section](https://developer.wacom.com/en-us/developer-dashboard/license-keys)

它的有效期通常是6个月，到期后可以重申或申请正式许可证。

#### 商业许可证

用于标准版的 Signature SDK and SigCaptX 的许可证在提供的示例代码中的 GETTING STARTED 文档中，请访问： https://github.com/Wacom-Developer/sdk-for-signature-windows。

生产许可证通常是免费的，除非你想使用最新加入的ISO签名格式或数据加密功能，或者是使用非Wacom品牌的笔输入设备。

关于 ISO 和加密功能，请查看Signature SDK安装文件的 documentation 文件夹中Signature Components API 参考文档中的"Signature Data Encryption" and Signature ISO Format" 部分。

SDK安装包可以在 https://developer.wacom.com/en-us/developer-dashboard/downloads 页面 "For signature"标签下下载。

生产许可证需要从区域的内部销售人员获取。如果你没有相应的联系人，请联系Wacom Solution Team solutions@wacom.eu 获取帮助。

完整的商业许可证是永久的，即无需续签或更换。

它应用到你的代码中，对所有安装了你应用程序的电脑都有效。

---

## 如何部署签名SDK，我需要多少个许可证？

为了部署一个签名SDK许可，以便在实际环境中与您的应用程序一起使用，您必须在应用程序代码中包含许可证字符串。

你只需要一个许可证字符串 - 它将使所有安装了你的应用程序的电脑都能使用签名捕获功能。

完整的许可证是永久的 - 不需要续签也不会过期。

---

## 如何获取 静态（SSV） 或 动态（DSV）签名比对SDK

要获取 SSV (Static Signature Verification) 或 DSV (Dynamic Signature Verification) SDK，请发邮件到Wacom Solutions Team solutions@wacom.eu 或联系所在区域的销售经理

---



