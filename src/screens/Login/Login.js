import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

import { COLORS } from "../../constants/Constants";

import Ionicons from "react-native-vector-icons/Ionicons";

import CheckBox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

import { Authcontext } from "../../context/Authcontext";

const Login = () => {
  const [secureText, setSecureText] = React.useState(true);
  const [isChecked, setChecked] = React.useState(false);
  const { Login, loginLoader } = React.useContext(Authcontext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.darkGray} />
      <LinearGradient
        colors={[COLORS.blue, COLORS.red]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={{ height: "100%", width: "100%" }}
      >
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/bro.png")}
              style={{ width: "90%", height: 200 }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>
              बिरामी दर्ता तथा स्वास्थ्य संस्था व्यवस्थापन प्रणाली
            </Text>
          </View>
          <View style={{ margin: 20 }}>
            <Text style={styles.header}>Email</Text>
            <View style={styles.textInputContainer}>
              <Ionicons name="mail-outline" size={25} color="#888" />
              <TextInput
                selectionColor={COLORS.darkGray}
                style={styles.textInput}
                placeholder="Your Email"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ margin: 20 }}>
            <Text style={styles.header}>Password</Text>
            <View style={styles.textInputContainer}>
              <Ionicons name="lock-closed-outline" size={25} color="#888" />
              <TextInput
                selectionColor={COLORS.darkGray}
                style={styles.textInput}
                secureTextEntry={secureText}
                placeholder="Your Password"
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                {secureText ? (
                  <Ionicons name="eye-off-outline" size={25} color="#888" />
                ) : (
                  <Ionicons name="eye-outline" size={25} color="#888" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Login({ email, password })}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <View
            style={{
              width: "85%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? COLORS.green : "#888"}
              />
              <Text style={[styles.subTitle, { marginLeft: 5 }]}>
                Remember me
              </Text>
            </View>
            <Pressable>
              <Text style={styles.subTitle}>Forgot Password?</Text>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
  header: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.green,
  },
  textInputContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  textInput: {
    marginHorizontal: 10,
    fontSize: 16,
    width: "75%",
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: 1,
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.green,
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
    letterSpacing: 1,
  },
  subTitle: {
    fontWeight: "800",
    color: COLORS.white,
  },
});
