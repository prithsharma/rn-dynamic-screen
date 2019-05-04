import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Button from './index';

storiesOf('Button', module)
  .add('default', () => <Button>Primary Button</Button>);
