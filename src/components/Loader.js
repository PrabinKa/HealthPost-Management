import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  const animation = React.useRef(null);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <LottieView
        autoPlay
        ref={animation}
        style={{ height: 100, width: 100 }}
        source={require("../../assets/loader.json")}
      />
    </View>
  );
};

export default Loader;
