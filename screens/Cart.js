/** @format */

import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import LinerGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/globalStyles";
import Card from "../components/Card";
import Green_Button from "../components/Green_Button";

export default function Cart(props) {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const getCart = () => {
		return fetch("http://192.168.1.2:4000/getCart")
			.then((response) => response.json())
			.then((json) => {
				setCart(json);
				// console.log(json);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	const showTotal = () => {
		if (parseInt(totalPrice)) {
			return true;
		} else {
			return false;
		}
	};
	const calTotal = () => {
		let total = 0;
		cart.forEach((item) => {
			total += parseInt(item.productPrice);
		});
		setTotalPrice(total);
	};
	useEffect(() => {
		setTotalPrice(0);
		getCart();
	}, []);
	useEffect(() => {
		calTotal();
	});

	const resetCart = () => {
		fetch("http://192.168.1.2:4000/postRestCart", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});
	};
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
	return (
		<LinerGradientComponent>
			<View style={{ flex: 1, width: "100%" }}>
				<FlatList
					data={cart}
					renderItem={itemDetails}
					keyExtractor={(item) => item.productID}
					numColumns={2}
					showsVerticalScrollIndicator={false}
				/>
				<View style={{ height: 150 }}></View>
			</View>
			{showTotal() && (
				<View style={styles.totalPriceContainer}>
					<Text style={globalStyles.titleWhite}>Rs {totalPrice}.00/=</Text>
				</View>
			)}
			{/* Red Button */}
			<Green_Button
				name='Clear Cart'
				style={{ backgroundColor: "#F4511E", position: "absolute", bottom: 180 }}
				onPress={() => {
					resetCart();
					getCart();
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
	totalPriceContainer: {
		width: 250,
		height: 50,
		// backgroundColor: "#F6F6F6",
		position: "absolute",
		bottom: 250,
		alignItems: "center",
		justifyContent: "center",
	},
});
