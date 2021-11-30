import React from 'react'

import { iLink } from '.'
import { Icon } from '../Icon'
import { Link as StyledLink, Wrapper } from './link.style'

export const Link: React.FC<iLink> = ({ children, onClick, OnColor, disabled, icon }) => {
  const handleClick = () => {
    if (disabled) return
    onClick && onClick()
  }

  return (
    <Wrapper
      onClick={handleClick}
      OnColor={OnColor}
      data-disabled={disabled}
    >
      <StyledLink>
        {children}
      </StyledLink>

      <Icon iconId={icon} OnColor={OnColor} />
    </Wrapper>
  )
}
