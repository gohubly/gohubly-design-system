import styled, { keyframes } from 'styled-components'
import Loading from '../Icon/icons/loading'

const loadingSpinAnimation = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`

export const SpinnerStyled = styled(Loading)<{ onColor: boolean }>`
  transition-property: transform;
  animation: ${loadingSpinAnimation} 1s linear infinite;

  path {
    fill: ${({ onColor, theme }) => onColor ? theme.colors.white : theme.colors.primary};
  }
`