/** @format */
//This component is basically primary button

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Blue_Button(props) {

	return (
		<TouchableOpacity style={styles.button} {...props}   >
			<Text style={styles.whiteText}>{props.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#2378EF",
		width: 245,
		minHeight: 40,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		margin: 10,


	},
	whiteText: {
		color: "#fff",
		fontSize: 18,
	},
});
