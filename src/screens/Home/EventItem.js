import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FeedSeparator } from './FeedItems';
import { EventCard } from '../../components/Card';

export default function EventItem(props) {
  const {
    eventError,
    isEventLoading,
    upcomingEvent,
  } = props;

  if (eventError) {
    return <FeedSeparator />;
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

  return (
    <EventCard
      imgUri={imgUri}
      timestampStr={upcomingEvent.startTime}
      showCountdown={!isLive}
    />
  );
}

EventItem.propTypes = {
  eventError: PropTypes.shape({}),
  upcomingEvent: PropTypes.shape({}),
  isEventLoading: PropTypes.bool.isRequired,
};

EventItem.defaultProps = {
  eventError: null,
  upcomingEvent: null,
};
