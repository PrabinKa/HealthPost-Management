import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../screens/HomePage";
import HealthpostDetails from "../screens/healthpost/HealthpostDetails";
import HealthpostLists from "../screens/healthpost/HealthpostLists";
import HealthVolunteer from "../screens/volunteer/HealthVolunteer";
import VolunteerDetails from "../screens/volunteer/VolunteerDetails";
import Login from "../screens/Login/Login";
import LinearGradientTest from "../screens/LinearGradientTest";
import Map from "../screens/volunteer/Map";

import { Authcontext } from "../context/Authcontext";

import DrawerNavigation from "./DrawerNavigation";


const Stack = createStackNavigator();

const HomepageStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerMode: "float"
      }}
      
    >
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="Details" component={HealthpostDetails} />
      <Stack.Screen name="Lists" component={HealthpostLists} />
      <Stack.Screen name="VolunteerList" component={HealthVolunteer} />
      <Stack.Screen name="VolunteerDetails" component={VolunteerDetails} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

const StackNavigation = ({ navigation }) => {
  const { userToken, isLoading } = React.useContext(Authcontext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      >
        {userToken ? (
          <Stack.Screen name="HomePage" component={HomepageStack} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
