import React from "react";

import { iTooltip } from "./tooltip.interface";
import { Wrapper, Pointer, Container, ContainerInfo } from "./tooltip.style";

export const Tooltip: React.FC<iTooltip> = ({
  children,
  pointerOrientation = 'up',
  pointerPosition = "center",
  size = "SM",
  position = 'down',
  text,
  shadow,
  maxWidth,
  padding
}) => {
  const props = {
    pointerOrientation,
    pointerPosition,
    position,
    size,
    shadow,
    text,
    maxWidth,
    padding
  };

  return (
    <Container padding={padding}>
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
