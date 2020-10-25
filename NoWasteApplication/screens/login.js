import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: height * 0.18, width: height * 0.18, marginBottom: height*0.02 }}
          source={require("../assets/icon.png")}
        />

        <Input
          placeholder="Email"
          leftIcon={
            <Icon
              name="user"
              size={28}
              color="black"
              style={{ marginRight: width * 0.04 }}
            />
          }
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={
            <Icon
              name="lock1"
              size={28}
              color="black"
              style={{ marginRight: width * 0.04 }}
            />
          }
        />

        <Button
          containerStyle={{ width: width * 0.6, marginBottom: height * 0.02 }}
          title="Login with Email"
          type="outline"
          onPress={() => {
            this.setState({ isLoggedIn: true });
            this.props.navigation.dispatch(StackActions.replace("MainStack"));
          }}
        />
        <Button
          containerStyle={{ width: width * 0.6 }}
          title="Login with Google"
          onPress={() => {
            this.setState({ isLoggedIn: true });
            this.props.navigation.dispatch(StackActions.replace("MainStack"));
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
