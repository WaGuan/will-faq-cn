---
id: howto-stu-serial
title: Operate an STU tablet in serial mode
---

## Operating an STU tablet in serial communications mode

## Hardware Configuration  

Two STU models support the serial communications interface:
* STU-430V
* STU-540

The tablets can be configured for:  

* Human Interface Device (HID) - standard USB connection or
* Virtual COM Port (VCP) - serial connection over USB  

[STU Serial Connection](../q-stu/stu-tablet#STU-Serial-Connection) describes how to:  

* Select the serial communication mode of operation
* Determine which COM port an STU tablet is connected to

## Signature SDK Configuration

The following registry values are required for the Signature SDK to use the serial interface.  

(In the illustration the tablet is connected to COM5 using the standard baud rate 128000)  

#### 32-bit Signature SDK on 64-bit Windows (i.e. the typical sign pro PDF installation)

  **[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]**  
  "stuPort"="COM5"  
  "stuBaudRate"=dword:0001f400  

#### 32-bit Signature SDK on 32-bit Windows or 64-bit Signature SDK on 64-bit Windows

  **[HKEY_LOCAL_MACHINE\SOFTWARE\Florentis\sd]**  
  "stuPort"="COM5"  
  "stuBaudRate"=dword:0001f400  


Having made the necessary settings, test signature capture with the [Capture Analyser](howto-test-sdk) to confirm the installation.
 
---
