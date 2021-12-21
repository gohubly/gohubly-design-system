import styled from 'styled-components';
import { theme } from '../..';

export const Input = styled.input`
  width: 40px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`