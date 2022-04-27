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
      {avatar && <Avatar name={avatar} image={avatar} OnColor />}
      <ContentContainer>
        {props.title && (
          <Typography color='neutralLowDark' size='XS' fontWeight={400}>
            {props.title}
          </Typography>
        )}

        {props.content && (
          <Paragraph color='neutralLowMedium' size='XXS' as="p" fontWeight={400} noMargin>
            {props.content}
          </Paragraph>
        )}

      </ContentContainer>

      {rightComponent && (
        <ContentContainer>
          {rightComponent}
        </ContentContainer>
      )}
    </StyledCardSmall>
  );
};
