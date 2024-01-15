import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface RatingProps {
  maxRating?: number;
  rating: number;
}

const Rating = ({ maxRating = 5, rating }: RatingProps) => {
  return (
    <View style={styles.container}>
      {Array(maxRating)
        .fill(0)
        .map((_, index) => (
          <Icon
            style={{ marginRight: 4 }}
            key={index}
            name={index < rating ? "star" : "staro"}
            size={20}
            color="#F2C94C"
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default Rating;
