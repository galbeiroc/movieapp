import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

function Header(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/movie-logo.png')}
          style={styles.logo}
        />
        <View style={styles.rightHeader}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Header;
