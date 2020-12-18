---
id: howto-use-rdp
title: 使用远程桌面和Citrix进行签名捕获
---

## 使用远程桌面和Citrix进行签名捕获

目前，有两种方法可以使STU签名板在远程桌面，瘦客户端或Citrix环境中工作：

## 1. 串行操作

   使用单色**STU-430V**串行设备或彩色**STU-540**签名板（可以配置为串行操作）。

   当STU板用作串行设备时，它们不受Windows应用于作为标准USB设备的STU相同的限制。
   STU串行连接指南中提供了有关设置430V的说明。 [STU串行连接指南](../q-stu/stu-tablet#STU-Serial-Connection).  
   有关430V的信息，请参见[STU-430V安装和配置](../q-stu/stu-430-installation)。
   对于540，另请参阅[配置STU-540以进行串行操作](../q-stu/stu-540-installation)。

   串行模式下的STU 430V和540可以与我们的SDK（STU和Signature）一起使用，但要使用适当的代码。  

   但请参阅下面有关Citrix的特别说明。

## 2. USB 重定向

   使用其他产品将笔数据转发到服务器（USB重定向）。 

   各种第三方工具可用于执行此操作，例如：  

   * [Fabulatech的用于远程桌面的USB](https://www.fabulatech.com/usb-for-remote-desktop-download.html#tab_usbrdp-win-current)
   * [Dell Wyse TCX](http://www.dell.com/ed/business/p/wyse-tcx/pd)
   * [USB Redirector TS Edition by Incentives Pro](http://www.incentivespro.com/usb-redirector-ts.html)
   * [USB Network Gate by Eltima](https://www.eltima.com/products/usb-over-ethernet/)  

   请注意，尽管我们在某些配置中已经取得了一些成功案例，但我们不能保证它们将在您的特定环境中工作。  
   我们没有上述工具的任何性能测试，也无法对它们提供支持-您需要联系供应商自己进行测试。  


## 有关CITRIX兼容性的说明

Citrix 7.6.3（功能包3）引入了对Wacom签名板的原生支持，如[新增功能](http://docs.citrix.com/en-us/xenapp-and-xendesktop/7-6/xad-whats-new.html)一文中所述。

在撰写本文时（2019年7月），当前支持的设备列表如下：[Citrix支持的设备](sig-prog-general#signature-devices-supported-on-citrix)  
 
可以在Citrix自己的网站上看到类似的信息：[Citrix兼容的Wacom Pen设备](https://citrixready.citrix.com/category-results.html?search=wacom)
 
如果使用我们任何较旧的签名板，请提出请求。  
 

对于较旧版本的Citrix（最常见的版本可能是6.5），则需要在串行模式下使用430V或STU 540。  
在撰写本文时，这些设备在XenDeskTop或XenApp 6.5上支持的最大波特率是每秒128,000位。  
如有疑问，请在上面给出的链接上提出支持请求，以请求最新信息，尤其是当您要使用其他版本的Citrix时。  

---


