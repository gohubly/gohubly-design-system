import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Disabled', () => <Button disabled>Default Disabled</Button>);
