import React from 'react';

import { iTag } from '.';
import { Tag as StyledTag } from './tag.style';

export const Tag: React.FC<iTag> = ({
  children,
  ...props
}) => {
  return (
    <StyledTag
      {...props}
    >
      {children}
    </StyledTag>
  );
};
