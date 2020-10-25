import Constants from "expo-constants";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/AntDesign";
import { Input, Button, Overlay } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import { StackActions } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Item = ({ name, quant }) => (
  <View>
    <Text>
      {name} {quant}
    </Text>
  </View>
);


export default class Shelf extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: [
              {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Tomato",
                quantity: 3,
              },
              {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Potato",
                quantity: 2,
              },
              {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Cucumber",
                quantity: 1,
              },
            ],
            showOverlay: false,
            showDatePicker: false,
            date: Date.now()
          };
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
        <Text style={{ color: "grey" }}>20 June 1999</Text>
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
            name={"ios-checkmark-circle-outline"}
            size={28}
            color={"lightgreen"}
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
            SHELF
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
            this.setState({ showOverlay: true });
            console.log("Add new shopping item: ");
          }}
        />
        <Overlay
          isVisible={this.state.showOverlay}
          onBackdropPress={() => {
            this.setState({ showOverlay: false });
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
              containerStyle={{ marginBottom: height * 0.06 }}
            />
            <Button
              containerStyle={{
                width: width * 0.6,
                marginBottom: height * 0.02
              }}
              title="Select Expiration Date"
              onPress={() => {this.setState({showDatePicker: true})}}
            />
            <Button
              containerStyle={{
                width: width * 0.6
              }}
              title="Submit"
              onPress={() => {this.setState({showOverlay: false})}}
            />
            
            
          </View>
        </Overlay>
        {this.state.showDatePicker && (<DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={"date"}
              display="default"
              onChange={(event,date)=>{
                  this.setState({date: date, showDatePicker: false})
              }}
              minimumDate={Date.now()}
              style={{ marginBottom: height * 0.12 }}
            />)}
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
