import styled from 'styled-components';
import { iCardSmall } from '.';

const BORDER_COLOR = {
  normal: 'neutralHighMedium',
  hover: 'transparent',
  active: 'primary',
}

const ON_COLOR_BORDER = {
  normal: 'transparent',
  hover: 'transparent',
  active: 'primaryDark',
}

const BACKGROUND_COLOR = {
  normal: 'transparent',
  hover: 'primaryLightest',
  active: 'transparent',
}

const ON_COLOR_BACKGROUND = {
  normal: 'primaryLightest',
  hover: 'white',
  active: 'white',
}

export const CardSmall = styled.div<iCardSmall>`
  display: flex;
  align-items: center;

  border: ${({ theme, OnColor }) => `2px solid ${theme.colors[OnColor ? ON_COLOR_BORDER['normal'] : BORDER_COLOR['normal']]}`};
  border-radius: ${({ theme }) => theme.borderRadius.SM};

  background-color: ${({ theme, OnColor }) => theme.colors[OnColor ? ON_COLOR_BACKGROUND['normal'] : BACKGROUND_COLOR['normal']]};

  box-shadow: ${({ theme }) => theme.shadow.Level2};

  padding: 16px;
  transition: border-color .2s, background-color .2s;

  &:hover {
    border-color: ${({ theme, OnColor }) => theme.colors[OnColor ? ON_COLOR_BORDER['hover'] : BORDER_COLOR['hover']]};
    background-color: ${({ theme, OnColor }) => theme.colors[OnColor ? ON_COLOR_BACKGROUND['hover'] : BACKGROUND_COLOR['hover']]};
  }
  
  &:active {
    border-color: ${({ theme, OnColor }) => theme.colors[OnColor ? ON_COLOR_BORDER['active'] : BORDER_COLOR['active']]};
    background-color: ${({ theme, OnColor }) => theme.colors[OnColor ? ON_COLOR_BACKGROUND['active'] : BACKGROUND_COLOR['active']]};
  }
`

export const ContentContainer = styled.div`
  margin-left: 16px;
`