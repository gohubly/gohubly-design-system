import React from 'react';

import { iCardSmall } from '.';
import { Avatar, Typography } from '../..';
import { Paragraph } from '../../Typography/typography.style';
import { CardSmall as StyledCardSmall, ContentContainer } from './card-small.style';

export const CardSmall: React.FC<iCardSmall> = ({
  children,
  OnColor,
  avatar,
  rightComponent,
  ...props
}) => {
  return (
    <StyledCardSmall
      {...props}
      OnColor={OnColor}
    >
      <Avatar image={avatar} OnColor />
      <ContentContainer>
        { props.content && (
          <Typography color='neutralLowDark' size='XS' fontWeight='regular'>
            { props.title }
          </Typography>
        ) }

        { props.content && (
          <Paragraph color='neutralLowMedium' size='XXS' as="p" fontWeight='regular' noMargin>
            { props.content }
          </Paragraph>
          ) }

      </ContentContainer>
      
      {rightComponent && (
        <ContentContainer>
          { rightComponent }
        </ContentContainer>
      )}
    </StyledCardSmall>
  );
};
