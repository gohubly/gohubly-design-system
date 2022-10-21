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

  z-index: 9999999999999;

  transition: all 0.1s linear;
`;

interface WrapperProps {
  width?: string;
  left?: string;
  minHeight?: string;
  scrollable?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }): string => width || "80%"};
  height: max-content;

  margin: auto;
  margin-left: ${({ left }): string => left ?? "auto"};

  padding: 32px 48px 72px 48px;
  border-radius: 5px;

  ${({ minHeight }): any => css`
    min-height: ${minHeight};
  `}

  background: #fff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.32);

  overflow-y: ${({ scrollable }): string =>
    scrollable ? "scroll" : "initial"};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  border: 1px solid #e8e7ef;
  margin: 15px 0px;
  width: 100%;
`;
