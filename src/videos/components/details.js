import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function Details(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    textAlign: 'justify',
    flex: 1,
    marginLeft: 10
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 15,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 10,
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Details;
