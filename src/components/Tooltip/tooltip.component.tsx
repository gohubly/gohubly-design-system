import React from 'react'

import { iTooltip } from './tooltip.interface'
import { Wrapper, Pointer, Container } from './tooltip.style'


export const Tooltip: React.FC<iTooltip> = ({
  children,
  pointerOrientation,
  pointerPosition = 'center',
  size = 'SM',
  position,
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
  }
  return (
    <Container>
      {children}
      <Wrapper {...props}>
        <span>{text}</span>
        <Pointer {...props} />
      </Wrapper>
    </Container>
  )
}
