---
id: howto-use-rdp
title: Use Remote Desktop for signature capture
---

## Use Remote Desktop and Citrix for signature capture

There are currently two options for making STU tablets work in a remote desktop, thin client or Citrix environment:  

## 1. SERIAL OPERATION

   Use the monochrome **STU-430V** serial device or colour **STU-540** pad (which can be configured to operate serially).

   When STU pads operate as serial devices they are not subject to the same restrictions which Windows applies to STUs operating as standard USB devices.  
   Instructions for setting up the 430V are provided on the [STU serial connection guide](../q-stu/stu-tablet#STU-Serial-Connection).  
   For the 430V please see also [STU-430V Installation and Configuration](../q-stu/stu-430-installation).  
   For the 540 please see also [Configuring the STU-540 for serial operation](../q-stu/stu-540-installation)  

   The STU 430V and 540 in serial mode can be used with both our SDKs - STU and Signature - subject to appropriate coding.  
   Please see however the special note on Citrix below.  

## 2. USB REDIRECTION

   Use an additional product to forward the pen data to the server (USB redirection).  

   Various third-party tools are available to do this, for example:  

   * [USB for Remote Desktop by Fabulatech](https://www.fabulatech.com/usb-for-remote-desktop-download.html#tab_usbrdp-win-current)
   * [Dell Wyse TCX](http://www.dell.com/ed/business/p/wyse-tcx/pd)
   * [USB Redirector TS Edition by Incentives Pro](http://www.incentivespro.com/usb-redirector-ts.html)
   * [USB Network Gate by Eltima](https://www.eltima.com/products/usb-over-ethernet/)  

   Please note that although we have had some success with these in certain configurations we cannot guarantee that they will work in your particular environment.  
   We do not have any performance measurements for the above tools nor do we provide support for them - you would need to contact the suppliers themselves and test them.


## NOTE ON CITRIX COMPATIBILITY

Native support for Wacom signature pads was introduced with Citrix 7.6.3 (Feature Pack 3) as documented at this [What's New article](http://docs.citrix.com/en-us/xenapp-and-xendesktop/7-6/xad-whats-new.html).  

At the time of writing (July 2019) the list of currently supported devices is here: [Citrix supported devices](sig-prog-general#signature-devices-supported-on-citrix) 
 
Similar information can be seen on Citrix's own Web site here: [Citrix Compatible Wacom Pen Devices](https://citrixready.citrix.com/category-results.html?search=wacom)  
 
If using any of our older pads please raise a Support Ticket.
 

For older versions of Citrix (of which the most common is probably 6.5) then you would need to use the 430V or the STU 540 in serial mode.  
At the time of writing the maximum supported baud rate for these devices on XenDeskTop or XenApp 6.5 is 128,000 bits per second.  
If in doubt please raise a support request at the link given above to request up-to-date information, especially if you want to use a different version of Citrix.

---


