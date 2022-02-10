import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from '../components/Modal';
import InputComponent from '../components/InputComponent';
import { TouchableOpacity } from 'react-native';
import Blue_Button from '../components/Blue_Button';
import Transparent_Button from '../components/Transparent_Button';
import { StatusBar } from "expo-status-bar";
import { ScrollView } from 'react-native';


export default function CreateAccountPAge(props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#004A9F", "#63A3FF"]}
            start={[0, 0.1]}
            end={[0, 0.5]}
        >

            <View style={styles.textContainer}>
                <View style={{ alignItems: "center" }}>
                    <Text style={[styles.whiteText, styles.titleText]}>Shopping Mall</Text>
                    <Text style={[styles.whiteText, styles.ligtText]}>Buy your all needs in one place</Text>
                </View>
            </View>
            <ScrollView style={{ width: "100%", }} contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 100, width: "100%", alignItems: "center" }}>
                    <Modal>
                        <Text style={styles.subTitle}>Create Account</Text>
                        <InputComponent placeHolder="Name" />
                        <InputComponent placeHolder="Email" />
                        <InputComponent placeHolder="New Password" />
                        <InputComponent placeHolder="Re-enter Password" />
                        <InputComponent placeHolder="Shipping Address" />

                        <View style={styles.horizontalContainer}>
                            <Text style={{ color: "#A7A7A7" }}>Card Information</Text>
                            <View style={{ ...styles.hLine, width: "60%" }}></View>
                        </View>
                        <InputComponent placeHolder="Card number" />
                        <View style={{ ...styles.horizontalContainer, width: "85%" }}>
                            <View style={{ width: "50%", flexDirection: "row", justifyContent: "space-between" }}>

                                <InputComponent placeHolder="MM" style={{ width: "45%" }} />

                                <InputComponent placeHolder="YY" style={{ width: "45%" }} />
                            </View>
                            <InputComponent placeHolder="CVV" style={{ width: "25%" }} />
                        </View>

                        <InputComponent placeHolder="Name on card" />
                        <View style={styles.hLine}></View>
                        <Blue_Button name="Create Account" />
                        <Transparent_Button name="Cancel" onPress={() => { props.navigation.goBack() }} />
                    </Modal>
                </View>
            </ScrollView>
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
        marginBottom: 40,
        position: 'absolute',



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
    subTitle: {
        fontSize: 24
    },
    hLine: {
        borderBottomColor: "#A7A7A7",
        borderBottomWidth: 1,
        width: "90%",
        opacity: 0.5,
        marginVertical: 5,
    },
    blueText: {
        color: "#2378EF"
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "90%",
        minHeight: 30,
        alignItems: "center",
        justifyContent: 'space-between'
    }



});
