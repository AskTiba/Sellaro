// import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Practice = () => {
  return (
    <SafeAreaView
      style={styles.container}
      // className="flex-1 items-center justify-center bg-[#ffd700]"
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
          In the end, we will remember not the words of our beloved enemies, but
          the silence of our friends.
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: "#ffd700",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            flexDirection: "row",
          }}
          // color="orange"
          title="Don't Touch Me!"
          onPress={() =>
            Alert.alert("My Title", "My Message", [
              { text: "Yes", onPress: () => {} },
              { text: "No", onPress: () => {} },
            ])
          }
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "greenyellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          It's the possibility of having a dream come true that makes life
          interesting.
        </Text>
      </View>

      {/* This only works on IOS devices */}
      {/* <Button
            color="green"
            title="Don't Touch Me!"
            onPress={() =>
              Alert.prompt("My Title", "My Message", text => console.log(text))
            }
          /> */}

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
