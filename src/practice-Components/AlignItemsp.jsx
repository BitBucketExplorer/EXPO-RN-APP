import React, { Fragment } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

/**
 * flex
 * flexDirection
 * justifyContent
 * alignItems
 * alignSelf
 * alignContent
 * flexWrap
 * flexBasis
 * flexGrow
 * flexShrink
 * position
 * @returns
 */

const AlignItemsp = () => {
  return (
    <View
      style={{
        backgroundColor: colors.black,
        flex: 1,
        flexDirection: "row", //Horizontal
        justifyContent: "center", // According to main axis
        alignItems: "center", //Secondary Axis
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          //flex: 2,
          //   width: 100,
          flexBasis: 100, //width or height
          //   flexGrow: 1,
          //   flexShrink: 1,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          //   flex: 2,
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
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

export default AlignItemsp;
