---
id: app-installation
title: Installation Issues
---

## Error 0x80070666

### Problem 

The installation of the application fails with error 0x80070666 similar to the below:

```
Setup failed
...

0x80070666 - another version of this product is already installed.  
The installation of this version cannot continue.
```


### Solution

Uninstall the Microsoft Visual C++ Redistributable for 2015-2019 as pictured below, then re-run the installer for the application.

![Microsoft Visual C++ 2015 Redistributable](assets/q-app/VSC++Redist.png)  

Please note that there are separate redistributables for x86 and x86 so it may be necessary to uninstall both.  
Once the application installer has finished check that the Redistributable has reappeared - if not, re-install it from the appropriate Microsoft download site.  
At the time of writing this is [https://www.microsoft.com/en-gb/download/details.aspx?id=48145](https://www.microsoft.com/en-gb/download/details.aspx?id=48145)



---
