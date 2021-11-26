import React from 'react'

import { iLink } from '.'
import { Link as StyledLink, Wrapper } from './link.style'

export const Link: React.FC<iLink> = ({ children, onClick, OnColor, disabled }) => {
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

      <img src="http://piq.codeus.net/static/media/userpics/piq_45983_400x400.png" width="20px" />
    </Wrapper>
  )
}
