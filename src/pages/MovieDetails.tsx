import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { mainColors } from "../utils/colors";
import { movieTypes } from "../types/movieTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import Typography from "../components/atoms/Typography";
import { screenHeight } from "../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import Rating from "../components/molecules/rating";
import { BtnIcon } from "../components/atoms/btnIcon";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routers/routeMain";

type MoviesScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "MovieDetails"
>;

const MovieDetails = () => {
  const route = useRoute() as any;
  const item: movieTypes = route.params.item;
  const navigation = useNavigation<MoviesScreenProp>();
  return (
    <View style={styles.container}>
      <BtnIcon
        containerStyle={styles.btnBack}
        iconName="arrow-left"
        onPress={() => navigation.goBack()}
      />
      <Image
        source={{ uri: item.image }}
        style={styles.imagePoster}
        resizeMode="cover"
      />

      <LinearGradient
        colors={[
          "rgba(0,0,0,1)",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0)"
        ]}
        style={styles.content}
        end={{ x: 0.1, y: 0 }}
        start={{ x: 0.1, y: 0.4 }}
      >
        <Typography variant="paragraph" color="white">
          {`año ${item.year}`}
        </Typography>
        <Typography
          customedStyles={styles.title}
          variant="superTitle"
          color="white"
        >
          {item.title}
        </Typography>
        <Rating rating={parseInt(item.rating)} />
        <Typography
          numberOfLines={10}
          customedStyles={styles.description}
          variant="subtitle"
          color="white"
        >
          {item.description}
        </Typography>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: mainColors.background,
    position: "relative"
  },
  imagePoster: {
    width: "100%",
    height: screenHeight / 1.5,
    borderRadius: 8
  },
  title: {
    borderRadius: 8,
    width: "100%"
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
    position: "relative",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "flex-start",
    marginTop: -screenHeight / 4,
    paddingTop: screenHeight / 8,
    flex: 1
  },
  description: {
    marginTop: 16,
    flex: 1,
    textAlign: "justify",
    lineHeight: 20
  },
  btnBack: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1
  }
});

export default MovieDetails;
