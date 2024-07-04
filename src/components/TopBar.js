import * as React from "react";

import { Appbar } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({ navigation, leftIcon, title, rightIcon }) => {
  const _goBack = () => {
    navigation.navigate("ComponentNavigation");
  };

  const _handleSearch = () => console.log("Searching");

  const _handleMenu = () => {
    navigation.toggleDrawer();
  };
  const _handleBack = () => {
    navigation.goBack();
  };

  console.log("navigation", navigation);
  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: COLORS.PRIMARY,
        }}>
        <Appbar.Action
          icon={leftIcon}
          onPress={leftIcon === "search" ? _handleSearch : _handleBack}
        />
        <Appbar.Content title={title} />
        <Appbar.Action icon={rightIcon} onPress={_handleMenu} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;
