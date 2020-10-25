import Constants from "expo-constants";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Input, Button, Overlay } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import { StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Firebase from "../config/Firebase";
import * as SecureStore from 'expo-secure-store';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Item = ({ name, quant }) => (
  <View>
    <Text>
      {name} {quant}
    </Text>
  </View>
);

export default class ShoppingList extends React.Component {

  constructor(props){
    super(props)
    this.state={data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "Tomato",
        quantity: 3,
      },
    ],
    loading: true,
    visible: false,
  user:{}}
    this.created()
  }

  created(){
    let penisid = Firebase.auth().currentUser.uid;
    this.getTodos(penisid)
  }

  async getTodos(penisid) {
    var todosRef = await Firebase
        .firestore()
        .collection("users")
        .doc(penisid)
        .collection('shopping_list')
        .get()
        .then((snapshot)=>{
          snapshot.docs.forEach(doc => {
            console.log(doc.data());
          })
        })

    console.log(todosRef);
}

  renderItem = ({ item, number }) => (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.02,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text>{item.name}</Text>
        <Text style={{ color: "grey" }}>Quantity: {item.quantity}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flex: 0,
        }}
      >
        <View
          style={{
            width: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: 60,
              borderRadius: 10,
              marginRight: 20,
              padding: 10,
            }}
            onChangeText={(text) => {
              number = text;
            }}
            value={number}
          />
        </View>
        <TouchableOpacity>
          <Ionicons
            name={"ios-remove-circle-outline"}
            size={28}
            color={"red"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

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
            SHOPPING LIST
          </Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.data}
          renderItem={this.renderItem}
        />
        <FloatingAction
          actions={[]}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
          }}
          showBackground={false}
          floatingIcon={<Ionicons name={"ios-add"} size={28} color={"white"} />}
          onPressMain={() => {
            this.setState({ visible: true });
            console.log("Add new shopping item: ");
          }}
        />
        <Overlay
          isVisible={this.state.visible}
          onBackdropPress={() => {
            this.setState({ visible: false });
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: width * 0.8,
              height: height * 0.6,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.02,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: height * 0.12,
              }}
            >
              Add new item to the shopping list
            </Text>

            <Input
              placeholder="Item Name"
              leftIcon={
                <Ionicons
                  name="ios-nutrition"
                  size={28}
                  color="black"
                  style={{ marginRight: 28 }}
                />
              }
            />
            <Input
              placeholder="Quantity"
              leftIcon={
                <Ionicons
                  name="ios-arrow-round-forward"
                  size={28}
                  color="black"
                  style={{ marginRight: 28 }}
                />
              }
              containerStyle={{ marginBottom: height * 0.12 }}
            />
            
            <Button
              containerStyle={{
                width: width * 0.6,
              }}
              title="Submit"
              onPress={() => {Firebase
                .firestore()
                .collection("users")
                .doc(Firebase.auth().currentUser.uid)
                .collection("shopping_list")
                .doc('somepenisid')
                .set({
                  name:'grapes',
                  quantity:42069})}}
            />
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
});
