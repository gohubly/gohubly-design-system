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
  padding,
  toggleModal,
  titleColor = "primaryMedium",
  children,
  backdropPosition,
  scrollable,
  isDesktop = true,
  position,
  fontSizeTitle,
  lineHeightTitle,
  positionTitle,
  lineTitle = true,
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
        <Header padding={padding} isDesktop={isDesktop} lineTitle={lineTitle}>
          <Flex width="calc(100% - 40px)" justifyContent={positionTitle ?? "start"}>
            <Typography
              color={titleColor}
              size={fontSizeTitle ?? "20"}
              lineHeight={lineHeightTitle ?? "28"}
              fontWeight={600}
              textAlign={positionTitle ?? "initial"}
            >
              {title || ""}
            </Typography>
          </Flex>

          {showCloseIcon && (
            <Box
              padding="3px"
              alignContent="center"
              style={{
                cursor: "pointer",
                border: `1px solid ${theme.colors.neutralHighMedium}`,
                borderRadius: "4px",
              }}
            >
              <Icon
                iconId="close3"
                size="XS"
                onClick={toggleModal}
                strokeWidth={1.5}
              />
            </Box>
          )}
        </Header>

        <Box>{children}</Box>
      </Wrapper>
    </Container>
  );
};
