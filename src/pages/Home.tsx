import React, { FC, useState } from "react";
import { View, StyleSheet } from "react-native";
import { mainColors } from "../utils/colors";
import SearchInput from "../components/molecules/searchInput";
import MovieList from "../components/molecules/movieList";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [querySearch, setQuerySearch] = useState("");
  return (
    <View style={styles.container}>
      <SearchInput value={querySearch} onChangeText={setQuerySearch} />
      <MovieList searchQuery={querySearch} />
   
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: mainColors.background,
    padding: 16,
    position: "relative"
  }
});
