import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../src';

storiesOf('Avatar', module)
  .add('Default', () => <Avatar name='Lucas' />)
  .add('Default with Badge', () => <Avatar name='Lucas' badge />)
  .add('onColor', () => <Avatar onColor name="Lucas" />)
  .add('Image LG', () => <Avatar size="LG" image='https://www.wikileaf.com/thestash/wp-content/uploads/2020/09/screen-shot-2014-06-20-at-1-11-15-pm.png' />)
