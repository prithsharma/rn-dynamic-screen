import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Card from './index';

storiesOf('Card', module)
  .add('default', () => (
    <Card
      titleText="Regian Eersel's game"
      imgUri="https://facebook.github.io/react-native/docs/assets/favicon.png"
      descriptionText="Regian Eersel's game"
    />
  ));
