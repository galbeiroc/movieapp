import React from 'react';
import { FlatList } from 'react-native';

import Layout from '../components/categoryListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontalSeparator';
import Suggestion from '../components/suggestion';

function CategoriesList({ list }) {
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
    <Layout title="Sugerencias">
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
      />
    </Layout>
  )
}

export default CategoriesList;
