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
      title={upcomingEvent.content.name}
      city={upcomingEvent.content.city}
      localTime={upcomingEvent.localTime}
      imgUri={imgUri}
      timestampStr={upcomingEvent.startTime}
      showCountdown={!isLive}
    />
  );
}

EventItem.propTypes = {
  eventError: PropTypes.oneOf(null, PropTypes.object),
  upcomingEvent: PropTypes.oneOf(null, PropTypes.object),
  isEventLoading: PropTypes.bool.isRequired,
};

EventItem.defaultProps = {
  eventError: null,
  upcomingEvent: null,
};
