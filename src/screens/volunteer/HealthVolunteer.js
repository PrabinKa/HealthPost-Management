import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Subheader } from "../../components";

import { COLORS } from "../../constants/Constants";

import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: 1,
    name: "गीता पार्धे",
    address: "शंकरनगर ०१, तिलोत्तम",
    mobile_no: "9863736825",
    location: {
      latitude: "२७.५३३०",
      longitude: "८३.३७८९",
    },
  },
  {
    id: 2,
    name: "कुसुम बस्नेत",
    address: "शंकरनगर ०१, तिलोत्तम",
    mobile_no: "9863736825",
    location: {
      latitude: "२७.५३३०",
      longitude: "८३.३७८९",
    },
  },
  {
    id: 3,
    name: "नमरता चौधरी",
    address: "शंकरनगर ०१, तिलोत्तम",
    mobile_no: "9863736825",
    location: {
      latitude: "२७.५३३०",
      longitude: "८३.३७८९",
    },
  },
  {
    id: 4,
    name: "संगीता थापा",
    address: "शंकरनगर ०१, तिलोत्तम",
    mobile_no: "9863736825",
    location: {
      latitude: "२७.५३३०",
      longitude: "८३.३७८९",
    },
  },
];

const HealthVolunteer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumGray} />
      <Subheader />
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.touchableWrapper}
                onPress={() => navigation.navigate("VolunteerDetails")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.text}>{item.address}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="phone-portrait-outline"
                    size={20}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.text}>{item.mobile_no}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HealthVolunteer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  touchableWrapper: {
    width: width * 0.9,
    paddingVertical: 10,
    marginVertical: 5,
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 10,
    color: COLORS.darkGray,
  },
});
