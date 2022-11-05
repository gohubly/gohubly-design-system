import styled from "styled-components";
import { Theme, themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import { ISliderBar } from "./sliderbar.interface";

export const SliderBar = styled.div<ISliderBar>`
  ${defaultCss};

  overflow-x: auto;
  overflow-y: auto;

  width: ${({ maxWidth }): string => maxWidth};
  height: ${({ maxHeigth }): string => maxHeigth};

  transition: all 0.1s linear;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: white;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }): string => theme.colors.neutralHighLight};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }): string => theme.colors.neutralLowLight};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-corner {
    background: white;
  }
`;
