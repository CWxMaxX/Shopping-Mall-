/** @format */
//This component handle input fields in the app

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function InputComponent(props) {
	return (
		<TextInput
			{...props}
			style={{ ...styles.inputStyle, ...props.style }}
			placeholder={props.placeHolder}
			secureTextEntry={props.secureTextEntry}
			multiline={props.multiline}
			autoCapitalize={props.autoCapitalize}
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
