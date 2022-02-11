import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import Blue_Button from "../components/Blue_Button";
import Transparent_Button from "../components/Transparent_Button";
import PopModal from "../components/PopModal";
import { useState } from "react";
import LinearGradientComponet from '../components/LinerGradientComponet'



export default function Home(props) {


  const [showModal, setShowModal] = useState(false);
  const closeModal = (bool) => {
    setShowModal(bool)
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
      <PopModal visible={showModal} closeModal={(bool) => { setShowModal(bool) }} >
        <Text>CWx</Text>
      </PopModal>

      <Blue_Button name="Show Modal" onPress={() => { closeModal(true) }} />
      <Transparent_Button name="Go Back" onPress={() => { props.navigation.goBack() }} />
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
