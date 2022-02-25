/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "../components/Modal";
import InputComponent from "../components/InputComponent";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import { StatusBar } from "expo-status-bar";
import LinerGradientComponent from "../components/LinerGradientComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";

export default function CreateAccountPAge(props) {
  const [newUser, setNewUser] = useState({});
  const [addCard, setAddCard] = useState(false);

  //ValidationSchema
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Invalid Name")
      .required("Name is required !"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    newPassword: Yup.string()
      .trim()
      .min(8, "Password is Invalid")
      .required("Password is required"),
    confirmPassword: Yup.string().equals(
      [Yup.ref("newPassword"), null],
      "Password does not match"
    ),
    mobileNumber: Yup.number().required("Required"),
    shoppingAddress: Yup.string().required("Address is Required"),
    cardNumber: Yup.number().required("Required"),
    month: Yup.number().required("Required"),
    year: Yup.number().required("Required"),
    cvv: Yup.number().required("Required"),
    nameOnCard: Yup.string().trim().required("Required"),
  });

  // Fetch validated data into backend
  const postData = (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.newPassword)
      .then((userCredentials) => {
        let userDetails = {
          uid: userCredentials.user.uid,
          name: values.name,
          email: values.email,
          phoneNumber: values.mobileNumber,
          shippingAddress: values.shoppingAddress,
        };
        fetch("http://192.168.1.3:8080/api/v1/user/saveUser", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: userDetails.uid,
            name: userDetails.name,
            email: userDetails.email,
            phoneNumber: userDetails.phoneNumber,
            shippingAddress: userDetails.shippingAddress,
          }),
        });
        fetch("http://192.168.1.3:8080/api/v1/payment/savePayment", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cardNumber: values.cardNumber,
            nameOnCard: values.nameOnCard,
            expireMonth: values.month,
            expireYear: values.year,
            cvv: values.cvv,
            uid: userCredentials.user.uid,
          }),
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LinerGradientComponent>
      <View style={styles.textContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.titleText]}>
            Shopping Mall
          </Text>
          <Text style={[styles.whiteText, styles.lightText]}>
            Buy your all needs in one place
          </Text>
        </View>
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        enableOnAndroid={true}
        extraHeight={200}
      >
        <View style={{ paddingTop: 60, width: "100%", alignItems: "center" }}>
          <Modal>
            <Formik
              initialValues={newUser}
              validationSchema={validationSchema}
              onSubmit={(values, formikActions) => {
                setTimeout(() => {
                  postData(values);
                  console.log(values);
                  formikActions.resetForm();
                  formikActions.setSubmitting(false);
                }, 3000);
              }}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                handleBlur,
                isSubmitting,
                handleSubmit,
              }) => {
                // console.log(values)
                const {} = values;
                return (
                  <>
                    <Text style={styles.subTitle}>Create Account</Text>

                    <InputComponent
                      placeHolder="Name"
                      error={touched.name && errors.name}
                      value={values.name}
                      onBlur={handleBlur("name")}
                      onChangeText={handleChange("name")}
                    />
                    <InputComponent
                      placeHolder="Email"
                      error={touched.email && errors.email}
                      value={values.email}
                      autoCapitalize="none"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                    <InputComponent
                      secureTextEntry={true}
                      autoCapitalize="none"
                      placeHolder="New Password"
                      error={touched.newPassword && errors.newPassword}
                      value={values.newPassword}
                      onChangeText={handleChange("newPassword")}
                      onBlur={handleBlur("newPassword")}
                    />
                    <InputComponent
                      secureTextEntry={true}
                      autoCapitalize="none"
                      placeHolder="Re-enter Password"
                      error={touched.confirmPassword && errors.confirmPassword}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                    />
                    <InputComponent
                      placeHolder="Mobile Number"
                      error={touched.mobileNumber && errors.mobileNumber}
                      value={values.mobileNumber}
                      onChangeText={handleChange("mobileNumber")}
                      onBlur={handleBlur("mobileNumber")}
                    />
                    <InputComponent
                      placeHolder="Shipping Address"
                      error={touched.shoppingAddress && errors.shoppingAddress}
                      value={values.shoppingAddress}
                      onChangeText={handleChange("shoppingAddress")}
                      onBlur={handleBlur("shoppingAddress")}
                    />
                    <View style={styles.horizontalContainer}>
                      <Text style={{ color: "#A7A7A7" }}>Card Information</Text>
                      <View style={{ ...styles.hLine, width: "60%" }} />
                    </View>
                    {!addCard && (
                      <Blue_Button
                        name="Add Card"
                        onPress={() => {
                          addCard ? setAddCard(false) : setAddCard(true);
                        }}
                      />
                    )}
                    {/*Card Information*/}
                    {addCard && (
                      <View
                        style={{
                          flex: 1,
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <InputComponent
                          placeHolder="Card number"
                          error={touched.cardNumber && errors.cardNumber}
                          value={values.cardNumber}
                          onChangeText={handleChange("cardNumber")}
                          onBlur={handleBlur("cardNumber")}
                        />
                        <View
                          style={{
                            ...styles.horizontalContainer,
                            width: "85%",
                          }}
                        >
                          <View
                            style={{ width: "30%", alignItems: "flex-start" }}
                          >
                            <InputComponent
                              error={touched.month && errors.month}
                              placeHolder="MM"
                              style={{ width: "100%" }}
                              value={values.month}
                              onChangeText={handleChange("month")}
                              onBlur={handleBlur("month")}
                            />
                          </View>
                          <View
                            style={{ width: "30%", alignItems: "flex-start" }}
                          >
                            <InputComponent
                              error={touched.year && errors.year}
                              placeHolder="YY"
                              style={{ width: "100%" }}
                              value={values.year}
                              onChangeText={handleChange("year")}
                              onBlur={handleBlur("year")}
                            />
                          </View>
                          <View
                            style={{ width: "30%", alignItems: "flex-start" }}
                          >
                            <InputComponent
                              error={touched.cvv && errors.cvv}
                              placeHolder="CVV"
                              style={{ width: "100%" }}
                              value={values.cvv}
                              onChangeText={handleChange("cvv")}
                              onBlur={handleBlur("cvv")}
                            />
                          </View>
                        </View>
                        <InputComponent
                          error={touched.nameOnCard && errors.nameOnCard}
                          placeHolder="Name on card"
                          value={values.nameOnCard}
                          onChangeText={handleChange("nameOnCard")}
                          onBlur={handleBlur("nameOnCard")}
                        />
                      </View>
                    )}
                    <View style={styles.hLine} />

                    <Blue_Button
                      name="Create Account"
                      onPress={() => {
                        addCard
                          ? handleSubmit()
                          : alert("Add Card to Create Account");
                      }}
                      submitting={isSubmitting}
                    />
                    <Transparent_Button
                      name="Cancel"
                      onPress={() => {
                        props.navigation.goBack();
                      }}
                    />
                  </>
                );
              }}
            </Formik>
          </Modal>
        </View>
        <View style={{ height: 200 }} />
      </KeyboardAwareScrollView>
      <StatusBar backgroundColor="#fff" />
    </LinerGradientComponent>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 40,
    position: "absolute",
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
  subTitle: {
    fontSize: 24,
  },
  hLine: {
    marginTop: 10,
    borderBottomColor: "#A7A7A7",
    borderBottomWidth: 1,
    width: "90%",
    opacity: 0.5,
    marginVertical: 5,
  },
  blueText: {
    color: "#2378EF",
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    minHeight: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
