import React from 'react';
import { FlatList, Text } from 'react-native';

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
    <FlatList
      data={list}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  )
}

export default SuggestionsList
