---
id: app-signpro-v4
title: sign pro PDF - v4
---

## sign pro PDF version 4 FAQs

## **--- Installation and startup issues ---**

## Installation failed

Run the installer on Win 10 where sign pro pdf has not been previously installed.
The installation wizard fails with the log file showing:
```
Error 0x800700e8: Failed to wait for child to connect to pipe.
Error 0x800700e8: Failed to connect to elevated child process.
Error 0x800700e8: Failed to actually elevate.
Error 0x800700e8: Failed to elevate.
```

*Solution*

The error sometimes occurs due to anti-virus software. Please check if anti-virus is active before running installer. If so, disable before re-testing.

The error has been encountered when running Avast Antivirus.
When the antivirus is disabled the installer works as expected.
---
## Why is the default Licensing Mode not restored after uninstall/reinstall?

The default Lite License is not restored after applying an Enterprise license, then uninstalling and reinstalling the application.

*Solution*

The license is stored with other settings in a configuration file **user.config** in the user's hidden AppData folder, for example:
```
C:\Users\John.Smith\AppData\Local\Wacom\Sign_Pro_PDF.exe_Url_igtiubau4uwtwrhohq5zt1pkyv0afibn\4.1.3.0
```

The application is designed to retain the user settings (including the license). This avoids settings being lost when a different user uninstalls then reinstalls the application

---
---
