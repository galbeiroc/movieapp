import React from 'react';
import { FlatList } from 'react-native';

import Layout from '../components/categoryListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontalSeparator';
import Category from '../components/category';

import { connect } from 'react-redux';

function CategoriesList({list}) {
  function renderItem({item}) {
    return <Category {...item} />;
  }

  const keyExtractor = item => item.id.toString();

  function renderEmpty() {
    return <Empty text="There is not Categories :(" />;
  }

  function itemSeparator() {
    return <Separator />;
  }

  return (
    <Layout title="Categories">
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
}

function mapStateToProps(state) {
  debugger
}

export default connect(mapStateToProps)(CategoriesList);
