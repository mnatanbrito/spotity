import React from 'react';

import CardList from '../shared/CardList';

export default function PopularPodcasts({ podcasts, onPodcastSelected }) {
  return (
    <CardList
      title="Popular podcast categories"
      items={podcasts}
      onItemSelected={onPodcastSelected}
    />
  );
}
