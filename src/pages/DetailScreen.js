import { Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS } from "../constants/Colors";
import CustomCard from "../components/CustomCard";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import TopBar from "../components/TopBar";
import { WEATHER_API_KEY } from "../hook/hooks";
import axios from "axios";

const DetailScreen = ({ navigation }) => {
  const rainImage = require("../../assets/img/heavyRain.png");
  const humidityImage = require("../../assets/img/humidity.png");
  const windImage = require("../../assets/img/wind.png");
  const sunImage = require("../../assets/img/sun.png");
  const hazeImage = require("../../assets/img/haze.png");
  const normalDayImage = require("../../assets/img/normalday.png");
  const mist = require("../../assets/img/normalRain.png");

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

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${"Punjab"}&appid=${WEATHER_API_KEY}&units=metric`
        );
        setWeather(response.data);
        setError("");
      } catch (err) {
        setError("City not found");
        setWeather(null);
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!weather) {
    return <Text>Loading...</Text>;
  }

  const dailyForecasts = weather.list.filter(
    (forecast, index) => index % 8 === 0
  );

  const fetchCoordinates = async (apiKey) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${"Hoshiarpur"},&limit=1&appid=${apiKey}`
      );
      if (response.data.length > 0) {
        return {
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        };
      } else {
        throw new Error("City not found");
      }
    } catch (err) {
      throw new Error("City not found");
    }
  };

  const fetchWeatherForecast = async (lat, lon, apiKey) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      );
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch weather data");
    }
  };

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
              image={
                weather.list.map((item) => item?.weather?.[0]?.main === "Rain")
                  ? rainImage
                  : weather.list.map(
                      (item) => item?.weather?.[0]?.main === "clear"
                    )
                  ? sunImage
                  : weather.list.map(
                      (item) => item?.weather?.[0]?.main === "Haze"
                    ) ||
                    weather.list.map(
                      (item) => item?.weather?.[0]?.main === "Clouds"
                    )
                  ? hazeImage
                  : weather.list.map(
                      (item) => item?.weather?.[0]?.main === "Mist"
                    )
                  ? mist
                  : normalDayImage
              }
              title={day}
              subtitle={""}
              percentage={weather?.list?.map((item) => {
                item.clouds?.all;
              })}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({});
