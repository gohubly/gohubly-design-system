import styled, { css } from "styled-components";
import { HeaderSpacing, IModal } from "./modal.interface";

interface ContainerProps {
  show: boolean;
  width?: string;
  left?: string;
}

interface WrapperProps {
  width?: string;
  left?: string;
  minHeight?: string;
  scrollable?: boolean;
  isDesktop?: boolean;
  position?: string;
  show: boolean;
}

const HEADER_PADDING: Record<HeaderSpacing, string> = {
  XS: "16px",
  SM: "20px 24px",
  MD: "24px",
  LG: "34px 48px",
  Desktop: '32px',
};

export const Container = styled.div<ContainerProps>`
  pointer-events: ${({ show }): string => (show ? "all" : "none")};
  opacity: ${({ show }): number => (show ? 1 : 0)};
  position: fixed;
  left: ${({ left }): string => left ?? "0"};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }): string | number => width ?? "100vw"};
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99999999;
  transition: all 0.2s linear;
  cursor: pointer;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }): string => width || "80%"};
  height: max-content;
  margin: auto;
  margin-left: ${({ left }): string => left ?? "auto"};
  border-radius: 5px;
  ${({ minHeight }): any => css`
    min-height: ${minHeight};
  `}
  background: #fff;
  outline: 8px solid rgba(0, 0, 0, 0.05);
  overflow-y: ${({ scrollable }): string => (scrollable ? "auto" : "initial")};
  cursor: auto;


  ${({ position }) => {
    if (position === "top") {
      return css`
        position: absolute;
        border-radius: 0 0 8px 8px;
        top: 0;
      `;
    }

    if (position === "right") {
      return css`
        position: absolute;
        border-radius: 8px 0 0 8px;
        right: 0;
      `;
    }

    if (position === "bottom") {
      return css`
        position: absolute;
        border-radius: 8px 8px 0 0;
        bottom: 0;
      `;
    }

    if (position === "left") {
      return css`
        position: absolute;
        border-radius: 0 8px 8px 0;
        left: 0;
      `;
    }
  }};
`;

export const Header = styled.div<{
  isDesktop?: boolean;
  padding?: HeaderSpacing;
  lineTitle?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isDesktop, padding = "LG" }): string =>
    isDesktop ? HEADER_PADDING[padding] : "20px 24px"};

  ${({ lineTitle, theme }) => {
    if (!lineTitle) {
      return css`
        border-bottom: none;
      `;
    } else {
      return css`
        border-bottom: 1px solid ${theme.colors.neutralHighLight};
      `;
    }
  }};
`;

