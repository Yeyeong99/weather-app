import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <Text>
        {temp} {condition}
      </Text>
    </View>
  );
}

Weather.propTypes = {
  temp: Proptypes.number.isRequired,
  condition: Proptypes.oneOf([
    "Thunder",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
