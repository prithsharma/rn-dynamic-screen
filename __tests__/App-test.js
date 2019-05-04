/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'react-native-testing-library';
import App from '../App';

it('renders correctly', () => {
  expect(shallow(<App />).output).toMatchSnapshot();
});
