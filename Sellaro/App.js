import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const App = () => {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen/>
      
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
