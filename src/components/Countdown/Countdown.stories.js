import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Countdown from './index';

storiesOf('Card', module)
  .add('default', () => (
    <Countdown targetTimestamp="2019-05-10T11:30:00+00:00" />
  ));
