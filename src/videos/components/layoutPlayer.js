import React from 'react';
import { View, StyleSheet } from 'react-native'

function LayoutVideo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      {props.loading && props.loader}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '28.25%'
  },
  video: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'black'
  }
});

export default LayoutVideo;