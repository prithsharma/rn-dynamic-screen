import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Header from './index';

storiesOf('Header', module)
  .add('default', () => (
    <Header
      imgUri="http://res.cloudinary.com/onefc/image/upload/v1554878097/events/Bangkok-2019-05-10/upcoming"
    />
  ));
