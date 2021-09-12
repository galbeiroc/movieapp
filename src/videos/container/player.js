import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layoutPlayer';

function Player() {
  const [loading, setLoading] = useState(true);

  const onBuffer = ({ isBuferring }) => {
    setLoading(isBuferring);
  };
  const onLoad = () => {
    setLoading(false);
  }

  return (
    <Layout
      loading={loading}
      video= {
        <Video
          source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
          style={styles.video}
          resizeMode='contain'
          onBuffer={onBuffer}
          onLoad={onLoad}
        />
      }
      loader= {
        <ActivityIndicator color='green' />
      }
    />
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