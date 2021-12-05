import styled from 'styled-components'
import { iLink } from '.'

export const Link = styled.a<iLink>`
  text-decoration: underline;

  &:visited {
    color: inherit;
  }
`

const LINK_COLOR = {
  default: 'primary',
  hover: 'neutralLowDark',
  disabled: 'neutralLowLight',
}

const LINK_ON_COLOR = {
  default: 'neutralHigh',
  hover: 'warningMedium',
  disabled: 'neutralLowLight',
}

export const Wrapper = styled.div<iLink>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  
  transition: color 0.1s linear;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};

  ${Link} {
    color: ${({ theme, OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.default : LINK_COLOR.default]};
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
  }

  &:hover {
    ${Link} {
      color: ${({ theme, OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover]};
    }

    path {
      stroke: ${({ theme, OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.hover : LINK_COLOR.hover]};
    }
  }

  &[data-disabled=true] {
    ${Link} {
      color: ${({ theme, OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled]};
    }

    path {
      stroke: ${({ theme, OnColor }) => theme.colors[OnColor ? LINK_ON_COLOR.disabled : LINK_COLOR.disabled]};
    }
  }
`
