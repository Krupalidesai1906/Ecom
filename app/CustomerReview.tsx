import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";

const reviews = [
  {
    id: "1",
    name: "Oliver Brown",
    image: require("./../assets/images/cr1.webp"),
    stars: 5,
    review:
      "SSP is a pair of highly versatile IEMs – they can handle multiple genres of music while presenting an accurate and clean sound. They are now my default recommendation, even to non-audiophile friends who want a good pair of earphones.",
  },
  {
    id: "2",
    name: "Sofia Rodriguez",
    image: require("./../assets/images/cr2.webp"),
    stars: 5,
    review:
      "I have tried many similar products in the past, but none have compared to the quality and effectiveness of this one. I have recommended it to all of my friends and family, and they have all had the same positive experience. I am so happy to have found a product that I can trust and rely on.",
  },
  {
    id: "3",
    name: "Jenny Smith",
    image: require("./../assets/images/cr3.webp"),
    stars: 5,
    review:
      "Very comfortable considering my smaller ears, even though I'm using a size bigger eartips for a good sealing fit. Sound is amazing, clear vocals, soundstage is precise. Hi-hats are not the best, but considering these being TWS, they do well. Design and build are great, very lightweight.",
  },
];

export default function CustomerReview() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % reviews.length;
      flatListRef.current.scrollToIndex({ index, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (stars) => {
    return Array(stars)
      .fill(0)
      .map((_, index) => (
        <Text key={index} style={styles.star}>
          ★
        </Text>
      ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.stars}>{renderStars(item.stars)}</View>
      <Text style={styles.review}>"{item.review}"</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
      <View style={styles.dots}>
        {reviews.map((_, index) => {
          const inputRange = [
            (index - 1) * 350,
            index * 350,
            (index + 1) * 350,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View key={index} style={[styles.dot, { opacity }]} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  card: {
    width: 350,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 90,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  stars: {
    flexDirection: "row",
    marginVertical: 5,
  },
  star: {
    fontSize: 16,
    color: "#FFD700",
  },
  review: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    lineHeight: 25,
    marginTop: 12,
    fontStyle: "italic",
    fontWeight: "500",
  },
  dots: {
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#282828",
    marginHorizontal: 5,
  },
});
