import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { EventCardMinimised } from '../../components/Card';

export default function EventBanner(props) {
  const { event } = props;
  if (!event) {
    return null;
  }

  const eventStartTime = event.startTime;
  let isLive = false;
  if (moment().isSameOrAfter(moment(eventStartTime))) {
    isLive = true;
  }

  return (
    <EventCardMinimised
      title={event.content.name}
      city={event.content.city}
      localTime={event.localTime}
      timestampStr={event.startTime}
      showCountdown={!isLive}
    />
  );
}

EventBanner.propTypes = {
  event: PropTypes.shape({}),
};

EventBanner.defaultProps = {
  event: null,
};
