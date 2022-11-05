import React from 'react'
import { Box, Flex } from 'rebass';
import { theme } from '../../theme';
import { Icon } from '../Icon'
import { Typography } from '../Typography';
import { IModal } from './modal.interface';
import { Container, Header, Wrapper } from './modal.style';

export const Modal: React.FC<IModal> = ({
  title,
  showCloseIcon,
  width,
  show,
  minHeight,
  toggleModal,
  children,
  backdropPosition,
  scrollable,
}) => {
  return (
    <Container
      show={show}
      width={backdropPosition?.width}
      left={backdropPosition?.left}
    >
      <Wrapper
        minHeight={minHeight}
        width={width || 'auto'}
        className="modal-wrapper"
        scrollable={scrollable}
      >
        <Header>
          <Typography color="primaryMedium" size="SM" lineHeight="MD" fontWeight={600}>
            {title || ''}
          </Typography>

          {showCloseIcon && (
            <Box paddingY="2px" paddingX="4px" style={{ cursor: 'pointer', border: `1px solid ${theme.colors.neutralHighMedium}`, borderRadius: '4px' }}>
              <Icon iconId="close" size="XXXS" onClick={toggleModal} />
            </Box>
          )}
        </Header>
        <Box paddingX="32px" mt="24px">{children}</Box>
      </Wrapper>
    </Container>
  );
};