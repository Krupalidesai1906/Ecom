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
    name: "MW07 Plus Automobili Lamborghini (Mantis Green / Matte Black Case)",
    price: "₹249",
    image: require("./../assets/images/earbuds/first.webp"),
  },
  {
    id: 2,
    name: "MW07 Plus Automobili Lamborghini (Polished White / Matte Silver Case)",
    price: "₹249",
    image: require("./../assets/images/earbuds/2.webp"),
  },
  {
    id: 3,
    name: "MW08 Sport (Blue Sapphire Glass / Black Kevlar® Case)",
    price: "₹349",
    image: require("./../assets/images/earbuds/3.webp"),
  },
  {
    id: 4,
    name: "MW07 Plus (Jade Green / Stainless Steel Case)",
    price: "₹249",
    image: require("./../assets/images/earbuds/4.webp"),
  },
  {
    id: 5,
    name: "MW65 Automobili Lamborghini (Black / Black / Grey)",
    price: "₹499",
    image: require("./../assets/images/earbuds/5.webp"),
  },
  {
    id: 6,
    name: " MW07 Plus Paris Saint-Germain",
    price: "₹249",
    image: require("./../assets/images/earbuds/6.webp"),
  },
  {
    id: 7,
    name: "MW08 (White Ceramic / Matte Black Case)",
    price: "₹299",
    image: require("./../assets/images/earbuds/7.webp"),
  },
  {
    id: 8,
    name: "MW07 Plus Automobili Lamborghini (Polished Black / Matte Black Case)",
    price: "₹249",
    image: require("./../assets/images/earbuds/8.webp"),
  },
];

export default function EarphonesDetails() {
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

        {/* "See All Products" Button */}
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All Products</Text>
        </TouchableOpacity>
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
    height: 200,
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
    top: 20,
    backgroundColor: "white",
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
  seeAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 160,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    height: 80,
    width: 200,
    backgroundColor: "white",
  },
  seeAllText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
});
