import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/container/suggestionsList';
import CategoriesList from './src/videos/container/categoriesList';
import Player from './src/videos/container/player';
import Loading from './src/sections/components/loading';

import configureStore from './src/redux/store';
import { setCategory, setSuggestion } from './src/redux/actions/actions'

const { store, persistor } = configureStore();

import API from './utils/api';

function App() {
  async function getData() {
    const categoryList = await API.getMovies();
    store.dispatch(setCategory(categoryList))

    const suggestionList = await API.getSuggestions(10);
    store.dispatch(setSuggestion(suggestionList));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider
      store={store}
    >
      <PersistGate loading={<Loading />} persistor={persistor}>
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
          <CategoriesList />
          <SuggestionsList />
        </Home>
      </PersistGate>
    </Provider>
  );
}

export default App;
