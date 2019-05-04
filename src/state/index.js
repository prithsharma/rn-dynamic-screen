import upcomingEventReducer from './upcomingEvent';
import feedReducer from './feed';

export default {
  upcomingEvent: upcomingEventReducer,
  feed: feedReducer,
};

export * from './feed';
export * from './upcomingEvent';
