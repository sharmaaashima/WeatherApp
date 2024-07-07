import { StyleSheet, Text, View } from "react-native";

import AnDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants/Colors";
import DetailScreen from "../../pages/DetailScreen";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import HomeScreen from "./../../pages/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../../pages/Profile";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const SideNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerActiveBackgroundColor: COLORS.PRIMARY,
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <AnDesign name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome6
              onPre
              name="temperature-quarter"
              color={color}
              size={26}
            />
          ),
        }}
        name="Forcast"
        component={DetailScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        name="About"
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
