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
import RenderHtml from "react-native-render-html";

const source = {
  html: `
  <head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
  integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
  crossorigin=""/>
    <style>
      #map {position: absolute; top: 0; bottom: 0; left: 0; right: 0}
    </style>
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
  </head>
  <body>
    <div id = "map"></div>
    <script>
    var map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=1yot22WIkUB0T74nx82r', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    </script>
  </body>
  `,
};

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
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default Map;

// Map.sharedElements = (route, otherRoute, showing) => {
//   return [`map`];;
// }

// <SharedElement id={"map"}>
// <MapView
//   style={{ height: "100%", width: "100%" }}
//   region={{
//     latitude: locations.latitude,
//     longitude: locations.longitude,
//     longitudeDelta: locations.longitudeDelta,
//     latitudeDelta: locations.latitudeDelta,
//   }}
//   showsUserLocation={true}
//   zoomEnabled={true}
//   provider={PROVIDER_GOOGLE}
//   showsCompass={true}
// >
//   <Marker coordinate={locations} />
// </MapView>
// </SharedElement>
