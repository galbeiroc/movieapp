import React from 'react';
import Header from '../../sections/components/header';

import Player from '../../videos/container/player';
import Layout from '../components/movieLayout';

function Movie() {
  return (
    <Layout>
      <Header />
      <Player />
    </Layout>
  )
}

export default Movie;
