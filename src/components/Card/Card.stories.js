import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Card from './index';

storiesOf('Card', module)
  .add('default', () => <Card>Primary Card</Card>);
