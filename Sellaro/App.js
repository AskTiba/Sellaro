import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Navigation from "./Navigation";
import "react-native-gesture-handler";

const App = () => {
  return (
    // <View>
    //   {/* <WelcomeScreen /> */}
    //   {/* <ViewImageScreen/> */}
    //   <Navigation />
    // </View>
    <Navigation />
  );
};

export default App;

const styles = StyleSheet.create({});
