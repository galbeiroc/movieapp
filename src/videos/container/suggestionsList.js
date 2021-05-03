import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';

function SuggestionsList() {
  const list = [
    {
      key: '01',
      title: 'Avengers'
    },
    {
      key: '02',
      title: 'Batman'
    }
  ];

  function renderItem({ item }) {
    return <Suggestion {...item} />
  };

  function renderEmpty() {
    return <Empty text="There is not suggestions :(" />
  };

  function itemSeparator() {
    return <Separator />
  };

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
)
}

export default SuggestionsList;
