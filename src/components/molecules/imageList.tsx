import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Typography from "../atoms/Typography";
import ImagePosterItem from "../atoms/imagePosterItem";

interface ImageMovieListProps {
  onSelectImage: (image: string) => void;
}

const moviePosterUrls = [
  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/8dTWj3c74RDhXfSUZpuyVNJrgS.jpg",
  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg"
];

const ImageMovieList = ({ onSelectImage }: ImageMovieListProps) => {
  const renderItem = ({ item }: { item: string }) => (
    <ImagePosterItem onSelected={onSelectImage} image={item} />
  );

  return (
    <View style={styles.container}>
      <Typography variant="title" color="white">
        Select some image
      </Typography>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={moviePosterUrls}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    alignItems: "center"
  },
  list: {
    marginTop: 20,
    width: "100%"
  }
});

export default ImageMovieList;
