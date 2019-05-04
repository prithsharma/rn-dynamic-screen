import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {
  EventCard,
  VideoCard,
} from './index';

storiesOf('Card', module)
  .add('Event', () => (
    <EventCard
      imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
    />
  ))
  .add('Video', () => (
    <VideoCard
      titleText="Regian Eersel's game"
      imgUri="https://facebook.github.io/react-native/docs/assets/favicon.png"
      descriptionText="Regian Eersel's game"
    />
  ))
  .add('Article', () => (
    <VideoCard
      imgUri="https://facebook.github.io/react-native/docs/assets/favicon.png"
    />
  ));
