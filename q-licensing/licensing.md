---
id: licensing
title: Licensing
---
## Overview

### 许可证格式

许可证以JSON Web Token (JWT)格式生成，并下载到一个文件，如“License.lic”。

JWT许可证包含三个部分:Header.Payload.VerifySignature

见https://jwt。获取JWT格式的更多细节。

许可证的 payload 部分包含字段值，包括:

* license type - evaluation / commercial / enterprise
* expiry date
* App ID
* SDK supported features

许可证以文本字符串的形式提供，类似于下面的例子:

JWT 许可证示例:
```
eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMTVMiLCJleHAiOjE1MjUxMzI3OTksImlhdCI6MTUyMjMzMzkwNCwicmlnaHRzIjpbIkJBWFRFUl9BQ0NFU1MiLCJDRExfQUNDRVNTIiwiQ0RMX0xJVkVfU1RSRUFNSU5HIiwiQ0RMX1RISVJEUEFSVFlfUEVOUyIsIkNETF9QSFVfMTExIiwiU0lHX1NES19DT1JFIiwiU0lHQ0FQVFhfQUNDRVNTIl0sImRldmljZXMiOltdLCJ0eXBlIjoiZXZhbCIsImxpY19uYW1lIjoiV2Fjb20gRGVtbyBTYW1wbGUiLCJ3YWNvbV9pZCI6bnVsbCwibGljX3VpZCI6IjVjNGM2MmUyLTRiYzUtNGQ2My1hOWY5LTNkZGI4NzZlNTg3NyIsImFwcHNfd2luZG93cyI6W10sImFwcHNfaW9zIjpbXSwiYXBwc19hbmRyb2lkIjpbXSwibWFjaGluZV9pZHMiOltdfQ.iq4w04_Ip5wRobYGvmxHmIrq2KvoE13U8uDjkcncnHVbrENLnQKGVZGueDCfwMtlwhfAZ83u5W7S9wBIkA25xHfxrp969GI0C8PfaQfyGrgbAp4K1WonXdcIF6PU7A5SCjx6PhylUjEw-8SCp7K4Qe14r019ZxD7_dQUlKTjB2mYcrxoZelZ6oRFyPVgAzHZ0VaYcicPtWUGUFSqspos08B_5XjHmrqMAGBgoWeIDwCDKNuKKKRxWinXGYz3kUm8aiC66jlk-B9W8D587jEJ0nPG_bY3k0FCoViU3F5qNRTrRbXfmPnjjsrQfCygKJx1bJwWkJfs3jnT2gP0K-i9oQ
```

JWT查看器可以用来显示许可字符串的内容，例如:
```
{
  "iss": "461c26c04e0d4b4289523b470d6b52a1",
  "exp": 1564531200,
  "iat": 1534514357,
  "rights": [
    "CDL_PHU_111"
  ],
  "devices": [],
  "type": "production",
  "lic_name": "enterpriseGenerated",
  "wacom_id": "bc5c1c740c594c6ea9c6e414fbe2edb2",
  "lic_uid": "435dc411-f08f-4b81-9ac6-779c8d1569a7",
  "apps_windows": [
    "WIN-APP-ID"
  ],
  "apps_ios": [],
  "apps_android": [],
  "machine_ids": []
}
```
可以查看许可内容，但不能更改，因为数据是数字签名的。

### APP ID

大多数许可证都需要一个应用程序ID (App ID)，在LMS上生成许可证或从Wacom Sales请求许可证时都需要这个ID。

应用ID用于在线发布应用程序(如Apple Store或Google Play)。

相同的ID用于生成应用程序许可证。例如:
```
com.health.mycompany.registration
```
评估许可证不需要应用程序ID。

要在应用程序的源代码中找到应用程序Id:

| Platform          | App ID |
| ----------------- | ------ |
| Windows Classic	  | 该平台中不存在应用程序id，因此即使在生产中也不存在检查 |
| Windows UWP	      | 应用程序id应该与Windows.ApplicationModel.Package.Current.Id.Name匹配  |
| iOS               | 应用程序id应该匹配“Bundle Identifier”，例如显示在:Xcode->Project->General->Identity下 |
| Android	          | 应用程序id应该与在build.gradle文件中的android.defaultConfig.applicationId匹配。 |


### 许可证安装

许可证安装的方法依赖于应用程序。

通常许可字符串会被复制到应用程序代码中，例如:
```
try {
     InputStream license = assetManager.open("license.lic");
     LicenseBootstrap.initLicense(this.getApplicationContext(), LicenseBootstrap.readFully(license));
    }
```

为了处理许可证升级和到期日期，我们建议动态地设置许可证，而不是在应用程序中硬编码。例如，在运行时从文件中读取JWT许可字符串。

### 许可证到期

以下原因会导致许可证失效:

* 超过评估期
* 许可证过期

当许可证过期时，相关的SDK函数停止运行，而返回一个许可证错误代码。
错误情况必须被应用程序处理。

例外情况是 **Wacom Ink SDK for signature**:

* 过期的生产许可证:当许可证过期时，SDK仍然可以正常工作，但是签名会显示“评估”水印。
* 过期的评估许可证:当许可证过期时，签名捕获将返回一个错误。

---

## 使用许可证管理系统(LMS)

目前这仅限于评估许可证的管理。
请注意，我们知道Edge的许可证生成和下载过程存在问题，所以最好使用其他浏览器。

* 打开<a href="https://developer.wacom.com/en-us/developer-dashboard"  target="_blank"> Developer Dashboard </a>. 要打开这个页面，你需要用你的Wacom ID登录。
* 选择 **Licenses** 以显示Manage License Keys页面
* 点击 **New Evaluation License** :

<kbd>
![New eval license](assets/q-licensing/lic-new-eval.png)
</kbd>

•您现在可以选择所需的产品，点击 **Generate Evaluation License**：

<kbd>
![Generate eval license](assets/q-licensing/generate-eval-license.png)
</kbd>


* 消息框表示已经创建了一个许可证:
 
<kbd>
![License created](assets/q-licensing/lic-created.png)
</kbd>


* 选择 **Licenses** 以返回“Manage License Keys”页面。许可证密钥现在可以下载：
 
<kbd>
![License downloaded](assets/q-licensing/lic-download.png)
</kbd>


* 点击 **DOWNLOAD** 图标下载许可证。
默认情况下，该许可证将保存到名为“license.txt”的文件中。

在任何时候，您都可以点击链接来更新许可证，然后下载一个新的许可证，其有效期已修改：

<kbd>
![License renew](assets/q-licensing/lic-renew.png)
</kbd>
 
要安装许可证，请遵循相关的SDK示例代码阅读Getting-Started文档中提供的说明。

SDK提供的示例代码在GitHub上，并在此列表中列出：[GitHub Welcome Page](https://github.com/Wacom-Developer/Wacom-Developer-Welcome-Page)

---
## 如何获得生产许可证

用于*Wacom Ink SDK for Signature* for Windows (Lite version)的生产许可在GitHub上的Signature SDK samples中的GETTING STARTED文档中提供。
当前，所有其他生产许可必须向您的地区Wacom销售代表申请。
如果您还没有与Wacom销售代表联系，请在这里通知我们:

在页面上选择联系销售
<a href="https://developer.wacom.com" target="_blank">https://developer.wacom.com</a>



---
