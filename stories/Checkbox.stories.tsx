import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CheckBox } from '../src';

storiesOf('CheckBox', module)
  .add('Checked', () => (
    <CheckBox
      name="checkbox"
      label="Checked"
      value="Checked"
      defaultChecked={true}
      readOnly
    />
  ))
  
  .add('Unchecked', () => (
    <CheckBox
      name="checkbox"
      label="Unchecked"
      value="Unchecked"
      checked={false}
      readOnly
    />
  ));