import styled, { css } from 'styled-components'
import { iParagraph, iTypography } from './typography.interface'
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss'

const FONT_FAMILY_BASED_ON_WEIGHT: Record<keyof typeof theme.fontWeight, string> = {
  medium: 'InterMedium',
  regular: 'InterRegular',
  semiBold: 'InterSemiBold'
}

const TextStyled = css<iTypography>`
  ${defaultCss};

  font-size: ${({ size }) => theme.fontSize[size || 'MD']};
  line-height: ${({ lineHeight }) => theme.lineHeight[lineHeight || 'Default']};

  color: ${({ color }) => theme.colors[color || 'white']};

  font-family: ${({ fontWeight }) => FONT_FAMILY_BASED_ON_WEIGHT[fontWeight || 'medium']};
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