import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { View, Text } from "react-native";
// import React from "react";
import Feed from "./app/screens/tabScreens/Feed";
import Notifications from "./app/screens/tabScreens/Notifications";
import Settings from "./app/screens/tabScreens/Settings";

import { Ionicons } from "@expo/vector-icons";
import TweetDetailsScreen from "./app/screens/homeStack/TweetDetailsScreen";

// Stack
const HomeStack = createNativeStackNavigator;

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={Feed} />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

// Buttom tab
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#32cd32",
        tabBarInactiveTintColor: "#555",
      })}
    >
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
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
