import { Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS } from "../constants/Colors";
import CustomCard from "../components/CustomCard";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import TopBar from "../components/TopBar";

const Profile = ({ navigation }) => {
  const rainImage = require("../../assets/img/sun.png");

  const [remainingDays, setRemainingDays] = useState([]);

  useEffect(() => {
    const date = new Date();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayIndex = date.getDay();

    const daysLeft = ["Tomorrow"];
    for (let i = 1; i < daysOfWeek.length - 1; i++) {
      daysLeft.push(daysOfWeek[(currentDayIndex + i) % 7]);
    }
    setRemainingDays(daysLeft);
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.PRIMARY,
        height: "100%",
      }}>
      <TopBar
        navigation={navigation}
        title={"Next 7 Days"}
        leftIcon={"arrow-left"}
      />
      <ScrollView>
        {remainingDays.map((day, index) => (
          <View key={index}>
            <CustomCard
              image={rainImage}
              title={day}
              subtitle={""}
              percentage={30}
              expandale={true}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
