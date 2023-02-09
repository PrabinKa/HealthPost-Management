import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { COLORS } from "../constants/Constants";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const HealthPostHeader = ({ data }) => {
  return (
    <LinearGradient
      colors={[COLORS.blue, COLORS.red]}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <Image
          resizeMode="contain"
          source={data.image}
          style={{ height: 130, width: 100, borderRadius: 10 }}
        />
      </View>
      <View style={{ justifyContent: "space-around", marginHorizontal: 10 }}>
        <Text style={styles.healthpostName}>{data.name}</Text>
        <Text style={styles.containerText}>{data.address}</Text>
        <Text style={styles.containerText}>{data.mobile}</Text>
        <Text style={styles.containerText}>{data.email}</Text>
      </View>
    </LinearGradient>
  );
};

export default HealthPostHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: width * 0.9,
    marginVertical: 20,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  healthpostName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
  containerText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.white,
  },
});
