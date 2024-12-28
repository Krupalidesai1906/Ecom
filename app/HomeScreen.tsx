import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  ScrollViewComponent,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Carousel from "react-native-snap-carousel";
import { FontAwesome5 } from "@expo/vector-icons";
import HeadphonesDetails from "./HeadphonesDetails";
import EarphonesDetails from "./EarphonesDetails";
import HeadphoneSlider from "./HeadphoneSlider";
import CustomerReview from "./CustomerReview";
import AccessoriesDetails from "./AccessoriesDetails";
import SpeakerDetails from "./SpeakerDetails";
import MiniHomeTheaterDetails from "./MiniHomeTheaterDetails";
import ThreeSection from "./ThreeSection";
import SignUpSection from "./SignUpSection";
import InfoSection from "./InfoSection";
import Slider from "./Slider";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.99;

// PromoBox Component
const PromoBox = ({ color, icon, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.box, { borderColor: color }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={18} color={color} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// App Component
const App = () => {
  const promoData = [
    {
      id: "1",
      icon: "shipping-fast",
      color: "#FFA500",
      title: "FREE SHIPPING",
      subtitle: "Use FREESHIPINDIA",
    },
    {
      id: "2",
      icon: "gift",
      color: "#6A5ACD",
      title: "BUY 2 GET 1 FREE",
      subtitle: "Use BUY2GET1FREE",
    },
    {
      id: "3",
      icon: "money-bill-wave",
      color: "#28A745",
      title: "FLAT ₹999 OFF",
      subtitle: "Use FLATOFF4U | Above ₹1,000",
    },
    {
      id: "4",
      icon: "percent",
      color: "#FF6347",
      title: "10% OFF UPTO ₹5,000 ",
      subtitle: "Use FIRSTTIME | Above ₹100",
    },
  ];

  const handlePress = (title) => {
    if (title) {
      alert(`You pressed: ${title}`);
    } else {
      alert("Invalid title!");
    }
  };

  return (
    <View style={styles.container1}>
      <FlatList
        data={promoData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PromoBox
            color={item.color}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => handlePress(item.title)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (itemName) => {
    console.log(`${itemName} clicked`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Flash Sale Section */}
      <View style={styles.flashSaleContainer}>
        <Text style={styles.flashSaleText}>Flash sale ends soon!</Text>
      </View>
      {/* Header Section */}
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={require("./../assets/images/logo.webp")}
              style={styles.logo}
            />
            <Text style={styles.logoText}>TINKR</Text>
          </View>
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search Bar */}
      {searchVisible && (
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity onPress={() => setSearchVisible(false)}>
            <Ionicons name="close" size={28} color="black" />
          </TouchableOpacity>
        </View>
      )}
      {/* Image Slider */}
      <Slider />

      {/* Promo Section */}
      <App />
      {/* title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}>SHOP BY CATEGORIES</Text>
      </View>
      {/* image */}
      <View style={styles.mainImgContainer}>
        <TouchableOpacity onPress={() => handleItemClick("Headphones")}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../assets/images/headphones.webp")}
              style={styles.image}
            />
            <Text style={styles.text}>Headphones</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Container}>
        {/* First Row - Two images side by side */}
        <View style={styles.gridContainer}>
          {/* Image 1 */}
          <TouchableOpacity
            style={[styles.itemWrapper, styles.shadowBox]}
            onPress={() => handleItemClick("Airphone")}
          >
            <View style={styles.imageeeContainer}>
              <Image
                source={require("./../assets/images/earphones.webp")}
                style={styles.four_image}
              />
              <Text style={styles.txt1}>Airphone</Text>
              {/* Text on top of the image */}
            </View>
          </TouchableOpacity>

          {/* Image 2 */}
          <TouchableOpacity
            style={[styles.itemWrapper, styles.shadowBox]}
            onPress={() => handleItemClick("Accessories")}
          >
            <View style={styles.imageeeContainer}>
              <Image
                source={require("./../assets/images/Accesories.webp")}
                style={styles.four_image}
              />
              <Text style={styles.txt1}>Accessories</Text>
              {/* Text on top of the image */}
            </View>
          </TouchableOpacity>
        </View>

        {/* Second Row - Two images side by side */}
        <View style={styles.gridContainer}>
          {/* Image 3 */}
          <TouchableOpacity
            style={[styles.itemWrapper, styles.shadowBox]}
            onPress={() => handleItemClick("Speaker")}
          >
            <View style={styles.imageeeContainer}>
              <Image
                source={require("./../assets/images/speakerrr.jpg")}
                style={styles.four_image}
              />
              <Text style={styles.txt1}>Speaker</Text>
              {/* Text on top of the image */}
            </View>
          </TouchableOpacity>

          {/* Image 4 */}
          <TouchableOpacity
            style={[styles.itemWrapper, styles.shadowBox]}
            onPress={() => handleItemClick("Mini Home")}
          >
            <View style={styles.imageeeContainer}>
              <Image
                source={require("./../assets/images/hometheater.jpg")}
                style={styles.four_image}
              />
              <Text style={styles.txt1}>Mini Home</Text>
              {/* Text on top of the image */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Headphone title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}>HEADPHONES</Text>
      </View>
      {/* Headphones Details */}
      <HeadphonesDetails />
      {/* Next Section */}
      <Image
        source={require("./../assets/images/earbuds/1.webp")}
        style={{ height: 370, width: 370, marginBottom: 5, marginLeft: 12 }}
      />
      <View>
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: 14,
          }}
        >
          MW08 - A leap forward
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 22,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            fontWeight: "500",
            color: "gray",
            margin: 8,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          Crafted from ceramic and stainless steel, the MW08 wireless earbuds
          features Hybrid Active Noise-Cancellation, a streamlined form designed
          for comfort, and a new wind-reducing talk solution with 6 microphones.
        </Text>
      </View>
      {/* Know More Button */}
      <TouchableOpacity
        style={{
          paddingVertical: 18,
          paddingHorizontal: 15,
          marginTop: 5,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 34,
          width: 200,
          backgroundColor: "#282828",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          KNOW MORE
        </Text>
      </TouchableOpacity>
      {/* earphone title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}>EARPHONES</Text>
      </View>
      {/* Earphone Details */}
      <EarphonesDetails />
      {/* headphone slider  */}
      <HeadphoneSlider />
      {/* CUSTOMER REVIEWS */}
      <CustomerReview />

      {/* Next Section */}
      <Image
        source={require("./../assets/images/headphone/9.webp")}
        style={{ height: 370, width: 370, marginBottom: 5, marginLeft: 12 }}
      />
      <View>
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: 14,
          }}
        >
          Superior design and craftmanship
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 22,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            fontWeight: "500",
            color: "gray",
            margin: 8,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          Brilliant sound and design motivate everything we do. We have a deep
          passion for building beautifully crafted, technically sophisticated
          sound tools. Only the finest materials support comfort, aesthetics,
          and functionality. Designing the ultimate sound experience, while
          delivering best-in-class performance at every touch point.
        </Text>
      </View>
      {/* Know More Button */}
      <TouchableOpacity
        style={{
          paddingVertical: 18,
          paddingHorizontal: 15,
          marginTop: 5,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 34,
          width: 200,
          backgroundColor: "#282828",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          KNOW MORE
        </Text>
      </TouchableOpacity>
      {/* Accessories title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}>ACCESSORIES</Text>
      </View>
      {/* Accessories Details */}
      <AccessoriesDetails />

      {/* Speaker title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}> SPEAKER </Text>
      </View>
      {/* Speaker Details */}
      <SpeakerDetails />

      {/* Mini Home Theater Title */}
      <View style={styles.titlecontainer}>
        <Text style={styles.titlecategory}>MINI HOME THEATER </Text>
      </View>
      {/* Mini Home Theater Details */}
      <MiniHomeTheaterDetails />
      {/* Next Part */}
      <ThreeSection />
      {/* sign up section */}
      <SignUpSection />
      {/* InfoSection */}
      <InfoSection />

      {/* Modal for Menu */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Menu</Text>
            <ScrollView>
              <TouchableOpacity onPress={() => alert("Wishlist clicked!")}>
                <Text style={styles.menuItem}>Wishlist</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Account clicked!")}>
                <Text style={styles.menuItem}>Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Privacy Policy clicked!")}
              >
                <Text style={styles.menuItem}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Refund Policy clicked!")}>
                <Text style={styles.menuItem}>Refund Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Terms & Conditions clicked!")}
              >
                <Text style={styles.menuItem}>Terms & Conditions</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.divider} />
            <View style={styles.socialIconsContainer}>
              <Ionicons name="logo-instagram" size={28} color="black" />
              <SimpleLineIcons name="social-linkedin" size={28} color="black" />
              <Feather name="youtube" size={28} color="black" />
              <Feather name="twitter" size={28} color="black" />
              <SimpleLineIcons name="social-facebook" size={28} color="black" />
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Flash Sale Section
  flashSaleContainer: {
    backgroundColor: "#1A181E",
    paddingVertical: 20,
    alignItems: "center",
  },
  flashSaleText: {
    fontSize: 16,
    color: "#fff",
  },

  // Header Section
  headerContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: "white", // Ensure background color is white or any solid color
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    zIndex: 1000, //
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 5,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Image Slider
  sliderContainer: {
    marginVertical: 5,
  },
  sliderImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  menuContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 15,
    width: "100%",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#1A181E",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  // Search Bar
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  // next section
  container1: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  box: {
    width: 250,
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  // title
  titlecontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  titlecategory: {
    fontSize: 26,
    fontWeight: "bold",
    alignItems: "center",
    color: "#000",
  },

  // images
  mainImgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 370,
    height: 370,
    marginTop: 25,
  },
  text: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },

  // 4 images
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  itemWrapper: {
    width: "40%",
    alignItems: "center",
    padding: 5,
    margin: 5,
    backgroundColor: "#DDDDDD",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  four_image: {
    width: 140,
    height: 160,
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 5,
    marginTop: 5,
  },
  imageeeContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  txt1: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "gray",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
});
