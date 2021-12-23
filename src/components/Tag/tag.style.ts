import styled from 'styled-components';
import { iTag, iTagHierarchy } from '.';
import { themeWithouthInterface as theme } from '../..';
import { defaultCss } from '../../theme/defaultCss';

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  primary: 'primaryLightest',
  success: 'successLight',
  alert: 'helperLight',
  warning: 'warningLight',
}

const COLOR_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  primary: 'neutralLowDark',
  success: 'neutralLowDark',
  alert: 'neutralLowDark',
  warning: 'neutralLowDark',
}

const HOVER_BACKGROUND_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  primary: 'primary',
  success: 'successMedium',
  alert: 'helperMedium',
  warning: 'warningMedium',
}

const HOVER_COLOR_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  ...COLOR_BY_HIERARCHY,
  primary: 'white',
  success: 'white',
  alert: 'white'
}

const HOVER_BACKGROUND_ON_COLOR_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  ...HOVER_BACKGROUND_BY_HIERARCHY,
  primary: 'primaryLight'
}

const HOVER_ON_COLOR_BY_HIERARCHY: Record<iTagHierarchy, string> = {
  ...HOVER_COLOR_BY_HIERARCHY,
  primary: 'neutralLowDark'
}

export const Tag = styled.button<iTag>`
  ${defaultCss};

  width: ${({ fluid }) => fluid ? '100%' : 'fit-content'};
  transition: background-color .3s linear;
  padding: 4px 8px;

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
