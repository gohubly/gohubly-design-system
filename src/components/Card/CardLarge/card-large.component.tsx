import React from 'react';

import { iCardLarge } from '.';
import { CardLarge as StyledCardLarge } from './card-large.style';

export const CardLarge: React.FC<iCardLarge> = ({
  ...props
}) => {
  return (
    <StyledCardLarge
      {...props}
    >
    </StyledCardLarge>
  );
};
