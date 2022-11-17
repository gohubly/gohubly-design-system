import styled from "styled-components";
import { theme } from "../../theme";
import { defaultCss } from "../../theme/defaultCss";
import { iPaymentCardFrequency } from "./payment-frequency-card.interface";

export const Wrapper = styled.div<
  Pick<iPaymentCardFrequency, "selected" | "isDesktop">
>`
  ${defaultCss};
  width: 100%;

  position: relative;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: ${({ isDesktop }) => (isDesktop ? "center" : "start")};

  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};

  padding: ${({ isDesktop }) => (isDesktop ? "16px 16px 16px 24px" : "16px")};

  border: 1px solid
    ${({ selected }) =>
      selected ? theme.colors.primaryMedium : theme.colors.neutralHighLight};
  border-radius: 5px;

  background-color: ${({ selected }) =>
    selected ? theme.colors.primaryLightest : "transparent"};

  transition: all 0.5s;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const RadioButtonContainer = styled.div<
  Pick<iPaymentCardFrequency, "isDesktop">
>`
  ${defaultCss};
  align-items: center;
  width: ${({ isDesktop }) => (isDesktop ? "auto" : "100%")};
  padding-bottom: ${({ isDesktop }) => (isDesktop ? "0px" : "16px")};
  border-bottom: ${({ isDesktop }) =>
    isDesktop ? "0px" : "1px solid rgba(0, 0, 0, 0.1)"};
`;

export const Container = styled.div<Pick<iPaymentCardFrequency, "isDesktop">>`
  ${defaultCss};
  gap: ${({ isDesktop }) => (isDesktop ? "0.5px" : "3px")};
  margin-top: ${({ isDesktop }) => (isDesktop ? "0" : "16px")};
  flex-direction: column;
  justify-content: center;
  justify-content: ${({ isDesktop }) => (isDesktop ? "end" : "start")};
  text-align: ${({ isDesktop }) => (isDesktop ? "end" : "start")};
`;

export const DiscountFlag = styled.div<
  Pick<iPaymentCardFrequency, "isDesktop">
>`
  display: inline-block;
  justify-content: ${({ isDesktop }) => (isDesktop ? "end" : "start")};
  padding: 2px 8px;
  background-color: ${theme.colors.helperMedium};
  box-shadow: 4px 4px 12px -32px rgba(240, 52, 96, 0.08);

  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: white;

  border-radius: 2px;
  margin-top: 8px;
`;
