import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/TopBar";
import { COLORS } from "../constants/Colors";
import { Badge } from "react-native-paper";
import CustomCard from "../components/CustomCard";

const HomeScreen = () => {
  const rainImage = require("../../assets/img/sun.png");
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.PRIMARY,
        height: "100%",
      }}
    >
      <ScrollView>
        <TopBar />
        <Text
          style={{
            fontSize: 40,
            width: 300,
            marginLeft: 20,
            marginTop: -20,
          }}
        >
          Dasuya, Hoshiarpur
        </Text>
        <View>
          <Text
            style={{
              color: "black",
              marginLeft: 25,
              marginTop: 10,
            }}
          >
            Tue, July 02
          </Text>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 200,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image style={{ width: 100, height: 100 }} source={rainImage} />
            </View>
            <View
              style={{
                width: 200,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "Bold",
                  marginBottom: 40,
                  position: "absolute",
                }}
              >
                23
              </Text>

              <Badge
                style={{
                  backgroundColor: null,
                  position: "relative",
                  bottom: 40,
                  right: 40,
                  color: "black",
                  fontWeight: "bold",
                }}
                size={40}
              >
                ° C
              </Badge>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                Heavy Rain
              </Text>
            </View>
          </View>
        </View>
        <CustomCard
        
        
          image={rainImage}
          title={"Rain fall"}
          subtitle={""}
          percentage={100}
         />
        <CustomCard
          image={rainImage}
          title={"Humidity"}
          subtitle={""}
          percentage={97}
        />
        <CustomCard
          image={rainImage}
          title={"Wind"}
          subtitle={""}
          percentage={50}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
