import React, { useEffect, useState} from 'react';
import { Text } from 'react-native';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';
import CategoriesList from './src/videos/container/categoriesList';

import API from './utils/api'

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
    <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <CategoriesList list={categoryList} />
      <SuggestionsList list={suggestionList} />
    </Home>
  )
};

export default App;
