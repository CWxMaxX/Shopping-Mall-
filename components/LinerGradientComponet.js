import { StyleSheet, } from 'react-native'
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';

export default function LinerGradientComponet(props) {
    return (

        <LinearGradient
            style={styles.container}
            colors={["#004A9F", "#63A3FF"]}
            start={[0, 0.1]}
            end={[0, 0.5]}

        >
            {props.children}
        </LinearGradient>

    )
}
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: deviceHeight,
    },
})