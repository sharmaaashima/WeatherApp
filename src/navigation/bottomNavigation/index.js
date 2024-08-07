import AnDesign from "react-native-vector-icons/AntDesign";
import DetailScreen from "../../pages/DetailScreen";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import HomeScreen from "./../../pages/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: "#bf80ff",
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: "Today",
          tabBarIcon: ({ color }) => (
            <AnDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Forcast"
        component={DetailScreen}
        options={{
          tabBarLabel: "Forcast",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              onPre
              name="temperature-quarter"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
