import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Home from './screens/container/home';
import Header from './sections/components/header';
import CategoriesList from './videos/container/categoriesList';
import SuggestionsList from './videos/container/suggestionsList';
import Search from './sections/container/search';
import Movie from './screens/container/movie';

import API from '../utils/api';
import { setCategory, setSuggestion } from './redux/actions/actions';

function AppLayout(props) {
  async function getData() {
    const categoryList = await API.getMovies();
    props.dispatch(setCategory(categoryList))

    const suggestionList = await API.getSuggestions(10);
    props.dispatch(setSuggestion(suggestionList));
  }

  useEffect(() => {
    getData();
  }, []);

  if (props.movie) return <Movie />;

  return (
    <Home>
      <Header />
      <Search />
      <CategoriesList />
      <SuggestionsList />
    </Home>
  );
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
  }
}

export default connect(mapStateToProps)(AppLayout);