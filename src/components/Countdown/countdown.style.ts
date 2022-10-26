import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  padding: 16px;

  display: flex;
  align-items: stretch;

  max-width: 400px;
  
  border: 4px solid rgba(0, 0, 0, .05);
  border-radius: 5px;

  background-color: white;
  
  gap: 20px;
`

export const CountContainer = styled.div<{ alert?: boolean }>`
  flex: 0 0 112px;
  height: ${({ alert }) => !alert ? '112px' : '128px'};
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: ${({ alert }) => alert ? theme.colors.helperLight : theme.colors.primaryLight};
`

export const IconContainer = styled.div`
  padding: 6px;
  cursor: pointer;

  display: flex;

  justify-content: center;
  align-items: center;

  align-self: flex-start;

  border: 1px solid ${theme.colors.neutralHighMedium};
  border-radius: 4px;
`