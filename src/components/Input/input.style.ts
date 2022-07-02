import styled, { css } from 'styled-components';
import { iInput } from '.';
import { Icon, iIcon } from '../Icon';

import { themeWithouthInterface as theme } from '../..';
import { defaultCss } from '../../theme/defaultCss';
import { iIconPaddings, iInputSizes } from './input.interface';

interface iInputDropdownWrapper {
  opened: boolean
}
interface iInputDropdownItem {
  active: boolean
  fontSize?: keyof typeof theme.fontSize 
}
interface iStyledCommonProps extends Partial<iInput> {
  contentLeft?: boolean
  contentRight?: boolean
  Size?: iInputSizes
}
interface iIconRight extends Partial<iIcon> {
  iconRightPadding?: iIconPaddings 
}

interface iIconLeft extends Partial<iIcon> {
  iconLeftPadding?: iIconPaddings 
}

const INPUT_HEIGHT_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: '32px',
  XS: '36px',
  SM: '40px',
  MD: '48px',
}

const PADDING_ICON_BASED_ON_SIZE: Record<iInputSizes, string> = {
  XXS: '12px',
  XS: '14px',
  SM: '15px',
  MD: '16px',
}

const ICON_PADDING_LEFT_OR_RIGHT: Record<iIconPaddings, string> = {
  XXXS: '3px',
  XXS: '6px',
  XS: '8px',
  SM: '10px',
  MD: '12px',
  LG: '14px',
}

export const LabelText = styled.span<iStyledCommonProps>`
  letter-spacing: -0.005em;
  font-size: 14px;

  color: ${({ OnColor }) => OnColor ? theme.colors.neutralHigh : theme.colors.neutralLow};
`

export const HelperText = styled.span<iStyledCommonProps>`
  font-size: 12px;
  font-weight: 500;

  color: ${({ OnColor, onClick }) =>
    onClick ?
      theme.colors.primary
      : OnColor
        ? theme.colors.primaryLight
        : theme.colors.neutralLowMedium};

  &[data-has-error=true] {
    color: ${() => theme.colors.helper};
  }

  text-decoration: ${({ onClick }) => onClick ? 'underline' : 'none'};

  cursor: ${({ onClick }) => onClick ? 'pointer' : 'auto'};
`

export const Input = styled.input<iStyledCommonProps>`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    -webkit-text-fill-color: black!important;
  }

  height: ${({ Size }) => INPUT_HEIGHT_BASED_ON_SIZE[Size || 'MD']};
  width: ${({ fluid }) => fluid ? '100%' : 'auto'};
  background: ${() => theme.colors.neutralHigh};

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || 'XS']};

  border: 1px solid ${() => theme.colors.neutralLowMedium};
  box-sizing: border-box;
  border-radius: 8px;
  letter-spacing: -0.01em;
  font-weight: 300;
  
  color: ${() => theme.colors.neutralLowMedium};

  padding-left: ${({ contentLeft, size }) => contentLeft ? '46px' : PADDING_ICON_BASED_ON_SIZE[size || 'MD']};
  padding-right: ${({ contentRight, size }) => contentRight ? '30px' : PADDING_ICON_BASED_ON_SIZE[size || 'MD']};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ OnColor }) => OnColor && css`
    border-width: 0px;
  `}
  
  &:hover {
    border: 1.5px solid ${({ OnColor }) => OnColor ? theme.colors.primaryDark : theme.colors.primary};
  }

  &:focus {
    border: 1px solid ${() => theme.colors.primary};
  }
 
  &::placeholder {
    // placeholder
  }

  &:disabled {
    border: 1px solid ${() => theme.colors.neutralLowLight};
    background: ${() => theme.colors.neutralHighLight};
  }

  &[data-has-error=true] {
    border: 1px solid ${() => theme.colors.helper};
    
    &:hover, &:focus {
      border: 1px solid ${() => theme.colors.helper};
    }
  }

  transition: all 0.1s linear; 
`

export const Label = styled.label<iStyledCommonProps>`
  ${defaultCss};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${({ fluid }) => fluid ? '100%' : 'auto'};
`;

export const RelativeContainer = styled.div`
  position: relative;
`

const PrefixAndSuffixCommons = css<iStyledCommonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  height: calc(100% - 2px);
  width: 38px;

  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.005em;

  background: ${() => theme.colors.primaryLightest};
  color: ${() => theme.colors.neutralLow};

  &[data-has-error=true] {
    background: ${() => theme.colors.helperLight};
  }
`

export const SuffixText = styled.div`
  ${PrefixAndSuffixCommons};
  
  right: 1px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`

export const PrefixText = styled.div`
  ${PrefixAndSuffixCommons};
  left: 1px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`

export const DropdownWrapper = styled.div<iInputDropdownWrapper>`
  position: absolute;
  top: calc(100% + 8px); 
  left: 0;

  width: 100%;
  max-height: 400px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  
  background: ${() => theme.colors.neutralHigh};

  box-shadow: ${() => theme.shadow.Level4};
  border-radius: 8px;

  opacity: ${({ opened }) => opened ? 1 : 0};
  pointer-events: ${({ opened }) => opened ? 'all' : 'none'};

  transition: opacity 0.1s linear;
  z-index: 9999;
`

export const DropdownItem = styled.div<iInputDropdownItem>`
  padding: calc(${({ fontSize, theme }) => theme.fontSize[fontSize || 'XS']} - 4px) 16px;
  letter-spacing: -0.005em;

  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize || 'XS']};

  background: ${() => theme.colors.white};
  border-left: 1px solid ${() => theme.colors.neutralHighMedium};
  border-right: 1px solid ${() => theme.colors.neutralHighMedium};

  &:first-of-type {
    border-top: 1px solid ${() => theme.colors.neutralHighMedium};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom: 1px solid ${() => theme.colors.neutralHighMedium};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background: ${() => theme.colors.primaryLightest};
  }

  ${({ active }) => active && css`
    background: ${() => theme.colors.primaryLightest};
  `}

  cursor: pointer;
  transition: background 0.1s linear;
`

const IconCss = css<{
  onClick?: () => void,
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};

  // // Accessibility to have a bigger space to click
  // padding: 3px;

  // path {
  //   stroke: ${() => theme.colors.primary};
  // }
`

export const LeftIcon = styled(Icon)<iIconLeft>`
  ${IconCss};
  left: ${({ iconLeftPadding }): string => ICON_PADDING_LEFT_OR_RIGHT[iconLeftPadding || 'XXS']};
`

export const RightIcon = styled(Icon)<iIconRight>`
  ${IconCss};
  right: ${({ iconRightPadding }): string => ICON_PADDING_LEFT_OR_RIGHT[iconRightPadding || 'XXS']};
`