---
id: ink-sdk
title: WILL SDK for ink
---

## Does a WILL 2.0 data file include pressure data?

No pressure data is recorded in WILL 2.0 files.

Here is how the SDK works:

**_PressurePathBuilder_**

Input (containing x, y and pressure) ---> is passed to the PressurePathBuilder ---> Produces output (containing X, Y and Size) ---> Output is saved in .will file.

**_SpeedPathBuilder_**

Input (containing x, y and timestamp) ---> is passed to the SpeedPathBuilder ---> Produces output (containing X, Y and Size) ---> Output is saved in .will file

In both cases the output looks the same and it contains neither pressure, nor timestamp values.

The operation of transforming the data from pressure/timestamp to size is irreversible and there is no way to get pressure information from the file.

---

## Web tutorial: shows a black screen

Most probably you are trying to access tutorials from your filesystem. The browser throws a security exception because the Ink Engine loads local resources.

#### Solution

The recommended solution is to execute examples in a web environment. You need a simple http server.

In the samples folder you can execute:
```
     python -m SimpleHTTPServer 8080
```

This is simplest way to start a server without any configuration. Then access it under http://localhost:8080

An alternative solution is to tell the browser to skip security restrictions.

**NOTE** This solution is not recommended because the modified browser settings could later become a security issue.

#### Under Mozilla Firefox
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set the security.fileuri.strict_origin_policy parameter to false.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To do this, enter **about:config** in the address bar, then search for the parameter.

#### Under Google Chrome
     Start the executable with the following parameter:  
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    **_chrome --allow-file-access-from-files_**

## Web tutorial: handling a WILL file

Due to the specifics of the web architecture there is no support for the WILL file contents.

The only way to get the information from the file is to extract its contents.

#### Solution

While the Web SDK does not have support for the WILL file format, it provides InkEncoder and InkDecoder classes that can access the protobuf data from the file.

For more information about the structure of the file see [WILL File Format](/sdk-for-ink/)

Also we highly recommend you to check 2.2 (Stroke serialization) from the examples which can be found in the downloaded SDK.

---
