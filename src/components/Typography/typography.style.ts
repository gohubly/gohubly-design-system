import styled, { css } from 'styled-components'
import { iParagraph, iTypography } from './typography.interface'
import { themeWithouthInterface as theme } from '../..'
import { defaultCss } from '../../theme/defaultCss'

const fontFamilyBasedOnWeight: Record<keyof typeof theme.fontWeight, 'InterLight' | 'InterRegular' | 'InterMedium' | 'InterSemiBold' | 'InterBold'> = {
  300: 'InterLight',
  400: 'InterRegular',
  500: 'InterMedium',
  600: 'InterSemiBold',
  900: 'InterBold',
}

const TextStyled = css<iTypography>`
  ${defaultCss};

  font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '600']};

  font-size: ${({ size }) => theme.fontSize[size || 'MD']};
  /* font-weight: ${({ fontWeight }) => theme.fontWeight[fontWeight || 'MD']}; */
  line-height: ${({ lineHeight }) => theme.lineHeight[lineHeight || 'Default']};

  color: ${({ color }) => theme.colors[color || 'white']};

  text-align: ${({ textAlign }) => textAlign ?? 'initial'};
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