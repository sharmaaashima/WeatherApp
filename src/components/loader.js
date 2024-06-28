import * as React from "react";

import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { Text } from "react-native";
import { View } from "react-native";
import { containerStyle } from "../styles";

const Loader = () => {
  return (
    <>
      <View style={containerStyle.container}>
        <ActivityIndicator
          size={"Large"}
          animating={true}
          theme={{ colors: { primary: COLORS.INDICATOR_COLOR } }}
        />
        <Text
          style={{
            color: COLORS.LABEL_COLOR,
            marginTop: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Loading...
        </Text>
      </View>
    </>
  );
};

export default Loader;
