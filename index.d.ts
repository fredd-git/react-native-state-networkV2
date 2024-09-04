declare module 'react-native-state-networkV2' {
  export class AppNetworkUtils {
    /**
     * Checks if WiFi is enabled.
     * @returns A promise that resolves with a boolean indicating if WiFi is enabled.
     */
    static isWifiEnabled(): Promise<boolean>;

    /**
     * Checks if mobile network is enabled.
     * @returns A promise that resolves with a boolean indicating if mobile network is enabled.
     */
    static isMobileNetworkEnabled(): Promise<boolean>;

    /**
     * Checks if GPS is enabled.
     * @returns A promise that resolves with a boolean indicating if GPS is enabled.
     */
    static isGpsEnabled(): Promise<boolean>;
  }

  export const NetworkUtils: {
    /**
     * Checks if WiFi is enabled.
     * @returns A promise that resolves with a boolean indicating if WiFi is enabled.
     */
    isWifiEnabled(): Promise<boolean>;

    /**
     * Checks if mobile data is enabled.
     * @returns A promise that resolves with a boolean indicating if mobile data is enabled.
     */
    isMobileDataEnabled(): Promise<boolean>;

    /**
     * Checks if GPS is enabled.
     * @returns A promise that resolves with a boolean indicating if GPS is enabled.
     */
    isGpsEnabled(): Promise<boolean>;
  };
}
