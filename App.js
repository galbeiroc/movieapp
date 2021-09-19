import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import AppLayout from './src/appLayout';
import Loading from './src/sections/components/loading';

import configureStore from './src/redux/store';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider
      store={store}
    >
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <AppLayout />
      </PersistGate>
    </Provider>
  );
}

export default App;
