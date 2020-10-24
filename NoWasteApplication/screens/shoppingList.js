import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Input } from "react-native-elements";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { StackActions } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class Login extends React.Component {

  state = {
    data: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
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
    justifyContent: "center",
    paddingHorizontal: width * 0.04,
  },
});
