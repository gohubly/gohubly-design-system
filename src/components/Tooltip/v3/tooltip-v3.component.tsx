import React from "react";
import { iTooltip } from "./tooltip-v3.interface";
import { Wrapper, Pointer, Container, ContainerInfo } from "./tooltip-v3.style";

export const TooltipV3: React.FC<iTooltip> = ({
  children,
  pointerOrientation = 'up',
  pointerPosition = "center",
  size = "LG",
  position = 'down',
  text,
  shadow,
  maxWidth,
  noPadding,
  color = 'neutralLowDark'
}) => {
  const props = {
    pointerOrientation,
    pointerPosition,
    position,
    size,
    shadow,
    text,
    maxWidth,
    noPadding,
    color
  };

  return (
    <Container noPadding={noPadding}>
      <ContainerInfo>{children}</ContainerInfo>
      <Wrapper {...props}>
        <div style={{ position: 'relative'}}>
          <p>{text}</p>
        <Pointer {...props} />
        </div>
        
      </Wrapper>
    </Container>
  );
};
