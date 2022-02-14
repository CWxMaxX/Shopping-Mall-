/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinerGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";

export default function SavedItems(props) {
	return (
		<LinerGradientComponent>
			<View>
				<Text>Saved Items</Text>
			</View>
			<TabNavigation navigation={props.navigation}></TabNavigation>
		</LinerGradientComponent>
	);
}

const styles = StyleSheet.create({});
