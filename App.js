import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';
import CategoriesList from './src/videos/container/categoriesList';
import Player from './src/videos/container/player';

import store from './src/redux/store';

import API from './utils/api';

function App() {
  const [suggestionList, setSuggestionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  async function getData() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    setSuggestionList(movies);
    setCategoryList(categories);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider
      store={store}
    >
      <Home>
        <Header />
        <View 
          style={{
            flex: 1,
            height: 100
          }}
        >
        <Player />
        </View>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoriesList list={categoryList} />
        <SuggestionsList list={suggestionList} />
      </Home>
    </Provider>
  );
}

export default App;
