/** @format */

import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import LinerGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/globalStyles";
import Card from "../components/Card";
import Green_Button from "../components/Green_Button";

export default function SavedItems(props) {
	const [savedProducts, setSavedProducts] = useState("");
	const getSavedProducts = () => {
		return fetch("http://192.168.1.2:4000/getSavedProducts")
			.then((response) => response.json())
			.then((json) => {
				setSavedProducts(json);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	useEffect(() => {
		getSavedProducts();
	}, []);
	const itemDetails = ({ item }) => {
		return (
			<TouchableOpacity style={{ width: "40%", marginLeft: "6%" }} onPress={() => {}}>
				<Card style={{ width: "100%" }}>
					<View style={styles.imageThumbnail}>
						<Image
							source={{ uri: item.image }}
							style={{ width: 90, height: 80, flex: 1, margin: 5 }}
							resizeMode='center'
						/>
					</View>

					<Text style={globalStyles.subtitle}>{item.productName}</Text>
					<Text style={globalStyles.price}>Rs: {item.productPrice}</Text>
				</Card>
			</TouchableOpacity>
		);
	};
	const resetSavedProducts = () => {
		fetch("http://192.168.1.2:4000/postRestSaved", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});
	};
	return (
		<LinerGradientComponent>
			<View style={{ flex: 1, width: "100%" }}>
				<FlatList
					data={savedProducts}
					renderItem={itemDetails}
					keyExtractor={(item) => item.productID}
					numColumns={2}
					showsVerticalScrollIndicator={false}
				/>
				<View style={{ height: 150 }}></View>
			</View>

			<Green_Button
				name='Clear Saved Products'
				style={{ backgroundColor: "#F4511E", position: "absolute", bottom: 180 }}
				onPress={() => {
					resetSavedProducts();
					setSavedProducts();
				}}
			/>
			<TabNavigation navigation={props.navigation}></TabNavigation>
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({
	imageThumbnail: {
		width: 120,
		height: 90,
		backgroundColor: "#F6F6F6",
		borderRadius: 20,
		alignItems: "center",
		borderColor: "#C4C4C4",
		borderWidth: 0.5,
		borderStyle: "solid",
	},
});
