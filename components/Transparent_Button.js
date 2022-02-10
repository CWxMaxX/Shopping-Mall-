import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Transparent_Button(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }} {...props} >
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 115,
    minHeight: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "#C4C4C4",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
  },
  text: {
    color: "#000",
    fontSize: 14,
  },
});