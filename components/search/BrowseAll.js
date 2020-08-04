import React from 'react';

import CardList from '../shared/CardList';

export default function BrowseAll({ items, onItemSelected }) {
  return (
    <CardList
      title="Browse all"
      items={items}
      onItemSelected={onItemSelected}
    />
  );
}
