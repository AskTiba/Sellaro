import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../../components/TweetContent";

const TweetDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <TweetContent tweet={params.tweet} />
    </View>
  );
};

export default TweetDetailsScreen;

const styles = StyleSheet.create({});
