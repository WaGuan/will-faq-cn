---
id: howto-use-citrix
title: 使用Citrix进行签名捕获
---

## 将签名设备与Citrix Published App（XenApp）结合使用

为了转发签名捕获设备，使其能够与Citrix Published App一起成功运行，请确保至少遵循了以下两个关键步骤。  
&nbsp;  

1. 在 注册表项_DeviceRules_中为设备创建一个条目。

   下面的示例尤其显示了STU 530的条目。此注册表字符串称为DeviceRules，位于**HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Citrix\ICA Client\GenericUSB**中。


![DeviceRules](assets/q-sig/citrix-1.png)

2. 连接到已发布的应用程序后，通过右键单击任务栏上的Citrix Receiver图标并选择<Connection Center>，确保该设备已由Citrix Receiver转发。

   在左侧的连接列表中选择Citrix服务器，然后单击“设备”按钮（在下面的屏幕快照中显示为<Geräte>），然后在列表中的STU上打勾。 


![DeviceRules](assets/q-sig/citrix-2.png)

---
