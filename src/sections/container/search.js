import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';
import { setSelectedMovie } from '../../redux/actions/actions';

function Search(props) {
  const [text, setText] = useState('');
  async function onSubmit() {
    const movie = await API.searchMovie(text);
    props.dispatch(setSelectedMovie(movie[0]));
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

export default connect(null)(Search);
