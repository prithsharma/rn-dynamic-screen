import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {
  ArticleCard,
  EventCard,
  VideoCard,
} from './index';

storiesOf('Card', module)
  .add('Event', () => (
    <EventCard
      imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
      showCountdown={false}
      timestampStr="2019-05-10T11:30:00+00:00"
    />
  ))
  .add('Video', () => (
    <VideoCard
      titleText="Regian Eersel's game"
      imgUri="https://i.ytimg.com/vi/OeEIn72jEqg/maxresdefault.jpg"
      descriptionText="Regian Eersel's game"
      timestampStr="2019-05-10T11:30:00+00:00"
    />
  ))
  .add('Article', () => (
    <ArticleCard
      titleText="Regian Eersel's game"
      imgUri="https://facebook.github.io/react-native/docs/assets/favicon.png"
      descriptionText="Regian Eersel was destined for a career in sports, receiving his first"
      timestampStr="2019-05-10T11:30:00+00:00"
    />
  ));
