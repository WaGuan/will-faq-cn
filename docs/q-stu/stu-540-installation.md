---
id: stu-540-installation
title: STU-540 Serial Installation
---
## STU-540 Installation for Serial operation

Please note that the instructions below are only needed if the 540 is to be configured as a serial device.  
Normally it is expected that the 540 will be used as a standard HID device (as supplied from the manufacturer).  

There are two situations in particular where it may be necessary to use the 540 in serial mode:  

* Over RDP in order to avoid having to install third-party USB forwarding software (which incurs extra cost)
* Over Citrix on installations where the 540 is not supported natively - for more information see  [Citrix compatibility of the STU-540](https://citrixready.citrix.com/wacom-co-ltd/stu-540.html)

#### Serial configuration of the STU-540:   

1. Log into https://developer.wacom.com and download the [STU SDK](https://developer.wacom.com/developer-dashboard/downloads#wacom-device-kit)

2. Download the STU SDK samples:  
   [https://github.com/Wacom-Developer/stu-sdk-samples](https://github.com/Wacom-Developer/stu-sdk-samples)

3. Download the [**Serial Connection Utilities**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/serial-connection.zip)

4. Connect the pad

5. Run "hid2serial" to change the 540 over into serial mode (if currently in HID mode).

6. Ensure your FTDI driver is up-to-date. Normally this is done automatically through Windows Update.  
   To do this manually select "Update Driver Software" on the "USB Serial Port" right-click menu in Device Manager.  
   Alternatively the driver can be downloaded from [http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm)

7. Run the “getSerialPorts” sample program which should show the pad as a virtual serial port:

![Ports](assets/q-stu/serial/getserialports.png)

If no virtual port is shown then then open Device Manager and expand out the “Universal Serial Bus controllers” section as illustrated below.  

![DevManager](assets/q-stu/serial/devmgr.png)

Right-click on “USB Serial Converter”, select “Properties” and then the “Advanced” tab as below.
 
![Serial Properties](assets/q-stu/serial/usbserialprops.png)

If the “Load VCP” check box is not ticked then tick it and click *\<OK\>*.  
Unplug the pad and plug it back in again.  
Try running “getSerialPorts” again – this time the virtual COM port should be listed.


8.  Run the “query” utility against the virtual COM port number to check your firmware version which should be at least 1.03.r0: 

```
C:\STU-SDK-Serial-Samples\serial-samples>
query COM8
```

The information returned should show you the firmware major and minor versions and the secure version number which together make up the firmware release.  
In the screenshot below the firmware version is 1.03.r0 (the secure version is given as a HEX value):  

![Query](assets/q-stu/serial/540fwversion.png)

If your firmware version is too old please raise a [Support Ticket](../q-support/support)

9.  In Device Manager select the “USB Serial Port” entry corresponding to the virtual port number shown by “getSerialPorts”.  
    The example below shows COM8:  

![Dev Manager 2](assets/q-stu/serial/devmgr_com8.png)

Right-click on the “USB Serial Port (COM?)” entry, select “Properties” and then the “Port Settings” tab as shown below.
 
![COM8 Properties](assets/q-stu/serial/com8_props.png)

Next click the *\<Advanced…\>* button and check the setting of the “Latency Timer” drop-down – if it is not set to 1 then change it so that it is and click *\<OK\>* twice to return to the Device Manager.

![Advanced settings](assets/q-stu/serial/advancedsettingscom8.png)

10.  Run the “Query” sample program on the virtual appropriate COM port number as follows:  
```
C:\STU-SDK-Serial-Samples\serial-samples>  query COM8
```

N.B.  For COM numbers from COM10 upwards special syntax is required, e.g.  

```
query \\.\COM10
```

This should return information similar to the following:

![Query 2](assets/q-stu/serial/540queryresults.png)

11.  Assuming the “query” was successful the next step is to try DemoButtons – this will present you with an initial selection box as below.

![DemoButtons](assets/q-stu/serial/540demobuttons1.png)

Tick the “Serial” check box and amend the port value to the appropriate COM number, set the baud rate to 128000 if needed and tick the “Use Signature Mode” check box as well

![DemoButtons2](assets/q-stu/serial/540demobuttons2.png)

Click the *\<Signature\>* button and you should see a signature capture window on the pad and also on your PC monitor.  
Enter your test signature on the pad using the pen and you should see inking on the pad as well as on the PC monitor window:

![Sign](assets/q-stu/serial/540capture2.png)

**Please note:**

We highly recommend that you focus on getting DemoButtons working successfully with a locally connected pad before attempting to use the pad in a Citrix, client/server or similar environment.  
If DemoButtons is operating correctly at a local level then any problems operating the pad via a remote connection can safely be attributed to the mechanisms or configuration being used to forward the pad data.


12. If the virtual port number allocated to your pad is higher than COM9 then this creates syntax complications as mentioned in 8 above.  
    This could potentially cause difficulties with configuration settings in Citrix or other software needing to access the device.  
    It is possible to override the pre-allocated COM port number manually as described below.

i)  Find the USB serial port by expanding “Ports” in Device Manager:

![Device Manager](assets/q-stu/serial/devmgr_ports.png)

ii) Right-click on the “USB Serial Port (COM?)” entry and select “Properties” to see the screen below:

![COM6 Properties](assets/q-stu/serial/usbserialprops_com6.png)

iii) On the “Port Settings” tab click the “Advanced” button:

![Properties Advanced](assets/q-stu/serial/portsettings_advanced.png)

iv)  On the “Advanced Settings for COM?” window click the “COM Port Number” drop-down:

![COM6 Advanced](assets/q-stu/serial/adv_settings_com6.png)

v)  From the list of COM ports select a different number.  
    If the dialogue box informs you that the COM port is already in use you can safely ignore this warning and continue with the change if you know that nothing else is plugged into any of your COM ports.

![COM6 Advanced 2](assets/q-stu/serial/adv_settings_com6_2.png)

vi)  Click “OK” on this window and again on the previous window to return to Device Manager.  

13.  Using the 540 with the Signature SDK and sign pro PDF

     In order to operate the 540 in serial mode with sign pro PDF or the Signature SDK add the following registry keys:

| FULL PATH OF KEY                       | DATA TYPE         | VALUE                      | DESCRIPTION                      |
|----------------------------------------|-------------------|----------------------------|----------------------------------|
| HKLM\Software\Florentis\sd\stuPort     | REG_SZ            | COM8 (see section 6 above  | The virtual COM port number      |
| HKLM\Software\Florentis\sd\stuBaudRate | REG_DWORD         | 128000                     | Baud rate                        |


N.B. 
These registry values will need to be in HKLM\Software\Wow6432Node\Florentis\sd if you are running a 32-bit application or SDK on a 64-bit system.  
Please make sure that you have installed the latest release of the Signature SDK as some older releases will not recognise the registry values.  
Please also note that the 540 is only supported from sign pro PDF version 3.3 onwards.

14.	 Using the 540 in serial mode with the STU SDK

In order to control the 540 in serial mode from the STU SDK a different type of connection needs to be made in the code.  
The example below illustrates how to do so with Javascript:  

````
var ec = m_tablet.serialConnect("COM4", 128000, true);
```

The first parameter is the COM port (which has previously been identified using getSerialPorts.  
The second parameter is always 128000 (baud rate).  
The third parameter is a true or false Boolean value indicating whether the connection should prohibit sharing of the port with another application – this is sometimes necessary on Windows 7.  

A C# sample demonstrating the differences between USB and serial connections, called “DemoButtonsHIDSerial”, is available to download from the “Additional Samples” section on the following site:  

https://gsdt.wacom.eu/support/STU-SDK-API-Samples.xml  

Please email signature-support@wacom.eu if you need to get access.  


## STU-540 Configuration for Citrix 6.5

### i)  CLIENT REGISTRY SETTING:

_Registry key_:  HKEY_LOCAL_MACHINE / Software / Citrix / ICA Client / GenericUSB / DeviceRules  
_Registry entry_: ALLOW:vid=056a pid=00A8 class="03" # STU 430V

The ALLOW statement should be listed before any DENY statements.  

This registry entry may sometimes be required when using standard (i.e. non-serial) STU and DTU devices with version 7.6.3 of Citrix and onwards.  
For this reason please see below the product ID (PID) values for the most common Wacom tablets and pads.

| PAD/TABLET | PID    |
|------------|--------|
| 300        | 00A2   |
| 430        | 00A4   |
| 500        | 00A1   |
| 520        | 00A3   |
| 530        | 00A5   |
| 430V       | 00A6   |
| 540        | 00A8   |
| 541        | 00A9   |
| DTU-1031X  | 032F   |
| DTU-1031AX | 039F   |
| DTU-1141   | 0336   |
| DTU-1141B  | 0359   |
| DTH-1152   | 035A   |

For USB redirection on Citrix 7.6 please see https://support.citrix.com/article/CTX137939


### ii) SERVER CONFIGURATION:

Citrix will not automatically see the STU-540.  When working with the COM connection on Citrix 6.5 you need to map the client COM drive to an available COM drive on the image.

If on the client, the STU-540 shows up connected to COM 4, you will do the following in a command line on the image:  

```
   net use com2: \\client\com4:
```

where COM2 is any available COM port. 

To make sure that this worked, run ‘net use’ in the command line and it will show you the mapped drives.  

