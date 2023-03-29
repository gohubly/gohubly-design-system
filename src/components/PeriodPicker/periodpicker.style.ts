import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { defaultCss } from "../../theme/defaultCss";

const fontFamilyBasedOnWeight: Record<
  keyof typeof theme.fontWeight,
  "InterLight" | "InterRegular" | "InterMedium" | "InterSemiBold" | "InterBold"
> = {
  300: "InterLight",
  400: "InterRegular",
  500: "InterMedium",
  600: "InterSemiBold",
  900: "InterBold",
};

export const Container = styled.div<{ width?: string }>`
  ${defaultCss};

  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  background-color: ${({ theme }) => theme.colors.neutralHigh};

  border: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
  border-radius: 5px;

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

  left: 24px;
  top: 24px;

  // padding: 2px;
  // border: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
  // border-radius: 5px;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.neutralLow};
    }
  }
`;

export const NextButtonContainer = styled(ControlMonthButtonDefault)<{
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  right: 24px;
  top: 24px;

  // padding: 2px;
  // border: 1px solid ${({ theme }) => theme.colors.neutralHighMedium};
  // border-radius: 5px;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.neutralLow};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const MonthsContainer = styled.div<{
  count?: number;
  hasNext?: boolean;
}>`
  display: inline-grid;
  grid-template-columns: ${({ count = 3 }) => `repeat(${count}, 1fr)`};
  flex: 1;
`;

export const Month = styled.div<{ hasNext?: boolean; mobile?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  ${({ hasNext }) =>
    hasNext &&
    css`
      border-right: 1px solid ${theme.colors.neutralHighLight};
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      padding: 24px 10px;
    `}
`;

export const MonthApresentation = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.neutralLowDark};
  text-align: center;
  text-transform: capitalize;
  font-family: ${fontFamilyBasedOnWeight["600"]}!important;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
  width: 100%;
  padding-bottom: 24px;
`;

export const MonthWeeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Week = styled.div<{ mobile?: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 44px);
  justify-content: center;

  ${({ mobile }) =>
    mobile &&
    css`
      grid-template-columns: repeat(7, 40px);
    `}
`;

const DayDefault = styled.div`
  height: 32px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
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
    disabled ? theme.colors.neutralHighMedium : theme.colors.neutralLow};
  position: relative;
  background-color: ${({ isBetween, isSelected, theme }) =>
    isBetween ? "rgba(20, 33, 89, 0.05)" : "transparent"};

  cursor: pointer;

  span {
    font-family: ${fontFamilyBasedOnWeight["600"]}!important;
    z-index: 2;
  }

  ::before {
    content: "";
    height: 32px;
    width: 32px;
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
      }, transparent 0%, transparent 50%, rgba(20, 33, 89, 0.05) 20%)`};

      ::before {
        background: ${({ theme }) => theme.colors.primaryMedium};
      }
    `}

  ${({ isBetween, theme }) =>
    isBetween &&
    css`
      color: ${theme.colors.neutralLow};
    `}
`;

export const Footer = styled.div<{ onlyOne?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  flex-direction: ${({ onlyOne }) => (onlyOne ? "column" : "row")};
  border-top: 1px solid ${({ theme }) => theme.colors.neutralHighLight};
`;

export const HelperContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PeriodCallout = styled.div`
  margin-right: auto;
  font-size: 11px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.neutralLowLight};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  gap: 16px;
  user-select: none;
`;
