import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/container/home';
import Header from './sections/components/header';
import CategoriesList from './videos/container/categoriesList';
import Player from './videos/container/player';
import SuggestionsList from './videos/container/suggestionsList';

import API from '../utils/api';
import { setCategory, setSuggestion } from './redux/actions/actions';

function AppLayout(props) {
  async function getData() {
    const categoryList = await API.getMovies();
    props.dispatch(setCategory(categoryList))

    const suggestionList = await API.getSuggestions(10);
    props.dispatch(setSuggestion(suggestionList));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Home>
      <Header />
      <Player />
      <Text>Buscador</Text>
      <CategoriesList />
      <SuggestionsList />
    </Home>
  );
}

export default connect(null)(AppLayout);