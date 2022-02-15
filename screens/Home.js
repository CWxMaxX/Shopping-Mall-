/** @format */

import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Blue_Button from "../components/Blue_Button";
import PopModal from "../components/PopModal";
import LinearGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";
import Card from "../components/Card";
import { FlatList } from "react-native";

export default function Home(props) {
	const [showModal, setShowModal] = useState(false);
	const [showProduct, setShowProduct] = useState(false);
	const [user, setUser] = useState("");
	const [products, setProducts] = useState();
	const [currentProduct, setCurrentProduct] = useState();

	//Get user details from backend using API call
	const getUser = () => {
		return fetch("http://192.168.1.2:4000/getUser")
			.then((response) => response.json())
			.then((json) => {
				setUser(json);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	//Get product details from backend using API call
	const getProduct = () => {
		return fetch("http://192.168.1.2:4000/getProducts")
			.then((response) => response.json())
			.then((json) => {
				setProducts(json);
				// console.log(json);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	const popupProduct = (item) => {
		setCurrentProduct(item);
		setShowProduct(true);
	};

	useEffect(() => {
		getProduct();
		getUser();
	}, []);

	const itemDetails = ({ item }) => {
		return (
			<TouchableOpacity
				style={{ width: "40%", marginLeft: "6%" }}
				onPress={() => {
					popupProduct(item);
				}}>
				<Card style={{ width: "100%" }}>
					<Text>{item.productID}</Text>
					<Text>{item.productName}</Text>
					<Text>{item.productPrice}</Text>
					<Text>{item.shippingCountry}</Text>
				</Card>
			</TouchableOpacity>
		);
	};

	return (
		<LinearGradientComponent>
			<View style={{ position: "absolute", top: -60, right: -4, zIndex: 5 }}>
				<Blue_Button
					name='Categories'
					onPress={() => {
						setShowModal(true);
					}}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.whiteText}>
					Welcome {user.fname} {user.lname}
				</Text>
				<View style={{ alignItems: "center" }}>
					<Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
					<Text style={[styles.whiteText, styles.lightText]}>Buy your all needs in one place</Text>
				</View>
			</View>
			{/* Popup modal for categories */}
			<PopModal
				visible={showModal}
				closeModal={(bool) => {
					setShowModal(bool);
				}}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				<View style={{ ...styles.hLine, marginBottom: 15, width: "70%" }}></View>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/responsive.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Electronic Devices</Text>
					</TouchableOpacity>
				</Card>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/electric-appliance.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Home Appliances</Text>
					</TouchableOpacity>
				</Card>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/cosmetics.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Health & Beauty</Text>
					</TouchableOpacity>
				</Card>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/toys.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Babies & Toys</Text>
					</TouchableOpacity>
				</Card>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/clothes-rack.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Life Style</Text>
					</TouchableOpacity>
				</Card>
				<Card>
					<TouchableOpacity style={styles.touchingCard}>
						<Image
							source={require("../assets/Icons/sports.png")}
							style={{ width: 35, height: 35, marginHorizontal: 30 }}
						/>
						<Text>Sports & Outdoor</Text>
					</TouchableOpacity>
				</Card>
			</PopModal>
			{/* Popup modal for products */}
			<PopModal
				visible={showProduct}
				closeModal={(bool) => {
					setShowProduct(bool);
				}}>
				<Text>{currentProduct["productID"]}</Text>
				<Text>{currentProduct["productName"]}</Text>
				<Text>{currentProduct["productPrice"]}</Text>
				<Text>{currentProduct["shippingCountry"]}</Text>
			</PopModal>
			<View style={{ flex: 1 }}>
				<FlatList
					data={products}
					renderItem={itemDetails}
					keyExtractor={(item) => item.productID}
					numColumns={2}
					showsVerticalScrollIndicator={false}
				/>
				<View style={{ height: 150 }}></View>
			</View>
			<StatusBar backgroundColor='#fff' />
			<TabNavigation navigation={props.navigation}></TabNavigation>
		</LinearGradientComponent>
	);
}

const styles = StyleSheet.create({
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
	hLine: {
		borderBottomColor: "#A7A7A7",
		borderBottomWidth: 1,
		width: "90%",
		opacity: 0.5,
		marginVertical: 5,
	},
	touchingCard: { flexDirection: "row", width: "100%", alignItems: "center" },
	productGrid: {
		width: "100%",
		height: 150,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	productContainer: {
		width: "45%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
