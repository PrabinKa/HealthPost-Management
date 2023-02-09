import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Animated
} from "react-native";
import React, { useRef } from "react";

import { HomepageData, COLORS } from "../constants/Constants";

import { useNavigation } from "@react-navigation/native";

import { DrawerHeader } from "../components";

import { useDispatch } from "react-redux";
import { headerTitle } from "../redux/HeaderTitle";

import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const data = [
  require("../../assets/health1.jpeg"),
  require("../../assets/health2.jpeg"),
  require("../../assets/health3.jpeg"),
  require("../../assets/health4.jpeg"),
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const flatListRef = React.useRef();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  // logo container
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 60, width: 60 }}
          resizeMode='contain'
        />
        <Image
          source={require("../../assets/flag.gif")}
          style={{ height: 60, width: 60 }}
          resizeMode='contain'
        />
      </View>
    );
  };

  const handleOnpress = (data) => {
    dispatch(headerTitle(data.title));
    navigation.navigate(`${data.navigate}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.darkGray} con />
      <DrawerHeader />
      <Header />
      <View style={{ marginVertical: 10 }}>
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          listKey="Slider"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `Slider${index}`}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({ item, index }) => {
            // console.warn("item", index)
            return (
              <View
                style={{
                  height: height * 0.25,
                  width: width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={item}
                  style={{ height: height * 0.25, width: width * 0.9, borderRadius: 10 }}
                />
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: currentIndex  == index ? 20 : 8,
                  height: currentIndex  == index ? 8 : 8,
                  borderRadius: currentIndex  == index ? 4 : 4,
                  backgroundColor: COLORS.green,
                  marginLeft: 5,
                  marginTop: 5,
                }}
              ></View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        {HomepageData.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handleOnpress(data)}
            >
              <Image source={data.image} style={{ height: 40, width: 40 }} />
              <Text style={styles.cardText}>{data.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: width * 0.8,
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginTop: 5,
  },
  paginationText: {
    color: COLORS.darkGray,
  },
  paginationActiveText: {
    color: "white",
  },
  card: {
    width: width * 0.35,
    height: height * 0.17,
    marginVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  cardText: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: "bold",
  },
});
