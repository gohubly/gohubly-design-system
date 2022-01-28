import React from 'react';

import { iDropdown } from './dropdown.interface';
import { Dropdown as StyledDropdown, Arrow } from './dropdown.style';

export const Dropdown: React.FC<iDropdown> = ({ 
  children,
  direction = 'bottom',
  width,
  opened
}) => {
  return (
    <>
      <Arrow direction={direction} opened={opened}/>
      <StyledDropdown direction={direction} width={width} opened={opened}>
        {children}
      </StyledDropdown>
    </>
  );
};