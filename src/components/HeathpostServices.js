import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";

import { COLORS, servicesData } from "../constants/Constants";

const { width } = Dimensions.get("window");

const HeathpostServices = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={servicesData}
          keyExtractor={(item) => {
            `${item.id}`;
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.serviceWrapper}>
                <Text style={styles.text}>{index + 1 + "."}</Text>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HeathpostServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  wrapper: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 5,
    height: "77%",
  },
  serviceWrapper: {
    paddingHorizontal: 10,
    marginVertical: 15,
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
  },
});
