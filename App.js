import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Login from "./src/components/Login";

export default function App() {
  console.log("App Executed");
  let x = 20;
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}
