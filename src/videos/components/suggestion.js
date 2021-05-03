import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image 
          style={styles.cover}
          source={require('../../../assets/movie-logo.png')}
        />
        <View style={styles.genreContent}>
          <Text style={styles.genreText}>Action</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.rating}>5 Stars</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  cover: {
    height: 100,
    width: 110,
    resizeMode: 'contain',
    marginTop: 15,
  },
  genreContent: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,

  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingHorizontal: 6,
    paddingVertical: 4,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  }
})
export default Suggestion;
