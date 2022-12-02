import styled from "styled-components";
import { theme } from "../..";
import { defaultCss } from "../../theme/defaultCss";
import {
  iTooltip,
  iTooltipWithoutChildren,
  iTooltipPointerOrientation,
  iTooltipPointerPosition,
  iTooltipSizes,
} from "./tooltip.interface";

const PADDING_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "4px 8px",
  LG: "8px 12px",
};

const FONT_SIZE_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "12px",
  LG: "14px",
};

const LINE_HEIGHT_BY_SIZE: Record<iTooltipSizes, string> = {
  SM: "16px",
  LG: "20px",
};

const WRAPPER_POSITION_BY_POSITION: Record<
  iTooltipPointerOrientation,
  Record<iTooltipSizes, string>
> = {
  up: {
    SM: "bottom: calc(100% + 10px); left: -9px;",
    LG: "bottom: calc(100% + 12px); left: -9px;"
  },
  down: {
    SM: "top: calc(100% + 10px); left: -9px;",
    LG: "top: calc(100% + 12px); left: -9px;"
  },
  left: {
    SM: "left: calc(100% + 12px); top: -5px;",
    LG: "left: calc(100% + 16px); top: -8px;"
  },
  right: {
    SM: "right: calc(100% + 12px); top: -5px;",
    LG: "right: calc(100% + 16px); top: -8px;"
  },
};

const POINTER_SIZE_BY_SIZE = {
  SM: "8px",
  LG: "10px",
};

const POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_SM: Record<
  iTooltipPointerOrientation,
  Record<iTooltipPointerPosition, string>
> = {
  up: {
    left: `top: -7px; left: 4px; transform: rotate(45deg)`,
    center: `top: -7px; left: 50%; transform: translateX(-50%) rotate(45deg)`,
    right: `top: -7px; right: 8px; transform: rotate(45deg)`,
  },
  down: {
    left: `bottom: -8px; left: 4px; transform: rotate(45deg)`,
    center: `bottom: -10px; left: 50%; transform: rotate(45deg) translateX(-50%);`,
    right: `bottom: -8px; right: 4px; transform: rotate(45deg)`,
  },
  left: {
    left: `right: -10px; top: 8px; transform: rotate(45deg)`,
    center: `right: -8px; top: 40%; transform: rotate(45deg) translateY(-50%);`,
    right: `right: -10px; bottom: 8px; transform: rotate(45deg)`,
  },
  right: {
    left: `left: -10.5px; top: 8px; transform: rotate(45deg)`,
    center: `left: -14.5px; top: 40%; transform: rotate(45deg) translateY(-50%);`,
    right: `left: -10.5px; bottom: 8px; transform: rotate(45deg)`,
  },
};

const POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_LG: Record<
  iTooltipPointerOrientation,
  Record<iTooltipPointerPosition, string>
> = {
  up: {
    left: `top: -12px; transform: rotate(45deg)`,
    center: `top: -12px; left: 50%; transform: translateX(-50%) rotate(45deg)`,
    right: `top: -12px; right: 4px; transform: rotate(45deg)`,
  },
  down: {
    left: `bottom: -12px; transform: rotate(45deg)`,
    center: `bottom: -16px; left: 50%; transform: rotate(45deg) translateX(-50%);`,
    right: `bottom: -12px; right: 4px; transform: rotate(45deg)`,
  },
  left: {
    left: `right: -16px; top: 4px; transform: rotate(45deg)`,
    center: `right: -13px; top: 40%; transform: rotate(45deg) translateY(-50%);`,
    right: `right: -16px; bottom: 4px; transform: rotate(45deg)`,
  },
  right: {
    left: `left: -17.5px; top: 4px; transform: rotate(45deg)`,
    center: `left: -20.5px; top: 40%; transform: rotate(45deg) translateY(-50%);`,
    right: `left: -17.5px; bottom: 4px; transform: rotate(45deg)`,
  },
};

export const Container = styled.div`
  ${defaultCss};
  position: relative;
`;

export const ContainerInfo = styled.div`
  ${defaultCss};

  position: relative;
  cursor: pointer;

  &:hover + div {
     {
      display: block;
      user-select: all;
      z-index: 2;
    }
  }
`;

export const Wrapper = styled.div<iTooltip>`
  position: absolute;
  
  max-width: ${({ width }) => (width ?? "max-content")};
  width: max-content;

  box-sizing: border-box;

  ${({ position, size }) =>
    WRAPPER_POSITION_BY_POSITION[position as iTooltipPointerOrientation][size as iTooltipSizes]}

  background: ${() => theme.colors.neutralLowDark};
  padding: ${({ size }) => PADDING_BY_SIZE[size as iTooltipSizes]};

  display: none;
  user-select: none;

  border-radius: 8px;
  box-shadow: ${({ shadow }) => (shadow ? theme.shadow.Level2 : "")};

  span {
    font-weight: 500;
    font-size: ${({ size }) => FONT_SIZE_BY_SIZE[size as iTooltipSizes]};
    line-height: ${({ size }) => LINE_HEIGHT_BY_SIZE[size as iTooltipSizes]};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

    color: ${() => theme.colors.neutralHigh};
  }

  transition: opacity 0.1s linear;
`;

export const Pointer = styled.div<iTooltipWithoutChildren>`
  position: absolute;

  width: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};
  height: ${({ size }) => POINTER_SIZE_BY_SIZE[size as iTooltipSizes]};

  ${({ pointerOrientation, pointerPosition, size }) =>
    size === "LG"
      ? POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_LG[
          pointerOrientation as iTooltipPointerOrientation
        ][pointerPosition as iTooltipPointerPosition]
      : POINTER_ABSOLUTE_POSITION_BY_ORIENTATION_POSITION_SIZE_SM[
          pointerOrientation as iTooltipPointerOrientation
        ][pointerPosition as iTooltipPointerPosition]};

  background: ${() => theme.colors.neutralLowDark};
  border-radius: 1px;
`;
