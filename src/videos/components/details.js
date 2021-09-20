import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function makeHTML(code) {
  return (`
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `);
}

function Details(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
        <View style={styles.trailer}>
          <WebView
            source={{ html: makeHTML(props.yt_trailer_code) }}
          />
        </View>
      </ScrollView>
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
    marginBottom: 10,
  },
  trailer: {
    height: 200,
    marginBottom: 20,
  }
});

export default Details;
