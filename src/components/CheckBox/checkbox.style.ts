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
    color: ${({ onColor }) => onColor ? theme.colors.white : theme.colors.primary};
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

      &:after {
        background-color: ${() => theme.colors.primaryLightest};
      }

      &:before {
        background-color: ${() => theme.colors.primaryLightest};
      }
    }


  }
  
  &.disabled {
    color: ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
    
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

  &:checked ~ span:after {
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

  &.disabled {
    &:after {
      content: '';
      position: absolute;
      display: none;
  
      left: 50%;
      top: 50%;
  
      width: 6px;
      height: 11px;
  
      border: solid ${({ onColor }) => onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
      border-width: 0 2px 2px 0;

      
  
      transform: rotate(45deg) translate(-50%, -50%);
    }
  }

  

  &:after {
    content: '';
    background: ${({ onColor }) => onColor ? theme.colors.primary : theme.colors.white};
    position: absolute;
    display: none;

    left: 9px;
    top: 3px;

    width: 2px;
    height: 10px;

    border-radius: 16px;

    transform: rotate(45deg);
  }

  &:before {
    content: '';
    background: ${({ onColor }) => onColor ? theme.colors.primary : theme.colors.white};
    position: absolute;
    display: none;

    left: 4.3px;
    top: 6.1px;

    width: 2px;
    height: 6px;

    border-radius: 16px;

    transform: rotate(135deg);
  }


`;

