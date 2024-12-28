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
    name: "3.5mm To 3.5mm Audio Cable (Black)",
    price: "₹29",
    image: require("./../assets/images/accessories/1.webp"),
  },
  {
    id: 2,
    name: "MH40 Ear Pads",
    price: "₹40",
    image: require("./../assets/images/accessories/2.webp"),
  },
  {
    id: 3,
    name: "MC100 Wireless Charge Pad (Silver Aluminum / Grey Coated Canvas)",
    price: "₹69",
    image: require("./../assets/images/accessories/3.webp"),
  },
  {
    id: 4,
    name: "MW50+ On-Ear Ear Pads",
    price: "₹45",
    image: require("./../assets/images/accessories/4.webp"),
  },
  {
    id: 5,
    name: "Headphone Stand (Black)",
    price: "₹2",
    originalPrice: "₹29",
    discount: "93% OFF",
    image: require("./../assets/images/accessories/5.webp"),
  },
  {
    id: 6,
    name: " 3.5mm To 3.5mm Audio Cable (Silver)",
    price: "₹29",
    image: require("./../assets/images/accessories/6.webp"),
  },
  {
    id: 7,
    name: "Headphone Stand (Silver)",
    price: "₹29",
    image: require("./../assets/images/accessories/7.webp"),
  },
  {
    id: 8,
    name: "MW07 Plus Charging Case & Canvas Pouch (Stainless Steel)",
    price: "₹125",
    image: require("./../assets/images/accessories/8.webp"),
  },
];

export default function AccessoriesDetails() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            {/* "Buy 2 Get 1" Label */}
            <View style={styles.offerLabel}>
              <Text style={styles.offerText}>BUY 2 GET 1</Text>
            </View>

            {/* Product Image */}
            <TouchableOpacity>
              <Image source={product.image} style={styles.image} />
            </TouchableOpacity>

            {/* Favorite Icon */}
            <TouchableOpacity style={styles.cartIcon}>
              <Ionicons name="heart-outline" size={22} color="black" />
            </TouchableOpacity>

            {/* Product Details */}
            <Text numberOfLines={2} style={styles.title}>
              {product.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>{product.price}</Text>
              <Text style={styles.originalPrice}>{product.originalPrice}</Text>
              <Text style={styles.discount}>{product.discount}</Text>
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ADD TO CART</Text>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    marginRight: 10,
    width: 200,
    height: 360,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    position: "relative",
    // marginBottom: 5,
  },
  offerLabel: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#28a745",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    zIndex: 1,
  },
  offerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e7e3e3",
    borderStyle: "solid",
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
    fontWeight: "500",
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  discount: {
    fontSize: 16,
    color: "#28a745",
    fontWeight: "bold",
  },
  cartIcon: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "white",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});
