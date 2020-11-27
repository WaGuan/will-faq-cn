---
id: stu-sdk-deployment
title: Installation
---
## SDK Installation

[1.  Introduction](#1-introduction)  
[2.  Internet Explorer - Javascript](#2-internet-explorer---javascript)  
[3.  Netscape Browser - Javascript](#3-netscape-browser---javascript)  
[4.  Java Application](#4-java-application)  
[5.  .NET Application](#5-net-application)  
[6.  Scripted Installation](#6-scripted-installation)  


### 1 Introduction

An application developed using the Wacom STU SDK can be installed on a target system with only those components from the SDK required by the development language and environment.  
The full set of components:  

| Component           | Description                                        |
|---------------------|----------------------------------------------------|
| wgssSTU.dll         | Contains the executable API code |
| wgssSTU.pdb         | Debug database contains debug information |
| Interop.wgssSTU.dll | Interface to wgssSTU.dll for .NET applications  |
| wgssSTU.jar         | Interface to wgssSTU.dll for Java applications |

&nbsp;  
Note that different versions of the files are provided for 32-bit and 64-bit applications, contained in folders Win32 and x64 respectively.  
The full STU SDK installation includes documentation, and the complete set of components for 32-bit applications.  
Different development languages require different components and these are outlined below.  

### 2 Internet Explorer - Javascript

Internet Explorer requires only the ActiveX control:  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_wgssSTU.dll_  

Installation can be one of the methods described below, including the scripted method.  
Once the file is installed and registered, the API can be accessed via ActiveX.

### 3 Netscape Browser - Javascript

The STU SigCaptX cross-browser component is required for browsers other than Internet Explorer because they do not support ActiveX.
These include versions of Firefox and Chrome.

### 4 Java Application

A Java application requires the following files:  

 * wgssSTU.dll            - contains the executable API code
 * wgssSTU.jar            - interface to wgssSTU.dll for Java applications


To deploy the application the files can be copied. There is no need to register wgssSTU.dll.  
Note that separate file versions are supplied for 32-bit and 64-bit applications.  

Also included: *wgssSTU.15.jar*  
Use this version if necessary for Java 1.5 support (the standard .jar requires Java 1.7 as a minimum).
In version 1.5 the Tablet class is not supported.
Full STU functionality is provided through the Protocol class but the automatic error handling from Tablet is not available.


### 5 .NET Application

To develop a .NET application these two files are required:  
 * wgssSTU.dll           - contains the executable API code
 * Interop.wgssSTU.dll   - interface to wgssSTU.dll for .NET applications

Note that separate file versions are supplied for 32-bit and 64-bit applications.
The way the application is built will affect deployment:  

 * Standard ActiveX – access the API using ActiveX via interop+wgssSTU.dll
 * Embedded interop – optionally embed the interop file in the .exe
 * Side-by-Side execution – access the API by direct access to wgssSTU.dll

Standard ActiveX operation will need wgssSTU.dll to be installed and registered using any one of the installation methods.

Visual Studio can embed Interop.wgssSTU.dll in the .exe by setting project properties, for example:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Target framework: .NET Framework 4**

Properties for the Reference to Interop.wgssSTU.dll can then be set to:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Embed Interop Type  True**

If the file is embedded in the .exe it is no longer needed as a separate file for deployment.


Side by Side operation requires access to the _wgssSTU.dll_ and interop files (no registration required).  
This method of operation is achieved in the project manifest file, for example:  
```
<dependency>
    <dependentAssembly>
      <assemblyIdentity type="win32" name="wgssSTU" version="2.1.2.0"/>
    </dependentAssembly>
</dependency>
```
If side-by-side execution is selected _wgssSTU.dll_ can be copied with the .exe without registration.  

###  6 Scripted Installation

For basic ActiveX operation wgssSTU.dll can be copied to a folder and registered in Windows, for example, start a Command Prompt as Administrator:  

```
       regsvr32.exe wgssSTU.dll
```

Once the file is installed and registered, the API can be accessed via ActiveX calls.  
Note that separate file versions are supplied for 32-bit and 64-bit applications.  

---
