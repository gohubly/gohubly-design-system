import styled from 'styled-components'
import { iLink } from '.'

export const Link = styled.a<iLink>`
  text-decoration: underline;

  &:visited {
    color: inherit;
  }
`

export const Wrapper = styled.div<iLink>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  
  transition: color 0.1s linear;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};

  ${Link} {
    color: ${({ theme, onColor }) => onColor ? theme.colors.neutralHigh : theme.colors.primary};
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
  }

  &:hover, &:hover {
    ${Link} {
      color: ${({ theme, onColor }) => onColor ? theme.colors.warningMedium : theme.colors.neutralLowDark};
    }

    svg {
      fill: ${({ theme, onColor }) => onColor ? theme.colors.warningMedium : theme.colors.neutralLowDark};
    }
  }

  &[data-disabled=true] {
    ${Link} {
      color: ${({ theme, onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowLight};
    }

    svg {
      fill: ${({ theme, onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowLight};
    }
  }
`
