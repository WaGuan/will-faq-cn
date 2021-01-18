@set @junk=1 /* harmless set command starts commenting batch file commands when the file is used as javascript source
@echo off
setlocal
REM Run the 32-bit version of cscript (needed for default 32-bit Wacom ActiveX installations)
if defined ProgramFiles(x86) ( set APP=%SystemRoot%\SysWOW64\cscript ) else ( set APP=cscript )

call %APP% //nologo //E:jscript %0 %*
pause
goto :eof
*/


/*
  Javascript
  Captures a signature and creates encoded image file sig.png
  Optionally a different filename can be supplied as an argument
  e.g. sign myfile.png
  
*/
function print( txt ) {
  WScript.Echo(txt);
}
main();
function main() {
  filename = "sig.png";
  args = WScript.Arguments;
  if(args.Count() > 0 )
    filename=args(0);
  sigCtl = new ActiveXObject("Florentis.SigCtl");
  sigCtl.Licence = "AgBBALDf2MgEBVdhY29tI1NESyBFdmFsdWF0aW9uICsgZXhwaXJlcyAyMDE4LzAzLzMxAwKBAgJkAAAIAwEDZQAGgQAEtqgAAA";
  dynCapt = new ActiveXObject("Florentis.DynamicCapture");
  rc = dynCapt.Capture(sigCtl,"Who","Why");
  if( rc == 0 ) {
    flags = 0x1000 | 0x80000 | 0x400000; //SigObj.outputFilename | SigObj.color32BPP | SigObj.encodeData
    rc = sigCtl.Signature.RenderBitmap(filename, 300, 150, "image/png", 0.5, 0xff0000, 0xffffff, 0.0, 0.0, flags );
    print("Created Signature image file: " + filename);
  }
  else {
    print("Capture returned: " + rc);
    switch(rc) {
      case 1:   print("Cancelled");
                break;
      case 100: print("Signature tablet not found");
                break;
      case 103: print("Capture not licensed");
                break;
    }
  }
}

