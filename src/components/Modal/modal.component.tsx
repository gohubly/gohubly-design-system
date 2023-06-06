import React, { useRef } from "react";
import { Box, Flex } from "rebass";
import { theme } from "../../theme";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { IModal } from "./modal.interface";
import { Container, Header, Wrapper } from "./modal.style";
import { useClickOutside } from "../../hooks";

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
  fontWeightTitle,
  lineHeightTitle,
  positionTitle,
  lineTitle = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(() => {
    toggleModal()
  }, [ref]);
  
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
        ref={ref}
      >
        <Header padding={padding} isDesktop={isDesktop} lineTitle={lineTitle}>
          <Flex width="calc(100% - 40px)" justifyContent={positionTitle ?? "start"}>
            <Typography
              color={titleColor}
              size={fontSizeTitle ?? "20"}
              lineHeight={lineHeightTitle ?? "28"}
              fontWeight={fontWeightTitle ?? 600}
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
                iconId="close4"
                size="XXS"
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
