import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Transparent_Button from './Transparent_Button'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'



export default function PopModal(props) {



    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.outerPart}   >
                <View style={styles.innerPart} >
                    {props.children}
                    <Transparent_Button name="Close" onPress={() => { props.closeModal(false) }} />
                </View>

            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    outerPart: {
        flex: 1,
        backgroundColor: "#000000aa",
        alignItems: "center",
        justifyContent: "center"

    },
    innerPart: {

        width: "90%",
        minHeight: 200,
        backgroundColor: "#fff",
        margin: 30,
        padding: 30,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between"

    },
})