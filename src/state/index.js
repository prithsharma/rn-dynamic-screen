import upcomingEventReducer from './upcomingEvent';
import feedReducer from './feed';

export default {
  upcoming: upcomingEventReducer,
  feed: feedReducer,
};

export * from './feed';
