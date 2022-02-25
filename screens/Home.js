/** @format */

import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import Blue_Button from "../components/Blue_Button";
import PopModal from "../components/PopModal";
import LinearGradientComponent from "../components/LinerGradientComponent";
import TabNavigation from "../navigation/TabNavigation";
import Card from "../components/Card";
import { FlatList } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Green_Button from "../components/Green_Button";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [user, setUser] = useState("");
  const [products, setProducts] = useState(); //Flat list product data
  const [currentProduct, setCurrentProduct] = useState({
    productID: "",
    productName: "",
    productPrice: "",
    shippingCountry: "",
    image: "",
  });

  //Add Products into Saved Tab
  const postSaved = () => {
    fetch("http://192.168.1.2:4000/postSavedProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: currentProduct.productID,
        productName: currentProduct.productName,
        productPrice: currentProduct.productPrice,
        shippingCountry: currentProduct.shippingCountry,
        image: currentProduct.image,
      }),
    });
  };
  //Add Products into Saved Tab
  const postCart = () => {
    fetch("http://192.168.1.2:4000/postAddCart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: currentProduct.productID,
        productName: currentProduct.productName,
        productPrice: currentProduct.productPrice,
        shippingCountry: currentProduct.shippingCountry,
        image: currentProduct.image,
      }),
    });
  };

  //Get user details from backend using API call
  const getUser = () => {
    return fetch("http://192.168.1.2:8080/api/v1/user/getUser")
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //Get product details from backend using API call
  const getProduct = () => {
    return fetch("http://192.168.1.2:4000/getProducts")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        // console.log(json);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //Show popup Products
  const popupProduct = (item) => {
    setCurrentProduct(item);
    setShowProduct(true);
  };

  //Getting data from server
  useEffect(() => {
    // getProduct();
    // getUser();
  }, []);
  // Flat list rendering
  const itemDetails = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ width: "40%", marginLeft: "6%" }}
        onPress={() => popupProduct(item)}
      >
        <Card style={{ width: "100%" }}>
          <View style={styles.imageThumbnail}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 80, flex: 1, margin: 5 }}
              resizeMode="center"
            />
          </View>

          <Text style={globalStyles.subtitle}>{item.productName}</Text>
          <Text style={globalStyles.price}>Rs: {item.productPrice}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradientComponent>
      <View style={{ position: "absolute", top: -60, right: -4, zIndex: 5 }}>
        <Blue_Button
          name="Categories"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.whiteText}>Welcome {user}</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.titleText]}>
            Shopping Mall
          </Text>
          <Text style={[styles.whiteText, styles.lightText]}>
            Buy your all needs in one place
          </Text>
        </View>
      </View>
      {/* Popup modal for categories */}
      <PopModal
        visible={showModal}
        closeModal={(bool) => {
          setShowModal(bool);
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <View style={{ ...styles.hLine, marginBottom: 15, width: "70%" }} />
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/responsive.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Electronic Devices</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/electric-appliance.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Home Appliances</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/cosmetics.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Health & Beauty</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/toys.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Babies & Toys</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/clothes-rack.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Life Style</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={styles.touchingCard}>
            <Image
              source={require("../assets/Icons/sports.png")}
              style={{ width: 35, height: 35, marginHorizontal: 30 }}
            />
            <Text>Sports & Outdoor</Text>
          </TouchableOpacity>
        </Card>
      </PopModal>

      {/* Popup modal for products */}
      <PopModal
        visible={showProduct}
        closeModal={(bool) => {
          setShowProduct(bool);
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: currentProduct["image"],
            }}
            style={{ width: 200, height: 200, flex: 1 }}
            resizeMode="center"
          />
        </View>

        <Text style={globalStyles.title}>{currentProduct["productName"]}</Text>
        <Text style={globalStyles.subtitle}>
          Rs: {currentProduct["productPrice"]}
        </Text>
        <Text style={globalStyles.price}>
          Shipping from {currentProduct["shippingCountry"]}
        </Text>
        <Green_Button
          name="Buy Now"
          onPress={() => {
            Alert.alert("Warring", "Section is under development");
          }}
        />
        <View style={styles.iconsCartAndSave}>
          <Pressable
            onPress={() => {
              postCart();
              Alert.alert(
                "Add to cart",
                "Selected item successfully added to cart!"
              );
            }}
          >
            <MaterialIcons name="add-shopping-cart" size={35} color="black" />
          </Pressable>
          <Pressable
            onPress={() => {
              postSaved();
              Alert.alert("Saved", "Selected item successfully saved !");
            }}
          >
            <MaterialCommunityIcons name="bookmark" size={35} color="black" />
          </Pressable>
        </View>
      </PopModal>

      {/* Item List */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          renderItem={itemDetails}
          keyExtractor={(item) => item.productID}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ height: 150 }} />
      </View>
      <StatusBar backgroundColor="#fff" />
      <TabNavigation navigation={props.navigation} />
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
    borderBottomColor: "#A7A7A7",
    borderBottomWidth: 1,
    width: "90%",
    opacity: 0.5,
    marginVertical: 5,
  },
  touchingCard: { flexDirection: "row", width: "100%", alignItems: "center" },
  productGrid: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productContainer: {
    width: "45%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageThumbnail: {
    width: 120,
    height: 90,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 0.5,
    borderStyle: "solid",
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
  },
  iconsCartAndSave: {
    width: 80,
    height: 40,
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
