# react-native-app-fake-installed

This package is a fork of [redpandatronicsuk/react-native-check-app-install](https://github.com/redpandatronicsuk/react-native-check-app-install)

## Installation
```
npm i --save react-native-app-fake-installed
```

or

```
yarn add react-native-app-fake-installed
```

## Usage

### Android 11 (API 30) and above

From Android 11 onwards, accessing the list of other installed apps is not allowed by default. Therefore, you must add the list of apps you want to query to the manifest in advance.

```xml
<manifest ...>
    ...
    <queries>
        <package android:name="PACKAGE NAME HERE" />
    </queries>
    ...
```

Alternatively, if you need to use information from all apps, you must add the following:

```xml
<manifest ... >
    ...
    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"
        tools:ignore="QueryAllPackagesPermission" />
    ...
```



Check out the example app in the [example](https://github.com/redpandatronicsuk/react-native-check-app-install/tree/master/example) folder.

```javascript
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-app-fake-installed';

// To check by app name:
AppInstalledChecker
    .isAppInstalled('whatsapp')
    .then((isInstalled) => {
        // isInstalled is true if the app is installed or false if not
    });

// To check using URL (works on iOS and Android):
AppInstalledChecker
    .checkURLScheme('whatsapp') // omit the :// suffix
    .then((isInstalled) => {
        // isInstalled is true if the app is installed or false if not
    })

// To check using package name (Android only):
AppInstalledChecker
    .isAppInstalledAndroid('com.whatsapp') 
    .then((isInstalled) => {
        // isInstalled is true if the app is installed or false if not
    });
```
You can retrieve the list of supported app names by calling `AppInstalledChecker.getAppList()` or check in [app-list.js](https://github.com/redpandatronicsuk/react-native-check-app-install/blob/master/app-list.js). If your app is not in the list, you will have to find out the URL scheme or package name and use either `isAppInstalledIOS(url)` or `isAppInstalledAndroid(pacakge-name)`.

Android package names can be found on the [Google PlayStore](https://play.google.com/store/search). For example, the URL for the Twitter app is *https://play.google.com/store/apps/details?id=com.twitter.android* the package name is the value of the id query parameter, i.e. **com.twitter.android**.

iOS URL schemes can be found by googling or checking this unofficial registry: [http://handleopenurl.com](http://handleopenurl.com) (site seems down at the moment)
