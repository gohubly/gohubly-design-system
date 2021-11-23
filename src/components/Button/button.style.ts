import styled from 'styled-components';
import { iButton, iButtonHierarchy } from '.';
import { hexToRgb } from '../../helpers/colors';
import theme from '../../theme/theme';

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'primary',
  ghost: 'transparent',
  secondary: 'transparent'
}

const HOVER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'primaryMedium',
  ghost: 'primaryLightest',
  secondary: 'primaryLightest'
}

const COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'white',
  ghost: 'primary',
  secondary: 'primary'
}

const DISABLED_BACKGROUND_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'neutralHighLight',
  ghost: 'transparent',
  secondary: 'neutralHighLight'
}

const BORDER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'transparent',
  ghost: 'transparent',
  secondary: 'primary'
}

const HELPER_BACKGROUND_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'helper',
  ghost: 'transparent',
  secondary: 'transparent'
}

const HELPER_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'white',
  ghost: 'helper',
  secondary: 'helper'
}

const HELPER_BORDER_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'transparent',
  ghost: 'transparent',
  secondary: 'helper'
}

const ICON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  primary: 'primaryLight',
  secondary: 'primary',
  ghost: 'primary',
}

const BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BACKGROUND_COLOR_BY_HIERARCHY,
  primary: 'primaryDark',
  secondary: 'transparent',
}

const COLOR_ON_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...COLOR_BY_HIERARCHY,
  primary: 'white',
  secondary: 'white'
}

const HOVER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...HOVER_COLOR_BY_HIERARCHY,
  primary: 'primaryMedium',
  secondary: 'primaryMedium'
}

const BORDER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BORDER_COLOR_BY_HIERARCHY,
  secondary: 'white'
}

const HOVER_BORDER_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...BORDER_ON_COLOR_BY_HIERARCHY,
  secondary: 'primaryDark'
}

const DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...DISABLED_BACKGROUND_COLOR_BY_HIERARCHY,
  primary: 'primaryMedium',
  secondary: 'primaryMedium'
}

const HELPER_COLOR_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...HELPER_COLOR_BY_HIERARCHY,
  secondary: 'white'
}

const ICON_ON_COLOR_BY_HIERARCHY: Record<iButtonHierarchy, string> = {
  ...ICON_COLOR_BY_HIERARCHY,
  primary: 'primaryLight',
  secondary: 'primaryLight',
}

export const Icon = styled.img<Pick<iButton, 'hierarchy' | 'onColor'>>`
  margin-right: 10px;
  fill: ${({ theme, hierarchy, onColor }) => {
    if (hierarchy === 'primary') {
      return hexToRgb(theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy]], {
        alpha: 0.12,
        asCSS: true
      })
    }

    return onColor ? theme.colors[ICON_ON_COLOR_BY_HIERARCHY[hierarchy as iButtonHierarchy]] : theme.colors[ICON_COLOR_BY_HIERARCHY[hierarchy as iButtonHierarchy]]
  }};
`

export const Button = styled.button<iButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ fluid }) => fluid ? '100%' : 'auto'};

  border: ${({ theme, onColor, hierarchy }) => hierarchy && `1.5px solid ${theme.colors[onColor ? BORDER_ON_COLOR_BY_HIERARCHY[hierarchy] : BORDER_COLOR_BY_HIERARCHY[hierarchy]]}`};
  border-radius: ${({ radius, theme }) => radius && theme.borderRadius[radius]};

  cursor: pointer;
  transition: background-color 0.3s;

  padding: 12px 24px;
  color: ${({ hierarchy, onColor, theme }) => hierarchy && theme.colors[onColor ? COLOR_ON_HIERARCHY[hierarchy] : COLOR_BY_HIERARCHY[hierarchy]]};
  background-color: ${({ hierarchy, onColor, theme }) => hierarchy && theme.colors[onColor ? BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]};

  &:hover:not(:disabled) {
    border: ${({ theme, onColor, hierarchy }) => hierarchy && `1.5px solid ${theme.colors[onColor ? HOVER_BORDER_ON_COLOR_BY_HIERARCHY[hierarchy] : BORDER_COLOR_BY_HIERARCHY[hierarchy]]}`};
    background-color: ${({ hierarchy, onColor, theme }) => hierarchy && theme.colors[onColor ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_COLOR_BY_HIERARCHY[hierarchy]]};
  }

  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.helper};
  }

  &[data-has-error=true] {
    background-color: ${({ hierarchy, theme }) => hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]]};
    border-color: ${({ hierarchy, theme }) => hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]]};
    color: ${({ hierarchy, theme, onColor }) => hierarchy && theme.colors[onColor ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy] : HELPER_COLOR_BY_HIERARCHY[hierarchy]]};

    &:hover:not(:disabled) {
      background-color: ${({ hierarchy, theme }) => hierarchy && theme.colors[HELPER_BACKGROUND_BY_HIERARCHY[hierarchy]]};
    border-color: ${({ hierarchy, theme }) => hierarchy && theme.colors[HELPER_BORDER_BY_HIERARCHY[hierarchy]]};
    color: ${({ hierarchy, theme, onColor }) => hierarchy && theme.colors[onColor ? HELPER_COLOR_ON_COLOR_BY_HIERARCHY[hierarchy] : HELPER_COLOR_BY_HIERARCHY[hierarchy]]};
    }

    & > ${Icon} {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
    background-color: ${({ hierarchy, onColor, theme }) => hierarchy && hexToRgb(
      theme.colors[onColor ? DISABLED_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : DISABLED_BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]], {
        alpha: onColor ? 0.48 : 1,
        asCSS: true
      }
    )};
    color: ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowLight};
  }
`;;