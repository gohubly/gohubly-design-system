import React from 'react'
import { iSpinner } from '.'
import { SpinnerStyled, Wrapper } from './spinner.style'

export const Spinner: React.FC<iSpinner> = ({ onColor, size = '48px' }) => {
  return (
    <Wrapper>
      <SpinnerStyled width={size} height={size} onColor={onColor}/>
    </Wrapper>
  )
}