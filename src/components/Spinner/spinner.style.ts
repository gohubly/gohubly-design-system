import styled, { keyframes } from 'styled-components'
import Loading from '../Icon/icons/loading'

const loadingSpinAnimation = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Wrapper = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`

export const SpinnerStyled = styled(Loading)<{ onColor: boolean, size?: string }>`
  transition-property: transform;
  animation: ${loadingSpinAnimation} 1s linear infinite;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  path {
    fill: ${({ onColor, theme }) => onColor ? theme.colors.white : theme.colors.primary};
  }
`