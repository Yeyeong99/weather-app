import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#5C258D", "#4389A2"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "Thunderstorm",
    subtitle: "Stay at home",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#5f2c82", "#49a09d"],
    title: "Drizzle",
    subtitle: "You have to take your umbrella",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "Rainy",
    subtitle: "It would be better to stay at home",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Snow",
    subtitle: "Stay at your home for your feet",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#CC95C0", "#DBD4B4", "#7AA1D2"],
    title: "Atmosphere",
    subtitle: "Do whatever you want at home",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#67B26F", "#4ca2cd"],
    title: "Sunny",
    subtitle: "Enjoy the weather ☀",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#556270", "#4ECDC4"],
    title: "Clouds",
    subtitle: "It would be nice to work out",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#3C3B3F", "#605C3C", "#D3CBB8"],
    title: "Dust",
    subtitle: "Stay at home for your lung",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#DAE2F8", "#D6A4A4"],
    title: "Mist",
    subtitle: "Hard to see far away",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
