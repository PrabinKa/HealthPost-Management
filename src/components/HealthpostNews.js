import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import { newsData, COLORS } from "../constants/Constants";

import Ionicons from "react-native-vector-icons/Ionicons";

const HealthpostNews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsContainer}>
        <FlatList
          data={newsData}
          keyExtractor={(item) => {
            `${item.id}`;
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{ paddingHorizontal: 10, marginVertical: 10 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="calendar-outline"
                    size={15}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.text}>{item.date}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "600" }}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HealthpostNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  newsContainer: {
    backgroundColor: COLORS.white,
    width: "90%",
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 5,
    height: "77%",
  },
  text: {
    fontSize: 12,
    color: COLORS.mediumGray,
    marginLeft: 5,
  },
});
