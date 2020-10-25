import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from '@react-navigation/native';
import Firebase from '../config/Firebase';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let isLoggedIn = false;

Firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
    isLoggedIn=true;
    return
  } 
});

export default class Login extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  async handleLogin (){
    const { email, password } = this.state
    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {this.props.navigation.navigate('MainStack');})
        .catch(error => console.log(error));
    } 

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: height * 0.02,
            color: "#00c853",
          }}
        >
          NOWASTE
        </Text>

        <Input
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
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
          onChangeText={password => this.setState({ password })}
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
          onPress = {() =>{
            this.handleLogin()
          }}
        />
        <Button
          containerStyle={{ width: width * 0.6 }}
          title="Login with Google"
          onPress={() => {
            this.setState({ isLoggedIn: true });
            this.props.navigation.dispatch(
              StackActions.replace('MainStack')
            );
          }}
        />
        <Button 
          name='logoutButton'
          title="Don't have an account yet? Sign up"
          onPress={() => 
            this.props.navigation.navigate('Signup')}
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
