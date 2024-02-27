import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import { View, Text } from "react-native";
// import React from "react";
import Feed from "./app/screens/tabScreens/Feed";
import Notifications from "./app/screens/tabScreens/Notifications";
import Settings from "./app/screens/tabScreens/Settings";

import { Ionicons } from "@expo/vector-icons";
import TweetDetailsScreen from "./app/screens/homeStack/TweetDetailsScreen";
import Payments from "./app/screens/drawerScreens/Payments";
import { useColorScheme, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

// Top Tabs
const TopTab = createMaterialTopTabNavigator();

function TopTabGroup({ navigation }) {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIndicatorStyle: {
          height: 5,
          backgroundColor: "#32cd32",
          borderRadius: 5,
        },
      }}
    >
      <TopTab.Screen name="main" component={Feed} />
      <TopTab.Screen name="following" component={Payments} />
      <TopTab.Screen name="💡" component={Payments} />
    </TopTab.Navigator>
  );
}

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

// Buttom tab
const Tab = createBottomTabNavigator();

function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Feed") {
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
      <Tab.Screen
        name="Feed"
        component={TopTabGroup}
        options={{
          headerShown: true,
          tabBarLabel: "Home",
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./app/assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "Dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="dark" />
      <DrawerGroup />
    </NavigationContainer>
  );
}
