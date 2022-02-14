/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import LinerGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";

export default function Cart(props) {
	const products = [
		{
			key: "1",
			productName: "Iphone 13 Pro",
			productPrice: "250000",
			shippingCountry: "America",
		},
		{
			key: "2",
			productName: "MacBook 13 M1",
			productPrice: "350000",
			shippingCountry: "America",
		},
		{
			key: "3",
			productName: "MacBook 13 Pro",
			productPrice: "356000",
			shippingCountry: "America",
		},
		{
			key: "4",
			productName: "PowerBank",
			productPrice: "2500",
			shippingCountry: "America",
		},
		{
			key: "5",
			productName: "Usb type-C Cable ",
			productPrice: "250",
			shippingCountry: "America",
		},
		{
			key: "6",
			productName: "Usb MicroUsb Cable",
			productPrice: "200",
			shippingCountry: "America",
		},
		{
			key: "7",
			productName: "Samsung Galaxy S22",
			productPrice: "350000",
			shippingCountry: "America",
		},
		{
			key: "8",
			productName: "Apple Home Pod",
			productPrice: "3500",
			shippingCountry: "America",
		},
		{
			key: "9",
			productName: "Apple AirPods",
			productPrice: "35000",
			shippingCountry: "America",
		},
		{
			key: "10",
			productName: "GoPro Hero 10",
			productPrice: "126000",
			shippingCountry: "America",
		},
	];

	return (
		<LinerGradientComponent>
			<View>
				<Text>CWx</Text>
				<FlatList data={products} renderItem={({ item }) => <Text>{item.productName}</Text>} />
			</View>
			<TabNavigation navigation={props.navigation}></TabNavigation>
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({});
