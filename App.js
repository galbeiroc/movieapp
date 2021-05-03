import React from 'react';
import { Text } from 'react-native';

import Home from './src/screens/container/home';
import Header from './src/sections/components/header';

function App() {
  return (
    <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  )
};

export default App;
