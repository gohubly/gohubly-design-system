import styled, { css } from 'styled-components'
import { iParagraph, iTypography } from './typography.interface'
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss'

const TextStyled = css<iTypography>`
  ${defaultCss};

  font-size: ${({ size }) => theme.fontSize[size || 'MD']};
  line-height: ${({ lineHeight }) => theme.lineHeight[lineHeight || 'Default']};

  color: ${({ color }) => theme.colors[color || 'white']};
`

export const Paragraph = styled.p<iParagraph>`
  ${TextStyled}

  ${({ noMargin }) => noMargin && css`
    margin: 0px;
  `}
`

export const Span = styled.span`
  ${TextStyled}
`