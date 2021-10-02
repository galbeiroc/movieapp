import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../../redux/actions/actions';

import Close from '../../sections/components/close';
import Header from '../../sections/components/header';
import Details from '../../videos/components/details';
import Player from '../../videos/container/player';
import Layout from '../components/movieLayout';

function Movie(props) {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  function closeVideo() {
    props.dispatch(setSelectedMovie(null))
  };

  useEffect(() => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
  }, [opacity])

  return (
    <Animated.View style={{
      flex: 1,
      opacity,
    }}>
      <Layout>
        <Header>
          <Close onPress={closeVideo} />
        </Header>
        <Player />
        <Details {...props.movie} />
      </Layout>
    </Animated.View>
  )
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
  }
};

export default connect(mapStateToProps)(Movie);
