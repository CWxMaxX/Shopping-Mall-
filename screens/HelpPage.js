/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "../components/Modal";
import InputComponent from "../components/InputComponent";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinerGradientComponent from "../components/LinerGradientComponent";

export default function HelpPage(props) {
	return (
		<LinerGradientComponent>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				style={{ width: "100%" }}
				contentContainerStyle={{ alignItems: "center" }}
				enableOnAndroid={true}
				extraHeight={200}>
				<View style={styles.textContainer}>
					<View style={{ alignItems: "center" }}>
						<Text style={[styles.whiteText, styles.titleText]}>Need Help?</Text>
					</View>
				</View>
				<Modal>
					<View style={{ alignItems: "flex-start" }}>
						<Text>Contact Us : wwww.spm.com</Text>
						<Text>Email : info@spm.com</Text>
						<Text>Tel : +94773173356</Text>
					</View>
					<InputComponent
						placeHolder='Leave a message of feedback !'
						style={{ minHeight: 150, textAlignVertical: "top" }}
						multiline={true}
					/>
					<View style={styles.hLine}></View>

					<Blue_Button name='Send' />

					<Transparent_Button
						name='Cancel'
						onPress={() => {
							props.navigation.goBack();
						}}
					/>
				</Modal>
			</KeyboardAwareScrollView>
			<StatusBar backgroundColor='#fff' />
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 25,
		alignItems: "center",
	},
	textContainer: {
		marginBottom: 40,
	},
	whiteText: {
		color: "#fff",
	},

	titleText: {
		fontSize: 36,
		fontWeight: "bold",
	},
	ligtText: {
		fontWeight: "100",
	},
	subTitle: {
		fontSize: 24,
	},
	hLine: {
		borderBottomColor: "#A7A7A7",
		borderBottomWidth: 1,
		width: "90%",
		opacity: 0.5,
		marginVertical: 5,
	},
	blueText: {
		color: "#2378EF",
	},
});
