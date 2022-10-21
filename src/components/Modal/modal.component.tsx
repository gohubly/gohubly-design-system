import React from 'react'
import { Box, Flex } from 'rebass';
import { Icon } from '../Icon'
import { Typography } from '../Typography';
import { IModal } from './modal.interface';
import { Container, Header, Wrapper } from './modal.style';

const Modal: React.FC<IModal> = ({
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
      onClick={toggleModal}
    >
      <Wrapper
        minHeight={minHeight}
        width={width || 'auto'}
        className="modal-wrapper"
        scrollable={scrollable}
      >
        <Header>
          <Typography color="neutralLowDark" size="MD" lineHeight="MD" fontWeight={600}>
            {title || ''}
          </Typography>

          {showCloseIcon && (
            <Flex mt='4px' style={{ cursor: 'pointer' }}>
              <Icon iconId="close" size="XS" onClick={toggleModal} />
            </Flex>
          )}
        </Header>
        <Box pt={2}>{children}</Box>
      </Wrapper>
    </Container>
  );
};

export default Modal;