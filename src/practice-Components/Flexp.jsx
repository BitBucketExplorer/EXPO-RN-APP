import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

const Flexp = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column-reverse",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          //flex: 2,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          //   flex: 2,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          //   flex: 3,
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

export default Flexp;
