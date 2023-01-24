import styled, { css } from "styled-components";

interface ContainerProps {
  show: boolean;
  width?: string;
  left?: string;
}
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
`;

interface WrapperProps {
  width?: string;
  left?: string;
  minHeight?: string;
  scrollable?: boolean;
  isDesktop?: boolean;
  position?: string;
  show: boolean;
}

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
  overflow-y: ${({ scrollable }): string =>
    scrollable ? "auto" : "initial"};

  ${({ position}) => {
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

export const Header = styled.div<{ isDesktop?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ isDesktop }): string => (isDesktop ? "34px 48px" : "20px 24px")};
  border-bottom: 1px solid
    ${({ theme }): string => theme.colors.neutralHighLight};
`;

export const Hr = styled.hr`
  border: 1px solid #e8e7ef;
  margin: 15px 0px;
  width: 100%;
`;
