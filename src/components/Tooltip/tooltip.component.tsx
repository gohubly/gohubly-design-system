import React from "react";

import { iTooltip } from "./tooltip.interface";
import { Wrapper, Pointer, Container, ContainerInfo } from "./tooltip.style";

export const Tooltip: React.FC<iTooltip> = ({
  children,
  pointerOrientation = 'up',
  pointerPosition = "center",
  size = "LG",
  position = 'down',
  text,
  shadow,
  maxWidth,
  noPadding
}) => {
  const props = {
    pointerOrientation,
    pointerPosition,
    position,
    size,
    shadow,
    text,
    maxWidth,
    noPadding
  };

  return (
    <Container noPadding={noPadding}>
      <ContainerInfo>{children}</ContainerInfo>
      <Wrapper {...props}>
        <div style={{ position: 'relative'}}>
          <span>{text}</span>
        <Pointer {...props} />
        </div>
        
      </Wrapper>
    </Container>
  );
};
