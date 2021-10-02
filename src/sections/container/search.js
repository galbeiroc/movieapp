import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function Search() {
  const [text, setText] = useState('');
  function onSubmit() {
    console.log('onSubmit');
  }

  function onChange(text) {
    setText(text);
  }

  return (
    <TextInput
      placeholder='Search movie'
      underlineColorAndroid="transparent"
      onSubmitEditing={onSubmit}
      onChangeText={onChange}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
});

export default Search;
