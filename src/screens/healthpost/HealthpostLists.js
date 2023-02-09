import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";

import { Subheader, Loader } from "../../components";

import { HealthpostData, COLORS } from "../../constants/Constants";

import Ionicons from "react-native-vector-icons/Ionicons";

import { useGetHealthpostListQuery } from "../../redux/FetchApiReducer";

const HealthpostLists = ({ navigation }) => {
  const { data, error, isLoading } = useGetHealthpostListQuery();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.mediumGray} />
      <Subheader />
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <FlatList
          data={HealthpostData}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Details")}
                style={styles.touchableWrapper}
              >
                <View>
                  <Text style={styles.name}>{item.title}</Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>
                <View>
                  <Ionicons
                    name="chevron-forward"
                    size={35}
                    color={COLORS.darkGray}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      {/* )} */}
    </View>
  );
};

export default HealthpostLists;

const styles = StyleSheet.create({
  touchableWrapper: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
  },
  name: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "600",
  },
  address: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.darkGray,
  },
});
