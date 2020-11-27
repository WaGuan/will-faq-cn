---
id: app-signpro-plugin
title: plugin for Acrobat Reader
---

## sign pro PDF plug-in for Acrobat Reader

## Plug-in does not work - error occurred in signature capture

After installing and configuring the sign pro PDF plug-in for Acrobat I get an error "Capture failed - please check that your Wacom signature device is connected"

The most likely explanation for this is that you are using the STU-300 plug-in with a different STU.  
The STU-300 plug-in appears in "Apps & features" as "sign pro plug-in for Adobe Acrobat - STU-300".  
This plug-in only works with the STU-300 and not with any other type of STU, e.g. a 430 or 530.  
Please install the [Generic sign pro plug-in](http://gsdt.wacom.eu/download/Signpro-acrobat-plugin.xml)

---
## Unable to add a signature using the sign pro PDF plug-in for Acrobat Reader

When trying to create a signature in Acrobat Reader using the Wacom sign pro PDF plug-in an error message appears saying that the signature could not be completed.  
The error occurs in acropihandler.cpp, line 404: **_Error creating signing certificate: CertAddCertificateContextToStore failed_**

This error with the Acrobat plug-in is known to occur if "Enable Protected Mode at startup" is not turned off in Acrobat Reader.  
Please go to **Edit \ Preferences \ Security (Enhanced)** in Acrobat Reader and ensure that the above option is not checked.  
Then restart Adobe Acrobat.

---
---



