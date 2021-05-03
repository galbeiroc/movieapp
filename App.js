import React, {useEffect} from 'react';
import { Text } from 'react-native';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';

import API from './utils/api'

function App() {
  useEffect(() => {
    API.getSuggestions(10);
  }, [])
  return (
    <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionsList />
    </Home>
  )
};

export default App;
