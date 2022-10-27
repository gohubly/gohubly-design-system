import styled from 'styled-components'
import { iLink } from '.'
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss'

export const Link = styled.a<iLink>`
  &:visited {
    color: inherit;
  }
`
const LINK_COLOR = {
  default: 'primaryMedium',
  hover: 'neutralLowDark',
  disabled: 'neutralLowLight',
}

const LINK_ON_COLOR = {
  default: 'neutralHigh',
  hover: 'warningMedium',
  disabled: 'neutralLowLight',
}

export const Wrapper = styled.div<iLink>`
  ${defaultCss};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  
  transition: color 0.1s linear;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};

  ${Link} {
    font-size: ${({ size }) => theme.fontSize[size || 'XS']};
    color: ${({ OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.default : LINK_COLOR.default]};
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
    text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
    text-underline-position: ${({ underline }) => underline ? 'under' : 'none'};
  }

  &:hover {
    ${Link} {
      color: ${({ OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover]};
      text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
      text-underline-position: ${({ underline }) => underline ? 'under' : 'none'};
    }

    path {
      stroke: ${({ OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover]};
      text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
      text-underline-position: ${({ underline }) => underline ? 'under' : 'none'};
    }
  }

  &[data-disabled=true] {
    ${Link} {
      color: ${({ OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled]};
      text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
      text-underline-position: ${({ underline }) => underline ? 'under' : 'none'};
    }

    path {
      stroke: ${({ OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled]};
      text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
      text-underline-position: ${({ underline }) => underline ? 'under' : 'none'};
    }
  }
`
