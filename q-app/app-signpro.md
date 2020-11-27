---
id: app-signpro
title: sign pro PDF
---

## **--- Installation and startup issues ---**

## 'Files in use' error when attempting to uninstall or install a new version of sign pro PDF

When I try to install a new version of sign pro PDF or try to uninstall the old version I receive the error message:

**One of more files are in use. Please close sign pro PDF before continuing**

Closing sign pro PDF and rebooting the PC does not resolve the issue.

*Solution*

Although not normally necessary, the issue can be resolved by manually performing one of the installer actions as follows:
* Select system settings: Printers and Scanners
* Select the printer: sign pro PDF
* Select Remove device

For example:

![Printers & scanners](assets/q-app/sp-printer.png)

---
## A valid sign pro PDF subscription cannot be found for this user

A valid sign pro PDF subscription cannot be found for this user

*Solution*

This error may occur if you are not currently connected to the Internet or if you have tried to install the product without an active Internet connection. 
The first time sign pro PDF is used you must be connected to the internet to obtain a license. 
Once you have acquired a license you can use sign pro PDF offline for up to 14 days. This 14 day period will be refreshed every time you reconnect and get a new license. 

Another possibility is that your trial 30-day licence has expired and you need to upgrade to a paid edition. 
If this is the case go to the Wacom marketplace and you will probably see the screenshot below indicating that you need to start paying.

![Trial expired](assets/q-app/SPPTrialExpired.png)

---
## How can I install sign pro PDF silently?

I want to install sign pro PDF silently without the need for intervention by the PC user.

*Solution*

This can be done from a command prompt with Administrator privileges as follows:  
```
    Wacom-signpro-v3.5.0.10.exe /quiet
```
---
## Is an updated version of sign pro PDF available from the marketplace

Is an updated version of sign pro PDF available from the marketplace

*Solution*

Any updates will be available from the MyApps section of the Marketplace once you are logged in.

The latest version at time of writing (Feb 2019) is v3.5.0.12   

---
## On starting up sign pro PDF I get a blank screen

On starting up sign pro PDF I get a blank screen

*Solution*

If sign pro v3 presents a blank start-up screen make sure that Windows Update is up-to-date and the latest version of IE11 is installed - this should fix it.

If not please contact  Wacom sign pro PDF support

---
## On starting up sign pro PDF I get a message saying that I have successfully signed out and can close the window - but I can get no further

On starting up sign pro PDF I get a message saying that I have successfully signed out and can close the window - but I can get no further

*Solution*

Problem: on start-up sign pro PDF informs you that you have successfully signed out and can close the window (see images below) but you cannot proceed to a log-in screen or restart the app. 

Resolution:

1. Delete the file 'cache.saml' from the directory C:\Users\"windows_username"\AppData\Roaming\Wacom\signpro

2. Log out of all active WacomID sessions in your Internet Explorer browser - to do this please go here: https://fenris.azurewebsites.net/api/client/v1/deauthenticate

3. Relaunch sign pro PDF and you should be presented with the login dialog again.

If the above fails please contact  Wacom sign pro PDF support

![Signed out](assets/q-app/SPPSignedOut.png)
![Close](assets/q-app/SPPCloseWindow.png)

---
## sign pro PDF setup failed - error 0x80070666 in log file

This error can occur when installing release 3.5.0.10 of sign pro PDF but should not occur with release 3.5.0.11 (when it becomes available).

It is caused by the existence of already installed VC redist packages which sign pro PDF is trying to install as well.

The workaround is as follows:

1. Remove (i.e. uninstall) the VC redist items for VC 2015 & 2017 only
2. Install sign pro
3. If the VC 2017 redist was originally installed, reinstall it

---
## Which operating systems are supported?

Which operating systems are supported?

Sign pro PDF is available for:
* Windows 7 and above
* iOS
* Android

---
## Why can't I download sign pro PDF from the Wacom marketplace?

Why can't I download sign pro PDF from the Wacom marketplace?

*Solution*

If you are unable to download sign pro PDF from the Wacom marketplace it may be because tax agreements are not yet in place for your country.
If in doubt please contact Wacom sign pro PDF support

---
---
## **--- General ---**

## After defining keywords in sign pro PDF how do I sign documents which don't contain any of those keywords?

After defining keywords in sign pro PDF how do I sign documents which don't contain any of those keywords?

*Solution*

If the specified keyword is not present in the document, then it will not be possible to sign. 
However, you can change your settings by navigating to Options -> Signature Area, and selecting the radio button against "Position signature with mouse".  

This will then enable you to sign on that document.

---
## Can I exchange signed PDF documents between Windows and Mobile versions of sign pro PDF?

Can I exchange signed PDF documents between Windows and Mobile versions of sign pro PDF?

*Solution*

Full compatibility is provided for PDF documents signed on Mobile and Windows versions of sign pro PDF.

---
## Can I remove or hide the signing information which appears underneath the signature?

Can I remove or hide the signing information (name, reason, date and time) which appears underneath the signature?

*Solution*

The signing information can be removed from the display underneath the signature using the "Show signing information in signature field" check box on the "Signature area" tab under "Options".  

---
## How do I copy/paste a signature from sign pro PDF into another Wacom application

How do I copy/paste a signature from sign pro PDF into another Wacom application e.g. Signature Scope or Miniscope?

*Solution*

Hold down Ctrl and left-click on the signature area in the sign pro PDF document.  
Then use Ctrl-V to paste it into SignatureScope (it must be the full version, not the demo) or Miniscope.

---
## How do I sign in multiple locations if there are multiple keywords or multiple occurrences of a keyword in the PDF document?

How do I sign in multiple locations if there are multiple keywords or multiple occurrences of a keyword in the PDF document?

*Solution*

For a given document you can position signature by keyword only once - remaining signatures will have to be manually placed using the mouse.  

If you have multiple occurrences of the same keyword you can specify which occurrence you want to position your signature against by changing the settings under Options -> Signature Area.  

However, you can only use keyword positioning just once for a document.

---
## How do I sign on a tablet not branded as Wacom such as Lenovo ThinkPad Laptop?

This note applies to products which use integrated Wacom tablet hardware with a Wacom ISD driver.  

One such example is the Lenovo ThinkPad Yoga series.  

To use the Lenovo Yoga series laptop with integrated pen display, e.g. 460  or X380, you will need to upgrade the following drivers if your versions are older than those indicated:  
* Wacom Signature SDK (v4.3.1)
* Wacom Tablet Driver (v7.6-22.17.37)

With older versions of the Tablet driver you may have experienced pen misalignment, or no pen input at all.  

#### Installation

First upgrade the Wacom Signature SDK components used by sign pro PDF:  

* Download the Wacom Signature SDK (v4.3.1 or later) and locate the 32-bit installer e.g. Wacom-Signature-SDK-x86-4.3.1.msi
* Run the downloaded .msi, accepting the defaults prompted during installation

Next upgrade the Wacom Tablet driver:  

* Download the Wacom Tablet driver (v7.6-22.17.37 or later) e.g. Wacom_Components_7.6-22.17.37_win_32_64.exe
* Run the downloaded .exe, accepting the defaults prompted during installation
* Restart the laptop


On completion you can test signature capture directly in sign pro PDF by selecting Help…Tablet Diagnostics  

#### Troubleshooting

##### Pen Input misaligned in signature capture

If the pen is still misaligned it may be necessary to remove previous tablet driver settings. To do this follow the procedure:  

* Uninstall Wacom Pen and Wacom Pen Services
* Reboot the laptop
* Re-install the Wacom Tablet Driver  (7.6-22.17.37 or later)

##### No Pen Input

Previous attempts to make the pen work with sign pro PDF may have included new registry settings. They should be removed using Windows Registry Editor regedit.  
The following is a complete list of expected values created by the sign pro PDF installer. Any other values will need to be removed (or renamed):  

##### Windows Registry

```
[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Florentis\sd]
"BtnsInside"=dword:00000001
"SyncCursor"=dword:00000001
"stuShared"=dword:00000001
```
---
## How do I sign with an STU-540 tablet operating in serial mode?

How do I sign with an STU-540 tablet which is operating serially?  

The STU-540 can be configured with images ready for immediate display. This  avoids the delay sending the image to the STU-540 every time a signature is captured.  

See below for instructions to achieve this, with reference to these pages:  

* [STU Serial Connection](../q-stu/stu-540-installation)
* [STU-540 Operating Modes](../q-stu/stu-540-modes)


*Solution*

#### 1. Upload images to the STU-540

This is a one-time operation to predefine the images in the STU-540 non-volatile memory.  
The procedure is as follows:

1. Check that the STU-540 is in HID (non-serial) mode. (see [Verify HID Mode](#verify-hid-mode) below)  
&nbsp;  

2. Go to **_Start -> Wacom Signature SDK -> Signature Mode Image Uploader_** (starts: _C:\Program Files (x86)\Common Files\WacomGSS\wgssStuImgUploader.exe_)  

![Screen uploader](assets/q-app/sp-image-uploader.png)

3. Modify as required or keep the defaults.  
&nbsp;  
4. Select:  

    * Tablets...Upload current screen (as the STU-540 is updated the signature capture screen will be displayed)
    * File...Save As (save the configuration file for later use, e.g. save to file C:\config\STU-540.config)


#### 2. Set the STU-540 to serial mode

See [Switch to Serial Mode](#switch-to-serial-mode) below


#### 3. Configure the Signature SDK  

Set the following registry values:

#### HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Florentis\sd 

| Registry setting   | Type      | Typical Value                  | Notes                                                                       |
|--------------------|-----------|--------------------------------|-----------------------------------------------------------------------------|
| stuPort            | REG_SZ    | COM5                           | As indicated by getSerialPorts.exe |
| stuBaudRate        | REG_DWORD | 128000                         | Fixed baud rate **decimal** |
| stuSigModeConfig   | REG_SZ    | c:\\config\\STU-540.config,1   | Full pathname of the screen upload filename, signature mode 1 uses screen 1 |

Set these registry values using the correct COM port and configuration filename:
```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Florentis\sd]
"stuPort"="COM5"
"stuSigModeConfig"="c:\\\\config\\\\STU-540.config,1"
"stuBaudRate"=dword:0001f400
```

#### 4. Test Signature Capture

* Start sign pro PDF
* Select Help... Tablet Diagnostics
* The menu option will immediately start signature capture.  

If you are unable to capture a signature, check the registry settings and verify that the STU-540 is in serial mode.

###### 1. Verify HID Mode

Run the command:

```
C:\serial-samples>query.exe
STU query sample

Device: 056a:00a8:0103
Status.statusCode                         = Ready
Status.lastResultCode                     = None
Status.statusWord                         = 00
```

When query displays the STU information a USB connection has been made.  

If the device is in serial mode the result will be:

```
C:\serial-samples>query.exe
STU query sample

No USB devices found
```

##### 2. Verify Serial Mode

Run the command:

```
C:\serial-samples>getSerialPorts.exe
COM5  virtual
COM1  physical
```

The result shows the virtual port connected to the STU.  

Run the command, substituting the correct com number (com5 in this example):  
&nbsp;  

```
C:\serial-samples>query.exe com5 128000
STU query sample

connecting to com5  128000
Status.statusCode                         = Ready
Status.lastResultCode                     = None
Status.statusWord                         = 00
HidInformation                            = 056a:00a8:0103
```

##### 3. Switch to Serial Mode

Verify that the STU-540 is in HID mode, see [Verify HID Mode](#verify-hid-mode)

Run the command:

```
C:\serial-samples>hid2serial.exe
STU HID2serial sample

Device: 056a:00a8:0103
Status.statusCode                       = 0
Status.lastResultCode                   = 0
Status.statusWord                       = 00
Information.modelName                   = STU-540
Information.firmwareMajorVersion        = 01
Information.firmwareMinorVersion        = 03
Information.secureIc                    = 0
Information.secureVersion               = 0.0.0.0
setDefaultMode()...
Done!
Status.statusCode                       = 0
Status.lastResultCode                   = 0
Status.statusWord                       = 00
Rebooting device
```

##### 4. Switch to HID Mode

Verify that the STU-540 is in Serial mode, see [Verify Serial Mode](#verify-serial-mode)

Run the command, substituting the correct com number (com5 in this example):
&nbsp;  

```
C:\serial-samples>getSerialPorts.exe
COM5  virtual
COM1  physical

C:\serial-samples>serial2hid.exe com5 128000
serial to hid STU query sample
serial2hid serialPort baudRate

Information.modelName                   = STU-540
Information.firmwareMajorVersion        = 01
Information.firmwareMinorVersion        = 03
```

---
## How do I sign with a serial STU-430V tablet?

How do I sign with a serial STU-430V tablet? (Or other STU tablet connected using serial communications rather than standard USB HID)  

*Solution*

sign pro PDF uses the Wacom Signature SDK to capture signatures and this has to be configured to accept serial communications.  

Your system administrator will follow these instructions to make the necessary configuration changes:  
 [Operate an STU tablet in serial communication mode](../q-sig/howto-stu-serial)  

---
## How do I specify default values for the signatory name and reason for signing?

There is a file called **_user.config_** in the following directory (where xxxxx is your user ID):  
  
_C:\Users\xxxxx\AppData\Local\Wacom\WacomGSS.signpro.exe_Url_s35s1fnt0xcvz1hzrtmc0ffjzb1dwip5\3.5.0.12_  

The keys are as follows:  
```
<setting name="SignatoryName" serializeAs="String">
<value>Signatory Name</value>
</setting>
<setting name="SignatoryReason" serializeAs="String">
<value>Reason for signing</value>
</setting>  
```

The above values can be generated from the sign pro PDF user interface by inputting them under **Options -> Identity -> "Signature name" and "Reason for signing".**

---
## How to verify legally the validity of a signed document

How do I verify legally the validity of a document which has been signed using sign pro PDF?

*Answer*

In the event of a handwritten signature being questioned it is necessary to compare it against a set of samples that are known to be genuine.  
This requirement applies equally to ink-on-paper signatures and to electronic handwritten signatures.  
A large number of genuine samples should be used because signatures are always variable, and it is important to take this natural inconsistency into account.  
The questioned signature can then be scrutinized to detect any features that are inconsistent with the normal signatures.  

To the user the signatures embedded in the PDF documents look like nothing more than static images, and the visual appearance alone is inadequate for the purposes of forensic assessment.  
However, the full FSS data can be extracted using forensic tools designed for this purpose.  
The main application used is Wacom SignatureScope which allows the full depth of biometric and forensic data to be examined and compared.  
SignatureScope was designed in cooperation with Forensic Document Examiners and is intended for use in legal proceedings.
 
---
## Signatures marked as invalid in other PDF readers

PDF readers other than sign pro PDF, such as Adobe Acrobat or Nitro, may sometimes mark signatures entered via sign pro PDF as invalid.  

This can happen if the signatures were created using a self-signed certificate.  

The solution is to add the certificate to the Trusted Store for the programs which are validating the signatures.  

To do this, right-click on the signature and select Properties, then click <Add to Trusted Contacts> as illustrated below.  

![Signature Properties](assets/q-app/trustedstore2.png)

---
## What happens if I lose my Signing Certificate?

What happens if I lose the Signing Certificate which I created or selected when first starting up sign pro PDF?

*Answer*

If you lose the certificate it does not matter because it is not necessary to ensure the validity of the document.  
Once the public key has been attached to the document you don't need the private key anymore.

---
## What is the purpose of the Signing Certificate?

Why do I need to select or create a Signing Certificate when I first run sign pro PDF?

*Answer*

The "Signing Certificate" (also known as a "Digital Certificate" or "Digital Signature") is used to prevent the signed document from being modified.
For more information on Signing Certificates please see also https://aboutssl.org/what-is-code-signing-certificate/ 

---
## What PDF ISO standard does sign pro PDF comply with?

What PDF ISO standard does sign pro comply with?

*Answer*

The PDF standard to which sign pro PDF complies is ISO 32000-1:2008. 

This ISO standard defines the structure of PDF files including the addition of digital signatures.  

Details, together with links to the standard documentation, can be found at http://en.wikipedia.org/wiki/Pdf

---
## Why am I getting a "String missing" error on my signature capture window?

Why am I getting a "String missing" error on my signature capture window?

*Answer*

The "String Missing" error occurs when the signature capture component has a problem loading localized strings.  

The strings should be in 'MUI' files in language specific sub-folders of **\Program Files\Common Files\Florentis** (or **\Program Files (x86)\Common Files\Florentis** on Win64).  

An uninstall/reinstall of the product (sign pro PDF and/or Signature SDK) should fix the problem.  

To be on the safe side, after uninstalling the product(s), check that the **...\Common Files\Florentis** folder and all subfolders have been removed.  

If you have installed both sign pro PDF and the Signature SDK please note that in these circumstances sign pro PDF may encounter problems when starting up.  
It is important to install these two products in the correct order:

1. sign pro PDF
2. Signature SDK

The recommended solution is to uninstall both products, restart your PC, then re-install them in the order specified above.  

---
## Why can't I open my dynamic (XFA) PDF document with sign pro PDF?

Why can't I open my dynamic (XFA) PDF document with sign pro PDF?

*Answer*

This is because an XFA (dynamic) PDF is not a standard PDF Acroform.  
Due to the manner in which Adobe locks XFA forms they cannot be displayed by most viewing applications, including sign pro. 

The only viewers that we are aware of that can reliably display these forms are Adobe’s own products, although some Foxit PDF viewers appear to be XFA-enabled.  
Please see this [PDF FAQ](http://www.quickpdflibrary.com/faq/if-this-message-is-not-eventually-replaced-by-the-proper-contents-of-the-document.php)  
 
---
---
