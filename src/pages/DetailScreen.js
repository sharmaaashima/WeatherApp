import { StyleSheet,Image } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native";
import CustomCard from "../components/CustomCard";
import { Text } from "react-native-paper";

const DetailScreen = () => {
  const rainImage = require("../../assets/img/sun.png");
  return (
   
    <SafeAreaView
    style={{
      backgroundColor: COLORS.PRIMARY,
      height: "100%",
      marginTop: 7,
    }}
  >
  
  <TopBar/>
  
   <CustomCard
          image={rainImage}
          title={"Tomarrow"}
          subtitle={""}
          percentage={30}
          />

      <CustomCard
      
         image={rainImage}
          title={"Sunday"}
          subtitle={""}
          percentage={25}
         />
        <CustomCard
          image={rainImage}
          title={"Monday"}
          subtitle={""}
          percentage={22}
        />
        <CustomCard
           image={rainImage}
          title={"Tuesday"}
          subtitle={""}
          percentage={50}
         />
        <CustomCard
          image={rainImage}
          title={"Wednesday"}
          subtitle={""}
          percentage={97}
        />
        <CustomCard
          title={"Thrusday"}
          subtitle={""}
          percentage={40}
          image={rainImage}
        />
     
        </SafeAreaView>
  )
}

export default DetailScreen;

const styles = StyleSheet.create({})