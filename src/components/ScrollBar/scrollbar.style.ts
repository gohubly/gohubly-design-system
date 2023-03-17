import styled from "styled-components";
import { Theme, themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import { IScrollBar } from "./scrollbar.interface";

export const ScrollBar = styled.div<IScrollBar>`
  ${defaultCss};

  overflow-x: auto;
  overflow-y: auto;

  width: ${({ maxWidth }): string => maxWidth};
  height: ${({ maxHeigth }): string => maxHeigth};

  transition: all 0.1s linear;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background: white;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }): string => theme.colors.white};
    margin: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #C7D1D7;
    border-radius: 20px;
    border: 4px solid ${({ theme }): string => theme.colors.white};
  }

  &::-webkit-scrollbar-corner {
    background: ${({ theme }): string => theme.colors.white};
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;
