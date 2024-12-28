import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

const InfoSection = () => {
  return (
    <View style={styles.container}>
      {/* Shop Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Shop</Text>
        <Text style={styles.item}>Headphones</Text>
        <Text style={styles.item}>Earphones</Text>
        <Text style={styles.item}>Accessories</Text>
        <Text style={styles.item}>Speaker</Text>
        <Text style={styles.item}>Mini Home Theater</Text>
      </View>

      {/* The Power of Music Section */}
      <View style={styles.section}>
        <Text style={styles.title}>The power of music</Text>
        <Text style={styles.description}>
          Brilliant sound and design motivate everything we do. We have a deep
          passion for building beautifully crafted, technically sophisticated
          sound tools.
        </Text>
      </View>

      {/* logo */}
      <Image
        source={require("./../assets/images/logo.webp")}
        style={{
          width: 100,
          height: 100,
          borderColor: "white",
          borderWidth: 1,
          backgroundColor: "transparent",
        }}
      />

      <View style={styles.line} />
      <Text style={styles.description}>©2012-23 Tech Solutions Pvt. Ltd</Text>
      <Text style={styles.description}>Email: test@test.com</Text>

      <View style={styles.iconContainer}>
        {/* Instagram Icon */}
        <TouchableOpacity>
          <Feather
            name="instagram"
            size={25}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>

        {/* Facebook Icon */}
        <TouchableOpacity>
          <FontAwesome
            name="facebook"
            size={25}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>

        {/* Twitter Icon */}
        <TouchableOpacity>
          <FontAwesome
            name="twitter"
            size={25}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>

        {/* LinkedIn Icon */}
        <TouchableOpacity>
          <FontAwesome
            name="linkedin"
            size={25}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>

        {/* YouTube Icon */}
        <TouchableOpacity>
          <Entypo name="youtube" size={25} color="rgba(255, 255, 255, 0.7)" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#282828",
    flex: 1,
    marginTop: -20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 5,
    fontWeight: "600",
    lineHeight: 26,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    lineHeight: 24,
    fontWeight: "600",
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: 10,
    width: "100%",
    marginTop:15
  },
});

export default InfoSection;
