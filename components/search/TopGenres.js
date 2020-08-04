import React from 'react';

import CardList from '../shared/CardList';

export default function TopGenres({ genres, onGenreSelected }) {
  return (
    <CardList
      title="Your top genres"
      items={genres}
      onItemSelected={onGenreSelected}
    />
  );
}
