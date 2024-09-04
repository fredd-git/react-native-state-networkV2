# react-native-state-networkv2

## Installation
```
npm i --save react-native-state-networkv2
```

or

```
yarn add react-native-state-networkv2
```

## Usage

```javascript
import { AppNetworkUtils } from 'react-native-state-networkv2';

// To check if the WIFI is on or off:
AppNetworkUtils
    .isWifiEnabled()
    .then((isEnabled) => {
        // isEnabled is true if WI-FI is on
    });

// To check if the Mobile Network is on or off:
AppNetworkUtils
    .isMobileNetworkEnabled()
    .then((isEnabled) => {
        // isEnabled is true if the Mobile Network is on
    })

// To check if the GPS is on or off:
AppNetworkUtils
    .isGpsEnabled() 
    .then((isEnabled) => {
        // isEnabled is true if GPS is on
    });
```
To use it with expo you have to test it with a development application.
