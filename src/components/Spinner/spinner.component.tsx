import React from 'react'
import { iSpinner } from '.'
import { SpinnerStyled, Wrapper } from './spinner.style'

export const Spinner: React.FC<iSpinner> = ({ onColor, size = '48px', className }) => {
  return (
    <Wrapper className={className} >
      <SpinnerStyled onColor={onColor} size={size}/>
    </Wrapper>
  )
}