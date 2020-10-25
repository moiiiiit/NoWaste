import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from "@react-navigation/native";
import Firebase from "../config/Firebase";
import * as SecureStore from 'expo-secure-store';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let isLoggedIn = false;

Firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
    isLoggedIn = true;
    SecureStore.setItemAsync('user', JSON.stringify(user));
    return;
  }
});

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  async handleLogin() {
    const { email, password } = this.state;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("MainStack");
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: height * 0.18,
            width: height * 0.18,
            marginBottom: height * 0.02,
          }}
          source={require("../assets/icon.png")}
        />

        <Input
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
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
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
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
          containerStyle={{ width: width * 0.6, marginVertical: height * 0.02 }}
          title="Login with Email"
          type="outline"
          onPress={() => {
            this.handleLogin();
          }}
        />
        <Button
          name="signupbutton"
          title="Don't have an account yet? Sign up here"
          onPress={() => this.props.navigation.navigate("Signup")}
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
