/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "../components/Modal";
import InputComponent from "../components/InputComponent";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { StatusBar } from "expo-status-bar";
import LinerGradientComponent from "../components/LinerGradientComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CreateAccountPAge(props) {
	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
		newPassword: "",
		re_newPassword: "",
		shoppingAddress: "",
		cardNumber: "",
		month: "",
		year: "",
		cvv: "",
		nameOnCard: "",
	});
	// Fetch validated data into backend
	const postData = () => {
		fetch("https://webhook.site/73f7685b-bb95-4de7-a11e-46f84291ec6e", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				newUser,
			}),
		});
	};
	// validate email
	const validate = (text) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
		if (reg.test(text) === false) {
			alert("Email is incorrect");
			return false;
		} else {
			return true;
		}
	};
	// Basic client-side data validation
	const handleCreateAccount = () => {
		console.log(newUser);
		if (
			newUser.name == "" ||
			newUser.email == "" ||
			newUser.newPassword == "" ||
			newUser.re_newPassword == "" ||
			newUser.shoppingAddress == ""
		) {
			alert("Check Credentials Again");
		} else if (newUser.newPassword != newUser.re_newPassword) {
			alert("Password does not match");
		} else if (newUser.newPassword.length < 8 || newUser.newPassword > 20) {
			alert("Password length must be in 8 to 20 characters");
		} else if (validate(newUser.email)) {
			postData();
			setNewUser({
				name: "",
				email: "",
				newPassword: "",
				re_newPassword: "",
				shoppingAddress: "",
				cardNumber: "",
				month: "",
				year: "",
				cvv: "",
				nameOnCard: "",
			});
		}
	};

	return (
		<LinerGradientComponent>
			<View style={styles.textContainer}>
				<View style={{ alignItems: "center" }}>
					<Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
					<Text style={[styles.whiteText, styles.ligtText]}>Buy your all needs in one place</Text>
				</View>
			</View>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				style={{ width: "100%" }}
				contentContainerStyle={{ alignItems: "center" }}
				enableOnAndroid={true}
				extraHeight={200}>
				<View style={{ paddingTop: 60, width: "100%", alignItems: "center" }}>
					<Modal>
						<Text style={styles.subTitle}>Create Account</Text>
						<InputComponent
							placeHolder='Name'
							value={newUser.name}
							onChangeText={(e) => {
								setNewUser({ ...newUser, name: e });
							}}
						/>
						<InputComponent
							placeHolder='Email'
							value={newUser.email}
							autoCapitalize='none'
							onChangeText={(e) => {
								setNewUser({ ...newUser, email: e });
							}}
						/>
						<InputComponent
							secureTextEntry={true}
							autoCapitalize='none'
							placeHolder='New Password'
							value={newUser.newPassword}
							onChangeText={(e) => {
								setNewUser({ ...newUser, newPassword: e });
							}}
						/>
						<InputComponent
							secureTextEntry={true}
							autoCapitalize='none'
							placeHolder='Re-enter Password'
							value={newUser.re_newPassword}
							onChangeText={(e) => {
								setNewUser({ ...newUser, re_newPassword: e });
							}}
						/>
						<InputComponent
							placeHolder='Shipping Address'
							value={newUser.shoppingAddress}
							onChangeText={(e) => {
								setNewUser({ ...newUser, shoppingAddress: e });
							}}
						/>
						<View style={styles.horizontalContainer}>
							<Text style={{ color: "#A7A7A7" }}>Card Information</Text>
							<View style={{ ...styles.hLine, width: "60%" }}></View>
						</View>
						<InputComponent
							placeHolder='Card number'
							value={newUser.cardNumber}
							onChangeText={(e) => {
								setNewUser({ ...newUser, cardNumber: e });
							}}
						/>
						<View style={{ ...styles.horizontalContainer, width: "85%" }}>
							<View style={{ width: "50%", flexDirection: "row", justifyContent: "space-between" }}>
								<InputComponent
									placeHolder='MM'
									style={{ width: "45%" }}
									value={newUser.month}
									onChangeText={(e) => {
										setNewUser({ ...newUser, month: e });
									}}
								/>

								<InputComponent
									placeHolder='YY'
									style={{ width: "45%" }}
									value={newUser.year}
									onChangeText={(e) => {
										setNewUser({ ...newUser, year: e });
									}}
								/>
							</View>
							<InputComponent
								placeHolder='CVV'
								style={{ width: "25%" }}
								value={newUser.cvv}
								onChangeText={(e) => {
									setNewUser({ ...newUser, cvv: e });
								}}
							/>
						</View>
						<InputComponent
							placeHolder='Name on card'
							value={newUser.nameOnCard}
							onChangeText={(e) => {
								setNewUser({ ...newUser, nameOnCard: e });
							}}
						/>
						<View style={styles.hLine}></View>

						<Blue_Button name='Create Account' onPress={handleCreateAccount} />
						<Transparent_Button
							name='Cancel'
							onPress={() => {
								props.navigation.goBack();
							}}
						/>
					</Modal>
				</View>
				<View style={{ height: 200 }}></View>
			</KeyboardAwareScrollView>
			<StatusBar backgroundColor='#fff' />
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		// marginTop: 15,
		marginBottom: 40,
		position: "absolute",
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
	horizontalContainer: {
		flex: 1,
		flexDirection: "row",
		width: "90%",
		minHeight: 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
});
