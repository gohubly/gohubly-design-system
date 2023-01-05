import styled from 'styled-components';
import { iTag, iTagHierarchy } from '.';
import { Theme, themeWithouthInterface as theme } from '../..';
import { defaultCss } from '../../theme/defaultCss';

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  primary: 'primaryLight',
  success: 'successLight',
  alert: 'helperLight',
  warning: 'warningLight',
}

const COLOR_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  primary: 'primaryMedium',
  success: 'successDark',
  alert: 'helperMedium',
  warning: 'warningDark',
}

const HOVER_BACKGROUND_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  primary: 'primary',
  success: 'successMedium',
  alert: 'helperMedium',
  warning: 'warningMedium',
}

const HOVER_COLOR_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  primary: 'white',
  success: 'white',
  alert: 'white',
  warning: 'neutralLowDark',
}

const HOVER_BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  ...HOVER_BACKGROUND_BY_HIERARCHY,
  primary: 'primary'
}

const HOVER_ON_COLOR_BY_HIERARCHY: Record<iTagHierarchy, keyof Theme['colors']> = {
  ...HOVER_COLOR_BY_HIERARCHY,
}

const fontFamilyBasedOnWeight: Record<keyof typeof theme.fontWeight, 'InterLight' | 'InterRegular' | 'InterMedium' | 'InterSemiBold' | 'InterBold'> = {
  300: 'InterLight',
  400: 'InterRegular',
  500: 'InterMedium',
  600: 'InterSemiBold',
  900: 'InterBold',
}

export const Tag = styled.button<iTag>`
  ${defaultCss};

  font-size: 12px;
  line-hieght: 16px;

  font-family: ${fontFamilyBasedOnWeight['600']} !important;

  width: ${({ fluid }) => fluid ? '100%' : 'fit-content'};
  transition: background-color .3s linear;
  padding: 2px 8px;

  color: ${({ hierarchy }) => hierarchy && theme.colors[COLOR_BY_HIERARCHY[hierarchy]]};
  background-color: ${({ hierarchy }) => hierarchy && theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]};

  cursor: ${({ onClick }) => onClick ? 'pointer' : 'initial'};

  border: 0;
  border-radius: ${() => theme.borderRadius.Pill};

  &:hover:not(:disabled) {
    color: ${({ hierarchy, OnColor }) => hierarchy && theme.colors[OnColor ? HOVER_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_COLOR_BY_HIERARCHY[hierarchy]]};
    background-color: ${({ hierarchy, OnColor }) => hierarchy && theme.colors[OnColor ? HOVER_BACKGROUND_ON_COLOR_BY_HIERARCHY[hierarchy] : HOVER_BACKGROUND_BY_HIERARCHY[hierarchy]]};
  }
`;
