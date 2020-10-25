import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox, YellowBox } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TopLevel from "./navigators/toplevel.js";
LogBox.ignoreAllLogs(true);
YellowBox.ignoreWarnings([""]);
const Tab = createBottomTabNavigator();
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

async function getPushNotificationToken() {
  let pushToken = "";

  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    pushToken = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(pushToken);
  }
}

export default function App() {
  getPushNotificationToken();

  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <TopLevel />
    </NavigationContainer>
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
