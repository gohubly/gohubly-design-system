import React from 'react';
import { storiesOf } from '@storybook/react';

import { Link } from '../src';

storiesOf('Link', module)
  .add('Default', () => <Link>Action</Link>)
  .add('With onClick', () => <Link onClick={() => undefined}>Action</Link>)
  .add('With onColor', () => <Link onColor onClick={() => undefined}>Action</Link>)
  .add('Disabled', () => <Link onClick={() => undefined} disabled>Action Disabled</Link>);
