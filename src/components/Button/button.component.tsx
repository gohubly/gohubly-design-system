import React from 'react';

import { iButton } from '.';
import { Button as StyledButton, Icon } from './button.style';

export const Button: React.FC<iButton> = ({
  children,
  disabled,
  hierarchy = 'primary',
  radius = 'SM',
  error,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      hierarchy={hierarchy}
      data-has-error={error}
      {...props}
      >
      {icon && <Icon src="https://icon-library.com/images/20x20-icon/20x20-icon-27.jpg" width="20px" height="20px"/>}
      {children}
    </StyledButton>
  );
};
