import styled, { css } from "styled-components";
import { defaultCss } from "../../theme/defaultCss";

type iDirectionTypes = "horizontal" | "vertical";

export const Wrapper = styled.div<{ direction: iDirectionTypes }>`
  ${defaultCss};
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ direction }) => (direction === "vertical" ? "20px" : "0px")};
  position: relative;

  ${({ direction, theme }) =>
    direction === "horizontal" &&
    css`
      ::after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #E5E5E5;
        position: absolute;
        bottom: 0px;
      }
    `}
`;

export const TabItem = styled.div<{ selected: boolean; isDesktop: boolean; direction: iDirectionTypes }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryMedium : theme.colors.neutralLow};
  font-size: ${({ isDesktop }) => (isDesktop ? "16px" : "14px")};
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.005em;
  padding: ${({ direction }) => (direction === "vertical" ? "0 0 16px 0" : "0 16px 16px 16px")};
  cursor: pointer;
  z-index: 1;
  border-bottom: 1.5px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primaryMedium : "transparent"};

  ${({ selected }) =>
    !selected &&
    css`
      :hover {
        color: ${({ theme }) => theme.colors.neutralLowDark};
      }
    `}
`;
