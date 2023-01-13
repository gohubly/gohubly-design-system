import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div<{ isDesktop?: boolean }>`
  padding: 16px;

  display: flex;
  align-items: stretch;

  max-width: ${({ isDesktop }) => (isDesktop ? "400px" : "344px")};

  outline: 4px solid rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  background-color: white;

  gap: ${({ isDesktop }) => (isDesktop ? "20px" : "16px")};
`;

export const CountContainer = styled.div<{ alert?: boolean }>`
  height: 100%;

  padding: ${({ alert }) => (!alert ? "16px" : "24px 16px")};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: ${({ alert }) =>
    alert ? theme.colors.helperLight : theme.colors.primaryLight};
`;

export const IconContainer = styled.div`
  padding: 4px;
  cursor: pointer;

  display: flex;

  justify-content: center;
  align-items: center;

  align-self: flex-start;

  border: 1px solid ${theme.colors.neutralHighMedium};
  border-radius: 4px;

  div {
    height: 10px;
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;
