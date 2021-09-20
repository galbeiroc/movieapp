import React from 'react';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../../redux/actions/actions';

import Close from '../../sections/components/close';
import Header from '../../sections/components/header';
import Details from '../../videos/components/details';
import Player from '../../videos/container/player';
import Layout from '../components/movieLayout';

function Movie(props) {
  function closeVideo() {
    props.dispatch(setSelectedMovie(null))
  };

  return (
    <Layout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
      <Details {...props.movie} />
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
  }
};

export default connect(mapStateToProps)(Movie);
