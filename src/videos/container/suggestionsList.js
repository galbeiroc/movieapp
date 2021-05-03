import React from 'react';
import { FlatList, Text } from 'react-native';

import Layout from '../components/suggestionListLayout';

function SuggestionsList() {
  const list = [
    {
      key: '01',
      title: 'Albeiro'
    },
    {
      key: '02',
      title: 'Crespo'
    }
  ]
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </Layout>
)
}

export default SuggestionsList;
