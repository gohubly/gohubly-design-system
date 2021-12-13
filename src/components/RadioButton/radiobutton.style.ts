import styled from 'styled-components';
import theme from '../../theme/theme';

import { ILabelRadio, IBoxRadio, IMarkRadio } from './radiobutton.interface';

export const Label = styled.label<ILabelRadio>`
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

  color: ${({ onColor }) =>  onColor ? theme.colors.neutralHigh : theme.colors.neutralLowDark};
  
  &:hover {
    color: ${({ onColor }) => onColor ? theme.colors.white : theme.colors.primary};
  }

  &:hover span,
  input:checked ~ span {
    background-color: ${({ onColor }) =>  onColor ? theme.colors.white : theme.colors.primary};
    border: 2px solid ${({ onColor }) =>  onColor ? theme.colors.white : theme.colors.primary};
  }

  &:hover {
    span {
      background-color: ${() => theme.colors.primaryLightest};
      border: 2px solid ${({ onColor }) =>  onColor ? theme.colors.white : theme.colors.neutralLowDark};
    }
  }
  
  &.disabled {
    color: ${({ onColor }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
    
    &:hover {
      span {
        background-color: ${({ onColor }) =>  onColor ? 'transparent' : theme.colors.white};
        border: 2px solid ${({ onColor }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
        cursor: not-allowed;
      }
    }
  }
`;
  
export const Box = styled.input.attrs({
  type: 'radio',
})<IBoxRadio>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<IMarkRadio>`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${({ onColor }) =>  onColor ? theme.colors.white : theme.colors.neutralLowDark};

  &.disabled {
    border: 2px solid ${({ onColor }) =>  onColor ? theme.colors.primaryLight : theme.colors.neutralLowMedium};
  }

  transition: 180ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: none;

    top: 4px;
    left: 4px;

    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ onColor }) =>  onColor ? theme.colors.primary : theme.colors.white};

    border: solid ${({ onColor }) =>  onColor ? theme.colors.primary : theme.colors.white};
    border-width: 0 2px 2px 0;
  }
`;

export const Spacer = styled.div`
margin-bottom: 10px;
`

