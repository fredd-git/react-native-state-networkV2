/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import AppNetworkUtils from "./app-network";

function Section({ children, title }) {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [isEnabledGPS, setIsEnabledGPS] = useState(false);
  const [isEnabledMobileNetwork, setIsEnabledMobileNetwork] = useState(false);
  const [isEnabledWifi, setIsEnabledWifi] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const loadGPSCheck = async () => {
    try {
      const response = await AppNetworkUtils.isGpsEnabled();
      setIsEnabledGPS(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const loadMobileNetworkCheck = async () => {
    try {
      const response = await AppNetworkUtils.isMobileNetworkEnabled();
      setIsEnabledMobileNetwork(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const loadWIFICheck = async () => {
    try {
      const response = await AppNetworkUtils.isWifiEnabled();
      setIsEnabledWifi(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="GPS">
            status <Text style={styles.highlight}>GPS: </Text>{" "}
            {isEnabledGPS ? "true" : "false"}
          </Section>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Button title="Check Status" onPress={() => loadGPSCheck()} />
          </View>
          <Section title="Mobile Network">
            status <Text style={styles.highlight}>Mobile Network: </Text>{" "}
            {isEnabledMobileNetwork ? "true" : "false"}
          </Section>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Button
              title="Check Status"
              onPress={() => loadMobileNetworkCheck()}
            />
          </View>
          <Section title="WIFI">
            status <Text style={styles.highlight}>WIFI: </Text>{" "}
            {isEnabledWifi ? "true" : "false"}
          </Section>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Button title="Check Status" onPress={() => loadWIFICheck()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
