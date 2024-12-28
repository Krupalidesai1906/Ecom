import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const products = [
  {
    id: 1,
    name: "Q Acoustic Q 7000i Satellite/ OnWall Speakers Set",
    price: "₹1,35,900",
    image: require("./../assets/images/Mini Home Theater/1.webp"),
  },
  {
    id: 2,
    name: "MPS1620P Studio Monitor New Edition",
    price: "₹46,000",
    image: require("./../assets/images/Mini Home Theater/2.webp"),
  },
  {
    id: 3,
    name: "MA770 (Concrete / Grey)",
    price: "₹1,199",
    image: require("./../assets/images/Mini Home Theater/3.webp"),
  },
  {
    id: 4,
    name: "MA770 (Concrete / Black)",
    price: "₹1,199",
    image: require("./../assets/images/Mini Home Theater/4.webp"),
  },
];

export default function MiniHomeTheaterDetails() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            {/* Product Image */}
            <TouchableOpacity>
              <Image source={product.image} style={styles.image} />
            </TouchableOpacity>
            {/* Name and Price */}
            <Text numberOfLines={2} style={styles.title}>
              {product.name}
            </Text>
            <Text style={styles.price}>{product.price}</Text>

            {/* Cart Icon */}
            <TouchableOpacity style={styles.cartIcon}>
              <Ionicons
                name="heart-outline"
                size={22}
                color="black"
                style={styles.cartIconText}
              />
            </TouchableOpacity>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    marginRight: 10,
    width: 200,
    height: 400,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    position: "relative", // For cart icon positioning
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 210,
    // borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#dddcdc",
    borderStyle: "solid",
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
    fontWeight: "500",
  },
  price: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    fontWeight: "900",
    marginTop: 5,
  },
  cartIcon: {
    position: "absolute",
    right: 20,
    top: 10,
    backgroundColor: "transparent",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIconText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    // marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    bottom: 5,
    right: 5,
    left: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
