import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Card = ({ data, containerStyle }) => {
  return (
    <View style={[styles.cardContainer, {...containerStyle}]}>
      <Image source={data.image} style={{ height: 50, width: 50 }} />
      <Text>{data.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
