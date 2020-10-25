import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/profile.js";
import ShoppingListScreen from "../screens/shoppingList.js";
import ShelfScreen from "../screens/shelf.js"
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "List") {
            iconName = 
              "ios-list-box";
          } else if (route.name === "Profile") {
            iconName = "md-person";
          } else if (route.name === "Shelf") {
              iconName = "ios-journal"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="List" component={ShoppingListScreen} />
      <Tab.Screen name="Shelf" component={ShelfScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
