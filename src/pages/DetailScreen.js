import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
} from "react-native-paper";
import React, { useEffect, useState } from "react";

import { COLORS } from "../constants/Colors";
import TopBar from "../components/TopBar";
import { WEATHER_API_KEY } from "../hook/hooks";
import axios from "axios";

const Details = ({ navigation }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  const LOCATION = "Hoshiarpur";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${LOCATION}&appid=${WEATHER_API_KEY}&units=metric`
        );

        setCurrentWeather({
          temperature: `${currentWeatherResponse.data.main.temp}°C`,
          condition: currentWeatherResponse.data.weather[0].main,
          icon: getWeatherIcon(currentWeatherResponse.data.weather[0].icon),
          location: currentWeatherResponse.data.name,
        });

        const forecastData = forecastResponse.data.list
          .filter((_, index) => index % 8 === 0)
          .map((item) => ({
            day: new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
            }),
            temperature: `${item.main.temp}°C`,
            condition: item.weather[0].main,
            icon: getWeatherIcon(item.weather[0].icon),
          }));

        setForecast(forecastData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (icon) => {
    const iconMapping = {
      "01d": "weather-sunny",
      "01n": "weather-night",
      "02d": "weather-partly-cloudy",
      "02n": "weather-night-partly-cloudy",
      "03d": "weather-cloudy",
      "03n": "weather-cloudy",
      "04d": "weather-cloudy",
      "04n": "weather-cloudy",
      "09d": "weather-rainy",
      "09n": "weather-rainy",
      "10d": "weather-pouring",
      "10n": "weather-pouring",
      "11d": "weather-lightning",
      "11n": "weather-lightning",
      "13d": "weather-snowy",
      "13n": "weather-snowy",
      "50d": "weather-fog",
      "50n": "weather-fog",
    };
    return iconMapping[icon] || "weather-cloudy";
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100",
        backgroundColor: COLORS.PRIMARY,
      }}>
      <View>
        <TopBar navigation={navigation} title="Forcast" leftIcon="arrow-left" />
      </View>

      <View style={styles.container}>
        <ScrollView>
          <Card style={styles.card}>
            <Card.Content>
              <Title>{currentWeather?.location}</Title>
              <Paragraph>{currentWeather?.condition}</Paragraph>
              <View style={styles.weatherInfo}>
                <Avatar.Icon size={48} icon={currentWeather?.icon} />
                <Title style={styles?.temperature}>
                  {currentWeather?.temperature}
                </Title>
              </View>
            </Card.Content>
          </Card>

          <List.Section
            style={{
              gap: 5,
              paddingHorizontal: 20,
            }}
            title="5-Day Forecast">
            {forecast.map((day, index) => (
              <List.Item
                style={{ elevation: 10 }}
                key={index}
                title={day.day}
                description={`${day.temperature} - ${day.condition}`}
                left={() => <Avatar.Icon size={40} icon={day.icon} s />}
              />
            ))}
          </List.Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TOP_BAR_COLOR,
    marginTop: 100,
    marginHorizontal: 10,
    height: "100%",
  },
  card: {
    margin: 16,
    backgroundColor: COLORS.PRIMARY,
  },
  weatherInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  temperature: {
    marginLeft: 16,
    fontSize: 32,
  },
});
