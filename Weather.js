import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#5C258D", "#4389A2"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#5f2c82", "#49a09d"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#4286f4"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#6190E8", "#A7BFE8"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#CC95C0", "#DBD4B4", "#7AA1D2"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#67B26F", "#4ca2cd"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#FFEFBA", "#FFFFFF"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#3C3B3F", "#605C3C", "#D3CBB8"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#DAE2F8", "#D6A4A4"],
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
      <View style={styles.halfContainer}></View>
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
});
