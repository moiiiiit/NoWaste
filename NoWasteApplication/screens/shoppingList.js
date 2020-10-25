import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input, Button, ListItem } from "react-native-elements";
import { StackActions } from "@react-navigation/native";
import { Left, Right } from "native-base";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Item = ({ name,quant }) => (
  <View>
    <Text>{name} {quant}</Text>
  </View>
);

export default class Login extends React.Component {

  state = {
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "First Item",
        quantity: 3
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Second Item",
        quantity: 2
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Third Item",
        quantity: 1
      },
    ],
  };

  renderItem = ({ item }) => (
    <ListItem 
    bottomDivider={true}>
      <Left style={{flex: 1.0}}>
        <Text>{item.name}</Text>
      </Left>
      <Right style={{flex: 1.0}}>
        <Text>{item.quantity}</Text>
      </Right>
    </ListItem>
  )

  render() {
    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={this.state.data}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.09,
  },
});
