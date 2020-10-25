import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Dimensions, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Firebase from "../config/Firebase";
import { StackActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Login"))
      .catch((error) => console.log(error));
  };

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
          placeholder="Full Name"
          leftIcon={
            <Icon
              name="user"
              size={28}
              color="black"
              style={{ marginRight: width * 0.04 }}
            />
          }
          onChangeText={(name) => this.setState({ name })}
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
          onChangeText={(email) => this.setState({ email })}
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
          onChangeText={(password) => this.setState({ password })}
        />

        
        <Button
          containerStyle={{ width: width * 0.6, marginVertical: height * 0.02  }}
          type="outline"
          title="Sign up"
          onPress={this.handleSignUp}
        />
        <Button
          name="loginbutton"
          title="Already have an account? Log in here"
          onPress={() => this.props.navigation.navigate("Login")}
        />
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
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#FFA611",
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});
