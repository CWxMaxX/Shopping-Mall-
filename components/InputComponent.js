import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function InputComponent(props) {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={props.placeHolder}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "85%",
    borderColor: "#C4C4C4",
    minHeight: 45,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: "#f6f6f6",
  },
});
