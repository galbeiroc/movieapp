import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';
import CategoriesList from './src/videos/container/categoriesList';

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
    <Home>
      <Header />
      <View 
        style={{
          flex: 1,
          height: 100
        }}
      >
        <Video 
          source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right:0,
            top: 0
          }}
          resizeMode='contain'
        />
      </View>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <CategoriesList list={categoryList} />
      <SuggestionsList list={suggestionList} />
    </Home>
  );
}

export default App;
