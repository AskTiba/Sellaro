import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={styles.container}
      className="flex-1 items-center justify-center bg-[#ffd700]"
    >
      <Text className="text-[#32cd32] text-lg">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd700",
    alignItems: "center",
    justifyContent: "center",
  },
});
