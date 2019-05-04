import React, { Component } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.styles';
import { EventCard } from '../../components/Card';
import {
  fetchFeed,
  fetchUpcomingEvent,
  selectFeed,
  selectUpcomingEvent,
} from '../../state';

export class HomeScreen extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeed());
    dispatch(fetchUpcomingEvent());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <EventCard
          imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
        />
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    feedItems: selectFeed(state),
    upcomingEvent: selectUpcomingEvent(state),
  };
}
export default connect(mapStateToProps)(HomeScreen);
