import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { View, Text } from "react-native";
// import React from "react";
import Feed from "./app/screens/Feed";
import Home from "./app/screens/Home";
import Settings from "./app/screens/Settings";

// Buttom tab
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
