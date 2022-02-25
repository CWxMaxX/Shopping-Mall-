/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "../components/Modal";
import InputComponent from "../components/InputComponent";
import Green_Button from "../components/Green_Button";
import Blue_Button from "../components/Blue_Button";
import LinearGradientComponent from "../components/LinerGradientComponent";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginPage(props) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInfo;

  const submitLogin = (values) => {
    const email = values.email;
    const password = values.password;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user.uid;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    // return auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     props.navigation.replace("Home");
    //   }
    // });
  }, []);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .trim()
      .min(6, "Password is Invalid")
      .required("Password is required"),
  });

  return (
    <LinearGradientComponent>
      <View style={styles.textContainer}>
        <Text style={styles.whiteText}>Welcome</Text>

        <View style={{ alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.titleText]}>
            Shopping Mall
          </Text>
          <Text style={[styles.whiteText, styles.lightText]}>
            Buy your all needs in one place
          </Text>
        </View>
      </View>

      <Modal>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
              submitLogin(values);
              formikActions.resetForm();
            }, 2000);
          }}
        >
          {(props) => (
            <View style={{ width: "100%", alignItems: "center" }}>
              <InputComponent
                placeHolder="Email Address"
                autoCapitalize="none"
                error={props.touched.email && props.errors.email}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <InputComponent
                placeHolder="Password"
                secureTextEntry={true}
                error={props.touched.password && props.errors.password}
                autoCapitalize="none"
                value={props.values.password}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
              />
              <View style={styles.hLine} />
              <Blue_Button name="Login" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>

        <View
          style={{
            width: "50%",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="google" size={28} color="#004A9F" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="facebook-with-circle" size={28} color="#004A9F" />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{ marginTop: 50 }} />

      <Green_Button
        name="Create New Account"
        onPress={() => {
          props.navigation.navigate("Create Account");
        }}
      />
      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={() => {
          props.navigation.navigate("Help");
        }}
      >
        <Text style={styles.whiteText}>Help !</Text>
      </TouchableOpacity>

      <StatusBar backgroundColor="#fff" />
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
    marginTop: 20,
    borderBottomColor: "#A7A7A7",
    borderBottomWidth: 1,
    width: "90%",
    opacity: 0.5,
    marginVertical: 5,
  },
});
