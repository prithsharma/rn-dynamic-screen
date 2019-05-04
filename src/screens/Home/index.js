import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.styles';
import Header from '../../components/Header';
import { SectionSpinner } from '../../components/Spinner';
import { ArticleCard, EventCard, VideoCard } from '../../components/Card';
import {
  fetchFeed,
  fetchUpcomingEvent,
  selectFeed,
  selectUpcomingEvent,
} from '../../state';

export class HomeScreen extends Component {
  static renderUpcomingEvent() {
    return (
      <EventCard
        imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
      />
    );
  }

  static renderFeedItem({ item }) {
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

    console.log('Unknown feed item type');
    return null;
  }

  static renderFeedSeparator() {
    return (
      <View style={styles.feedSeparator} />
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeed());
    dispatch(fetchUpcomingEvent());
  }

  render() {
    const { feedItems, isFeedLoading } = this.props;

    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header />
        {
          isFeedLoading
            ? (
              <View style={styles.loadingView}>
                <SectionSpinner size="large" visible />
              </View>
            )
            : (
              <FlatList
                data={feedItems}
                style={styles.container}
                contentContainerStyle={styles.feed}
                // bounces={false}
                renderItem={this.constructor.renderFeedItem}
                ListHeaderComponent={this.constructor.renderUpcomingEvent}
                ItemSeparatorComponent={this.constructor.renderFeedSeparator}
                keyExtractor={item => (item ? item.id : 'key')}
                onRefresh={() => null}
                progressViewOffset={80}
                refreshing={isFeedLoading}
              />
            )
        }
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  feedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFeedLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isFeedLoading: state.feed.isLoading,
    feedItems: selectFeed(state),
    upcomingEvent: selectUpcomingEvent(state),
  };
}
export default connect(mapStateToProps)(HomeScreen);
