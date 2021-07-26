import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

function Category(props) {
  console.log(props.genres[0])
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: props.background_image
      }}
    >
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 240,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
});

export default Category;
