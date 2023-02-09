import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

import call from "react-native-phone-call";
import { data, COLORS } from "../constants/Constants";

const HealthpostEmployee = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const triggerCall = (mobile) => {
    const args = {
      number: mobile,
      prompt: true,
    };

    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setModalVisible(true)}
                style={styles.touchableWrapper}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="person-outline"
                    size={15}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.touchableEmployeeName}>{item.name}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="bookmark-outline"
                    size={15}
                    color={COLORS.mediumGray}
                  />
                  <Text style={styles.touchableEmployeeDetail}>
                    {item.designation}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons
                      name="phone-portrait-outline"
                      size={15}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.touchableEmployeeDetail}>
                      {item.mobile}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => triggerCall(item.mobile)}>
                    <Image
                      source={require("../../assets/telephone.png")}
                      style={{ height: 20, width: 20, tintColor: COLORS.green }}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <View style={styles.modalContainer}>
              <View>
                <View style={{ alignSelf: "center" }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/boy.jpg")}
                    style={{ height: 80, width: 80, borderRadius: 40 }}
                  />
                </View>

                <View style={{ marginVertical: 10 }}>
                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="person-outline"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>Prabin Karki</Text>
                  </View>

                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="bookmark-outline"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>React Native Developer</Text>
                  </View>

                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>Swargdwari-07, Pyuthan</Text>
                  </View>

                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="phone-portrait-outline"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>9811920427</Text>
                  </View>

                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="water"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>B+ positive</Text>
                  </View>

                  <View style={styles.modalTextWrapper}>
                    <Ionicons
                      name="mail-outline"
                      size={20}
                      color={COLORS.mediumGray}
                    />
                    <Text style={styles.modalText}>
                      Prabinkarki4296gmail.com
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 20,
                  height: 20,
                }}
              >
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: COLORS.red,
                    }}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HealthpostEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white
  },
  flatlistContainer: {
    backgroundColor: COLORS.white,
    width: "90%",
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 5,
    height: "77%",
  },
  touchableWrapper: {
    marginHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 1,
  },
  touchableEmployeeName: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  touchableEmployeeDetail: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 5,
    color: COLORS.darkGray,
  },
  modalContainer: {
    height: 300,
    width: "80%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    elevation: 10,
  },
  modalTextWrapper: {
    flexDirection: "row",
    marginBottom: 5,
  },
  modalText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.darkGray,
    marginLeft: 5,
  },
});
