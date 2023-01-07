import React, { Fragment, useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  View,
  Alert,
} from "react-native";

/**
 * Text component
 * @returns
 */
export const Textp = () => {
  const [titleText, setTitleText] = useState("Welcome to codeHub xG9");
  const bodyText =
    "“Do what you're passionate about and be passionate about what you do !”";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  const onPressConsole = () => console.log("Text Pressed");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={(onPressTitle, onPressConsole)}>
        {titleText}
        {"\n"} {"\n"}
      </Text>
      <Text numberOfLines={5} style={styles.inputQuotes}>
        {bodyText}
      </Text>
    </Text>
  );
};

/**
 * TextInput Component
 */
export const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const onClickHandler = () => {
    if (text === "Yadav" && number === "123") {
      onChangeText(null);
      onChangeNumber(null);
      Alert.alert("Authentication", "Login Success", [
        {
          text: "Do you to continue ?",
          onPress: () => alert("Thanks"),
        },
      ]);
    } else {
      onChangeNumber(null);
      Alert.alert("Authentication", "Invalid credential !", [
        {
          text: "Enter Again",
          onPress: () => console.log("Invalid credential"),
        },
      ]);
    }
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username.."
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone"
          keyboardType="numeric"
        />
        <View style={styles.styleButton}>
          <Button
            onPress={onClickHandler}
            style={styles.button}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  inputQuotes: {
    fontStyle: "italic",
    color: "gray",
  },
  styleButton: {
    height: 40,
    marginTop: 12,
    width: 200,
    borderRadius: 10,
    color: "red",
    alignSelf: "stretch",
  },
});
