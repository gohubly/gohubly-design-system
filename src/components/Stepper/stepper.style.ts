import styled, { css } from "styled-components";
import { iStepperHierarchy } from ".";
import { themeWithouthInterface as theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";

const BACKGROUND_COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: "primary",
  ghost: "transparent",
  secondary: "primaryLightest",
  white: "white",
};

const COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: "white",
  ghost: "primary",
  secondary: "primary",
  white: "white",
};

const BORDER_COLOR_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: "transparent",
  ghost: "primary",
  secondary: "transparent",
  white: "white",
};

const BORDER_COLOR_MINI_BY_HIERARCHY: Record<iStepperHierarchy, string> = {
  primary: "transparent",
  ghost: "primary",
  secondary: "primary",
  white: "white",
};

const PROGRESS_BAR_WIDTH_BY_STATE: Record<string, string> = {
  completed: "100%",
  active: "50%",
  initial: "0%",
};

export const Container = styled.div`
  ${defaultCss};

  position: relative;

  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div<{
  active: boolean;
  completed: boolean;
  isNextStepActive: boolean;
}>`
  position: relative;
  top: 50%;
  left: 0%;
  width: 124px;
  margin: 0 6px;
  height: 3px;
  flex: 1;
  z-index: 0;
  border-radius: 100px;
  background: ${() => theme.colors.primaryLightest};

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: ${({ completed, active }) =>
      PROGRESS_BAR_WIDTH_BY_STATE[
        completed ? "completed" : active ? "active" : "initial"
      ]};

    border-radius: 100px;
    background-color: ${() => theme.colors.primary};
  }
`;

export const StepWrapper = styled.div<{
  hierarchy: iStepperHierarchy;
  hasProgressBar: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  border-radius: 100px;
  border: 2px solid
    ${({ hierarchy }) => theme.colors[BORDER_COLOR_BY_HIERARCHY[hierarchy]]};

  background-color: ${({ hierarchy }) =>
    theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]};

  margin: 0px ${({ hasProgressBar }) => (!hasProgressBar ? "8px" : "0px")};

  & > span {
    color: ${({ hierarchy }) => theme.colors[COLOR_BY_HIERARCHY[hierarchy]]};
  }

  & path {
    stroke: ${({ hierarchy }) => theme.colors[COLOR_BY_HIERARCHY[hierarchy]]};
  }

  z-index: 1;
`;

export const StepMiniWrapper = styled.div<{
  hierarchy: iStepperHierarchy;
  isCurrent: boolean;
  isWhite: boolean;
}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  background-color: ${({ hierarchy, isCurrent }) =>
    isCurrent
      ? theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]
      : theme.colors.neutralHighDark};
  border: 1px solid
    ${({ hierarchy, isCurrent }) =>
      isCurrent
        ? theme.colors[BORDER_COLOR_MINI_BY_HIERARCHY[hierarchy]]
        : theme.colors.neutralHighDark};

  &:not(:last-child) {
    margin-right: 8px;
  }

  ${({ isWhite, hierarchy, isCurrent }) => {
    if (isWhite) {
      return css`
      cursor: pointer;
        background-color: ${
          isCurrent
            ? theme.colors[BACKGROUND_COLOR_BY_HIERARCHY[hierarchy]]
            : "background: rgba(255, 255, 255, 0.3)"
        }; 
        background-o  
        border: 1px solid
          ${
            isCurrent
              ? theme.colors[BORDER_COLOR_MINI_BY_HIERARCHY[hierarchy]]
              : "background: rgba(255, 255, 255, 0.3)"
          };
      `;
    }
  }};
`;
