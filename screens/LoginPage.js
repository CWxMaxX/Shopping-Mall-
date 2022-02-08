import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../components/Modal";
import { TextInput } from "react-native";
import InputComponent from "../components/InputComponent";
import Green_Button from "../components/Green_Button";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { TouchableOpacity } from "react-native";

export default function LoginPage() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#004A9F", "#63A3FF"]}
      start={[0, 0.1]}
      end={[0, 0.5]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.whiteText}>Welcome</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
          <Text style={[styles.whiteText, styles.ligtText]}>Buy your all needs in one place</Text>
        </View>
      </View>

      <Modal>
        <InputComponent placeHolder="Email Address" />
        <InputComponent placeHolder="Password" secureTextEntry={true} />
        <View style={styles.hLine}></View>
        <Blue_Button name="Login" />
      </Modal>
      <Green_Button name="Create New Account" />
      <TouchableOpacity style={{ marginTop: 100 }}>
        <Text style={styles.whiteText}>Help !</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#fff" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
  },
  textContainer: {
    marginTop: 50,
  },
  whiteText: {
    color: "#fff",
  },

  titleText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  ligtText: {
    fontWeight: "100",
  },
  hLine: {
    borderBottomColor: "#A7A7A7",
    borderBottomWidth: 1,
    width: "90%",
    opacity: 0.5,
    marginVertical: 5,
  },
});
