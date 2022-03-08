import styled from 'styled-components';
import { defaultCss } from '../../theme/defaultCss';
import theme from '../../theme/theme';

import { ILabelCheckBox, IBoxCheckBox, IMarkCheckBox } from './checkbox.interface';

export const Label = styled.label<ILabelCheckBox>`
  ${defaultCss};

  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  line-height: 16px;
  font-size: 14px;
  height: 20px;

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  user-select: none;

  color: ${({ onColor }) => onColor ? theme.colors.neutralHigh : theme.colors.neutralLow};
  
  &:hover {
    color: ${({ onColor }) => onColor ? theme.colors.white : theme.colors.neutralLowDark};
  }

  &:hover span,
  input:checked ~ span {
    background-color: ${({ onColor }) => onColor ? theme.colors.white : theme.colors.primary};
    border: 2px solid ${({ onColor }) => onColor ? theme.colors.white : theme.colors.primary};
  }

  &:hover {
    span {
      background-color: ${() => theme.colors.primaryLightest};
      border: 2px solid ${({ onColor }) => onColor ? theme.colors.white : theme.colors.neutralLow};
    }
  }
  
  &.disabled {
    color: ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};

    path {
      stroke: ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium}!important;
    }
    
    &:hover span,
    input:checked ~ span {
      background-color: ${({ onColor }) => onColor ? 'transparent' : theme.colors.white};
      border: 2px solid ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
      cursor: not-allowed;
    }
  }
`;

export const Box = styled.input.attrs({
  type: 'checkbox',
}) <IBoxCheckBox>`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span {
    display: block;
  }
`;

export const Mark = styled.span<IMarkCheckBox>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid ${({ onColor }) => onColor ? theme.colors.white : theme.colors.neutralLow};
  transition: 180ms ease-in-out;
  
  &.disabled {
    border: 2px solid ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }
`;