---
id: sig-prog-stu
title: STU
---

## Differences between STU and Signature SDKs

The main differences between the two SDKs are as follows:  

#### High level Signature SDK

* Simplifies signature capture with a range of Wacom tablets including STU and DTU
* Signature data is saved in an undisclosed proprietary format and can be used with other Wacom signature products such as Signature Scope and Signature Verification
* Signature image creation available in the SDK
* User Interface and signature data format is defined by the SDK
* It is not possible to use more than one tablet with the Signature SDK as it has no mechanism for selecting the device
* Signatures are rendered using Wacom Ink Layer Language (WILL) for a high quality digital pen and ink experience

#### Low level STU SDK

* Used for signature capture with the range of STU tablets only
* Developer is free to save the signature data in any format but this will not be compatible with the undisclosed Signature SDK data
* User Interface and signature data format are open to the developer
* Signature image must be created by the developer from the pen data values

---
## Connection fails on Windows 7

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
## Test tools

Test utilities for the STU pads can be downloaded from the [STU Utilities](../q-stu/stu-tablet#STU-Utilities)
The most useful of these are **PenData** and **Identify**.  
These tools will operate without installation of an SDK. 

In addition the following are useful: 
 
* [STU HID Diagnostic Tool](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool) (command line diagnostic program)
* [Capture Analyser](../q-sig/howto-test-sdk) test tool (checks for available signature capture devices)

---
## Customise the STU pad display to add bespoke text or images or get the user to answer questions prior to signing

The amount of customisation available on the standard Signature SDK signature capture window is restricted to a few minor features such as the use of fonts and the dimensions of the capture area.  
These are described in section 7 of the API reference manual included in the Signature SDK download file which is available under "For signature" here:  

   https://developer.wacom.com/developer-dashboard/downloads  

With version 3 of the SDK we also introduced the possibility to change ink width and colour and the texture of the background.  These are described in the Version 3 Developer's Manual provided in the same download.  
Please see also [Customising the signature capture window](../q-sig/sig-prog-general#customising-the-signature-capture-window)


If you are using the Signature SDK and want to make significant changes to the pad display you will need to use the wizard control.  
There are various wizard-based samples provided in the Signature SDK Samples.
 
If you want to display images on the pad while it is not in use you can use our [STU Display Slide Show Tool](../q-sig/howto-slideshow)

---
## Identify processes which are holding a USB port open

1. Download and install the [STU HID Diagnostic Tool](../q-stu/stu-tablet#STU-HID-Diagnostic-Tool) 
&nbsp;  

2. Download and install either of:  

    * [handle.exe](https://docs.microsoft.com/en-us/sysinternals/downloads/handle)
    * [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)  
&nbsp;  

3. Open up a command prompt and type: **hidinfo kernel**
&nbsp;  

4. Locate the STU tablet in the list (the line will begin "056a.00a....").  
&nbsp;  

5. Take a note of the text inside the quotes of the statement "kernel=..." (for example "\Device\0000006b")  
&nbsp;  

6. Determine processes that have that tablet open using one of the following methods:  
&nbsp;  

    1. Using handle.exe (command line):

        * Open up an elevated command prompt and type:
        * **handle -a "???"** (where "???" is the device name that you tooke note of above, e.g. **handle -a "\Device\0000006b"**)
        * This will return a list of processes which have a handle open on the tablet  
&nbsp;  

    2. Using "Process Explorer":
        * Open up Process Explorer with elevated rights.
        * Select the menu item, "Find" -> "Find Handle or DLL".
        * Enter the text you took a note of (without quotes) into the box and press the search button.
        * This will return a list of processes that have a handle to the tablet.

---
## Existing application will not work with the new STU 430/530 pad

The STU 430 and 530 are not supported by older releases of our SDKs. 

Support for these models was introduced with version 2.1.1 of the STU SDK (issued 01/11/2013) and version 1.11.2 of the Signature SDK, issued 23/10/2013.

Release branch 1 of the STU SDK (also known as the Vinae SDK) used a DLL called **STUTablet.dll** and a different API from the current STU SDK. 


If you have this older release branch you will also need to rework any existing application code using the current STU samples as a guide.  

Please download the latest release of the appropriate SDK and samples to ensure compatibility.  

The SDKs are now available for download at any time from the Resources section on our [Developer Relations Web Site](https://developer.wacom.com)  
You will need to register on the site first via the "Login" link at the top right of the home page.  

---
## Pad not found on Windows 8.1

There is an issue with Windows Enhanced Power Management which was modified in Windows 8.1.

All STU devices work without a problem with Windows 8.0.

#### Solution

Windows 8.1 changed Enhanced Power Management and as a result the STU pads are powered off when not in use.

This results in the STU pads being unavailable to the SDK software and the user will see errors such as "pad not found".

Recent models, the STU-430, 530, 540, are unaffected by the Enhanced Power Management and can be used without a problem because they use a different type of USB interface.

To prevent the other models being powered off (STU-300/430/500/520) install the STU tablet driver - this is not normally needed for the STU-300 but it will prevent the tablet being powered off.

---
## STU-540 Signature Capture

To use the STU-540 in signature mode with a serial connection follow the instructions here: [How do I sign with an STU-540 tablet operating in serial mode?](../q-app/app-signpro#how-do-i-sign-with-an-stu-540-tablet-operating-in-serial-mode)

The instructions describe the registry configuration for 32-bit windows.  
In a 64-bit installation make the registry settings in HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd, for example:  
&nbsp;  


| Registry setting      | Type        | Typical value                        | Notes                                                                        |
|-----------------------|-------------|--------------------------------------|------------------------------------------------------------------------------|
| stuPort               | REG_SZ      | COM5                                 | as indicated by getSerialPorts.exe |
| stuBaudRate           | REG_DWORD   | 128000                               | fixed baud rate (decimal value)  |
| stuSigModeConfig      | REG_SZ      | c:\\config\\STU-540.config,1         | full pathname of the screen upload filename, signature mode 1 uses screen 1  |

---
## Migrating application code from the STU 530 to STU 540 

For the 540 you need at least release 5.4.2 of the [STU Driver](../q-stu/stu-tablet#STU-Driver).  


For the STU SDK existing code must be reworked because the 540 returns pen data in a different format and therefore **PenDataOptionMode** must be set correctly.  

For the Signature SDK the 540 should work with existing code if that code only uses the standard dynamic capture function to address the pad or tablet.  
If your code uses the wizard control then you must install at least release 3.19.2.

We would always recommend testing existing code first in case there are issues.  

Please note that the 540 has additional benefits which greatly improve response time over the 530, especially if the onboard images are used.  
 
---
## No inking on the STU 540 although the signature is correctly drawn on the PC monitor

This is a known issue with some STU 540 pads and may require a firmware update.  

Please raise a Support Ticket to confirm this is the case.

---
## Convert existing application to work with the 430V or 540 in serial mode

In order to capture signatures from the STU-430V or the STU 540 operating in serial mode your application must know which serial port the STU is connected to.  

Please read the FAQ on [STU Serial Connection](../q-stu/stu-tablet#STU-Serial-Connection) to work out the relevant virtual COM port number.  

You then have two options:  

1. Specify the COM port and baud rate in the registry

2. Specify the COM port and baud rate in your application, illustrated in the Signature SDK HTML sample **TestSDKCapture-Serial.html** 

If you need technical assistance with the above please raise a Support Ticket.

---

## Can I scroll the display on an STU?

STU signature pads are essentially "dumb" terminals and do not have any in-built scrolling capability - they simply display images which are uploaded to them.  
It is possible to simulate scrolling by providing the user with control buttons such as arrow keys to move between different screen displays.  
A very basic sample for this is provided in WizardScript-ScrollBar.html in the [Signature SDK Extra HTML Samples on GitHub](<https://github.com/Wacom-Developer/sdk-for-signature-windows/tree/master/Extra%20Samples/HTML>).  
  
Please note that the uploading of an image to the STU always involves a certain amount of delay, depending on various factors.  
In particular colour images take significantly longer to upload than monochrome ones.  
Therefore the provision of scrolling via a mechanism such as that demonstrated in the above-mentioned sample may turn out to be impractical.  
In most cases it is probably better to spread the text over consecutive screen displays using standard Next and Previous wizard-style buttons.  

---
---













