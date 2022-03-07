import styled from 'styled-components';
import { theme } from '../..';
import { defaultCss } from '../../theme/defaultCss';

export const Input = styled.input`
  width: 52px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;

  border-radius: 8px;
  background: ${() => theme.colors.white};
  border: 1px solid ${() => theme.colors.neutralLowLight};

  transition: border 0.1s linear;
  
  &[data-has-error=true] {
    border: 1px solid ${() => theme.colors.helper};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  gap: 4px;
  box-sizing: border-box;
`

export const Container = styled.div`
  ${defaultCss};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`