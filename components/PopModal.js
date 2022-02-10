import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Transparent_Button from './Transparent_Button'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'



export default function PopModal(props) {
    const handleOutTouch = (bool) => {
        props.closeModal(bool)
    }
    return (
        <Modal
            transparent={true}
            visible={props.visible}
        >
            <TouchableOpacity style={styles.outerPart} onPress={() => { handleOutTouch(false) }}  >
                <View style={styles.innerPart} >
                    {props.children}
                    <Pressable onPress={() => { props.closeModal(false) }} >
                        <Text>Close</Text>
                    </Pressable>
                </View>

            </TouchableOpacity>
        </Modal>

    )
}

const styles = StyleSheet.create({
    outerPart: {
        flex: 1,
        backgroundColor: "#000000aa",
        alignItems: "center"

    },
    innerPart: {
        width: "90%",
        minHeight: 200,
        backgroundColor: "#fff",
        margin: 30,
        padding: 30,
        borderRadius: 10,

    },
})