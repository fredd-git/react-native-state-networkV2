package com.rpt.networkv2;

import android.content.Context;
import android.net.wifi.WifiManager;
import android.telephony.TelephonyManager;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.location.LocationManager;
import android.os.Build;
import androidx.annotation.RequiresPermission;

public class NetworkUtilsModule extends ReactContextBaseJavaModule {
    private final Context context;
    private final LocationManager locationManager;

    public NetworkUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext.getApplicationContext();
        this.locationManager = (LocationManager) reactContext.getSystemService(Context.LOCATION_SERVICE);
    }

    @Override
    public String getName() {
        return "NetworkUtils";
    }

    @ReactMethod
    public void isWifiEnabled(Promise promise) {
        try {
            WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
            promise.resolve(wifiManager.isWifiEnabled());
        } catch (Exception e) {
            promise.reject("WIFI_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void isMobileDataEnabled(Promise promise) {
        try {
            TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
            boolean isEnabled = telephonyManager.getDataState() == TelephonyManager.DATA_CONNECTED;
            promise.resolve(isEnabled);
        } catch (Exception e) {
            promise.reject("MOBILE_DATA_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    @RequiresPermission(android.Manifest.permission.ACCESS_FINE_LOCATION)
    public void isGpsEnabled(Promise promise) {
        try {
            boolean gpsEnabled = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) ||
                    (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S && locationManager.isProviderEnabled(LocationManager.FUSED_PROVIDER));
            promise.resolve(gpsEnabled);
        } catch (Exception e) {
            promise.reject("GPS_ERROR", e.getMessage());
        }
    }
}
