---
id: stu-sdk-runtime
title: Runtime issues
---
*The following sections contain a selection of technical support questions and answers:*

## .NET application generates a "Strong name validation error"

#### Problem
.NET application generates a "Strong name validation error"

This can be caused by using an out-of-date Interop file reference in the Visual Studio solution.  

Make sure the latest SDK is installed, then change the Interop reference on the solution so that it points to the relevant Interop file from the appropriate SDK installation folder as detailed below.  

#### 32-Bit Applications

##### STU SDK 

There is only one 32-bit interop file for the STU SDK - **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32\Interop.wgssSTU.dll**

##### Signature SDK 

All the 32-bit interops for the Signature SDK are in **C:\Program Files (x86)\Common Files\WacomGSS**


#### 64-Bit Applications

##### STU SDK

There is only one 64-bit interop for the STU SDK and this is **C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64\Interop.wgssSTU.dll**

##### Signature SDK 

All the 64-bit interops for the Signature SDK are in **C:\Program Files\Common Files\WacomGSS**

---

## "Failed to retrieve a COM class factory for component with CLSID...class not registered"

#### Problem
Error "Failed to retrieve a COM class factory for component with CLSID...class not registered"

The full error message is normally much longer than the above and is similar to the following:

```
"Retrieving the COM class factory for component with CLSID (2000D7A5-64F7-4826-B56E-85ACC618E4D6) failed due to the following error: 80040154 - class not registered. " 
```

This error can be caused by compiling a .NET program for AnyCPU and trying to run it on a machine where only the 32-bit DLL has been registered.  
This can happen with the STU or the Signature SDK.  

The solution is either to change AnyCPU to x86 (the STU SDK only registers the 32-bit DLL) or to register the 64-bit DLL manually.  
To register the 64-bit DLL manually please proceed as follows depending on which SDK you are using. 

#### STU SDK

* Install the SDK
* Start a command prompt with Administrator privileges
* Go to the directory where you have installed the SDK's DLL i.e. wgssSTU.dll.
* Note that the installer puts the DLL in **C:\Program Files (x86)\Wacom STU SDK\COM\bin\Win32** (or **C:\Program Files\Wacom STU SDK\COM\bin\x64** on a 32-bit PC) but we recommend installing it somewhere else for the purposes of development and redistribution.
* Run the following command from your elevated prompt:  

    _regsvr32 wgssSTU.dll_

#### Signature SDK

If you ran the 64-bit installer when you installed the SDK then the above COM class factory should not occur because the 64-bit installer registers the 64-bit DLLs.  
If you ran the 32-bit installer, or the 64-bit installer without selecting the 64-bit components, then proceed as follows:  

* Run the 64-bit installer and select the 64-bit components - this will register the 64-bit DLLs. 

If for any reason you still want to register the 64-bit DLLs manually then start a command prompt with Administrator privileges and proceed as follows:

```
 C: (if needed)
 cd \Program Files\Common Files\WacomGSS
 regsvr32 FlSigCapt.dll
 regsvr32 FlSigCOM.dll
 regsvr32 FlWizCOM.dll 
```

---
## "Pad not found" message on Windows 8.1

#### Problem
There is an issue with Windows Enhanced Power Management which was modified in Windows 8.1.

All STU devices work without a problem with Windows 8.0. 

#### Solution
Windows 8.1 changed Enhanced Power Management and as a result the STU pads are powered off when not in use.  

This results in the STU pads being unavailable to the SDK software and the user will see errors such as "pad not found".

Recent models, the STU-430, 530, 540, are unaffected by the Enhanced Power Management and can be used without a problem because they use a different type of USB interface.

To prevent the other models being powered off (STU-300/430/500/520) install the STU tablet driver - this is not normally needed for the STU-300 but it will prevent the tablet being powered off.

---
## 64-bit compilation fails to run 

#### Problem
The SDK installs and registers the 32-bit component **wgssSTU.dll** which is not found by a 64-bit application.

#### Solution
Register the 64-bit component and optionally unregister the 32-bit DLL.

To register the 64-bit DLL:

* Start a command prompt cmd.exe with admin privileges
* Change directory to the installation folder, i.e. **_cd C:\Program Files (x86)\Wacom STU SDK\COM\bin\x64_**
* Register the DLL: **_regsvr32 wgssSTU.dll_**

&nbsp;  
If not required you can unregister the 32-bit dll from its folder as follows:
&nbsp;  
&nbsp;  
```
cd C:\Wacom STU SDK\COM\bin\Win32
regsvr32 /u wgssSTU.dll
```

---

## Cannot connect to the pad on Windows 7 

There is a port access issue on Windows 7 where Office 2013 is in use. 

When Office 2013 or Lync run there is some start-up code that opens the STU pad. Afterwards the pad is held open and is not available for exclusive access.

The Signature and STU SDKs normally require exclusive access to the signature pad to prevent potential conflicts caused by different applications trying to access the pad simultaneously.

See this related FAQ for more information:  [STU HID Diagnostic Tool](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool)

The access issue does not happen with Office 2013 on Windows 8.

In addition it does not occur with the STU-430 or 530 because their firmware defines a different type of USB interface.

The solutions are different depending on the SDK in use:

#### STU SDK

The workaround is for the application to use shared rather than exclusive access to the STU pad:  
 e.g. change
&nbsp;  
```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], true);
```

to

```
 var r1 = tablet.usbConnect(usbDevices_arr[usbDevices_index], false);
```

#### STU SigCaptX

With the STU SDK cross-browser the following syntax is required to enable a shared connection:  

```
 return intf.connect(m_usbDevices[0], true);
```

#### Signature SDK

To fix the shared access issue using the Signature SDK it is necessary to create a registry value as described below.

**32-bit SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "stuShared"=dword:00000001

**64-bit SDK:**  _[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"stuShared"=dword:00000001

A danger with using shared access is that another application could also open the same STU device and then I/O commands could conflict with each other.  
 Steps should be taken to avoid this if at all possible.

---

## Cannot connect to the pad over Remote Desktop/Citrix 

There are currently two options for making STU tablets work in a remote desktop, thin client or Citrix environment:  

#### 1. SERIAL OPERATION

   Use the monochrome **STU-430V** serial device or colour **STU-540** pad (which can be configured to operate serially).

   When STU pads operate as serial devices they are not subject to the same restrictions which Windows applies to STUs operating as standard USB devices.  
   Instructions for setting up the 430V are provided on the [STU serial connection guide](../q-stu/stu-tablet#STU-Serial-Connection)  
   For the 430V please see also [STU-430V Installation and Configuration](../q-stu/stu-430-installation)  
   For the 540 please see also [Configuring the STU-540 for serial operation](../q-stu/stu-540-installation)  

   The STU 430V and 540 in serial mode can be used with both our SDKs - STU and Signature - subject to appropriate coding.  
   Please see however the special note on Citrix below.  

#### 2. USB REDIRECTION

   Use an additional product to forward the pen data to the server (USB redirection).  

   Various third-party tools are available to do this, for example:  

   * [USB for Remote Desktop by Fabulatech](https://www.fabulatech.com/usb-for-remote-desktop-download.html#tab_usbrdp-win-current)
   * [Dell Wyse TCX](http://www.dell.com/ed/business/p/wyse-tcx/pd)
   * [USB Redirector TS Edition by Incentives Pro](http://www.incentivespro.com/usb-redirector-ts.html)
   * [USB Network Gate by Eltima](https://www.eltima.com/products/usb-over-ethernet/)  

   Please note that although we have had some success with these in certain configurations we cannot guarantee that they will work in your particular environment.  
   We do not have any performance measurements for the above tools nor do we provide support for them - you would need to contact the suppliers themselves and test them.


#### NOTE ON CITRIX COMPATIBILITY

Native support for Wacom signature pads was introduced with Citrix 7.6.3 (Feature Pack 3) as documented at this [What's New article](http://docs.citrix.com/en-us/xenapp-and-xendesktop/7-6/xad-whats-new.html).  

At the time of writing (July 2019) the list of currently supported devices is here: [devices supported on Citrix](../q-sig/sig-prog-general#signature-devices-supported-on-citrix) 
 
Similar information can be seen on Citrix's own Web site here: [Citrix Compatible Wacom Pen Devices](https://citrixready.citrix.com/category-results.html?search=wacom)  
 
If using any of our older pads please raise a Support Ticket.
 

For older versions of Citrix (of which the most common is probably 6.5) then you would need to use the 430V or the STU 540 in serial mode.  
At the time of writing the maximum supported baud rate for these devices on XenDeskTop or XenApp 6.5 is 128,000 bits per second.  
If in doubt please raise a support request at the link given above to request up-to-date information, especially if you want to use a different version of Citrix.

---

## Downloading the SDK on to Windows 10 produces error about a corrupt or invalid msi 

This  is a known issue when downloading our installers on Windows 10. You should find that the files have in fact been downloaded and that you can still execute them.   

If needed the following workarounds may help: 

1. Turn off the SmartScreen filter temporarily in Control Panel under Security as described [here](http://winaero.com/blog/how-to-disable-windows-smartscreen-in-windows-10/).
2. Add https://gsdt.wacom.eu as a trusted site in your internet options (assuming you downloaded the installers from there)


If none of the above helps please raise a Support Ticket.

---

## GDIplus error 

This error could be caused by outputting to a file on a read-only folder such as "C:\Program Files".

Preventative measures:

1. Avoid writing to a read-only directory (this might even be the directory in which you are running your application)
2. Specify a full path name
3. Make sure the target folder itself exists

For further information please see Microsoft's list of [Windows error codes](https://msdn.microsoft.com/en-gb/library/windows/desktop/ms681382(v=vs.85).aspx)

---

## Images seem slow to display 

#### Problem
Images uploaded to the STU device are slow to appear on the display.

#### Solution
There are various factors which affect the upload speed of images to STU pads. Slowness is more likely to be noticed with the colour devices e.g. the 520 and 530.

The following factors should be considered: 
 
* With the STU 520 and 530 the tablet driver may be needed - please refer to the [STU Driver Download Page](../q-stu/stu-tablet#STU-Driver)
* Upload speed can be affected by the size of the image so try to ensure your image file size is as small as possible for your purposes
* Colour images tend to be significantly larger in size than monochrome ones - where possible use monochrome if colour is not necessary
* The encoding mode used to encode the image can affect the upload time quite significantly - please see any of the SDK samples for further details
* If your STU pad is not connected locally but via Remote Desktop or a thin client configuration please consider that network issues may be a factor
* If using the 430 or 530 with the STU SDK try to avoid refreshing the whole pad display at once by using writeImageArea() instead of writeImage() as this can dramatically improve refresh speeds
* If encryption is not required between the pad and the PC (this may well be the case where pads are connected locally to the PC) then try capturing the pen data without encryption

---

## Manifest file error for SxS build 

Typical error message:
```
This application has failed to start because the application configuration is incorrect.  Review the manifest file for possible errors.
```

The above error may occur when trying to run a .NET application which has been built to run side-by-side (SxS).

This is normally because the assembly identity version number in the app.manifest file is incorrect.

To find the correct value go to the Windows Event Log for Applications and look for a SideBySide error message with a generation time of when the application was launched.

The error message itself will give the version number which Windows was expecting to find in the app.manifest file as below.

![App Manifest](assets/q-faq/stu/SxS-Manifest.PNG)

---

## Problems getting setHandwritingDisplayArea/writeImageArea to work 

The most important task is to define correctly the co-ordinates of the rectangle which is passed as a parameter to the above methods.

In particular it should be noted that the rectangle co-ordinates are numbered from zero upwards, so the top-left corner has co-ordinate values of 0,0. 

Mistakes can be made by calculating the right-hand side co-ordinates of the rectangle by using the tablet width and height values. 

For example, the property _ICapability.screenWidth_ would yield a result of 800 on a 530 or 540 pad, but using this to specify the right-hand co-ordinates of the rectangle will fail. 

This is because the x co-ordinate of the right-most pixel on the 530 or 540 is 799, not 800. 

Similarly the lower-right y co-ordinate of the 530 or 540 is not 480 but 479. 

Therefore beware of statements such as: 
```
rect.LowerRightXPixel = rect.upperLeftXPixel + capability.screenWidth 
```
 This should be: 
```
rect.LowerRightXPixel = rect.upperLeftXPixel + capability.screenWidth - 1 
```

Please note that passing an invalid rectangle to **setHandwritingDisplayArea()** will not yield an error - the command will simply fail and the display area will not be changed from its current value. 


**writeImageArea()** on the other hand will raise an exception if invalid co-ordinate values are passed to it.  

**N.B.**
Recent investigations have found that using **setHandwritingDisplayArea()** with C# and an STU-430 will generate an error if invalid pixel positions are used.  
This does not happen however with an STU-530 or with JavaScript.  

Please also note that **setHandwritingDisplayArea()** and **writeImageArea()** are not available on older pads such as the 300, 500 and 520.  

---

## The STU SDK will not work with my DTU/DTK/DTH tablet 

The  STU SDK can only be used with STU pads. As at time of writing (Aug 2019) these are the STU 300, 430, 500, 520, 530, 540 and 541.

It is available on the following platforms: 
* Windows 7 SP1 or higher
* Linux
* MAC OS 10

Please note that there is no browser support on MAC OSX. 

For details about the low-level API for DTU devices please see the Wacom Device Kit.
 
---

## Wacom add-ons are not available in Internet Explorer for all users 

This can happen if the SDK components were installed by means of a CAB file. 

 There are 2 CAB files for installing STU components:

 
1. wgssColorSTU.cab
 (originally called wgssSTU520.cab) - this includes the STU driver installer and requires admin privileges. It enables the STU components for all users on the PC.

2. wgssSTU.cab - enables the STU components for the current user only, without the STU driver. It does not require admin privileges).

---

## Windows cannot verify the digital certificate 

Having installed our STU or Signature SDK you may encounter the following error message when trying to run an application which has been built with them:  
&nbsp;  
```
    Windows cannot verify the digital certificate for this file. A recent hardware or software change
    might have installed a file that is signed incorrectly or damaged, or that might be malicious
    software from an unknown source.
```
&nbsp;  
This situation was first encountered after applying a stricter digital signing method to Wacom executables and DLLs and is mainly found on Windows 7.  
The additional protection was applied to prevent the possibility of files being modified.
 
The error message will not be reported if Windows has been fully updated using Windows Update.  
If it is not possible to apply the full Windows Update, this specific update will usually resolve the issue: KB 3153171 
 
The update can be downloaded from [Microsoft.com](http://microsoft.com/):

 
* [KB 3153171 - 32-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52140)


* [KB 3153171 - 64-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52069)


 ---
 