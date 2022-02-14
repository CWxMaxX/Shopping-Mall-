/** @format */
// This modal is basically design for add popups in whole app, Usage ==> View Product, Categories
import { StyleSheet, View, Modal } from "react-native";

import Transparent_Button from "./Transparent_Button";

export default function PopModal(props) {
	return (
		<Modal transparent={true} visible={props.visible}>
			<View style={styles.outerPart}>
				<View style={styles.innerPart}>
					{props.children}
					<View style={{ height: 20 }}></View>
					<Transparent_Button
						name='Close'
						onPress={() => {
							props.closeModal(false);
						}}
					/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	outerPart: {
		flex: 1,
		backgroundColor: "#000000aa",
		alignItems: "center",
		justifyContent: "center",
	},
	innerPart: {
		width: "90%",
		minHeight: 200,
		backgroundColor: "#f6f6f6",
		margin: 30,
		padding: 30,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-between",
	},
});
