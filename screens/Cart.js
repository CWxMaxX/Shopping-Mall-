/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinerGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";

export default function Cart(props) {
	return (
		<LinerGradientComponent>
			<View>
				<Text>Shopping Cart</Text>
			</View>
			<TabNavigation navigation={props.navigation}></TabNavigation>
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({});
