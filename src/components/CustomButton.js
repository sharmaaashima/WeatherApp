import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CustomButton = ({ title, navigation }) => {
  console.log("handleClick", navigation);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SideNav");
        }}
        style={{
          width: 300,
          height: 50,
          backgroundColor: "yellow",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{ textAlign: "center", fontWeight: "bold", color: "black" }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
