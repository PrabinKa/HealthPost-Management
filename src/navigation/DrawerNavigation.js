import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import HomePage from "../screens/HomePage";
import HealthpostLists from "../screens/healthpost/HealthpostLists";
import HealthpostDetails from "../screens/healthpost/HealthpostDetails";

import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants/Constants";

import { Authcontext } from "../context/Authcontext";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { Logout, logoutLoader } = React.useContext(Authcontext);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.detailsWrapper}>
        <View style={{ position: "absolute", top: -50, left: 30 }}>
          <Image
            source={require("../../assets/boy.jpg")}
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
        </View>
        <Text style={styles.name}>Prabin Karki</Text>
        <Text style={styles.email}>prabinkarki4296@gmail.com</Text>
      </View>
      <View style={{ flex: 1, marginTop: 40 }}>
        <DrawerItemList {...props} />
      </View>
      <View style={{ position: "absolute", bottom: 20, left: 20 }}>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            Logout();
          }}
        >
          <Ionicons name="exit-outline" size={30} color={COLORS.green} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.green,
        drawerActiveBackgroundColor: COLORS.lightGray,
        drawerInactiveTintColor: COLORS.darkGray,
        drawerInactiveBackgroundColor: COLORS.white,
        drawerLabelStyle: {
          fontSize: 15,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        component={HomePage}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={25}
              color={focused ? COLORS.green : COLORS.darkGray}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Healthpost Lists"
        component={HealthpostLists}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={25}
              color={focused ? COLORS.green : COLORS.darkGray}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  detailsWrapper: {
    height: 100,
    width: "90%",
    backgroundColor: COLORS.green,
    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 50,
  },
  name: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  email: {
    color: COLORS.white,
    fontWeight: "400",
    fontSize: 14,
  },
  logout: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
