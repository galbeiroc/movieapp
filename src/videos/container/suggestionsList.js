import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/verticalSeparator';
import Suggestion from '../components/suggestion';

import { setSelectedMovie } from '../../redux/actions/actions';

function SuggestionsList({ list, dispatch }) {
  const viewMovie = (item) => {
    console.log(item);
    dispatch(setSelectedMovie(item))
  };

  function renderItem({ item }) {
    return <Suggestion {...item} onPress={() => viewMovie(item)} />
  };

  const keyExtractor = item => item.id.toString();

  function renderEmpty() {
    return <Empty text="There is not suggestions :(" />
  };

  function itemSeparator() {
    return <Separator />
  };

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
)
}

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionsList);
