import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HealthpostMap from "../components/HealthpostMap";
import HealthpostEmployee from "../components/HealthpostEmployee";
import HealthpostNews from "../components/HealthpostNews";
import HealthpostServices from "../components/HeathpostServices";

import { COLORS } from "../constants/Constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="services"
        component={HealthpostServices}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/service.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? COLORS.green : COLORS.darkGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.green : COLORS.darkGray }}>
                सेवा/सुविधा
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="employees"
        component={HealthpostEmployee}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/employee.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? COLORS.green : COLORS.darkGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.green : COLORS.darkGray }}>
                कर्मचारी
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="news"
        component={HealthpostNews}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/news.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? COLORS.green : COLORS.darkGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.green : COLORS.darkGray }}>
                समाचार/सूचना
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={HealthpostMap}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/location.png")}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? COLORS.green : COLORS.darkGray,
                }}
              />
              <Text style={{ color: focused ? COLORS.green : COLORS.darkGray }}>
                स्थान
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
