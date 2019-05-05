/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'react-native-testing-library';
import Header from './index';

it('Header renders correctly', () => {
  expect(shallow(
    <Header />,
  ).output).toMatchSnapshot();
});
