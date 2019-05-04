import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.styles';
import Header from '../../components/Header';
import { FeedItem, FeedSeparator } from './FeedItems';
import EventItem from './EventItem';
import EventBanner from './EventBanner';
import { SectionSpinner } from '../../components/Spinner';
import {
  fetchFeed,
  fetchUpcomingEvent,
  selectFeed,
  selectUpcomingEvent,
} from '../../state';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.headerTopOffset = 200;
    this.state = {
      showEventBanner: false,
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    const { dispatch } = this.props;
    dispatch(fetchFeed());
    dispatch(fetchUpcomingEvent());
  }

  renderUpcomingEvent = () => {
    const {
      eventError,
      isEventLoading,
      upcomingEvent,
    } = this.props;

    return (
      <EventItem
        eventError={eventError}
        isEventLoading={isEventLoading}
        upcomingEvent={upcomingEvent}
      />
    );
  }

  updateHeaderState = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const { showEventBanner } = this.state;

    if (yOffset > this.headerTopOffset && !showEventBanner) {
      this.setState({
        showEventBanner: true,
      });
    } else if (yOffset < this.headerTopOffset - 10 && showEventBanner) {
      this.setState({
        showEventBanner: false,
      });
    }
  }

  renderEventBanner() {
    const { showEventBanner } = this.state;
    if (!showEventBanner) {
      return null;
    }

    const { upcomingEvent } = this.props;
    return (
      <EventBanner
        event={upcomingEvent}
      />
    );
  }

  renderFeed() {
    const {
      feedError,
      feedItems,
      isEventLoading,
      isFeedLoading,
    } = this.props;
    const isLoading = isFeedLoading || isEventLoading;

    if (feedError) {
      return (
        <View style={styles.errorView}>
          <Text>Unable to load feed, please try again later.</Text>
        </View>
      );
    }

    if (isLoading) {
      return (
        <View style={styles.loadingView}>
          <SectionSpinner size="large" visible />
        </View>
      );
    }

    return (
      <FlatList
        data={feedItems}
        style={styles.container}
        contentContainerStyle={styles.feed}
        // bounces={false}
        renderItem={FeedItem}
        ListHeaderComponent={this.renderUpcomingEvent}
        ItemSeparatorComponent={FeedSeparator}
        keyExtractor={item => (item ? item.id : 'key')}
        onRefresh={this.refreshData}
        progressViewOffset={80}
        refreshing={isLoading}
        onScroll={this.updateHeaderState}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header />
        {this.renderEventBanner()}
        {this.renderFeed()}
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  feedError: PropTypes.shape({}),
  eventError: PropTypes.shape({}),
  upcomingEvent: PropTypes.shape({}),
  feedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFeedLoading: PropTypes.bool.isRequired,
  isEventLoading: PropTypes.bool.isRequired,
};

HomeScreen.defaultProps = {
  feedError: null,
  eventError: null,
  upcomingEvent: null,
};

function mapStateToProps(state) {
  const {
    isLoading: isFeedLoading,
    error,
    list,
  } = selectFeed(state);
  const {
    isLoading: isEventLoading,
    error: eventError,
    data: eventData,
  } = selectUpcomingEvent(state);

  return {
    eventError,
    isFeedLoading,
    isEventLoading,
    feedError: error,
    feedItems: list,
    upcomingEvent: eventData,
  };
}
export default connect(mapStateToProps)(HomeScreen);
