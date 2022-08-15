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
}) => {
  const props = {
    pointerOrientation,
    pointerPosition,
    position,
    size,
    shadow,
    text,
  };
  return (
    <Container>
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
