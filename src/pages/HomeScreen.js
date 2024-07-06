import * as Location from "expo-location";

import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GOOGLEMAP_API_KEY, WEATHER_API_KEY } from "../hook/hooks";
import React, { useEffect, useState } from "react";

import { Badge } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import CustomCard from "../components/CustomCard";
import Loader from "../components/loader";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/TopBar";
import axios from "axios";
import moment from "moment-timezone";

const rainImage = require("../../assets/img/heavyRain.png");
const humidityImage = require("../../assets/img/humidity.png");
const windImage = require("../../assets/img/wind.png");
const sunImage = require("../../assets/img/sun.png");
const hazeImage = require("../../assets/img/haze.png");
const normalDayImage = require("../../assets/img/normalday.png");
const mist = require("../../assets/img/normalRain.png");

const HomeScreen = ({ navigation }) => {
  const [currentLocationDate, setCurrentLocationDate] = useState(null);
  const [city, setCity] = useState("");
  const [currentLocationCity, setCurrentLocationCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          city ? city : "India"
        }&appid=${WEATHER_API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }

    let timeZone = moment.tz.guess();

    let localDate = moment.tz(timeZone).format("DD MMMM YYYY");
    setCurrentLocationDate(localDate);
  };
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        let city = reverseGeocode[0].city;
        let isoCountryCode = reverseGeocode[0].isoCountryCode;
        setCurrentLocationCity(city);

        let timeZone = moment.tz.guess();
        const intervalId = setInterval(() => {
          let localDate = moment.tz(timeZone).format("DD MMMM YYYY");
          setCurrentLocationDate(localDate);
        }, 1000);
      }

      return () => clearInterval(intervalId);
    })();

    getWeather();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }
  console.log("currentLocationCity", currentLocationCity);
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.PRIMARY,
        height: "100%",
      }}>
      <ScrollView>
        <TopBar
          navigation={navigation}
          rightIcon={"menu"}
          leftIcon={"magnify"}
          setCity={setCity}
          city={city}
          getWeather={getWeather}
        />
        <Text
          style={{
            fontSize: 40,
            width: 300,
            marginLeft: 20,
          }}>
          {weather?.name ? weather?.name : currentLocationCity}
        </Text>
        <View>
          <Text
            style={{
              color: "black",
              marginLeft: 25,
              marginTop: 10,
            }}>
            {currentLocationDate}
          </Text>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                width: 200,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Image
                style={{ width: 100, height: 100 }}
                source={
                  weather?.weather?.[0]?.main === "clear"
                    ? sunImage
                    : weather?.weather?.[0]?.main === "Haze" ||
                      weather?.weather?.[0]?.main === "Clouds"
                    ? hazeImage
                    : weather?.weather?.[0]?.main === "Mist"
                    ? mist
                    : normalDayImage
                }
              />
            </View>
            <View
              style={{
                width: 200,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "Bold",
                  position: "absolute",
                  bottom: 60,
                }}>
                {weather?.main?.temp}
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
                size={40}>
                ° C
              </Badge>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                }}>
                {weather?.weather?.[0]?.main}
              </Text>
            </View>
          </View>
        </View>
        <CustomCard
          image={rainImage}
          title={"Rain fall"}
          subtitle={""}
          percentage={weather?.clouds?.all}
        />
        <CustomCard
          image={humidityImage}
          title={"Humdity"}
          subtitle={""}
          percentage={weather?.main?.humidity}
        />
        <CustomCard
          image={windImage}
          title={"Wind"}
          subtitle={""}
          percentage={`${weather?.wind?.speed} ${"Km/h"}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
