import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Subheader = () => {
  const navigation = useNavigation();
  const title = useSelector(state=> state.header.title)
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        elevation: 5,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} 
      style={{justifyContent: "center"}}>
        <Image
          source={require("../../assets/back.png")}
          style={{ height: 25, width: 25, tintColor: "#228B22" }}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          marginLeft: 40
        }}
      >
        <Text style={{ color: "#228B22", fontSize: 18, fontWeight: "800"}}>{title}</Text>
      </View>
    </View>
  );
};

export default Subheader;
