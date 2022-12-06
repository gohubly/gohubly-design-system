import styled from "styled-components";
import { iDrawerProps } from "./drawer.types";

export const Overlay = styled.div<Pick<iDrawerProps, 'show' | 'zIndex'>>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background-color: rgba(0, 0, 0, .3);

  z-index: ${({ zIndex }) => zIndex};
  opacity: ${({ show }) => show ? '1' : '0'};
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};

  transition: opacity .5s, visibility .5s;
`

export const Content = styled.div<Pick<iDrawerProps, 'minWidth' | 'width' | 'position' | 'zIndex'>>`
  position: fixed;

  height: 100%;
  width: ${({ width = 'auto' }) => width};
  min-width: ${({ minWidth = '300px' }) => minWidth};

  ${({ position = 'right' }) => position === 'left' ? 'left: 0' : 'right: 0'};

  background-color: white;

  z-index: ${({ zIndex }) => zIndex * 2};
`