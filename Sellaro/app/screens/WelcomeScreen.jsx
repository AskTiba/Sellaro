import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/cup.png")}
      style={styles.background}
    >
      <Text style={styles.text}>Sellaro!</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "#000000",
    position: "absolute",
    top: 30,
  },
  background: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    // opacity: 1,
    width: "100%",
    height: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecde4",
  },
});
