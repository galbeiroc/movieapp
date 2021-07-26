import React from 'react';
import { StyleSheet, View } from 'react-native';

function HorizontalSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default HorizontalSeparator;
