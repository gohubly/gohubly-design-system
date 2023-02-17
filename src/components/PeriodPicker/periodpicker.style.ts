import styled, { css } from "styled-components";
import { defaultCss } from "../../theme/defaultCss";

export const Container = styled.div<{ width?: string }>`
  ${defaultCss};

  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  background-color: ${({ theme }) => theme.colors.neutralHigh};

  border: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
  border-radius: ${({ theme }) => theme.borderRadius.SM};

  position: relative;
`;

const ControlMonthButtonDefault = styled.div`
  position: absolute;
  padding: 2px;
  top: 18px;
  z-index: 1;
  cursor: pointer;
`;

export const PreviousButtonContainer = styled(ControlMonthButtonDefault)`
  display: flex;
  align-items: center;
  justify-content: center;

  left: 22px;

  padding: 2px;

  border: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
  border-radius: 5px;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.neutralLow};
    }
  }
`;

export const NextButtonContainer = styled(ControlMonthButtonDefault)<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  right: 22px;

  padding: 2px;

  border: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
  border-radius: 5px;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.neutralLow};
    }
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `}
`;

export const MonthsContainer = styled.div<{ count?: number }>`
  display: inline-grid;
  grid-template-columns: ${({ count = 3 }) => `repeat(${count}, 1fr)`};
  gap: 24px;
  margin: 32px 24px;
  flex: 1;
`;

export const Month = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MonthApresentation = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.neutralLowDark};
  text-align: center;
  text-transform: capitalize;

  user-select: none;
`;

export const MonthWeeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 41px);
  justify-content: center;
`;

const DayDefault = styled.div`
  height: 28px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayName = styled(DayDefault)`
  color: ${({ theme }) => theme.colors.neutralLowLight};

  user-select: none;
`;

export const DayNumber = styled(DayDefault)<{
  isBetween?: boolean;
  isSelected?: boolean;
  isInitialDate?: boolean;
  isTotalSelected?: boolean;
  disabled?: boolean;
}>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutralLowLight : theme.colors.neutralLow};
  position: relative;
  background-color: ${({ isBetween, isSelected, theme }) =>
    isBetween ? theme.colors.primaryLightest : "transparent"};

  cursor: pointer;

  span {
    z-index: 2;
  }

  ::before {
    content: "";
    height: 28px;
    width: 28px;
    position: absolute;
    border-radius: 4px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  ${({ isSelected, theme, isInitialDate, isTotalSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.neutralHigh};
      background: ${isTotalSelected &&
      `linear-gradient(${
        isInitialDate ? "90deg" : "270deg"
      }, transparent 0%, transparent 50%, ${
        theme.colors.primaryLightest
      } 20%)`};

      ::before {
        background: ${({ theme }) => theme.colors.primaryMedium};
      }
    `}

  ${({ isBetween, theme }) =>
    isBetween &&
    css`
      color: ${theme.colors.primaryMedium};
    `}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
`;

export const HelperContainer = styled.div`
  margin-right: auto;

  user-select: none;
`;

export const PeriodCallout = styled.div`
  margin-right: auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutralLow};
`;
