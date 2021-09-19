import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/verticalSeparator';
import Suggestion from '../components/suggestion';

function SuggestionsList({list}) {
  function renderItem({ item }) {
    return <Suggestion {...item} />
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
