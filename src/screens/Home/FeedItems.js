import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { ArticleCard, VideoCard } from '../../components/Card';
import Logger from '../../lib/logger';

let styles;

export function FeedSeparator() {
  return (
    <View style={styles.feedSeparator} />
  );
}

export function FeedItem({ item }) {
  if (!item) {
    return null;
  }

  if (item.type === 'YOUTUBE') {
    return (
      <VideoCard
        key={item.id}
        titleText={item.data.title}
        imgUri={item.data.featured_image.url}
        descriptionText={item.data.description}
        timestampStr={item.data.published_date}
      />
    );
  }

  if (item.type === 'ARTICLE') {
    return (
      <ArticleCard
        key={item.id}
        titleText={item.data.title}
        imgUri={item.data.featured_image.url}
        descriptionText={unescape(item.data.description)}
        timestampStr={item.data.published_date}
      />
    );
  }

  Logger.info('Unknown feed item type');
  return null;
}

FeedItem.propTypes = {
  item: PropTypes.shape({}),
};
FeedItem.defaultProps = {
  item: null,
};

styles = StyleSheet.create({
  feedSeparator: {
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 10,
  },
});
