import React from 'react'
import { View, StyleSheet, ScrollView} from 'react-native';
import InputLabel from '../atoms/inputLabel';
import { movieFormTypes } from '../../types/movieTypes';
import Typography from '../atoms/Typography';
import ButtonPrimary from '../atoms/buttonPrimary';

interface FormNewMovieProps {
        movie: movieFormTypes;
        setMovieData: (movie: movieFormTypes) => void;
        onCreateMovie: () => void;
}

const FormNewMovie = ({ movie, setMovieData, onCreateMovie }:FormNewMovieProps) => {
  return (
    <>
    <Typography customedStyles={{ textAlign: "center" }} variant="title">
     New Movie
   </Typography>
   <ScrollView
     showsVerticalScrollIndicator={false}
     style={{ width: "100%" }}
   >
     <View style={styles.formContainer}>
       <InputLabel
         label="Title"
         placeholder="Enter movie title"
         value={movie.title}
         setValue={(text: string) => setMovieData({ ...movie, title: text })}
       />
       <InputLabel
         label="Description"
         placeholder="Enter movie description"
         value={movie.description}
         setValue={(text: string) =>
             setMovieData({ ...movie, description: text })
         }
         maxLength={150}
       />
       <InputLabel
         label="Year"
         placeholder="Enter movie year"
         keyboardType="numeric"
         value={movie.year}
         setValue={(text: string) => setMovieData({ ...movie, year: text })}
         maxLength={4}
       />
       <InputLabel
         label="Rating"
         placeholder="Enter movie rating 0 to 5"
         keyboardType="numeric"
         value={movie.rating}
         setValue={(text: string) =>
             setMovieData({ ...movie, rating: text })
         }
         maxLength={1}
       />
       <InputLabel
         label="Image"
         placeholder="Enter movie image"
         value={movie.image}
         setValue={(text: string) => setMovieData({ ...movie, image: text })}
       />
       <ButtonPrimary title="Save" onPress={() => onCreateMovie()} />
     </View>
   </ScrollView>
 </>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 8,
        width: "100%"
      },
});

export default FormNewMovie;