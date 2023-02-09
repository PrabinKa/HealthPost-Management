import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/Constants";

const LinearGradientTest = () => {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={[COLORS.blue, COLORS.green]}
        style={styles.background}
      />
    </View>
  );
};

export default LinearGradientTest;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    elevation: 4
  },
});
