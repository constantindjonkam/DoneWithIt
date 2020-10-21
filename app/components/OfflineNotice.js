import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import Text from "./Text";

function OfflineNotice() {
  const netInfo = useNetInfo();

  // if (netInfo.isInternetReachable === false)
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    marginTop: Constants.statusBarHeight,
    width: "100%",
    // position: "absolute",
    // top: Constants.statusBarHeight,
    // zIndex: 1,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default OfflineNotice;
