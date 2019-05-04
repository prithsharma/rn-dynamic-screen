import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
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

    if (eventError) {
      return this.constructor.renderFeedSeparator();
    }

    if (isEventLoading || !upcomingEvent) {
      return null;
    }

    const eventStartTime = upcomingEvent.startTime;
    let imgUri = upcomingEvent.creatives.bannerUpcoming.url;
    let isLive = false;
    if (moment().isSameOrAfter(moment(eventStartTime))) {
      imgUri = upcomingEvent.creatives.bannerLive.url;
      isLive = true;
    }
    const cardProps = {
      title: upcomingEvent.content.name,
      city: upcomingEvent.content.city,
      localTime: upcomingEvent.localTime,
      imgUri,
      timestampStr: upcomingEvent.startTime,
      showCountdown: !isLive,
    };
    return (
      <EventCard
        {...cardProps}
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
    } else if (yOffset < this.headerTopOffset - 30 && showEventBanner) {
      this.setState({
        showEventBanner: false,
      });
    }
  }

  renderEventBanner() {
    const { upcomingEvent } = this.props;
    if (!upcomingEvent) {
      return null;
    }

    const cardProps = {
      title: upcomingEvent.content.name,
      city: upcomingEvent.content.city,
      localTime: upcomingEvent.localTime,
      timestampStr: upcomingEvent.startTime,
      showCountdown: true,
    };

    return this.state.showEventBanner && (
      <EventCard
        {...cardProps}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        minimised
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
        renderItem={this.constructor.renderFeedItem}
        ListHeaderComponent={this.renderUpcomingEvent}
        ItemSeparatorComponent={this.constructor.renderFeedSeparator}
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
  feedError: PropTypes.oneOf(null, PropTypes.object),
  eventError: PropTypes.oneOf(null, PropTypes.object),
  upcomingEvent: PropTypes.oneOf(null, PropTypes.object),
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
