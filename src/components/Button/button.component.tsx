import React from 'react';

import { iButton } from '.';
import { Button as StyledButton } from './button.style';

export const Button: React.FC<iButton> = ({
  children,
  disabled,
  hierarchy,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
