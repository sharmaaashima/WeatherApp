import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome3.jpg");

const Welcome = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  console.log("naviagation", navigation);

  return (
    <>
      {isLoading === false ? (
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={WelcomeImage}
          style={[containerStyle.container, {}]}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              fontFamily: "Inter-Black",
            }}
          >
            WEATHER
          </Text>
          <Text
            style={{
              textAlign: "white",
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              fontFamily: "Inter-black",

              textAlign: "center",
            }}
          >
            APP
          </Text>

          <View style={{ marginTop: 400 }}>
            <CustomButton
              navigation={navigation}
              title={"Get Started"}
            ></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
