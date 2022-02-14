/** @format */
//This button is made for green buttons in app

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Green_Button(props) {
	return (
		<TouchableOpacity style={styles.button} {...props}>
			<Text style={styles.whiteText}>{props.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#43B833",
		width: 245,
		minHeight: 40,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		borderColor: "#fff",
		borderStyle: "solid",
		borderWidth: 1,
		margin: 5,
	},
	whiteText: {
		color: "#fff",
		fontSize: 18,
	},
});
