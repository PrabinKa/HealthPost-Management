import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";

import Subheader from "../../components/Subheader";
import Ionicons from "react-native-vector-icons/Ionicons";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import * as Location from "expo-location";

import { COLORS } from "../../constants/Constants";
import { SharedElement } from "react-navigation-shared-element";

// const GOOGLE_MAPS_APIKEY = "kjdfs_sjd-smdsms_sjdn";

const { width, height } = Dimensions.get("window");

// AIzaSyBjvdlRj5cVScgDpNgaHJIrkP_z9uv-rcs

const VolunteerDetails = ({ navigation }) => {
  const locations = {
    latitude: 27.626424,
    longitude: 83.378939,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);

  const userLoaction = {
    latitude: location ? location.latitude : 0,
    longitude: location ? location.longitude : 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  // user location permissions
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Subheader />
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", marginVertical: 20 }}>
          <Image
            source={require("../../../assets/boy.jpg")}
            style={{ height: 100, width: 100, borderRadius: 60 }}
          />
          <View
            style={{
              flexDirection: "row",
              height: 60,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="person-outline" size={30} color="#888" />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.header}>नाम:</Text>
              <Text style={styles.detail}>नमरता चौधरी</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 60,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="location-outline" size={30} color="#888" />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.header}>ठेगाना:</Text>
              <Text style={styles.detail}>शंकरनगर ०१, तिलोत्तम</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 60,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="phone-portrait-outline" size={30} color="#888" />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.header}>फोन:</Text>
              <Text style={styles.detail}>9863736825</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
          shadowColor: "#000",
          shadowOffset: { height: 5, width: 1 },
          shadowOpacity: 0.5,
          elevation: 10,
        }}
      >
        <View
          style={{
            height: 60,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Pressable onPress={() => navigation.navigate("Map")}>
              <Text
                style={{ fontSize: 18, fontWeight: "700", color: COLORS.green }}
              >
                See location
              </Text>
            </Pressable>
          </View>
          <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
            style={{ position: "absolute", right: 0, bottom: 0 }}
          >
            {/* <SharedElement id={"map"}> */}
              <MapView
                style={{ height: 60, width: 60 }}
                region={{
                  latitude: locations.latitude,
                  longitude: locations.longitude,
                  longitudeDelta: locations.longitudeDelta,
                  latitudeDelta: locations.latitudeDelta,
                }}
                provider={PROVIDER_GOOGLE}
              >
                <Marker coordinate={locations} />
              </MapView>
            {/* </SharedElement> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VolunteerDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },
  mapContainer: {
    height: height * 0.4,
    width: "90%",
    alignSelf: "center",
  },
});
