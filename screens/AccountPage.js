/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../components/Modal";
import InputComponent from "../components/InputComponent";
import { TouchableOpacity } from "react-native";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import LinerGradientComponent from "../components/LinerGradientComponent";

export default function AccountPage(props) {
	const [user, setUser] = useState("");
	const getUser = () => {
		return fetch("http://192.168.1.2:4000/getUser/001")
			.then((response) => response.json())
			.then((json) => {
				setUser(json);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				props.navigation.replace("Login");
			})
			.catch((error) => alert(error.message));
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<LinerGradientComponent>
			<View style={styles.textContainer}>
				<View style={{ alignItems: "center" }}>
					<Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
					<Text style={[styles.whiteText, styles.lightText]}>Buy your all needs in one place</Text>
				</View>
			</View>
			<Modal>
				<Text style={styles.subTitle}>Account Details</Text>
				<InputComponent placeHolder={user.fname + " " + user.lname} />
				<InputComponent placeHolder={user.email} />
				<View style={styles.hLine}></View>
				<TouchableOpacity>
					<Text style={styles.blueText}>Change Address ?</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.blueText}>Change Card Details ?</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.blueText}>Change Password ?</Text>
				</TouchableOpacity>
				<Blue_Button name='Change Settings' />

				<Transparent_Button
					name='Cancel'
					onPress={() => {
						props.navigation.goBack();
					}}
				/>
				<Transparent_Button
					name='Sign Out'
					style={{ borderColor: "#F4511E" }}
					onPress={handleSignOut}
				/>
			</Modal>
			<StatusBar backgroundColor='#fff' />
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
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
	lightText: {
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
