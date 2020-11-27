---
id: stu-sdk-application
title: Programming queries
---
*The following sections contain a selection of technical support questions and answers:*

## Where can I find sample code?

Sample code is available on GitHub: 
[https://github.com/Wacom-Developer/stu-sdk-samples](https://github.com/Wacom-Developer/stu-sdk-samples)

## Multiple versions of wgssSTU.dll

Q: Can I have multiple versions of wgssSTU.dll on my system, each being used by a different program? 
 
The answer to this question depends on how you are developing and compiling your application and whether you are registering the DLL.  
Whether you need to register wgssSTU.dll actually depends on how you are using it.  

Registration is not necessary in the following situations:  

 1. If your programs are Java or use the C interface (though the former would require the installation of _wgssSTU.jar_ in addition to the DLL). 
 2. If you use the COM interface (including via .Net interop) with Registration-Free COM

 In any of the above scenarios, multiple versions of _wgssSTU.dll_ can coexist on a system and each of your programs can use its own local copy. 

If, on the other hand, you use the COM interface via the more traditional registry-based means, registration is then necessary.  
In this case, since the registry settings can only point at one DLL, wgssSTU.dll must to be in a common location and multiple versions cannot coexist.

--- 
## COM port greater than COM9

Q: Can I use a COM number greater than COM9 with the STU SDK serial interface? 

COM10 and above require special handling. See more details please see [Microsoft support](https://support.microsoft.com/en-us/kb/115831)  

For example, to use COM10 define the full pathname:
```
 query \\.\COM10 
```

---
## DLL Installation

Q: How can I deploy my application without installing the SDK or registering the DLL? 

#### 1. C++
A C++ application can include the SDK C++ source code then no further software installation is required.  

#### 2. .NET
.NET applications built using our STU SDK can be deployed without registering the DLL by including the interop as a reference in Visual Studio (side-by-side deployment).  

#### 3. Java

    The same applies to Java deployments - the DLL is required in the same directory as the Java application but it does not have to be registered.  
    Java needs **wgssSTU.jar** and **wgssSTU.dll** in the installation directory.   

#### 4. Side-by-Side 

Side by Side operation requires access to the wgssSTU.dll and interop files (no registration is required).

This method of operation is achieved in the project manifest file, for example:

``` 
  <dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="wgssSTU" version="2.1.2.0"/>
    </dependentAssembly>
  </dependency>
```

---
## ISO pressure unit conversion to Newtons
 
Q: How can pen pressure values be converted to Newtons for storing in ISO format?

It is not possible to convert precisely from digitizer units to force units because of the variability of the pen characteristics.

The digitizer values are not a linear function of the applied force, and furthermore there is hysteresis, meaning that the result at a given load will be different depending on whether the pen is being loaded or unloaded.

For verification purposes it is better to compare normalized force curves rather than absolute values. 

Please note that ISO 19794-7 is entitled "Information technology – Biometric data **interchange** formats".

It is intended for use when biometric data is to be exchanged between systems from different vendors - it isn't primarily a storage format and there is no obligation to store biometric data in this way.

If you do want to use it then the uncalibrated data can be stored in ISO format by using the native digitizer units and ignoring the optional scaling value in the channel description. 


---
## STU SDK encryption

Q: How does the STU SDK handle encryption?

There are three levels of encryption: 
 
 * STU-300/500/520 - EncryptionHandler
 * STU-430/530/540 - EncryptionHandler2
 * STU-541 - TLS

 
EncryptionHandler handles the 300/500/520 encryption using a Diffie-Hellmann key exchange and AES-128 encryption.

EncryptionHandler2 uses standard RSA key exchange (1024-2048 bit) with AES 128-256 bit encryption. 

The key sizes and algorithms are fixed for each tablet.  
Both handlers encrypt the pen data stream and both provide a level of protection to prevent replay attacks.


The EncryptionHandler and EncryptionHandler2 interfaces are there for the developer to provide the encryption implementation to the Tablet class.  
The Tablet class sits on top of Interface and Protocol to provide a simpler interface suitable for most developer needs. 

The Tablet class keeps track of whether the developer has enabled encryption (see startCapture() / endCapture() ), what type of tablet is installed and which version of encryption is required.  

This can all be done transparently by hand by not using the Tablet class and only using Interface and Protocol, though this is not recommended unless you have a very specific requirement which Tablet class cannot handle. 

The Tablet class only facilitates encryption between the developer application and the tablet; it contains no decoding capability itself.

The STU-541 is "secure-by-design" and negotiates a full TLS handshake first and all communication is done over the secure connection after that. 

The tablet's private key is signed by a public authority and it is CRL checked. 


---
## Pen sample rate

Q: How often is pen data sampled? 

On STU pads pen data is sampled every 5 milliseconds, i.e. 200 times per second. 

---
## STU tablet unique ID

Q: How to obtain the unique ID of an STU tablet 

Our older tablets (e.g. the STU 500) have a unique ID in the firmware which is set to zero by the factory – it can be set programmatically using the method **iTablet.setUid()** and it is retrieved using **iTablet.getUid()**.

Our newer tablets (e.g. the 430, 530, 540, 541) have two unique IDs – the ID mentioned above and also a second one which is set by the factory – this can be retrieved using **iTablet.getUid2()**.

If you run the STU tool Identify.exe ( see [STU Utilities](stu-tablet.md#STU-Utilities) ) it will display on the screen the current values of the UID or UIDs, depending on which tablet is connected.
 
In order to retrieve the UID of an individual tablet you must connect to the tablet first before calling **getUID()** or **getUID2()**.

If you want to connect to a particular tablet by means of its UID then you will need to write a function which cycles around all USB devices and opens each one in turn to check its UID.

As in the sample code demobuttons.js you can retrieve a list of all USB devices as follows:
```
     var usbDevices = createObject("WacomGSS.STU.UsbDevices");
```
 
This creates an array of connected USB devices – you can then cycle through the array and look at the properties of each device – see the class IUsbDevice and its properties in the SDK reference pages at  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **_C:\Program Files (x86)\Wacom STU SDK\COM\doc\interfacewgss_s_t_u_1_1_i_usb_device.html_** (depending on where you have installed the SDK).

If you can’t use the properties as an alternative to the UID then you will need to connect to each device as described above to check its UID.
 

---
## Java version support 

Q: Which Java versions are supported?

As per the "Getting Started" document supplied in the STU SDK the minimum Java version is 1.5 - but developers should note that the Tablet class requires 1.7.

---
## Pen pressure maximum value

Q: What is the maximum pen pressure value?

The maximum value of PenData.pressure depends on which STU is being used:  

| Tablet Models           | Number of pressure levels                     |
|-------------------------|-----------------------------------------------|
| STU 300/500/520         | 511   (i.e. 512 pressure levels starting at 0 |
| STU 430/530/540/541     | 1023  (1024 pressure levels) |

---
## STU-430G / STU-430V difference

Q: What difference is there between the STU-430G and STU-430V? 
 
The 430G and 430V are identical in appearance and size and resolution - the only difference is the way in which they communicate with Windows.  
The standard 430G operates as a normal USB device and appears as such in Device Manager.  
The 430V is configured to operate as a serial device via a virtual COM port - see the Device Manager screenshot extract below.  
The advantage of this is that the 430V can be forwarded over an RDP session to a remote server without the need for any additional USB forwarding software, thus reducing expenditure.  

If you want to use the 430G over RDP you must install third-party USB forwarding software because RDP cannot handle the pen data on its own.  
For further information please see also [Cannot connect to the pad over Remote Desktop/Citrix](../q-stu/stu-sdk-runtime#cannot-connect-to-the-pad-over-remote-desktopcitrix)

---
## STU-540 / STU-541 difference

Q: What differences are there between the STU-540 and the STU-541?

#### 1.  TLS Encryption:  

The STU-541 uses TLS encryption for maximum security between the device and the PC.  In the STU SDK this requires special programming which is only available through C++ and Java.  
Please note that STU SDK sample code for signature capture with the STU-541 is not provided with the standard samples, instead it can be found in the following two locations in the GitHub sample folders:  

* cpp\samples\DemoButtons  
* Java\samples\DemoButtons  

#### 2.  On-board ROM images:  

The STU-540 can be converted to operate in serial mode.  The main reason for this is so that it can be used effectively over RDP by exploiting its on-board image storage capability.  
The STU-541 also supports on-board images but it cannot operate serially.  Since it performs quite efficiently as a standard USB device there is probably little need to use the on-board ROM image functionality.  
&nbsp;  

#### 3.  Serial operation:

As mentioned above the STU-540 can be converted between HID and serial mode.  This facility is not available with the 541.  


---
## Signature pad resolution

Q: What is the resolution of my signature pad? 

The display pixel dimensions of the Wacom STU pads are as follows: 
&nbsp;  
&nbsp;  

| Tablet model(s)        | Dimensions in pixels   |
|------------------------|------------------------|
| STU-300/300B           | 396 x 100  |
| STU-430/430V           | 320 x 200  |
| STU-500                | 640 x 480  |
| STU-520, 530, 540, 541 | 800 x 480  |


---
## Supported operating systems

Q: Which operating systems are supported by the STU SDK? 

The STU SDK is compatible with Windows 7 or higher. 

A separate download for Linux is also available.

The STU SDK for Mac OS 10 can be obtained on request by raising a Support Ticket.

The Signature SDK is available for Windows, Android and iOS platforms as listed below.
* Windows 7 SP1 or higher
* iOS 6.1 or higher, Xcode 5.1.1 or higher
* Android 4.1.2 or higher

Please note that the Signature SDK is not currently available for Linux. 

---
## Products supported by STU SDK

Q: Which Wacom products can I use with the STU SDK?

The  STU SDK can only be used with STU pads. As at time of writing (Aug 2019) these are the STU 300, 430, 500, 520, 530, 540 and 541.

It is available on the following platforms: 
* Windows 7 SP1 or higher
* Linux
* MAC OS 10

Please note that there is no browser support on MAC OSX. 

---
## Browsers supported

Q: Which Web browsers are supported? 

The HTML and Javascript based sample programs provided with the STU SDK can only be used with Internet Explorer. 

In order to provide compatibility with other browsers we have developed the companion product STU SigCaptX which works with IE10+, Chrome and Firefox.

---
## Using sample code with STU-541

#### Solution

The STU 541 is a specialised tablet which uses TLS encryption for a high level of security.
Currently it is only supported via C++ and Java.  
Working samples which use TLS are provided in the GitHub sample folders:
- cpp\samples\DemoButtons_
- Java\samples\DemoButtons_


---
## STU SDK with DTU 1031

Q: Why won't the STU SDK work with my DTU 1031? 

The  STU SDK can only be used with STU pads. As at time of writing (Aug 2019) these are the STU 300, 430, 500, 520, 530, 540 and 541.

It is available on the following platforms: 
* Windows 7 SP1 or higher
* Linux
* MAC OS 10

Please note that there is no browser support on MAC OSX. 

For details about the low-level API for DTU devices please see the Wacom Device Kit.
 
---

##  What programming languages are compatible with the STU SDK?

In order to benefit from full support we recommend using one of the development languages for which we already provide [sample code on GitHub](https://github.com/Wacom-Developer/stu-sdk-samples):  

* C
* C++
* C#
* Delphi
* HTML/JavaScript
* Java
  
If you wish to use another development language please note that the functionality of the STU SDK is delivered via ActiveX DLLs, therefore in theory any language which can interface with ActiveX should be able to interact with the STU SDK.   
In terms of Web development our STU SDK comes with a cross-browser component called STU SigCaptX which enables compatibility with browsers that don't support ActiveX, e.g. Edge, Firefox and Chrome.  

---
---



