import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./../../pages/HomeScreen";
import DetailScreen from "./../../pages/DetailScreen";
import Profile from "../../pages/Profile";

const SideNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
