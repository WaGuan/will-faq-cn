---
id: howto-slideshow
title: Display Slideshow
---

## Display a slideshow on an STU series signature pad

While an STU series signature pad is not being used for signature capture it could be used to display information.  

One solution is to use the license free STU Display application which can be installed alongside a Signature SDK application:

| Item Description                  | Download Link                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------|
| STU Display Windows Installer     | [Wacom-STU-Display-2.0.exe](http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Wacom-STU-Display-2.0.exe) |
| STU Display Administrator's Guide | <a href="http://cdn.wacom.com/u/marketplace/INK-SDK/faqs/sig/Administrator-Guide-to-Wacom-STU-Display.pdf" target="_blank">Administrator-Guide-to-Wacom-STU-Display.pdf</a> |

Full installation details are in the Administrator's Guide referenced above.

> **NOTE**  
> Since the time of writing the Administrator's Guide the STU-540 colour tablet has been introduced and is also supported.  


## Installation Summary

* Download and run the installer **Wacom-STU-Display.exe** using the link above on your Windows 32-bit or 64-bit system.  
* Use the <Options> button to deselect automatic installation of the STU tablet driver if it is not required. (The driver is normally only required for the colour STUs but can be installed for future use).  
* The application is installed as a Windows Service and is independent of other Wacom SDK and sign pro PDF products.
* <Wacom STU Display> is created in the Control Panel to provide control. Separate folders are created for STU image files prepared for different size STU models.  


## Overview

STU Display detects one or more connected STU devices and displays a slideshow of the image files found in the related images folder.  
Additional image files can be added to the folder and these will be added to the slideshow.  
Similarly, files deleted from the folder will no longer be included in the slideshow.  

The Wacom STU Display control panel changes the way the slideshow operates.  
First press <Change> to allow the Control Panel to operate. Then the following changes can be made:  

* Change image every N seconds.
* Disable slideshow
* Image folder location
* Image layout:  
    * Size: e.g. Best fit
    * Border: e.g. Auto
    * Position: e.g. middle

---

