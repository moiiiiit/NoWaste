import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from '@react-navigation/native';
import Firebase from '../config/Firebase';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Profile extends React.Component {

  handleSignout = () => {
    Firebase.auth().signOut()
    .then(() => {this.props.navigation.navigate('Login')})
    .catch(error=>console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: height * 0.02,
          }}
        >
          <Text style={{ fontSize: 24, color: "#232b2e", fontWeight: "bold" }}>
            PROFILE
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Button
            containerStyle={{ width: width * 0.6 }}
            title="Logout"
            onPress={this.handleSignout}
            
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    marginTop: Constants.statusBarHeight,
  },
});