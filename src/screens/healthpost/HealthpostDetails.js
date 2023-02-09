import { View, Dimensions, StatusBar } from "react-native";
import React from "react";

import { Subheader, HealthPostHeader } from "../../components";

import Tabs from "../../navigation/Tabs";

import { COLORS } from "../../constants/Constants";

const { height, width } = Dimensions.get("window");

const data = {
  image: require("../../../assets/health2.jpeg"),
  name: "शंकरनगर स्वास्थ्य चौकी",
  address: "शंकरनगर एक, तिलोत्तमा",
  mobile: "९८११९२०४२७",
  email: "shankarnagar@gmail.com",
};

const HealthpostDetails = () => {
  return (
    <View style={{ flex: 1, height: height, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.mediumGray} />
      <Subheader />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <HealthPostHeader data={data} />
      </View>
      <Tabs />
    </View>
  );
};

export default HealthpostDetails;
