import React from "react";
import { Box, Flex } from "rebass";
import { theme } from "../../theme";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { IModal } from "./modal.interface";
import { Container, Header, Wrapper } from "./modal.style";

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
  isDesktop = true,
  position,
  fontSizeTitle
}) => {
  return (
    <Container
      show={show}
      width={backdropPosition?.width}
      left={backdropPosition?.left}
    >
      <Wrapper
        minHeight={minHeight}
        width={width || "auto"}
        className="modal-wrapper"
        scrollable={scrollable}
        isDesktop={isDesktop}
        position={position}
        show={show}
      >
        <Header isDesktop={isDesktop}>
          <Typography
            color="primaryMedium"
            size={fontSizeTitle ?? "SM"}
            lineHeight="MD"
            fontWeight={600}
          >
            {title || ""}
          </Typography>

          {showCloseIcon && (
            <Box
              padding="5px"
              alignContent="center"
              style={{
                cursor: "pointer",
                border: `1px solid ${theme.colors.neutralHighMedium}`,
                borderRadius: "4px",
              }}
            >
              <Icon iconId="close" size="XXXS" onClick={toggleModal} />
            </Box>
          )}
        </Header>
        <Box
        // paddingX={isDesktop ? "32px" : "20px"}
        // mt={isDesktop ? "24px" : "20px"}
        >
          {children}
        </Box>
      </Wrapper>
    </Container>
  );
};
