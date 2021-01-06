---
id: stu-540-modes
title: STU-540运行模式
---


## 介绍

STU-540包括下列多种可选的运行模式：

* 标准模式
* 签名捕获
* 键盘模式
* 密码键盘
* 图片播放

在不同的运行模式下，STU固件处理用户界面，例如表明按钮被按下。
这是通过签名板预加载可立即显示的图像来实现的。

当使用相对较慢的串行接口时这尤其重要，因为不需要在用户界面操作之间传输图像。
此外，图像存储在非易失性存储器中，可以独立管理。

> 请注意，STU-541也支持这些可选的运行模式。  
> 区别在于STU-541使用加密通信，不支持串行通信。
> 由于加密，STU-540测试实用程序与STU-541不兼容。

### 标准模式

标准模式与以往的STU型号模式保持不变。

### 签名捕获模式

在“签名捕获”模式下，将显示捕获屏幕，如下面的第一幅图像所示。
使用选项最多可以定义三个捕获屏幕-请参见第二张图像。

![Signature Capture](assets/q-stu/540/SigCapt-example.png)

![Signature Capture config](assets/q-stu/540/SigCapt-config1.png)

![Signature Capture config](assets/q-stu/540/SigCapt-config2.png)

有关更多详细信息，请参阅：STU-540签名捕获模式。

### 键盘模式

使用键盘模式通过单击图形进行选择。
键盘选择屏幕（内容）可以通过多种方式进行配置，例如：

![Key Pad](assets/q-stu/540/KeyPad-example1.png)

![Key Pad](assets/q-stu/540/KeyPad-example2.png)

![Key Pad](assets/q-stu/540/KeyPad-example3.png)

有关更多详细信息，请参见：STU-540键盘模式

### 密码键盘模式

使用密码键盘模式输入数字。
PIN码输入屏幕可以通过多种方式进行配置，如下所示。
图示了3种PIN键盘类型以及5种按键布局。

![PIN Pad](assets/q-stu/540/PIN-type.png)

![PIN Pad layout](assets/q-stu/540/PIN-layout.png)


有关更多详细信息，请参见：STU-540密码键盘模式

### 图片播放

将图像上传到签名板，然后选择自动显示功能。
最多可存储10张图像用于循环显示，并且每次屏幕更新之间的间隔均可编程。

有关更多详细信息，请参阅：STU-540图片播放模式

### ROM

不同操作模式使用的图像存储在板载闪存（ROM）中，以便立即检索。

有关更多详细信息，请参见：STU-540 ROM存储

---
## STU 540 测试实用程序

### 资料下载

| 文件 | 描述 |
| ---- | ----------- | 
| [**STU-540-Test-Utilities.zip**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-540-Test-Utilities.zip) | 测试工具 |
| [**STU 540 Test Utilities src.zip**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-540-Test-Utilities-src.zip) | C++ 源代码 |
<!-- EXTERNAL -->

STU-540可以在标准USB HID模式下使用，也可以更改为用作串行虚拟Com Port（VCP）设备（通过USB连接进行串行操作）。
当需要远程连接并且无法进行完整的USB传输时，可以使用串行模式。串行接口比HID显著慢，并且图像传输花费大量时间。  
这意味着正常操作是不切实际的，因为在上传图像数据时，显示更新之间会存在较长的延迟。  
为了克服这个问题，STU-540具有许多增强的模式，通过这些模式，图像被预加载到设备的非易失性存储器中并在运行时显示-这样就无需在操作期间上传图像。  
测试实用程序在HID和串行模式下演示了这些功能。  

要为USB或串行操作配置STU-540，请参阅：  
[STU串行连接](stu-tablet)  
将测试实用程序从STU-540-Test-Utilities.zip解压缩到一个文件夹：  
 
| 工具             | 描述                        |
|---------------------|------------------------------------|
| DemoButtons.exe     | 演示签名模式        |
| DemoKeyPad.exe      | 演示键盘模式        |
| DemoPinPad.exe      | 演示密码键盘模式   |
| DemoSlideShow.exe   | 演示图片播放 |
| DeleteRomImages.exe | 删除预加载的图像 |

> 注意：为避免上载图像时出现延迟，请在尝试使用串行模式之前使用USB HID连接运行测试。**

### DemoButtons

#### 签名方式

![Capture Signatue Mode](assets/q-stu/540/demobuttons-signaturemode.png)

“使用签名模式”选项用于在常规和板载签名捕获方法之间切换。
板载签名模式旨在用于慢速串行连接。  
单击[ Signature ]-将开始使用STU-540签名捕获模式（通过HID）捕获签名：

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture3.png)

DemoButtons第一次运行时，用于签名捕获模式所需的图像将被上载到签名板。由于它们存储在ROM中，因此不用再次上传。  
建议使用HID模式上传图像。要退出，请按STU显示屏上的按钮（不是Windows）。

#### 串行签名捕获

运行DemoButtons.exe并选择以下内容：
* 选择 ‘Use serial connection’
* 选择端口以匹配query.exe中使用的虚拟端口
* 将波特率设置为128000
* 选择 ‘Use Signature Mode’
* 点击 [ Signature ] 开始签名捕获

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture.png)

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture-mode.png)

由于图像是在HID测试中上载的，因此可以立即使用，并且在签名或清除屏幕等方面没有延迟。  
要强调签名捕获模式的有效性，请取消选择“使用签名模式”。
此方法使用常规的图像上载方法，并且需要花费大量时间才能启动，因为全屏图像是在运行时上载的：

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture2.png)

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture-sign.png)

### DemoKeyPad
该演示使用键盘模式进行图形化的用户选择。
程序第一次运行时，它将上传所需的图像。

![键盘模式](assets/q-stu/540/demokeypad.png)

![键盘模式](assets/q-stu/540/demokeypad-results.png)

### DemoPinPad

该演示使用PIN键盘模式输入PIN码。
程序第一次运行时，它将上传所需的图像。

![密码键盘模式](assets/q-stu/540/demopinpad.png)

![密码键盘模式](assets/q-stu/540/demopinpad-results.png)

### DemoSlideShow

该演示使用图片播放模式显示许多图像。
程序第一次运行时，它将上传所需的图像。
图像在数位板上连续显示，直到停止。

![SlideShow Mode](assets/q-stu/540/demoslideshow.png)

### DeleteRomImages

该实用程序将删除STU平板电脑上存储的所有图像。

![Delete Rom](assets/q-stu/540/deleteromimages.png)

使用[STU串行连接](stu-tablet)中的query.exe查看存储在ROM中的图像的哈希值。这些值指示图像的存储状态，例如：  

```
RomImageHash[Signature,1,normal]          = 6686b765cb00bcdefd40a0f53c58d46a  
RomImageHash[Signature,1,pushed]          = 1b4bf1afd08396de7fd8715749bd9274   
RomImageHash[Signature,2,normal]          = not stored   
RomImageHash[Signature,2,pushed]          = not stored  
```

---

## 签名捕获模式介绍

在“签名捕获”模式下，将显示一个预定义的屏幕，供用户签名，例如： 

![Signature Mode](assets/q-stu/540/sig-mode.png)

除了笔的颜色和粗细之外，还可以启用“ WILL”选项（“Wacom Ink Layer Language”），以便显示平滑的笔迹，其笔迹粗细取决于笔的压力。  

### 图像设计

最多定义三个签名捕获设计。
每种设计都以以下格式定义用于正常显示和按钮被按下的图像：

![Signature Mode](assets/q-stu/540/sig-mode-areas.png)

以下是正常图像的示例，后跟相应的按键图像：

![Signature Mode](assets/q-stu/540/sig-mode-image-a.png)


![Signature Mode](assets/q-stu/540/sig-mode-image-b.png)

#### 签名区域（图中Signature Area）

进入签名捕获模式后，将显示普通图像的签名屏幕。签名区域大小为800点* 431点。  
在设置“签名捕获”模式后，通过写入签名区域可以显示诸如名称和原因之类的其他信息。

#### 操作区域（图中Operation Area）

按钮图像包含在普通图像中。按钮按下的图像包含在按钮图像中。按下按钮时，将显示相应的按钮图像。
每个按钮的大小和位置：

| 按钮编号  | 尺寸 (宽*高)  | 位置 (x,y)  |
|------------|---------------|-----------------|
|     1      | 265 * 48      | 0, 431 |
|     2      | 265 * 48      | 266, 431  |
|     3      | 265 * 48      | 532, 431  |

#### 签名图像设置

每个签名屏幕都需要进行以下设置：

| 项目                             | 模式 1                                                                |
|----------------------------------|--------------------------------------------------------------------------|
| 图像设计编号              | 图像设计编号 1..3 |
| 签名屏幕（正常）        | 图像数据包括普通按钮，初始消息和背景图像 |
| 签名屏幕（按钮按下） | 图像数据包括按钮和背景图像 |
| 按键启用设置             | 位掩码 (1..3) 允许各个单独的键/按钮被按下 启用 (1) 或 禁用 (0) 如下所示：<br/> &nbsp;&nbsp; **Bit 0:** _key1 - Cancel_. &nbsp;&nbsp;**Bit 1:** _key2 - Clear_.&nbsp;&nbsp; **Bit 2:** _key3 - OK_ |

#### 签名捕获操作

在进入签名捕获模式之前，必须先存储图像和设置。进入签名捕获模式时，必须设置以下选项：  

| 项目                          | 描述                                         |
|-------------------------------|-----------------------------------------------------|
| Signature Screen Select       | 从模式1..3中选择签名屏幕设计 |
| MessageBox id after Enter     | 按下Enter键后显示的消息框屏幕 |
| MessageBox id after Cancel    | 按下取消后显示的消息框屏幕 |

#### 签名捕获返回

UI事件数据报告所选键号： 

| 项目         | 描述                  |
|--------------|------------------------------|
| Key value    | **0:** **_Cancel_** &nbsp;&nbsp; **1:** **_Enter_** &nbsp;&nbsp; **2:** **_Clear_**  |
&nbsp;  

除了发送报告：

| 按钮        | 描述                                                  |
|---------------|--------------------------------------------------------------|
| OK            | 清除屏幕并返回正常模式 |
| Clear         | 清除屏幕并重新显示初始签名捕获框屏幕 |
| Cancel        | 清除屏幕并返回正常模式 |

### 签名捕获逻辑

![Signature Mode](assets/q-stu/540/sig-mode-flow.png)

### API 参考

| 功能              | 描述                     |
|-----------------------|---------------------------------|
| initializeSignature   | 签名捕获设置 |
| writeRomImage         | 数位板写入ROM功能  |
| setOperationMode      | 选择签名捕获模式 |


####  代码说明

##### 上传图片

请参阅 **[STU-540 ROM存储](#ROM-Store-Reference)**

需要图像描述符：  
```
romStartImageData = initializeSignature(m_encodingMode, pushed, SIG_IMAGE_NUM, array<bool, 3>{ true, true, true}) );
```


##### 启动签名模式

```
// 0=Cancel; 1=Enter; 2=Clear
OperationMode_Signature sigOpMode{ SIG_IMAGE_NUM,{ 2, 0, 1 }, 0, 0 };
OperationMode opMode = initializeSignature(sigOpMode);
m_tablet.setOperationMode(opMode);
```

##### 接收笔数据
```
Decode Pen Data from ReportHandler
onReport(PenData & v)
{
  save(penData);
  PostMessage(m_hwnd, WM_USER, 0, 0);
}
...

// Dialog callback

case WM_USER:
    processPenData();
...
```
 
##### 接收UI事件
```
Decode the UI Event data from ReportHandler
onReport(EventDataSignature & eventDataSignature)
{
  switch (eventDataSignature.keyValue)
  {
  case 0:
    processCancel();

  case 1:
    processOK();

  case 2:
    processClear();
  }
}
...
```

---

## 键盘模式参考

在键盘模式下，将显示图形键盘供用户选择，例如： 

![键盘模式](assets/q-stu/540/keypad-areas.png)

一般实现如下：
* 上载键盘图像
* 启动键盘模式
* 收到返回码

该过程中使用的图像只需上传一次即可使用。提供了一种哈希机制来确定图像是否已经存储在STU签名板上。  
如果需要，可在数位板处于键盘模式时更改消息区域。

#### 键盘类型

从以下选项之一中选择键盘类型：

![键盘模式]](assets/q-stu/540/keypad-types.png)

### 图像设计

最多定义三个键盘设计。每个设计都包含用于为类型格式化的键盘选择的图像。
下面显示了一个KeyPad类型1普通图像的示例，后面是对应的按键图像。

![键盘模式](assets/q-stu/540/keypad-image-a.png)

![键盘模式](assets/q-stu/540/keypad-image-b.png)

#### 键盘类型1图像设计

![键盘模式](assets/q-stu/540/keypad-areas-2.png)

| 项目          | 尺寸 (宽*高)  | 位置 (x,y) |
|---------------|---------------|----------------|
| 消息区域  | 800 * 64      | 0,0 |
&nbsp;  

| 按键编号  | 尺寸 (宽*高)  | 位置 (x,y)    |
|------------|---------------|-------------------|
|     1      | 240 * 119     | 30, 73 |
|     2      | 240 * 119     | 280, 73 |
|     3      | 240 * 119     | 530, 73 |
|     4      | 240 * 119     | 30, 202 |
|     5      | 240 * 119     | 280, 202 |
|     6      | 240 * 119     | 530, 202 |
|     7      | 240 * 119     | 30, 331 |
|     8      | 240 * 119     | 280, 331 |
|     9      | 240 * 119     | 530, 331 |
&nbsp;  

#### 键盘类型2图像设计

![键盘模式](assets/q-stu/540/keypad-areas-3.png)

| 项目         | 尺寸 (宽*高)  | 位置 (x,y) |
|--------------|---------------|----------------|
| 消息区域 | 800 * 220     | 0,0 |
&nbsp;  

| 按键编号    | 尺寸 (宽*高)  | 位置 (x,y)  |
|--------------|---------------|-----------------|
|      1       |   240 * 103   | 30, 234 |
|      2       |   240 * 103   | 280, 234 |
|      3       |   240 * 103   | 530, 234 |
|      4       |   240 * 103   | 30, 347 |
|      5       |   240 * 103   | 280, 347 |
|      6       |   240 * 103   | 530, 347 |

#### 键盘类型3图像设计

![键盘模式](assets/q-stu/540/keypad-areas-4.png)

| 项目         | 尺寸 (宽*高)  | 位置 (x,y) |
|--------------|---------------|----------------|
| 消息区域 | 514 * 480     | 286,0 |
&nbsp;  

| 按键编号    | 尺寸 (宽*高)  | 位置 (x,y)  |
|--------------|---------------|-----------------|
|      1       |   240 * 96    | 30, 30 |
|      2       |   240 * 96    | 280, 128 |
|      3       |   240 * 96    | 530, 246 |
|      4       |   240 * 96    | 30, 354 |

#### 键盘设置

对于每个设计，提供最多可以存储三个键盘图像的设计：  

| 项目                         | 描述                                                                                                                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Image design number          | 图像设计编号 1..3 |
| Normal Key Pad screen        | 图像数据包括普通按钮，初始消息和背景图像 |
| Button pushed Key Pad screen | 图像数据包括按下的按钮和背景图像 |
| KEY Pad type                 | 类型 1..3 |
| KEYs Enabled setting         | 位掩码（1..9）允许单个键/按钮被启用（1）或停用（0）：<br/> &nbsp;&nbsp; **Bit 0:** _key1_ &nbsp;&nbsp; **Bit 1:** _key2_ &nbsp;&nbsp; **Bit 2:** _key3_ etc. |

##### 键盘模式设置

在进入键盘模式之前，必须存储图像和设置。进入键盘模式时，必须设置以下选项： 

| 项目                  | 描述                                            |
|-----------------------|--------------------------------------------------------|
| Key Pad Screen Select | 从模式1..3中选择键盘屏幕设计 |
| Select Message id     | 在选择图像后显示的消息框屏幕 |

##### 键盘模式返回
UI事件数据报告所选键号：  

| 项目                  | 描述                                       |
|-----------------------|---------------------------------------------------|
| Key Pad Screen Select | 在键盘屏幕设计模式1..3中选择 |
| Selected Key Number   | 按键编号1..9取决于键盘类型  |

### 键盘操作逻辑

![键盘模式](assets/q-stu/540/keypad-logic.png)

### API参考

| 功能            | 描述           |
|---------------------|-----------------------|
| initializeKeyPad    | 键盘设置 |
| writeRomImage       | 数位板写入ROM功能 |
| setOperationMode    | 选择键盘模式 |

#### 代码说明

##### 上传图片

请参阅 **[STU-540 ROM存储](#ROM-Store-Reference)**

需要具有启用了按钮蒙版的图像描述符：  
```
array<bool, 9> KeyPad::m_btnEnabled = { 1, 1, 1, 1, 1, 1, 1, 1, 1 };
romStartImageData = initializeKeyPad(encodingMode, pushed, m_layoutNum, m_layoutNum, m_btnEnabled);
```

##### 启动键盘模式
```
OperationMode_KeyPad KeyPadMode{ m_layoutNum, 0 };

OperationMode opMode = initializeKeyPad(KeyPadMode);
tablet.setOperationMode(opMode);
```

##### 接收UI事件
```
Decode the UI Event data from ReportHandler
onReport(EventDataKeyPad & e)
  {
    PostMessage(m_hWnd, WM_KEYPAD_RESULT, MAKEWORD(e.keyNumber, e.screenSelected), 0);
  }
...

// Dialog callback

case WM_KEYPAD_RESULT:
  {
    keyNumber = LOBYTE(wParam);
    screenSelected = HIBYTE(wParam);
  }
...
```

---

## 密码键盘模式参考

在“密码键盘”模式下，显示数字小键盘以供用户输入，例如：
 
![密码键盘模式](assets/q-stu/540/pinmode-image-a.png)

#### 密码键盘类型

从下列其中一项中选择PIN键盘类型：

![密码键盘模式](assets/q-stu/540/pinmode-types.png)

#### 按键布局

从以下任一选项中选择键布局：

![密码键盘模式](assets/q-stu/540/pinmode-layouts.png)

### 图像设计

最多定义三个PIN键盘设计。
每种设计都按照以下布局定义用于普通显示和按钮被按下时显示的图像：

![密码键盘模式](assets/q-stu/540/pinmode-areas.png)

以下是正常图像的示例，后跟相应的键被按下的图像： 

![密码键盘模式](assets/q-stu/540/pinmode-image-a.png)

![密码键盘模式](assets/q-stu/540/pinmode-image-b.png)

#### 消息区域:

进入PIN键盘模式后，将显示普通图像的初始消息区域。发生错误时，将显示按键按下图像中的消息区域。
消息区域大小为800 x 55点。  

##### PIN码显示区域：

按下（0〜9，*，＃和.）时显示的字符包括在普通图像中。显示区域大小为665 x 74点。  
PIN码显示的图像尺寸为49 x 66点。该区域的位置是（68，55）从左上角开始的。  
每个PIN码的大小和位置：  

| PIN code | 尺寸 (宽*高)  | 位置 (x,y)   |
|----------|---------------|------------------|
|    0     |    49 * 66    |  72, 59          |
|    1     |    49 * 66    |  121, 59          |
|    2     |    49 * 66    |  170, 59          |
|    3     |    49 * 66    |  219, 59          |
|    4     |    49 * 66    |  268, 59          |
|    5     |    49 * 66    |  317, 59          |
|    6     |    49 * 66    |  366, 59          |
|    7     |    49 * 66    |  415, 59          |
|    8     |    49 * 66    |  464, 59          |
|    9     |    49 * 66    |  513, 59          |
|    *     |    49 * 66    |  562, 59          |
|    #     |    49 * 66    |  611, 59          |
|    .     |    49 * 66    |  660, 59          |

##### 密码键盘区域：

按键图像包含在普通图像中。按下按键的图像包含在按键按下图像中。按下按键时，将显示相应的按键图像。  
每个按键的大小和位置：  

| 按键     | 尺寸 (宽*高)  | 位置 (x,y)   |
|-------------|---------------|------------------|
|    0        |    174 * 66   |   217, 384       |
|    1        |    174 * 66   |   30, 147        |
|    2        |    174 * 66   |   217, 147       |
|    3        |    174 * 66   |   404, 147       |
|    4        |    174 * 66   |   30, 226        |
|    5        |    174 * 66   |   217, 226       |
|    6        |    174 * 66   |   404, 226       |
|    7        |    174 * 66   |   30, 305        |
|    8        |    174 * 66   |   217, 305       |
|    9        |    174 * 66   |   404, 305       |
| '*' or '.'  |    174 * 66   |   30, 384        |
|  # or 00    |    174 * 66   |   404, 284       |
|  Clear      |    174 * 89   |   596, 147       |
|  Cancel     |    174 * 89   |   596, 254       |
|  Enter      |    174 * 89   |   596, 361       |

#### 密码键盘图像设置

每个图像设计都需要进行以下设置：  

| 项目                            | 描述                                                                                      |
|---------------------------------|--------------------------------------------------------------------------------------------------|
| Image design number             | 图像设计编号1..3 |
| PIN pad normal image            | 图像数据包括普通按钮，初始消息，PIN码显示字体和背景图像 |
| PIN pad buttons pushed image    | 图像数据包括按下按钮，错误消息和背景图像 |
| PIN pad type                    | 键盘类型1..3 |
| Key layout                      | 循环或特定键布局0..5 |  

#### 密码操作设定

在进入密码键盘模式之前，必须先存储图像和设置。进入密码键盘模式时，必须设置以下选项。


| 项目                | 描述                                                                                                                                                                    |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PIN Pad Image       | 从图案1..3中选择PIN键盘图像设计 |
| PIN Bypass          | 设置PIN绕过= 1以禁用最小位数检查 |
| Minimum digits      | 如果PIN输入低于最小位数错误，则会显示错误消息并报告最小位数错误 |
| Maximum digits      | 12如果PIN输入超过最大位数错误，则会显示错误消息并报告最大数错误。最大位数为12 |
| Number Hidden Mode  | 如果启用此模式，则PIN输入代码显示500毫秒，并用 '\*' 隐藏。如果在500毫秒内输入了下一个PIN，则输入后的前一个值将被 '\*' 隐藏。 |
| Enter Message id    | 输入后显示的MessageBox屏幕 |
| Cancel Message id   | 取消后显示的MessageBox屏幕 |  

#### 密码键盘模式返回

UI事件数据报告选定键的列表，如下所示：  

| 项目                                            | 值                                                                                                                                               |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 按键输入                                       | **0x00:** _Cancel_ (PIN values = 0xF)&nbsp;&nbsp; **0x01:** _Enter_ &nbsp;&nbsp; **0x02:** _Min Digit Error_ (PIN values = 0xF) &nbsp;&nbsp; **0x03:** _Max Digit Error_ (PIN values = 0xF) |
| PIN码列表，按选择的顺序排列（1..13） | 0 to 9 &nbsp;&nbsp; 0x0A = * &nbsp;&nbsp; 0x0B = # &nbsp;&nbsp; 0x0C = . |

除了发送报告：

| 按键     | 功能                                                                                                                                                                                   |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 to 9     | 存储按钮编号 |
| * . # 00   | 存储按下的字符00：存储00并显示2位数字00 |
| Clear      | 清除输入的PIN码并清除PIN显示区域，例如，如果在输入1、2、3后按清除按钮，则所有的1、2、3都将被清除。  |
| Enter      | **条件1：** 输入的PIN码位数在（最大，最小）位数设置之内：输出PIN码并从PIN键盘模式退出到正常模式。  **条件2：** 输入的PIN码位数低于（最小）位数设置：显示错误消息2秒钟，并通过“最小位数错误”报告从PIN键盘模式退出到正常模式 |
| Cancel     | 发出取消报告并从密码键盘模式退出到普通模式。 |


### PIN操作逻辑

![密码键盘模式](assets/q-stu/540/pinmode-logic.png)

### API参考

| 功能            | 描述              |
|---------------------|--------------------------|
| initializePinPad    | 密码键盘设置 |
| writeRomImage       | 数位板写入ROM功能 |
| setOperationMode    | 选择密码键盘模式 |

#### 代码说明

##### 上传图片

请参阅 **[STU-540 ROM存储](#ROM-Store-Reference)**

需要图像描述符：
```
romStartImageData = initializePinPad(encodingMode, pushed, PINPAD_IMAGE_NUM, PINPAD_TYPE, PINPAD_LAYOUT);
```

##### 启动密码键盘模式
```
OperationMode_PinPad pinPadMode{ PINPAD_IMAGE_NUM,
  0,
  m_minDigits,
  m_maxDigits,
  m_hideNumbers ? 1u : 0u,
  PINPAD_LAYOUT,
  0,
  0 };
OperationMode opMode = initializePinPad(pinPadMode);
m_tablet.setOperationMode(opMode);
```

##### 接收UI事件

```
Decode the UI Event data from ReportHandler
onReport(EventDataPinPad & e)
  {
    switch (e.keyInput)
    {
      case InputEnter:
        m_pinPad = savePin(e);
      case InputCancel:
      case InputMinDigit:
      case InputMaxDigit:
    PostMessage(m_hWnd, WM_PINPAD_EVENT, e.keyInput, 0);
    }
  }
...

// Dialog callback

case WM_PINPAD_EVENT:
  switch (wParam)
  {
  case InputEnter:
    {
    pin = getSavedPin();
    }
... 
``` 
---

## 幻灯片放映参考

在幻灯片放映模式下，将按照设置的时间间隔和顺序自动显示存储的图像。幻灯片将继续播放，直到选择了新模式。

### 图像设计

最多定义10张图像，格式为：

| 项目             | 描述                                   |
|------------------|-----------------------------------------------|
| 图片编号     | 图像编号1 ... 10     |
| 图像格式     | 位图（24位彩色，16位彩色，单色） |
| 图片分辨率 | 800 x 480点 |



#### 幻灯片放映模式设置

在进入幻灯片放映模式之前，必须存储图像。进入幻灯片放映模式时，必须设置以下选项：

| 项目              | 描述                                                                                                                                |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Working mode       | **循环模式：** 显示所选图像的设定间隔和顺序。 &nbsp;&nbsp;**单张模式：** 显示所选图像（仅显示一张图像） |
| Number of slides   | 定义循环显示的图像数量 |
| First slide number
 | 定义图像以开始幻灯片放映 |
| Interval           | 幻灯片放映间隔：最小 2000毫秒 &nbsp;&nbsp;最大 120000毫秒 |

### 幻灯片放映逻辑

![幻灯片放映](assets/q-stu/540/slideshow-logic.png)

### API参考

| 功能            | 描述                 |
|---------------------|-----------------------------|
| initializeSlideShow | 幻灯片设置 |
| writeRomImage       | 数位板写入ROM功能 |
| setOperationMode    | 选择幻灯片放映模式 |



#### 代码说明

##### 上传图片

最多上传10张图片，请参阅 **[STU-540 ROM存储](#ROM-Store-Reference)**

需要图像描述符：
```
romStartImageData = initializeSlideShow(encodingMode, false, bitmapNumber);
```
##### 开始幻灯片放映模式
```
OperationMode_SlideShow slideShow;

slideShow.workingMode = 0;
slideShow.numberOfSlides = 3;
slideShow.slideNumber[0] = 1;
slideShow.slideNumber[1] = 2;
slideShow.slideNumber[2] = 3;
slideShow.interval = 2000;

tablet.setOperationMode( initializeSlideShow(slideShow) );
```

<a id="ROM-Store-Reference"/>

---


## ROM存储参考

### 描述

ROM存储分配如下：

| 图像类型        | 描述                                     |
|-------------------|-------------------------------------------------|
| PIN pad           | 未按键的PIN键盘模式的图像（1至3） |
| PIN pad pushed    | 有键按下的PIN键盘模式的图像 (1 至 3) |
| Slide             | 幻灯片放映图像 (1 至 10) |
| Key pad           | 未按键的键盘模式图像 (1 至 3) |
| Key pad pushed    | 有键按下的键盘模式图像 (1 至 3) |
| Signature         | 未按键的签名模式图像 (1 至 3) |
| Signature pushed  | 有键按下的签名模式图像 (1 至 3) |
| Message           | MessageBox图像 (1 至 6) |


### 验证存储的ROM映像

##### 计算所需图像的哈希
例如，通过使用加密库函数，计算所需图像的MD5哈希。  

##### 获取存储图像的哈希
分两步检索哈希：  
&nbsp;  
**1. 请求操作：**


| 项目              | 信息                                                  |
|-------------------|----------------------------------------------------------|
| Operation Mode    | 模式1 ... 5 |
| Image design      | 图像设计编号 |
| Image pushed      | 0/1：未按键/键被按下（MessageBox图片为0）  |
| Result            | **0:** 成功（已存储图像） &nbsp;&nbsp; **1:** 未存储图像 |
&nbsp;  

**2. 获取操作：**

| 项目              | 信息                                                       |
|-------------------|---------------------------------------------------------------|
| Operation Mode    | 模式1 ... 5 |
| Image design      | 图像设计编号 |
| Image pushed      | 0/1：未按键/键被按下（MessageBox图片为0） |
| Hash              | 128位哈希 |

### 上传图片

如果没有存储图像或计算和检索的哈希值不匹配，请上载图像。  
图像数据的发送分为三个步骤：  
* 启动ROM图像数据
* 写入图像数据
* 结束图像数据

Tablet接口使用单个writeRomImage函数简化了过程。
##### 启动ROM数据：

| 项目                | 信息                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| Encoding mode       | 0x04: 24位彩色RAW数据格式   0x14 24位彩色RAW数据格式（批量） |
| Operation Mode      | 模式 1..5: &nbsp;&nbsp; **1:** _密码键盘模式 _&nbsp;&nbsp; **2:** _幻灯片放映模式_ &nbsp;&nbsp; **3:** _键盘模式 _ &nbsp;&nbsp;**4:** _签名模式 _ &nbsp;&nbsp; **5:** _消息框_ |
| Image design        | 图像设计编号 |
| Image pushed        | 0/1：未按键/键被按下（MessageBox图片为0） |
| Image Descriptor    | 为每种图像类型定义 |


##### 写入图像数据：

| 项目              | 信息                                                  |
|-------------------|----------------------------------------------------------|
| Data Block Size   | 字节数 |
| Image Data        | 图像数据 


##### 结束图像数据：

| 项目              | 信息                                                  |
|-------------------|----------------------------------------------------------|
| Commit Flag       | 0/1: 提交/放弃  |


#### 启动ROM映像描述符

#### 密码键盘

| 项目                           | 描述                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| Image design number            | 图像设计编号1..3 |
| PIN pad normal image           | 图像数据包括普通按钮，初始消息，PIN码显示字体和背景图像  |
| PIN pad buttons pushed image   | 图像数据包括按钮被按下的图片，错误消息和背景图像 |
| PIN pad type                   | 键盘类型1..3 |
| Key layout                     | 循环或特定键盘布局0..5 |


#### 幻灯片放映


| 项目             | 描述                                        |
|------------------|----------------------------------------------------|
| Image format     | 位图（24位彩色，16位彩色，单色） |
| Image resolution | 800 x 480点  |

#### 键盘

| 项目                           | 描述                                                                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Image design number            | 图像设计编号 1..3 |
| Normal Key Pad screen          | 图像数据包括普通按钮，初始消息和背景图像  |
| Button pushed Key Pad screen   | 图像数据包括按钮被按下的图片和背景图像  |
| KEY Pad type                   | 类型 1..3 |
| KEYs Enabled setting           | 位掩码（1..9）允许单个键/按钮被启用(1)或停用(0):&nbsp;&nbsp; **Bit 0:** key1 &nbsp;&nbsp;**Bit 1:** key2 &nbsp;&nbsp;**Bit 2:** key3 等.  |

#### 签名捕获

| 项目                             | 描述                                                                                                                                       |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Image design number              | 图像设计编号 1..3 |
| Signature screen (Normal)        | 图像数据包括普通按钮，初始消息和背景图像  |
| Signature screen (button pushed) | 图像数据包括按下按钮的图片和背景图像  |
| KEYs Enabled setting             | 位掩码（1..3）允许单个键/按钮被启用(1)或停用(0): &nbsp;&nbsp; **Bit 0:** key1 - _Cancel_&nbsp;&nbsp; **Bit 1:** key2 - _Clear_&nbsp;&nbsp; **Bit 2:** key3 - _OK_ |

#### 消息框


| 项目                | 消息                                 |
|---------------------|-----------------------------------------|
| Message Box number  | 消息编号1..10 |
| Message screen      | 消息屏幕图像数据 |

### API参考

| 功能             | 描述                 |
|----------------------|-----------------------------|
| getRomImageHash      | 签名板获取哈希功能 |
| writeRomImage        | 签名板写入ROM功能 |


#### 代码说明

##### 上传图片

该代码演示了上传SlideShow图像
```csharp
uploadImage(...)
{
writeImage = true;

// get the hash of the image stored in ROM (if it exists) 
tablet.setRomImageHash(operationModeType, imageType, imageNumber);
romImgHash = tablet.getRomImageHash();

if (romImgHash.result == 0)
  {
    // there is already an image on the tablet - check it is the right one
    // compute hash of the required image
    imgHash = getImageHash(bitmapData.data(), bitmapData.size());           
    if (imgHash == romImgHash.hash)
    {
      // image matches, no need to write it again
      writeImage = false;
    }
  }

if (writeImage)
  {
  romStartImageData = initializeSlideShow(encodingMode, imageType, imageNumber);    
  tablet.writeRomImage(romStartImageData, bitmapData.data(), bitmapData.size());
  }
}
```

---
 






