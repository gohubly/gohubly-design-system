import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tag } from '../src';

storiesOf('Tag', module)
  .add('Default', () => <Tag hierarchy="primary">Primary Tag</Tag>)
  .add('Warning', () => <Tag hierarchy="warning">Warning Tag</Tag>)
  .add('Alert', () => <Tag hierarchy="alert">Alert Tag</Tag>)
  .add('Success', () => <Tag hierarchy="success">Success Tag</Tag>)
  .add('Fluid Tag', () => <Tag hierarchy="primary" fluid>Primary Tag</Tag>)
  .add('Default On Color', () => <Tag hierarchy="primary" onColor>Primary Tag On Color</Tag>)
  .add('Warning On Color', () => <Tag hierarchy="warning" onColor>Warning Tag On Color</Tag>)
  .add('Alert On Color', () => <Tag hierarchy="alert" onColor>Alert Tag On Color</Tag>)
  .add('Success On Color', () => <Tag hierarchy="success" onColor>Success Tag On Color</Tag>);
