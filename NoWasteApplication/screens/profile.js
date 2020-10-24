import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from '@react-navigation/native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Button
          containerStyle={{ width: width * 0.6 }}
          title="Logout"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.replace('LoginStack')
            );
          }}
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.04,
  },
});
