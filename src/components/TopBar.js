import * as React from "react";

import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../constants/Colors";

const TopBar = ({ navigation }) => {
  const _goBack = () => {
    navigation.navigate("ComponentNavigation");
  };

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        <Appbar.Action icon={"magnify"} onPress={_handleMore} />
        <Appbar.Action icon="menu" onPress={_handleSearch} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;
