import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layoutPlayer';

function Player() {
  return (
    <Layout video= {
      <Video
        source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
        style={styles.video}
        resizeMode='contain'
      />
    } />
  );
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
    top: 0
  }
})

export default Player;