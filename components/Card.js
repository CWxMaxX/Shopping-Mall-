/** @format */
//This Card component basically wrap children styles like card

import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card(props) {
	return <View style={{ ...styles.container, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		paddingVertical: 15,
		backgroundColor: "#fff",
		elevation: 2,
		alignItems: "center",
		marginBottom: 15,
		borderRadius: 10,
	},
});
