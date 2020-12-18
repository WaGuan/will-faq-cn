---
id: howto-slideshow
title: 循环播放图片
---

## 在STU系列签名板上显示幻灯片

当STU系列签名板未用于签名捕获时，它可用于显示信息。  

一种解决方案是使用免许可证的STU Display应用程序，该应用程序可与Signature SDK应用程序一起安装：  

| 产品描述                  | 下载链接 Link                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------|
| STU Display Windows 安装程序     | [Wacom-STU-Display-2.0.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Wacom-STU-Display-2.0.exe) |
| STU Display 管理员指南 | <a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Administrator-Guide-to-Wacom-STU-Display.pdf" target="_blank">Administrator-Guide-to-Wacom-STU-Display.pdf</a> |

完整的安装详细信息在上面引用的《管理员指南》中。  

> **注意**  
> 自编写《管理员指南》以来，STU-540彩色数位板已被引入并受支持。    


## 安装摘要

* 使用上面的链接，在Windows 32位或64位系统上下载并运行安装程序**Wacom-STU-Display.exe**。  
* 如果不需要，请使用 *\<Options\>* 按钮取消选择STU平板电脑驱动程序的自动安装。（通常只有彩色STU才需要驱动程序，但可以安装该驱动程序以备将来使用）。  
* 该应用程序作为Windows服务安装，并且独立于其他Wacom SDK和sign pro PDF产品。
* 在控制面板中创建**Wacom STU Display**以提供控制。为不同大小的STU型号准备的STU图像文件创建了单独的文件夹。  


## 概述

STU Display 检测一个或多个连接的STU设备，并循环播放在相关图像文件夹中找到的图像文件。
可以将其他图像文件添加到文件夹中，这些图像文件将被添加到循环播放中。  
同样，从文件夹中删除的文件将不会在循环播放中显示。  

Wacom STU Display控制面板更改幻灯片播放的方式。  
首先点击 *\<Change\>* 打开控制面板。 然后可以进行以下更改：

* 每N秒更改一次图像。  
* 禁用幻灯片播放  
* 图像文件夹位置  
* 图像布局：  
    * 尺寸：例如最合适  
    * 边框：例如自动  
    * 位置：例如中间  

---

