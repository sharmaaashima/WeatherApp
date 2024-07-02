import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/TopBar";

const HomeScreen = () => {
  const rainImage = require("../../assets/img/rain.jpg");
  return (
    <SafeAreaView>
      <ScrollView>
        <TopBar />
        <Text
          style={{
            fontSize: 40,
            width: 300,
            marginLeft: 20,
          }}
        >
          Dausya, Hoshiarpur
        </Text>
        <View>
          <Text
            style={{
              color: "gray",
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
            <View style={{ backgroundColor: "pink", width: 200, height: 150 }}>
              <Image style={{ width: 90, height: 90 }} source={rainImage} />
            </View>
            <View
              style={{ backgroundColor: "purple", width: 200, height: 150 }}
            >
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "Bold",
                }}
              >
                23
              </Text>
              <Text>Tue, July 02</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
