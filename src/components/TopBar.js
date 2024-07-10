import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Appbar } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({
  navigation,
  leftIcon,
  title,
  rightIcon,
  city,
  setCity,
  getWeather,
}) => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const _goBack = () => {
    navigation.navigate("ComponentNavigation");
  };

  const _handleMenu = () => {
    navigation.toggleDrawer();
  };
  const _handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: COLORS.PRIMARY,
        }}>
        {leftIcon === "magnify" ? (
          <View
            style={{
              height: 40,
              width: 330,
              backgroundColor: COLORS.CARD_COLOR,
              borderRadius: 50,
              paddingVertical: 20,
              flexDirection: "row",
            }}>
            <TextInput
              style={styles.input}
              placeholder="Enter city name"
              value={city}
              onChangeText={setCity}
              onSubmitEditing={getWeather}
            />
            <Appbar.Action
              style={{ marginTop: -20 }}
              icon={leftIcon}
              onPress={() => {
                getWeather();
              }}
            />
          </View>
        ) : (
          <Appbar.Action icon={leftIcon} onPress={_handleBack} />
        )}
        <Appbar.Content title={title}></Appbar.Content>
        <Appbar.Action icon={rightIcon} onPress={_handleMenu} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    padding: 10,
    color: "black",
    marginTop: -20,
    // backgroundColor: "blue",
    marginLeft: 30,
  },
});
