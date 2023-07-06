import styled, { css } from "styled-components";
import { iButtonNext, iContainerIcon, iItens } from ".";
import { theme } from "../../theme";
import { Button } from "../Button";

export const Container = styled.div<{ fluid?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  ${({ fluid }) =>
    fluid &&
    css`
      width: 100%;
    `}
`;

export const Itens = styled.div<iItens>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  color: ${({ currentPage, index }) =>
    currentPage === index ? theme.colors.white : theme.colors.neutralLow};
  background-color: ${({ currentPage, index }) =>
    currentPage === index ? theme.colors.primaryMedium : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ currentPage, index }) =>
      currentPage === index
        ? theme.colors.primaryMedium
        : theme.colors.primaryLightest};
  }
`;

export const Number = styled.div`
  font-size: 12px;
  line-height: 16px;
`;

export const ButtonPrevNext = styled(Button)<iButtonNext>`
  background-color: ${theme.colors.white}!important;
  border-color: ${theme.colors.neutralLowMedium};
  padding: 0px 0px;
  border-radius: 100%;
  height: 24px;
  width: 24px;

  path {
    stroke: ${theme.colors.neutralLowMedium};
  }

  &:hover {
    background-color: ${theme.colors.primaryMedium}!important;
    border-color: ${theme.colors.primaryMedium};

    path {
      stroke: ${theme.colors.white};
    }
  }

  &:focus:not(:disabled) {
    border-color: ${theme.colors.primaryMedium}!important;
    background-color: ${theme.colors.primaryMedium}!important;

    path {
      stroke: ${theme.colors.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.white}!important;
    border-color: ${theme.colors.neutralLowMedium};
    path {
      stroke: ${theme.colors.neutralLowMedium};
    }
  }

  transition: all 0.2s linear !important;
`;

export const More = styled.div`
  path {
    stroke: ${theme.colors.neutralLow} !important;
  }
`;
