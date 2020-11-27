---
id: howto-test-sdk
title: Test signature capture
---

To test signature capture use any of the following methods:  


* [Capture Analyser](#capture-analyser)
* [SignHere Test](#signhere-test)
* [Javascript Test](#javascript-test)  

## Capture Analyser

This test program is installed as part of the Signature SDK and started from the Start menu.  

*It can also be downloaded here: [Capture Analyser](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/CaptureAnalyser.zip)*

The test is a standalone application which does not use the Signature SDK COM components.  

<Start...Wacom Signature SDK...Capture Analyser>

![Capture Analyser](assets/q-sig/capture-analyser.png)

To test signature capture:  

<Service...Test Capture...select the service name to match the capture device>:  

* signpad connects to an STU devices
* wintab connects to a Wacom tablet through the wintab driver, e.g. Intuos, DTU-1031X  

A successful test will display the signature capture window:

![Capture Analyser](assets/q-sig/capture-analyser-sig.png)

Further menu options may be used by technical support for troubleshooting as required.  


---
## SignHere Test

Run this test to capture a signature: [SignHere.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/SignHere.exe)  

The test calls the 32-bit Signature SDK ActiveX components to capture a signature:

![Sign here](assets/q-sig/sign-here.png)

The error message: 'Error: Retrieving the COM class factory for component with CLSID ...' indicates that the 32-bit Signature SDK components have not been installed.  

If the app will not run e.g. missing .NET, use the Javascript test which is functionally equivalent.

---
## Javascript Test

The Signature SDK includes a number of code samples for JavaScript.  

Download and unzip the batch files from: [Sign.zip](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Sign.zip)
The zip file contains:
```  
Sign.bat - 32-bit signature capture derived from the Signature SDK samples  
Sign-64.bat - 64-bit version of signature capture
```

Start a Command Prompt (Start...cmd.exe) to run the batch file **Sign.bat** in a folder:

![Sign.bat](assets/q-sig/sign-bat.png)

*(The single batch file contains commented sections for separate batch file and javascript processing)*

The test calls the 32-bit version of the Signature SDK ActiveX component, installed as the default in most cases.  
The error message 'Microsoft JScript runtime error: Automation server can't create object' indicates that the 32-bit Signature SDK has not been installed.  

To test a 64-bit Signature SDK installation use: **Sign-64.bat**  
The batch file uses the 64-bit version of cscript to call the Signature SDK ActiveX component.

---
---

