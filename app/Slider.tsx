import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", image: require("./../assets/images/slider1.webp") },
  { id: "2", image: require("./../assets/images/slider2.webp") },
  { id: "3", image: require("./../assets/images/slider3.webp") },
  { id: "4", image: require("./../assets/images/slider4.webp") },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.dots}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? "white" : "gray" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    color: "#333",
    position:'absolute',
    bottom:10,
    left:20,
    right:20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    
  },
});
