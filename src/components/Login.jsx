import { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { Textp, UselessTextInput } from "../practice-Components/Textp";

const Login = () => {
  console.log("App Executed");
  let x = 20;
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
          <Image
            blurRadius={10}
            source={require("../../assets/login.jpg")}
            style={styles.loginImage}
          ></Image>
        </TouchableWithoutFeedback>
        <Textp />
        <UselessTextInput />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#006064",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  },
  loginImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
    borderRadius: 120 / 2,
    alignSelf: "center",
  },
});

export default Login;
