import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { movieTypes } from "../../types/movieTypes";
import Typography from "../atoms/Typography";
import { screenHeight, screenWidth } from "../../utils/constants";
import { mainColors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routers/routeMain";

interface MovieItemProps {
  item: movieTypes;
}
type MoviesScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "MovieDetails"
>;

const MovieItem = ({ item }: MovieItemProps) => {
  const navigation = useNavigation<MoviesScreenProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieDetails", { item })}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.imagePoster}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Typography variant="title" color="white">
            {item.title}
          </Typography>
          <Typography variant="subtitle" color="white">
            {item.year}
          </Typography>
          <Typography variant="paragraph" color="white">
            {item.description}
          </Typography>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagePoster: {
    width: screenWidth / 1.1,
    height: screenHeight / 2,
    borderRadius: 8
  },
  content: {
    padding: 16,
    height: screenHeight / 6,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopColor: mainColors.primary,
    borderTopWidth: 2
  }
});

export default MovieItem;
