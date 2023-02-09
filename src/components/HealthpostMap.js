import { View, Text, StyleSheet } from "react-native";
import React from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { COLORS } from "../constants/Constants";

const HealthpostMap = () => {
  const location = {
    latitude: 27.626424,
    longitude: 83.378939,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            longitudeDelta: location.longitudeDelta,
            latitudeDelta: location.latitudeDelta,
          }}
          // showsUserLocation={true}
          zoomEnabled={true}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
        >
          <Marker coordinate={location} />
        </MapView>
      </View>
    </View>
  );
};

export default HealthpostMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  mapContainer: {
    backgroundColor: COLORS.white,
    width: "90%",
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    elevation: 2,
    height: "77%",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
  },
});
