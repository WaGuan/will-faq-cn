---
id: howto-upload-540
title: Upload signature screen to STU-540
---

* [Introduction](#introduction)
* [Installation and operation](#installation-and-operation)
* [Windows Operation](#windows-operation)
* [Command Line Operation](#command-line-operation)
* [Signature SDK API](#signature-sdk-api)
* [Windows Registry API](#windows-registry-api)

## Introduction

The STU-540 signature tablet provides an alternative Signature mode of operation. When the mode is selected, images displayed during signature capture are retrieved directly from the tablet’s ROM storage.  
This means that the tablet can be more responsive since there is no need to resend the images to the tablet for each signature capture operation, and button presses can be processed locally.  
The images are stored in non-volatile ROM and can be stored as part of a one-time installation procedure.  

The use of stored images is particularly relevant when the STU-540 is set to operate in the slower serial communication mode.  
The serial communication method is sometimes necessary in a remote desktop configuration.  
Instructions to switch an STU-540 between Serial and USB communications are available here: [STU Serial Connection](../q-stu/stu-tablet#STU-Serial-Connection)  

If you plan to use the STU-540 in serial mode, first use the Screen Upload utility in USB mode to store signatures at high speed. Once stored they will still be available when operating in serial mode.  

Use the STU Signature Screen Upload application to create and store signature images for use with the Signature SDK.  
Up to three alternative signature capture screens can be defined, for example:  

![Standard capture screen](assets/q-sig/upload-capture-1.png)

## Installation and operation

The utility is installed as part of the Signature SDK and run from the Start menu:  

> **Start…Wacom Signature SDK…Signature Mode Image Uploader**

Alternatively locate and run the .exe installed in Common Files\WacomGSS:  

  **wgssStuImgUploader.exe**

Settings made in the application are saved in a configuration file.  
The configuration file is used to generate images uploaded to the STU tablet, and also by the Signature SDK during signature capture to verify the correct configuration.  

## Windows Operation

![Screen uploadeer](assets/q-sig/upload-capture-2.png)

### Usage

Screen number:  

Select the signature screen number 1..3

Operation:

Select one of the available operations:  

* set image
* delete image
* none

The selection made for the current screen is saved in the configuration file.

### Text

#### Reason for signing

* Dynamic (value of “Why” parameter)
* Static

Select the Dynamic option to use the text supplied in the API call to start signature capture. Static allows permanent text to be defined.


#### Signatory

* Dynamic (value of “Who” parameter)
* Static

Select the Dynamic option to use the text supplied in the API call to start signature capture. Static allows permanent text to be defined.

#### Location: 

* Dynamic (value of SetProperty(“Where”))
* Static

Select the Dynamic option to use the text supplied in the SetProperty API call, prior to starting signature capture. Static allows permanent text to be defined.


#### Date/time: 

* Dynamic (from the system clock)
* Not shown

Optionally include the date and time in the signature capture screen.  

### Buttons

Define the contents of the text on OK/Clear/Cancel buttons using default language values, or define alternative text.

### Font

Select the font and size used for text in the signature capture screen

### Menu Options

#### File  

  * New                                - reset the configuration
  * Open                               - open an existing configuration
  * Save                               - replace the current configuration
  * Save As…                      - select filename and save the current configuration
  * Exit                                 - exit the application


#### Tablets  

  * Upload current screen       - upload the currently selected screen configuration
  * Upload all screens            - upload all three screen configurations
  * View current image           - momentarily displays the configured signature screen


#### Help  

  * About                              - display version information


## Command Line Operation

Use the command line operation to script the screen upload procedure:  

  **wgssStuImgUploader.exe [config-file] -q -h**  

* [config-file]                - name of a configuration file saved by the application
* -q                          - quiet mode – upload and quit
* -h                          - help information  

The application processes the commands defined in the configuration file, for example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Screens>
  <Screen number="1">
    <Why>I accept the terms of the agreement</Why>
    <Who>Customer</Who>
    <When>0</When>
    <Language>EN</Language>
    <OK>OK</OK>
    <Clear>Clear</Clear>
    <Cancel>Cancel</Cancel>
    <Font size="12">Verdana</Font>
  </Screen>
  <Screen number="2">
    <Why>Ich akzeptiere die Bedingungen der Vereinbarung</Why>
    <Who>Kunde</Who>
    <When>1</When>
    <Language>DE</Language>
    <OK>OK</OK>
    <Clear>Löschen</Clear>
    <Cancel>Abbrechen</Cancel>
    <Font size="12">Verdana</Font>
  </Screen>
</Screens>

```



## Signature SDK API

Enable the STU Signature Mode in the call to signature capture by setting the following property:

&nbsp;&nbsp;&nbsp;&nbsp;**stuSigModeConfig**

Value (STRING)   [full pathname of configuration file], [signature screen number 1..3]  
Where signature screen number value (DWORD) is:  

* 0 – do not use Signature Mode
* 1 – use signature screen 1
* 2 – use signature screen 2
* 3 – use signature screen 3

### Example 1

```javascript
var dc  = new ActiveXObject("Florentis.DynamicCapture");
var sig = new ActiveXObject("Florentis.SigCtl");

dc.SetProperty("stuSigModeConfig", "c:\\config\\STU-screens.config,1");
dc.Capture(sig, "Customer", "I accept the terms of the agreement");
```

#### Application Notes:  

* Capture will fail if the image uploaded to the tablet does not match the image defined in the configuration.

* Signature capture MUST be licensed. If it is not licensed the image comparison will fail because of the addition of an Evaluation watermark.

* If config specifies static values for reason/signatory/location, the Who and Why parameters passed to Capture(), and the Where value passed to SetProperty("Where")  must match.     

* SetProperty("stuSigModeConfig") should be  passed the name (including, if necessary, path) of the config file + screen number (1 to 3), separated by a comma.  

  If the screen number is omitted, Capture will use the first screen it finds in the config file or screen number can be specified by a  preceding call to:  
```
     SetProperty("stuSigModeScreenNum", <num>);      
```
     
* As an alternative to supplying a config file, the configuration can be specified programmatically through a series of SetProperty calls with property names:  

    "stuSigModeScreenNum"  
    "stuSigModeWhy"  
    "stuSigModeWho"  
    "stuSigModeWhen"      
    "stuSigModeOK"  
    "stuSigModeClear"  
    "stuSigModeCancel"  
    "stuSigModeFontName"  
    "stuSigModeFontSize"  
    "stuSigModeConfig"  

    The values will be validated with the configuration which was uploaded to the STU tablet.

### Example 2

```javascript
var dc  = new ActiveXObject("Florentis.DynamicCapture");
var sig = new ActiveXObject("Florentis.SigCtl");//  replace dc.SetProperty("stuSigModeConfig", szSigConfig);
    dc.SetProperty("stuSigModeScreenNum",1);
//  dc.SetProperty("stuSigModeWhy",szWhy);       dynamic
//  dc.SetProperty("stuSigModeWho",szWho);       dynamic
    dc.SetProperty("stuSigModeWhen",1);
    dc.SetProperty("stuSigModeOK","OK (screen 1)");
    dc.SetProperty("stuSigModeClear","Clear");
    dc.SetProperty("stuSigModeCancel","Cancel");
    dc.SetProperty("stuSigModeFontName","Verdana");
    dc.SetProperty("stuSigModeFontSize",10);
 
 dc.Capture(sig, "Customer", "I accept the terms of the agreement");
```

* Use query.exe (from STU Serial Connection utilities) to verify that signature screen images have been uploaded. For example:

```text
...
RomImageHash[Signature,1,normal]          = 6686b765cb00bcdefd40a0f53c58d46a 
RomImageHash[Signature,1,pushed]          = 1b4bf1afd08396de7fd8715749bd9274
RomImageHash[Signature,2,normal]          = 47954cb7e99c36b8ee9b4df6f8425edd
RomImageHash[Signature,2,pushed]          = cf9d9d2727f0eef1cd646c2864e6a428
RomImageHash[Signature,3,normal]          = not stored
RomImageHash[Signature,3,pushed]          = not stored
...
```

## Windows Registry API

To use STU Signature Mode in a legacy system and as an alternative to calling SetProperty in the application, the equivalent values can be set in the registry.  

#### Key

* 32 bit: HKLM\Software\Wow6432Node\Florentis\sd
* 64 bit: HKLM\Software\Florentis\sd

#### Property: **stuSigModeConfig**

Value (STRING)  [full pathname of configuration file], [signature screen number 1..3]  
Where signature screen number value (DWORD) is:  

*  1 – use signature screen 1
*  2 – use signature screen 2
*  3 – use signature screen 3
* []  – not specified: use default signature screen 1

#### Example
```
[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Florentis\sd]"stuSigModeConfig" = "c:\\config\\STU-screens.config,1"
```

**NOTE**  

Be aware that signature capture will return error 101 when an evaluation license is used.  
This is because the screen hash does not include the 'Evaluation' watermark that is displayed when using a non-production license.

---


