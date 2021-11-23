import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button hierarchy="primary">Default</Button>)
  .add('Secondary', () => <Button hierarchy="secondary">Secondary</Button>)
  .add('Ghost', () => <Button hierarchy="ghost">Ghost</Button>)
  .add('Disabled', () => <Button disabled>Default Disabled</Button>)
  .add('Fluid Button', () => <Button fluid>This is a fluid button</Button>)
  .add('Primary With Error', () => <Button hierarchy="primary" error>Primary With Error</Button>)
  .add('Secondary With Error', () => <Button hierarchy="secondary" error>Secondary With Error</Button>)
  .add('Ghost With Error', () => <Button hierarchy="ghost" error>Ghost With Error</Button>)
  .add('Primary With Icon', () => <Button hierarchy="primary" icon="ico">Primary With Icon</Button>)
  .add('Secondary With Icon', () => <Button hierarchy="secondary" icon="ico">Secondary With Icon</Button>)
  .add('Ghost With Icon', () => <Button hierarchy="ghost" icon="ico">Ghost With Icon</Button>)
  .add('Secondary Disabled', () => <Button hierarchy="secondary" disabled>Secondary Disabled</Button>)
  .add('Ghost Disabled', () => <Button hierarchy="ghost" disabled>Ghost Disabled</Button>)
  .add('Default On Color', () => <Button hierarchy="primary" onColor>Default</Button>)
  .add('Secondary On Color', () => <Button hierarchy="secondary" onColor>Secondary</Button>)
  .add('Default On Color With Error', () => <Button hierarchy="primary" onColor error>Default With Error</Button>)
  .add('Secondary On Color With Error', () => <Button hierarchy="secondary" onColor error>Secondary With Error</Button>)
  .add('Primary On Color With Icon', () => <Button hierarchy="primary" icon="ico" onColor>Primary On Color With Icon</Button>)
  .add('Secondary On Color With Icon', () => <Button hierarchy="secondary" icon="ico" onColor>Secondary On Color With Icon</Button>)
  .add('Default Disabled On Color', () => <Button hierarchy="primary" onColor disabled>Default Disabled</Button>)
  .add('Secondary Disabled On Color', () => <Button hierarchy="secondary" onColor disabled>Secondary Disabled</Button>);

  
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};