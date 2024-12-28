import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  { id: 1, src: require("./../assets/images/headphone/s1.webp") },
  { id: 2, src: require("./../assets/images/headphone/s2.webp") },
  { id: 3, src: require("./../assets/images/headphone/s3.webp") },
  { id: 4, src: require("./../assets/images/headphone/s4.webp") },
  { id: 5, src: require("./../assets/images/headphone/s5.webp") },
  { id: 6, src: require("./../assets/images/headphone/s6.webp") },
];

export default function HeadphoneSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleDotPress = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index });
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.image} />
        )}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>

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
          MG20 Gaming (Galactic White)
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
          These headphones are not only amazing for the design and features, but
          also for the audio quality. They are comfortable and lightweight for
          hours of listening pleasure. MG20 headphones are also water-resistant,
          so you can play your music with less worry about water damage.
        </Text>
      </View>

      {/* 2 button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.knowMoreButton}>
          <Text style={styles.knowMoreText}>Know More</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width,
    height: 350,
    resizeMode: "contain",
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
    position: "relative",
    bottom: 15,
    left: 5,
    right: 0,
    top: 0,
    marginBottom: 10,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  //  2 button
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  knowMoreButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  knowMoreText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  cartButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    marginLeft: 10,
    backgroundColor: "#282828",
  },
  cartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
