import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Close(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.btnContainer}
    >
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  button: {
    fontWeight: 'bold',
    color: 'white'
  }
})
export default Close;
