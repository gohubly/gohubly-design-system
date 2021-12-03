import styled from 'styled-components';
import theme from '../../theme/theme';

import { ILabel, IBox, IMark } from './checkbox.interface';

export const Label = styled.label<ILabel>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 28px;
  line-height: 16px;
  font-size: 14px;

  padding-top: 2px;
  padding-bottom: 2px;

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  user-select: none;

  color: ${({ onColor, theme }) =>  onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark};
  
  &:hover {
    color: ${({ theme, onColor }) => onColor ? theme.colors.white : theme.colors.primary};
  }

  &:hover span,
  input:checked ~ span {
    background-color: ${({ onColor, theme }) =>  onColor ? theme.colors.white : theme.colors.primary};
    border: 2px solid ${({ onColor, theme }) =>  onColor ? theme.colors.white : theme.colors.primary};
  }

  &:hover {
    span {
      background-color: ${theme.colors.primaryLightest};
      border: 2px solid ${({ onColor, theme }) =>  onColor ? theme.colors.white : theme.colors.neutralLowDark};
    }
  }
  
  &.disabled {
    color: ${({ onColor, theme }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }

  &:hover
  input:disabled ~ span {
    background-color: transparent;
    border: 2px solid ${({ onColor, theme }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
    cursor: not-allowed
  }

`;
  
export const Box = styled.input.attrs({
  type: 'checkbox',
})<IBox>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<IMark>`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid ${({ onColor, theme }) =>  onColor ? theme.colors.white : theme.colors.neutralLowDark};

  &.disabled {
    border: 2px solid ${({ onColor, theme }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }

  transition: 180ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: none;

    left: 5px;
    top: 2px;

    width: 4px;
    height: 8px;

    border: solid ${({ onColor, theme }) =>  onColor ? theme.colors.primary : theme.colors.white};
    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
  }
`;
