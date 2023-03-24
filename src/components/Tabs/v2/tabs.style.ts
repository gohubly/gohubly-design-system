import styled, { css } from "styled-components";
import { defaultCss } from "../../../theme/defaultCss";

type iDirectionTypes = "horizontal" | "vertical";

export const Wrapper = styled.div<{ direction: iDirectionTypes }>`
  ${defaultCss};
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ direction }) => (direction === "vertical" ? "8px" : "0px")};
  position: relative;

  ${({ direction, theme }) =>
    direction === "horizontal" &&
    css`
      ::after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #e5e5e5;
        position: absolute;
        bottom: 0px;
      }
    `}
`;

export const TabItem = styled.div<{
  selected: boolean;
  isDesktop: boolean;
  direction: iDirectionTypes;
}>`
  width: max-content;
  heigth: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryMedium : theme.colors.neutralLow};
  font-size: ${({ isDesktop }) => (isDesktop ? "16px" : "14px")};
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.005em;
  padding: ${({ isDesktop }) => (isDesktop ? "16px 32px" : "12px 24px")};
  border-bottom: 1.5px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primaryMedium : "transparent"};

  cursor: pointer;
  z-index: 1;
  transition: all 0.5s;

  ${({ selected, theme }) => {
    if (selected) {
      return css`
        path,
        circle,
        img,
        rect {
          fill: transparent;
          stroke: ${theme.colors.primaryMedium};
        }
        background: rgba(20, 33, 89, 0.05);
      `;
    }

    if (!selected) {
      return css`
        :hover {
          border-bottom: 1.5px solid ${theme.colors.primaryMedium};
        }
      `;
    }
  }};
`;
