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
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="hubly"
        icon="alert"
        placeholder="hubly..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
