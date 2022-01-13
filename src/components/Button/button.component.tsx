import React from 'react';

import { iButton } from '.';
import { Button as StyledButton, IconStyled } from './button.style';

export const Button: React.FC<iButton> = ({
  children,
  disabled,
  hierarchy = 'primary',
  size = 'MD',
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
      size={size}
      radius={radius}
      {...props}
    >
      {icon && <IconStyled size="SM" iconId={icon} hierarchy={hierarchy} OnColor={props.OnColor} />}
      {children}
    </StyledButton>
  );
};
