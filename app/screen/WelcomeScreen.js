import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation: { navigate } }) {
  return (
    <ImageBackground
      blurRadius={3}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need.</Text>
      </View>
      <Button title="login" onPress={() => navigate(routes.LOGIN)} />
      <Button
        title="register"
        color="secondary"
        onPress={() => navigate(routes.REGISTER)}
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
