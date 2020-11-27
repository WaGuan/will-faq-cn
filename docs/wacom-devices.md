---
id: wacom-devices
title: Wacom Devices
---
# Wacom.Devices

*This is a test page from Visual Studio - generate markdown from the IntelliSense XML file*

## Contents

- [AuthorizeResult](#T-Wacom-Devices-Internal-SmartPad-AuthorizeResult 'Wacom.Devices.Internal.SmartPad.AuthorizeResult')
  - [ConfirmationTimeout](#F-Wacom-Devices-Internal-SmartPad-AuthorizeResult-ConfirmationTimeout 'Wacom.Devices.Internal.SmartPad.AuthorizeResult.ConfirmationTimeout')
  - [Success](#F-Wacom-Devices-Internal-SmartPad-AuthorizeResult-Success 'Wacom.Devices.Internal.SmartPad.AuthorizeResult.Success')
- [BarcodeScannedEventArgs](#T-Wacom-Devices-BarcodeScannedEventArgs 'Wacom.Devices.BarcodeScannedEventArgs')
  - [BarcodeData](#P-Wacom-Devices-BarcodeScannedEventArgs-BarcodeData 'Wacom.Devices.BarcodeScannedEventArgs.BarcodeData')
- [BatteryState](#T-Wacom-Devices-Types-SmartPad-BatteryState 'Wacom.Devices.Types.SmartPad.BatteryState')
  - [IsCharging](#P-Wacom-Devices-Types-SmartPad-BatteryState-IsCharging 'Wacom.Devices.Types.SmartPad.BatteryState.IsCharging')
  - [Percentage](#P-Wacom-Devices-Types-SmartPad-BatteryState-Percentage 'Wacom.Devices.Types.SmartPad.BatteryState.Percentage')
  - [ToString()](#M-Wacom-Devices-Types-SmartPad-BatteryState-ToString 'Wacom.Devices.Types.SmartPad.BatteryState.ToString')
- [BatteryStateChangedEventArgs](#T-Wacom-Devices-BatteryStateChangedEventArgs 'Wacom.Devices.BatteryStateChangedEventArgs')
  - [BatteryPercent](#P-Wacom-Devices-BatteryStateChangedEventArgs-BatteryPercent 'Wacom.Devices.BatteryStateChangedEventArgs.BatteryPercent')
  - [IsCharging](#P-Wacom-Devices-BatteryStateChangedEventArgs-IsCharging 'Wacom.Devices.BatteryStateChangedEventArgs.IsCharging')
- [BleAdvertisingMode](#T-Wacom-Devices-Internal-BleAdvertisingMode 'Wacom.Devices.Internal.BleAdvertisingMode')
  - [DataSessionReady](#F-Wacom-Devices-Internal-BleAdvertisingMode-DataSessionReady 'Wacom.Devices.Internal.BleAdvertisingMode.DataSessionReady')
  - [None](#F-Wacom-Devices-Internal-BleAdvertisingMode-None 'Wacom.Devices.Internal.BleAdvertisingMode.None')
  - [UserConfirmation](#F-Wacom-Devices-Internal-BleAdvertisingMode-UserConfirmation 'Wacom.Devices.Internal.BleAdvertisingMode.UserConfirmation')
- [BootScreenFlag](#T-Wacom-Devices-Types-STU-BootScreenFlag 'Wacom.Devices.Types.STU.BootScreenFlag')
- [CRC32](#T-Wacom-Devices-Internal-SmartPad-CRC32 'Wacom.Devices.Internal.SmartPad.CRC32')
  - [CalculateCRC(lCRC,sData,iDataLength)](#M-Wacom-Devices-Internal-SmartPad-CRC32-CalculateCRC-System-Int64,System-Byte[],System-Int32- 'Wacom.Devices.Internal.SmartPad.CRC32.CalculateCRC(System.Int64,System.Byte[],System.Int32)')
  - [FullCRC(sData,iDataLength)](#M-Wacom-Devices-Internal-SmartPad-CRC32-FullCRC-System-Byte[],System-Int32- 'Wacom.Devices.Internal.SmartPad.CRC32.FullCRC(System.Byte[],System.Int32)')
  - [Init()](#M-Wacom-Devices-Internal-SmartPad-CRC32-Init 'Wacom.Devices.Internal.SmartPad.CRC32.Init')
  - [Reflect(iReflect,iValue)](#M-Wacom-Devices-Internal-SmartPad-CRC32-Reflect-System-Int32,System-Int32- 'Wacom.Devices.Internal.SmartPad.CRC32.Reflect(System.Int32,System.Int32)')
- [Capability](#T-Wacom-Devices-Internal-STU-Capability 'Wacom.Devices.Internal.STU.Capability')
- [Capability](#T-Wacom-Devices-Types-STU-Capability 'Wacom.Devices.Types.STU.Capability')
  - [#ctor()](#M-Wacom-Devices-Internal-STU-Capability-#ctor-System-Byte[]- 'Wacom.Devices.Internal.STU.Capability.#ctor(System.Byte[])')
  - [screenHeight](#F-Wacom-Devices-Internal-STU-Capability-screenHeight 'Wacom.Devices.Internal.STU.Capability.screenHeight')
  - [screenWidth](#F-Wacom-Devices-Internal-STU-Capability-screenWidth 'Wacom.Devices.Internal.STU.Capability.screenWidth')
  - [tabletMaxPressure](#F-Wacom-Devices-Internal-STU-Capability-tabletMaxPressure 'Wacom.Devices.Internal.STU.Capability.tabletMaxPressure')
  - [tabletMaxY](#F-Wacom-Devices-Internal-STU-Capability-tabletMaxY 'Wacom.Devices.Internal.STU.Capability.tabletMaxY')
  - [ToString()](#M-Wacom-Devices-Types-STU-Capability-ToString 'Wacom.Devices.Types.STU.Capability.ToString')
- [CheckAuthorizationResult](#T-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult 'Wacom.Devices.Internal.SmartPad.CheckAuthorizationResult')
  - [NotRecognized_DataReady](#F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-NotRecognized_DataReady 'Wacom.Devices.Internal.SmartPad.CheckAuthorizationResult.NotRecognized_DataReady')
  - [NotRecognized_UserConfirmation](#F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-NotRecognized_UserConfirmation 'Wacom.Devices.Internal.SmartPad.CheckAuthorizationResult.NotRecognized_UserConfirmation')
  - [Recognized_DataReady](#F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-Recognized_DataReady 'Wacom.Devices.Internal.SmartPad.CheckAuthorizationResult.Recognized_DataReady')
  - [Recognized_UserConfirmation](#F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-Recognized_UserConfirmation 'Wacom.Devices.Internal.SmartPad.CheckAuthorizationResult.Recognized_UserConfirmation')
- [CommandNotSupportedException](#T-Wacom-Devices-CommandNotSupportedException 'Wacom.Devices.CommandNotSupportedException')
- [DERParser](#T-Wacom-Devices-Internal-DERParser 'Wacom.Devices.Internal.DERParser')
  - [ParsePkcs1RsaPublicKey(buffer)](#M-Wacom-Devices-Internal-DERParser-ParsePkcs1RsaPublicKey-Windows-Storage-Streams-IBuffer- 'Wacom.Devices.Internal.DERParser.ParsePkcs1RsaPublicKey(Windows.Storage.Streams.IBuffer)')
- [DataEncryption](#T-Wacom-Devices-Types-SmartPad-DataEncryption 'Wacom.Devices.Types.SmartPad.DataEncryption')
- [Device](#T-Wacom-Devices-Notification-Device 'Wacom.Devices.Notification.Device')
- [Device](#T-Wacom-Devices-Properties-Device 'Wacom.Devices.Properties.Device')
  - [BarcodeScanned](#F-Wacom-Devices-Notification-Device-BarcodeScanned 'Wacom.Devices.Notification.Device.BarcodeScanned')
  - [BatteryStateChanged](#F-Wacom-Devices-Notification-Device-BatteryStateChanged 'Wacom.Devices.Notification.Device.BatteryStateChanged')
  - [SmartPad_DeviceStatusChanged](#F-Wacom-Devices-Notification-Device-SmartPad_DeviceStatusChanged 'Wacom.Devices.Notification.Device.SmartPad_DeviceStatusChanged')
  - [FirmwareVersion](#F-Wacom-Devices-Properties-Device-FirmwareVersion 'Wacom.Devices.Properties.Device.FirmwareVersion')
  - [Height](#F-Wacom-Devices-Properties-Device-Height 'Wacom.Devices.Properties.Device.Height')
  - [HidInformation](#F-Wacom-Devices-Properties-Device-HidInformation 'Wacom.Devices.Properties.Device.HidInformation')
  - [Name](#F-Wacom-Devices-Properties-Device-Name 'Wacom.Devices.Properties.Device.Name')
  - [SerialNumber](#F-Wacom-Devices-Properties-Device-SerialNumber 'Wacom.Devices.Properties.Device.SerialNumber')
  - [Width](#F-Wacom-Devices-Properties-Device-Width 'Wacom.Devices.Properties.Device.Width')
- [DeviceModel](#T-Wacom-Devices-DeviceModel 'Wacom.Devices.DeviceModel')
  - [BambooSlate](#F-Wacom-Devices-DeviceModel-BambooSlate 'Wacom.Devices.DeviceModel.BambooSlate')
  - [BambooSpark](#F-Wacom-Devices-DeviceModel-BambooSpark 'Wacom.Devices.DeviceModel.BambooSpark')
  - [IntuosPro](#F-Wacom-Devices-DeviceModel-IntuosPro 'Wacom.Devices.DeviceModel.IntuosPro')
  - [Phu111](#F-Wacom-Devices-DeviceModel-Phu111 'Wacom.Devices.DeviceModel.Phu111')
  - [STU](#F-Wacom-Devices-DeviceModel-STU 'Wacom.Devices.DeviceModel.STU')
  - [SecureSTU](#F-Wacom-Devices-DeviceModel-SecureSTU 'Wacom.Devices.DeviceModel.SecureSTU')
  - [SketchpadPro](#F-Wacom-Devices-DeviceModel-SketchpadPro 'Wacom.Devices.DeviceModel.SketchpadPro')
  - [Unknown](#F-Wacom-Devices-DeviceModel-Unknown 'Wacom.Devices.DeviceModel.Unknown')
- [DeviceNotRespondingException](#T-Wacom-Devices-DeviceNotRespondingException 'Wacom.Devices.DeviceNotRespondingException')
- [DeviceState](#T-Wacom-Devices-Internal-SmartPad-DeviceState 'Wacom.Devices.Internal.SmartPad.DeviceState')
  - [FileTransfer](#F-Wacom-Devices-Internal-SmartPad-DeviceState-FileTransfer 'Wacom.Devices.Internal.SmartPad.DeviceState.FileTransfer')
  - [Ready](#F-Wacom-Devices-Internal-SmartPad-DeviceState-Ready 'Wacom.Devices.Internal.SmartPad.DeviceState.Ready')
  - [RealTime](#F-Wacom-Devices-Internal-SmartPad-DeviceState-RealTime 'Wacom.Devices.Internal.SmartPad.DeviceState.RealTime')
- [DeviceStatus](#T-Wacom-Devices-DeviceStatus 'Wacom.Devices.DeviceStatus')
  - [CapturingRealTimeInk](#F-Wacom-Devices-DeviceStatus-CapturingRealTimeInk 'Wacom.Devices.DeviceStatus.CapturingRealTimeInk')
  - [ExpectingConnectionConfirmation](#F-Wacom-Devices-DeviceStatus-ExpectingConnectionConfirmation 'Wacom.Devices.DeviceStatus.ExpectingConnectionConfirmation')
  - [ExpectingReconnect](#F-Wacom-Devices-DeviceStatus-ExpectingReconnect 'Wacom.Devices.DeviceStatus.ExpectingReconnect')
  - [ExpectingUserConfirmationMode](#F-Wacom-Devices-DeviceStatus-ExpectingUserConfirmationMode 'Wacom.Devices.DeviceStatus.ExpectingUserConfirmationMode')
  - [Idle](#F-Wacom-Devices-DeviceStatus-Idle 'Wacom.Devices.DeviceStatus.Idle')
  - [NotAuthorizedConnectionNotConfirmed](#F-Wacom-Devices-DeviceStatus-NotAuthorizedConnectionNotConfirmed 'Wacom.Devices.DeviceStatus.NotAuthorizedConnectionNotConfirmed')
  - [NotAuthorizedDeviceInUseByAnotherHost](#F-Wacom-Devices-DeviceStatus-NotAuthorizedDeviceInUseByAnotherHost 'Wacom.Devices.DeviceStatus.NotAuthorizedDeviceInUseByAnotherHost')
  - [NotAuthorizedDeviceUnreachable](#F-Wacom-Devices-DeviceStatus-NotAuthorizedDeviceUnreachable 'Wacom.Devices.DeviceStatus.NotAuthorizedDeviceUnreachable')
  - [NotAuthorizedGeneralError](#F-Wacom-Devices-DeviceStatus-NotAuthorizedGeneralError 'Wacom.Devices.DeviceStatus.NotAuthorizedGeneralError')
  - [Reconnecting](#F-Wacom-Devices-DeviceStatus-Reconnecting 'Wacom.Devices.DeviceStatus.Reconnecting')
  - [Syncing](#F-Wacom-Devices-DeviceStatus-Syncing 'Wacom.Devices.DeviceStatus.Syncing')
- [DeviceStatusChangedEventArgs](#T-Wacom-Devices-DeviceStatusChangedEventArgs 'Wacom.Devices.DeviceStatusChangedEventArgs')
  - [PreviousStatus](#P-Wacom-Devices-DeviceStatusChangedEventArgs-PreviousStatus 'Wacom.Devices.DeviceStatusChangedEventArgs.PreviousStatus')
  - [Status](#P-Wacom-Devices-DeviceStatusChangedEventArgs-Status 'Wacom.Devices.DeviceStatusChangedEventArgs.Status')
- [DeviceUnreachableException](#T-Wacom-Devices-DeviceUnreachableException 'Wacom.Devices.DeviceUnreachableException')
- [Digitizer](#T-Wacom-Devices-Properties-Digitizer 'Wacom.Devices.Properties.Digitizer')
  - [Height](#F-Wacom-Devices-Properties-Digitizer-Height 'Wacom.Devices.Properties.Digitizer.Height')
  - [Resolution](#F-Wacom-Devices-Properties-Digitizer-Resolution 'Wacom.Devices.Properties.Digitizer.Resolution')
  - [SamplingRate](#F-Wacom-Devices-Properties-Digitizer-SamplingRate 'Wacom.Devices.Properties.Digitizer.SamplingRate')
  - [Width](#F-Wacom-Devices-Properties-Digitizer-Width 'Wacom.Devices.Properties.Digitizer.Width')
- [DisplayType](#T-Wacom-Devices-Types-DisplayType 'Wacom.Devices.Types.DisplayType')
  - [Discrete](#F-Wacom-Devices-Types-DisplayType-Discrete 'Wacom.Devices.Types.DisplayType.Discrete')
  - [Integrated](#F-Wacom-Devices-Types-DisplayType-Integrated 'Wacom.Devices.Types.DisplayType.Integrated')
  - [None](#F-Wacom-Devices-Types-DisplayType-None 'Wacom.Devices.Types.DisplayType.None')
- [DownloadInProgressException](#T-Wacom-Devices-DownloadInProgressException 'Wacom.Devices.DownloadInProgressException')
- [EncodingMode](#T-Wacom-Devices-Internal-STU-EncodingMode 'Wacom.Devices.Internal.STU.EncodingMode')
  - [RAW_16bit](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_16bit 'Wacom.Devices.Internal.STU.EncodingMode.RAW_16bit')
  - [RAW_16bit_Bulk](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_16bit_Bulk 'Wacom.Devices.Internal.STU.EncodingMode.RAW_16bit_Bulk')
  - [RAW_1bit](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_1bit 'Wacom.Devices.Internal.STU.EncodingMode.RAW_1bit')
  - [RAW_1bit_Bulk](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_1bit_Bulk 'Wacom.Devices.Internal.STU.EncodingMode.RAW_1bit_Bulk')
  - [RAW_24bit](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_24bit 'Wacom.Devices.Internal.STU.EncodingMode.RAW_24bit')
  - [RAW_24bit_Bulk](#F-Wacom-Devices-Internal-STU-EncodingMode-RAW_24bit_Bulk 'Wacom.Devices.Internal.STU.EncodingMode.RAW_24bit_Bulk')
  - [Zlib_16bit](#F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_16bit 'Wacom.Devices.Internal.STU.EncodingMode.Zlib_16bit')
  - [Zlib_1bit](#F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_1bit 'Wacom.Devices.Internal.STU.EncodingMode.Zlib_1bit')
  - [Zlib_24bit](#F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_24bit 'Wacom.Devices.Internal.STU.EncodingMode.Zlib_24bit')
- [EncryptionCommand](#T-Wacom-Devices-Internal-STU-EncryptionCommand 'Wacom.Devices.Internal.STU.EncryptionCommand')
  - [CreateGenerateSymmetricKey()](#M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateGenerateSymmetricKey 'Wacom.Devices.Internal.STU.EncryptionCommand.CreateGenerateSymmetricKey')
  - [CreateGetParameterBlock(index,offset)](#M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateGetParameterBlock-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex,System-Byte- 'Wacom.Devices.Internal.STU.EncryptionCommand.CreateGetParameterBlock(Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex,System.Byte)')
  - [CreateSetEncryptionType(symmetricKeyType,asymmetricPaddingType,asymmetricKeyType)](#M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateSetEncryptionType-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType- 'Wacom.Devices.Internal.STU.EncryptionCommand.CreateSetEncryptionType(Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType)')
  - [CreateSetParameterBlock(index,data,offset,length)](#M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateSetParameterBlock-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex,System-Byte[],System-Int32,System-Int32- 'Wacom.Devices.Internal.STU.EncryptionCommand.CreateSetParameterBlock(Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex,System.Byte[],System.Int32,System.Int32)')
- [EncryptionImpl](#T-Wacom-Devices-Internal-STU-EncryptionImpl 'Wacom.Devices.Internal.STU.EncryptionImpl')
  - [#ctor(tablet,symmetricKeyType,asymmetricKeyType,asymmetricPaddingType)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-#ctor-Wacom-Devices-Internal-STU-Tablet,Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType- 'Wacom.Devices.Internal.STU.EncryptionImpl.#ctor(Wacom.Devices.Internal.STU.Tablet,Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType)')
  - [CipherSuite](#P-Wacom-Devices-Internal-STU-EncryptionImpl-CipherSuite 'Wacom.Devices.Internal.STU.EncryptionImpl.CipherSuite')
  - [AesDecrypt(encrypted,size,decrypted)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-AesDecrypt-System-Byte[],System-Int32,System-Byte[]@- 'Wacom.Devices.Internal.STU.EncryptionImpl.AesDecrypt(System.Byte[],System.Int32,System.Byte[]@)')
  - [DecryptSessionKey(data)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-DecryptSessionKey-System-Byte[]- 'Wacom.Devices.Internal.STU.EncryptionImpl.DecryptSessionKey(System.Byte[])')
  - [InitializeEncryption(ct)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-InitializeEncryption-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.EncryptionImpl.InitializeEncryption(System.Threading.CancellationToken)')
  - [OnEncryptionStatus(eventData)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-OnEncryptionStatus-Wacom-Devices-Internal-STU-EncryptionStatus- 'Wacom.Devices.Internal.STU.EncryptionImpl.OnEncryptionStatus(Wacom.Devices.Internal.STU.EncryptionStatus)')
  - [ReinitializeEncryption(ct)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-ReinitializeEncryption-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.EncryptionImpl.ReinitializeEncryption(System.Threading.CancellationToken)')
  - [StartEncryption(ct)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-StartEncryption-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.EncryptionImpl.StartEncryption(System.Threading.CancellationToken)')
  - [StartEncryption(symmetricKeyType,asymmetricKeyType,asymmetricPaddingType,ct)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-StartEncryption-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.EncryptionImpl.StartEncryption(Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType,Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType,System.Threading.CancellationToken)')
  - [StopEncryption(ct)](#M-Wacom-Devices-Internal-STU-EncryptionImpl-StopEncryption-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.EncryptionImpl.StopEncryption(System.Threading.CancellationToken)')
- [EncryptionStatus](#T-Wacom-Devices-Internal-STU-EncryptionStatus 'Wacom.Devices.Internal.STU.EncryptionStatus')
  - [#ctor(data,offset)](#M-Wacom-Devices-Internal-STU-EncryptionStatus-#ctor-System-Byte[],System-Int32- 'Wacom.Devices.Internal.STU.EncryptionStatus.#ctor(System.Byte[],System.Int32)')
- [EndImageDataFlag](#T-Wacom-Devices-Internal-STU-EndImageDataFlag 'Wacom.Devices.Internal.STU.EndImageDataFlag')
  - [Abandon](#F-Wacom-Devices-Internal-STU-EndImageDataFlag-Abandon 'Wacom.Devices.Internal.STU.EndImageDataFlag.Abandon')
  - [Commit](#F-Wacom-Devices-Internal-STU-EndImageDataFlag-Commit 'Wacom.Devices.Internal.STU.EndImageDataFlag.Commit')
- [ErrorCode](#T-Wacom-Devices-Types-STU-Status-ErrorCode 'Wacom.Devices.Types.STU.Status.ErrorCode')
  - [BadParameter](#F-Wacom-Devices-Types-STU-Status-ErrorCode-BadParameter 'Wacom.Devices.Types.STU.Status.ErrorCode.BadParameter')
  - [CRC](#F-Wacom-Devices-Types-STU-Status-ErrorCode-CRC 'Wacom.Devices.Types.STU.Status.ErrorCode.CRC')
  - [GraphicsImageTooLong](#F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsImageTooLong 'Wacom.Devices.Types.STU.Status.ErrorCode.GraphicsImageTooLong')
  - [GraphicsWrongEncodingType](#F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsWrongEncodingType 'Wacom.Devices.Types.STU.Status.ErrorCode.GraphicsWrongEncodingType')
  - [GraphicsWrongParameters](#F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsWrongParameters 'Wacom.Devices.Types.STU.Status.ErrorCode.GraphicsWrongParameters')
  - [GraphicsZlibError](#F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsZlibError 'Wacom.Devices.Types.STU.Status.ErrorCode.GraphicsZlibError')
  - [None](#F-Wacom-Devices-Types-STU-Status-ErrorCode-None 'Wacom.Devices.Types.STU.Status.ErrorCode.None')
  - [PadNotExist](#F-Wacom-Devices-Types-STU-Status-ErrorCode-PadNotExist 'Wacom.Devices.Types.STU.Status.ErrorCode.PadNotExist')
  - [RomErrorCRC](#F-Wacom-Devices-Types-STU-Status-ErrorCode-RomErrorCRC 'Wacom.Devices.Types.STU.Status.ErrorCode.RomErrorCRC')
  - [RomInvalidParameter](#F-Wacom-Devices-Types-STU-Status-ErrorCode-RomInvalidParameter 'Wacom.Devices.Types.STU.Status.ErrorCode.RomInvalidParameter')
  - [RomSizeOverflow](#F-Wacom-Devices-Types-STU-Status-ErrorCode-RomSizeOverflow 'Wacom.Devices.Types.STU.Status.ErrorCode.RomSizeOverflow')
  - [WrongReportId](#F-Wacom-Devices-Types-STU-Status-ErrorCode-WrongReportId 'Wacom.Devices.Types.STU.Status.ErrorCode.WrongReportId')
  - [WrongState](#F-Wacom-Devices-Types-STU-Status-ErrorCode-WrongState 'Wacom.Devices.Types.STU.Status.ErrorCode.WrongState')
- [FeatureReport_CurrentMessageImageArea](#T-Wacom-Devices-Internal-STU-FeatureReport_CurrentMessageImageArea 'Wacom.Devices.Internal.STU.FeatureReport_CurrentMessageImageArea')
- [FileTransferControlOptions](#T-Wacom-Devices-FileTransferControlOptions 'Wacom.Devices.FileTransferControlOptions')
  - [Cancel](#F-Wacom-Devices-FileTransferControlOptions-Cancel 'Wacom.Devices.FileTransferControlOptions.Cancel')
  - [Continue](#F-Wacom-Devices-FileTransferControlOptions-Continue 'Wacom.Devices.FileTransferControlOptions.Continue')
  - [Retry](#F-Wacom-Devices-FileTransferControlOptions-Retry 'Wacom.Devices.FileTransferControlOptions.Retry')
- [FileTransferException](#T-Wacom-Devices-FileTransferException 'Wacom.Devices.FileTransferException')
- [HandwritingInkThicknessColor](#T-Wacom-Devices-Types-STU-HandwritingInkThicknessColor 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor')
  - [#ctor(color,thickness)](#M-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-#ctor-System-Drawing-Color,Wacom-Devices-Types-STU-InkThickness- 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor.#ctor(System.Drawing.Color,Wacom.Devices.Types.STU.InkThickness)')
  - [Color](#P-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-Color 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor.Color')
  - [Thickness](#P-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-Thickness 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor.Thickness')
  - [ToString()](#M-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-ToString 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor.ToString')
- [HidInformation](#T-Wacom-Devices-Types-STU-HidInformation 'Wacom.Devices.Types.STU.HidInformation')
  - [bcdDevice](#F-Wacom-Devices-Types-STU-HidInformation-bcdDevice 'Wacom.Devices.Types.STU.HidInformation.bcdDevice')
  - [idProduct](#F-Wacom-Devices-Types-STU-HidInformation-idProduct 'Wacom.Devices.Types.STU.HidInformation.idProduct')
  - [idVendor](#F-Wacom-Devices-Types-STU-HidInformation-idVendor 'Wacom.Devices.Types.STU.HidInformation.idVendor')
- [IDigitalInkDevice](#T-Wacom-Devices-IDigitalInkDevice 'Wacom.Devices.IDigitalInkDevice')
  - [DeviceModel](#P-Wacom-Devices-IDigitalInkDevice-DeviceModel 'Wacom.Devices.IDigitalInkDevice.DeviceModel')
  - [TransportProtocol](#P-Wacom-Devices-IDigitalInkDevice-TransportProtocol 'Wacom.Devices.IDigitalInkDevice.TransportProtocol')
  - [Close()](#M-Wacom-Devices-IDigitalInkDevice-Close 'Wacom.Devices.IDigitalInkDevice.Close')
  - [GetNotification\`\`1(notificationId)](#M-Wacom-Devices-IDigitalInkDevice-GetNotification``1-System-String- 'Wacom.Devices.IDigitalInkDevice.GetNotification``1(System.String)')
  - [GetPropertyAsync(propertyName,ct)](#M-Wacom-Devices-IDigitalInkDevice-GetPropertyAsync-System-String,System-Threading-CancellationToken- 'Wacom.Devices.IDigitalInkDevice.GetPropertyAsync(System.String,System.Threading.CancellationToken)')
  - [GetService(serviceId)](#M-Wacom-Devices-IDigitalInkDevice-GetService-System-String- 'Wacom.Devices.IDigitalInkDevice.GetService(System.String)')
  - [SetPropertyAsync(propertyName,value,ct)](#M-Wacom-Devices-IDigitalInkDevice-SetPropertyAsync-System-String,System-Object,System-Threading-CancellationToken- 'Wacom.Devices.IDigitalInkDevice.SetPropertyAsync(System.String,System.Object,System.Threading.CancellationToken)')
- [IDiscreteDisplayService](#T-Wacom-Devices-IDiscreteDisplayService 'Wacom.Devices.IDiscreteDisplayService')
  - [HeightPixels](#P-Wacom-Devices-IDiscreteDisplayService-HeightPixels 'Wacom.Devices.IDiscreteDisplayService.HeightPixels')
  - [IsInking](#P-Wacom-Devices-IDiscreteDisplayService-IsInking 'Wacom.Devices.IDiscreteDisplayService.IsInking')
  - [PixelFormat](#P-Wacom-Devices-IDiscreteDisplayService-PixelFormat 'Wacom.Devices.IDiscreteDisplayService.PixelFormat')
  - [SupportsInking](#P-Wacom-Devices-IDiscreteDisplayService-SupportsInking 'Wacom.Devices.IDiscreteDisplayService.SupportsInking')
  - [WidthPixels](#P-Wacom-Devices-IDiscreteDisplayService-WidthPixels 'Wacom.Devices.IDiscreteDisplayService.WidthPixels')
  - [ClearScreenAsync(color,area,ct)](#M-Wacom-Devices-IDiscreteDisplayService-ClearScreenAsync-System-Drawing-Color,System-Drawing-Rectangle,System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.ClearScreenAsync(System.Drawing.Color,System.Drawing.Rectangle,System.Threading.CancellationToken)')
  - [DisableInkingAsync(ct)](#M-Wacom-Devices-IDiscreteDisplayService-DisableInkingAsync-System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.DisableInkingAsync(System.Threading.CancellationToken)')
  - [DrawImage(image,source,target,ct)](#M-Wacom-Devices-IDiscreteDisplayService-DrawImage-System-Drawing-Bitmap,System-Drawing-Rectangle,System-Drawing-Rectangle,System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.DrawImage(System.Drawing.Bitmap,System.Drawing.Rectangle,System.Drawing.Rectangle,System.Threading.CancellationToken)')
  - [EnableInkingAsync(area,ct)](#M-Wacom-Devices-IDiscreteDisplayService-EnableInkingAsync-System-Drawing-Rectangle,System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.EnableInkingAsync(System.Drawing.Rectangle,System.Threading.CancellationToken)')
  - [GetInkColorAsync(ct)](#M-Wacom-Devices-IDiscreteDisplayService-GetInkColorAsync-System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.GetInkColorAsync(System.Threading.CancellationToken)')
  - [SetInkColorAsync(inkColor,ct)](#M-Wacom-Devices-IDiscreteDisplayService-SetInkColorAsync-System-Drawing-Color,System-Threading-CancellationToken- 'Wacom.Devices.IDiscreteDisplayService.SetInkColorAsync(System.Drawing.Color,System.Threading.CancellationToken)')
- [IEncryptionService](#T-Wacom-Devices-IEncryptionService 'Wacom.Devices.IEncryptionService')
  - [CipherSuite](#P-Wacom-Devices-IEncryptionService-CipherSuite 'Wacom.Devices.IEncryptionService.CipherSuite')
  - [StartAsync(ct)](#M-Wacom-Devices-IEncryptionService-StartAsync-System-Threading-CancellationToken- 'Wacom.Devices.IEncryptionService.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync(ct)](#M-Wacom-Devices-IEncryptionService-StopAsync-System-Threading-CancellationToken- 'Wacom.Devices.IEncryptionService.StopAsync(System.Threading.CancellationToken)')
- [IFileTransferService](#T-Wacom-Devices-IFileTransferService 'Wacom.Devices.IFileTransferService')
  - [SyncInterval](#P-Wacom-Devices-IFileTransferService-SyncInterval 'Wacom.Devices.IFileTransferService.SyncInterval')
  - [Transform](#P-Wacom-Devices-IFileTransferService-Transform 'Wacom.Devices.IFileTransferService.Transform')
  - [StartAsync(receiveFilesDelegate,ct)](#M-Wacom-Devices-IFileTransferService-StartAsync-Wacom-Devices-ReceiveFileAsync,System-Threading-CancellationToken- 'Wacom.Devices.IFileTransferService.StartAsync(Wacom.Devices.ReceiveFileAsync,System.Threading.CancellationToken)')
  - [StopAsync(ct)](#M-Wacom-Devices-IFileTransferService-StopAsync-System-Threading-CancellationToken- 'Wacom.Devices.IFileTransferService.StopAsync(System.Threading.CancellationToken)')
- [IInkDeviceInfo](#T-Wacom-Devices-IInkDeviceInfo 'Wacom.Devices.IInkDeviceInfo')
  - [DeviceModel](#P-Wacom-Devices-IInkDeviceInfo-DeviceModel 'Wacom.Devices.IInkDeviceInfo.DeviceModel')
  - [DeviceName](#P-Wacom-Devices-IInkDeviceInfo-DeviceName 'Wacom.Devices.IInkDeviceInfo.DeviceName')
  - [Id](#P-Wacom-Devices-IInkDeviceInfo-Id 'Wacom.Devices.IInkDeviceInfo.Id')
  - [TransportProtocol](#P-Wacom-Devices-IInkDeviceInfo-TransportProtocol 'Wacom.Devices.IInkDeviceInfo.TransportProtocol')
  - [ToStream(stream)](#M-Wacom-Devices-IInkDeviceInfo-ToStream-System-IO-Stream- 'Wacom.Devices.IInkDeviceInfo.ToStream(System.IO.Stream)')
- [IInkDeviceNotification\`1](#T-Wacom-Devices-IInkDeviceNotification`1 'Wacom.Devices.IInkDeviceNotification`1')
- [IInkDeviceService](#T-Wacom-Devices-IInkDeviceService 'Wacom.Devices.IInkDeviceService')
  - [IsStarted](#P-Wacom-Devices-IInkDeviceService-IsStarted 'Wacom.Devices.IInkDeviceService.IsStarted')
- [IInkDeviceWatcher](#T-Wacom-Devices-IInkDeviceWatcher 'Wacom.Devices.IInkDeviceWatcher')
  - [Start()](#M-Wacom-Devices-IInkDeviceWatcher-Start 'Wacom.Devices.IInkDeviceWatcher.Start')
  - [Stop()](#M-Wacom-Devices-IInkDeviceWatcher-Stop 'Wacom.Devices.IInkDeviceWatcher.Stop')
- [IInkDeviceWatcherBLE](#T-Wacom-Devices-IInkDeviceWatcherBLE 'Wacom.Devices.IInkDeviceWatcherBLE')
  - [PollingInterval](#P-Wacom-Devices-IInkDeviceWatcherBLE-PollingInterval 'Wacom.Devices.IInkDeviceWatcherBLE.PollingInterval')
  - [Status](#P-Wacom-Devices-IInkDeviceWatcherBLE-Status 'Wacom.Devices.IInkDeviceWatcherBLE.Status')
- [IInkDeviceWatcherBTC](#T-Wacom-Devices-IInkDeviceWatcherBTC 'Wacom.Devices.IInkDeviceWatcherBTC')
  - [Status](#P-Wacom-Devices-IInkDeviceWatcherBTC-Status 'Wacom.Devices.IInkDeviceWatcherBTC.Status')
- [IInkDeviceWatcherUSB](#T-Wacom-Devices-IInkDeviceWatcherUSB 'Wacom.Devices.IInkDeviceWatcherUSB')
  - [Status](#P-Wacom-Devices-IInkDeviceWatcherUSB-Status 'Wacom.Devices.IInkDeviceWatcherUSB.Status')
- [IInkDocument](#T-Wacom-Devices-IInkDocument 'Wacom.Devices.IInkDocument')
  - [CreationDate](#P-Wacom-Devices-IInkDocument-CreationDate 'Wacom.Devices.IInkDocument.CreationDate')
  - [Layers](#P-Wacom-Devices-IInkDocument-Layers 'Wacom.Devices.IInkDocument.Layers')
- [IInkDocumentLayer](#T-Wacom-Devices-IInkDocumentLayer 'Wacom.Devices.IInkDocumentLayer')
  - [Strokes](#P-Wacom-Devices-IInkDocumentLayer-Strokes 'Wacom.Devices.IInkDocumentLayer.Strokes')
- [IInkDocumentPoint](#T-Wacom-Devices-IInkDocumentPoint 'Wacom.Devices.IInkDocumentPoint')
  - [Point](#P-Wacom-Devices-IInkDocumentPoint-Point 'Wacom.Devices.IInkDocumentPoint.Point')
  - [Pressure](#P-Wacom-Devices-IInkDocumentPoint-Pressure 'Wacom.Devices.IInkDocumentPoint.Pressure')
  - [Valid](#P-Wacom-Devices-IInkDocumentPoint-Valid 'Wacom.Devices.IInkDocumentPoint.Valid')
- [IInkDocumentStroke](#T-Wacom-Devices-IInkDocumentStroke 'Wacom.Devices.IInkDocumentStroke')
  - [PenId](#P-Wacom-Devices-IInkDocumentStroke-PenId 'Wacom.Devices.IInkDocumentStroke.PenId')
  - [PenType](#P-Wacom-Devices-IInkDocumentStroke-PenType 'Wacom.Devices.IInkDocumentStroke.PenType')
  - [Points](#P-Wacom-Devices-IInkDocumentStroke-Points 'Wacom.Devices.IInkDocumentStroke.Points')
  - [Timestamp](#P-Wacom-Devices-IInkDocumentStroke-Timestamp 'Wacom.Devices.IInkDocumentStroke.Timestamp')
- [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')
  - [Log(logLevel,messageFunc,exception,formatParameters)](#M-Wacom-Devices-Logging-ILog-Log-Wacom-Devices-Logging-LogLevel,System-Func{System-String},System-Exception,System-Object[]- 'Wacom.Devices.Logging.ILog.Log(Wacom.Devices.Logging.LogLevel,System.Func{System.String},System.Exception,System.Object[])')
- [ILogProvider](#T-Wacom-Devices-Logging-ILogProvider 'Wacom.Devices.Logging.ILogProvider')
  - [GetLogger(name)](#M-Wacom-Devices-Logging-ILogProvider-GetLogger-System-String- 'Wacom.Devices.Logging.ILogProvider.GetLogger(System.String)')
  - [OpenMappedContext(key,value,destructure)](#M-Wacom-Devices-Logging-ILogProvider-OpenMappedContext-System-String,System-Object,System-Boolean- 'Wacom.Devices.Logging.ILogProvider.OpenMappedContext(System.String,System.Object,System.Boolean)')
  - [OpenNestedContext(message)](#M-Wacom-Devices-Logging-ILogProvider-OpenNestedContext-System-String- 'Wacom.Devices.Logging.ILogProvider.OpenNestedContext(System.String)')
- [IPairingModeService](#T-Wacom-Devices-IPairingModeService 'Wacom.Devices.IPairingModeService')
  - [PairingModeEnabledCallback](#P-Wacom-Devices-IPairingModeService-PairingModeEnabledCallback 'Wacom.Devices.IPairingModeService.PairingModeEnabledCallback')
- [IRealTimeInkService](#T-Wacom-Devices-IRealTimeInkService 'Wacom.Devices.IRealTimeInkService')
  - [PointTransform](#P-Wacom-Devices-IRealTimeInkService-PointTransform 'Wacom.Devices.IRealTimeInkService.PointTransform')
  - [StartAsync(ct)](#M-Wacom-Devices-IRealTimeInkService-StartAsync-System-Threading-CancellationToken- 'Wacom.Devices.IRealTimeInkService.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync(ct)](#M-Wacom-Devices-IRealTimeInkService-StopAsync-System-Threading-CancellationToken- 'Wacom.Devices.IRealTimeInkService.StopAsync(System.Threading.CancellationToken)')
- [Information](#T-Wacom-Devices-Types-STU-Information 'Wacom.Devices.Types.STU.Information')
  - [ToString()](#M-Wacom-Devices-Types-STU-Information-ToString 'Wacom.Devices.Types.STU.Information.ToString')
- [InkDeviceFactory](#T-Wacom-Devices-InkDeviceFactory 'Wacom.Devices.InkDeviceFactory')
  - [Instance](#F-Wacom-Devices-InkDeviceFactory-Instance 'Wacom.Devices.InkDeviceFactory.Instance')
  - [CheckDeviceIsLicensed(devInfo)](#M-Wacom-Devices-InkDeviceFactory-CheckDeviceIsLicensed-Wacom-Devices-IInkDeviceInfo- 'Wacom.Devices.InkDeviceFactory.CheckDeviceIsLicensed(Wacom.Devices.IInkDeviceInfo)')
  - [CreateDeviceAsync(info,appId,authorize,enableEncryption,deviceStatusChangedHandler,pairingModeEnabledCallback)](#M-Wacom-Devices-InkDeviceFactory-CreateDeviceAsync-Wacom-Devices-IInkDeviceInfo,Wacom-Devices-IApplicationIdentifier,System-Boolean,System-Boolean,System-EventHandler{Wacom-Devices-DeviceStatusChangedEventArgs},Wacom-Devices-PairingModeEnabledCallback- 'Wacom.Devices.InkDeviceFactory.CreateDeviceAsync(Wacom.Devices.IInkDeviceInfo,Wacom.Devices.IApplicationIdentifier,System.Boolean,System.Boolean,System.EventHandler{Wacom.Devices.DeviceStatusChangedEventArgs},Wacom.Devices.PairingModeEnabledCallback)')
- [InkDeviceInfo](#T-Wacom-Devices-InkDeviceInfo 'Wacom.Devices.InkDeviceInfo')
  - [FromIdAsync(deviceId,transportProtocol,deviceModel)](#M-Wacom-Devices-InkDeviceInfo-FromIdAsync-System-String,Wacom-Devices-TransportProtocol,Wacom-Devices-DeviceModel- 'Wacom.Devices.InkDeviceInfo.FromIdAsync(System.String,Wacom.Devices.TransportProtocol,Wacom.Devices.DeviceModel)')
  - [FromStreamAsync(stream)](#M-Wacom-Devices-InkDeviceInfo-FromStreamAsync-System-IO-Stream- 'Wacom.Devices.InkDeviceInfo.FromStreamAsync(System.IO.Stream)')
- [InkDeviceService](#T-Wacom-Devices-InkDeviceService 'Wacom.Devices.InkDeviceService')
  - [DiscreteDisplay](#F-Wacom-Devices-InkDeviceService-DiscreteDisplay 'Wacom.Devices.InkDeviceService.DiscreteDisplay')
  - [Encryption](#F-Wacom-Devices-InkDeviceService-Encryption 'Wacom.Devices.InkDeviceService.Encryption')
  - [FileTransfer](#F-Wacom-Devices-InkDeviceService-FileTransfer 'Wacom.Devices.InkDeviceService.FileTransfer')
  - [PairingMode](#F-Wacom-Devices-InkDeviceService-PairingMode 'Wacom.Devices.InkDeviceService.PairingMode')
  - [RealTimeInk](#F-Wacom-Devices-InkDeviceService-RealTimeInk 'Wacom.Devices.InkDeviceService.RealTimeInk')
- [InkDeviceWatcher](#T-Wacom-Devices-InkDeviceWatcher 'Wacom.Devices.InkDeviceWatcher')
  - [BLE](#P-Wacom-Devices-InkDeviceWatcher-BLE 'Wacom.Devices.InkDeviceWatcher.BLE')
  - [BTC](#P-Wacom-Devices-InkDeviceWatcher-BTC 'Wacom.Devices.InkDeviceWatcher.BTC')
  - [USB](#P-Wacom-Devices-InkDeviceWatcher-USB 'Wacom.Devices.InkDeviceWatcher.USB')
- [InkDeviceWatcherBLEImpl](#T-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl')
  - [#ctor()](#M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-#ctor 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl.#ctor')
  - [PollingInterval](#P-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-PollingInterval 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl.PollingInterval')
  - [Status](#P-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Status 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl.Status')
  - [Start()](#M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Start 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl.Start')
  - [Stop()](#M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Stop 'Wacom.Devices.Internal.InkDeviceWatcherBLEImpl.Stop')
- [InkDeviceWatcherBTCImpl](#T-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl 'Wacom.Devices.Internal.InkDeviceWatcherBTCImpl')
  - [#ctor()](#M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-#ctor 'Wacom.Devices.Internal.InkDeviceWatcherBTCImpl.#ctor')
  - [Status](#P-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Status 'Wacom.Devices.Internal.InkDeviceWatcherBTCImpl.Status')
  - [Start()](#M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Start 'Wacom.Devices.Internal.InkDeviceWatcherBTCImpl.Start')
  - [Stop()](#M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Stop 'Wacom.Devices.Internal.InkDeviceWatcherBTCImpl.Stop')
- [InkDeviceWatcherUSBImpl](#T-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl 'Wacom.Devices.Internal.InkDeviceWatcherUSBImpl')
  - [#ctor()](#M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-#ctor 'Wacom.Devices.Internal.InkDeviceWatcherUSBImpl.#ctor')
  - [Status](#P-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Status 'Wacom.Devices.Internal.InkDeviceWatcherUSBImpl.Status')
  - [Start()](#M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Start 'Wacom.Devices.Internal.InkDeviceWatcherUSBImpl.Start')
  - [Stop()](#M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Stop 'Wacom.Devices.Internal.InkDeviceWatcherUSBImpl.Stop')
- [InkThickness](#T-Wacom-Devices-Internal-STU-InkThickness 'Wacom.Devices.Internal.STU.InkThickness')
- [InkThickness](#T-Wacom-Devices-Types-STU-InkThickness 'Wacom.Devices.Types.STU.InkThickness')
  - [Bold](#F-Wacom-Devices-Internal-STU-InkThickness-Bold 'Wacom.Devices.Internal.STU.InkThickness.Bold')
  - [Medium](#F-Wacom-Devices-Internal-STU-InkThickness-Medium 'Wacom.Devices.Internal.STU.InkThickness.Medium')
  - [Thin](#F-Wacom-Devices-Internal-STU-InkThickness-Thin 'Wacom.Devices.Internal.STU.InkThickness.Thin')
  - [VeryThin](#F-Wacom-Devices-Internal-STU-InkThickness-VeryThin 'Wacom.Devices.Internal.STU.InkThickness.VeryThin')
  - [Bold](#F-Wacom-Devices-Types-STU-InkThickness-Bold 'Wacom.Devices.Types.STU.InkThickness.Bold')
  - [Medium](#F-Wacom-Devices-Types-STU-InkThickness-Medium 'Wacom.Devices.Types.STU.InkThickness.Medium')
  - [Thin](#F-Wacom-Devices-Types-STU-InkThickness-Thin 'Wacom.Devices.Types.STU.InkThickness.Thin')
  - [VeryThin](#F-Wacom-Devices-Types-STU-InkThickness-VeryThin 'Wacom.Devices.Types.STU.InkThickness.VeryThin')
- [InkThreshold](#T-Wacom-Devices-Types-STU-InkThreshold 'Wacom.Devices.Types.STU.InkThreshold')
  - [#ctor(on,off)](#M-Wacom-Devices-Types-STU-InkThreshold-#ctor-System-UInt16,System-UInt16- 'Wacom.Devices.Types.STU.InkThreshold.#ctor(System.UInt16,System.UInt16)')
  - [OffPressureMark](#P-Wacom-Devices-Types-STU-InkThreshold-OffPressureMark 'Wacom.Devices.Types.STU.InkThreshold.OffPressureMark')
  - [OnPressureMark](#P-Wacom-Devices-Types-STU-InkThreshold-OnPressureMark 'Wacom.Devices.Types.STU.InkThreshold.OnPressureMark')
  - [ToString()](#M-Wacom-Devices-Types-STU-InkThreshold-ToString 'Wacom.Devices.Types.STU.InkThreshold.ToString')
- [InkingMode](#T-Wacom-Devices-Types-STU-InkingMode 'Wacom.Devices.Types.STU.InkingMode')
- [InvalidFileFormatException](#T-Wacom-Devices-InvalidFileFormatException 'Wacom.Devices.InvalidFileFormatException')
- [InvalidStateException](#T-Wacom-Devices-InvalidStateException 'Wacom.Devices.InvalidStateException')
- [LibLogException](#T-Wacom-Devices-Logging-LogProviders-LibLogException 'Wacom.Devices.Logging.LogProviders.LibLogException')
  - [#ctor(message)](#M-Wacom-Devices-Logging-LogProviders-LibLogException-#ctor-System-String- 'Wacom.Devices.Logging.LogProviders.LibLogException.#ctor(System.String)')
  - [#ctor(message,inner)](#M-Wacom-Devices-Logging-LogProviders-LibLogException-#ctor-System-String,System-Exception- 'Wacom.Devices.Logging.LogProviders.LibLogException.#ctor(System.String,System.Exception)')
- [LogExtensions](#T-Wacom-Devices-Logging-LogExtensions 'Wacom.Devices.Logging.LogExtensions')
  - [Debug(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Debug(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Debug(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Debug(Wacom.Devices.Logging.ILog,System.String)')
  - [Debug(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Debug(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Debug(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Debug(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [DebugException(logger,message,exception)](#M-Wacom-Devices-Logging-LogExtensions-DebugException-Wacom-Devices-Logging-ILog,System-String,System-Exception- 'Wacom.Devices.Logging.LogExtensions.DebugException(Wacom.Devices.Logging.ILog,System.String,System.Exception)')
  - [DebugException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-DebugException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.DebugException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [DebugFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-DebugFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.DebugFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Error(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Error(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Error(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Error(Wacom.Devices.Logging.ILog,System.String)')
  - [Error(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Error(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Error(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Error(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [ErrorException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-ErrorException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.ErrorException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [ErrorFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-ErrorFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.ErrorFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Fatal(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Fatal(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Fatal(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Fatal(Wacom.Devices.Logging.ILog,System.String)')
  - [Fatal(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Fatal(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Fatal(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Fatal(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [FatalException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-FatalException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.FatalException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [FatalFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-FatalFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.FatalFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Info(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Info(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Info(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Info(Wacom.Devices.Logging.ILog,System.String)')
  - [Info(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Info(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Info(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Info(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [InfoException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-InfoException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.InfoException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [InfoFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-InfoFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.InfoFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [IsDebugEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsDebugEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsDebugEnabled(Wacom.Devices.Logging.ILog)')
  - [IsErrorEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsErrorEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsErrorEnabled(Wacom.Devices.Logging.ILog)')
  - [IsFatalEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsFatalEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsFatalEnabled(Wacom.Devices.Logging.ILog)')
  - [IsInfoEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsInfoEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsInfoEnabled(Wacom.Devices.Logging.ILog)')
  - [IsTraceEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsTraceEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsTraceEnabled(Wacom.Devices.Logging.ILog)')
  - [IsWarnEnabled(logger)](#M-Wacom-Devices-Logging-LogExtensions-IsWarnEnabled-Wacom-Devices-Logging-ILog- 'Wacom.Devices.Logging.LogExtensions.IsWarnEnabled(Wacom.Devices.Logging.ILog)')
  - [Trace(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Trace(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Trace(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Trace(Wacom.Devices.Logging.ILog,System.String)')
  - [Trace(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Trace(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Trace(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Trace(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [TraceException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-TraceException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.TraceException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [TraceFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-TraceFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.TraceFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Warn(logger,messageFunc)](#M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-Func{System-String}- 'Wacom.Devices.Logging.LogExtensions.Warn(Wacom.Devices.Logging.ILog,System.Func{System.String})')
  - [Warn(logger,message)](#M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-String- 'Wacom.Devices.Logging.LogExtensions.Warn(Wacom.Devices.Logging.ILog,System.String)')
  - [Warn(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Warn(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
  - [Warn(logger,exception,message,args)](#M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.Warn(Wacom.Devices.Logging.ILog,System.Exception,System.String,System.Object[])')
  - [WarnException(logger,message,exception,args)](#M-Wacom-Devices-Logging-LogExtensions-WarnException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.WarnException(Wacom.Devices.Logging.ILog,System.String,System.Exception,System.Object[])')
  - [WarnFormat(logger,message,args)](#M-Wacom-Devices-Logging-LogExtensions-WarnFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]- 'Wacom.Devices.Logging.LogExtensions.WarnFormat(Wacom.Devices.Logging.ILog,System.String,System.Object[])')
- [LogLevel](#T-Wacom-Devices-Logging-LogLevel 'Wacom.Devices.Logging.LogLevel')
  - [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug')
  - [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error')
  - [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal')
  - [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info')
  - [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace')
  - [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn')
- [LogMessageFormatter](#T-Wacom-Devices-Logging-LogProviders-LogMessageFormatter 'Wacom.Devices.Logging.LogProviders.LogMessageFormatter')
  - [SimulateStructuredLogging(messageBuilder,formatParameters)](#M-Wacom-Devices-Logging-LogProviders-LogMessageFormatter-SimulateStructuredLogging-System-Func{System-String},System-Object[]- 'Wacom.Devices.Logging.LogProviders.LogMessageFormatter.SimulateStructuredLogging(System.Func{System.String},System.Object[])')
- [LogProvider](#T-Wacom-Devices-Logging-LogProvider 'Wacom.Devices.Logging.LogProvider')
  - [IsDisabled](#P-Wacom-Devices-Logging-LogProvider-IsDisabled 'Wacom.Devices.Logging.LogProvider.IsDisabled')
  - [OnCurrentLogProviderSet](#P-Wacom-Devices-Logging-LogProvider-OnCurrentLogProviderSet 'Wacom.Devices.Logging.LogProvider.OnCurrentLogProviderSet')
  - [For\`\`1()](#M-Wacom-Devices-Logging-LogProvider-For``1 'Wacom.Devices.Logging.LogProvider.For``1')
  - [GetCurrentClassLogger()](#M-Wacom-Devices-Logging-LogProvider-GetCurrentClassLogger 'Wacom.Devices.Logging.LogProvider.GetCurrentClassLogger')
  - [GetLogger(type,fallbackTypeName)](#M-Wacom-Devices-Logging-LogProvider-GetLogger-System-Type,System-String- 'Wacom.Devices.Logging.LogProvider.GetLogger(System.Type,System.String)')
  - [GetLogger(name)](#M-Wacom-Devices-Logging-LogProvider-GetLogger-System-String- 'Wacom.Devices.Logging.LogProvider.GetLogger(System.String)')
  - [OpenMappedContext(key,value,destructure)](#M-Wacom-Devices-Logging-LogProvider-OpenMappedContext-System-String,System-Object,System-Boolean- 'Wacom.Devices.Logging.LogProvider.OpenMappedContext(System.String,System.Object,System.Boolean)')
  - [OpenNestedContext(message)](#M-Wacom-Devices-Logging-LogProvider-OpenNestedContext-System-String- 'Wacom.Devices.Logging.LogProvider.OpenNestedContext(System.String)')
  - [SetCurrentLogProvider(logProvider)](#M-Wacom-Devices-Logging-LogProvider-SetCurrentLogProvider-Wacom-Devices-Logging-ILogProvider- 'Wacom.Devices.Logging.LogProvider.SetCurrentLogProvider(Wacom.Devices.Logging.ILogProvider)')
- [LogProviderBase](#T-Wacom-Devices-Logging-LogProviders-LogProviderBase 'Wacom.Devices.Logging.LogProviders.LogProviderBase')
  - [#ctor()](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-#ctor 'Wacom.Devices.Logging.LogProviders.LogProviderBase.#ctor')
  - [ErrorInitializingProvider](#F-Wacom-Devices-Logging-LogProviders-LogProviderBase-ErrorInitializingProvider 'Wacom.Devices.Logging.LogProviders.LogProviderBase.ErrorInitializingProvider')
  - [FindType(typeName,assemblyName)](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-FindType-System-String,System-String- 'Wacom.Devices.Logging.LogProviders.LogProviderBase.FindType(System.String,System.String)')
  - [FindType(typeName,assemblyNames)](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-FindType-System-String,System-Collections-Generic-IReadOnlyList{System-String}- 'Wacom.Devices.Logging.LogProviders.LogProviderBase.FindType(System.String,System.Collections.Generic.IReadOnlyList{System.String})')
  - [GetLogger(name)](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetLogger-System-String- 'Wacom.Devices.Logging.LogProviders.LogProviderBase.GetLogger(System.String)')
  - [GetOpenMdcMethod()](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetOpenMdcMethod 'Wacom.Devices.Logging.LogProviders.LogProviderBase.GetOpenMdcMethod')
  - [GetOpenNdcMethod()](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetOpenNdcMethod 'Wacom.Devices.Logging.LogProviders.LogProviderBase.GetOpenNdcMethod')
  - [OpenMappedContext(key,value,destructure)](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenMappedContext-System-String,System-Object,System-Boolean- 'Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenMappedContext(System.String,System.Object,System.Boolean)')
  - [OpenNestedContext(message)](#M-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenNestedContext-System-String- 'Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenNestedContext(System.String)')
- [Logger](#T-Wacom-Devices-Logging-Logger 'Wacom.Devices.Logging.Logger')
- [LoupeLogProvider](#T-Wacom-Devices-Logging-LogProviders-LoupeLogProvider 'Wacom.Devices.Logging.LogProviders.LoupeLogProvider')
  - [ProviderIsAvailableOverride](#P-Wacom-Devices-Logging-LogProviders-LoupeLogProvider-ProviderIsAvailableOverride 'Wacom.Devices.Logging.LogProviders.LoupeLogProvider.ProviderIsAvailableOverride')
- [Notification](#T-Wacom-Devices-Notification 'Wacom.Devices.Notification')
- [Notifications](#T-Wacom-Devices-Types-SmartPad-Notifications 'Wacom.Devices.Types.SmartPad.Notifications')
- [OpenMdc](#T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenMdc 'Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenMdc')
- [OpenNdc](#T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenNdc 'Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenNdc')
- [OperationMode](#T-Wacom-Devices-Internal-STU-OperationMode 'Wacom.Devices.Internal.STU.OperationMode')
  - [CreateKeyPad()](#M-Wacom-Devices-Internal-STU-OperationMode-CreateKeyPad-System-Byte,System-Byte- 'Wacom.Devices.Internal.STU.OperationMode.CreateKeyPad(System.Byte,System.Byte)')
- [PairingModeEnabledCallback](#T-Wacom-Devices-PairingModeEnabledCallback 'Wacom.Devices.PairingModeEnabledCallback')
- [ParameterNotSupportedException](#T-Wacom-Devices-ParameterNotSupportedException 'Wacom.Devices.ParameterNotSupportedException')
- [PenDataOptionMode](#T-Wacom-Devices-Internal-STU-PenDataOptionMode 'Wacom.Devices.Internal.STU.PenDataOptionMode')
- [PenDataOptionMode](#T-Wacom-Devices-Types-STU-PenDataOptionMode 'Wacom.Devices.Types.STU.PenDataOptionMode')
  - [None](#F-Wacom-Devices-Internal-STU-PenDataOptionMode-None 'Wacom.Devices.Internal.STU.PenDataOptionMode.None')
  - [SequenceNumber](#F-Wacom-Devices-Internal-STU-PenDataOptionMode-SequenceNumber 'Wacom.Devices.Internal.STU.PenDataOptionMode.SequenceNumber')
  - [TimeCount](#F-Wacom-Devices-Internal-STU-PenDataOptionMode-TimeCount 'Wacom.Devices.Internal.STU.PenDataOptionMode.TimeCount')
  - [TimeCountSequence](#F-Wacom-Devices-Internal-STU-PenDataOptionMode-TimeCountSequence 'Wacom.Devices.Internal.STU.PenDataOptionMode.TimeCountSequence')
  - [None](#F-Wacom-Devices-Types-STU-PenDataOptionMode-None 'Wacom.Devices.Types.STU.PenDataOptionMode.None')
  - [SequenceNumber](#F-Wacom-Devices-Types-STU-PenDataOptionMode-SequenceNumber 'Wacom.Devices.Types.STU.PenDataOptionMode.SequenceNumber')
  - [TimeCount](#F-Wacom-Devices-Types-STU-PenDataOptionMode-TimeCount 'Wacom.Devices.Types.STU.PenDataOptionMode.TimeCount')
  - [TimeCountSequence](#F-Wacom-Devices-Types-STU-PenDataOptionMode-TimeCountSequence 'Wacom.Devices.Types.STU.PenDataOptionMode.TimeCountSequence')
- [PenDetectedLedMode](#T-Wacom-Devices-Types-SmartPad-PenDetectedLedMode 'Wacom.Devices.Types.SmartPad.PenDetectedLedMode')
  - [Fast](#F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-Fast 'Wacom.Devices.Types.SmartPad.PenDetectedLedMode.Fast')
  - [None](#F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-None 'Wacom.Devices.Types.SmartPad.PenDetectedLedMode.None')
  - [Slow](#F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-Slow 'Wacom.Devices.Types.SmartPad.PenDetectedLedMode.Slow')
- [PenDetectedSound](#T-Wacom-Devices-Types-SmartPad-PenDetectedSound 'Wacom.Devices.Types.SmartPad.PenDetectedSound')
  - [None](#F-Wacom-Devices-Types-SmartPad-PenDetectedSound-None 'Wacom.Devices.Types.SmartPad.PenDetectedSound.None')
  - [Sound1](#F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound1 'Wacom.Devices.Types.SmartPad.PenDetectedSound.Sound1')
  - [Sound2](#F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound2 'Wacom.Devices.Types.SmartPad.PenDetectedSound.Sound2')
  - [Sound3](#F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound3 'Wacom.Devices.Types.SmartPad.PenDetectedSound.Sound3')
- [PenDetectedVolume](#T-Wacom-Devices-Types-SmartPad-PenDetectedVolume 'Wacom.Devices.Types.SmartPad.PenDetectedVolume')
  - [High](#F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-High 'Wacom.Devices.Types.SmartPad.PenDetectedVolume.High')
  - [Low](#F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-Low 'Wacom.Devices.Types.SmartPad.PenDetectedVolume.Low')
  - [Med](#F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-Med 'Wacom.Devices.Types.SmartPad.PenDetectedVolume.Med')
  - [None](#F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-None 'Wacom.Devices.Types.SmartPad.PenDetectedVolume.None')
- [Protocol](#T-Wacom-Devices-Internal-STU-Protocol 'Wacom.Devices.Internal.STU.Protocol')
  - [GetBacklightBrightnessAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetBacklightBrightnessAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetBacklightBrightnessAsync(System.Threading.CancellationToken)')
  - [GetInkThresholdAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetInkThresholdAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetInkThresholdAsync(System.Threading.CancellationToken)')
  - [GetInkingModeAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetInkingModeAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetInkingModeAsync(System.Threading.CancellationToken)')
  - [GetOperationModeAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetOperationModeAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetOperationModeAsync(System.Threading.CancellationToken)')
  - [GetPenDataOptionModeAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetPenDataOptionModeAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetPenDataOptionModeAsync(System.Threading.CancellationToken)')
  - [GetRenderingModeAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetRenderingModeAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetRenderingModeAsync(System.Threading.CancellationToken)')
  - [GetReportRateAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetReportRateAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetReportRateAsync(System.Threading.CancellationToken)')
  - [GetReportSizeCollectionAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetReportSizeCollectionAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetReportSizeCollectionAsync(System.Threading.CancellationToken)')
  - [GetRomImageHashAsync(ct)](#M-Wacom-Devices-Internal-STU-Protocol-GetRomImageHashAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.GetRomImageHashAsync(System.Threading.CancellationToken)')
  - [SetBacklightBrightnessAsync(brightness,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetBacklightBrightnessAsync-System-UInt16,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetBacklightBrightnessAsync(System.UInt16,System.Threading.CancellationToken)')
  - [SetInkThresholdAsync(onPressureMark,offPressureMark,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetInkThresholdAsync-System-UInt16,System-UInt16,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetInkThresholdAsync(System.UInt16,System.UInt16,System.Threading.CancellationToken)')
  - [SetInkingModeAsync(value,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetInkingModeAsync-Wacom-Devices-Internal-STU-InkingMode,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetInkingModeAsync(Wacom.Devices.Internal.STU.InkingMode,System.Threading.CancellationToken)')
  - [SetOperationModeAsync(value,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetOperationModeAsync-Wacom-Devices-Internal-STU-OperationMode,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetOperationModeAsync(Wacom.Devices.Internal.STU.OperationMode,System.Threading.CancellationToken)')
  - [SetPenDataOptionModeAsync(value,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetPenDataOptionModeAsync-Wacom-Devices-Internal-STU-PenDataOptionMode,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetPenDataOptionModeAsync(Wacom.Devices.Internal.STU.PenDataOptionMode,System.Threading.CancellationToken)')
  - [SetRenderingModeAsync(value,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetRenderingModeAsync-Wacom-Devices-Internal-STU-RenderingMode,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetRenderingModeAsync(Wacom.Devices.Internal.STU.RenderingMode,System.Threading.CancellationToken)')
  - [SetReportRateAsync(reportRate_,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetReportRateAsync-System-Byte,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetReportRateAsync(System.Byte,System.Threading.CancellationToken)')
  - [SetResetAsync(resetFlag,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetResetAsync-Wacom-Devices-Internal-STU-ResetFlag,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetResetAsync(Wacom.Devices.Internal.STU.ResetFlag,System.Threading.CancellationToken)')
  - [SetRomImageDeleteAsync(operationMode,imageType,imageNumber,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetRomImageDeleteAsync-Wacom-Devices-Internal-STU-RomImageDeleteMode,System-Boolean,System-Int32,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetRomImageDeleteAsync(Wacom.Devices.Internal.STU.RomImageDeleteMode,System.Boolean,System.Int32,System.Threading.CancellationToken)')
  - [SetRomImageDisplayAsync(operationMode,imageType,imageNumber,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetRomImageDisplayAsync-Wacom-Devices-Internal-STU-OperationMode-Type,System-Boolean,System-Int32,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetRomImageDisplayAsync(Wacom.Devices.Internal.STU.OperationMode.Type,System.Boolean,System.Int32,System.Threading.CancellationToken)')
  - [SetRomImageHashAsync(operationModeType,imageType,imageNumber,ct)](#M-Wacom-Devices-Internal-STU-Protocol-SetRomImageHashAsync-Wacom-Devices-Internal-STU-OperationMode-Type,System-Boolean,System-Int32,System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.Protocol.SetRomImageHashAsync(Wacom.Devices.Internal.STU.OperationMode.Type,System.Boolean,System.Int32,System.Threading.CancellationToken)')
- [ProtocolHelper](#T-Wacom-Devices-Internal-STU-ProtocolHelper 'Wacom.Devices.Internal.STU.ProtocolHelper')
  - [ReadRectangle(data,start)](#M-Wacom-Devices-Internal-STU-ProtocolHelper-ReadRectangle-System-Byte[],System-Int32- 'Wacom.Devices.Internal.STU.ProtocolHelper.ReadRectangle(System.Byte[],System.Int32)')
  - [WriteRectangle(area,data,start)](#M-Wacom-Devices-Internal-STU-ProtocolHelper-WriteRectangle-System-Drawing-Rectangle,System-Byte[],System-Int32- 'Wacom.Devices.Internal.STU.ProtocolHelper.WriteRectangle(System.Drawing.Rectangle,System.Byte[],System.Int32)')
- [ProtocolMode](#T-Wacom-Devices-Internal-STU-ProtocolMode 'Wacom.Devices.Internal.STU.ProtocolMode')
- [ProtocolMode](#T-Wacom-Devices-Types-STU-ProtocolMode 'Wacom.Devices.Types.STU.ProtocolMode')
  - [HID](#F-Wacom-Devices-Internal-STU-ProtocolMode-HID 'Wacom.Devices.Internal.STU.ProtocolMode.HID')
  - [Serial](#F-Wacom-Devices-Internal-STU-ProtocolMode-Serial 'Wacom.Devices.Internal.STU.ProtocolMode.Serial')
  - [HID](#F-Wacom-Devices-Types-STU-ProtocolMode-HID 'Wacom.Devices.Types.STU.ProtocolMode.HID')
  - [Serial](#F-Wacom-Devices-Types-STU-ProtocolMode-Serial 'Wacom.Devices.Types.STU.ProtocolMode.Serial')
- [RealTimePointPhase](#T-Wacom-Devices-RealTimePointPhase 'Wacom.Devices.RealTimePointPhase')
  - [BeginStroke](#F-Wacom-Devices-RealTimePointPhase-BeginStroke 'Wacom.Devices.RealTimePointPhase.BeginStroke')
  - [EndStroke](#F-Wacom-Devices-RealTimePointPhase-EndStroke 'Wacom.Devices.RealTimePointPhase.EndStroke')
  - [Hover](#F-Wacom-Devices-RealTimePointPhase-Hover 'Wacom.Devices.RealTimePointPhase.Hover')
  - [MoveStroke](#F-Wacom-Devices-RealTimePointPhase-MoveStroke 'Wacom.Devices.RealTimePointPhase.MoveStroke')
- [RealTimePointReceivedEventArgs](#T-Wacom-Devices-RealTimePointReceivedEventArgs 'Wacom.Devices.RealTimePointReceivedEventArgs')
  - [Phase](#P-Wacom-Devices-RealTimePointReceivedEventArgs-Phase 'Wacom.Devices.RealTimePointReceivedEventArgs.Phase')
  - [Point](#P-Wacom-Devices-RealTimePointReceivedEventArgs-Point 'Wacom.Devices.RealTimePointReceivedEventArgs.Point')
  - [Pressure](#P-Wacom-Devices-RealTimePointReceivedEventArgs-Pressure 'Wacom.Devices.RealTimePointReceivedEventArgs.Pressure')
  - [Timestamp](#P-Wacom-Devices-RealTimePointReceivedEventArgs-Timestamp 'Wacom.Devices.RealTimePointReceivedEventArgs.Timestamp')
- [ReceiveFileAsync](#T-Wacom-Devices-ReceiveFileAsync 'Wacom.Devices.ReceiveFileAsync')
- [RenderingMode](#T-Wacom-Devices-Types-STU-RenderingMode 'Wacom.Devices.Types.STU.RenderingMode')
  - [Normal](#F-Wacom-Devices-Types-STU-RenderingMode-Normal 'Wacom.Devices.Types.STU.RenderingMode.Normal')
  - [WILL](#F-Wacom-Devices-Types-STU-RenderingMode-WILL 'Wacom.Devices.Types.STU.RenderingMode.WILL')
- [ResetFlag](#T-Wacom-Devices-Internal-STU-ResetFlag 'Wacom.Devices.Internal.STU.ResetFlag')
  - [Hardware](#F-Wacom-Devices-Internal-STU-ResetFlag-Hardware 'Wacom.Devices.Internal.STU.ResetFlag.Hardware')
  - [Software](#F-Wacom-Devices-Internal-STU-ResetFlag-Software 'Wacom.Devices.Internal.STU.ResetFlag.Software')
- [STU](#T-Wacom-Devices-Properties-STU 'Wacom.Devices.Properties.STU')
  - [BackgroundColor](#F-Wacom-Devices-Properties-STU-BackgroundColor 'Wacom.Devices.Properties.STU.BackgroundColor')
  - [BacklightBrightness](#F-Wacom-Devices-Properties-STU-BacklightBrightness 'Wacom.Devices.Properties.STU.BacklightBrightness')
  - [BootScreen](#F-Wacom-Devices-Properties-STU-BootScreen 'Wacom.Devices.Properties.STU.BootScreen')
  - [Capability](#F-Wacom-Devices-Properties-STU-Capability 'Wacom.Devices.Properties.STU.Capability')
  - [CurrentMessageImageArea](#F-Wacom-Devices-Properties-STU-CurrentMessageImageArea 'Wacom.Devices.Properties.STU.CurrentMessageImageArea')
  - [DefaultMode](#F-Wacom-Devices-Properties-STU-DefaultMode 'Wacom.Devices.Properties.STU.DefaultMode')
  - [Eserial](#F-Wacom-Devices-Properties-STU-Eserial 'Wacom.Devices.Properties.STU.Eserial')
  - [HandwritingDisplayArea](#F-Wacom-Devices-Properties-STU-HandwritingDisplayArea 'Wacom.Devices.Properties.STU.HandwritingDisplayArea')
  - [HandwritingThicknessColor](#F-Wacom-Devices-Properties-STU-HandwritingThicknessColor 'Wacom.Devices.Properties.STU.HandwritingThicknessColor')
  - [Information](#F-Wacom-Devices-Properties-STU-Information 'Wacom.Devices.Properties.STU.Information')
  - [InkThreshold](#F-Wacom-Devices-Properties-STU-InkThreshold 'Wacom.Devices.Properties.STU.InkThreshold')
  - [InkingMode](#F-Wacom-Devices-Properties-STU-InkingMode 'Wacom.Devices.Properties.STU.InkingMode')
  - [PenDataOptionMode](#F-Wacom-Devices-Properties-STU-PenDataOptionMode 'Wacom.Devices.Properties.STU.PenDataOptionMode')
  - [RenderingMode](#F-Wacom-Devices-Properties-STU-RenderingMode 'Wacom.Devices.Properties.STU.RenderingMode')
  - [ScreenContrast](#F-Wacom-Devices-Properties-STU-ScreenContrast 'Wacom.Devices.Properties.STU.ScreenContrast')
  - [Status](#F-Wacom-Devices-Properties-STU-Status 'Wacom.Devices.Properties.STU.Status')
  - [Uid](#F-Wacom-Devices-Properties-STU-Uid 'Wacom.Devices.Properties.STU.Uid')
  - [Uid2](#F-Wacom-Devices-Properties-STU-Uid2 'Wacom.Devices.Properties.STU.Uid2')
- [STU_EncryptionService](#T-Wacom-Devices-Internal-STU-STU_EncryptionService 'Wacom.Devices.Internal.STU.STU_EncryptionService')
  - [CipherSuite](#P-Wacom-Devices-Internal-STU-STU_EncryptionService-CipherSuite 'Wacom.Devices.Internal.STU.STU_EncryptionService.CipherSuite')
  - [IsStarted](#P-Wacom-Devices-Internal-STU-STU_EncryptionService-IsStarted 'Wacom.Devices.Internal.STU.STU_EncryptionService.IsStarted')
  - [OnDisconnected()](#M-Wacom-Devices-Internal-STU-STU_EncryptionService-OnDisconnected 'Wacom.Devices.Internal.STU.STU_EncryptionService.OnDisconnected')
  - [StartAsync(ct)](#M-Wacom-Devices-Internal-STU-STU_EncryptionService-StartAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.STU_EncryptionService.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync(ct)](#M-Wacom-Devices-Internal-STU-STU_EncryptionService-StopAsync-System-Threading-CancellationToken- 'Wacom.Devices.Internal.STU.STU_EncryptionService.StopAsync(System.Threading.CancellationToken)')
- [Screen](#T-Wacom-Devices-Properties-Screen 'Wacom.Devices.Properties.Screen')
  - [Height](#F-Wacom-Devices-Properties-Screen-Height 'Wacom.Devices.Properties.Screen.Height')
  - [ResolutionX](#F-Wacom-Devices-Properties-Screen-ResolutionX 'Wacom.Devices.Properties.Screen.ResolutionX')
  - [ResolutionY](#F-Wacom-Devices-Properties-Screen-ResolutionY 'Wacom.Devices.Properties.Screen.ResolutionY')
  - [Type](#F-Wacom-Devices-Properties-Screen-Type 'Wacom.Devices.Properties.Screen.Type')
  - [Width](#F-Wacom-Devices-Properties-Screen-Width 'Wacom.Devices.Properties.Screen.Width')
- [SemaphoreSlimDisposableLock](#T-Wacom-Devices-Internal-SemaphoreSlimDisposableLock 'Wacom.Devices.Internal.SemaphoreSlimDisposableLock')
  - [LockAsync(semaphore,ct)](#M-Wacom-Devices-Internal-SemaphoreSlimDisposableLock-LockAsync-System-Threading-SemaphoreSlim,System-Threading-CancellationToken- 'Wacom.Devices.Internal.SemaphoreSlimDisposableLock.LockAsync(System.Threading.SemaphoreSlim,System.Threading.CancellationToken)')
- [ServiceErrorEventArgs](#T-Wacom-Devices-ServiceErrorEventArgs 'Wacom.Devices.ServiceErrorEventArgs')
  - [Exception](#P-Wacom-Devices-ServiceErrorEventArgs-Exception 'Wacom.Devices.ServiceErrorEventArgs.Exception')
- [ServiceReportingType](#T-Wacom-Devices-Types-SmartPad-ServiceReportingType 'Wacom.Devices.Types.SmartPad.ServiceReportingType')
- [SevenBitEncoder](#T-Wacom-Devices-Internal-SmartPad-SevenBitEncoder 'Wacom.Devices.Internal.SmartPad.SevenBitEncoder')
  - [Encode(src)](#M-Wacom-Devices-Internal-SmartPad-SevenBitEncoder-Encode-System-Byte[]- 'Wacom.Devices.Internal.SmartPad.SevenBitEncoder.Encode(System.Byte[])')
- [SmartPad](#T-Wacom-Devices-Properties-SmartPad 'Wacom.Devices.Properties.SmartPad')
  - [BatteryLevelReportChange](#F-Wacom-Devices-Properties-SmartPad-BatteryLevelReportChange 'Wacom.Devices.Properties.SmartPad.BatteryLevelReportChange')
  - [BatteryState](#F-Wacom-Devices-Properties-SmartPad-BatteryState 'Wacom.Devices.Properties.SmartPad.BatteryState')
  - [ConnectionInterval](#F-Wacom-Devices-Properties-SmartPad-ConnectionInterval 'Wacom.Devices.Properties.SmartPad.ConnectionInterval')
  - [DataSessionAcceptDuration](#F-Wacom-Devices-Properties-SmartPad-DataSessionAcceptDuration 'Wacom.Devices.Properties.SmartPad.DataSessionAcceptDuration')
  - [EnableDataEncryption](#F-Wacom-Devices-Properties-SmartPad-EnableDataEncryption 'Wacom.Devices.Properties.SmartPad.EnableDataEncryption')
  - [FileTransferServiceReportingType](#F-Wacom-Devices-Properties-SmartPad-FileTransferServiceReportingType 'Wacom.Devices.Properties.SmartPad.FileTransferServiceReportingType')
  - [FirmwareProtocolLevel](#F-Wacom-Devices-Properties-SmartPad-FirmwareProtocolLevel 'Wacom.Devices.Properties.SmartPad.FirmwareProtocolLevel')
  - [HoveringDataOutput](#F-Wacom-Devices-Properties-SmartPad-HoveringDataOutput 'Wacom.Devices.Properties.SmartPad.HoveringDataOutput')
  - [PenDetectedIndicationLedMode](#F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationLedMode 'Wacom.Devices.Properties.SmartPad.PenDetectedIndicationLedMode')
  - [PenDetectedIndicationSoundEffect](#F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationSoundEffect 'Wacom.Devices.Properties.SmartPad.PenDetectedIndicationSoundEffect')
  - [PenDetectedIndicationSoundVol](#F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationSoundVol 'Wacom.Devices.Properties.SmartPad.PenDetectedIndicationSoundVol')
  - [PenDetectedNotificationFlag](#F-Wacom-Devices-Properties-SmartPad-PenDetectedNotificationFlag 'Wacom.Devices.Properties.SmartPad.PenDetectedNotificationFlag')
  - [RealTimeServiceReportingType](#F-Wacom-Devices-Properties-SmartPad-RealTimeServiceReportingType 'Wacom.Devices.Properties.SmartPad.RealTimeServiceReportingType')
  - [ReportDataSessionEvents](#F-Wacom-Devices-Properties-SmartPad-ReportDataSessionEvents 'Wacom.Devices.Properties.SmartPad.ReportDataSessionEvents')
  - [UserConfirmationStartAckDuration](#F-Wacom-Devices-Properties-SmartPad-UserConfirmationStartAckDuration 'Wacom.Devices.Properties.SmartPad.UserConfirmationStartAckDuration')
  - [UserConfirmationTimeout](#F-Wacom-Devices-Properties-SmartPad-UserConfirmationTimeout 'Wacom.Devices.Properties.SmartPad.UserConfirmationTimeout')
- [SmartPadClientId](#T-Wacom-Devices-Internal-SmartPad-SmartPadClientId 'Wacom.Devices.Internal.SmartPad.SmartPadClientId')
  - [#ctor(b0,b1,b2,b3,b4,b5)](#M-Wacom-Devices-Internal-SmartPad-SmartPadClientId-#ctor-System-Byte,System-Byte,System-Byte,System-Byte,System-Byte,System-Byte- 'Wacom.Devices.Internal.SmartPad.SmartPadClientId.#ctor(System.Byte,System.Byte,System.Byte,System.Byte,System.Byte,System.Byte)')
  - [Item](#P-Wacom-Devices-Internal-SmartPad-SmartPadClientId-Item-System-Int32- 'Wacom.Devices.Internal.SmartPad.SmartPadClientId.Item(System.Int32)')
  - [Length](#P-Wacom-Devices-Internal-SmartPad-SmartPadClientId-Length 'Wacom.Devices.Internal.SmartPad.SmartPadClientId.Length')
  - [AsArray()](#M-Wacom-Devices-Internal-SmartPad-SmartPadClientId-AsArray 'Wacom.Devices.Internal.SmartPad.SmartPadClientId.AsArray')
- [SmartPadParameter](#T-Wacom-Devices-Internal-SmartPad-SmartPadParameter 'Wacom.Devices.Internal.SmartPad.SmartPadParameter')
  - [BATTERY_LEVEL_REPORT_CHANGE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-BATTERY_LEVEL_REPORT_CHANGE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.BATTERY_LEVEL_REPORT_CHANGE')
  - [CONNECTION_INTERVAL](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-CONNECTION_INTERVAL 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.CONNECTION_INTERVAL')
  - [DATA_SESSION_ACCEPT_DURATION](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-DATA_SESSION_ACCEPT_DURATION 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.DATA_SESSION_ACCEPT_DURATION')
  - [ENABLE_DATA_ENCRYPTION](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-ENABLE_DATA_ENCRYPTION 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.ENABLE_DATA_ENCRYPTION')
  - [FILE_TRANSFER_SERVICE_REPORTING_TYPE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-FILE_TRANSFER_SERVICE_REPORTING_TYPE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.FILE_TRANSFER_SERVICE_REPORTING_TYPE')
  - [NOTE_HEIGHT](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-NOTE_HEIGHT 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.NOTE_HEIGHT')
  - [NOTE_WIDTH](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-NOTE_WIDTH 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.NOTE_WIDTH')
  - [PEN_DETECTED_INDICATION_LED_MODE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_LED_MODE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.PEN_DETECTED_INDICATION_LED_MODE')
  - [PEN_DETECTED_INDICATION_SOUND_EFFECT](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_SOUND_EFFECT 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.PEN_DETECTED_INDICATION_SOUND_EFFECT')
  - [PEN_DETECTED_INDICATION_SOUND_VOL](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_SOUND_VOL 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.PEN_DETECTED_INDICATION_SOUND_VOL')
  - [PEN_DETECTED_NOTIFICATION_FLAG](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_NOTIFICATION_FLAG 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.PEN_DETECTED_NOTIFICATION_FLAG')
  - [POINT_SIZE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-POINT_SIZE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.POINT_SIZE')
  - [P_HOVERING_DATA_OUTPUT](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-P_HOVERING_DATA_OUTPUT 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.P_HOVERING_DATA_OUTPUT')
  - [REALTIME_POINTS_RATE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REALTIME_POINTS_RATE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.REALTIME_POINTS_RATE')
  - [REAL_TIME_SERVICE_REPORTING_TYPE](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REAL_TIME_SERVICE_REPORTING_TYPE 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.REAL_TIME_SERVICE_REPORTING_TYPE')
  - [REPORT_DATA_SESSION_EVENTS](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REPORT_DATA_SESSION_EVENTS 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.REPORT_DATA_SESSION_EVENTS')
  - [SMARTPAD_FW_PROTOCOL_LEVEL](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-SMARTPAD_FW_PROTOCOL_LEVEL 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.SMARTPAD_FW_PROTOCOL_LEVEL')
  - [USER_CONFIRMATION_START_ACK_DURATION](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-USER_CONFIRMATION_START_ACK_DURATION 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.USER_CONFIRMATION_START_ACK_DURATION')
  - [USER_CONFIRMATION_TIMEOUT](#F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-USER_CONFIRMATION_TIMEOUT 'Wacom.Devices.Internal.SmartPad.SmartPadParameter.USER_CONFIRMATION_TIMEOUT')
- [SmartPadPoint](#T-Wacom-Devices-Internal-SmartPad-SmartPadPoint 'Wacom.Devices.Internal.SmartPad.SmartPadPoint')
  - [IsValid](#P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-IsValid 'Wacom.Devices.Internal.SmartPad.SmartPadPoint.IsValid')
  - [Pressure](#P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Pressure 'Wacom.Devices.Internal.SmartPad.SmartPadPoint.Pressure')
  - [Timestamp](#P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Timestamp 'Wacom.Devices.Internal.SmartPad.SmartPadPoint.Timestamp')
  - [X](#P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-X 'Wacom.Devices.Internal.SmartPad.SmartPadPoint.X')
  - [Y](#P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Y 'Wacom.Devices.Internal.SmartPad.SmartPadPoint.Y')
- [SmartPadPointPhase](#T-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase')
  - [BeginHover](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-BeginHover 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.BeginHover')
  - [BeginStroke](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-BeginStroke 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.BeginStroke')
  - [EndHover](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-EndHover 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.EndHover')
  - [EndStroke](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-EndStroke 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.EndStroke')
  - [MoveHover](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-MoveHover 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.MoveHover')
  - [MoveStroke](#F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-MoveStroke 'Wacom.Devices.Internal.SmartPad.SmartPadPointPhase.MoveStroke')
- [SmartPadUSB](#T-Wacom-Devices-Internal-SmartPad-SmartPadUSB 'Wacom.Devices.Internal.SmartPad.SmartPadUSB')
  - [ClearInputPipeAsync()](#M-Wacom-Devices-Internal-SmartPad-SmartPadUSB-ClearInputPipeAsync 'Wacom.Devices.Internal.SmartPad.SmartPadUSB.ClearInputPipeAsync')
- [SppLevel](#T-Wacom-Devices-Internal-SmartPad-SppLevel 'Wacom.Devices.Internal.SmartPad.SppLevel')
  - [L_1_2_2](#F-Wacom-Devices-Internal-SmartPad-SppLevel-L_1_2_2 'Wacom.Devices.Internal.SmartPad.SppLevel.L_1_2_2')
  - [L_2_1_0](#F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_0 'Wacom.Devices.Internal.SmartPad.SppLevel.L_2_1_0')
  - [L_2_1_2](#F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_2 'Wacom.Devices.Internal.SmartPad.SppLevel.L_2_1_2')
  - [L_2_1_3](#F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_3 'Wacom.Devices.Internal.SmartPad.SppLevel.L_2_1_3')
  - [L_2_2_0](#F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_2_0 'Wacom.Devices.Internal.SmartPad.SppLevel.L_2_2_0')
- [StartingFileDownloadEventArgs](#T-Wacom-Devices-StartingFileDownloadEventArgs 'Wacom.Devices.StartingFileDownloadEventArgs')
  - [FilesCount](#P-Wacom-Devices-StartingFileDownloadEventArgs-FilesCount 'Wacom.Devices.StartingFileDownloadEventArgs.FilesCount')
- [Status](#T-Wacom-Devices-Types-STU-Status 'Wacom.Devices.Types.STU.Status')
  - [lastResultCode](#F-Wacom-Devices-Types-STU-Status-lastResultCode 'Wacom.Devices.Types.STU.Status.lastResultCode')
  - [statusCode](#F-Wacom-Devices-Types-STU-Status-statusCode 'Wacom.Devices.Types.STU.Status.statusCode')
  - [statusWord](#F-Wacom-Devices-Types-STU-Status-statusWord 'Wacom.Devices.Types.STU.Status.statusWord')
  - [ToString()](#M-Wacom-Devices-Types-STU-Status-ToString 'Wacom.Devices.Types.STU.Status.ToString')
- [StatusCode](#T-Wacom-Devices-Internal-SmartPad-StatusCode 'Wacom.Devices.Internal.SmartPad.StatusCode')
- [StatusCode](#T-Wacom-Devices-Types-STU-Status-StatusCode 'Wacom.Devices.Types.STU.Status.StatusCode')
  - [ACK](#F-Wacom-Devices-Internal-SmartPad-StatusCode-ACK 'Wacom.Devices.Internal.SmartPad.StatusCode.ACK')
  - [ERROR_FILE_DOWNLOADING](#F-Wacom-Devices-Internal-SmartPad-StatusCode-ERROR_FILE_DOWNLOADING 'Wacom.Devices.Internal.SmartPad.StatusCode.ERROR_FILE_DOWNLOADING')
  - [GENERAL_ERROR](#F-Wacom-Devices-Internal-SmartPad-StatusCode-GENERAL_ERROR 'Wacom.Devices.Internal.SmartPad.StatusCode.GENERAL_ERROR')
  - [INVALID_STATE](#F-Wacom-Devices-Internal-SmartPad-StatusCode-INVALID_STATE 'Wacom.Devices.Internal.SmartPad.StatusCode.INVALID_STATE')
  - [NOT_AUTH_FOR_DSR](#F-Wacom-Devices-Internal-SmartPad-StatusCode-NOT_AUTH_FOR_DSR 'Wacom.Devices.Internal.SmartPad.StatusCode.NOT_AUTH_FOR_DSR')
  - [READONLY_PARAM](#F-Wacom-Devices-Internal-SmartPad-StatusCode-READONLY_PARAM 'Wacom.Devices.Internal.SmartPad.StatusCode.READONLY_PARAM')
  - [UC_IN_PROGRESS](#F-Wacom-Devices-Internal-SmartPad-StatusCode-UC_IN_PROGRESS 'Wacom.Devices.Internal.SmartPad.StatusCode.UC_IN_PROGRESS')
  - [UNRECOGNIZED_COMMAND](#F-Wacom-Devices-Internal-SmartPad-StatusCode-UNRECOGNIZED_COMMAND 'Wacom.Devices.Internal.SmartPad.StatusCode.UNRECOGNIZED_COMMAND')
  - [Calculation](#F-Wacom-Devices-Types-STU-Status-StatusCode-Calculation 'Wacom.Devices.Types.STU.Status.StatusCode.Calculation')
  - [Capture](#F-Wacom-Devices-Types-STU-Status-StatusCode-Capture 'Wacom.Devices.Types.STU.Status.StatusCode.Capture')
  - [Image](#F-Wacom-Devices-Types-STU-Status-StatusCode-Image 'Wacom.Devices.Types.STU.Status.StatusCode.Image')
  - [Image_Boot](#F-Wacom-Devices-Types-STU-Status-StatusCode-Image_Boot 'Wacom.Devices.Types.STU.Status.StatusCode.Image_Boot')
  - [Ready](#F-Wacom-Devices-Types-STU-Status-StatusCode-Ready 'Wacom.Devices.Types.STU.Status.StatusCode.Ready')
  - [RomBusy](#F-Wacom-Devices-Types-STU-Status-StatusCode-RomBusy 'Wacom.Devices.Types.STU.Status.StatusCode.RomBusy')
  - [SystemReset](#F-Wacom-Devices-Types-STU-Status-StatusCode-SystemReset 'Wacom.Devices.Types.STU.Status.StatusCode.SystemReset')
- [TaskCompletionSourceWithCancellation\`1](#T-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1')
  - [#ctor(cancellationToken)](#M-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-#ctor-System-Threading-CancellationToken- 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1.#ctor(System.Threading.CancellationToken)')
  - [m_taskCompletionSource](#F-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-m_taskCompletionSource 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1.m_taskCompletionSource')
  - [Task](#P-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-Task 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1.Task')
  - [Dispose()](#M-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-Dispose 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1.Dispose')
- [TransportProtocol](#T-Wacom-Devices-TransportProtocol 'Wacom.Devices.TransportProtocol')
  - [BLE](#F-Wacom-Devices-TransportProtocol-BLE 'Wacom.Devices.TransportProtocol.BLE')
  - [BTC](#F-Wacom-Devices-TransportProtocol-BTC 'Wacom.Devices.TransportProtocol.BTC')
- [Type](#T-Wacom-Devices-Internal-STU-OperationMode-Type 'Wacom.Devices.Internal.STU.OperationMode.Type')
  - [KeyPad](#F-Wacom-Devices-Internal-STU-OperationMode-Type-KeyPad 'Wacom.Devices.Internal.STU.OperationMode.Type.KeyPad')
  - [MessageBox](#F-Wacom-Devices-Internal-STU-OperationMode-Type-MessageBox 'Wacom.Devices.Internal.STU.OperationMode.Type.MessageBox')
  - [Normal](#F-Wacom-Devices-Internal-STU-OperationMode-Type-Normal 'Wacom.Devices.Internal.STU.OperationMode.Type.Normal')
  - [PinPad](#F-Wacom-Devices-Internal-STU-OperationMode-Type-PinPad 'Wacom.Devices.Internal.STU.OperationMode.Type.PinPad')
  - [Signature](#F-Wacom-Devices-Internal-STU-OperationMode-Type-Signature 'Wacom.Devices.Internal.STU.OperationMode.Type.Signature')
  - [SlideShow](#F-Wacom-Devices-Internal-STU-OperationMode-Type-SlideShow 'Wacom.Devices.Internal.STU.OperationMode.Type.SlideShow')
- [UnexpectedResponseException](#T-Wacom-Devices-UnexpectedResponseException 'Wacom.Devices.UnexpectedResponseException')
- [UnexpectedStatusException](#T-Wacom-Devices-UnexpectedStatusException 'Wacom.Devices.UnexpectedStatusException')
- [WriteDelegate](#T-Wacom-Devices-Logging-LogProviders-LoupeLogProvider-WriteDelegate 'Wacom.Devices.Logging.LogProviders.LoupeLogProvider.WriteDelegate')

<a name='T-Wacom-Devices-Internal-SmartPad-AuthorizeResult'></a>
## AuthorizeResult `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='F-Wacom-Devices-Internal-SmartPad-AuthorizeResult-ConfirmationTimeout'></a>
### ConfirmationTimeout `constants`

##### Summary

The user did not confirm the connection on time.

<a name='F-Wacom-Devices-Internal-SmartPad-AuthorizeResult-Success'></a>
### Success `constants`

##### Summary

Handshake succeeded.

<a name='T-Wacom-Devices-BarcodeScannedEventArgs'></a>
## BarcodeScannedEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for BarcodeScannedEvent

<a name='P-Wacom-Devices-BarcodeScannedEventArgs-BarcodeData'></a>
### BarcodeData `property`

##### Summary

Barcode data as an array of byte values

<a name='T-Wacom-Devices-Types-SmartPad-BatteryState'></a>
## BatteryState `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Current state of the device's battery

<a name='P-Wacom-Devices-Types-SmartPad-BatteryState-IsCharging'></a>
### IsCharging `property`

##### Summary

True if the battery is currently charging

<a name='P-Wacom-Devices-Types-SmartPad-BatteryState-Percentage'></a>
### Percentage `property`

##### Summary

Percentage charged level

<a name='M-Wacom-Devices-Types-SmartPad-BatteryState-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of the current battery state

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-BatteryStateChangedEventArgs'></a>
## BatteryStateChangedEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for BatteryStateChangedEvent

<a name='P-Wacom-Devices-BatteryStateChangedEventArgs-BatteryPercent'></a>
### BatteryPercent `property`

##### Summary

Battery charge percentage

<a name='P-Wacom-Devices-BatteryStateChangedEventArgs-IsCharging'></a>
### IsCharging `property`

##### Summary

```
true
```

if battery is charging

<a name='T-Wacom-Devices-Internal-BleAdvertisingMode'></a>
## BleAdvertisingMode `type`

##### Namespace

Wacom.Devices.Internal

##### Summary

Specifies Bluetooth Low Energy advertisement modes for SmartPad devices.

<a name='F-Wacom-Devices-Internal-BleAdvertisingMode-DataSessionReady'></a>
### DataSessionReady `constants`

##### Summary

The device is ready for data session.

<a name='F-Wacom-Devices-Internal-BleAdvertisingMode-None'></a>
### None `constants`

##### Summary

The device is not advertising.

<a name='F-Wacom-Devices-Internal-BleAdvertisingMode-UserConfirmation'></a>
### UserConfirmation `constants`

##### Summary

The device is in user confirmation mode.

<a name='T-Wacom-Devices-Types-STU-BootScreenFlag'></a>
## BootScreenFlag `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Specifies whether the boot image is shown at start up

<a name='T-Wacom-Devices-Internal-SmartPad-CRC32'></a>
## CRC32 `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='M-Wacom-Devices-Internal-SmartPad-CRC32-CalculateCRC-System-Int64,System-Byte[],System-Int32-'></a>
### CalculateCRC(lCRC,sData,iDataLength) `method`

##### Summary

PartialCRC caculates the CRC32 by looping through each byte in sData

##### Returns

the new caculated CRC

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| lCRC | [System.Int64](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int64 'System.Int64') | The variable to hold the CRC. It must have been initialize. See fullCRC for an example. |
| sData | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | Array of byte to calculate the CRC |
| iDataLength | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | the length of the data |

<a name='M-Wacom-Devices-Internal-SmartPad-CRC32-FullCRC-System-Byte[],System-Int32-'></a>
### FullCRC(sData,iDataLength) `method`

##### Summary

Caculates the CRC32 for the given Data

##### Returns

the calculated CRC32

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sData | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | the data to calculate the CRC |
| iDataLength | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | then length of the data |

<a name='M-Wacom-Devices-Internal-SmartPad-CRC32-Init'></a>
### Init() `method`

##### Summary

Initialize the iTable aplying the polynomial used by PKZIP, WINZIP and Ethernet.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-SmartPad-CRC32-Reflect-System-Int32,System-Int32-'></a>
### Reflect(iReflect,iValue) `method`

##### Summary

Reflection is a requirement for the official CRC-32 standard. Note that you can create CRC without it,
but it won't conform to the standard.

##### Returns

the calculated value

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| iReflect | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | value to apply the reflection |
| iValue | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='T-Wacom-Devices-Internal-STU-Capability'></a>
## Capability `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='T-Wacom-Devices-Types-STU-Capability'></a>
## Capability `type`

##### Namespace

Wacom.Devices.Types.STU

<a name='M-Wacom-Devices-Internal-STU-Capability-#ctor-System-Byte[]-'></a>
### #ctor() `constructor`

##### Parameters

This constructor has no parameters.

<a name='F-Wacom-Devices-Internal-STU-Capability-screenHeight'></a>
### screenHeight `constants`

<a name='F-Wacom-Devices-Internal-STU-Capability-screenWidth'></a>
### screenWidth `constants`

<a name='F-Wacom-Devices-Internal-STU-Capability-tabletMaxPressure'></a>
### tabletMaxPressure `constants`

<a name='F-Wacom-Devices-Internal-STU-Capability-tabletMaxY'></a>
### tabletMaxY `constants`

<a name='M-Wacom-Devices-Types-STU-Capability-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of tablet capabilities

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult'></a>
## CheckAuthorizationResult `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-NotRecognized_DataReady'></a>
### NotRecognized_DataReady `constants`

##### Summary



<a name='F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-NotRecognized_UserConfirmation'></a>
### NotRecognized_UserConfirmation `constants`

##### Summary



<a name='F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-Recognized_DataReady'></a>
### Recognized_DataReady `constants`

##### Summary



<a name='F-Wacom-Devices-Internal-SmartPad-CheckAuthorizationResult-Recognized_UserConfirmation'></a>
### Recognized_UserConfirmation `constants`

##### Summary



<a name='T-Wacom-Devices-CommandNotSupportedException'></a>
## CommandNotSupportedException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a device does not recognize a command sent to it

<a name='T-Wacom-Devices-Internal-DERParser'></a>
## DERParser `type`

##### Namespace

Wacom.Devices.Internal

<a name='M-Wacom-Devices-Internal-DERParser-ParsePkcs1RsaPublicKey-Windows-Storage-Streams-IBuffer-'></a>
### ParsePkcs1RsaPublicKey(buffer) `method`

##### Summary

A.1.1 RSA public key syntax
An RSA public key should be represented with the ASN.1 type RSAPublicKey:

RSAPublicKey::= SEQUENCE {
	modulus INTEGER,   -- n
	publicExponent INTEGER   -- e
}

The fields of type RSAPublicKey have the following meanings:
- modulus is the RSA modulus n.
- publicExponent is the RSA public exponent e.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| buffer | [Windows.Storage.Streams.IBuffer](#T-Windows-Storage-Streams-IBuffer 'Windows.Storage.Streams.IBuffer') |  |

<a name='T-Wacom-Devices-Types-SmartPad-DataEncryption'></a>
## DataEncryption `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies whether data encryption is enabled or disabled

<a name='T-Wacom-Devices-Notification-Device'></a>
## Device `type`

##### Namespace

Wacom.Devices.Notification

##### Summary

Names of Device Notification types

<a name='T-Wacom-Devices-Properties-Device'></a>
## Device `type`

##### Namespace

Wacom.Devices.Properties

##### Summary

Names of properties supported by all devices

<a name='F-Wacom-Devices-Notification-Device-BarcodeScanned'></a>
### BarcodeScanned `constants`

##### Summary

Occurs when a barcode is scanned by a barcode-enabled device.

<a name='F-Wacom-Devices-Notification-Device-BatteryStateChanged'></a>
### BatteryStateChanged `constants`

##### Summary

Occurs when the device's battery state is changed.

<a name='F-Wacom-Devices-Notification-Device-SmartPad_DeviceStatusChanged'></a>
### SmartPad_DeviceStatusChanged `constants`

##### Summary

Occurs when a SmartPad device's status is changed

<a name='F-Wacom-Devices-Properties-Device-FirmwareVersion'></a>
### FirmwareVersion `constants`

##### Summary

The firmware version of the device

<a name='F-Wacom-Devices-Properties-Device-Height'></a>
### Height `constants`

##### Summary

The height of the device's active area in mm

<a name='F-Wacom-Devices-Properties-Device-HidInformation'></a>
### HidInformation `constants`

##### Summary

HID information for the device

<a name='F-Wacom-Devices-Properties-Device-Name'></a>
### Name `constants`

##### Summary

The Name of the device

<a name='F-Wacom-Devices-Properties-Device-SerialNumber'></a>
### SerialNumber `constants`

##### Summary

The serial numer of the device

<a name='F-Wacom-Devices-Properties-Device-Width'></a>
### Width `constants`

##### Summary

The width of the device's active area in mm

<a name='T-Wacom-Devices-DeviceModel'></a>
## DeviceModel `type`

##### Namespace

Wacom.Devices

##### Summary

Specifies the models of supported Wacom devices.

<a name='F-Wacom-Devices-DeviceModel-BambooSlate'></a>
### BambooSlate `constants`

##### Summary

Bamboo Slate device.

<a name='F-Wacom-Devices-DeviceModel-BambooSpark'></a>
### BambooSpark `constants`

##### Summary

Bamboo Spark device.

<a name='F-Wacom-Devices-DeviceModel-IntuosPro'></a>
### IntuosPro `constants`

##### Summary

Intuos Pro device.

<a name='F-Wacom-Devices-DeviceModel-Phu111'></a>
### Phu111 `constants`

##### Summary

PHU 111 device.

<a name='F-Wacom-Devices-DeviceModel-STU'></a>
### STU `constants`

##### Summary

STU family of devices

<a name='F-Wacom-Devices-DeviceModel-SecureSTU'></a>
### SecureSTU `constants`

##### Summary

STU device with TLS encryption

<a name='F-Wacom-Devices-DeviceModel-SketchpadPro'></a>
### SketchpadPro `constants`

##### Summary

Sketchpad Pro device.

<a name='F-Wacom-Devices-DeviceModel-Unknown'></a>
### Unknown `constants`

##### Summary

Unknown device.

<a name='T-Wacom-Devices-DeviceNotRespondingException'></a>
## DeviceNotRespondingException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a device is not responding

<a name='T-Wacom-Devices-Internal-SmartPad-DeviceState'></a>
## DeviceState `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

Specifies the SmartPad device states.

<a name='F-Wacom-Devices-Internal-SmartPad-DeviceState-FileTransfer'></a>
### FileTransfer `constants`

##### Summary

File transfer mode.

<a name='F-Wacom-Devices-Internal-SmartPad-DeviceState-Ready'></a>
### Ready `constants`

##### Summary

Ready mode.

<a name='F-Wacom-Devices-Internal-SmartPad-DeviceState-RealTime'></a>
### RealTime `constants`

##### Summary

Real time drawing mode.

<a name='T-Wacom-Devices-DeviceStatus'></a>
## DeviceStatus `type`

##### Namespace

Wacom.Devices

##### Summary

Specifies different actions that the user is expected to perform during the communication with the digital ink device.

<a name='F-Wacom-Devices-DeviceStatus-CapturingRealTimeInk'></a>
### CapturingRealTimeInk `constants`

##### Summary

The device is capturing ink real time.

<a name='F-Wacom-Devices-DeviceStatus-ExpectingConnectionConfirmation'></a>
### ExpectingConnectionConfirmation `constants`

##### Summary

The user is expected to tap the central button of the device in order to confirm a new connection.

<a name='F-Wacom-Devices-DeviceStatus-ExpectingReconnect'></a>
### ExpectingReconnect `constants`

##### Summary

The user is expected to restore an existing connection with the device.
Depending on the state of the device this is done either by tapping or by pressing and holding the central button of the SmartPad device.

<a name='F-Wacom-Devices-DeviceStatus-ExpectingUserConfirmationMode'></a>
### ExpectingUserConfirmationMode `constants`

##### Summary

The user is expected to press and hold the central button of the device in order to put the device in "user confirmation" mode.

<a name='F-Wacom-Devices-DeviceStatus-Idle'></a>
### Idle `constants`

##### Summary

The device is in idle state.

<a name='F-Wacom-Devices-DeviceStatus-NotAuthorizedConnectionNotConfirmed'></a>
### NotAuthorizedConnectionNotConfirmed `constants`

##### Summary

The device is not authorized. The connection has not been confirmed within the expected time.

<a name='F-Wacom-Devices-DeviceStatus-NotAuthorizedDeviceInUseByAnotherHost'></a>
### NotAuthorizedDeviceInUseByAnotherHost `constants`

##### Summary

The device is not authorized because it is in use by another host.

<a name='F-Wacom-Devices-DeviceStatus-NotAuthorizedDeviceUnreachable'></a>
### NotAuthorizedDeviceUnreachable `constants`

##### Summary

The device is not authorized beacuse it is unreachable.

<a name='F-Wacom-Devices-DeviceStatus-NotAuthorizedGeneralError'></a>
### NotAuthorizedGeneralError `constants`

##### Summary

The device is not authorized due to an error.

<a name='F-Wacom-Devices-DeviceStatus-Reconnecting'></a>
### Reconnecting `constants`

##### Summary

Reconnecting after check authorization

<a name='F-Wacom-Devices-DeviceStatus-Syncing'></a>
### Syncing `constants`

##### Summary

The device is syncing data and no action is required by the user.

<a name='T-Wacom-Devices-DeviceStatusChangedEventArgs'></a>
## DeviceStatusChangedEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for the ExpectedUserActionChanged event.

<a name='P-Wacom-Devices-DeviceStatusChangedEventArgs-PreviousStatus'></a>
### PreviousStatus `property`

##### Summary

Gets an enum value that specifies the previous expected user action.

<a name='P-Wacom-Devices-DeviceStatusChangedEventArgs-Status'></a>
### Status `property`

##### Summary

Gets an enum value that specifies the new expected user action.

<a name='T-Wacom-Devices-DeviceUnreachableException'></a>
## DeviceUnreachableException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when unable to communicate with a device

<a name='T-Wacom-Devices-Properties-Digitizer'></a>
## Digitizer `type`

##### Namespace

Wacom.Devices.Properties

##### Summary

Names of properties relating to digitizer

<a name='F-Wacom-Devices-Properties-Digitizer-Height'></a>
### Height `constants`

##### Summary

Height of digitizer in native units

<a name='F-Wacom-Devices-Properties-Digitizer-Resolution'></a>
### Resolution `constants`

##### Summary

Number of pen points per micrometre

<a name='F-Wacom-Devices-Properties-Digitizer-SamplingRate'></a>
### SamplingRate `constants`

##### Summary

Number of pen points reported per second

<a name='F-Wacom-Devices-Properties-Digitizer-Width'></a>
### Width `constants`

##### Summary

Width of digitizer in native units

<a name='T-Wacom-Devices-Types-DisplayType'></a>
## DisplayType `type`

##### Namespace

Wacom.Devices.Types

##### Summary

Type of display screen on a device

<a name='F-Wacom-Devices-Types-DisplayType-Discrete'></a>
### Discrete `constants`

##### Summary

Device screen does not function as a PC monitor

<a name='F-Wacom-Devices-Types-DisplayType-Integrated'></a>
### Integrated `constants`

##### Summary

Device screen functions as a PC monitor

<a name='F-Wacom-Devices-Types-DisplayType-None'></a>
### None `constants`

##### Summary

Device does not have a screen of its own

<a name='T-Wacom-Devices-DownloadInProgressException'></a>
## DownloadInProgressException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a command cannot be executed bacause a file download is in progress

<a name='T-Wacom-Devices-Internal-STU-EncodingMode'></a>
## EncodingMode `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_16bit'></a>
### RAW_16bit `constants`

##### Summary

16-bit uncompressed color

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_16bit_Bulk'></a>
### RAW_16bit_Bulk `constants`

##### Summary

16-bit uncompressed color, via bulk

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_1bit'></a>
### RAW_1bit `constants`

##### Summary

Uncompressed monochrome

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_1bit_Bulk'></a>
### RAW_1bit_Bulk `constants`

##### Summary

Uncompressed monochrome, via bluk

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_24bit'></a>
### RAW_24bit `constants`

##### Summary

24-bit uncompressed color

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-RAW_24bit_Bulk'></a>
### RAW_24bit_Bulk `constants`

##### Summary

24-bit uncompressed color, via bulk

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_16bit'></a>
### Zlib_16bit `constants`

##### Summary

Zlib-compressed 16-bit color

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_1bit'></a>
### Zlib_1bit `constants`

##### Summary

Zlib-compressed monochrome

<a name='F-Wacom-Devices-Internal-STU-EncodingMode-Zlib_24bit'></a>
### Zlib_24bit `constants`

##### Summary

Zlib-compressed 24-bit color

<a name='T-Wacom-Devices-Internal-STU-EncryptionCommand'></a>
## EncryptionCommand `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateGenerateSymmetricKey'></a>
### CreateGenerateSymmetricKey() `method`

##### Summary

Create an EncryptionCommand parameter block with the GenerateSymmetricKey command

##### Returns

Initialized EncryptionCommand object

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateGetParameterBlock-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex,System-Byte-'></a>
### CreateGetParameterBlock(index,offset) `method`

##### Summary

Create an EncryptionCommand parameter block with the GetParameterBlock command

##### Returns

Initialized EncryptionCommand object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | [Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex](#T-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex 'Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex') | parameter block index |
| offset | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | offset |

<a name='M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateSetEncryptionType-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType-'></a>
### CreateSetEncryptionType(symmetricKeyType,asymmetricPaddingType,asymmetricKeyType) `method`

##### Summary

Create an EncryptionCommand parameter block with the SetEncryptionType command

##### Returns

Initialized EncryptionCommand object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| symmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType') | symmetric key type |
| asymmetricPaddingType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType') | asymmetric padding type |
| asymmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType') | asymmetric key type |

<a name='M-Wacom-Devices-Internal-STU-EncryptionCommand-CreateSetParameterBlock-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex,System-Byte[],System-Int32,System-Int32-'></a>
### CreateSetParameterBlock(index,data,offset,length) `method`

##### Summary

Create an EncryptionCommand parameter block with the SetParameterBlock command

##### Returns

Initialized EncryptionCommand object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | [Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex](#T-Wacom-Devices-Internal-STU-EncryptionCommand-ParameterBlockIndex 'Wacom.Devices.Internal.STU.EncryptionCommand.ParameterBlockIndex') | parameter block index |
| data | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | data block |
| offset | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | offset within data at which the current block begins |
| length | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Length of current block |

<a name='T-Wacom-Devices-Internal-STU-EncryptionImpl'></a>
## EncryptionImpl `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-#ctor-Wacom-Devices-Internal-STU-Tablet,Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType-'></a>
### #ctor(tablet,symmetricKeyType,asymmetricKeyType,asymmetricPaddingType) `constructor`

##### Summary

Constructor

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tablet | [Wacom.Devices.Internal.STU.Tablet](#T-Wacom-Devices-Internal-STU-Tablet 'Wacom.Devices.Internal.STU.Tablet') |  |
| symmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType') |  |
| asymmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType') |  |
| asymmetricPaddingType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType') |  |

<a name='P-Wacom-Devices-Internal-STU-EncryptionImpl-CipherSuite'></a>
### CipherSuite `property`

##### Summary

Returns a string specifying encryption settings

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-AesDecrypt-System-Byte[],System-Int32,System-Byte[]@-'></a>
### AesDecrypt(encrypted,size,decrypted) `method`

##### Summary

Decrypt AES-encrypted data

##### Returns

true

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| encrypted | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | Data to decrypt |
| size | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Number of bytes from encrypted to decrypt |
| decrypted | [System.Byte[]@](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[]@ 'System.Byte[]@') | Decrypted data |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-DecryptSessionKey-System-Byte[]-'></a>
### DecryptSessionKey(data) `method`

##### Summary

(RSA) decrypt AES key recieved from tablet

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-InitializeEncryption-System-Threading-CancellationToken-'></a>
### InitializeEncryption(ct) `method`

##### Summary

Initialize encryption: send RSA public key to tablet, request AES (symmetric) key from it

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-OnEncryptionStatus-Wacom-Devices-Internal-STU-EncryptionStatus-'></a>
### OnEncryptionStatus(eventData) `method`

##### Summary

Event handler for tablet EncryptionStatus

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| eventData | [Wacom.Devices.Internal.STU.EncryptionStatus](#T-Wacom-Devices-Internal-STU-EncryptionStatus 'Wacom.Devices.Internal.STU.EncryptionStatus') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-ReinitializeEncryption-System-Threading-CancellationToken-'></a>
### ReinitializeEncryption(ct) `method`

##### Summary

(Re)Initialize encryption: get a new  AES (symmetric) key from tablet

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-StartEncryption-System-Threading-CancellationToken-'></a>
### StartEncryption(ct) `method`

##### Summary

Start encryption using current parameters

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-StartEncryption-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType,Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType,System-Threading-CancellationToken-'></a>
### StartEncryption(symmetricKeyType,asymmetricKeyType,asymmetricPaddingType,ct) `method`

##### Summary

Set parameters & start encryption

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| symmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-SymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.SymmetricKeyType') |  |
| asymmetricKeyType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricKeyType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricKeyType') |  |
| asymmetricPaddingType | [Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType](#T-Wacom-Devices-Internal-STU-EncryptionCommand-AsymmetricPaddingType 'Wacom.Devices.Internal.STU.EncryptionCommand.AsymmetricPaddingType') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-EncryptionImpl-StopEncryption-System-Threading-CancellationToken-'></a>
### StopEncryption(ct) `method`

##### Summary

Stop encryption

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='T-Wacom-Devices-Internal-STU-EncryptionStatus'></a>
## EncryptionStatus `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-EncryptionStatus-#ctor-System-Byte[],System-Int32-'></a>
### #ctor(data,offset) `constructor`

##### Summary

EncryptionStatus

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | encryption status |
| offset | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Start of encryption status within data |

##### Remarks

When called from GetAsync..., data contains ReportId in 1st byte
When called from report handling, ReportId has been removed

<a name='T-Wacom-Devices-Internal-STU-EndImageDataFlag'></a>
## EndImageDataFlag `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='F-Wacom-Devices-Internal-STU-EndImageDataFlag-Abandon'></a>
### Abandon `constants`

##### Summary

Abandon image update. Return to READY state.

<a name='F-Wacom-Devices-Internal-STU-EndImageDataFlag-Commit'></a>
### Commit `constants`

##### Summary

Commit image to LCD screen

<a name='T-Wacom-Devices-Types-STU-Status-ErrorCode'></a>
## ErrorCode `type`

##### Namespace

Wacom.Devices.Types.STU.Status

##### Summary

Error code for last operation

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-BadParameter'></a>
### BadParameter `constants`

##### Summary

Parameter is not valid.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-CRC'></a>
### CRC `constants`

##### Summary

CRC error was detected in packed received by the tablet (serial interface only).

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsImageTooLong'></a>
### GraphicsImageTooLong `constants`

##### Summary

Trying to draw outside video memory.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsWrongEncodingType'></a>
### GraphicsWrongEncodingType `constants`

##### Summary

Wrong encoding type in report data.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsWrongParameters'></a>
### GraphicsWrongParameters `constants`

##### Summary

Image area or handwriting display area is invalid.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-GraphicsZlibError'></a>
### GraphicsZlibError `constants`

##### Summary

An error was returned by the ZLIB inflate function.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-None'></a>
### None `constants`

##### Summary

Operation completed successfully.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-PadNotExist'></a>
### PadNotExist `constants`

##### Summary

The image for this pad setting does not exist, only used for PINpad and KEYpad mode.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-RomErrorCRC'></a>
### RomErrorCRC `constants`

##### Summary

CRC error occurs when writing image to ROM

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-RomInvalidParameter'></a>
### RomInvalidParameter `constants`

##### Summary

Parameter is not valid when using ROM image, such as wrong image number

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-RomSizeOverflow'></a>
### RomSizeOverflow `constants`

##### Summary

The image size exceed the limitation

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-WrongReportId'></a>
### WrongReportId `constants`

##### Summary

Wrong ReportId in received command.

<a name='F-Wacom-Devices-Types-STU-Status-ErrorCode-WrongState'></a>
### WrongState `constants`

##### Summary

Command was received when the tablet was in the wrong state, it cannot be processed.

<a name='T-Wacom-Devices-Internal-STU-FeatureReport_CurrentMessageImageArea'></a>
## FeatureReport_CurrentMessageImageArea `type`

##### Namespace

Wacom.Devices.Internal.STU

##### Summary

This command is only support in PIN and Key pad mode.

<a name='T-Wacom-Devices-FileTransferControlOptions'></a>
## FileTransferControlOptions `type`

##### Namespace

Wacom.Devices

##### Summary

Specifies the options for controlling the procedure of the file transfer service.

<a name='F-Wacom-Devices-FileTransferControlOptions-Cancel'></a>
### Cancel `constants`

##### Summary

The file transfer procedure must be cancelled (the head file in the queue is not deleted).

<a name='F-Wacom-Devices-FileTransferControlOptions-Continue'></a>
### Continue `constants`

##### Summary

The file transfer procedure must delete the head file from the queue and continue.

<a name='F-Wacom-Devices-FileTransferControlOptions-Retry'></a>
### Retry `constants`

##### Summary

The file transfer procedure must not delete the head file from the queue. The file will be transferred again.

<a name='T-Wacom-Devices-FileTransferException'></a>
## FileTransferException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a file transfer fails

<a name='T-Wacom-Devices-Types-STU-HandwritingInkThicknessColor'></a>
## HandwritingInkThicknessColor `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Color and thinkness of ink

##### Remarks

See [InkThickness](#T-Wacom-Devices-Types-STU-InkThickness 'Wacom.Devices.Types.STU.InkThickness')

<a name='M-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-#ctor-System-Drawing-Color,Wacom-Devices-Types-STU-InkThickness-'></a>
### #ctor(color,thickness) `constructor`

##### Summary

Initializes a new instance

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| color | [System.Drawing.Color](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Color 'System.Drawing.Color') | Color of ink |
| thickness | [Wacom.Devices.Types.STU.InkThickness](#T-Wacom-Devices-Types-STU-InkThickness 'Wacom.Devices.Types.STU.InkThickness') | Thickness of ink |

<a name='P-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-Color'></a>
### Color `property`

##### Summary

Ink Color

<a name='P-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-Thickness'></a>
### Thickness `property`

##### Summary

Ink thickness

##### Remarks

Not all models support all values

<a name='M-Wacom-Devices-Types-STU-HandwritingInkThicknessColor-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of the ink color and thickness

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Types-STU-HidInformation'></a>
## HidInformation `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

HID IDs for a device

<a name='F-Wacom-Devices-Types-STU-HidInformation-bcdDevice'></a>
### bcdDevice `constants`

##### Summary

Device release number in binary-coded decimal

<a name='F-Wacom-Devices-Types-STU-HidInformation-idProduct'></a>
### idProduct `constants`

##### Summary

Manfacturer assigned Product ID

<a name='F-Wacom-Devices-Types-STU-HidInformation-idVendor'></a>
### idVendor `constants`

##### Summary

USB-IF assigned Vendor ID

<a name='T-Wacom-Devices-IDigitalInkDevice'></a>
## IDigitalInkDevice `type`

##### Namespace

Wacom.Devices

##### Summary

Represents a digital ink device.

<a name='P-Wacom-Devices-IDigitalInkDevice-DeviceModel'></a>
### DeviceModel `property`

##### Summary

Gets the device model.

<a name='P-Wacom-Devices-IDigitalInkDevice-TransportProtocol'></a>
### TransportProtocol `property`

##### Summary

Gets the transport protocol.

<a name='M-Wacom-Devices-IDigitalInkDevice-Close'></a>
### Close() `method`

##### Summary

Closes the device.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-IDigitalInkDevice-GetNotification``1-System-String-'></a>
### GetNotification\`\`1(notificationId) `method`

##### Summary

Returns a notification interface for a given type of notification

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| notificationId | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Id of type of notification |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | The type of the event data generated by the notifications |

<a name='M-Wacom-Devices-IDigitalInkDevice-GetPropertyAsync-System-String,System-Threading-CancellationToken-'></a>
### GetPropertyAsync(propertyName,ct) `method`

##### Summary

Gets a device property.

##### Returns

After the async operation completes, returns the property value.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| propertyName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the property. |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

##### Remarks

See [](#N-Wacom-Devices-Properties 'Wacom.Devices.Properties') for supported properties
Use Convert.ToUint32() el al to avoid unboxing issues

<a name='M-Wacom-Devices-IDigitalInkDevice-GetService-System-String-'></a>
### GetService(serviceId) `method`

##### Summary

Gets a device service from the specified service Id.

##### Returns

Returns an object representing the requested service. Retures null if the device does not support the service.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| serviceId | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Identifier of the requested service. |

<a name='M-Wacom-Devices-IDigitalInkDevice-SetPropertyAsync-System-String,System-Object,System-Threading-CancellationToken-'></a>
### SetPropertyAsync(propertyName,value,ct) `method`

##### Summary

Sets a device property.

##### Returns

Returns a Task object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| propertyName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the property. |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Property value. |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

##### Remarks

See [](#N-Wacom-Devices-Properties 'Wacom.Devices.Properties') for supported properties

<a name='T-Wacom-Devices-IDiscreteDisplayService'></a>
## IDiscreteDisplayService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents the display service of a digital ink device with its own screen

<a name='P-Wacom-Devices-IDiscreteDisplayService-HeightPixels'></a>
### HeightPixels `property`

##### Summary

Height of device display in pixels

<a name='P-Wacom-Devices-IDiscreteDisplayService-IsInking'></a>
### IsInking `property`

##### Summary

Specifies whether inking is currently enabled

<a name='P-Wacom-Devices-IDiscreteDisplayService-PixelFormat'></a>
### PixelFormat `property`

##### Summary

Specifies the format of the color data supported by the diaplay

##### Remarks

Supported values are:
Format24bppRgb
Format16bppRgb565
Format1bppIndexed

<a name='P-Wacom-Devices-IDiscreteDisplayService-SupportsInking'></a>
### SupportsInking `property`

##### Summary

Specifies whether the display supports inking

<a name='P-Wacom-Devices-IDiscreteDisplayService-WidthPixels'></a>
### WidthPixels `property`

##### Summary

Width of device display in pixels

<a name='M-Wacom-Devices-IDiscreteDisplayService-ClearScreenAsync-System-Drawing-Color,System-Drawing-Rectangle,System-Threading-CancellationToken-'></a>
### ClearScreenAsync(color,area,ct) `method`

##### Summary

Clears part or all of the device display

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| color | [System.Drawing.Color](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Color 'System.Drawing.Color') | Color to clear screen with. To use current background color, 
and for monochrome devices, use

```
default
``` |
| area | [System.Drawing.Rectangle](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Rectangle 'System.Drawing.Rectangle') | Area to clear. Use

```
default
```

for whole screen |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-IDiscreteDisplayService-DisableInkingAsync-System-Threading-CancellationToken-'></a>
### DisableInkingAsync(ct) `method`

##### Summary

Disables inking on the device display

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-IDiscreteDisplayService-DrawImage-System-Drawing-Bitmap,System-Drawing-Rectangle,System-Drawing-Rectangle,System-Threading-CancellationToken-'></a>
### DrawImage(image,source,target,ct) `method`

##### Summary

Draws an image on the device display

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| image | [System.Drawing.Bitmap](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Bitmap 'System.Drawing.Bitmap') | Image to draw |
| source | [System.Drawing.Rectangle](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Rectangle 'System.Drawing.Rectangle') | Area of from source image to draw |
| target | [System.Drawing.Rectangle](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Rectangle 'System.Drawing.Rectangle') | Target area on device display in which to draw image.Use

```
default
```

for whole screen |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Not all models support a target area

<a name='M-Wacom-Devices-IDiscreteDisplayService-EnableInkingAsync-System-Drawing-Rectangle,System-Threading-CancellationToken-'></a>
### EnableInkingAsync(area,ct) `method`

##### Summary

Enables inking on the device display

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| area | [System.Drawing.Rectangle](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Rectangle 'System.Drawing.Rectangle') | Area within which ink will be displayed. Use

```
default
```

for whole screen/> |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Not all models support area

<a name='M-Wacom-Devices-IDiscreteDisplayService-GetInkColorAsync-System-Threading-CancellationToken-'></a>
### GetInkColorAsync(ct) `method`

##### Summary

Gets the current ink color

##### Returns

Ink color

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-IDiscreteDisplayService-SetInkColorAsync-System-Drawing-Color,System-Threading-CancellationToken-'></a>
### SetInkColorAsync(inkColor,ct) `method`

##### Summary

Sets the color of ink displayed on the device display

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inkColor | [System.Drawing.Color](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Color 'System.Drawing.Color') | Ink color to set |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Monochrome devices do not support ink color

<a name='T-Wacom-Devices-IEncryptionService'></a>
## IEncryptionService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents the encryption service of a digital ink device

<a name='P-Wacom-Devices-IEncryptionService-CipherSuite'></a>
### CipherSuite `property`

##### Summary

Returns a string representation the encryption types and parameters in use

<a name='M-Wacom-Devices-IEncryptionService-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync(ct) `method`

##### Summary

Starts the encryption service

##### Returns

Returns a Task object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token |

<a name='M-Wacom-Devices-IEncryptionService-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync(ct) `method`

##### Summary

Stops the encryption service

##### Returns

Returns a Task object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token |

<a name='T-Wacom-Devices-IFileTransferService'></a>
## IFileTransferService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents the file transfer service of a digital ink device.
The file transfer service allows for complete ink files (pages) to be transferred from the digital ink device.

<a name='P-Wacom-Devices-IFileTransferService-SyncInterval'></a>
### SyncInterval `property`

##### Summary

Specifies the time interval (in seconds) between subsequent attempts for file donwload.

##### Remarks

If there are no files on the device the service checks again after SyncInterval seconds. The value must be greater or equal to 1.
The property is used only for USB and Bluetooth Classic devices.

<a name='P-Wacom-Devices-IFileTransferService-Transform'></a>
### Transform `property`

##### Summary

A transform matrix that is applied to raw data points before they are added to an ink path.

<a name='M-Wacom-Devices-IFileTransferService-StartAsync-Wacom-Devices-ReceiveFileAsync,System-Threading-CancellationToken-'></a>
### StartAsync(receiveFilesDelegate,ct) `method`

##### Summary

Starts the file transfer service.

##### Returns

Returns a Task object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiveFilesDelegate | [Wacom.Devices.ReceiveFileAsync](#T-Wacom-Devices-ReceiveFileAsync 'Wacom.Devices.ReceiveFileAsync') | A method that will be called every time a file is downloaded. |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

<a name='M-Wacom-Devices-IFileTransferService-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync(ct) `method`

##### Summary

Stops the file transfer servce.

##### Returns

A Task object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

<a name='T-Wacom-Devices-IInkDeviceInfo'></a>
## IInkDeviceInfo `type`

##### Namespace

Wacom.Devices

##### Summary

Contains connection information for a digital ink device.

<a name='P-Wacom-Devices-IInkDeviceInfo-DeviceModel'></a>
### DeviceModel `property`

##### Summary

Type of device

<a name='P-Wacom-Devices-IInkDeviceInfo-DeviceName'></a>
### DeviceName `property`

##### Summary

Name of device

<a name='P-Wacom-Devices-IInkDeviceInfo-Id'></a>
### Id `property`

##### Summary

Device identifier

<a name='P-Wacom-Devices-IInkDeviceInfo-TransportProtocol'></a>
### TransportProtocol `property`

##### Summary

Type of connection to device

<a name='M-Wacom-Devices-IInkDeviceInfo-ToStream-System-IO-Stream-'></a>
### ToStream(stream) `method`

##### Summary

Writes connection information to a stream

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stream | [System.IO.Stream](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.IO.Stream 'System.IO.Stream') | Stream to write to |

<a name='T-Wacom-Devices-IInkDeviceNotification`1'></a>
## IInkDeviceNotification\`1 `type`

##### Namespace

Wacom.Devices

##### Summary

Generic interface for notifiations of a particular event type

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | The type of the event data generated by the event |

<a name='T-Wacom-Devices-IInkDeviceService'></a>
## IInkDeviceService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents a service of a digital ink device.

<a name='P-Wacom-Devices-IInkDeviceService-IsStarted'></a>
### IsStarted `property`

##### Summary

Gets a boolean value that indicated whether the service is started.

<a name='T-Wacom-Devices-IInkDeviceWatcher'></a>
## IInkDeviceWatcher `type`

##### Namespace

Wacom.Devices

##### Summary

Implemented by classes that are used to enumerate dynamically Wacom digital ink devices.
The application receives notifications whenever devices are added, removed or changed.

<a name='M-Wacom-Devices-IInkDeviceWatcher-Start'></a>
### Start() `method`

##### Summary

Starts the device watcher.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-IInkDeviceWatcher-Stop'></a>
### Stop() `method`

##### Summary

Stops the device watcher.

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-IInkDeviceWatcherBLE'></a>
## IInkDeviceWatcherBLE `type`

##### Namespace

Wacom.Devices

##### Summary

Dynamically enumerates Wacom digital ink devices that use the Bluetooth Low Energy protocol.
The application receives notifications whenever devices are added, removed or changed.

<a name='P-Wacom-Devices-IInkDeviceWatcherBLE-PollingInterval'></a>
### PollingInterval `property`

##### Summary

Interval between checks for BLE devices

<a name='P-Wacom-Devices-IInkDeviceWatcherBLE-Status'></a>
### Status `property`

##### Summary

Describes the state of a DeviceWatcher object.

<a name='T-Wacom-Devices-IInkDeviceWatcherBTC'></a>
## IInkDeviceWatcherBTC `type`

##### Namespace

Wacom.Devices

##### Summary

Dynamically enumerates Wacom digital ink devices that use the Bluetooth protocol.
The application receives notifications whenever devices are added, removed or changed.

<a name='P-Wacom-Devices-IInkDeviceWatcherBTC-Status'></a>
### Status `property`

##### Summary

Describes the state of a DeviceWatcher object.

<a name='T-Wacom-Devices-IInkDeviceWatcherUSB'></a>
## IInkDeviceWatcherUSB `type`

##### Namespace

Wacom.Devices

##### Summary

Dynamically enumerates Wacom digital ink devices that use the Bluetooth protocol.
The application receives notifications whenever devices are added, removed or changed.

<a name='P-Wacom-Devices-IInkDeviceWatcherUSB-Status'></a>
### Status `property`

##### Summary

Describes the state of a DeviceWatcher object.

<a name='T-Wacom-Devices-IInkDocument'></a>
## IInkDocument `type`

##### Namespace

Wacom.Devices

##### Summary



<a name='P-Wacom-Devices-IInkDocument-CreationDate'></a>
### CreationDate `property`

##### Summary

Document creation date and time

<a name='P-Wacom-Devices-IInkDocument-Layers'></a>
### Layers `property`

##### Summary

Collection of ink layers which make up the document

<a name='T-Wacom-Devices-IInkDocumentLayer'></a>
## IInkDocumentLayer `type`

##### Namespace

Wacom.Devices

##### Summary

Collection of storkes on an individual layer in an ink document

<a name='P-Wacom-Devices-IInkDocumentLayer-Strokes'></a>
### Strokes `property`

##### Summary

Returns the collection of Strokes that make up the layer

<a name='T-Wacom-Devices-IInkDocumentPoint'></a>
## IInkDocumentPoint `type`

##### Namespace

Wacom.Devices

##### Summary

Represents a single ink point in an ink document

<a name='P-Wacom-Devices-IInkDocumentPoint-Point'></a>
### Point `property`

##### Summary

X & Y coordinatges of the point

<a name='P-Wacom-Devices-IInkDocumentPoint-Pressure'></a>
### Pressure `property`

##### Summary

Pen pressure of the point

<a name='P-Wacom-Devices-IInkDocumentPoint-Valid'></a>
### Valid `property`

##### Summary

```
true
```

if the point is valid (has been initialized)

<a name='T-Wacom-Devices-IInkDocumentStroke'></a>
## IInkDocumentStroke `type`

##### Namespace

Wacom.Devices

##### Summary

Represents a complete stroke of ink in an ink document

<a name='P-Wacom-Devices-IInkDocumentStroke-PenId'></a>
### PenId `property`

##### Summary

Id of the pen used to create the stroke

<a name='P-Wacom-Devices-IInkDocumentStroke-PenType'></a>
### PenType `property`

##### Summary

Type of pen used to create the stroke

<a name='P-Wacom-Devices-IInkDocumentStroke-Points'></a>
### Points `property`

##### Summary

Collection of ink points that make up the stroke

<a name='P-Wacom-Devices-IInkDocumentStroke-Timestamp'></a>
### Timestamp `property`

##### Summary

Date & time of stroke creation

<a name='T-Wacom-Devices-Logging-ILog'></a>
## ILog `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

Simple interface that represent a logger.

<a name='M-Wacom-Devices-Logging-ILog-Log-Wacom-Devices-Logging-LogLevel,System-Func{System-String},System-Exception,System-Object[]-'></a>
### Log(logLevel,messageFunc,exception,formatParameters) `method`

##### Summary

Log a message the specified log level.

##### Returns

true if the message was logged. Otherwise false.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logLevel | [Wacom.Devices.Logging.LogLevel](#T-Wacom-Devices-Logging-LogLevel 'Wacom.Devices.Logging.LogLevel') | The log level. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | An optional exception. |
| formatParameters | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message generated by the messagefunc. |

##### Remarks

Note to implementers: the message func should not be called if the loglevel is not enabled
    so as not to incur performance penalties.
    To check IsEnabled call Log with only LogLevel and check the return value, no event will be written.

<a name='T-Wacom-Devices-Logging-ILogProvider'></a>
## ILogProvider `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

Represents a way to get a [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')

<a name='M-Wacom-Devices-Logging-ILogProvider-GetLogger-System-String-'></a>
### GetLogger(name) `method`

##### Summary

Gets the specified named logger.

##### Returns

The logger reference.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the logger. |

<a name='M-Wacom-Devices-Logging-ILogProvider-OpenMappedContext-System-String,System-Object,System-Boolean-'></a>
### OpenMappedContext(key,value,destructure) `method`

##### Summary

Opens a mapped diagnostics context. Not supported in EntLib logging.

##### Returns

A disposable that when disposed removes the map from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | A key. |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | A value. |
| destructure | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | Determines whether to call the destructor or not. |

<a name='M-Wacom-Devices-Logging-ILogProvider-OpenNestedContext-System-String-'></a>
### OpenNestedContext(message) `method`

##### Summary

Opens a nested diagnostics context. Not supported in EntLib logging.

##### Returns

A disposable that when disposed removes the message from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message to add to the diagnostics context. |

<a name='T-Wacom-Devices-IPairingModeService'></a>
## IPairingModeService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents BLE Pairing Mode helper service of a BLE digital ink device

<a name='P-Wacom-Devices-IPairingModeService-PairingModeEnabledCallback'></a>
### PairingModeEnabledCallback `property`

##### Summary

Gets or sets a delegate that is called when the device is switched to pairing mode.

<a name='T-Wacom-Devices-IRealTimeInkService'></a>
## IRealTimeInkService `type`

##### Namespace

Wacom.Devices

##### Summary

Represents the real-time ink service of a digital ink device.
The real-time ink service allows for ink strokes to be received "on the fly" while the user is writing.

<a name='P-Wacom-Devices-IRealTimeInkService-PointTransform'></a>
### PointTransform `property`

##### Summary

A transform matrix that is applied to raw data points before they are added to an ink path.

<a name='M-Wacom-Devices-IRealTimeInkService-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync(ct) `method`

##### Summary

Starts the real-time ink service.

##### Returns

Returns a Task object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

<a name='M-Wacom-Devices-IRealTimeInkService-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync(ct) `method`

##### Summary

Stops the real-time ink service.

##### Returns

Returns a Task object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token. |

<a name='T-Wacom-Devices-Types-STU-Information'></a>
## Information `type`

##### Namespace

Wacom.Devices.Types.STU

<a name='M-Wacom-Devices-Types-STU-Information-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of tablet capabilities

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-InkDeviceFactory'></a>
## InkDeviceFactory `type`

##### Namespace

Wacom.Devices

##### Summary

Represents a factory for digital ink devices.

<a name='F-Wacom-Devices-InkDeviceFactory-Instance'></a>
### Instance `constants`

##### Summary

Singleton instance of the factory class.

<a name='M-Wacom-Devices-InkDeviceFactory-CheckDeviceIsLicensed-Wacom-Devices-IInkDeviceInfo-'></a>
### CheckDeviceIsLicensed(devInfo) `method`

##### Summary

Checks if a license has been set which permits use of the given device

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| devInfo | [Wacom.Devices.IInkDeviceInfo](#T-Wacom-Devices-IInkDeviceInfo 'Wacom.Devices.IInkDeviceInfo') | Device to check |

<a name='M-Wacom-Devices-InkDeviceFactory-CreateDeviceAsync-Wacom-Devices-IInkDeviceInfo,Wacom-Devices-IApplicationIdentifier,System-Boolean,System-Boolean,System-EventHandler{Wacom-Devices-DeviceStatusChangedEventArgs},Wacom-Devices-PairingModeEnabledCallback-'></a>
### CreateDeviceAsync(info,appId,authorize,enableEncryption,deviceStatusChangedHandler,pairingModeEnabledCallback) `method`

##### Summary

Creates a new instance of a digital ink device and initializes it with the specified connection information.

##### Returns

On completion return a new instance that implements the IDigitalInkDevice interface.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| info | [Wacom.Devices.IInkDeviceInfo](#T-Wacom-Devices-IInkDeviceInfo 'Wacom.Devices.IInkDeviceInfo') | Device connection information. |
| appId | [Wacom.Devices.IApplicationIdentifier](#T-Wacom-Devices-IApplicationIdentifier 'Wacom.Devices.IApplicationIdentifier') | Identifier of the SmartPad client. |
| authorize | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | Specifies whether the method must perform pairing and authorization procedures.
Set this parameter to true only when the InkDeviceInfo object is newly created by the InkDeviceWatcher.
If the InkDeviceInfo parameter is created from deserialization - set this parameter to false. |
| enableEncryption | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | A value indicating whether the device must use encrypted communication. |
| deviceStatusChangedHandler | [System.EventHandler{Wacom.Devices.DeviceStatusChangedEventArgs}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.EventHandler 'System.EventHandler{Wacom.Devices.DeviceStatusChangedEventArgs}') | A handler for the UserActionRequired events that might be rised during initialization. |
| pairingModeEnabledCallback | [Wacom.Devices.PairingModeEnabledCallback](#T-Wacom-Devices-PairingModeEnabledCallback 'Wacom.Devices.PairingModeEnabledCallback') | A delegate that is called when the device is switched to pairing mode. |

<a name='T-Wacom-Devices-InkDeviceInfo'></a>
## InkDeviceInfo `type`

##### Namespace

Wacom.Devices

##### Summary

Supports retrieval of ink device information from streams

<a name='M-Wacom-Devices-InkDeviceInfo-FromIdAsync-System-String,Wacom-Devices-TransportProtocol,Wacom-Devices-DeviceModel-'></a>
### FromIdAsync(deviceId,transportProtocol,deviceModel) `method`

##### Summary

Creates a new instance of InkDeviceInfo and initializes it from device Id, transport protocol and device model.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| deviceId | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The device id as provided by Windows. |
| transportProtocol | [Wacom.Devices.TransportProtocol](#T-Wacom-Devices-TransportProtocol 'Wacom.Devices.TransportProtocol') | The transport protocol. |
| deviceModel | [Wacom.Devices.DeviceModel](#T-Wacom-Devices-DeviceModel 'Wacom.Devices.DeviceModel') | The device model. |

<a name='M-Wacom-Devices-InkDeviceInfo-FromStreamAsync-System-IO-Stream-'></a>
### FromStreamAsync(stream) `method`

##### Summary

Creates a new instance of InkDeviceInfo and initializes it from information read from a stream

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stream | [System.IO.Stream](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.IO.Stream 'System.IO.Stream') | Stream to read information from |

<a name='T-Wacom-Devices-InkDeviceService'></a>
## InkDeviceService `type`

##### Namespace

Wacom.Devices

##### Summary

Specifies the supported device services.

<a name='F-Wacom-Devices-InkDeviceService-DiscreteDisplay'></a>
### DiscreteDisplay `constants`

##### Summary

Discrete Display service

<a name='F-Wacom-Devices-InkDeviceService-Encryption'></a>
### Encryption `constants`

##### Summary

Encryption service

<a name='F-Wacom-Devices-InkDeviceService-FileTransfer'></a>
### FileTransfer `constants`

##### Summary

File Transfer service

<a name='F-Wacom-Devices-InkDeviceService-PairingMode'></a>
### PairingMode `constants`

##### Summary

BLE Pairing Mode helper service.

<a name='F-Wacom-Devices-InkDeviceService-RealTimeInk'></a>
### RealTimeInk `constants`

##### Summary

Real-time Ink service.

<a name='T-Wacom-Devices-InkDeviceWatcher'></a>
## InkDeviceWatcher `type`

##### Namespace

Wacom.Devices

##### Summary

Creates device watcher objects to dynamically enumerate digital ink devices on 
particular transport protocols

<a name='P-Wacom-Devices-InkDeviceWatcher-BLE'></a>
### BLE `property`

##### Summary

Creates a watcher object for enumerating digital ink devices using the Bluetooth Low Energy protocol

<a name='P-Wacom-Devices-InkDeviceWatcher-BTC'></a>
### BTC `property`

##### Summary

Creates a watcher object for enumerating digital ink devices using the Bluetooth protocol

<a name='P-Wacom-Devices-InkDeviceWatcher-USB'></a>
### USB `property`

##### Summary

Creates a watcher object for enumerating digital ink devices using the USB protocol

<a name='T-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl'></a>
## InkDeviceWatcherBLEImpl `type`

##### Namespace

Wacom.Devices.Internal

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initializes a new instance of this class.

##### Parameters

This constructor has no parameters.

<a name='P-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-PollingInterval'></a>
### PollingInterval `property`

##### Summary



<a name='P-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Status'></a>
### Status `property`

##### Summary

Gets the status of the Bluetooth Low Energy watcher.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Start'></a>
### Start() `method`

##### Summary

Starts the device watcher.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBLEImpl-Stop'></a>
### Stop() `method`

##### Summary

Stops the device watcher.

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl'></a>
## InkDeviceWatcherBTCImpl `type`

##### Namespace

Wacom.Devices.Internal

##### Summary

Dynamically enumerates Wacom digital ink devices that use the Bluetooth protocol.
The application receives notifications whenever devices are added, removed or changed.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initializes a new instance of this class.

##### Parameters

This constructor has no parameters.

<a name='P-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Status'></a>
### Status `property`

##### Summary

The status of the device watcher.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Start'></a>
### Start() `method`

##### Summary

Starts the device watcher.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherBTCImpl-Stop'></a>
### Stop() `method`

##### Summary

Stops the device watcher.

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl'></a>
## InkDeviceWatcherUSBImpl `type`

##### Namespace

Wacom.Devices.Internal

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initializes a new instance of this class.

##### Parameters

This constructor has no parameters.

<a name='P-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Status'></a>
### Status `property`

##### Summary

The status of the device watcher.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Start'></a>
### Start() `method`

##### Summary

Starts the device watcher.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-InkDeviceWatcherUSBImpl-Stop'></a>
### Stop() `method`

##### Summary

Stops the device watcher.

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-STU-InkThickness'></a>
## InkThickness `type`

##### Namespace

Wacom.Devices.Internal.STU

##### Summary

Specifies the thickness of inking on the LCD screen

<a name='T-Wacom-Devices-Types-STU-InkThickness'></a>
## InkThickness `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Specifies the thickness of inking on the LCD screen

##### Remarks

Not all models support all values

<a name='F-Wacom-Devices-Internal-STU-InkThickness-Bold'></a>
### Bold `constants`

##### Summary

7 pixels

<a name='F-Wacom-Devices-Internal-STU-InkThickness-Medium'></a>
### Medium `constants`

##### Summary

5 pixels

<a name='F-Wacom-Devices-Internal-STU-InkThickness-Thin'></a>
### Thin `constants`

##### Summary

3 pixels (default)

<a name='F-Wacom-Devices-Internal-STU-InkThickness-VeryThin'></a>
### VeryThin `constants`

##### Summary

1 pixel

<a name='F-Wacom-Devices-Types-STU-InkThickness-Bold'></a>
### Bold `constants`

##### Summary

7 pixels

<a name='F-Wacom-Devices-Types-STU-InkThickness-Medium'></a>
### Medium `constants`

##### Summary

5 pixels

<a name='F-Wacom-Devices-Types-STU-InkThickness-Thin'></a>
### Thin `constants`

##### Summary

3 pixels (default)

<a name='F-Wacom-Devices-Types-STU-InkThickness-VeryThin'></a>
### VeryThin `constants`

##### Summary

1 pixel

<a name='T-Wacom-Devices-Types-STU-InkThreshold'></a>
## InkThreshold `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Pressure thresholds for inking on device screen

<a name='M-Wacom-Devices-Types-STU-InkThreshold-#ctor-System-UInt16,System-UInt16-'></a>
### #ctor(on,off) `constructor`

##### Summary

Initializes a new instance

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| on | [System.UInt16](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt16 'System.UInt16') | Pressure threshold for starting inking |
| off | [System.UInt16](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt16 'System.UInt16') | Pressure threshold for stopping inking |

<a name='P-Wacom-Devices-Types-STU-InkThreshold-OffPressureMark'></a>
### OffPressureMark `property`

##### Summary

Pressure threshold for stopping inking

<a name='P-Wacom-Devices-Types-STU-InkThreshold-OnPressureMark'></a>
### OnPressureMark `property`

##### Summary

Pressure threshold for starting inking

<a name='M-Wacom-Devices-Types-STU-InkThreshold-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of the ink thresholds

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Types-STU-InkingMode'></a>
## InkingMode `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Specifies whether inking on the LCD screen is enabled

<a name='T-Wacom-Devices-InvalidFileFormatException'></a>
## InvalidFileFormatException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when invalid data is detected in a file recieved from a device

<a name='T-Wacom-Devices-InvalidStateException'></a>
## InvalidStateException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a device reports itself as being in an invalid state

<a name='T-Wacom-Devices-Logging-LogProviders-LibLogException'></a>
## LibLogException `type`

##### Namespace

Wacom.Devices.Logging.LogProviders

##### Summary

Exception thrown by LibLog.

<a name='M-Wacom-Devices-Logging-LogProviders-LibLogException-#ctor-System-String-'></a>
### #ctor(message) `constructor`

##### Summary

Initializes a new LibLogException with the specified message.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message |

<a name='M-Wacom-Devices-Logging-LogProviders-LibLogException-#ctor-System-String,System-Exception-'></a>
### #ctor(message,inner) `constructor`

##### Summary

Initializes a new LibLogException with the specified message and inner exception.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| inner | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The inner exception. |

<a name='T-Wacom-Devices-Logging-LogExtensions'></a>
## LogExtensions `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

Extension methods for the [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') interface.

<a name='M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Debug(logger,messageFunc) `method`

##### Summary

Logs a message at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-String-'></a>
### Debug(logger,message) `method`

##### Summary

Logs a message at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Debug(logger,message,args) `method`

##### Summary

Logs a message at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Debug-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Debug(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-DebugException-Wacom-Devices-Logging-ILog,System-String,System-Exception-'></a>
### DebugException(logger,message,exception) `method`

##### Summary

Logs an exception at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |

<a name='M-Wacom-Devices-Logging-LogExtensions-DebugException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### DebugException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-DebugFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### DebugFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Error(logger,messageFunc) `method`

##### Summary

Logs a message at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-String-'></a>
### Error(logger,message) `method`

##### Summary

Logs a message at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Error(logger,message,args) `method`

##### Summary

Logs a message at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Error-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Error(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-ErrorException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### ErrorException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-ErrorFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### ErrorFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Fatal(logger,messageFunc) `method`

##### Summary

Logs a message at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-String-'></a>
### Fatal(logger,message) `method`

##### Summary

Logs a message at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Fatal(logger,message,args) `method`

##### Summary

Logs a message at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Fatal-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Fatal(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-FatalException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### FatalException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-FatalFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### FatalFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Info(logger,messageFunc) `method`

##### Summary

Logs a message at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-String-'></a>
### Info(logger,message) `method`

##### Summary

Logs a message at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Info(logger,message,args) `method`

##### Summary

Logs a message at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Info-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Info(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-InfoException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### InfoException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-InfoFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### InfoFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsDebugEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsDebugEnabled(logger) `method`

##### Summary

Check if the [Debug](#F-Wacom-Devices-Logging-LogLevel-Debug 'Wacom.Devices.Logging.LogLevel.Debug') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsErrorEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsErrorEnabled(logger) `method`

##### Summary

Check if the [Error](#F-Wacom-Devices-Logging-LogLevel-Error 'Wacom.Devices.Logging.LogLevel.Error') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsFatalEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsFatalEnabled(logger) `method`

##### Summary

Check if the [Fatal](#F-Wacom-Devices-Logging-LogLevel-Fatal 'Wacom.Devices.Logging.LogLevel.Fatal') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsInfoEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsInfoEnabled(logger) `method`

##### Summary

Check if the [Info](#F-Wacom-Devices-Logging-LogLevel-Info 'Wacom.Devices.Logging.LogLevel.Info') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsTraceEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsTraceEnabled(logger) `method`

##### Summary

Check if the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-IsWarnEnabled-Wacom-Devices-Logging-ILog-'></a>
### IsWarnEnabled(logger) `method`

##### Summary

Check if the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level is enabled.

##### Returns

True if the log level is enabled; false otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to check with. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Trace(logger,messageFunc) `method`

##### Summary

Logs a message at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-String-'></a>
### Trace(logger,message) `method`

##### Summary

Logs a message at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Trace(logger,message,args) `method`

##### Summary

Logs a message at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Trace-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Trace(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-TraceException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### TraceException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-TraceFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### TraceFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Trace](#F-Wacom-Devices-Logging-LogLevel-Trace 'Wacom.Devices.Logging.LogLevel.Trace') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-Func{System-String}-'></a>
### Warn(logger,messageFunc) `method`

##### Summary

Logs a message at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| messageFunc | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message function. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-String-'></a>
### Warn(logger,message) `method`

##### Summary

Logs a message at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### Warn(logger,message,args) `method`

##### Summary

Logs a message at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-Warn-Wacom-Devices-Logging-ILog,System-Exception,System-String,System-Object[]-'></a>
### Warn(logger,exception,message,args) `method`

##### Summary

Logs an exception at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-WarnException-Wacom-Devices-Logging-ILog,System-String,System-Exception,System-Object[]-'></a>
### WarnException(logger,message,exception,args) `method`

##### Summary

Logs an exception at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The exception. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='M-Wacom-Devices-Logging-LogExtensions-WarnFormat-Wacom-Devices-Logging-ILog,System-String,System-Object[]-'></a>
### WarnFormat(logger,message,args) `method`

##### Summary

Logs a message at the [Warn](#F-Wacom-Devices-Logging-LogLevel-Warn 'Wacom.Devices.Logging.LogLevel.Warn') log level, if enabled.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logger | [Wacom.Devices.Logging.ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') | The [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') to use. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Optional format parameters for the message. |

<a name='T-Wacom-Devices-Logging-LogLevel'></a>
## LogLevel `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

The log level.

<a name='F-Wacom-Devices-Logging-LogLevel-Debug'></a>
### Debug `constants`

##### Summary

Debug

<a name='F-Wacom-Devices-Logging-LogLevel-Error'></a>
### Error `constants`

##### Summary

Error

<a name='F-Wacom-Devices-Logging-LogLevel-Fatal'></a>
### Fatal `constants`

##### Summary

Fatal

<a name='F-Wacom-Devices-Logging-LogLevel-Info'></a>
### Info `constants`

##### Summary

Info

<a name='F-Wacom-Devices-Logging-LogLevel-Trace'></a>
### Trace `constants`

##### Summary

Trace

<a name='F-Wacom-Devices-Logging-LogLevel-Warn'></a>
### Warn `constants`

##### Summary

Warn

<a name='T-Wacom-Devices-Logging-LogProviders-LogMessageFormatter'></a>
## LogMessageFormatter `type`

##### Namespace

Wacom.Devices.Logging.LogProviders

<a name='M-Wacom-Devices-Logging-LogProviders-LogMessageFormatter-SimulateStructuredLogging-System-Func{System-String},System-Object[]-'></a>
### SimulateStructuredLogging(messageBuilder,formatParameters) `method`

##### Summary

Some logging frameworks support structured logging, such as serilog. This will allow you to add names to structured
    data in a format string:
    For example: Log("Log message to {user}", user). This only works with serilog, but as the user of LibLog, you don't
    know if serilog is actually
    used. So, this class simulates that. it will replace any text in {curly braces} with an index number.
    "Log {message} to {user}" would turn into => "Log {0} to {1}". Then the format parameters are handled using regular
    .net string.Format.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| messageBuilder | [System.Func{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.String}') | The message builder. |
| formatParameters | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | The format parameters. |

<a name='T-Wacom-Devices-Logging-LogProvider'></a>
## LogProvider `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

Provides a mechanism to create instances of [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog') objects.

<a name='P-Wacom-Devices-Logging-LogProvider-IsDisabled'></a>
### IsDisabled `property`

##### Summary

Gets or sets a value indicating whether this is logging is disabled.

<a name='P-Wacom-Devices-Logging-LogProvider-OnCurrentLogProviderSet'></a>
### OnCurrentLogProviderSet `property`

##### Summary

Sets an action that is invoked when a consumer of your library has called SetCurrentLogProvider. It is 
important that hook into this if you are using child libraries (especially ilmerged ones) that are using
LibLog (or other logging abstraction) so you adapt and delegate to them.
[SetCurrentLogProvider](#M-Wacom-Devices-Logging-LogProvider-SetCurrentLogProvider-Wacom-Devices-Logging-ILogProvider- 'Wacom.Devices.Logging.LogProvider.SetCurrentLogProvider(Wacom.Devices.Logging.ILogProvider)')

<a name='M-Wacom-Devices-Logging-LogProvider-For``1'></a>
### For\`\`1() `method`

##### Summary

Gets a logger for the specified type.

##### Returns

An instance of [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')

##### Parameters

This method has no parameters.

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | The type whose name will be used for the logger. |

<a name='M-Wacom-Devices-Logging-LogProvider-GetCurrentClassLogger'></a>
### GetCurrentClassLogger() `method`

##### Summary

Gets a logger for the current class.

##### Returns

An instance of [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Logging-LogProvider-GetLogger-System-Type,System-String-'></a>
### GetLogger(type,fallbackTypeName) `method`

##### Summary

Gets a logger for the specified type.

##### Returns

An instance of [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| type | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | The type whose name will be used for the logger. |
| fallbackTypeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | If the type is null then this name will be used as the log name instead |

<a name='M-Wacom-Devices-Logging-LogProvider-GetLogger-System-String-'></a>
### GetLogger(name) `method`

##### Summary

Gets a logger with the specified name.

##### Returns

An instance of [ILog](#T-Wacom-Devices-Logging-ILog 'Wacom.Devices.Logging.ILog')

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name. |

<a name='M-Wacom-Devices-Logging-LogProvider-OpenMappedContext-System-String,System-Object,System-Boolean-'></a>
### OpenMappedContext(key,value,destructure) `method`

##### Summary

Opens a mapped diagnostics context.

##### Returns

An [IDisposable](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.IDisposable 'System.IDisposable') that closes context when disposed.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | A key. |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | A value. |
| destructure | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | A optional paramater to indicate message should be destructured. |

<a name='M-Wacom-Devices-Logging-LogProvider-OpenNestedContext-System-String-'></a>
### OpenNestedContext(message) `method`

##### Summary

Opens a nested diagnostics context.

##### Returns

An [IDisposable](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.IDisposable 'System.IDisposable') that closes context when disposed.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | A message. |

<a name='M-Wacom-Devices-Logging-LogProvider-SetCurrentLogProvider-Wacom-Devices-Logging-ILogProvider-'></a>
### SetCurrentLogProvider(logProvider) `method`

##### Summary

Sets the current log provider.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logProvider | [Wacom.Devices.Logging.ILogProvider](#T-Wacom-Devices-Logging-ILogProvider 'Wacom.Devices.Logging.ILogProvider') | The log provider. |

<a name='T-Wacom-Devices-Logging-LogProviders-LogProviderBase'></a>
## LogProviderBase `type`

##### Namespace

Wacom.Devices.Logging.LogProviders

##### Summary

Base class for specific log providers.

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-#ctor'></a>
### #ctor() `constructor`

##### Summary

Initialize an instance of the [LogProviderBase](#T-Wacom-Devices-Logging-LogProviders-LogProviderBase 'Wacom.Devices.Logging.LogProviders.LogProviderBase') class by initializing the references
    to the nested and mapped diagnostics context-obtaining functions.

##### Parameters

This constructor has no parameters.

<a name='F-Wacom-Devices-Logging-LogProviders-LogProviderBase-ErrorInitializingProvider'></a>
### ErrorInitializingProvider `constants`

##### Summary

Error message should initializing the log provider fail.

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-FindType-System-String,System-String-'></a>
### FindType(typeName,assemblyName) `method`

##### Summary

Finds a type using a type name and assembly name.

##### Returns

The requested type or null if it was not found.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| typeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the type. |
| assemblyName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the assembly. |

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-FindType-System-String,System-Collections-Generic-IReadOnlyList{System-String}-'></a>
### FindType(typeName,assemblyNames) `method`

##### Summary

Finds a type using a type name and a list of assembly names to search.

##### Returns

The request type or null if it was not found.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| typeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the type. |
| assemblyNames | [System.Collections.Generic.IReadOnlyList{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.IReadOnlyList 'System.Collections.Generic.IReadOnlyList{System.String}') | A list of assembly names to search. |

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetLogger-System-String-'></a>
### GetLogger(name) `method`

##### Summary

Gets the specified named logger.

##### Returns

The logger reference.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the logger. |

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetOpenMdcMethod'></a>
### GetOpenMdcMethod() `method`

##### Summary

Returns the provider-specific method to open a mapped diagnostics context.

##### Returns

A provider-specific method to open a mapped diagnostics context.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-GetOpenNdcMethod'></a>
### GetOpenNdcMethod() `method`

##### Summary

Returns the provider-specific method to open a nested diagnostics context.

##### Returns

A provider-specific method to open a nested diagnostics context.

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenMappedContext-System-String,System-Object,System-Boolean-'></a>
### OpenMappedContext(key,value,destructure) `method`

##### Summary

Opens a mapped diagnostics context. Not supported in EntLib logging.

##### Returns

A disposable that when disposed removes the map from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | A key. |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | A value. |
| destructure | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | Determines whether to call the destructor or not. |

<a name='M-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenNestedContext-System-String-'></a>
### OpenNestedContext(message) `method`

##### Summary

Opens a nested diagnostics context. Not supported in EntLib logging.

##### Returns

A disposable that when disposed removes the message from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message to add to the diagnostics context. |

<a name='T-Wacom-Devices-Logging-Logger'></a>
## Logger `type`

##### Namespace

Wacom.Devices.Logging

##### Summary

Logger delegate.

##### Returns

A boolean.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logLevel | [T:Wacom.Devices.Logging.Logger](#T-T-Wacom-Devices-Logging-Logger 'T:Wacom.Devices.Logging.Logger') | The log level |

<a name='T-Wacom-Devices-Logging-LogProviders-LoupeLogProvider'></a>
## LoupeLogProvider `type`

##### Namespace

Wacom.Devices.Logging.LogProviders

<a name='P-Wacom-Devices-Logging-LogProviders-LoupeLogProvider-ProviderIsAvailableOverride'></a>
### ProviderIsAvailableOverride `property`

##### Summary

Gets or sets a value indicating whether [provider is available override]. Used in tests.

<a name='T-Wacom-Devices-Notification'></a>
## Notification `type`

##### Namespace

Wacom.Devices

##### Summary

Names of Notification types

<a name='T-Wacom-Devices-Types-SmartPad-Notifications'></a>
## Notifications `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies whether notificaitons of a particular type are enabled or disabled

<a name='T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenMdc'></a>
## OpenMdc `type`

##### Namespace

Wacom.Devices.Logging.LogProviders.LogProviderBase

##### Summary

Delegate defining the signature of the method opening a mapped diagnostics context.

##### Returns

A disposable that when disposed removes the map from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | [T:Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenMdc](#T-T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenMdc 'T:Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenMdc') | A key. |

<a name='T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenNdc'></a>
## OpenNdc `type`

##### Namespace

Wacom.Devices.Logging.LogProviders.LogProviderBase

##### Summary

Delegate defining the signature of the method opening a nested diagnostics context.

##### Returns

A disposable that when disposed removes the message from the context.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| message | [T:Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenNdc](#T-T-Wacom-Devices-Logging-LogProviders-LogProviderBase-OpenNdc 'T:Wacom.Devices.Logging.LogProviders.LogProviderBase.OpenNdc') | The message to add to the diagnostics context. |

<a name='T-Wacom-Devices-Internal-STU-OperationMode'></a>
## OperationMode `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-OperationMode-CreateKeyPad-System-Byte,System-Byte-'></a>
### CreateKeyPad() `method`

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-PairingModeEnabledCallback'></a>
## PairingModeEnabledCallback `type`

##### Namespace

Wacom.Devices

##### Summary

A callback method that is called when a Bluetooth LE device is switched into pairing mode while connected to the app.

##### Returns

The callback must return true if the current application must be authorized.
Return true when the user wants to start or continue using the device with the current app.
Return false when the user wants to stop using the device with the current app.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isAuthorized | [T:Wacom.Devices.PairingModeEnabledCallback](#T-T-Wacom-Devices-PairingModeEnabledCallback 'T:Wacom.Devices.PairingModeEnabledCallback') | This parameter is set to true if the device is already authorized in the current session. |

<a name='T-Wacom-Devices-ParameterNotSupportedException'></a>
## ParameterNotSupportedException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when a device does not support a particular parameter

<a name='T-Wacom-Devices-Internal-STU-PenDataOptionMode'></a>
## PenDataOptionMode `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='T-Wacom-Devices-Types-STU-PenDataOptionMode'></a>
## PenDataOptionMode `type`

##### Namespace

Wacom.Devices.Types.STU

<a name='F-Wacom-Devices-Internal-STU-PenDataOptionMode-None'></a>
### None `constants`

##### Summary

Report PenData/PenDataEncrypted.

<a name='F-Wacom-Devices-Internal-STU-PenDataOptionMode-SequenceNumber'></a>
### SequenceNumber `constants`

##### Summary

Report PenDataOption/PenDataEncryptedOption with sequenceNumber field set.

<a name='F-Wacom-Devices-Internal-STU-PenDataOptionMode-TimeCount'></a>
### TimeCount `constants`

##### Summary

Report PenDataOption/PenDataEncryptedOption with timeCount field set. (520 only)

<a name='F-Wacom-Devices-Internal-STU-PenDataOptionMode-TimeCountSequence'></a>
### TimeCountSequence `constants`

##### Summary

Report PenDataTimeCountSequence/PenDataTimeCountSequenceEncrypted with sequenceNumber field set. (430/530/540 only)

<a name='F-Wacom-Devices-Types-STU-PenDataOptionMode-None'></a>
### None `constants`

##### Summary

Report PenData/PenDataEncrypted.

<a name='F-Wacom-Devices-Types-STU-PenDataOptionMode-SequenceNumber'></a>
### SequenceNumber `constants`

##### Summary

Report PenDataOption/PenDataEncryptedOption with sequenceNumber field set.

<a name='F-Wacom-Devices-Types-STU-PenDataOptionMode-TimeCount'></a>
### TimeCount `constants`

##### Summary

Report PenDataOption/PenDataEncryptedOption with timeCount field set. (520 only)

<a name='F-Wacom-Devices-Types-STU-PenDataOptionMode-TimeCountSequence'></a>
### TimeCountSequence `constants`

##### Summary

Report PenDataTimeCountSequence/PenDataTimeCountSequenceEncrypted with sequenceNumber field set. (430/530/540 only)

<a name='T-Wacom-Devices-Types-SmartPad-PenDetectedLedMode'></a>
## PenDetectedLedMode `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies the flash frequency of the LED indicator when pen detected event is reported

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-Fast'></a>
### Fast `constants`

##### Summary

LED indicator flashes quickly

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-None'></a>
### None `constants`

##### Summary

LED indicator does not flash

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedLedMode-Slow'></a>
### Slow `constants`

##### Summary

LED indicator flashes slowly

<a name='T-Wacom-Devices-Types-SmartPad-PenDetectedSound'></a>
## PenDetectedSound `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies the sound effect produced when pen detected event is reported

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedSound-None'></a>
### None `constants`

##### Summary

No sound effect

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound1'></a>
### Sound1 `constants`

##### Summary

Sound effect #1

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound2'></a>
### Sound2 `constants`

##### Summary

Sound effect #2

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedSound-Sound3'></a>
### Sound3 `constants`

##### Summary

Sound effect #3

<a name='T-Wacom-Devices-Types-SmartPad-PenDetectedVolume'></a>
## PenDetectedVolume `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies the volume of the sound effect produced when pen detected event is reported

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-High'></a>
### High `constants`

##### Summary

High volume

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-Low'></a>
### Low `constants`

##### Summary

Low volume

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-Med'></a>
### Med `constants`

##### Summary

Middle volume

<a name='F-Wacom-Devices-Types-SmartPad-PenDetectedVolume-None'></a>
### None `constants`

##### Summary

No sound

<a name='T-Wacom-Devices-Internal-STU-Protocol'></a>
## Protocol `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetBacklightBrightnessAsync-System-Threading-CancellationToken-'></a>
### GetBacklightBrightnessAsync(ct) `method`

##### Summary

Gets the tablet back-light brightness setting

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetInkThresholdAsync-System-Threading-CancellationToken-'></a>
### GetInkThresholdAsync(ct) `method`

##### Summary

Gets pressure thresholds used for drawing ink on LCD screen

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetInkingModeAsync-System-Threading-CancellationToken-'></a>
### GetInkingModeAsync(ct) `method`

##### Summary

Determines whether inking (on the LCD screen) is enabled

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetOperationModeAsync-System-Threading-CancellationToken-'></a>
### GetOperationModeAsync(ct) `method`

##### Summary

Gets the current operating mode that tablet is running in

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetPenDataOptionModeAsync-System-Threading-CancellationToken-'></a>
### GetPenDataOptionModeAsync(ct) `method`

##### Summary

Retrieves the set option mode

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetRenderingModeAsync-System-Threading-CancellationToken-'></a>
### GetRenderingModeAsync(ct) `method`

##### Summary

Gets the current ink algorithm for the tablet

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetReportRateAsync-System-Threading-CancellationToken-'></a>
### GetReportRateAsync(ct) `method`

##### Summary

Retrieves the packet report rate for serial devices.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetReportSizeCollectionAsync-System-Threading-CancellationToken-'></a>
### GetReportSizeCollectionAsync(ct) `method`

##### Summary

Retrieves the size of each supported report

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Only supported on the 430V when in serial mode.

<a name='M-Wacom-Devices-Internal-STU-Protocol-GetRomImageHashAsync-System-Threading-CancellationToken-'></a>
### GetRomImageHashAsync(ct) `method`

##### Summary

Gets the image hash that has been requested

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetBacklightBrightnessAsync-System-UInt16,System-Threading-CancellationToken-'></a>
### SetBacklightBrightnessAsync(brightness,ct) `method`

##### Summary

Sets the tablet back-light brightness setting

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| brightness | [System.UInt16](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt16 'System.UInt16') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetInkThresholdAsync-System-UInt16,System-UInt16,System-Threading-CancellationToken-'></a>
### SetInkThresholdAsync(onPressureMark,offPressureMark,ct) `method`

##### Summary

Sets pressure thresholds used for drawing ink on LCD screen

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| onPressureMark | [System.UInt16](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt16 'System.UInt16') | Threshold value for starting inking |
| offPressureMark | [System.UInt16](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt16 'System.UInt16') | Threshold value for stopping inking |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetInkingModeAsync-Wacom-Devices-Internal-STU-InkingMode,System-Threading-CancellationToken-'></a>
### SetInkingModeAsync(value,ct) `method`

##### Summary

Enables and disables inking on the LCD screen

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [Wacom.Devices.Internal.STU.InkingMode](#T-Wacom-Devices-Internal-STU-InkingMode 'Wacom.Devices.Internal.STU.InkingMode') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetOperationModeAsync-Wacom-Devices-Internal-STU-OperationMode,System-Threading-CancellationToken-'></a>
### SetOperationModeAsync(value,ct) `method`

##### Summary

Sets the operating mode that tablet should run in

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [Wacom.Devices.Internal.STU.OperationMode](#T-Wacom-Devices-Internal-STU-OperationMode 'Wacom.Devices.Internal.STU.OperationMode') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetPenDataOptionModeAsync-Wacom-Devices-Internal-STU-PenDataOptionMode,System-Threading-CancellationToken-'></a>
### SetPenDataOptionModeAsync(value,ct) `method`

##### Summary

Enables or disables an option mode.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [Wacom.Devices.Internal.STU.PenDataOptionMode](#T-Wacom-Devices-Internal-STU-PenDataOptionMode 'Wacom.Devices.Internal.STU.PenDataOptionMode') | The new setting |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Not all tablets and firmwares support all option modes

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetRenderingModeAsync-Wacom-Devices-Internal-STU-RenderingMode,System-Threading-CancellationToken-'></a>
### SetRenderingModeAsync(value,ct) `method`

##### Summary

Sets the ink algorithm for the tablet

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [Wacom.Devices.Internal.STU.RenderingMode](#T-Wacom-Devices-Internal-STU-RenderingMode 'Wacom.Devices.Internal.STU.RenderingMode') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetReportRateAsync-System-Byte,System-Threading-CancellationToken-'></a>
### SetReportRateAsync(reportRate_,ct) `method`

##### Summary

Sets the packet report rate for serial devices

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reportRate_ | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | report rate (150 or 200) |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

This feature is only supported in VCP mode, for USB HID mode, the report rate is fixed as 200 report/second.
The report rate will be back to default after reboot, app need to set it each time after it is connected.
The change of reportrate will soft reset the device, which means settings such as inking threshold will be back to default.
Supported values are: 150, 200

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetResetAsync-Wacom-Devices-Internal-STU-ResetFlag,System-Threading-CancellationToken-'></a>
### SetResetAsync(resetFlag,ct) `method`

##### Summary

Sends a reset command to the tablet

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| resetFlag | [Wacom.Devices.Internal.STU.ResetFlag](#T-Wacom-Devices-Internal-STU-ResetFlag 'Wacom.Devices.Internal.STU.ResetFlag') | Type of reset to perform |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Resets the tablet:
  - Status is switched to StatusCode_Ready.
  - Background is cleared to white.
  - Inking Mode is set ON.
  - Encryption mode is set OFF.
  - Pen data option is set OFF.
 The following is set to default:
  - Ink threshold
  - Image area
  - Clear screen area
  - Handwriting display area
  - Handwriting thickness
  - Handwriting color
  - Background color
  Following a Hardware reset you must re-open the USB connection

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetRomImageDeleteAsync-Wacom-Devices-Internal-STU-RomImageDeleteMode,System-Boolean,System-Int32,System-Threading-CancellationToken-'></a>
### SetRomImageDeleteAsync(operationMode,imageType,imageNumber,ct) `method`

##### Summary

Deletes one, some or all images from flash memory

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationMode | [Wacom.Devices.Internal.STU.RomImageDeleteMode](#T-Wacom-Devices-Internal-STU-RomImageDeleteMode 'Wacom.Devices.Internal.STU.RomImageDeleteMode') |  |
| imageType | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | false=not pushed / default message; true=pushed / error message |
| imageNumber | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | pin=1..3; slide=1..10; key=1..3; signature=1..3; message=1..6 |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetRomImageDisplayAsync-Wacom-Devices-Internal-STU-OperationMode-Type,System-Boolean,System-Int32,System-Threading-CancellationToken-'></a>
### SetRomImageDisplayAsync(operationMode,imageType,imageNumber,ct) `method`

##### Summary

Displays a specified image

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationMode | [Wacom.Devices.Internal.STU.OperationMode.Type](#T-Wacom-Devices-Internal-STU-OperationMode-Type 'Wacom.Devices.Internal.STU.OperationMode.Type') |  |
| imageType | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | false=not pushed / default message; true=pushed / error message |
| imageNumber | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | pin=1..3; slide=1..10; key=1..3; signature=1..3; message=1..6 |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='M-Wacom-Devices-Internal-STU-Protocol-SetRomImageHashAsync-Wacom-Devices-Internal-STU-OperationMode-Type,System-Boolean,System-Int32,System-Threading-CancellationToken-'></a>
### SetRomImageHashAsync(operationModeType,imageType,imageNumber,ct) `method`

##### Summary

Requests the specified image hash be made available

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationModeType | [Wacom.Devices.Internal.STU.OperationMode.Type](#T-Wacom-Devices-Internal-STU-OperationMode-Type 'Wacom.Devices.Internal.STU.OperationMode.Type') |  |
| imageType | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | false=not pushed / default message; true=pushed / error message |
| imageNumber | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | pin=1..3; slide=1..10; key=1..3; signature=1..3; message=1..6 |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

##### Remarks

Use this call first to request an hash, then getRomImageHash() can be called to retrieve the value

<a name='T-Wacom-Devices-Internal-STU-ProtocolHelper'></a>
## ProtocolHelper `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='M-Wacom-Devices-Internal-STU-ProtocolHelper-ReadRectangle-System-Byte[],System-Int32-'></a>
### ReadRectangle(data,start) `method`

##### Summary

Read rectangle coordinates from byte data

##### Returns

Rectangle

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | Byte array to read from |
| start | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Offset from which to start reading |

##### Remarks

For STU, bottom/right are coordinates of bottom-right corner; for Rectangle they are +1

<a name='M-Wacom-Devices-Internal-STU-ProtocolHelper-WriteRectangle-System-Drawing-Rectangle,System-Byte[],System-Int32-'></a>
### WriteRectangle(area,data,start) `method`

##### Summary

Write rectangle coordinates to byte array

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| area | [System.Drawing.Rectangle](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Drawing.Rectangle 'System.Drawing.Rectangle') | Rectangle to write |
| data | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | Byte array to write to |
| start | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Offset at which to start writing |

##### Remarks

For .Net Rectangle, Right/Bottom are X/Y + Width/Height, ie 1 OUTSIDE
the actual area. For STU areas, bottom-right is "on the line", hence " - 1"

<a name='T-Wacom-Devices-Internal-STU-ProtocolMode'></a>
## ProtocolMode `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='T-Wacom-Devices-Types-STU-ProtocolMode'></a>
## ProtocolMode `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Communications protocol

<a name='F-Wacom-Devices-Internal-STU-ProtocolMode-HID'></a>
### HID `constants`

##### Summary

Communications protocol will be STU/HID/USB

<a name='F-Wacom-Devices-Internal-STU-ProtocolMode-Serial'></a>
### Serial `constants`

##### Summary

Communications protocol will be STU/Serial/USB

<a name='F-Wacom-Devices-Types-STU-ProtocolMode-HID'></a>
### HID `constants`

##### Summary

Communications protocol will be STU/HID/USB

<a name='F-Wacom-Devices-Types-STU-ProtocolMode-Serial'></a>
### Serial `constants`

##### Summary

Communications protocol will be STU/Serial/USB

<a name='T-Wacom-Devices-RealTimePointPhase'></a>
## RealTimePointPhase `type`

##### Namespace

Wacom.Devices

##### Summary

Specifies at what part of a stroke (or otherwise) a point occurred

<a name='F-Wacom-Devices-RealTimePointPhase-BeginStroke'></a>
### BeginStroke `constants`

##### Summary

Denotes the first point of a stroke.

<a name='F-Wacom-Devices-RealTimePointPhase-EndStroke'></a>
### EndStroke `constants`

##### Summary

Denotes the last point of a stroke.

<a name='F-Wacom-Devices-RealTimePointPhase-Hover'></a>
### Hover `constants`

##### Summary

Denotes a hover point.

<a name='F-Wacom-Devices-RealTimePointPhase-MoveStroke'></a>
### MoveStroke `constants`

##### Summary

Denotes an intermediate point of a stroke.

<a name='T-Wacom-Devices-RealTimePointReceivedEventArgs'></a>
## RealTimePointReceivedEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for RealTimePointReceivedEvent

<a name='P-Wacom-Devices-RealTimePointReceivedEventArgs-Phase'></a>
### Phase `property`

##### Summary

The part of a stroke (or otherwise) at which the point occurred

<a name='P-Wacom-Devices-RealTimePointReceivedEventArgs-Point'></a>
### Point `property`

##### Summary

The point value as transformed by the PointTransform matrix.

<a name='P-Wacom-Devices-RealTimePointReceivedEventArgs-Pressure'></a>
### Pressure `property`

##### Summary

Pen pressure, if device supports it

<a name='P-Wacom-Devices-RealTimePointReceivedEventArgs-Timestamp'></a>
### Timestamp `property`

##### Summary

Date and time of event

<a name='T-Wacom-Devices-ReceiveFileAsync'></a>
## ReceiveFileAsync `type`

##### Namespace

Wacom.Devices

##### Summary

A delegate that is used to receive ink documents from the file transfer service.

##### Returns

Returns a value that specifies how the file transfer procedure must continue its execution.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inkDocument | [T:Wacom.Devices.ReceiveFileAsync](#T-T-Wacom-Devices-ReceiveFileAsync 'T:Wacom.Devices.ReceiveFileAsync') | An ink document that represents the transferred file. The value will be null in case the file transfer or the document creation failed. |

<a name='T-Wacom-Devices-Types-STU-RenderingMode'></a>
## RenderingMode `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Specifies the algorithm used for inking on the LCD screen

<a name='F-Wacom-Devices-Types-STU-RenderingMode-Normal'></a>
### Normal `constants`

##### Summary

Legacy rendering (default)

<a name='F-Wacom-Devices-Types-STU-RenderingMode-WILL'></a>
### WILL `constants`

##### Summary

High quality WILL rendering

<a name='T-Wacom-Devices-Internal-STU-ResetFlag'></a>
## ResetFlag `type`

##### Namespace

Wacom.Devices.Internal.STU

<a name='F-Wacom-Devices-Internal-STU-ResetFlag-Hardware'></a>
### Hardware `constants`

##### Summary

Perform a hard reset

<a name='F-Wacom-Devices-Internal-STU-ResetFlag-Software'></a>
### Software `constants`

##### Summary

Perform a soft reset

<a name='T-Wacom-Devices-Properties-STU'></a>
## STU `type`

##### Namespace

Wacom.Devices.Properties

##### Summary

Names of STU specific properties

<a name='F-Wacom-Devices-Properties-STU-BackgroundColor'></a>
### BackgroundColor `constants`

##### Summary

Background color

<a name='F-Wacom-Devices-Properties-STU-BacklightBrightness'></a>
### BacklightBrightness `constants`

##### Summary

Backlight brightness from 0 (dimmest) to 3 (brightest)

##### Remarks

Setting is stored in non-volatile memory of the STU. Do NOT write frequently.

<a name='F-Wacom-Devices-Properties-STU-BootScreen'></a>
### BootScreen `constants`

##### Summary

Enables or disables showing the boot screen at start up

##### Remarks

See [BootScreenFlag](#T-Wacom-Devices-Types-STU-BootScreenFlag 'Wacom.Devices.Types.STU.BootScreenFlag')

<a name='F-Wacom-Devices-Properties-STU-Capability'></a>
### Capability `constants`

##### Summary

The base capabiltity struct of the STU

<a name='F-Wacom-Devices-Properties-STU-CurrentMessageImageArea'></a>
### CurrentMessageImageArea `constants`

##### Summary

Area on LCD screen within which to display messages

##### Remarks

Only supported in PIN and Key Pad modes

<a name='F-Wacom-Devices-Properties-STU-DefaultMode'></a>
### DefaultMode `constants`

##### Summary

Communication mode to use.

##### Remarks

Value is be stored in device non-volatile memory, and will not be changed by Power ON/OFF.
The only way to change the value is to set this property, and the setting will not take effect until next boot up.
Hardware reset task is issued automatically after setting the default interface mode.
Only supported on 430V.

<a name='F-Wacom-Devices-Properties-STU-Eserial'></a>
### Eserial `constants`

##### Summary

Hardware unique Id of the STU

<a name='F-Wacom-Devices-Properties-STU-HandwritingDisplayArea'></a>
### HandwritingDisplayArea `constants`

##### Summary

Area on the LCD sceen within which ink capture is enabled

<a name='F-Wacom-Devices-Properties-STU-HandwritingThicknessColor'></a>
### HandwritingThicknessColor `constants`

##### Summary

Thinkness and color of pen used to draw ink on the LCD screen.

##### Remarks

See [HandwritingInkThicknessColor](#T-Wacom-Devices-Types-STU-HandwritingInkThicknessColor 'Wacom.Devices.Types.STU.HandwritingInkThicknessColor')

<a name='F-Wacom-Devices-Properties-STU-Information'></a>
### Information `constants`

##### Summary

The base information struct of the STU

<a name='F-Wacom-Devices-Properties-STU-InkThreshold'></a>
### InkThreshold `constants`

##### Summary

Thresholds used for drawing ink on LCD screen

##### Remarks

See [InkThreshold](#T-Wacom-Devices-Types-STU-InkThreshold 'Wacom.Devices.Types.STU.InkThreshold')

<a name='F-Wacom-Devices-Properties-STU-InkingMode'></a>
### InkingMode `constants`

##### Summary

Enables or disables inking on the LCD screen.

##### Remarks

See [InkingMode](#T-Wacom-Devices-Types-STU-InkingMode 'Wacom.Devices.Types.STU.InkingMode')

<a name='F-Wacom-Devices-Properties-STU-PenDataOptionMode'></a>
### PenDataOptionMode `constants`

##### Summary

Type of pen data to recieve from the   tablet

##### Remarks

See [PenDataOptionMode](#T-Wacom-Devices-Types-STU-PenDataOptionMode 'Wacom.Devices.Types.STU.PenDataOptionMode')

<a name='F-Wacom-Devices-Properties-STU-RenderingMode'></a>
### RenderingMode `constants`

##### Summary

Algorithm for drawing ink on LCD screen

##### Remarks

See [RenderingMode](#T-Wacom-Devices-Types-STU-RenderingMode 'Wacom.Devices.Types.STU.RenderingMode')

<a name='F-Wacom-Devices-Properties-STU-ScreenContrast'></a>
### ScreenContrast `constants`

##### Summary

LCD screen contrast

##### Remarks

Screen contrast is stored in non-volatile memory of the tablet. Do NOT write frequently.

<a name='F-Wacom-Devices-Properties-STU-Status'></a>
### Status `constants`

##### Summary

Current status of the STU

##### Remarks

See [Status](#F-Wacom-Devices-Properties-STU-Status 'Wacom.Devices.Properties.STU.Status')

<a name='F-Wacom-Devices-Properties-STU-Uid'></a>
### Uid `constants`

##### Summary

Unique Id of the STU

<a name='F-Wacom-Devices-Properties-STU-Uid2'></a>
### Uid2 `constants`

##### Summary

Hardware unique Id of the STU

<a name='T-Wacom-Devices-Internal-STU-STU_EncryptionService'></a>
## STU_EncryptionService `type`

##### Namespace

Wacom.Devices.Internal.STU

##### Summary

Encryption service for STU tablets

##### Remarks

See [EncryptionImpl](#T-Wacom-Devices-Internal-STU-EncryptionImpl 'Wacom.Devices.Internal.STU.EncryptionImpl') for implementation

<a name='P-Wacom-Devices-Internal-STU-STU_EncryptionService-CipherSuite'></a>
### CipherSuite `property`

##### Summary

Returns a string specifying encryption settings

<a name='P-Wacom-Devices-Internal-STU-STU_EncryptionService-IsStarted'></a>
### IsStarted `property`

##### Summary

Returns true if the encryption service has been successfully initialized and started

<a name='M-Wacom-Devices-Internal-STU-STU_EncryptionService-OnDisconnected'></a>
### OnDisconnected() `method`

##### Summary

Event handler for disconnection of hte tablet

##### Parameters

This method has no parameters.

<a name='M-Wacom-Devices-Internal-STU-STU_EncryptionService-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync(ct) `method`

##### Summary

Starts the encryption service

##### Returns

Returns a Task object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token |

<a name='M-Wacom-Devices-Internal-STU-STU_EncryptionService-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync(ct) `method`

##### Summary

Stops the encryption service

##### Returns

Returns a Task object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | Cancellation token |

<a name='T-Wacom-Devices-Properties-Screen'></a>
## Screen `type`

##### Namespace

Wacom.Devices.Properties

##### Summary

Names of properties relating to display screen (if device has one)

<a name='F-Wacom-Devices-Properties-Screen-Height'></a>
### Height `constants`

##### Summary

Height of screen in pixels

##### Remarks

0 if device does not have a screen

<a name='F-Wacom-Devices-Properties-Screen-ResolutionX'></a>
### ResolutionX `constants`

##### Summary

Number of pixels per mm on the X (horizontal) axis

##### Remarks

0 if device does not have a screen

<a name='F-Wacom-Devices-Properties-Screen-ResolutionY'></a>
### ResolutionY `constants`

##### Summary

Number of pixels per mm on the Y (vertical) axis

##### Remarks

0 if device does not have a screen

<a name='F-Wacom-Devices-Properties-Screen-Type'></a>
### Type `constants`

##### Summary

Type of display screen on the device

##### Remarks

See [DisplayType](#T-Wacom-Devices-Types-DisplayType 'Wacom.Devices.Types.DisplayType')

<a name='F-Wacom-Devices-Properties-Screen-Width'></a>
### Width `constants`

##### Summary

Width of screen in pixels

##### Remarks

0 if device does not have a screen

<a name='T-Wacom-Devices-Internal-SemaphoreSlimDisposableLock'></a>
## SemaphoreSlimDisposableLock `type`

##### Namespace

Wacom.Devices.Internal

<a name='M-Wacom-Devices-Internal-SemaphoreSlimDisposableLock-LockAsync-System-Threading-SemaphoreSlim,System-Threading-CancellationToken-'></a>
### LockAsync(semaphore,ct) `method`

##### Summary

Use with pattern:
using var locked = await SemaphoreSlimDisposableLock.LockAsync(apiLock, ct);

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| semaphore | [System.Threading.SemaphoreSlim](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.SemaphoreSlim 'System.Threading.SemaphoreSlim') |  |
| ct | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='T-Wacom-Devices-ServiceErrorEventArgs'></a>
## ServiceErrorEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for the Error

<a name='P-Wacom-Devices-ServiceErrorEventArgs-Exception'></a>
### Exception `property`

##### Summary

Gets the exception associated with this object.

<a name='T-Wacom-Devices-Types-SmartPad-ServiceReportingType'></a>
## ServiceReportingType `type`

##### Namespace

Wacom.Devices.Types.SmartPad

##### Summary

Specifies the exchange interface type used by a service

##### Remarks

Bluetooth Low Energy only

<a name='T-Wacom-Devices-Internal-SmartPad-SevenBitEncoder'></a>
## SevenBitEncoder `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='M-Wacom-Devices-Internal-SmartPad-SevenBitEncoder-Encode-System-Byte[]-'></a>
### Encode(src) `method`

##### Summary

Converts messages from normal (8bit) to 7bit encoded.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| src | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') |  |

<a name='T-Wacom-Devices-Properties-SmartPad'></a>
## SmartPad `type`

##### Namespace

Wacom.Devices.Properties

##### Summary

Names of SmartPad specific properties

<a name='F-Wacom-Devices-Properties-SmartPad-BatteryLevelReportChange'></a>
### BatteryLevelReportChange `constants`

##### Summary

Minimum change in battery level percentage the device should report

<a name='F-Wacom-Devices-Properties-SmartPad-BatteryState'></a>
### BatteryState `constants`

##### Summary

Current battery state

##### Remarks

See [BatteryState](#T-Wacom-Devices-Types-SmartPad-BatteryState 'Wacom.Devices.Types.SmartPad.BatteryState')

<a name='F-Wacom-Devices-Properties-SmartPad-ConnectionInterval'></a>
### ConnectionInterval `constants`

##### Summary

Time in seconds between 2 data sessions

<a name='F-Wacom-Devices-Properties-SmartPad-DataSessionAcceptDuration'></a>
### DataSessionAcceptDuration `constants`

##### Summary

Time in seconds device should be ready to accept incoming connections

<a name='F-Wacom-Devices-Properties-SmartPad-EnableDataEncryption'></a>
### EnableDataEncryption `constants`

##### Summary

Enables or disables real-time data encryption

##### Remarks

See [DataEncryption](#T-Wacom-Devices-Types-SmartPad-DataEncryption 'Wacom.Devices.Types.SmartPad.DataEncryption')

<a name='F-Wacom-Devices-Properties-SmartPad-FileTransferServiceReportingType'></a>
### FileTransferServiceReportingType `constants`

##### Summary

Reporting type for File Transfer service

##### Remarks

Bluetooth Low Energy only. See [ServiceReportingType](#T-Wacom-Devices-Types-SmartPad-ServiceReportingType 'Wacom.Devices.Types.SmartPad.ServiceReportingType')

<a name='F-Wacom-Devices-Properties-SmartPad-FirmwareProtocolLevel'></a>
### FirmwareProtocolLevel `constants`

##### Summary

SmartPad’s protocol compliance level

<a name='F-Wacom-Devices-Properties-SmartPad-HoveringDataOutput'></a>
### HoveringDataOutput `constants`

##### Summary

Enables or disables the reporting of hover data in real-time mode

##### Remarks

See [Notifications](#T-Wacom-Devices-Types-SmartPad-Notifications 'Wacom.Devices.Types.SmartPad.Notifications')

<a name='F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationLedMode'></a>
### PenDetectedIndicationLedMode `constants`

##### Summary

Specifies the flash frequency of the LED indicator when pen detected event is reported

##### Remarks

See [PenDetectedLedMode](#T-Wacom-Devices-Types-SmartPad-PenDetectedLedMode 'Wacom.Devices.Types.SmartPad.PenDetectedLedMode')

<a name='F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationSoundEffect'></a>
### PenDetectedIndicationSoundEffect `constants`

##### Summary

Specifies the sound effect produced when pen detected event is reported

##### Remarks

See [PenDetectedSound](#T-Wacom-Devices-Types-SmartPad-PenDetectedSound 'Wacom.Devices.Types.SmartPad.PenDetectedSound')

<a name='F-Wacom-Devices-Properties-SmartPad-PenDetectedIndicationSoundVol'></a>
### PenDetectedIndicationSoundVol `constants`

##### Summary

Specifies the volume of the sound effect produced when pen detected event is reported

##### Remarks

See [PenDetectedVolume](#T-Wacom-Devices-Types-SmartPad-PenDetectedVolume 'Wacom.Devices.Types.SmartPad.PenDetectedVolume')

<a name='F-Wacom-Devices-Properties-SmartPad-PenDetectedNotificationFlag'></a>
### PenDetectedNotificationFlag `constants`

##### Summary

Enables or disables Pen Detected events

##### Remarks

See [Notifications](#T-Wacom-Devices-Types-SmartPad-Notifications 'Wacom.Devices.Types.SmartPad.Notifications')

<a name='F-Wacom-Devices-Properties-SmartPad-RealTimeServiceReportingType'></a>
### RealTimeServiceReportingType `constants`

##### Summary

Reporting type for Realtime Ink service

##### Remarks

Bluetooth Low Energy only. See [ServiceReportingType](#T-Wacom-Devices-Types-SmartPad-ServiceReportingType 'Wacom.Devices.Types.SmartPad.ServiceReportingType')

<a name='F-Wacom-Devices-Properties-SmartPad-ReportDataSessionEvents'></a>
### ReportDataSessionEvents `constants`

##### Summary

Enables of disables Data Session Established and Terminated events

##### Remarks

See [Notifications](#T-Wacom-Devices-Types-SmartPad-Notifications 'Wacom.Devices.Types.SmartPad.Notifications')

<a name='F-Wacom-Devices-Properties-SmartPad-UserConfirmationStartAckDuration'></a>
### UserConfirmationStartAckDuration `constants`

##### Summary

Number of milliseconds the SmartPad should wait between sending a Confirmation In Progress event and 
disconnecting the currently connected client, when a user confirmation process is initiated during a data session

<a name='F-Wacom-Devices-Properties-SmartPad-UserConfirmationTimeout'></a>
### UserConfirmationTimeout `constants`

##### Summary

Maximum user confirmation duration in seconds

<a name='T-Wacom-Devices-Internal-SmartPad-SmartPadClientId'></a>
## SmartPadClientId `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

Represents a 6-byte identifier of the client application.

<a name='M-Wacom-Devices-Internal-SmartPad-SmartPadClientId-#ctor-System-Byte,System-Byte,System-Byte,System-Byte,System-Byte,System-Byte-'></a>
### #ctor(b0,b1,b2,b3,b4,b5) `constructor`

##### Summary

Creates a new instance from the specified bytes.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| b0 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 0 |
| b1 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 1 |
| b2 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 2 |
| b3 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 3 |
| b4 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 4 |
| b5 | [System.Byte](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte 'System.Byte') | byte 5 |

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadClientId-Item-System-Int32-'></a>
### Item `property`

##### Summary

Gets the identifier byte at the specified index.

##### Returns

The byte at the specified index.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The index of the requested byte. |

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadClientId-Length'></a>
### Length `property`

##### Summary

Gets the lengths of the identifier.

<a name='M-Wacom-Devices-Internal-SmartPad-SmartPadClientId-AsArray'></a>
### AsArray() `method`

##### Summary

Returns the client identifier as an array.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-SmartPad-SmartPadParameter'></a>
## SmartPadParameter `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

Specifies the parameters of the SmartPad device.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-BATTERY_LEVEL_REPORT_CHANGE'></a>
### BATTERY_LEVEL_REPORT_CHANGE `constants`

##### Summary

Specifies the minimal change of the battery level in percentages, which the peripheral should report.
If the battery level has changed with PARAM_BATTERY_LEVEL_REPORT_CHANGE percent since the last data session, the peripheral is considered to have new data to report.
DEFAULT VALUE(dec): 1
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-CONNECTION_INTERVAL'></a>
### CONNECTION_INTERVAL `constants`

##### Summary

The connection interval is the amount of time in seconds between two data sessions.
DEFAULT VALUE(dec): 60
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-DATA_SESSION_ACCEPT_DURATION'></a>
### DATA_SESSION_ACCEPT_DURATION `constants`

##### Summary

The amount of time (in seconds) the peripheral should be ready to accept incoming connections.
DEFAULT VALUE(dec): 5
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-ENABLE_DATA_ENCRYPTION'></a>
### ENABLE_DATA_ENCRYPTION `constants`

##### Summary

Specifies whether real-time data encryption is enabled. The value can be one of the following:
0 – Encryption disabled
1 – Encryption enabled
DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-FILE_TRANSFER_SERVICE_REPORTING_TYPE'></a>
### FILE_TRANSFER_SERVICE_REPORTING_TYPE `constants`

##### Summary

The value can be one of the following:
* 0x00 – Responses of type R_FileChunk should be reported via the CHARACTERISTIC_FILE_TRANSFER_NOTIFY characteristic.
* 0x01 – Responses of type R_FileChunk should be reported via the CHARACTERISTIC_FILE_TRANSFER_INDICATE characteristic.
Note: BLE Only
DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-NOTE_HEIGHT'></a>
### NOTE_HEIGHT `constants`

##### Summary

The height of the note taking area in m^-5 units (meters to the power of minus 5).
(read-only)
(depending on the peripheral)
DEFAULT VALUE(dec): Depends on the SmartPad
ACCESS LEVEL: Read-only

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-NOTE_WIDTH'></a>
### NOTE_WIDTH `constants`

##### Summary

The width of the note taking area in m^-5 units (meters to the power of minus 5).
(read-only)
(depending on the peripheral)
DEFAULT VALUE(dec): Depends on the SmartPad
ACCESS LEVEL: Read-only

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_LED_MODE'></a>
### PEN_DETECTED_INDICATION_LED_MODE `constants`

##### Summary

DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_SOUND_EFFECT'></a>
### PEN_DETECTED_INDICATION_SOUND_EFFECT `constants`

##### Summary

DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_INDICATION_SOUND_VOL'></a>
### PEN_DETECTED_INDICATION_SOUND_VOL `constants`

##### Summary

DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-PEN_DETECTED_NOTIFICATION_FLAG'></a>
### PEN_DETECTED_NOTIFICATION_FLAG `constants`

##### Summary

DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-POINT_SIZE'></a>
### POINT_SIZE `constants`

##### Summary

DEFAULT VALUE(dec): Depends on the SmartPad
ACCESS LEVEL: Read-only

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-P_HOVERING_DATA_OUTPUT'></a>
### P_HOVERING_DATA_OUTPUT `constants`

##### Summary

Specifies whether to output hovering data in real-time mode. The value can be one of the following:
0 – Disable hovering data output
1 – Enable hovering data output
DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REALTIME_POINTS_RATE'></a>
### REALTIME_POINTS_RATE `constants`

##### Summary

DEFAULT VALUE(dec): Depends on the SmartPad
ACCESS LEVEL: Read-only

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REAL_TIME_SERVICE_REPORTING_TYPE'></a>
### REAL_TIME_SERVICE_REPORTING_TYPE `constants`

##### Summary

The value can be one of the following:
* 0x00 – Responses of type R_StrokeStart and R_StrokeChunk should be reported via the CHARACTERISTIC_REAL_TIME_NOTIFY characteristic.
* 0x01 – Responses of type R_StrokeStart and R_StrokeChunk should be reported via the CHARACTERISTIC_REAL_TIME_INDICATE characteristic.
Note: BLE Only
DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-REPORT_DATA_SESSION_EVENTS'></a>
### REPORT_DATA_SESSION_EVENTS `constants`

##### Summary

DEFAULT VALUE(dec): 0
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-SMARTPAD_FW_PROTOCOL_LEVEL'></a>
### SMARTPAD_FW_PROTOCOL_LEVEL `constants`

##### Summary

DEFAULT VALUE(dec): Depends on the SmartPad
ACCESS LEVEL: Read-only

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-USER_CONFIRMATION_START_ACK_DURATION'></a>
### USER_CONFIRMATION_START_ACK_DURATION `constants`

##### Summary

This parameter specifies the number of milliseconds the peripheral should wait between sending an E_UserConfirmationInProgress 
event and disconnecting the currently connected central, when a user confirmation process is initiated during a data session.
DEFAULT VALUE(dec): 500
ACCESS LEVEL: Writable

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadParameter-USER_CONFIRMATION_TIMEOUT'></a>
### USER_CONFIRMATION_TIMEOUT `constants`

##### Summary

The maximum user confirmation duration in seconds.
DEFAULT VALUE(dec): 30
ACCESS LEVEL: Writable

<a name='T-Wacom-Devices-Internal-SmartPad-SmartPadPoint'></a>
## SmartPadPoint `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

A raw input point produced by a Wacom SmartPad device.

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-IsValid'></a>
### IsValid `property`

##### Summary

Specifies whether the current point is valid.

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Pressure'></a>
### Pressure `property`

##### Summary

Pressure value.

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Timestamp'></a>
### Timestamp `property`

##### Summary

Point timestamp.

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-X'></a>
### X `property`

##### Summary

X coordinate of the point (in device units).

<a name='P-Wacom-Devices-Internal-SmartPad-SmartPadPoint-Y'></a>
### Y `property`

##### Summary

Y coordinate of the point (in device units).

<a name='T-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase'></a>
## SmartPadPointPhase `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

Defines the phases of realtime points.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-BeginHover'></a>
### BeginHover `constants`

##### Summary

Denotes the first hover point.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-BeginStroke'></a>
### BeginStroke `constants`

##### Summary

Denotes the first point of a stroke.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-EndHover'></a>
### EndHover `constants`

##### Summary

Denotes the last hover point.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-EndStroke'></a>
### EndStroke `constants`

##### Summary

Denotes the last point of a stroke.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-MoveHover'></a>
### MoveHover `constants`

##### Summary

Denotes an intermediate hover point.

<a name='F-Wacom-Devices-Internal-SmartPad-SmartPadPointPhase-MoveStroke'></a>
### MoveStroke `constants`

##### Summary

Denotes an intermediate point of a stroke.

<a name='T-Wacom-Devices-Internal-SmartPad-SmartPadUSB'></a>
## SmartPadUSB `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='M-Wacom-Devices-Internal-SmartPad-SmartPadUSB-ClearInputPipeAsync'></a>
### ClearInputPipeAsync() `method`

##### Summary

Viper workaround - we must discard everything from the USB pipe before we start communicating with the device.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-SmartPad-SppLevel'></a>
## SppLevel `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

<a name='F-Wacom-Devices-Internal-SmartPad-SppLevel-L_1_2_2'></a>
### L_1_2_2 `constants`

##### Summary

Columbia

<a name='F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_0'></a>
### L_2_1_0 `constants`

##### Summary

Columbia

<a name='F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_2'></a>
### L_2_1_2 `constants`

##### Summary

Viper

<a name='F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_1_3'></a>
### L_2_1_3 `constants`

##### Summary

Columbia Creative

<a name='F-Wacom-Devices-Internal-SmartPad-SppLevel-L_2_2_0'></a>
### L_2_2_0 `constants`

##### Summary

Barbera

<a name='T-Wacom-Devices-StartingFileDownloadEventArgs'></a>
## StartingFileDownloadEventArgs `type`

##### Namespace

Wacom.Devices

##### Summary

Event arguments for the StartingFileDownload event.

<a name='P-Wacom-Devices-StartingFileDownloadEventArgs-FilesCount'></a>
### FilesCount `property`

##### Summary

Gets the total number of files on the device.

<a name='T-Wacom-Devices-Types-STU-Status'></a>
## Status `type`

##### Namespace

Wacom.Devices.Types.STU

##### Summary

Holds status information from the tablet

<a name='F-Wacom-Devices-Types-STU-Status-lastResultCode'></a>
### lastResultCode `constants`

##### Summary

Error code for last operation

<a name='F-Wacom-Devices-Types-STU-Status-statusCode'></a>
### statusCode `constants`

##### Summary

Current status of the tablet

<a name='F-Wacom-Devices-Types-STU-Status-statusWord'></a>
### statusWord `constants`

##### Remarks

Reserved

<a name='M-Wacom-Devices-Types-STU-Status-ToString'></a>
### ToString() `method`

##### Summary

Returns a string representation of tablet status

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-Internal-SmartPad-StatusCode'></a>
## StatusCode `type`

##### Namespace

Wacom.Devices.Internal.SmartPad

##### Summary

Specifies the possible status codes returned by the SmartPad device.

<a name='T-Wacom-Devices-Types-STU-Status-StatusCode'></a>
## StatusCode `type`

##### Namespace

Wacom.Devices.Types.STU.Status

##### Summary

Status of the tablet

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-ACK'></a>
### ACK `constants`

##### Summary

No error.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-ERROR_FILE_DOWNLOADING'></a>
### ERROR_FILE_DOWNLOADING `constants`

##### Summary

The command cannot be executed, because a file download is currently in progress.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-GENERAL_ERROR'></a>
### GENERAL_ERROR `constants`

##### Summary

The general error code value.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-INVALID_STATE'></a>
### INVALID_STATE `constants`

##### Summary

The requested operation is not supported in the peripheral’s current state.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-NOT_AUTH_FOR_DSR'></a>
### NOT_AUTH_FOR_DSR `constants`

##### Summary

The peripheral is in DataSessionReady mode, but doesn’t recognize the central and denies access.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-READONLY_PARAM'></a>
### READONLY_PARAM `constants`

##### Summary

The specified parameter is read-only and cannot be modified.

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-UC_IN_PROGRESS'></a>
### UC_IN_PROGRESS `constants`

##### Summary

The peripheral recognizes the central, but temporally doesn’t authorize the central, because user confirmation is expected (the peripheral is in UserConfirmation mode).

<a name='F-Wacom-Devices-Internal-SmartPad-StatusCode-UNRECOGNIZED_COMMAND'></a>
### UNRECOGNIZED_COMMAND `constants`

##### Summary

The command is not supported by the device.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-Calculation'></a>
### Calculation `constants`

##### Summary

Tablet is calculating encryption keys.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-Capture'></a>
### Capture `constants`

##### Summary

Tablet switches to this after ReportId.StartCapture; tablet is transferring encrypted pen coordinates. Ready to receive commands.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-Image'></a>
### Image `constants`

##### Summary

Tablet switches to this after ReportId.StartImageData.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-Image_Boot'></a>
### Image_Boot `constants`

##### Summary

Tablet is displaying the boot image. The tablet will automatically change to Ready when finished.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-Ready'></a>
### Ready `constants`

##### Summary

Normal state; tablet is transferring pen coordinates. Ready to receive commands.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-RomBusy'></a>
### RomBusy `constants`

##### Summary

Tablet is accessing the ROM.

<a name='F-Wacom-Devices-Types-STU-Status-StatusCode-SystemReset'></a>
### SystemReset `constants`

##### Summary

Tablet is resetting. So, any function isn't available.

<a name='T-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1'></a>
## TaskCompletionSourceWithCancellation\`1 `type`

##### Namespace

Wacom.Devices.Internal

##### Summary

Holds the task for a cancellation token, as well as the token registration. The registration is disposed when this instance is disposed.

<a name='M-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-#ctor-System-Threading-CancellationToken-'></a>
### #ctor(cancellationToken) `constructor`

##### Summary

Creates a task for the specified cancellation token, registering with the token if necessary.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| cancellationToken | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') | The cancellation token to observe. |

<a name='F-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-m_taskCompletionSource'></a>
### m_taskCompletionSource `constants`

##### Summary

The cancellation token registration, if any. This is `null` if the registration was not necessary.

<a name='P-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-Task'></a>
### Task `property`

##### Summary

Gets the task for the source cancellation token.

<a name='M-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-Dispose'></a>
### Dispose() `method`

##### Summary

Disposes the cancellation token registration, if any. Note that this may cause [Task](#P-Wacom-Devices-Internal-TaskCompletionSourceWithCancellation`1-Task 'Wacom.Devices.Internal.TaskCompletionSourceWithCancellation`1.Task') to never complete.

##### Parameters

This method has no parameters.

<a name='T-Wacom-Devices-TransportProtocol'></a>
## TransportProtocol `type`

##### Namespace

Wacom.Devices

##### Summary

Type of connection to ink device

<a name='F-Wacom-Devices-TransportProtocol-BLE'></a>
### BLE `constants`

##### Summary

Bluetooth Low Energy

<a name='F-Wacom-Devices-TransportProtocol-BTC'></a>
### BTC `constants`

##### Summary

Bluetooth

<a name='T-Wacom-Devices-Internal-STU-OperationMode-Type'></a>
## Type `type`

##### Namespace

Wacom.Devices.Internal.STU.OperationMode

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-KeyPad'></a>
### KeyPad `constants`

##### Summary

Tablet will return KeyPadData

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-MessageBox'></a>
### MessageBox `constants`

##### Summary

Not used in setting OperationMode

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-Normal'></a>
### Normal `constants`

##### Summary

Tablet will return PenData

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-PinPad'></a>
### PinPad `constants`

##### Summary

Tablet will return PinPadData

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-Signature'></a>
### Signature `constants`

##### Summary

Tablet will display signature capture screen and buttons

<a name='F-Wacom-Devices-Internal-STU-OperationMode-Type-SlideShow'></a>
### SlideShow `constants`

##### Summary

Tablet will display bitmaps and not return pen data

<a name='T-Wacom-Devices-UnexpectedResponseException'></a>
## UnexpectedResponseException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when an unexpected response is recieved from a device

<a name='T-Wacom-Devices-UnexpectedStatusException'></a>
## UnexpectedStatusException `type`

##### Namespace

Wacom.Devices

##### Summary

Thrown when an unexpected status is recieved from a device

<a name='T-Wacom-Devices-Logging-LogProviders-LoupeLogProvider-WriteDelegate'></a>
## WriteDelegate `type`

##### Namespace

Wacom.Devices.Logging.LogProviders.LoupeLogProvider

##### Summary

The form of the Loupe Log.Write method we're using
