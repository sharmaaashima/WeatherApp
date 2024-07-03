import * as React from "react";

import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../constants/Colors";

const TopBar = ({ navigation }) => {
  const _goBack = () => {console.log("went back")
    navigation.navigate("ComponentNavigation");
  };
  
  


  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: COLORS.PRIMARY,
        }}
      >
       
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Next 7 days" />
        </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;
