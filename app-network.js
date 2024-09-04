import NetworkUtils from './android';

class AppNetworkUtils {
  static isWifiEnabled = async () => {
    try {
      const result = await NetworkUtils.isWifiEnabled();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static isMobileNetworkEnabled = async () => {
    try {
      const result = await NetworkUtils.isMobileDataEnabled();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static isGpsEnabled = async () => {
    try {
      const result = await NetworkUtils.isGpsEnabled();
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default AppNetworkUtils;
