import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    return (
      <Input
        name="hubly"
        label="Label irada"
        placeholder="hubly..."
      />
    );
  })
  .add('Default Error', () => {
    return (
      <Input
        name="hubly"
        label="Label errada"
        placeholder="hubly..."
        error
      />
    );
  })
  .add('Default onColor', () => {
    return (
      <Input
        onColor
        name="hubly disabled"
        helperText="Your helper text"
        label="Label irada"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('Disabled', () => {
    return (
      <Input
        disabled
        name="hubly disabled"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('Helper text', () => {
    return (
      <Input
        name="hubly disabled"
        helperText="Your helper text"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('With icon left', () => {
    return (
      <Input
        name="hubly disabled"
        helperText="Your helper text"
        iconLeft="TODO"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('With icon right', () => {
    return (
      <Input
        name="hubly disabled"
        helperText="Your helper text"
        iconRight="TODO"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('With prefix', () => {
    return (
      <Input
        name="hubly disabled"
        helperText="Your helper text"
        prefix="R$"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('With suffix', () => {
    return (
      <Input
        name="hubly disabled"
        helperText="Your helper text"
        suffix="kg"
        placeholder="hubly disabled..."
      />
    );
  })
  .add('Error with props', () => {
    return (
      <Input
        name="hubly"
        label="Label errada"
        placeholder="hubly..."
        helperText="Teste de erro"
        prefix="R$"
        error
      />
    );
  })
  .add('With dropdown', () => {
    return (
      <Input
        name="hubly"
        label="Label pro dropdown!"
        dropdown={[
          {
            value: 'value-label-1'
          },
          {
            value: 'value-label-2'
          },
          {
            value: 'value-label-3',
            tag: {
              background: 'warning',
              label: 'Tag'
            }
          },
        ]}
      />
    );
  })