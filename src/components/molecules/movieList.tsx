import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator
} from "react-native";
import { getMovies } from "../../api/movies";
import { movieTypes } from "../../types/movieTypes";
import MovieItem from "./movieItem";
import Typography from "../atoms/Typography";
import { mainColors } from "../../utils/colors";
import FooterFloat from "./footerFloat";
import ModalNewMovie from "./modalNewMovie";

interface MovieListProps {
  searchQuery: string;
}

const MovieList = ({ searchQuery }: MovieListProps) => {
  const [moviesList, setMoviesList] = useState<movieTypes[]>([]);
  const [moviesFilterList, setMoviesFilterList] = useState<movieTypes[]>([]);
  const [fetching, setFetching] = useState(false);
  const [showNewMovieModal, setShowNewMovieModal] = useState(false);

  const fetchMovies = async () => {
    setFetching(true);
    const response = await getMovies();
    if (response) {
      setMoviesList(response.moviesList);
      setMoviesFilterList(response.moviesList);
    } else {
      Alert.alert("Error", "Something went wrong");
    }
    setFetching(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredMovies = moviesList.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setMoviesFilterList(filteredMovies);
    } else {
      setMoviesFilterList(moviesList);
    }
  }, [searchQuery]);

  const renderItem = ({ item }: { item: movieTypes }) => (
    <MovieItem item={item} />
  );
  if (fetching)
    return <ActivityIndicator size="large" color={mainColors.primary} />;
  return (
    <View style={styles.container}>
      <Typography variant="title" color="white">
        {searchQuery ? `Search result for "${searchQuery}"` : "All Movies"}
      </Typography>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={moviesFilterList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />

      <FooterFloat btnAddOnPress={() => setShowNewMovieModal(true)} />
      <ModalNewMovie
        isOpen={showNewMovieModal}
        onClose={() => setShowNewMovieModal(false)}
        onRefresh={() => fetchMovies()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16
  },
  list: {
    marginTop: 20,
    width: "100%"
  }
});

export default MovieList;
