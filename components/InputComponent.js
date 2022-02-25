/** @format */
//This component handle input fields in the app

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function InputComponent(props, error) {
	return (
		<View style={{width: "100%",alignItems:"center"}}>
			{error ? (<Text style={styles.errorText} >{props.error}</Text>):null}
			<TextInput
			{...props}
			style={{ ...styles.inputStyle, ...props.style }}
			placeholder={props.placeHolder}
			secureTextEntry={props.secureTextEntry}
			multiline={props.multiline}
			autoCapitalize={props.autoCapitalize}
			/>
		 </View>
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
		backgroundColor: "#f6f6f6",
	},
	errorText:{
		color : "red",

	}
});
