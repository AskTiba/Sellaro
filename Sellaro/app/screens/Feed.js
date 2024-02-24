import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Feed = () => {
  return (
    <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Feed</Text>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
