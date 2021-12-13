import React from 'react'
import { iAvatar } from '.'
import { Wrapper, Badge } from './avatar.style'

export const Avatar: React.FC<iAvatar> = ({
  badge,
  name,
  image,
  OnColor,
  size = 'MD'
}) => {
  const props = {
    badge,
    image,
    OnColor,
    size,
  }

  return (
    <Wrapper {...props}>
      {name && name.charAt(0).toUpperCase()}
      {badge && <Badge />}
    </Wrapper>
  )
}
