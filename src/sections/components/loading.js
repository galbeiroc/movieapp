import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'

function Loading(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/movie-logo.png')}
        style={styles.logo}
      />
      <ActivityIndicator color='green' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
})

export default Loading;
