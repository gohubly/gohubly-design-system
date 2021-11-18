import React from 'react';

import { iInput } from './input.interface';
import { Label } from './input.style';

export const Input: React.FC<iInput> = ({
  name,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Label htmlFor={name}>
      <input
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Label>
  );
};