import React, { useState } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

import ControlLayout from '../components/controlLayout';
import Layout from '../components/layoutPlayer';
import PlayPause from '../components/playPause';

function Player() {
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  const onBuffer = ({ isBuferring }) => {
    setLoading(isBuferring);
  };

  const onLoad = () => {
    setLoading(false);
  }

  const playPause = () => {
    setPaused(!paused);
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
          paused={paused}
        />
      }
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} paused={paused} />
          <Text>progress bar | </Text>
          <Text>time left | </Text>
          <Text>fullscreen</Text>
        </ControlLayout>
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