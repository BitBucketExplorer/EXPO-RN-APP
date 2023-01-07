import React, { Fragment } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export const Viewp = () => {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "100%",
            height: "50%",
          }}
        ></View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
