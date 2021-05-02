import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <Image source={require('./assets/movie-logo.png')} style={{ width: 100, height: 100 }} />
          <Text>Hola Mundo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
