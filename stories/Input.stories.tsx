import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="hubly"
        placeholder="hubly..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="hubly"
        placeholder="hubly..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    );
  });
