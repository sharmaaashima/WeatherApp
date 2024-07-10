import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomButton from "../components/CustomButton";

import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome3.jpg");

const Welcome = ({ navigation }) => {
 

  return (
    <>
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={WelcomeImage}
          style={[containerStyle.container]}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
            }}>
            WEATHER
          </Text>
          <Text
            style={{
              textAlign: "white",
              fontSize: 30,
              fontWeight: "bold",
              color: "black",

              textAlign: "center",
            }}>
            APP
          </Text>

          <View style={{ marginTop: 400 }}>
            <CustomButton
              navigation={navigation}
              title={"Get Started"}></CustomButton>
          </View>
        </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
