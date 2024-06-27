import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import React from "react";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = () => {
  return (
    <ImageBackground
      imageStyle={{ opacity: 0.7 }}
      source={WelcomeImage}
      style={[containerStyle.container, {}]}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: "bold",
          color: "black",
          fontFamily: "Inter-Black",
          backgroundColor: "#f5e000",
          paddingHorizontal: 10,
          borderRadius: 15,
        }}>
        WEATHER
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "black",
          fontFamily: "Inter-Black",
          borderColor: "#f5e000",
          borderWidth: 5,
          padding: 10,
          borderRadius: 15,
        }}>
        APP
      </Text>

      <View style={{ marginTop: 250 }}>
        <CustomButton title={"Get Started"}></CustomButton>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});