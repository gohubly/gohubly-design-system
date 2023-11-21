import styled, { css } from 'styled-components'
import { iParagraph, iTypography } from './typography.interface'
import { hexToRgb, themeWithouthInterface as theme } from '../..'
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

  font-family: ${({ fontWeight }) => fontFamilyBasedOnWeight[fontWeight || '600']} !important;

  font-size: ${({ size }) => theme.fontSize[size || 'MD']};
  // font-weight: ${({ fontWeight }) => theme.fontWeight[fontWeight || 'MD']}; 
  line-height: ${({ lineHeight }) => theme.lineHeight[lineHeight || 'Default']};

  color: ${({ color, colorOpacity }) => colorOpacity ? hexToRgb(theme.colors[color || 'white'], { asCSS: true, alpha: colorOpacity }) : theme.colors[color || 'white']};

  text-align: ${({ textAlign }) => textAlign ?? 'initial'};
  text-decoration: ${({ textDecoration }) => textDecoration};
`

export const Paragraph = styled.p<Omit<iParagraph, 'as'>>`
  ${TextStyled}

  ${({ noMargin }) => noMargin && css`
    margin: 0px;
  `}
`

export const Span = styled.span`
  ${TextStyled}
`