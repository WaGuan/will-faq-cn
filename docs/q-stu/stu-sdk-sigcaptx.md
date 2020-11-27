---
id: stu-sdk-sigcaptx
title: STU SigCaptX
---
*The following sections contain a selection of technical support questions and answers:*

## Samples do not work in my browser

#### Problem
Having opened STU SigCaptX samples in the browser nothing appears to work

#### Solution

1. Confirm that PortCheck successfully indicates: 'SigCaptX detected'. If this is not the case:

   Was the browser installed after installing SigCaptX? - if so uninstall/reinstall SigCaptX  
&nbsp;  
2. Confirm that the STU tablet is connected and operational.

   Use [STU Utilities](stu-tablet.md#STU-Utilities) to test the tablet:  

   **Identify.exe** - to establish a connection  
   **PenData.exe** - to verify pen input  
&nbsp;  
3. Run PortCheck.html from the samples - it should report as follows:

    **_SigCaptX Web Service: ready_**  
    **_SigCaptX DCA: ready_**

    If the DCA shows as "not detected" this is probably caused by either anti-virus or a port conflict.

    To handle port conflicts please see [Handling Port Conflicts with STU SigCaptX](#Handling-Port-Conflicts)

    If that doesn't work please try temporary disabling you anti-virus software.

    Please note that after making any changes to anti-virus or port numbers it is best to reboot.
 

## Samples do not work in Firefox 

#### Problem
Firefox reports 'Your connection is not secure'

#### Solution
Verified in Firefox Quantum (version 61).

STU SigCaptX requires access to https://localhost:9000 by default. It is possible to configure a different port number, but this doesn't cure the problem described below. 

Firefox considers the attempted connection to localhost to be a security breach and refuses to allow it. 

In order to remedy this it is necessary to add a security exception to Firefox as described below.

1. Navigate to https://localhost:9000 in the Firefox browser.
2. An error message should appear saying that the connection is not secure because the owner of localhost has not configured their Web site properly (see below).
3. Click on the button labelled "Add Exception..." at the bottom of the error page.
4. When the "Add Security Exception" dialogue box appears it should be auto-populated with the localhost port number so click on the "Confirm Security Exception" button at the bottom of the window (see below right).
5. Close and restart Firefox.

![Secure connection](assets/q-faq/stu/connection.png)

![Security certificate](assets/q-faq/stu/security-exception.png)

---

## Demobuttons sample not working in Edge and Internet Explorer 

This error is seen by the fact that nothing happens when you click on the "Start Demo" button after loading the demobuttons.html sample into Edge or IE.

If you press F12 in Edge you will see the following error message:  
&nbsp;  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**_WebSocket Error: SECURITY_ERR, Cross zone connection not allowed_**  
&nbsp;  

If you try pressing F12 in IE you will see no messages at all in the console.

This error is fixed by clicking the "Unblock" check-box on the "Properties" of the file using File Explorer as shown below.
 
![Properties](assets/q-faq/stu/demobuttons-properties.png)


<a id="Handling-Port-Conflicts"/>

---

## Handling Port Conflicts with STU SigCaptX

By default STU SigCaptX uses a service port number of 9000. 

This can occasionally cause problems on systems where other applications are also using the same port number or where firewall or anti-virus software is restricting access to it.

If STU SigCaptX cannot gain access to port 9000 then it will not run.

If the access is being prevented by security software (this has been experienced particularly with Kaspersky) then one solution is to change the settings in the security software so that it allows access to that port.

An alternative solution is to change the port number which STU SigCaptX uses - this requires coding and a registry setting change as described below.

#### 1.  Registry setting


For more details please see the [SigCaptX installation guide](/stu/docs/sigcaptx-guide)

Location: _HKEY_LOCAL_MACHINE\SOFTWARE\Wacom\SigCaptXSTU_ or _HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Wacom\SigCaptXSTU_  

&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   Port 9000


Change the Port number from 9000 to another number which you believe is less likely to cause a conflict. 


#### 2.  Coding:
 
Location: Please search in your code for anywhere where a reference is made to the service port, e.g. in **wgssStuSdk.js** as follows:
```
                var defPort = 9000;
 ```
Having found this line of code change the value "9000" to be the same as the new value which you have set up in the registry for "Port".

So if you have specified a Port value of 14500 then the code would now read:
```
                   var defPort = 14500;
```
You may also need to change references elsewhere as for example in our sample Web page **PortCheck.html** where "9000" will need to be changed  to "14500":
```
                     Service port: <input type="text" id="portText" value="9000">
```
---
## STU SigCaptX Logging

The registry location is: **_HKLM\Software\\(Wow6432Node\\)Wacom\SigCaptXSTU_**

Two registry values are required in this location:  
  

| Name           | Type       | Value                                                                                   |
|----------------|------------|-----------------------------------------------------------------------------------------|
| ArbitratorLog  | REG_SZ     | [path to service log file] e.g. "C:\Users\jsmith\documents\STUSigCaptX-Arbitrator.log"  |
| DeviceCtlLog   | REG_SZ     | [path to server log file]  e.g. "C:\Users\jsmith\documents\STUSigCaptX-DeviceCtl.log"   |  

The PC should be rebooted after creating the above entries.  

ArbitratorLog and DeviceCtlLog must be absolute path names to log files, not a log directory.  

---
 






