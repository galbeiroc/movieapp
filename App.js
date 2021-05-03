import React, { useEffect, useState} from 'react';
import { Text } from 'react-native';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';

import API from './utils/api'

function App() {
  const [suggestionList, setSuggestionList] = useState([]);

  async function getData() {
    const movies = await API.getSuggestions(10);
    setSuggestionList(movies);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionsList list={suggestionList} />
    </Home>
  )
};

export default App;
