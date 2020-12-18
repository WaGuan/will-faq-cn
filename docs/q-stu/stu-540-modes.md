---
id: stu-540-modes
title: STU-540 Operating Modes
---


## Introduction

The STU-540 includes a number of alternative operating modes:

* Normal
* Signature Capture
* Key Pad
* PIN Pad
* Slide Show

In the alternative operating modes the STU firmware processes the user interface, such as indicating a pushed button.
This is achieved by preloading the tablet with images ready for immediate display.

This is particularly important when using the relatively slow serial interface since there is no need to transfer images between user interface operations.
In addition the images are stored in non-volatile memory and can be managed independently.

> Note that the STU-541 also supports the alternative operating modes.  
> The difference is that the STU-541 uses encrypted communication and does not support serial communications.
> Because of encryption the STU-540 test utilities are not compatible with the STU-541

### Normal mode

The normal mode is unchanged from the older STU models.

### Signature Capture mode

In the Signature Capture mode a capture screen is displayed as shown in the first image below.
Up to three capture screens can be defined with the options - see second image.

![Signature Capture](assets/q-stu/540/SigCapt-example.png)

![Signature Capture config](assets/q-stu/540/SigCapt-config1.png)

![Signature Capture config](assets/q-stu/540/SigCapt-config2.png)

For further details see: STU-540 Signature Capture Mode

### Key Pad mode

Use the Key Pad mode to make a selection by clicking a graphic.
The Key Pad selection screen can be configured in a number of ways, for example:

![Key Pad](assets/q-stu/540/KeyPad-example1.png)

![Key Pad](assets/q-stu/540/KeyPad-example2.png)

![Key Pad](assets/q-stu/540/KeyPad-example3.png)

For further details see: STU-540 Key Pad Mode

### PIN Pad Mode

Use the PIN Pad mode to input a number.
The PIN code entry screen can be configured in a number of ways as shown below.
The 3 PIN pad types are illustrated followed by the 5 key layouts.

![PIN Pad](assets/q-stu/540/PIN-type.png)

![PIN Pad layout](assets/q-stu/540/PIN-layout.png)


For further details see: STU-540 PIN Pad Mode

### Slide show

Upload images to the tablet and select the auto display function.
Store up to 10 images for a round robin display, with a programmable interval between each screen update.

For further details see: STU-540 Slide Show Mode

### ROM

The images used by the different operating modes are stored in on-board flash memory (ROM) for immediate retrieval.

For further details see: STU-540 ROM Store

---
## STU 540 Test Utilities

### Downloads

| File | Description |
| ---- | ----------- | 
| [**STU-540-Test-Utilities.zip**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-540-Test-Utilities.zip) | Test utilities |
| [**STU 540 Test Utilities src.zip**](https://cdn.wacom.com/u/marketplace/INK-SDK/faqs/stu/STU-540-Test-Utilities-src.zip) | C++ source code |
<!-- EXTERNAL -->

The STU-540 can be used in standard USB HID mode or changed to operate as a serial Virtual Com Port (VCP) device (serial over USB connection).  
The serial mode can be used when a remote connection is required and a full USB transfer is not possible. The serial interface is significantly slower than HID and the transfer of images takes a significant time.  
This means that normal operation is impractical because there is a long delay between display updates while image data is uploaded.  
To overcome this the STU-540 has a number of enhanced modes whereby images are preloaded on the device in non-volatile memory and displayed at runtime - this removes the need to upload images during operation.  
The test utilities demonstrate these functions in HID and Serial modes.  

To configure the STU-540 for USB or Serial operation see:  
[STU Serial Connection](stu-tablet)  
Unzip the test utilities from STU-540-Test-Utilities.zip to a folder:  
 
| Utility             | Description                        |
|---------------------|------------------------------------|
| DemoButtons.exe     | Demonstrates signature mode        |
| DemoKeyPad.exe      | Demonstrates key pad mode        |
| DemoPinPad.exe      | Demonstrates pin pad mode   |
| DemoSlideShow.exe   | Demonstrates slide show |
| DeleteRomImages.exe | Deletes preloaded images |

> NOTE: To avoid the delays experienced uploading images, run the tests using the USB HID connection before attempting to use the serial mode.**

### DemoButtons

#### Signature Mode

![Capture Signatue Mode](assets/q-stu/540/demobuttons-signaturemode.png)

The ‘Use Signature Mode’ option is used to switch between the conventional and on-board signature capture methods.
The on-board Signature Mode is intended for use with slow serial connections.  
Click [ Signature ] - this will start signature capture using the STU-540 signature capture mode (over HID):

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture3.png)

The first time DemoButtons runs, the images it needs for signature capture mode will be uploaded to the tablet. Since they are stored in ROM they will not be uploaded again.  
It is advisable to use HID mode to upload the images. To exit, press a button on the STU display (not Windows).

#### Signature Capture over Serial

Run DemoButtons.exe and select the following:
* Select ‘Use serial connection’
* Select Port to match the Virtual Port used in query.exe
* Set Baud rate to 128000
* Select ‘Use Signature Mode’
* Click [ Signature ] to start signature capture

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture.png)

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture-mode.png)

Because the images were uploaded in the HID test they are immediately available and there is no delay in signing or clearing the screen etc.  
To emphasise the effectiveness of the signature capture mode, deselect ‘Use Signature Mode’.
This method uses the conventional image upload method and takes a considerable time to start because the full screen image is uploaded at runtime:

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture2.png)

![Capture Signatue Mode](assets/q-stu/540/demobuttons-capture-sign.png)

### DemoKeyPad
The demo uses the Key Pad mode to make a graphic user selection.
The first time the program runs it uploads the images it needs.

![KeyPad Mode](assets/q-stu/540/demokeypad.png)

![KeyPad Mode](assets/q-stu/540/demokeypad-results.png)

### DemoPinPad

The demo uses the PIN Pad mode to enter a PIN code.
The first time the program runs it uploads the images it needs.

![PinPad Mode](assets/q-stu/540/demopinpad.png)

![PinPad Mode](assets/q-stu/540/demopinpad-results.png)

### DemoSlideShow

The demo uses the slide show mode to display a number of images.
The first time the program runs it uploads the images it needs.
The images display continuously on the tablet until stopped.

![SlideShow Mode](assets/q-stu/540/demoslideshow.png)

### DeleteRomImages

The utility deletes all images stored on the STU tablet.

![Delete Rom](assets/q-stu/540/deleteromimages.png)

Use query.exe from [STU Serial Connection](stu-tablet) to view the hash values of images stored in ROM.
The values indicate the storage status of an image, for example:  

```
RomImageHash[Signature,1,normal]          = 6686b765cb00bcdefd40a0f53c58d46a  
RomImageHash[Signature,1,pushed]          = 1b4bf1afd08396de7fd8715749bd9274   
RomImageHash[Signature,2,normal]          = not stored   
RomImageHash[Signature,2,pushed]          = not stored  
```

---

## Signature Capture Mode Reference

In Signature Capture mode a predefined screen is displayed, ready for the user to sign, for example: 

![Signature Mode](assets/q-stu/540/sig-mode.png)

In addition to pen colour and thickness, the WILL option (Wacom Ink Layer) can be enabled so that a smooth pen trace is displayed with variable thickness dependent on pen pressure.  

### Image Design

Define up to three signature capture designs.
Each design defines the images used for normal and button pushed displays in the following format:

![Signature Mode](assets/q-stu/540/sig-mode-areas.png)

Below is an example of a normal image followed by a corresponding keys pushed image:

![Signature Mode](assets/q-stu/540/sig-mode-image-a.png)


![Signature Mode](assets/q-stu/540/sig-mode-image-b.png)

#### Signature Area

After entering Signature Capture mode, the signature screen from the normal image is shown. The signature area size is 800 dots * 431 dots.  
Additional information such as name and reason, can be shown by writing to the signature area after setting the Signature Capture mode.

#### Operation Area

Button images are included in the normal image. Pushed button images are included in the button pushed image. When a button is pushed, the corresponding button image is displayed.
The size and location of each button:

| Button No  | Size (w * h)  | Location (x,y)  |
|------------|---------------|-----------------|
|     1      | 265 * 48      | 0, 431 |
|     2      | 265 * 48      | 266, 431  |
|     3      | 265 * 48      | 532, 431  |

#### Signature Image settings

Each signature screen requires the settings:

| Item                             | Pattern 1                                                                |
|----------------------------------|--------------------------------------------------------------------------|
| Image design number              | Image design number 1..3 |
| Signature screen (Normal)        | Image data includes normal buttons, initial message and background image |
| Signature screen (button pushed) | Image data includes pushed buttons and background image |
| Keys Enabled setting             | The bitmask (1..3) allows individual keys/buttons to be enabled (1) or disabled (0) as follows:<br/> &nbsp;&nbsp; **Bit 0:** _key1 - Cancel_. &nbsp;&nbsp;**Bit 1:** _key2 - Clear_.&nbsp;&nbsp; **Bit 2:** _key3 - OK_ |

#### Signature Capture Operation

Before entering Signature Capture mode the images and settings must be stored. The following options must be set when entering Signature Capture mode:  

| Item                          | Description                                         |
|-------------------------------|-----------------------------------------------------|
| Signature Screen Select       | Select Signature screen design from pattern 1..3 |
| MessageBox id after Enter     | MessageBox screen to show after Enter was pressed |
| MessageBox id after Cancel    | MessageBox screen to show after Cancel was pressed |

#### Signature Capture Return

UI Event Data reports the selected key number: 

| Item         | Description                  |
|--------------|------------------------------|
| Key value    | **0:** **_Cancel_** &nbsp;&nbsp; **1:** **_Enter_** &nbsp;&nbsp; **2:** **_Clear_**  |
&nbsp;  

In addition to sending the report:

| Button        | Description                                                  |
|---------------|--------------------------------------------------------------|
| OK            | Clear screen and return to Normal mode |
| Clear         | Clear screen and redisplay the initial signature capture box screen |
| Cancel        | Clear screen and return to Normal mode |

### Signature Capture logic

![Signature Mode](assets/q-stu/540/sig-mode-flow.png)

### API Reference

| Function              | Description                     |
|-----------------------|---------------------------------|
| initializeSignature   | Signature Capture settings |
| writeRomImage         | Tablet write ROM functions  |
| setOperationMode      | Select Signature Capture mode |


####  Code illustration

##### Upload Image

See **[STU-540 ROM Store](#ROM-Store-Reference)**

Requires image descriptor:  
```
romStartImageData = initializeSignature(m_encodingMode, pushed, SIG_IMAGE_NUM, array<bool, 3>{ true, true, true}) );
```


##### Start Signature mode

```
// 0=Cancel; 1=Enter; 2=Clear
OperationMode_Signature sigOpMode{ SIG_IMAGE_NUM,{ 2, 0, 1 }, 0, 0 };
OperationMode opMode = initializeSignature(sigOpMode);
m_tablet.setOperationMode(opMode);
```

##### Receive Pen Data
```
Decode Pen Data from ReportHandler
onReport(PenData & v)
{
  save(penData);
  PostMessage(m_hwnd, WM_USER, 0, 0);
}
...

// Dialog callback

case WM_USER:
    processPenData();
...
```
 
##### Receive the UI Event
```
Decode the UI Event data from ReportHandler
onReport(EventDataSignature & eventDataSignature)
{
  switch (eventDataSignature.keyValue)
  {
  case 0:
    processCancel();

  case 1:
    processOK();

  case 2:
    processClear();
  }
}
...
```

---

## Key Pad Mode Reference

In the Key Pad mode a graphic key pad is displayed for user selection, for example: 

![KeyPad Mode](assets/q-stu/540/keypad-areas.png)

The general implementation is as follows:
* Upload Key Pad images
* Start the Key Pad mode
* Receive a return code

The images used in the process need only be uploaded once for multiple use. A hash mechanism is provided to determine whether or not the images have already been stored on the STU tablet.  
If required the message area can be changed while the tablet is in Key Pad mode.

#### Key Pad Type

Select the Key Pad type from one of the following:

![KeyPad Mode](assets/q-stu/540/keypad-types.png)

### Image Design

Define up to three Key Pad designs. Each design contains the images used for the Key Pad selection formatted for the type.
An example of a KeyPad type 1 normal image is shown below followed by the corresponding keys pushed image.

![KeyPad Mode](assets/q-stu/540/keypad-image-a.png)

![KeyPad Mode](assets/q-stu/540/keypad-image-b.png)

#### Key Pad Type 1 Image Design

![KeyPad Mode](assets/q-stu/540/keypad-areas-2.png)

| Item          | Size (w * h)  | Location (x,y) |
|---------------|---------------|----------------|
| Message Area  | 800 * 64      | 0,0 |
&nbsp;  

| Button No  | Size (w * h)  | Location (x,y)    |
|------------|---------------|-------------------|
|     1      | 240 * 119     | 30, 73 |
|     2      | 240 * 119     | 280, 73 |
|     3      | 240 * 119     | 530, 73 |
|     4      | 240 * 119     | 30, 202 |
|     5      | 240 * 119     | 280, 202 |
|     6      | 240 * 119     | 530, 202 |
|     7      | 240 * 119     | 30, 331 |
|     8      | 240 * 119     | 280, 331 |
|     9      | 240 * 119     | 530, 331 |
&nbsp;  

#### Key Pad Type 2 Image Design

![KeyPad Mode](assets/q-stu/540/keypad-areas-3.png)

| Item         | Size (w * h)  | Location (x,y) |
|--------------|---------------|----------------|
| Message Area | 800 * 220     | 0,0 |
&nbsp;  

| Button No    | Size (w * h)  | Location (x,y)  |
|--------------|---------------|-----------------|
|      1       |   240 * 103   | 30, 234 |
|      2       |   240 * 103   | 280, 234 |
|      3       |   240 * 103   | 530, 234 |
|      4       |   240 * 103   | 30, 347 |
|      5       |   240 * 103   | 280, 347 |
|      6       |   240 * 103   | 530, 347 |

#### Key Pad Type 3 Image Design

![KeyPad Mode](assets/q-stu/540/keypad-areas-4.png)

| Item         | Size (w * h)  | Location (x,y) |
|--------------|---------------|----------------|
| Message Area | 514 * 480     | 286,0 |
&nbsp;  

| Button No    | Size (w * h)  | Location (x,y)  |
|--------------|---------------|-----------------|
|      1       |   240 * 96    | 30, 30 |
|      2       |   240 * 96    | 280, 128 |
|      3       |   240 * 96    | 530, 246 |
|      4       |   240 * 96    | 30, 354 |

#### Key Pad Settings

Up to three Key Pad image designs can be stored. For each design supply:  

| Item                         | Description                                                                                                                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Image design number          | Image design number 1..3 |
| Normal Key Pad screen        | Image data includes normal buttons, initial message and background image |
| Button pushed Key Pad screen | Image data includes pushed buttons and background image |
| KEY Pad type                 | Type 1..3 |
| KEYs Enabled setting         | The bitmask (1..9) allows individual keys/buttons to be enabled (1) or disabled (0):<br/> &nbsp;&nbsp; **Bit 0:** _key1_ &nbsp;&nbsp; **Bit 1:** _key2_ &nbsp;&nbsp; **Bit 2:** _key3_ etc. |

##### Key Pad Mode Settings

Before entering Key Pad mode, the images and settings must be stored. The following options must be set when entering Key Pad mode: 

| Item                  | Description                                            |
|-----------------------|--------------------------------------------------------|
| Key Pad Screen Select | Select Key Pad screen design from pattern 1..3 |
| Select Message id     | Message Box screen to show after an image has been selected |

##### Key Pad Mode Return
UI Event Data reports the selected key number:  

| Item                  | Description                                       |
|-----------------------|---------------------------------------------------|
| Key Pad Screen Select | Key Pad screen design from pattern 1..3 |
| Selected Key Number   | Key number 1..9 dependent on Key Pad type  |

### Key Pad Operation logic

![KeyPad Mode](assets/q-stu/540/keypad-logic.png)

### API Reference

| Function            | Description           |
|---------------------|-----------------------|
| initializeKeyPad    | Key Pad settings |
| writeRomImage       | Tablet write ROM functions |
| setOperationMode    | Select Key Pad mode |

#### Code illustration

##### Upload Image

See **[STU-540 ROM Store](#ROM-Store-Reference)**

Requires image descriptor with buttons enabled mask:  
```
array<bool, 9> KeyPad::m_btnEnabled = { 1, 1, 1, 1, 1, 1, 1, 1, 1 };
romStartImageData = initializeKeyPad(encodingMode, pushed, m_layoutNum, m_layoutNum, m_btnEnabled);
```

##### Start Key Pad mode
```
OperationMode_KeyPad KeyPadMode{ m_layoutNum, 0 };

OperationMode opMode = initializeKeyPad(KeyPadMode);
tablet.setOperationMode(opMode);
```

##### Receive the UI Event
```
Decode the UI Event data from ReportHandler
onReport(EventDataKeyPad & e)
  {
    PostMessage(m_hWnd, WM_KEYPAD_RESULT, MAKEWORD(e.keyNumber, e.screenSelected), 0);
  }
...

// Dialog callback

case WM_KEYPAD_RESULT:
  {
    keyNumber = LOBYTE(wParam);
    screenSelected = HIBYTE(wParam);
  }
...
```

---

## PIN Pad Mode Reference

In the PIN Pad mode a numeric keypad is displayed for user input, for example:
 
![PINPad Mode](assets/q-stu/540/pinmode-image-a.png)

#### PIN Pad Type

Select the PIN pad type from one of the following:

![PINPad Mode](assets/q-stu/540/pinmode-types.png)

#### Key Layout

Select the key layout from one of the following:

![PINPad Mode](assets/q-stu/540/pinmode-layouts.png)

### Image Design

Define up to three PIN Pad designs.
Each design defines the images used for normal and button pushed displays in the following layout:

![PINPad Mode](assets/q-stu/540/pinmode-areas.png)

Below is an example of a normal image followed by a corresponding keys pushed image: 

![PINPad Mode](assets/q-stu/540/pinmode-image-a.png)

![PINPad Mode](assets/q-stu/540/pinmode-image-b.png)

#### Message Area:

After entering PIN pad mode, the initial message area from the normal image is shown. When an error occur, the message area from the keys pushed image is shown.
The message area size is 800 x 55 dots.  

##### PIN display area:

The characters displayed when pressing a (0~9, *, # and .) are included in the normal image. The display area size is 665 x 74 dots.  
The PIN code display image size is 49 x 66 dots. The location of this area is (68, 55) from the top left corner.  
The size and location of each PIN code:  

| PIN code | Size (w * h)  | Location (x,y)   |
|----------|---------------|------------------|
|    0     |    49 * 66    |  72, 59          |
|    1     |    49 * 66    |  121, 59          |
|    2     |    49 * 66    |  170, 59          |
|    3     |    49 * 66    |  219, 59          |
|    4     |    49 * 66    |  268, 59          |
|    5     |    49 * 66    |  317, 59          |
|    6     |    49 * 66    |  366, 59          |
|    7     |    49 * 66    |  415, 59          |
|    8     |    49 * 66    |  464, 59          |
|    9     |    49 * 66    |  513, 59          |
|    *     |    49 * 66    |  562, 59          |
|    #     |    49 * 66    |  611, 59          |
|    .     |    49 * 66    |  660, 59          |

##### PIN pad area:

Button images are included in the normal image. Pushed button images are included in the button pushed image. When a button is pushed, the corresponding button image is displayed.  
The size and location of each button:  

| Buttons     | Size (w * h)  | Location (x,y)   |
|-------------|---------------|------------------|
|    0        |    174 * 66   |   217, 384       |
|    1        |    174 * 66   |   30, 147        |
|    2        |    174 * 66   |   217, 147       |
|    3        |    174 * 66   |   404, 147       |
|    4        |    174 * 66   |   30, 226        |
|    5        |    174 * 66   |   217, 226       |
|    6        |    174 * 66   |   404, 226       |
|    7        |    174 * 66   |   30, 305        |
|    8        |    174 * 66   |   217, 305       |
|    9        |    174 * 66   |   404, 305       |
| '*' or '.'  |    174 * 66   |   30, 384        |
|  # or 00    |    174 * 66   |   404, 284       |
|  Clear      |    174 * 89   |   596, 147       |
|  Cancel     |    174 * 89   |   596, 254       |
|  Enter      |    174 * 89   |   596, 361       |

#### PIN Pad Image Settings

Each image design requires the settings:  

| Item                            | Description                                                                                      |
|---------------------------------|--------------------------------------------------------------------------------------------------|
| Image design number             | Image design number 1..3 |
| PIN pad normal image            | Image data includes normal buttons, initial message, PIN code display fonts and background image |
| PIN pad buttons pushed image    | Image data includes pushed buttons, error message and background image |
| PIN pad type                    | Keypad type 1..3 |
| Key layout                      | Round Robin or specific key layout 0..5 |  

#### PIN Operation settings

Before entering PIN pad mode, the images and settings must be stored. The following options must be set when entering PIN pad mode.


| Item                | Description                                                                                                                                                                    |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PIN Pad Image       | Select the PIN pad image design from pattern 1..3 |
| PIN Bypass          | Set PIN Bypass=1 to disable the minimum digits check |
| Minimum digits      | If the PIN input is below Minimum the error message is shown and Min Digit Error is reported |
| Maximum digits      | If the PIN input exceeds Maximum the error message is shown and Max Digit Error is reported. The maximum number of digits is 12 |
| Number Hidden Mode  | If this mode is enabled, PIN input codes are shown for 500msec and hidden by '*'. If the next PIN is input within 500msec, the previous value is hidden by '*' after input. |
| Enter Message id    | MessageBox screen to show after Enter |
| Cancel Message id   | MessageBox screen to show after Cancel |  

#### PIN Pad Mode Return

UI Event Data reports the list of selected keys as follows:  

| Item                                            | Value                                                                                                                                               |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Key Input                                       | **0x00:** _Cancel_ (PIN values = 0xF)&nbsp;&nbsp; **0x01:** _Enter_ &nbsp;&nbsp; **0x02:** _Min Digit Error_ (PIN values = 0xF) &nbsp;&nbsp; **0x03:** _Max Digit Error_ (PIN values = 0xF) |
| List of PIN codes in the order selected (1..13) | 0 to 9 &nbsp;&nbsp; 0x0A = * &nbsp;&nbsp; 0x0B = # &nbsp;&nbsp; 0x0C = . |

In addition to sending the report:

| Button     | Function                                                                                                                                                                                   |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 to 9     | Store pushed button number |
| * . # 00   | Store pushed character  00: Store 00 and show 2 digits 00 |
| Clear      | Clear input PIN code and clear PIN display area  e.g. If Clear button is pushed after 1, 2, 3 are input, all 1, 2, 3 are cleared.  |
| Enter      | **Condition 1:** Input PIN code digits are within (Max, Min) digit setting: Output PIN code and exit from PIN pad mode to Normal mode.  **Condition 2:** Input PIN code digits are below (Min) digit setting: Show error message for 2 seconds and exit from PIN pad mode to Normal mode with Min Digit Error report |
| Cancel     | Issue Cancel Report and exit from PIN pad mode to Normal mode. |


### PIN Operation logic

![PINPad Mode](assets/q-stu/540/pinmode-logic.png)

### API Reference

| Function            | Description              |
|---------------------|--------------------------|
| initializePinPad    | PIN Pad settings |
| writeRomImage       | Tablet write ROM functions |
| setOperationMode    | Select PIN Pad mode |

#### Code illustration

##### Upload Image

See **[STU-540 ROM Store](#ROM-Store-Reference)**

Requires image descriptor:
```
romStartImageData = initializePinPad(encodingMode, pushed, PINPAD_IMAGE_NUM, PINPAD_TYPE, PINPAD_LAYOUT);
```

##### Start PIN Pad mode
```
OperationMode_PinPad pinPadMode{ PINPAD_IMAGE_NUM,
  0,
  m_minDigits,
  m_maxDigits,
  m_hideNumbers ? 1u : 0u,
  PINPAD_LAYOUT,
  0,
  0 };
OperationMode opMode = initializePinPad(pinPadMode);
m_tablet.setOperationMode(opMode);
```

##### Receive the UI Event

```
Decode the UI Event data from ReportHandler
onReport(EventDataPinPad & e)
  {
    switch (e.keyInput)
    {
      case InputEnter:
        m_pinPad = savePin(e);
      case InputCancel:
      case InputMinDigit:
      case InputMaxDigit:
    PostMessage(m_hWnd, WM_PINPAD_EVENT, e.keyInput, 0);
    }
  }
...

// Dialog callback

case WM_PINPAD_EVENT:
  switch (wParam)
  {
  case InputEnter:
    {
    pin = getSavedPin();
    }
... 
``` 
---

## Slide Show Reference

In the slide show mode, stored images are shown automatically for a set interval and order. The slide show will continue until a new mode is selected.

### Image Design

Define up to 10 images with the format:

| Item             | Description                                   |
|------------------|-----------------------------------------------|
| Image number     | Image number 1...10     |
| Image format     | Bitmap (24bit color, 16bit color, Monochrome) |
| Image resolution | 800 x 480 dots |



#### Slide Show Mode Settings

Before entering the Slide Show mode, the images must be stored. The following options must be set when entering Slide Show mode:

| Items              | Description                                                                                                                                |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Working mode       | **Round robin mode:** Selected images are shown for the set interval and order. &nbsp;&nbsp;**Single mode:** Selected image is shown (only one image is shown) |
| Number of slides   | Defines the number of images for round robin display |
| First slide number | Defines the image to start the slide show |
| Interval           | Slide show interval: Min. 2000msec &nbsp;&nbsp;Max. 120000msec |

### Slide show logic

![Slide Show](assets/q-stu/540/slideshow-logic.png)

### API Reference

| Function            | Description                 |
|---------------------|-----------------------------|
| initializeSlideShow | SlideShow settings |
| writeRomImage       | Tablet write ROM functions |
| setOperationMode    | Select Slide Show mode |



#### Code illustration

##### Upload Images

Upload up to 10 images, see **[STU-540 ROM Store](#ROM-Store-Reference)**

Requires image descriptor:
```
romStartImageData = initializeSlideShow(encodingMode, false, bitmapNumber);
```
##### Start slide show mode
```
OperationMode_SlideShow slideShow;

slideShow.workingMode = 0;
slideShow.numberOfSlides = 3;
slideShow.slideNumber[0] = 1;
slideShow.slideNumber[1] = 2;
slideShow.slideNumber[2] = 3;
slideShow.interval = 2000;

tablet.setOperationMode( initializeSlideShow(slideShow) );
```

<a id="ROM-Store-Reference"/>

---


## ROM Store Reference

### Description

ROM storage is allocated as follows:

| Image Type        | Description                                     |
|-------------------|-------------------------------------------------|
| PIN pad           | PIN pad mode image not-pushed (1 to 3) |
| PIN pad pushed    | PIN pad mode image pushed (1 to 3) |
| Slide             | Slide show image (1 to 10) |
| Key pad           | Key pad mode image not-pushed (1 to 3) |
| Key pad pushed    | Key pad mode image pushed (1 to 3) |
| Signature         | Signature mode image not-pushed (1 to 3) |
| Signature pushed  | Signature mode image pushed (1 to 3) |
| Message           | MessageBox Image (1 to 6) |


### Validate a stored ROM Image

##### Compute hash for required image
Compute the MD5 hash of the required image, for example by using an encryption library function.  

##### Get hash for stored image
Retrieve the hash in two steps:  
&nbsp;  
**1. Request operation:**


| Item              | Message                                                  |
|-------------------|----------------------------------------------------------|
| Operation Mode    | Mode 1...5 |
| Image design      | Image design number |
| Image pushed      | 0/1: non-pushed/pushed image (0 for MessageBox images)  |
| Result            | **0:** Succeeded (image was stored) &nbsp;&nbsp; **1:** No image stored |
&nbsp;  

**2. Get operation:**

| Item              | Message                                                       |
|-------------------|---------------------------------------------------------------|
| Operation Mode    | Mode 1...5 |
| Image design      | Image design number |
| Image pushed      | 0/1: non-pushed/pushed image design (0 for MessageBox images) |
| Hash              | 128 bit hash |

### Upload image

Upload an image if no image is stored or the calculated and retrieved hash values do not match.  
Image data is sent in three steps:  
* Start ROM Image Data
* Write Image Data
* End Image Data

The Tablet interface simplifies the process with a single writeRomImage function.
##### Start ROM Data:

| Item                | Message                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| Encoding mode       | 0x04: 24bit Color RAW data format   0x14 24bit Color RAW data format (Bulk) |
| Operation Mode      | Mode 1..5: &nbsp;&nbsp; **1:** _PIN Pad mode_&nbsp;&nbsp; **2:** _Slide show mode_ &nbsp;&nbsp; **3:** _Key Pad mode_ &nbsp;&nbsp;**4:** _Signature mode_ &nbsp;&nbsp; **5:** _MessageBox_ |
| Image design        | Image design number |
| Image pushed        | 0/1: non-pushed/pushed image design (0 for MessageBox images) |
| Image Descriptor    | Defined for each image type |


##### Write Image data:

| Item              | Message                                                  |
|-------------------|----------------------------------------------------------|
| Data Block Size   | Number of bytes |
| Image Data        | Image data 


##### End Image Data:

| Item              | Message                                                  |
|-------------------|----------------------------------------------------------|
| Commit Flag       | 0/1: Commit/Abandon  |


#### Start ROM Image Descriptors

#### PIN Pad

| Item                           | Description                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| Image design number            | Image design number 1..3 |
| PIN pad normal image           | Image data includes normal buttons, initial message, PIN code display fonts and background image  |
| PIN pad buttons pushed image   | Image data includes pushed buttons, error message and background image |
| PIN pad type                   | Keypad type 1..3 |
| Key layout                     | Round Robin or specific key layout 0..5 |


#### Slide Show


| Item             | Description                                        |
|------------------|----------------------------------------------------|
| Image format     | Bitmap (24bit color, 16bit color, Monochrome) |
| Image resolution | 800 x 480 dots  |

#### Key Pad

| Item                           | Description                                                                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Image design number            | Image design number 1..3 |
| Normal Key Pad screen          | Image data includes normal buttons, initial message and background image  |
| Button pushed Key Pad screen   | Image data includes pushed buttons and background image  |
| KEY Pad type                   | Type 1..3 |
| KEYs Enabled setting           | The bitmask (1..9) allows individual keys/buttons to be enabled (1) or disabled (0):&nbsp;&nbsp; **Bit 0:** key1 &nbsp;&nbsp;**Bit 1:** key2 &nbsp;&nbsp;**Bit 2:** key3 etc.  |

#### Signature Capture

| Item                             | Description                                                                                                                                       |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Image design number              | Image design number 1..3 |
| Signature screen (Normal)        | Image data includes normal buttons, initial message and background image  |
| Signature screen (button pushed) | Image data includes pushed buttons and background image  |
| KEYs Enabled setting             | The bitmask (1..3) allows individual keys/buttons to be enabled (1) or disabled (0): &nbsp;&nbsp; **Bit 0:** key1 - _Cancel_&nbsp;&nbsp; **Bit 1:** key2 - _Clear_&nbsp;&nbsp; **Bit 2:** key3 - _OK_ |

#### Message Box


| Item                | Message                                 |
|---------------------|-----------------------------------------|
| Message Box number  | Message ID 1..10 |
| Message screen      | Message screen image data |

### API Reference

| Function             | Description                 |
|----------------------|-----------------------------|
| getRomImageHash      | Tablet get hash function |
| writeRomImage        | Tablet write ROM functions |


#### Code illustration

##### Upload Image

The code illustrates uploading a SlideShow image
```csharp
uploadImage(...)
{
writeImage = true;

// get the hash of the image stored in ROM (if it exists) 
tablet.setRomImageHash(operationModeType, imageType, imageNumber);
romImgHash = tablet.getRomImageHash();

if (romImgHash.result == 0)
  {
    // there is already an image on the tablet - check it is the right one
    // compute hash of the required image
    imgHash = getImageHash(bitmapData.data(), bitmapData.size());           
    if (imgHash == romImgHash.hash)
    {
      // image matches, no need to write it again
      writeImage = false;
    }
  }

if (writeImage)
  {
  romStartImageData = initializeSlideShow(encodingMode, imageType, imageNumber);    
  tablet.writeRomImage(romStartImageData, bitmapData.data(), bitmapData.size());
  }
}
```

---
 






