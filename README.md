# QRCODE

## Ionic info

```bash
Ionic:

   Ionic CLI                     : 6.18.1 (C:\Users\wesle\AppData\Roaming\npm\node_modules\@ionic\cli)
   Ionic Framework               : @ionic/angular 5.9.1
   @angular-devkit/build-angular : 12.1.4
   @angular-devkit/schematics    : 12.1.4
   @angular/cli                  : 12.1.4
   @ionic/angular-toolkit        : 4.0.0

Cordova:

   Cordova CLI       : 10.0.0 (cordova-lib@10.1.0)
   Cordova Platforms : android 9.1.0
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 6 other plugins)

Utility:

   cordova-res (update available: 0.15.4) : 0.15.3
   native-run                             : 1.5.0

System:

   Android SDK Tools : 26.1.1 (C:\Android-sdk)
   NodeJS            : v14.15.0 (C:\Program Files\nodejs\node.exe)
   npm               : 6.14.8
   OS                : Windows 10
```

## Plugins

```bash
cordova-pdf-generator 2.1.1 "PDFGenerator"cordova-plugin-device 2.0.2 "Device"
cordova-plugin-ionic-keyboard 2.2.0 "cordova-plugin-ionic-keyboard"
cordova-plugin-ionic-webview 4.2.1 "cordova-plugin-ionic-webview"
cordova-plugin-splashscreen 5.0.2 "Splashscreen"
cordova-plugin-statusbar 2.4.2 "StatusBar"
cordova-plugin-whitelist 1.3.3 "Whitelist"
phonegap-plugin-barcodescanner 8.1.0 "BarcodeScanner"
```

## iOS - Permissions

```xml
<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
    <string>To scan barcodes</string>
</edit-config>
```
