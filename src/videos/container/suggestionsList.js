import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestionListLayout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';

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

  function renderEmpty() {
    return <Empty text="There is not suggestions :(" />
  };

  function itemSeparator() {
    return <Separator />
  }

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </Layout>
)
}

export default SuggestionsList;
