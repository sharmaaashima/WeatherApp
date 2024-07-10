import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SideNavigation from "../sideNavigation";
import Welcome from "../../pages/Welcome";
import { createStackNavigator } from "@react-navigation/stack";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SideNav" component={SideNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
