---
id: stu-430-installation
title: STU-430V 安装
---
## STU-430V 安装用于串行操作

1. 如果您有“PVT Sample”签名板，请确保背面的制造日期至少为2015年10月。请勿使用任何显示“DVT Sample”的签名板，因为它将无法正常工作。  

2. 如果“DVT Sample”或“ PVT Sample”这句话未印在签名板子的背面，则它肯定是量产的版本，且不必担心制造日期
   或固件版本（请参阅下面第8“部分”）

3. 登录 https://developer.wacom.com 并下载 [STU SDK](https://developer.wacom.com/developer-dashboard/downloads#wacom-device-kit)

4. 下载STU SDK示例：  
   [https://github.com/Wacom-Developer/stu-sdk-samples](https://github.com/Wacom-Developer/stu-sdk-samples)

5. 下载 [**串行连接实用程序**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/serial-connection.zip)

6. 确保您的FTDI驱动程序是最新的。通常，这是通过Windows Update自动完成的。  
   为此，请在设备管理器的“ USB串行端口”右键菜单上选择“更新驱动程序软件”。 
   或者，可以从 [http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm)下载驱动程序。

7. 连接签名板

8. 运行“getSerialPorts”示例程序，该程序应将平板显示为虚拟串行端口：

![Ports](assets/q-stu/serial/getserialports.png)

如果未显示虚拟端口，则打开设备管理器并展开“通用串行总线控制器”部分，如下所示。  

![DevManager](assets/q-stu/serial/devmgr.png)

右键单击“ USB Serial Converter”，选择“属性”，然后选择“高级”选项卡，如下所示。
 
![Serial Properties](assets/q-stu/serial/usbserialprops.png)

如果未选中“加载VCP”复选框，则将其选中并单击 *\<确定\>*。  
拔下签名板子，然后重新插入。
尝试再次运行“getSerialPorts” –这次应该列出虚拟COM端口。


9.  针对虚拟COM端口号运行“query”实用程序，以检查固件版本至少应为1.03.r0：

```
C:\STU-SDK-Serial-Samples\serial-samples>
query COM8
```

返回的信息应显示固件的主要版本和次要版本以及安全版本号，它们共同构成了固件版本。  
在下面的屏幕截图中，固件版本为1.2.156（安全版本以十六进制值形式提供）：  

![Query](assets/q-stu/serial/430querycom8.png)

如果您的固件版本太旧，请提出[支持请求](../q-support/support)

10.  在设备管理器中，选择与“getSerialPorts”所示的虚拟端口号相对应的“USB Serial Port”条目。  
    下面的示例显示COM8：  

![Dev Manager 2](assets/q-stu/serial/devmgr_com8.png)

右键单击“USB Serial Port（COM?）”条目，选择“属性”，然后选择“端口设置”​​选项卡，如下所示。
 
![COM8 Properties](assets/q-stu/serial/com8_props.png)

接下来单击 *\<高级…\>*按钮并检查“Latency Timer”下拉菜单的设置-如果未将其设置为1，则将其更改为“Latency Timer”，然后单击两次 *\<确定\>*，返回设备管理器。

![Advanced settings](assets/q-stu/serial/advancedsettingscom8.png)

11.  在虚拟的适当COM端口号上运行“Query”示例程序，如下所示：  
```
C:\STU-SDK-Serial-Samples\serial-samples>  query COM8
```

注意：对于COM10以上的COM编号，需要特殊的语法，例如：   

```
query \\.\COM10
```

这应该返回类似于以下内容的信息：

![Query 2](assets/q-stu/serial/430com8query.png)

12.  假设“查询”成功，则下一步是尝试DemoButtons – 这将会显示一个初始选择框，如下所示。

![DemoButtons](assets/q-stu/serial/430demobuttons1.png)

勾选“串行”复选框，并将端口值修改为适当的COM号，如果需要，将波特率设置为128000，并勾选“使用签名模式”复选框



![DemoButtons2](assets/q-stu/serial/430demobuttons2.png)

单击<*\<Signature\>*按钮，您应该在签名板和PC监视器上看到一个签名捕获窗口。
使用笔在签名板上输入测试签名，您应该在签名板以及PC监视器窗口上看到墨迹：

![Sign](assets/q-stu/serial/430sigcapt_signed.png)

**请注意：**

强烈建议您在尝试在Citrix客户端/服务器或类似环境中使用签名板之前，先专注于使DemoButtons与本地连接的签名板成功工作。  
如果DemoButtons在本地级别正确运行，那么通过远程连接操作签名板的任何问题都可以安全地归因于用于转发签名板数据的机制或配置。


13. 如果分配给您的Pad的虚拟端口号高于COM9，则将产生语法复杂性，如上文第8点中所述。  
    这可能会导致Citrix或其他需要访问设备的软件中的配置设置出现问题。  
    如下所述，可以手动覆盖预分配的COM端口号。

i)  通过在设备管理器中展开“端口”来找到USB串行端口：

![Device Manager](assets/q-stu/serial/devmgr_ports.png)

ii) 右键单击“ USB Serial Port（COM?）”条目，然后选择“属性”以查看以下屏幕：

![COM6 Properties](assets/q-stu/serial/usbserialprops_com6.png)

iii) 在“端口设置”​​选项卡上，单击“高级”按钮：

![Properties Advanced](assets/q-stu/serial/portsettings_advanced.png)

iv)  在“COM的高级设置?”上 窗口中，单击“COM端口号”下拉列表：

![COM6 Advanced](assets/q-stu/serial/adv_settings_com6.png)

v)  从COM端口列表中选择其他号码。  
    如果对话框告知您COM端口已在使用中，且知道其他任何COM端口均未插入其他设备，则可以放心地忽略此警告，继续进行更改。

![COM6 Advanced 2](assets/q-stu/serial/adv_settings_com6_2.png)

vi)  在此窗口上单击“确定”，然后在上一个窗口上再次单击以返回到设备管理器。  

14.  将540与Signature SDK和Sign Pro PDF结合使用

     为了使sign pro PDF或Signature SDK在串行模式下使用540，请添加以下注册表项：

| 完整的键值路径                       | 数据类型         | 值                      | 描述                      |
|----------------------------------------|-------------------|----------------------------|----------------------------------|
| HKLM\Software\Florentis\sd\stuPort     | REG_SZ            | COM8（请参阅上文第6点）  | 虚拟COM端口号      |
| HKLM\Software\Florentis\sd\stuBaudRate | REG_DWORD         | 128000                     | 波特率                        |


注意： 
如果您在64位系统上运行32位应用程序或SDK，则这些注册表值将需要位于HKLM\Software\Wow6432Node\Florentis\sd中。  
请确保您已经安装了最新版本的Signature SDK，因为某些较早的版本无法识别注册表值。  
另请注意，仅从sign pro PDF版本3.3开始才支持540。

15.	 通过STU SDK使用430V（或串行模式下使用540）

为了从STU SDK以串行模式控制430V或540，需要在代码中使用不同类型的连接。  
以下示例说明了如何使用Javascript：  

```
var ec = m_tablet.serialConnect("COM4", 128000, true);
```

第一个参数是COM端口（先前已使用getSerialPorts进行标识）。  
第二个参数始终为128000（波特率）。  
第三个参数是true或false布尔值，指示连接是否应禁止与其他应用程序共享端口-在Windows 7上有时是必需的。  

一个名为DemoButtonsHIDSerial的C＃的示例，演示了USB和串行连接之间的差异；可以从以下站点的“Additional Samples”部分下载：

https://gsdt.wacom.eu/support/STU-SDK-API-Samples.xml  

如果您需要访问此链接，请发送电子邮件至signature-support@wacom.eu。  

## Citrix 6.5系统上STU 430V的配置

### i)  客户端的注册表设置：

_注册表项_:  HKEY_LOCAL_MACHINE / Software / Citrix / ICA Client / GenericUSB / DeviceRules  
_注册表值_: ALLOW:vid=056a pid=00A6 class="03" # STU 430V

任何ALLOW语句应该写在DENY语句前。  

当在Citrix 7.6.3及更高版本中使用标准（即非串行）STU和DTU设备时，有时可能需要此注册表项。  
因此，请参阅下面最常见的Wacom签名板及其产品ID（PID）值。

| 签名板/屏 | PID    |
|------------|--------|
| 300        | 00A2   |
| 430        | 00A4   |
| 500        | 00A1   |
| 520        | 00A3   |
| 530        | 00A5   |
| 430V       | 00A6   |
| 540        | 00A8   |
| 541        | 00A9   |
| DTU-1031X  | 032F   |
| DTU-1031AX | 039F   |
| DTU-1141   | 0336   |
| DTU-1141B  | 0359   |
| DTH-1152   | 035A   |

有关Citrix 7.6上的USB重定向，请参阅：https://support.citrix.com/article/CTX137939


### ii) 服务器配置：

Citrix将不会自动发现STU-430V。 在Citrix 6.5上使用COM连接时，您需要将客户端COM驱动器映射到映像上的可用COM驱动器。

如果在客户端上，STU-430V显示已连接到COM4，您将在映像上的命令行中执行以下操作： 

```
   net use com2: \\client\com4:
```

其中COM2是任何可用的COM端口。  

为确保此方法有效，请在命令行中运行‘net use’，它将向您显示映射的驱动器。  





