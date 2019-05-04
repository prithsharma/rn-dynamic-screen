/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'react-native-testing-library';
import ArticleCard from './ArticleCard';
import EventCard from './EventCard';
import EventCardMinimised from './EventCardMinimised';
import VideoCard from './VideoCard';

it('ArticleCard renders correctly', () => {
  expect(shallow(
    <ArticleCard
      titleText="Regian Eersel's game"
      imgUri="https://facebook.github.io/react-native/docs/assets/favicon.png"
      timestampStr="2018-05-11T07:30:00+00:00"
      descriptionText="Regian Eersel's game"
    />,
  ).output).toMatchSnapshot();
});

it('EventCard renders correctly', () => {
  expect(shallow(
    <EventCard
      imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
      timestampStr="2018-05-11T07:30:00+00:00"
      showCountdown={false}
    />,
  ).output).toMatchSnapshot();
});

it('EventCardMinimised renders correctly', () => {
  expect(shallow(
    <EventCardMinimised
      timestampStr="2018-05-11T07:30:00+00:00"
      showCountdown={false}
    />,
  ).output).toMatchSnapshot();
});

it('VideoCard renders correctly', () => {
  expect(shallow(
    <VideoCard
      titleText="Regian Eersel's game"
      timestampStr="2018-05-11T07:30:00+00:00"
      imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
    />,
  ).output).toMatchSnapshot();
});
