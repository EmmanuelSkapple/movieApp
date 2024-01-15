import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, ScrollView, Alert } from "react-native";
import { mainColors } from "../../utils/colors";
import { screenHeight } from "../../utils/constants";
import Typography from "../atoms/Typography";
import InputLabel from "../atoms/inputLabel";
import { movieFormTypes } from "../../types/movieTypes";
import ButtonPrimary from "../atoms/buttonPrimary";
import { BtnIcon } from "../atoms/btnIcon";
import ImageMovieList from "./imageList";
import FormNewMovie from "./formNewMovie";
import { createMovie } from "../../api/movies";

interface ModalNewMovieProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

const ModalNewMovie = ({ isOpen, onClose,onRefresh }: ModalNewMovieProps) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: new Date().getFullYear().toString(),
    rating: "",
    image: ""
  } as movieFormTypes);
  const [isImageChooserOpen, setIsImageChooserOpen] = useState(true);

  const addMovie = async () => {
    const response = await createMovie(movie);
    if (response) {
      Alert.alert("Success", "Movie created successfully");
      onRefresh();
      onClose();
    }else{
        Alert.alert("Error", "Something went wrong");
    }
  } 

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <BtnIcon
            containerStyle={styles.btnClose}
            iconName="x"
            onPress={onClose}
          />
          {isImageChooserOpen ? (
            <ImageMovieList
              onSelectImage={(image: string) => {
                setMovie({ ...movie, image });
                setIsImageChooserOpen(false);
              }}
            />
          ) : (
            <FormNewMovie
              movie={movie}
              setMovieData={setMovie}
              onCreateMovie={addMovie}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    backgroundColor: mainColors.background,
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 5,
    width: "100%",
    height: screenHeight / 1.5
  },
  btnClose: {
    position: "absolute",
    top: 8,
    right: 8
  }
});

export default ModalNewMovie;
