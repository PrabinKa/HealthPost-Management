import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SharedElement } from "react-navigation-shared-element";

const Map = () => {
  const { width } = useWindowDimensions();
  const locations = {
    latitude: 27.626424,
    longitude: 83.378939,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SharedElement id={"map"}>
        <MapView
          style={{ height: "100%", width: "100%" }}
          region={{
            latitude: locations.latitude,
            longitude: locations.longitude,
            longitudeDelta: locations.longitudeDelta,
            latitudeDelta: locations.latitudeDelta,
          }}
          showsUserLocation={true}
          zoomEnabled={true}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
        >
          <Marker coordinate={locations} />
        </MapView>
      </SharedElement>
    </View>
  );
};

export default Map;

Map.sharedElements = (route, otherRoute, showing) => {
  return [`map`];
};
