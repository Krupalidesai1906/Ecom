import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

export default function ThreeSection() {
  return (
    <View style={styles.container}>
      {/* Free Shipping Section */}
      <View style={styles.section}>
      <Feather name="truck" size={40} color="black" />
        <Text style={styles.title}>Free shipping above ₹499</Text>
        <Text style={styles.subtitle}>Delivery happens within 3-7 days</Text>
      </View>

      {/* Payment Options Section */}
      <View style={styles.section}>
        <FontAwesome name="money" size={40} color="black" />
        <Text style={styles.title}>Payment options</Text>
        <Text style={styles.subtitle}>Cash on Delivery & Online Payment</Text>
      </View>

      {/* Customer Support Section */}
      <View style={styles.section}>
        <Feather name="phone-call" size={40} color="black" />
        <Text style={styles.title}>Customer support</Text>
        <Text style={styles.subtitle}>tinkr@mydukaan.io</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  section: {
    alignItems: "center",
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
});
