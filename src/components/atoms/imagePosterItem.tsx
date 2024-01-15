import React from 'react'
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { screenWidth } from '../../utils/constants';

interface ImagePosterItemProps {
  image: string;
  onSelected: (image : string) => void; 
}

const ImagePosterItem = ({image,onSelected  }:ImagePosterItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => onSelected(image)}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
 image: {
    width: screenWidth/2.2,
    height: screenWidth/1.5,
    margin: 8,
    borderRadius: 5,
  },
});

export default ImagePosterItem;