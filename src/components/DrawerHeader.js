import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Constants";

const DrawerHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons name="md-menu-sharp" size={30} color={COLORS.green} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>तिलोत्तमा नगरपालिका</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.green,
  },
  titleWrapper: {
    alignSelf: "center",
    marginLeft: 40,
  },
});
