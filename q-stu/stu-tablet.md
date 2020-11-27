---
id: stu-tablet
title: STU Installation
---
## Contents

* [STU Device Specifications](#STU-Device-Specifications)
* [STU Driver](#STU-Driver)
* [STU Driver - delete cache](#STU-Driver-delete-cache)
* [STU HID Diagnostic Tool](#STU-HID-Diagnostic-Tool)
* [STU Utilities](#STU-Utilities)
* [STU Serial Connection](#STU-Serial-Connection)


<a id="STU-Driver"/>

---

## STU Device Specifications

| Model     | Pressure levels | Sampling rate | Max. resolution | Active screen area | I/O |
|-----------|-----------------|---------------|-----------------|--------------------|-----|
| STU-300   | 512             | 200 Hz        | 396 x 100       | 99 x 25 mm         | USB |
| STU-430   | 1024            | 200 Hz        | 320 x 200       | 96 x 60 mm         | USB |
| STU-500   | 512             | 200 Hz        | 640 x 480       | 102 x 76 mm        | USB |
| STU-520   | 512             | 200 Hz        | 800 x 480       | 104 x 60 mm        | USB |
| STU-530   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |
| STU-540   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |
| STU-541   | 1024            | 200 Hz        | 800 x 480       | 108 x 65 mm        | USB |

## STU Driver

Download and run [Wacom-STU-Driver-5.4.5.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/Wacom-STU-Driver-5.4.5.exe)
<!-- EXTERNAL -->

####  Requirements

The driver is required to use colour STU signature pads with the STU SDK and Wacom Signature SDK. 
The driver is also required when using any STU signature pad on Windows 8 or 8.1.

#### Summary

The driver is required for the colour display STU signature pads and also when using any of the STU signature pads on Windows 8.1.  
It allows the device to use USB Bulk Transfer to handle the transfer of increased image data size (compared with the mono STU tablets).   
On Windows 8 and 8.1 it also disables the Enhanced Power Management setting.

The driver installation merely configures the USB interface for the STU tablet and can be used in all configurations without any detrimental effect.  

The need for installation is dependent on the STU model and Windows version as follows:

| STU Model        | Windows 7                        | Windows 8                                                             | Windows 10                                 |
|------------------|----------------------------------|-----------------------------------------------------------------------|--------------------------------------------|
| STU-300, STU-500 | Not required                     | Required to prevent power save disconnect                             | Not required  |
| STU-520          | Required for faster image upload | Required for faster image upload and to prevent power save disconnect | Required for faster image upload |
| STU-430          | Not required                     | Not required                                                          | Recommended |
| STU-530          | Required for faster image upload | Not required                                                          | Recommended for optimum image upload speed |
| STU-540          | Required for faster image upload | Not required                                                          | Recommended for optimum image upload speed |
| STU-541          | Required for faster image upload | Not required                                                          | Recommended for optimum image upload speed |

If in any doubt we recommend installing it. 

#### Instructions

##### Using Wacom-STU-Driver.exe

* Check that the STU tablet has been disconnected before running the installer.
* Download the .exe and run it directly from Windows Explorer or in a DOS command line.
* The .exe autodetects 32 or 64 bit Windows and installs accordingly.


To view the available options use the command:  

    Wacom-STU-Driver.exe /?  
  For example, for minimal prompts:  

    Wacom-STU-Driver.exe /quiet

To disable the check for STU connection:

    Wacom-STU-Driver.exe NO_STU_CHECK=1

To uninstall the driver:

    Wacom-STU-Driver.exe NO_STU_CHECK=1 /uninstall /q

##### Note for Windows 7

To use the /q option the installer must be run in elevated mode to give Administrator rights, e.g.:  

    Start -> All Programs -> Accessories -> Right-click <Command Prompt>: 'Run as Administrator'



<a id="STU-Driver-delete-cache"/>

---

## STU Driver - delete cache

#### Download

Download and unzip [reg-delete-wacom-usb-cache.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/reg-delete-wacom-usb-cache.zip)
<!-- EXTERNAL -->

| Function                                              | From zip file                  |
|-------------------------------------------------------|--------------------------------|
| Delete Wacom USB cache exe                            | reg-delete-wacom-usb-cache.exe |
| Companion debug file for use as instructed by Support | reg-delete-wacom-usb-cache.pdb |

#### Requirements

Installation of an STU tablet.

#### Summary

Use the delete cache utility if the STU appears to be not working after installing the driver and attempting to use [STU Utilities](#STU-Utilities)  
Run from a command line or File Explorer to delete registry entries related to a Wacom USB device:
````
C:\Test>reg-delete-wacom-usb-cache.exe
````

#### Description

Syntax: **_reg-delete-wacom-usb-cache.exe_**

First disconnect the STU device.  
The utility prompts to allow changes to your device.  
It then searches for Windows registry entries related to Wacom USB and deletes those found, e.g.:


````
Wacom Device USB Cache Cleaner
USB\VID_056A&PID_00A1 : The operation completed successfully.
HID\VID_056A&PID_00A1 : The operation completed successfully.
Press any key...
````

On completion reconnect the STU device which will then be reloaded by Windows.


<a id="STU-HID-Diagnostic-Tool"/>

---

## STU HID Diagnostic Tool


#### Installation

Download [hidinfo-x86-v2.6.14745.41.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/hidinfo-x86-v2.6.14745.41.zip)
<!-- EXTERNAL -->

#### Requirements

Installation of an STU tablet.  
Colour models require the [STU driver](#STU-Driver)  
Download and unzip the diagnostic to run on 32 or 64 bit Windows.  

#### Summary

Download and use the tool according to the directions provided by your support engineer.  
Normally you will need to run the following command in a Dos prompt and email the resulting text file:  
````
C:\Test>hidinfo.exe all > hidinfo.txt
````
#### Description

Syntax: **_hidinfo [options]_**  

Options:
  * filename    displays underlying filename
  * kernel      displays kernel handle
  * attr        displays HID attributes as reported by HidD
  * caps        displays the report IDs of the capabilities
  * all         displays everything
  * /?          help

Run hidinfo.exe using a Command Prompt:  
```
C:\Test>hidinfo.exe
```
The STU device report should be similar to one of the following examples:
> **056a:00a2:0068 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-300" SerialNumber="\x0409"**    
> **056a:00a1:0101 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-500" SerialNumber="\x0409"**    
> **056a:00a3:0101 [xRW] Manufacturer="Wacom Co.,Ltd." Product="STU-520A" SerialNumber="\x0409"**  


In the examples shown, the device accessibility is described as **[xRW]**  
* The first character ('x' or 's') denotes exclusive or shared access.  
* The second character ('R') denotes read access.  
* The third character ('W') denotes write access.  

**_Note: By default the signature software requires exclusive-read-write access to the device to operate successfully._**  


In some installations other applications or installed drivers may access the device in shared mode.  
In this case, only shared access is possible: **[sRW]** indicates the device is only available for shared-read-write access.  
**_Note, this will prevent the signature software operating successfully._**  


If another application has opened the device for exclusive access, then "hidinfo" will be unable to open the device and will report an error.  
This is typically:  
```
[Open failed] [system_error:  win32api:32 The process cannot access the file because it is being used by another process. ]
```

"hidinfo" determines the available access by a process of elimination using standard API calls to the Windows CreateFile API.  
It will try in sequence:  
>
>**CreateFile(fileName, GENERIC_READ|GENERIC_WRITE, 0                               , ...**  
>**CreateFile(fileName, GENERIC_READ              , 0                               , ...**  
>**CreateFile(fileName, 0                         , 0                               , ...**  
>**CreateFile(fileName, GENERIC_READ|GENERIC_WRITE, FILE_SHARE_READ|FILE_SHARE_WRITE, ...**    
>**CreateFile(fileName, GENERIC_READ              , FILE_SHARE_READ|FILE_SHARE_WRITE, ...**   
>**CreateFile(fileName, 0                         , FILE_SHARE_READ|FILE_SHARE_WRITE, ...**  


<a id="STU-Utilities"/>

---

## STU Utilities

#### Installation

1. Download, extract and run the [STU Utilities](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-utilities-x86-v1.15.0.0.zip)
2. Download and extract the [STU Images](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-Images.zip)
<!-- EXTERNAL -->

#### Requirements

Installation of STU tablet.  
Colour models require the [STU driver](#STU-Driver)  
Download and unzip the 32-bit utilities to run on 32 or 64 bit Windows.

#### Summary

STU Utilities are standalone programs which you can use to test the operation of an STU signature pad.  
They can be used without installing the STU SDK.  
Where applicable a Console version of the program is included, identified by a C suffix, e.g.  
```
    ClearScreenC.exe   
```
These applications use the Command Prompt and do not display a Window.

##### ClearScreen.exe
Clears the tablet display

##### HardwareReset.exe
Performs a hard reset of the tablet firmware

##### Identify.exe
Reports the tablet detected:
 
![Identify](assets/q-stu/stu-identify.png)

In addition the test displays properties on the LCD display. e.g.
````
    STU-520A fw: 1.01 Security-IC:0.4.153.24
    Bulk Driver: in use
    Tablet extent: 10400 x 6048  Pressure levels: 511
    Screen extent: 800 x 480
    Report rate: 200
    Resolution: 2540
    Encryption: DISABLED

    Uid: 00:00:00:00
````

##### PenData.exe  
Reports the Device connected status with real-time pen data:
 
![Pen data](assets/q-stu/stu-pendata.png)

##### SendToSTU.exe  
Sends the specified image file to the device (see /? for options).  
STU-Images.zip contains suitable image files:  

| STU Model  | Name of image file     |
|------------|------------------------|
| STU-300    | 396x100.png |
| STU-430    | 320x200.png |
| STU-500    | 640x480.png  |
| STU-520    | 800x480.png  |
| STU-530    | 800x480-530.png |
| STU-540    | 800x480-540.png  |
| STU-541    | 800x480-541.png  |


##### SoftReset.exe  
Performs a soft reset of the tablet firmware
 
<a id="STU-Serial-Connection"/>

---

## STU Serial Connection

* [Installation](#installation)
* [Overview](#overview)
* [Utilities](#utilities)
  * [query](#query)
  * [getSerialPorts](#getserialports)
  * [simpleInterface](#simpleinterface)
  * [hid2serial](#hid2serial)
  * [serial2hid](#serial2hid)
  * [DemoButtons](#demobuttons)

#### Installation

Download the 
[**Serial Connection Utilities**](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/serial-connection.zip)
 and 
[**DemoButtons Test tool**](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/DemoButtonsSerial.zip)
<!-- EXTERNAL -->


The Serial Connection Utilities zip file contains the following tools:

| Utility               | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| query.exe             | Displays STU firmware information |
| simpleInterface.exe   | Displays realtime pen data |
| hid2serial.exe        | Switches from HID to Serial |
| serial2hid.exe        | Switches from Serial to HID |
| getSerialPorts.exe    | Lists visible COM ports |
| libeay32.dll          | Encryption library needed in some Windows installations  |
| DemoButtons.exe       | Test signature capture via COM port |


#### Overview

Certain STU models support the serial communication interface: 
 
* STU-430V  
* STU-540

The tablets can be configured for:  
Human Interface Device (HID) - standard USB connection  
or  
Virtual COM Port (VCP) - serial connection over USB  

Used in a Command Prompt, the connection utilities provide tools to verify and change the connection mode.

#### Utilities

##### query

Use this utility to determine the current state of the tablet.  
For a USB connection:  
```
  query.exe
```
 For a serial connection:
```
 query.exe COM_PORT BAUDRATE
```
If the tablet is in HID mode its status will be reported.  
If it is in serial mode the results will be:
```
->query.exe  
STU query sample  
No USB devices found 
```

##### getSerialPorts

To find the COM port use getSerialPorts:
```
->getSerialPorts.exe
COM1 physical
COM6 virtual
```
When in serial mode the STU tablet appears as a virtual COM port.
The virtual com port can then be used with query, specifying the port name and baudrate:
```
->query.exe com6 128000
```

**NOTE for COM10 and above:** COM10 and above require special handling. See [Microsoft support](https://support.microsoft.com/en-us/kb/115831)  
Example:
```
 -> query \\.\COM10
```
 
<kbd>
->query.exe com6  
STU query sample  
connecting to com6  128000  
Status.statusCode                         = Ready  
Status.lastResultCode                     = None  
Status.statusWord                         = 00  
HidInformation                            = 056a:00a6:0104  
Information.modelName                     = STU-430V  
Information.firmwareMajorVersion          = 01  
Information.firmwareMinorVersion          = 04  
Information.secureIc                      = 0  
Information.secureVersion                 = bb.0.0.0  
Capability.tabletMaxX                     = 9600  
Capability.tabletMaxY                     = 6000  
Capability.tabletMaxPressure              = 1023  
Capability.screenWidth                    = 320  
Capability.screenHeight                   = 200  
Capability.maxReportRate                  = 200  
Capability.resolution                     = 2540  
Capability.encodingFlag                   = 1bitZlib  
Uid                                       = 0x00000000  
Uid2                                      = 5JZQS00032  
Eserial - not supported  
DefaultMode                               = Serial  
RenderingMode - not supported  
ReportRate                                = 150  
HostPublicKey - not supported  
DevicePublicKey - not supported  
DHprime - not supported  
DHbase - not supported  
InkingMode                                = Off  
InkThreshold.onPressureMark               = 21  
InkThreshold.offPressureMark              = 16  
HandwritingThicknessColor.penColor        = 0000  
HandwritingThicknessColor.penThickness    = 2  
BackgroundColor - not supported  
HandwritingDisplayArea.upperLeftXpixel    = 0  
HandwritingDisplayArea.upperLeftYpixel    = 0  
HandwritingDisplayArea.lowerRightXpixel   = 319  
HandwritingDisplayArea.lowerRightYpixel   = 199  
BacklightBrightness - not supported  
ScreenContrast - not supported  
HandwritingThicknessColor24.penColor      = 000000   
HandwritingThicknessColor24.penThickness  = 2  
BackgroundColor24 - not supported  
PenDataOptionMode                         = None  
OperationMode - not supported  
RomImageHash - not supported  
ReportSizeCollection                      =  
                             PenData 7  
                              Status 5  
                               Reset 2  
                      HidInformation 9  
                         Information 17   
                          Capability 17  
                                 Uid 5  
                                Uid2 11  
                         DefaultMode 3  
                          ReportRate 2  
                       RenderingMode -  
                             Eserial -  
                    PenDataEncrypted 17  
                       HostPublicKey -  
                     DevicePublicKey -  
                        StartCapture 5  
                          EndCapture 2  
                             DHprime -  
                              DHbase -  
                         ClearScreen 2  
                          InkingMode 2  
                        InkThreshold 5  
                     ClearScreenArea 11  
                  StartImageDataArea 11  
                      StartImageData 2   
                      ImageDataBlock 256  
                        EndImageData 2   
           HandwritingThicknessColor 4  
                     BackgroundColor -  
              HandwritingDisplayArea 9  
                 BacklightBrightness -  
                      ScreenContrast -  
         HandwritingThicknessColor24 5  
                   BackgroundColor24 -  
                          BootScreen 2  
                       PenDataOption -  
              PenDataEncryptedOption -  
                   PenDataOptionMode 2  
   PenDataTimeCountSequenceEncrypted 17  
            PenDataTimeCountSequence 11  
                   EncryptionCommand 68  
                    EncryptionStatus 17  
                           GetReport -  
                           SetResult -  
                          PinPadData -  
                 PinPadDataEncrypted -  
                    PinOperationMode -  
                       OperationMode -  
                   RomStartImageData -  
                   RomImageOccupancy -  
                        RomImageHash -  
                      RomImageDelete -  
                    CurrentImageArea -  
                           EventData -  
                  EventDataEncrypted -  
                     RomImageDisplay -  
                                 160 5  
                                 162 5  
                                 163 17  
                                 171 12  
                                 178 3  
                                 180 3  
                                 181 11  
                ReportSizeCollection 512  
->  
</kbd>

##### simpleInterface

Use this utility to display realtime pen data.   
When the pen is in contact or in close proximity of the tablet surface, the X/Y coordinates and pressure values will be reported.
```
simpleInterface.exe COM_PORT BAUDRATE
```
Press Ctrl-C to exit the program.  

<kbd>
->simpleInterface.exe com6  
STU simpleInterface sample  
connecting to com6  128000  
Connected!  
getInformation()... modelName=STU-430V firmware=01.04.187  
getReportRate()... 150  
setPenDataOptionMode(SequenceNumberTimeCount)... ok!  
getPenDataOptionMode()... penDataOptionMode=TimeCountSequence  
setClearScreen()... ok!  
setInkingMode(On)... ok!  
(use stylus, press CTRL-C to quit)  
rdy  sw     x     y  pres  time   seq  
  1   1   612  5339  3528  3513     1  
  1   1   612  5339  3528  3516     2  
  1   1   614  5339  3528  3523     3  
  1   1   615  5329  3518  3529     4  
  1   1   620  5329  3518  3536     5  
  1   1   624  5329  3518  3543     6  
  1   1   627  5329  3518  3549     7  
  1   1   630  5318  3513  3556     8  
  1   1   632  5307  3506  3563     9  
  1   1   633  5289  3493  3569    10  
  1   1   625  5253  3468  3576    11  
  1   1   593  5189  3422  3583    12  
  1   1   470  5094  3348  3589    13  
  1   1   263  4971  3247  3596    14  
  1   1    64  4819  3111  3603    15  
  1   0     0  4664  2960  3609    16  
  1   0     0  4502  2795  3616    17  
  1   0     0  4356  2634  3623    18  
  1   0     0  4228  2484  3629    19  
  1   0     0  4124  2350  3636    20  
  1   0     0  4068  2263  3643    21  
  0   0     0     0     0  3696    22  
quitting!  
setInkingMode(Off)... ok!  
setClearScreen()... ok!  
setPenDataOptionMode(None)... ok!   
->
</kbd>

##### hid2serial

Use this utility to change the STU to serial VCP mode. No parameters are required.  
You can verify that the STU is in serial mode by viewing the serial ports with getSerialPorts.exe.  
Verify the connection using query.exe:  
```
query.exe COM_PORT BAUDRATE
```

<kbd>
->hid2serial.exe  
STU HID2serial sample  
Device:  
056a:00a8:0100  
Status.statusCode                       = 0  
Status.lastResultCode                   = 0  
Status.statusWord                       = 00  
Information.modelName                   = STU-540  
Information.firmwareMajorVersion        = 01  
Information.firmwareMinorVersion        = 00  
Information.secureIc                    = 0  
Information.secureVersion               = 0.0.0.0  
setDefaultMode()...  
Done!  
Status.statusCode                       = 0  
Status.lastResultCode                   = 0  
Status.statusWord                       = 00  
Rebooting device  
->
</kbd>
 
In addition you can view the connection in Windows Device Manager.  
An HID connection appears as shown below.

![Device Manager](assets/q-stu/stu-serial-dev-mgr.png)

A serial connection appears as follows:

![COM Ports](assets/q-stu/stu-com-port.png)

Normally Windows automatically installs the FTDI driver needed to create the VCP.
If the tablet is reported as the following:  
```
**Future Devices Single RS232-HS**  
```

then download and install the driver from: **http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm**

For example: **http://www.ftdichip.com/Drivers/CDM/CDM21218_Setup.zip**

**NOTE ON SERIAL KIT**

A serial kit is available for the STU-540. It includes:  

* Serial D-type to tablet cable  
* Power supply

When the serial kit is used the tablet must still be switched to serial mode but can be connected to a physical serial port.  
In this case a different baud rate is used as follows:
```
>query COM1 115200
```

##### serial2hid
Use this utility to restore the default STU tablet HID connection mode.
```
serial2hid.exe COM_PORT BAUDRATE
```
You can confirm the HID connection using query.exe.
```
serial2hid.exe com6 128000  
```
 
<kbd>
serial to hid STU query sample  
serial2hid serialPort baudRate  
{processReadBuffer size=22}  
  {queued report: size=  17   08 53 54 55 2d 35 34 30 00 00 01 00 00 02 00 00 00}  
  {removing 22 bytes}  
Information.modelName                   = STU-540  
Information.firmwareMajorVersion        = 01  
Information.firmwareMinorVersion        = 00  
{processReadBuffer completed  
{processReadBuffer size=5}  
  {queued report: size=   2   81 00}  
  {removing 5 bytes}  
{processReadBuffer completed  
{processReadBuffer size=5}  
  {queued report: size=   2   81 00}  
  {removing 5 bytes}  
{processReadBuffer completed  
</kbd>

##### DemoButtons

Captures a signature from the STU pad with options to perform via standard HID mode or via a virtual COM port.  
Signature Mode can also be selected for use with the STU 540.

![DemoButtons](assets/q-stu/stu-serial-demo.png)

