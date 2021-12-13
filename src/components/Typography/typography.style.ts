import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { iParagraph, iTypography } from './typography.interface'

const FONT_FAMILY_BASED_ON_WEIGHT: Record<keyof typeof theme.fontWeight, string> = {
  medium: 'InterMedium',
  regular: 'InterRegular',
  semiBold: 'InterSemiBold'
}

const TextStyled = css<iTypography>`
  font-size: ${({ size, theme }) => theme.fontSize[size || 'MD']};
  line-height: ${({ lineHeight, theme }) => theme.lineHeight[lineHeight || 'Default']};

  color: ${({ color, theme }) => theme.colors[color || 'white']};

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