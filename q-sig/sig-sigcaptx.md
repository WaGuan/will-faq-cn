---
id: sig-sigcaptx
title: SigCaptX
---

## "Error 0x80070643: Failed to uninstall MSI package" in log file when uninstalling SigCaptX

Search engine results from the Internet would suggest that it could be that your .NET framework is corrupt or possibly your MSI software update registration.  

The problem may be resolved by using Microsoft Fix It as per this article: https://support.microsoft.com/en-us/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed 

Please note that we can accept no responsibility or liability for utilities provided by third parties, nor can we guarantee that they will resolve the issue.  

---
## "The SigCaptX service could not be started" on installing SigCaptX

When installing SigCaptX on Windows 7 you may receive an error message saying that the SigCaptX service could not be started.  
 
There are two known causes of this error as below.  
 
1. We applied a stricter digital signing method to Wacom executables and DLLs which often causes problems on Windows 7.  


   This additional protection was applied to prevent the possibility of files being modified.
 
   The error message will not be reported if Windows has been fully updated using Windows Update.
   If it is not possible to apply the full Windows Update, this specific update will usually resolve the issue: KB 3153171 
 
   The update can be downloaded from [Microsoft.com](http://microsoft.com/):  
&nbsp;  

   * [KB 3153171 - 32-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52140)

   * [KB 3153171 - 64-bit](https://www.microsoft.com/en-us/download/details.aspx?id=52069)


2. The SigCaptX service uses port 8000 by default. It could be that it is failing because another process is using that port (or maybe it is being  blocked by your anti-virus or firewall).  


   You can use "netstat -a" to find out whether there is another process using the port. 
   You can change the port number used by SigCaptX as described in the SigCaptX User Guide.
   
   Please note that if you change the default port number in the registry you will also need to change the port number used in your Javascript code.  
   Below shows how the port number is used in our sample code:  
&nbsp;  
```
   wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 8000);
``` 

---
## Handling Port Conflicts

By default SigCaptX uses a starting port number of 8000 (for the SigCaptX service process). 8001 is used for the first server process, 8002 for the second and so on as required.  

This can occasionally cause problems on systems where other applications are also using port numbers in the same range or where firewall or anti-virus software is restricting access to them.  

You can determine whether another application or process is listening on port 8000 by running the following command:  
&nbsp;  
```
netstat -a -o | find "LISTENING" | find ":8000"
```
&nbsp;  
If SigCaptX cannot gain access to ports 8000 and 8001 then it will not run.  

If the access is being prevented by security software (this has been experienced particularly with Kaspersky and Sophos) then one solution is to change the settings in the security software so that it allows access to those ports.  

An alternative solution is to change the port numbers which SigCaptX uses - this requires coding and registry setting changes as described below.  
&nbsp;  

1. Registry settings (for more details please see the SigCaptX installation guide at Signature Library - Windows - SigCaptX - User Guide - using word):   


    Location: **HKEY_LOCAL_MACHINE\SOFTWARE\Wacom\SigCaptX** or **HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Wacom\SigCaptX**  

                 start_port 8000
                 end_port   65535  


    Change the start_port number from 8000 to another number which you believe is less likely to cause a conflict.  
    The end_port can be changed as well if desired.  
&nbsp;  

2. Coding:
        Location: Please search in your code for the place where a call is made to the start port as follows:   
&nbsp;  

```
     wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 8000);
```  

&nbsp;  
Having found this line of code change the value "8000" to be the same as the new value which you have set up in the registry for "start_port" above.  
So if you have specified a start_port value of 10500 then the code would now read:  
&nbsp;  

```
     wgssSignatureSDK = new WacomGSS_SignatureSDK(onDetectRunning, 10500);
```

---
## Running SigCaptX with Firefox generates an error saying that the Signature SDK Service is not detected

This error message may be caused security checking within Firefox. To check this please enter "https://localhost:8000" directly in the address bar of the browser to see if you get an error message.  

If you see the error SEC_ERROR_REUSED_ISSUER_AND_SERIAL please follow the instructions at the following Mozilla support page to remove your cert8.db and cert9.db files:  

https://support.mozilla.org/en-US/questions/1203237  

If you then re-enter https://localhost:8000 in the address bar you will probably see the error message below left, i.e. "Your connection is not secure" - in which case please follow the instructions below to resolve the issue.  

If you don't see the SEC_ERROR_REUSED_ISSUER_AND_SERIAL error code when you try to access port 8000 then please go directly to the steps outlined below.  

SigCaptX requires access to ports https://localhost:8000 and https://localhost:8001 by default. It is possible to configure a different starting port number, but this doesn't cure the connection problem.  
Firefox considers the attempted connection to localhost to be a security breach and refuses to allow it.  
In order to remedy this it is necessary to add a security exception to Firefox as described in the following steps.  
 
1. Navigate to https://localhost:8000 in the Firefox browser.
2. An error message should appear saying that the connection is not secure because the owner of localhost has not configured their Web site properly (see below left).  
3. Click the <Advanced> button
4. Click on the button labelled <Add Exception..> at the bottom of the error page.  If this is not present follow the extra instructions below.  
5. When the "Add Security Exception" dialogue box appears it should be auto-populated with the localhost port number so click on the <Confirm Security Exception> button at the bottom of the window (see below right).  
6. Now you need to repeat 1 to 4 above for https://localhost:8001 and also for https://localhost:8002. On very busy systems if may be necessary to add port 8003 as well but you probably won't be able to do this by entering the ports numbers in address bar. You must therefore go to the Firefox Options menu and select "Privacy and Security" on the left-hand side.  Then scroll down to the bottom and click on the button "<View Certificates...>
7. Under "Servers" you should see the exception which you have already added for  localhost:8000. Click on the <Add Exception..> button and then enter "https://localhost:8001" in the field labelled "Location:" and click <Get Certificate>
8. Click the button <Confirm Security Exception>
9. On very busy systems you may need to repeat 7 and 8 for ports 8002 and 8003 as well.
10. Close and restart Firefox.

Instructions for adding a Security Exception if the <Add Exception..> button is not present:  

1. Click on the Firefox menu icon at the top right of the browser window and select <Options>
2. Select "Privacy & Security" from the list on the left  
3. Scroll down to the "Certificates" section and click the <View Certificates...> button  
4. Select the "Servers" tab and then click the <Add Exception...> button  
5. Enter "https://localhost:8000 in the "Location" field and click <Get Certificate> - if no certificate is found click the <Confirm Security Exception> button and also the checkbox labelled "Permanently store this exception"  

![Connection not secure](assets/q-sig/SigCaptX_FF_LocalHostConnectionError.png)

![Add security exception](assets/q-sig/SigCaptX_FF_AddSecurityException.png)

---
## Samples do not work in my browser

Having opened SigCaptX samples in the browser nothing appears to work

#### Solution

First confirm that PortCheck successfully indicates: 'SigCaptX detected'.  
If this is not the case:  
Was the browser installed after installing SigCaptX? - if so uninstall/reinstall SigCaptX  

---
## SigCaptX Logging

The registry location is: **_HKLM\Software\\(Wow6432Node\\)Wacom\SigCaptX_**

Three registry values are required in this location:  
&nbsp;  

| Name      | Type         | Value                                                                             |
|-----------|--------------|-----------------------------------------------------------------------------------|
| Logging   | REG_DWORD    | 1 (for Service), 2 (for Server) or 3/FF for both  |
| ServiceLog  | REG_SZ     | [path to service log file] e.g. "C:\Users\jsmith\documents\SigCaptX-service.log"  |
| ServerLog   | REG_SZ     | [path to server log file]  e.g. "C:\Users\jsmith\documents\SigCaptX-server.log"   |  
&nbsp;

If ServerLog or ServiceLog are omitted, files with default names are created in Public Documents.  

The server and service processes must be restarted for the settings to take effect - the easiest option is to reboot the PC.  

**N.B.** ServiceLog and ServerLog must be absolute path names to log files, not a log directory.

---
## SigCaptX samples do not work in Edge or Internet Explorer

When trying to run the SigCaptX sample code in Edge or Internet Explorer nothing happens when the buttons are clicked

# Solution

This is normally caused by the sample code having been downloaded over the Internet via a zip file.  
The fix is to right-click on the HTML file which you are trying to run and checking the "Unblock" checkbox highlighted in yellow in the image below.

![Unblock](assets/q-sig/Unblock.png)

---
## SigCaptX service detected, but not the server

This indicates that the SigCaptX server process has crashed or stopped, has never started or cannot be accessed for some reason. 

In order to find the root cause please try the following:  

1. Disable your anti-virus (there are known issues with Sophos and Kaspersky).  If this fixes the problem please configure your anti-virus to allow SigCaptX to run and have access to ports 8000 and 8001.  
&nbsp;

2. Start your browser in debug mode (using F12) and type "https://localhost:8000" into the address bar and see if there are any error messages in the console window.  
   If there are any messages indicating that port 8000 cannot be accessed please see the FAQ on [Handling Port Conflicts](#handling-port-conflicts)  
&nbsp;  

3. Look in the Windows Applications Event Log to see if there are any error messages relating to the process and report them by raising a Support Ticket

4. If you have access to the registry you can also enable logging as described at [SigCaptX Logging](#sigcaptx-logging) and then attach the log files to a Support Ticket.

---
## SigCaptX works with Internet Explorer but not Firefox or Chrome

Please note that Firefox and Chrome must be installed **prior** to SigCaptX otherwise SigCaptX will fail to locate them and will not work with them, even though it works with Internet Explorer.  

In particular Firefox must be installed and then a user session must be started up as well - this is because Firefox creates a security certificate database and SigCaptX needs to know about its location.  

That database is not created by the installer, only when the first normal user browser session starts. 

---
## Signature SDK Service not detected

In order to identify the exact source of the problem please run through the following in the order given:  

1.  The Signature SDK and its SigCaptX component must be installed.  They can either be installed separately using their individual installers or alternatively the combined SigCaptX installer will install both.  
    The installers are all included in the Signature SDK download file which is available under "For signature" at https://developer.wacom.com/developer-dashboard/downloads  
    Once extracted the directory created contains three sub-folders as follows (note that the exact file names will vary according to the current release):  
&nbsp;  

| FOLDER NAME     | CONTENT                                                                                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| documentation   | API reference manual plus installation and user guides |
| SigCaptX        | **Wacom-SigCaptX-1.21.2.exe**: combined installer for the SDK and cross-browser. **Wacom-Signature-SDK-SigCaptX-1.21.2.msi**: MSI installer for the SigCaptX cross-browser alone|
| SignatureSDK    | **Wacom-Signature-SDK-x86-4.5.1.msi**: MSI installer for the 32-bit Signature SDK. **Wacom-Signature-SDK-x64-4.5.1.msi**: MSI installer for the 64-bit Signature SDK  |

&nbsp;  

2.  SigCaptX must be installed after any browsers which you wish to use it with - if you installed any browsers after SigCaptX please uninstall and reinstall SigCaptX.  
&nbsp;  
3.  Run PenData.exe to check that the tablet is connected and responding to pen input - PenData is one of our [STU Utilities](../q-stu/stu-tablet#STU-Utilities)  
&nbsp;  
4.  Run **TestSDKCapture.html** from the Signature Library - Windows - Samples.
&nbsp;  
5.  Make sure that the "Wacom SigCaptX" service is running in Windows Services. If it does not appear please try re-installing SigCaptX from the installation program.  
&nbsp;  
6.  Run **PortCheck.html** from the  Signature Library SigCaptX Samples to see if it detects the SigCaptX service  
&nbsp;  
7.  If all the above are successful then try running the SigCaptX **SigCaptX-Capture.html** sample program to see if you can capture a signature  
&nbsp;  
8.  If you still cannot capture a signature please see the FAQ on [Handing Port Conflicts](#handling-port-conflicts)


 Please report any errors by raising a Support Ticket.

---
---







