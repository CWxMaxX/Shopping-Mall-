/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabNavigation(props) {
	return (
		<View style={styles.container}>
			<View style={styles.bottomTabs}>
				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={() => {
						props.navigation.navigate("Home");
					}}>
					<View style={styles.iconContainer}>
						<Feather name='home' size={35} color='#2378EF' />
					</View>
					<Text style={{ color: "#2378EF" }}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={() => {
						props.navigation.navigate("Cart");
					}}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons name='cart-outline' size={35} color='#2378EF' />
					</View>
					<Text style={{ color: "#2378EF" }}>Cart</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={() => {
						props.navigation.navigate("Saved");
					}}>
					<View style={styles.iconContainer}>
						<Feather name='star' size={35} color='#2378EF' />
					</View>
					<Text style={{ color: "#2378EF" }}>Saved</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={() => {
						props.navigation.navigate("Account");
					}}>
					<View style={styles.iconContainer}>
						<Feather name='user' size={35} color='#2378EF' />
					</View>
					<Text style={{ color: "#2378EF" }}>Account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		position: "absolute",
		flexDirection: "column-reverse",
	},
	bottomTabs: {
		flexDirection: "row",
		height: 160,
		width: "100%",
		backgroundColor: "#fff",
		justifyContent: "space-around",
		paddingTop: 15,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	iconContainer: {
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
});
