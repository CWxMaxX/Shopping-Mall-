import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../components/Modal";
import { TextInput } from "react-native";
import InputComponent from "../components/InputComponent";
import Green_Button from "../components/Green_Button";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native';
import LinearGradientComponet from '../components/LinerGradientComponet'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";




export default function LoginPage(props) {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })
  const { email, password } = loginInfo;

  const handleOnChangeText = (value, fieldName) => {
    setLoginInfo({ ...loginInfo, [fieldName]: value });
  }

  const submitLogin = () => {
    if (loginInfo.email == "chamithwijesooriya@gmail.com" && loginInfo.password == "123456") {
      props.navigation.navigate("Home");
      console.log(loginInfo)
    } else {
      console.log("Invalid Credintials");
    }

  }
  return (
    <LinearGradientComponet>

      <View style={styles.textContainer}>
        <Text style={styles.whiteText}>Welcome</Text>

        <View style={{ alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
          <Text style={[styles.whiteText, styles.ligtText]}>Buy your all needs in one place</Text>
        </View>

      </View>

      <Modal>
        <InputComponent
          placeHolder="Email Address"
          autoCapitalize="none"
          onChangeText={(value) => { handleOnChangeText(value, 'email') }}
          value={email}
        />
        <InputComponent
          placeHolder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={(value) => { handleOnChangeText(value, 'password') }}
        />
        <View style={styles.hLine}></View>
        <Blue_Button name="Login" onPress={() => { submitLogin() }} />
        <View style={{ width: "50%", flexDirection: "row", justifyContent: "space-around", marginTop: 10 }} >
          <TouchableOpacity>
            <AntDesign name="google" size={28} color="#004A9F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="facebook-with-circle" size={28} color="#004A9F" />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{ marginTop: 50 }}></View>

      <Green_Button name="Create New Account" onPress={() => { props.navigation.navigate("Create Account") }} />
      <TouchableOpacity style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate("Help") }} >
        <Text style={styles.whiteText}>Help !</Text>
      </TouchableOpacity>

      <StatusBar backgroundColor="#fff" />
    </LinearGradientComponet>
  );
}

const styles = StyleSheet.create({

  textContainer: {
    marginBottom: 40
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
  hLine: {
    borderBottomColor: "#A7A7A7",
    borderBottomWidth: 1,
    width: "90%",
    opacity: 0.5,
    marginVertical: 5,
  },
});
