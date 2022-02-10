import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Modal({ children }, props) {
  return <View style={styles.container} {...props} >{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "80%",
    minHeight: 100,
    borderRadius: 20,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    elevation: 5
  },
});
